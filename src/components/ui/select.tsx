import React from 'react';

<<<<<<< HEAD
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, error, options, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-3 py-2 border border-zion-blue-light rounded-lg
          bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-zion-blue-dark text-white">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

// Export additional Select components for compatibility
export const SelectTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`px-3 py-2 border border-zion-blue-light rounded-lg bg-white/10 text-white ${className}`}>
    {children}
  </div>
);

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="absolute z-50 w-full mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg">
    {children}
  </div>
);

export const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => (
  <div className="px-3 py-2 hover:bg-zion-blue cursor-pointer text-white">
    {children}
  </div>
);

export const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => (
  <span className="text-zion-slate-light">{placeholder || 'Select option'}</span>
);
=======
interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

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
      {...props}
    >
      {children}
    </div>
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

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

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
      data-value={value}
      {...props}
    >
      {children}
    </div>
  );
}
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
