import { memo, useState } from "react";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";

import { TaskType } from "../type";
import TaskStatusToggle from "./taskStatusToggle";
import TaskDelete from "./Taskdelete";
import TaskEditField from "./taskEditField";


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
      <TaskStatusToggle task={task} />
      <TaskDelete task={task} />
    </TableRow>
  );
}

export default memo(TaskRow)

