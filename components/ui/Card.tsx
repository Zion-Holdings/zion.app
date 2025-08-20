import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', href, onClick, style }) => {
  const baseClasses = 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10';
  
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes} style={style}>
        {children}
      </button>
    );
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Card;