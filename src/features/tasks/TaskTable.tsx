import { memo, useMemo, useState } from "react";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { useTasks } from "./store/useTasksStore";
import TaskRow from "./components/TaskRow";
import NewTaskField from "./components/newTaskField"
import TaskTableAction from "./components/taskTableAction";
import { FilterType } from "./components/filterComponent";

function TaskTable() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState<FilterType>("all");
  const [newTask, setNewTask] = useState(false)

  const filteredTasks = useMemo(() => {
    return filter === "all" ? tasks : tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className="space-y-3">
      <TaskTableAction 
        setFilter={setFilter}
        newTaskField={newTask}
        setOpenNewTaskFild={setNewTask}
      />
      <Table>
        <TaskTableHeader />
        <TableBody>
          {filteredTasks.map((task) => <TaskRow key={task.id} task={task} />)}

          <TableRow 
            className='bg-white'
            tabIndex={0}
            onFocus={() => setNewTask(true)}
          >
            {newTask && <NewTaskField closeNewTaskTab={setNewTask} />}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

const TaskTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead colSpan={2}>Task</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
  )
}

export default memo(TaskTable)

