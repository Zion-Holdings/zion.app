import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
<<<<<<< HEAD
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export { Textarea };
=======
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-3 py-2 border border-zion-blue-light rounded-lg
          bg-white/10 text-white placeholder-zion-slate-light
          focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent
          resize-vertical min-h-[100px]
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
