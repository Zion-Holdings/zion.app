import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hoverEffect?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  href,
  className = '',
  hoverEffect = true,
  gradient = false,
}) => {
  const baseClasses = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl transition-all duration-300';
  const hoverClasses = hoverEffect ? 'hover:border-cyan-400/30 hover:scale-[1.02]' : '';
  const gradientClasses = gradient ? 'hover:shadow-2xl hover:shadow-cyan-400/20' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`;
  
  const content = (
    <>
      {gradient && (
        <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      )}
      {children}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  return (
    <div className={classes}>
      {content}
    </div>
  );
};

export default Card;