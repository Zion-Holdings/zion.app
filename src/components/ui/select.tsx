import React from 'react';
<<<<<<< HEAD

interface SelectProps {
  children: React.ReactNode;
  className?: string;
=======
import { cn } from '@/lib/utils';

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
  value?: string;
  onValueChange?: (value: string) => void;
}

<<<<<<< HEAD
export function Select({ children, className = '', value, onValueChange }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`
        flex h-10 w-full items-center justify-between rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
        text-white placeholder:text-zion-slate-light/50
        focus:outline-none focus:ring-2 focus:ring-zion-cyan 
        focus:border-transparent transition-colors cursor-pointer
        ${className}
      `}
=======
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative', className)}
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
      {...props}
    >
      {children}
    </div>
<<<<<<< HEAD
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return (
    <span className="text-zion-slate-light">
      {placeholder || 'Select an option'}
    </span>
  );
}

export function SelectContent({ children, className = '' }: SelectProps) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
      shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}
=======
  )
);
Select.displayName = 'Select';

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
SelectTrigger.displayName = 'SelectTrigger';

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-sm', className)}
      {...props}
    >
      {placeholder}
    </span>
  )
);
SelectValue.displayName = 'SelectValue';

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
SelectContent.displayName = 'SelectContent';
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

<<<<<<< HEAD
export function SelectItem({ children, className = '', value, ...props }: SelectItemProps) {
  return (
    <div
      className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `}
=======
export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
      data-value={value}
      {...props}
    >
      {children}
    </div>
<<<<<<< HEAD
  );
}
=======
  )
);
SelectItem.displayName = 'SelectItem';
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
