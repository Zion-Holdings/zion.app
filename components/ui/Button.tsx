import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  style,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cursor-blue disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cursor-blue to-blue-600 hover:from-cursor-blue-hover hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 border-0 hover:shadow-cursor-blue/25',
    secondary: 'bg-cursor-light hover:bg-cursor-lighter text-white border border-cursor-lighter hover:border-cursor-blue hover:shadow-lg hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-cursor-light text-gray-300 hover:text-white hover:shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border border-cursor-lighter text-gray-300 hover:bg-cursor-light hover:border-cursor-blue hover:text-white hover:shadow-md hover:-translate-y-0.5',
    accent: 'bg-gradient-to-r from-cursor-accent to-green-500 hover:from-cursor-accent-hover hover:to-green-600 text-black font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 border-0 hover:shadow-cursor-accent/25',
  };

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {icon && iconPosition === 'left' && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {content}
    </button>
  );
};

export default Button;