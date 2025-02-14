import { memo, useState } from "react";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useTasks } from "../store/useTasksStore";

import { TaskType } from "../type";
import TaskStatusToggle from "./taskStatusToggle";
import TaskDelete from "./Taskdelete";


interface TaskRowProps {
  task: TaskType;
}

function TaskRow({ task }: TaskRowProps) {
  const [editing, setEditing] = useState(false);

  return (
    <TableRow className={cn(task.status === 'completed' && 'bg-green-50 hover:bg-green-100')}>
      <TableCell 
        tabIndex={0}
        colSpan={2} 
        className="hover:underline hover:cursor-pointer"
        onClick={() => setEditing(true)}
        onFocus={() => setEditing(true)}
      >
        {editing 
          ? <TaskEditField task={task} setEditing={setEditing}/> 
          : <span>{task.todo}</span>
        }
      </TableCell>
      <TaskStatusToggle taskId={task.id} status={task.status} />
      <TaskDelete taskId={task.id} />
    </TableRow>
  );
}


const TaskEditField = ({task, setEditing}: {
  task: TaskType,
  setEditing: (value: boolean) => void
}) => {
  const [todo, setTodo] = useState(task.todo);
  const { updateTask } = useTasks();

  const handleUpdateTask = () => {
    updateTask(task.id, { todo });
    setEditing(false);
  }

  return (
    <Input
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onBlur={() => handleUpdateTask()}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleUpdateTask()
      }}
      autoFocus
    />
  )
}

export default memo(TaskRow)

