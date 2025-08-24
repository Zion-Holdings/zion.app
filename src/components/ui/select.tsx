import React from 'react';

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