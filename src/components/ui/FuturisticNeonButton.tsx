import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface FuturisticNeonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function FuturisticNeonButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  glowIntensity = 'medium'
}: FuturisticNeonButtonProps) {
  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300 font-semibold tracking-wide',
    'before:absolute before:inset-0 before:rounded-md before:transition-all before:duration-300',
    'after:absolute after:inset-0 after:rounded-md after:transition-all after:duration-300',
    'hover:scale-105 active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    fullWidth ? 'w-full' : '',
    className
  );

  const variantStyles = {
    primary: {
      button: 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white border-zion-purple/50',
      before: 'before:bg-gradient-to-r before:from-zion-purple/20 before:to-zion-purple-dark/20',
      after: 'after:bg-gradient-to-r after:from-zion-cyan/20 after:to-zion-blue/20',
      glow: 'shadow-[0_0_20px_rgba(140,21,233,0.5)] hover:shadow-[0_0_30px_rgba(140,21,233,0.8)]',
      border: 'border border-zion-purple/50 hover:border-zion-purple'
    },
    secondary: {
      button: 'bg-transparent text-zion-cyan border-zion-cyan/50',
      before: 'before:bg-zion-cyan/10',
      after: 'after:bg-zion-blue/10',
      glow: 'shadow-[0_0_20px_rgba(34,221,210,0.5)] hover:shadow-[0_0_30px_rgba(34,221,210,0.8)]',
      border: 'border border-zion-cyan/50 hover:border-zion-cyan'
    },
    accent: {
      button: 'bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white border-zion-blue/50',
      before: 'before:bg-gradient-to-r before:from-zion-blue/20 before:to-zion-blue-dark/20',
      after: 'after:bg-gradient-to-r after:from-zion-purple/20 after:to-zion-cyan/20',
      glow: 'shadow-[0_0_20px_rgba(46,115,234,0.5)] hover:shadow-[0_0_30px_rgba(46,115,234,0.8)]',
      border: 'border border-zion-blue/50 hover:border-zion-blue'
    },
    danger: {
      button: 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500/50',
      before: 'before:bg-gradient-to-r before:from-red-500/20 before:to-red-600/20',
      after: 'after:bg-gradient-to-r after:from-pink-500/20 after:to-red-500/20',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]',
      border: 'border border-red-500/50 hover:border-red-500'
    }
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const glowMultiplier = {
    low: 1,
    medium: 1.5,
    high: 2
  };

  const selectedVariant = variantStyles[variant];
  const selectedSize = sizeStyles[size];

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        selectedVariant.button,
        selectedVariant.before,
        selectedVariant.after,
        selectedVariant.glow,
        selectedVariant.border,
        selectedSize,
        `shadow-[0_0_${20 * glowMultiplier[glowIntensity]}px_rgba(140,21,233,0.5)] hover:shadow-[0_0_${30 * glowMultiplier[glowIntensity]}px_rgba(140,21,233,0.8)]`
      )}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-1 rounded-md bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
}