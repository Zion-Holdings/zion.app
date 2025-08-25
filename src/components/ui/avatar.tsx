import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      {children}
    </div>
  );
};

const AvatarImage: React.FC<AvatarProps> = ({ children, className = '' }) => {
  return (
    <img className={`aspect-square h-full w-full ${className}`} />
  );
};

const AvatarFallback: React.FC<AvatarProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
