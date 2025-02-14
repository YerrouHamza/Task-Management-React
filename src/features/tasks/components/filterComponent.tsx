import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type FilterType = 'all' | 'pending' | 'completed';

interface FilterComponentProps {
    onFilterChange: (status: FilterType) => void;
}

const Filters: FilterType[] = ['all', 'pending', 'completed'];

export function FilterComponent({ onFilterChange }: FilterComponentProps) {
  const [filter, setFilter] = useState("all");

  return (
    <Select value={filter} onValueChange={(value: FilterType) => { setFilter(value); onFilterChange(value); }}>
        <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter Tasks" />
        </SelectTrigger>
        <SelectContent>
            {Filters.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                    {item}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}