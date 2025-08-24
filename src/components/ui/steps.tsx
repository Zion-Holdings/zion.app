import React from 'react';
import { cn } from '@/lib/utils';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
  currentStep?: number;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  status?: string;
  label?: string;
  description?: string;
}

export const Steps: React.FC<StepsProps> = ({ children, className, currentStep = 0 }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const childProps = child.props || {};
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          // Only pass props if the child component accepts them
          const propsToPass: any = {};
          if ('isActive' in childProps || child.type === Step) {
            propsToPass.isActive = isActive;
          }
          if ('isCompleted' in childProps || child.type === Step) {
            propsToPass.isCompleted = isCompleted;
          }
          
          return React.cloneElement(child, propsToPass);
        }
        return child;
      })}
    </div>
  );
};

export const Step: React.FC<StepProps> = ({ children, className, isActive, isCompleted }) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2",
        isActive && "text-primary",
        isCompleted && "text-green-600",
        className
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
          isActive && "border-primary bg-primary text-white",
          isCompleted && "border-green-600 bg-green-600 text-white",
          !isActive && !isCompleted && "border-gray-300 text-gray-500"
        )}
      >
        {isCompleted ? "✓" : children}
      </div>
    </div>
  );
};