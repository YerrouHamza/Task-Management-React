import { memo, useState } from 'react';

import { TableCell } from '@/components/ui/table';
import MoveCell from '@/components/moveCell';

import TaskStatusToggle from './taskStatusToggle';
import TaskDelete from './Taskdelete';
import TaskEditField from './taskEditField';
import { TaskType } from '../types';

type TaskRowProps = TaskType;

export default memo(function TaskRowBody({ id, status, todo }: TaskRowProps) {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <MoveCell />

      <TableCell
        colSpan={2}
        className="hover:underline hover:cursor-pointer p-0.5"
        tabIndex={0}
        onClick={() => setEditing(true)}
        onFocus={() => setEditing(true)}
      >
        {editing ? (
          <TaskEditField id={id} todo={todo} setEditing={setEditing} />
        ) : (
          <div className="px-4 py-3 w-full">{todo}</div>
        )}
      </TableCell>

      <TaskStatusToggle id={id} status={status} todo={todo} />
      <TaskDelete id={id} todo={todo} />
    </>
  );
});
