import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '', 
  orientation = 'horizontal' 
}) => {
  const baseClasses = 'shrink-0 bg-border';
  const orientationClasses = orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
  
  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
};

export { Separator };
