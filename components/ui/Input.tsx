import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; helperText?: string };

export function TextInput({ label, helperText, className = '', ...props }: InputProps) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium">{label}</span>}
      <input
        className={`w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 h-11 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
      {helperText && <span className="text-xs text-gray-500">{helperText}</span>}
    </label>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' };

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center h-11 px-4 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0';
  const styles = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-gray-100';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

export function DateInput(props: Omit<InputProps, 'type'>) {
  return <TextInput type="date" inputMode="numeric" {...props} />;
}

export function TimeInput(props: Omit<InputProps, 'type'>) {
  return <TextInput type="time" inputMode="numeric" {...props} />;
}