import React from 'react';

<<<<<<< HEAD
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-zion-blue-light bg-zion-blue-dark px-3 py-2 text-sm text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-zion-purple disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <input className={`${baseClasses} ${className}`} {...props} />
=======
interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  className = '', 
  value, 
  onChange, 
  disabled = false 
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
>>>>>>> 181cfac2212680d9635253bde265173d9d08eca1
  );
}