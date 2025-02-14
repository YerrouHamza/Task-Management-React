import { memo, useMemo, useState } from "react";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTasks } from "./store/useTasksStore";
import TaskRow from "./components/taskRow";
import NewTaskField from "./components/newTaskField"
import TaskTableAction from "./components/taskTableAction";
import { TaskStatusFilterType } from "./types";

function TaskTable() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState<TaskStatusFilterType>("all");
  const [newTask, setNewTask] = useState(false);

  const filteredTasks = useMemo(() => {
    return filter === "all" ? tasks : tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className="space-y-3">
      <TaskTableAction 
        filter={filter}
        setFilter={setFilter}
        newTaskField={newTask}
        openNewTaskFild={setNewTask}
      />
      <Table className="min-w-[500px]" aria-label="Task management table">
        <TableCaption className="sr-only">
          Task table displaying tasks with status and actions.
        </TableCaption>
        <TaskTableHeader />
        <TableBody>
          {filteredTasks.map((task) => (
            <TaskRow key={task.id} {...task} />
          ))}

          <TableRow
            className="bg-white"
            tabIndex={0}
            aria-label="New task row, press Enter to add a new task"
            onFocus={() => setNewTask(true)}
          >
            {newTask && <NewTaskField closeNewTaskTab={setNewTask} />}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

const TaskTableHeader = memo(() => {
  return (
    <TableHeader aria-label="Task table header">
      <TableRow>
        <TableHead scope="col" colSpan={2}>Task</TableHead>
        <TableHead scope="col">Status</TableHead>
      </TableRow>
    </TableHeader>
  );
})

export default memo(TaskTable);