

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  className = '', 
  value, 
  onChange, 
  disabled = false 
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}