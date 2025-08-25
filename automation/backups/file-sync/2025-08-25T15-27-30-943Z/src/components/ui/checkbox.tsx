import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onChange?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Checkbox({ checked, onCheckedChange, onChange, className = '', disabled = false }: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
    if (onChange) {
      onChange();
    }
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      className={cn(
        'h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2',
        className
      )}
    />
  );
}