import React from 'react';

interface SonnerProps {
  children?: React.ReactNode;
}

export const Sonner: React.FC<SonnerProps> = ({ children }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      {children}
    </div>
  );
};