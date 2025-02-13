import { useTasks } from "./store/useTasksStore";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TaskRow } from "./components/TaskRow";

export function TaskTable() {
  const { tasks } = useTasks();

  return (
    <div>
      <Table className="w-full bg-gray-50 border brder-gray-200 rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2}>Task</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}