import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-md bg-white/30 rounded-xl border border-white/20 p-6 ${className}`}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;