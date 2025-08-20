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
  const baseClasses = 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500';
  const hoverClasses = hover ? 'hover:border-cursor-blue/30 hover:shadow-glow hover:shadow-cursor-blue/20 hover:-translate-y-2 hover:bg-white/10' : '';
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