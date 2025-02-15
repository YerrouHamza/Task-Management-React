import { memo } from 'react';
import { CheckboxField } from '@/components/checkboxField';
import { TableCell } from '@/components/ui/table';
import { useTasks } from '../store/useTasksStore';
import { TaskType } from '../types';

type TaskStatusToggleType = TaskType;

export default memo(function TaskStatusToggle({
  id,
  status,
  todo,
}: TaskStatusToggleType) {
  const toggleTaskStatus = useTasks((state) => state.toggleTaskStatus);

  return (
    <TableCell colSpan={1} className="min-w-[115px]">
      <CheckboxField
        id={id.toString()}
        label={status}
        aria-label={`Mark task ${todo} as ${status === 'completed' ? 'incomplete' : 'completed'}`}
        defaultChecked={status === 'completed'}
        onCheckedChange={() => toggleTaskStatus(id)}
      />
    </TableCell>
  );
});
