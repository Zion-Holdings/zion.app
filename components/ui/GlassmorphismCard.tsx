import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;
