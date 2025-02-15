import { memo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import TaskRowBody from './taskRowBody';
import { useTasks } from '../store/useTasksStore';
import { TaskType } from '../types';

const ITEM_TYPE = 'TASK';
type TaskRowProps = TaskType & { index: number };

function TaskRow({ id, status, todo, index }: TaskRowProps) {
  const moveTask = useTasks((state) => state.moveTask);
  const ref = useRef<HTMLTableRowElement>(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <TableRow
      ref={ref}
      className={cn(
        'transition-colors cursor-grab',
        status === 'completed' && 'bg-green-50 hover:bg-green-100',
        isDragging && 'opacity-50'
      )}
    >
      <TaskRowBody id={id} todo={todo} status={status} />
    </TableRow>
  );
}

export default memo(TaskRow);
