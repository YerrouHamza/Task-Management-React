import { TableCell } from './ui/table'
import { Move } from 'lucide-react'

export default function MoveCell() {
  return (
    <TableCell className="max-w-9 p-2">
        <Move className="text-gray-500 size-4 cursor-move" />
    </TableCell>
  )
}
