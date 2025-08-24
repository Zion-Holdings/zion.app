import React from 'react';
<<<<<<< HEAD

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-zion-slate-light">
          {label}
        </label>
      )}
      <input
        className={`
          flex h-10 w-full rounded-md border border-zion-blue-light/30 
          bg-zion-blue-dark/50 px-3 py-2 text-sm 
          text-white placeholder:text-zion-slate-light/50
          focus:outline-none focus:ring-2 focus:ring-zion-cyan 
          focus:border-transparent transition-colors
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
=======
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    
    const classes = cn(baseClasses, className);
    
    return (
      <input
        type={type}
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
