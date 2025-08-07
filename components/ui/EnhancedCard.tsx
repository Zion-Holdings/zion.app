import React from 'react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedCard;