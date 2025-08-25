import React from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function InternalLink({
  href,
  children,
  className = '',
  variant = 'default',
  size = 'md',
  icon,
  showArrow = false,
  onClick
}: InternalLinkProps) {
  const baseClasses = 'inline-flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded';
  
  const variantClasses = {
    default: 'text-cyan-400 hover:text-cyan-300 hover:underline',
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium',
    secondary: 'bg-slate-800/50 hover:bg-slate-800/70 text-white px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-400/50',
    ghost: 'text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg'
  };
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <Link 
      href={href}
      className={classes}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}

// Specialized internal link components for common use cases
export function NavigationLink({ href, children, ...props }: Omit<InternalLinkProps, 'variant'>) {
  return (
    <InternalLink href={href} variant="ghost" {...props}>
      {children}
    </InternalLink>
  );
}

export function ActionLink({ href, children, ...props }: Omit<InternalLinkProps, 'variant'>) {
  return (
    <InternalLink href={href} variant="primary" showArrow {...props}>
      {children}
    </InternalLink>
  );
}

export function ContentLink({ href, children, ...props }: Omit<InternalLinkProps, 'variant'>) {
  return (
    <InternalLink href={href} variant="default" showArrow {...props}>
      {children}
    </InternalLink>
  );
}

export function CardLink({ href, children, ...props }: Omit<InternalLinkProps, 'variant'>) {
  return (
    <InternalLink href={href} variant="secondary" {...props}>
      {children}
    </InternalLink>
  );
}