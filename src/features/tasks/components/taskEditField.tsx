import { memo, useState } from "react";

import { Input } from "@/components/ui/input";
import { TaskType } from "../types";
import { useTasks } from "../store/useTasksStore";

interface TaskEditProp extends Pick<TaskType, 'id' | 'todo'> {
  setEditing: (value: boolean) => void
}

const TaskEditField = ({id, todo, setEditing}: TaskEditProp) => {
    const [value, setValue] = useState(todo);
    const { updateTask } = useTasks();
  
    const handleUpdateTask = () => {
      updateTask(id, { todo: value });
      setEditing(false);
    }
  
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handleUpdateTask()}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleUpdateTask()
        }}
        aria-label={`Update the task ${todo}`}
        autoFocus
      />
    )
}

export default memo(TaskEditField)