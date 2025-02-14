import { memo } from "react";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../types";
import { Trash2 } from "lucide-react";

interface TaskDeleteProps extends Pick<TaskType, 'id' | 'todo'>{}

export default memo(function TaskDelete({ id, todo }: TaskDeleteProps) {
    const deleteTask = useTasks((state) => state.deleteTask);

    return (
      <TableCell colSpan={1} className="text-right">
        <Button
          variant="destructive"
          size="icon"
          aria-label={`Delete the task ${todo}`}
          onClick={() => deleteTask(id)}
        >
          <Trash2 /> 
        </Button>
      </TableCell>
    )
})