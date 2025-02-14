import { CheckboxField } from "@/components/checkboxField";
import { TableCell } from "@/components/ui/table";
import { useTasks } from "../store/useTasksStore";
import { Task } from "../type";

export default function StatusToggleTask ({taskId, status}: {
    taskId: Task["id"],
    status: Task["status"]
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
}