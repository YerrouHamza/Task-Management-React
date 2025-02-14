import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TableCell } from "@/components/ui/table";
import { useState } from "react";
import { useTasks } from "../store/useTasksStore";

export default function NewTaskField({closeNewTaskTab}: {closeNewTaskTab: (value: boolean) => void;}) {
    const { addTask } = useTasks()
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
      if(newTask.trim() !== "") {
        addTask({todo: newTask, status: 'pending'})
        setNewTask("");
        closeNewTaskTab(false)
      }
    }
    
    return (
      <>
        <TableCell colSpan={2} className="p-2">
          <Textarea
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask()
              }
            }}
            placeholder="Add new task..."
            aria-label="New Task Description"
            autoFocus
          />
        </TableCell>
        <TableCell colSpan={2}>
          <Button
            className="w-full"
            onClick={handleAddTask}
            aria-label="Add Task"
          >Add</Button>
        </TableCell>
      </>
    );
  }