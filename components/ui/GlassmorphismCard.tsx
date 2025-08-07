import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
