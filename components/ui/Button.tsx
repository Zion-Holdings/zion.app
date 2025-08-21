import React from 'react';
import { cn } from '../../utils/cn';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'futuristic' | 'quantum';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  glow?: boolean;
  animated?: boolean;
}

interface ButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface LinkButtonProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonComponentProps = ButtonProps | LinkButtonProps;

const Button: React.FC<ButtonComponentProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  rounded = false,
  glow = false,
  animated = true,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'relative overflow-hidden group',
    fullWidth && 'w-full',
    rounded && 'rounded-full',
    !rounded && 'rounded-xl',
    animated && 'transform hover:scale-105 active:scale-95',
    className
  );

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const variantClasses = {
    primary: cn(
      'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600',
      'hover:from-blue-500 hover:via-blue-400 hover:to-blue-500',
      'text-white shadow-lg hover:shadow-xl',
      'border border-blue-500/20',
      glow && 'neon-glow text-blue-400'
    ),
    secondary: cn(
      'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700',
      'hover:from-gray-600 hover:via-gray-500 hover:to-gray-600',
      'text-white shadow-lg hover:shadow-xl',
      'border border-gray-500/20',
      glow && 'neon-glow text-gray-400'
    ),
    outline: cn(
      'bg-transparent border-2 border-blue-500/50',
      'hover:bg-blue-500/10 hover:border-blue-400',
      'text-blue-400 hover:text-blue-300',
      'backdrop-blur-sm',
      glow && 'neon-glow'
    ),
    ghost: cn(
      'bg-transparent hover:bg-white/5',
      'text-gray-300 hover:text-white',
      'border border-transparent hover:border-white/20',
      'backdrop-blur-sm'
    ),
    accent: cn(
      'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600',
      'hover:from-emerald-500 hover:via-emerald-400 hover:to-emerald-500',
      'text-white shadow-lg hover:shadow-xl',
      'border border-emerald-500/20',
      glow && 'neon-glow text-emerald-400'
    ),
    futuristic: cn(
      'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600',
      'hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500',
      'text-white shadow-lg hover:shadow-2xl',
      'border border-purple-400/30',
      'backdrop-blur-md',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      glow && 'neon-glow text-cyan-400'
    ),
    quantum: cn(
      'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600',
      'hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500',
      'text-white shadow-lg hover:shadow-2xl',
      'border border-cyan-400/30',
      'backdrop-blur-md',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      glow && 'neon-glow text-cyan-400'
    )
  };

  const iconClasses = cn(
    'transition-transform duration-200',
    iconPosition === 'left' && 'mr-2',
    iconPosition === 'right' && 'ml-2',
    animated && 'group-hover:scale-110'
  );

  const loadingSpinner = (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
  );

  const buttonContent = (
    <>
      {/* Futuristic background effect */}
      {variant === 'futuristic' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10 flex items-center">
        {loading && iconPosition === 'left' && loadingSpinner}
        {!loading && icon && iconPosition === 'left' && (
          <span className={iconClasses}>{icon}</span>
        )}
        
        <span className="relative">
          {children}
          {/* Futuristic text glow effect */}
          {variant === 'futuristic' && (
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm">
              {children}
            </span>
          )}
        </span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className={iconClasses}>{icon}</span>
        )}
        {loading && iconPosition === 'right' && loadingSpinner}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as LinkButtonProps;
    return (
      <a
        href={href}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          'no-underline'
        )}
        {...anchorProps}
      >
        {buttonContent}
      </a>
    );
  }

    return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        loading && 'cursor-wait',
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled || loading}
      {...(props as ButtonProps)}
    >
      {buttonContent}
    </button>
  );
};

export default Button;