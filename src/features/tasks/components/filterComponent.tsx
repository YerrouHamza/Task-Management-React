import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TaskStatusFilterType } from "../types";

interface FilterComponentProps {
    filter: TaskStatusFilterType;
    onFilterChange: (status: TaskStatusFilterType) => void;
}

const Filters: TaskStatusFilterType[] = ['all', 'pending', 'completed'];

export function FilterComponent({ filter = 'all', onFilterChange }: FilterComponentProps) {
  return (
    <Select value={filter} onValueChange={(value: TaskStatusFilterType) => onFilterChange(value)}>
        <SelectTrigger
            className="w-40 capitalize" 
            aria-label="Filter tasks by status"
        >
            <SelectValue placeholder="Filter Tasks" />
        </SelectTrigger>
        <SelectContent>
            {Filters.map((item) => (
                <SelectItem 
                    key={item}
                    value={item}
                    className="capitalize"
                    aria-label={`Show ${item} tasks`}
                >
                    {item}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}