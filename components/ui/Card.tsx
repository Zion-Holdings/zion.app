import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'futuristic' | 'holographic' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
  animated?: boolean;
  border?: boolean;
  shadow?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  glow = false,
  animated = true,
  border = true,
  shadow = true,
  className,
  ...props
}) => {
  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
    animated && 'transform',
    hover && animated && 'hover:scale-[1.02] hover:-translate-y-1',
    className
  );

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const variantClasses = {
    default: cn(
      'bg-gray-900/80 border border-gray-700/50',
      'backdrop-blur-sm',
      shadow && 'shadow-lg',
      glow && 'shadow-blue-500/20',
      hover && 'hover:border-gray-600/70 hover:shadow-xl'
    ),
    glass: cn(
      'glass',
      'bg-white/5 backdrop-blur-xl border border-white/10',
      shadow && 'shadow-2xl shadow-black/20',
      glow && 'shadow-blue-500/30',
      hover && 'hover:bg-white/10 hover:border-white/20'
    ),
    futuristic: cn(
      'bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90',
      'border border-gray-600/30',
      'backdrop-blur-xl',
      shadow && 'shadow-2xl shadow-blue-500/10',
      glow && 'shadow-blue-500/40',
      hover && 'hover:border-blue-500/50 hover:shadow-blue-500/20',
      'before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-transparent before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-300',
      hover && 'hover:before:opacity-100'
    ),
    holographic: cn(
      'bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80',
      'border border-gray-600/40',
      'backdrop-blur-lg',
      shadow && 'shadow-xl shadow-purple-500/20',
      glow && 'shadow-purple-500/50',
      hover && 'hover:border-purple-500/60 hover:shadow-purple-500/30',
      'holographic'
    ),
    neon: cn(
      'bg-gray-900/90 border border-cyan-500/40',
      'backdrop-blur-md',
      shadow && 'shadow-2xl shadow-cyan-500/20',
      glow && 'shadow-cyan-500/60',
      hover && 'hover:border-cyan-400/60 hover:shadow-cyan-400/40',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:via-transparent before:to-cyan-500/10 before:opacity-0 before:transition-opacity before:duration-300',
      hover && 'hover:before:opacity-100'
    )
  };

  const borderClasses = border ? 'rounded-2xl' : 'rounded-none';

  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        borderClasses
      )}
      {...props}
    >
      {/* Futuristic background patterns */}
      {variant === 'futuristic' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </>
      )}

      {/* Holographic effect overlay */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Neon glow effect */}
      {variant === 'neon' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl" />
        </>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner accents for futuristic variant */}
      {variant === 'futuristic' && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-blue-500/50 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-purple-500/50 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-purple-500/50 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-blue-500/50 rounded-br-2xl" />
        </>
      )}

      {/* Hover effect overlay */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%]" />
      )}
    </div>
  );
};

export default Card;