import React from 'react';

interface ToasterProps {
  children?: React.ReactNode;
}

export const Toaster: React.FC<ToasterProps> = ({ children }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      {children}
    </div>
  );
};