import React from 'react';

interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  className,
  children 
}) => {
  return (
    <div className={`filter-sidebar ${className || ''}`}>
      {children}
    </div>
  );
};

export default FilterSidebar;