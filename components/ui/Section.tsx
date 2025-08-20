import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  container = true,
  spacing = 'lg'
}) => {
  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };

  const content = container ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  ) : children;

  return (
    <section className={`${spacingClasses[spacing]} ${className}`}>
      {content}
    </section>
  );
};

export default Section;