import { memo } from 'react';

import { Button } from '@/components/ui/button';

import FilterComponent from './filterComponent';
import { TaskStatusFilterType } from '../types';

type TaskTableActionPorps = {
  filter: TaskStatusFilterType
  newTaskField: boolean,
  openNewTaskFild: (value: boolean) => void;
  setFilter: (value: TaskStatusFilterType) => void
}

export default memo(function TaskTableAction({filter, newTaskField, openNewTaskFild, setFilter}: TaskTableActionPorps) {
    return (
      <div className="flex justify-end items-center gap-x-4">
        <FilterComponent filter={filter} onFilterChange={setFilter} />
        <Button
          size='sm'
          variant={!newTaskField ? 'default' : 'outline'}
          onClick={() => openNewTaskFild(!newTaskField)}
          aria-label='Open add new task field'
        >
          {!newTaskField ? <span>New Task</span> : <span>Close Task</span>}
        </Button>
      </div>
    )
})