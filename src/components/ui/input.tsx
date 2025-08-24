import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-zion-slate/20 rounded-lg bg-background text-zion-slate placeholder-zion-slate/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-colors ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}