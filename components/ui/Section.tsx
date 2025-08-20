import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({ 
  children, 
  className = '', 
  container = true,
  spacing = 'lg' 
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const baseClasses = spacingClasses[spacing];
  const classes = `${baseClasses} ${className}`;

  if (container) {
    return (
      <section className={classes}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={classes}>
      {children}
    </section>
  );
}