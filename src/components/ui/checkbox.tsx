import React from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  checked = false, 
  onChange, 
  className = "" 
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      className={`w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light rounded focus:ring-zion-cyan focus:ring-2 ${className}`}
    />
  );
};