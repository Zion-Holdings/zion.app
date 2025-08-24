import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

<<<<<<< HEAD
export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
=======
export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-zion-slate-light">
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
          {label}
        </label>
      )}
      <input
        className={`
<<<<<<< HEAD
          w-full px-3 py-2 border border-zion-blue-light rounded-lg
          bg-white/10 text-white placeholder-zion-slate-light
          focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent
=======
          flex h-10 w-full rounded-md border border-zion-blue-light/30 
          bg-zion-blue-dark/50 px-3 py-2 text-sm 
          text-white placeholder:text-zion-slate-light/50
          focus:outline-none focus:ring-2 focus:ring-zion-cyan 
          focus:border-transparent transition-colors
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
<<<<<<< HEAD
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
=======
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
