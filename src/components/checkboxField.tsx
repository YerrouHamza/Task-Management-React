import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxFieldProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

export function CheckboxField({
  id,
  label,
  defaultChecked = false,
  onCheckedChange,
}: CheckboxFieldProps) {
  return (
    <div
      className="items-top flex space-x-2 cursor-pointer"
      onKeyDown={(e) => {
        if (e.key === 'Enter') onCheckedChange?.(!defaultChecked);
      }}
    >
      <Checkbox
        id={id}
        checked={defaultChecked}
        onCheckedChange={onCheckedChange}
      />
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
  );
}
