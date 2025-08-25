import React from 'react';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const Step: React.FC<StepsProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {children}
    </div>
  );
};

const StepIndicator: React.FC<StepsProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted bg-background text-sm font-medium text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};

const StepContent: React.FC<StepsProps> = ({ children, className = '' }) => {
  return (
    <div className={`ml-4 ${className}`}>
      {children}
    </div>
  );
};

export { Steps, Step, StepIndicator, StepContent };
