import { useState } from "react";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { useTasks } from "./store/useTasksStore";
import { TaskRow } from "./components/TaskRow";
import NewTaskField from "./components/newTaskField"

export function TaskTable() {
  const { tasks } = useTasks();
  const [newTask, setNewTask] = useState(false)

  return (
    <div className="space-y-3">
      <div className="flex justify-end items-center">
        <Button 
          size='sm'
          variant={!newTask ? 'default' : 'outline'}
          onClick={() => setNewTask(!newTask)}
        >
          {!newTask ? <span>New Task</span> : <span>Close Task</span>}
        </Button>
      </div>
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

          <TableRow className='bg-white' tabIndex={0} onFocus={() => setNewTask(true)}>
            {newTask ? <NewTaskField closeNewTaskTab={setNewTask} /> : null}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}