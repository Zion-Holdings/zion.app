import React from 'react';

interface ToasterProps {
  children: React.ReactNode;
  className?: string;
}

const Toaster: React.FC<ToasterProps> = ({ children, className = '' }) => {
  return (
    <div className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className}`}>
      {children}
    </div>
  );
};

export { Toaster };