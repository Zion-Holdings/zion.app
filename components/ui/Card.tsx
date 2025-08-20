import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
  variant?: 'default' | 'glass' | 'elevated';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  onClick,
  hover = true,
  variant = 'default',
}) => {
  const baseClasses = 'card';
  
  const variantClasses = {
    default: '',
    glass: 'glass',
    elevated: 'shadow-lg',
  };
  
  const hoverClasses = hover ? 'hover:border-cursor-blue/30 hover:shadow-xl hover:shadow-cursor-blue/15 hover:-translate-y-2 group' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      {/* Hover background effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-cursor-blue/5 via-transparent to-cursor-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      )}
      
      {/* Subtle border glow on hover */}
      {hover && (
        <div className="absolute inset-0 border border-cursor-blue/0 group-hover:border-cursor-blue/20 rounded-2xl transition-all duration-500 group-hover:shadow-cursor-blue/10"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accent */}
      {hover && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cursor-blue/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      )}
    </div>
  );
};

export default Card;