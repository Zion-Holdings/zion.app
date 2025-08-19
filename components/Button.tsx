interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '' 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950';
  
  const variantClasses = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
    secondary: 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white focus:ring-fuchsia-500',
    outline: 'border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 focus:ring-cyan-400'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} px-6 py-3 ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}