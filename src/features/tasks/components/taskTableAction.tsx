import { memo } from 'react';
import { FilterComponent, FilterType } from './filterComponent';
import { Button } from '@/components/ui/button';

export default memo(function TaskTableAction({newTaskField, openNewTaskFild, setFilter}: {
    newTaskField: boolean,
    openNewTaskFild: (value: boolean) => void;
    setFilter: (value: FilterType) => void
}) {
    return (
      <div className="flex justify-end items-center gap-x-4">
        <FilterComponent onFilterChange={setFilter} />
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