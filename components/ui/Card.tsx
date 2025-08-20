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
  const baseClasses = 'relative overflow-hidden transition-all duration-500 focus-ring';
  
  const variantClasses = {
    default: 'bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm',
    glass: 'glass border-white/10 rounded-2xl p-8',
    elevated: 'bg-gray-900/80 border border-gray-800/50 rounded-2xl p-8 shadow-2xl shadow-black/20',
  };
  
  const hoverClasses = hover ? 'hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;