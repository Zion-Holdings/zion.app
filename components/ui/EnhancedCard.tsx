import React from 'react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default EnhancedCard;