import { memo, useState } from "react";

import { Input } from "@/components/ui/input";
import { TaskType } from "../type";
import { useTasks } from "../store/useTasksStore";

const TaskEditField = ({task, setEditing}: {
    task: TaskType,
    setEditing: (value: boolean) => void
  }) => {
    const [todo, setTodo] = useState(task.todo);
    const { updateTask } = useTasks();
  
    const handleUpdateTask = () => {
      updateTask(task.id, { todo });
      setEditing(false);
    }
  
    return (
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onBlur={() => handleUpdateTask()}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleUpdateTask()
        }}
        aria-label={`Update the task ${task.todo}`}
        autoFocus
      />
    )
}

export default memo(TaskEditField)