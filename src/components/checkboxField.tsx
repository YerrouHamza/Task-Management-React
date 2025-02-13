import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxField({id, label, defaultChecked = false, onCheckedChange}: {
    id: string
    label: string
    defaultChecked?: boolean
    onCheckedChange?: (value: boolean) => void
}) {
  return (
    <div className="items-top flex space-x-2 cursor-pointer">
      <Checkbox id={id} onCheckedChange={onCheckedChange} defaultChecked={defaultChecked} />
      <div className="grid gap-1.5 leading-none">
        {label && (
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
            >
                {label}
            </label>
        )}
      </div>
    </div>
  )
}