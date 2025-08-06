
import React, { useState } from 'react';
import Link from 'next/link';

interface EnhancedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
  gradient?: 'blue' | 'purple' | 'green' | 'pink' | 'custom';
  glow?: boolean;
  animated?: boolean;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  fullWidth = false,
  gradient = 'blue',
  glow = false,
  animated = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const gradientClasses = {
    blue: 'from-neon-blue to-neon-purple',
    purple: 'from-neon-purple to-neon-pink',
    green: 'from-neon-green to-neon-blue',
    pink: 'from-neon-pink to-neon-purple',
    custom: 'from-neon-blue via-neon-purple to-neon-pink'
  };

  const variantClasses = {
    primary: `bg-gradient-to-r ${gradientClasses[gradient]} text-white font-semibold hover:shadow-neon-blue/50`,
    secondary: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40',
    outline: 'bg-transparent border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-red-500/50'
  };

  const baseClasses = `
    relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${glow ? 'shadow-neon-blue/30 hover:shadow-neon-blue/50' : ''}
    ${animated ? 'animate-pulse' : ''}
    ${className}
  `;

  const content = (
    <div className="relative z-10 flex items-center justify-center space-x-2">
      {loading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="text-lg">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="text-lg">{icon}</span>
      )}
    </div>
  );

  const buttonElement = (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradientClasses[gradient]} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
      
      {/* Shimmer Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
      )}
      
      {content}
    </button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
};

export default EnhancedButton;
