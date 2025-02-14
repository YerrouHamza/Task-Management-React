import { FilterComponent, FilterType } from './filterComponent';
import { Button } from '@/components/ui/button';

export default function TaskTableAction({newTaskField, setOpenNewTaskFild, setFilter}: {
    newTaskField: boolean,
    setOpenNewTaskFild: (value: boolean) => void;
    setFilter: (value: FilterType) => void
}) {
    return (
      <div className="flex justify-end items-center gap-x-4">
        <FilterComponent onFilterChange={setFilter} />
        <Button
          size='sm'
          variant={!newTaskField ? 'default' : 'outline'}
          onClick={() => setOpenNewTaskFild(!newTaskField)}
        >
          {!newTaskField ? <span>New Task</span> : <span>Close Task</span>}
        </Button>
      </div>
    )
}