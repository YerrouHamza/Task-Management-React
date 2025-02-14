import { useState } from "react";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useTasks } from "../store/useTasksStore";

import { Task } from "../type";
import StatusToggleTask from "./statusToggleTask";
import DeleteTask from "./deleteTask";


interface TaskRowProps {
  task: Task;
}

export function TaskRow({ task }: TaskRowProps) {
  const [editing, setEditing] = useState(false);

  return (
    <TableRow className={cn(task.status === 'completed' && 'bg-green-50 hover:bg-green-100')}>
      <TableCell 
        colSpan={2} 
        className="hover:underline hover:cursor-pointer"
        onClick={() => setEditing(true)}
      >
        {editing 
          ? <TaskEditField task={task} setEditing={setEditing}/> 
          : <span>{task.todo}</span>
        }
      </TableCell>
      <StatusToggleTask taskId={task.id} status={task.status} />
      <DeleteTask taskId={task.id} />
    </TableRow>
  );
}


const TaskEditField = ({task, setEditing}: {
  task: Task,
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
        if (e.key === "Enter") handleUpdateTask
      }}
      autoFocus
    />
  )
}

