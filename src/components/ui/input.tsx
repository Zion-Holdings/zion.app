import React from 'react';

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