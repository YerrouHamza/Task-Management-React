import { CheckboxField } from "@/components/checkboxField";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../type";
import { memo } from "react";

export default memo(function TaskStatusToggle ({taskId, status}: {
    taskId: TaskType["id"],
    status: TaskType["status"]
  }) {
    const { toggleTaskStatus } = useTasks();
  
    return (
      <TableCell colSpan={1}>
        <CheckboxField 
          id={taskId.toLocaleString()}
          label={status}
          defaultChecked={status === "completed"}
          onCheckedChange={() => toggleTaskStatus(taskId)}
        />
      </TableCell>
    )
})