import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  border?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  border = true,
  padding = 'md',
}) => {
  const baseClasses =
    'relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300';

  const borderClasses = border ? 'border border-white/10' : '';
  const hoverClasses = hover
    ? 'hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10'
    : '';
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${borderClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
