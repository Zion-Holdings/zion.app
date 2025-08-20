import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = true,
  padding = 'md',
  onClick,
  style,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `rounded-2xl border transition-all duration-300 ${
    glass ? 'glass border-white/10' : 'bg-gray-900/50 border-gray-700'
  } ${paddingClasses[padding]} ${className}`;

  const hoverClasses = hover
    ? 'hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
    : '';

  const classes = `${baseClasses} ${hoverClasses}`;

  return (
    <div className={classes} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default Card;