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
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  const baseClasses = `rounded-2xl border transition-all duration-500 ${
    glass ? 'glass border-white/8' : 'bg-gray-900/50 border-gray-700/50'
  } ${paddingClasses[padding]} ${className}`;

  const hoverClasses = hover
    ? 'hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer hover:bg-white/[0.02]'
    : '';

  const classes = `${baseClasses} ${hoverClasses}`;

  return (
    <div className={classes} onClick={onClick} style={style}>
      {/* Background Glow Effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;