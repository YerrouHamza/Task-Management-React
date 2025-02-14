import { CheckboxField } from "@/components/checkboxField";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { TaskType } from "../type";
import { memo } from "react";

export default memo(function TaskStatusToggle ({task}: {task: TaskType}) {
    const { toggleTaskStatus } = useTasks();
  
    return (
      <TableCell colSpan={1}>
        <CheckboxField 
          id={task.id.toLocaleString()}
          label={task.status}
          aria-label={`Mark task ${task.todo} as ${task.status === "completed" ? "incomplete" : "completed"}`}
          defaultChecked={task.status === "completed"}
          onCheckedChange={() => toggleTaskStatus(task.id)}
        />
      </TableCell>
    )
})