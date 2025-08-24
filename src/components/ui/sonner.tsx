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

export const Toaster: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toast notifications will be rendered here */}
    </div>
  );
};