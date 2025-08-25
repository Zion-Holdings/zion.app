import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  defaultValue?: string;
}

export function Select({ 
  children, 
  className = '', 
  value, 
  onChange, 
  onValueChange,
  disabled = false,
  defaultValue
}: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <select
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <option value={value}>
      {children}
    </option>
  );
}

export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative ${className}`}>{children}</div>;
}