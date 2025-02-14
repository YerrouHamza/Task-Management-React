import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { memo } from "react";

export default memo(function TaskTableHeader() {
    return (
      <TableHeader aria-label="Task table header">
        <TableRow>
          <TableHead scope="col" className="max-w-8 p-0"></TableHead>
          <TableHead scope="col" colSpan={2} className="min-w-[80%] lg:min-w-[700px] max-w-[700px] ">Task</TableHead>
          <TableHead scope="col">Status</TableHead>
        </TableRow>
      </TableHeader>
    );
  });