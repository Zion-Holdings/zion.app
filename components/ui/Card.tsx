import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  onClick,
  hover = true,
}) => {
  const baseClasses = 'bg-cursor-dark border border-cursor-lighter rounded-xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:border-cursor-blue/30 hover:shadow-lg hover:shadow-cursor-blue/10 hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;