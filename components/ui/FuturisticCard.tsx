import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;