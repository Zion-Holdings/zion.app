import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-zion-blue-light bg-zion-blue-dark px-3 py-2 text-sm text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-zion-purple disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <input className={`${baseClasses} ${className}`} {...props} />
  );
}
