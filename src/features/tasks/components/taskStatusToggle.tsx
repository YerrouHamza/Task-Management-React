import { CheckboxField } from "@/components/checkboxField";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../types";
import { memo } from "react";

type TaskStatusToggleType = TaskType

export default memo(function TaskStatusToggle ({id, status, todo}: TaskStatusToggleType) {
    const { toggleTaskStatus } = useTasks();
  
    return (
      <TableCell colSpan={1}>
        <CheckboxField 
          id={id.toString()}
          label={status}
          aria-label={`Mark task ${todo} as ${status === "completed" ? "incomplete" : "completed"}`}
          defaultChecked={status === "completed"}
          onCheckedChange={() => toggleTaskStatus(id)}
        />
      </TableCell>
    )
})