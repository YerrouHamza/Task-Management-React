import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../types";
import { Trash2 } from "lucide-react";

export default function TaskDelete({task}: {task: TaskType}) {
    const {deleteTask} = useTasks();
  
    return (
      <TableCell colSpan={1} className="text-right">
        <Button
          variant="destructive"
          size="icon"
          aria-label={`Delete the task ${task.todo}`}
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 /> 
        </Button>
      </TableCell>
    )
  }