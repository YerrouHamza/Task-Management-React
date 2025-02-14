import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TaskStatusFilterType } from "../types";

interface FilterComponentProps {
    onFilterChange: (status: TaskStatusFilterType) => void;
}

const Filters: TaskStatusFilterType[] = ['all', 'pending', 'completed'];

export function FilterComponent({ onFilterChange }: FilterComponentProps) {
  const [filter, setFilter] = useState("all");

  const handleChange = (value: TaskStatusFilterType) => {
    setFilter(value)
    onFilterChange(value)
  }

  return (
    <Select value={filter} onValueChange={handleChange}>
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