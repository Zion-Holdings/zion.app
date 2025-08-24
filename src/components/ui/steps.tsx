import React from 'react';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

export const Steps: React.FC<StepsProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {children}
    </div>
  );
};

export const Step: React.FC<StepProps> = ({ children, className = '', isActive = false, isCompleted = false }) => {
  const baseClasses = 'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200';
  const activeClasses = isActive ? 'bg-zion-blue text-white' : '';
  const completedClasses = isCompleted ? 'bg-green-500 text-white' : '';
  const defaultClasses = !isActive && !isCompleted ? 'bg-gray-100 text-gray-600' : '';
  
  const combinedClasses = `${baseClasses} ${activeClasses} ${completedClasses} ${defaultClasses} ${className}`.trim();
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};