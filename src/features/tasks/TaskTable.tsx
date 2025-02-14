import { memo, useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Table, TableBody, TableCaption, TableRow } from "@/components/ui/table";

import { useTasks } from "./store/useTasksStore";
import TaskRow from "./components/taskRow";
import NewTaskField from "./components/newTaskField";
import TaskTableAction from "./components/taskTableAction";
import TaskTableHeader from "./components/taskTableHeader";
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
        <TaskTableAction filter={filter} setFilter={setFilter} newTaskField={newTask} openNewTaskFild={setNewTask} />
          <Table className="min-w-[500px]" aria-label="Task management table">
            <TableCaption className="sr-only">Task table displaying tasks with status and actions.</TableCaption>
            <TaskTableHeader />
            <DndProvider backend={HTML5Backend}>
                <TableBody>
                  {filteredTasks.map((task, index) => (
                    <TaskRow key={task.id} index={index} {...task} />
                  ))}
                  <TableRow className="bg-white" tabIndex={0} aria-label="New task row, press Enter to add a new task" onFocus={() => setNewTask(true)}>
                    {newTask && <NewTaskField closeNewTaskTab={setNewTask} />}
                  </TableRow>
                </TableBody>
            </DndProvider>
          </Table>
      </div>
  );
}

export default memo(TaskTable);