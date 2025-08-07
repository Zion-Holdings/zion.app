import React from 'react';

interface EnhancedLayoutProps {
  children: React.ReactNode;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({ children }) => {
  return (
    <div className="enhanced-layout">
      {children}
    </div>
  );
};

export default EnhancedLayout;
