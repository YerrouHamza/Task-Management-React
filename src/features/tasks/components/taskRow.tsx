import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Task } from "../type";
import { CheckboxField } from "@/components/checkboxField";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTasks } from "../store/useTasksStore";
import { cn } from "@/lib/utils";


interface TaskRowProps {
  task: Task;
}

export function TaskRow({ task }: TaskRowProps) {
  const { deleteTask, updateTask, toggleTaskStatus } = useTasks();
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState(task.todo);

  return (
    <TableRow className={cn(task.status === 'completed' && 'bg-green-50 hover:bg-green-100')}>
      <TableCell 
        colSpan={2} 
        className="max-w-[30%] hover:underline hover:cursor-pointer"
        onClick={() => setEditing(true)}
      >
        {editing ? (
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onBlur={() => {
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateTask(task.id, { todo });
                setEditing(false);
              }
            }}
            autoFocus
          />
        ) : (
          <span>{task.todo}</span>
        )}
      </TableCell>
      <TableCell className="text-right px-4">
          <CheckboxField 
            id={task.id.toLocaleString()}
            label={task.status}
            defaultChecked={task.status === "completed"} 
            onCheckedChange={() => toggleTaskStatus(task.id)}
          />
      </TableCell>
      <TableCell className="text-right px-4">
          <Button
            variant="destructive"
            size="icon"
            onClick={() => deleteTask(task.id)}
          >
            <Trash2 /> 
          </Button>
      </TableCell>
    </TableRow>
  );
}