import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
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
        <TableCell colSpan={3}>
          <Input
            autoFocus
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask()
              }
            }}
            placeholder="Add new task..."
          />
        </TableCell>
        <TableCell>
          <Button
            className="w-full"
            onClick={() => handleAddTask()}
          >Add</Button>
        </TableCell>
      </>
    );
  }