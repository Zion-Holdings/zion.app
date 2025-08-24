import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  const textareaClasses = 'flex min-h-[80px] w-full rounded-md border border-zion-blue-light bg-zion-blue-dark px-3 py-2 text-sm text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}
      <textarea className={`${textareaClasses} ${className}`} {...props} />
    </div>
  );
}