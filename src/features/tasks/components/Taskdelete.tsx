import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../type";
import { Trash2 } from "lucide-react";

export default function TaskDelete({taskId}: {taskId: TaskType["id"]}) {
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