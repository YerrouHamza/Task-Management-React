import { memo, useState } from "react";

import { cn } from "@/lib/utils";
import { TableCell, TableRow } from "@/components/ui/table";

import { TaskType } from "../types";
import TaskStatusToggle from "./taskStatusToggle";
import TaskDelete from "./Taskdelete";
import TaskEditField from "./taskEditField";

type TaskRowProps = TaskType

export default memo(function TaskRow({ id, status, todo }: TaskRowProps) {
  const [editing, setEditing] = useState(false);

  return (
    <TableRow className={cn(status === 'completed' && 'bg-green-50 hover:bg-green-100')}>
      <TableCell
        tabIndex={0}
        colSpan={2} 
        className="hover:underline hover:cursor-pointer min-w-[80%] xl:min-w-[800px] max-w-[800px] p-0.5"
        onClick={() => setEditing(true)}
        onFocus={() => setEditing(true)}
      >
        {editing 
          ? <TaskEditField id={id} todo={todo} setEditing={setEditing} />
          : <div className="px-4 py-3">{todo}</div>
        }
      </TableCell>
      <TaskStatusToggle id={id} status={status} todo={todo} />
      <TaskDelete id={id} todo={todo} />
    </TableRow>
  );
})

