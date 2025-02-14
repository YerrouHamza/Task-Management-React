import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { Task } from "../type";
import { Trash2 } from "lucide-react";

export default function DeleteTask({taskId}: {taskId: Task["id"]}) {
    const {deleteTask} = useTasks();
  
    return (
      <TableCell colSpan={1} className="text-right">
        <Button
          variant="destructive"
          size="icon"
          onClick={() => deleteTask(taskId)}
        >
          <Trash2 /> 
        </Button>
      </TableCell>
    )
  }