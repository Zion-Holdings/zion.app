import React from 'react';

interface StepsProps {
  currentStep: number;
  steps: string[];
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ currentStep, steps, className = '' }: StepsProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
              index <= currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-8 ${
                index < currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function Step({ children, className = '' }: StepProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}