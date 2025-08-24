import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '', 
  orientation = 'horizontal', 
  decorative = true 
}) => {
  const orientationClasses = orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
  
  return (
    <div
      className={`shrink-0 bg-border ${orientationClasses} ${className}`}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
    />
  );
};

export { Separator };