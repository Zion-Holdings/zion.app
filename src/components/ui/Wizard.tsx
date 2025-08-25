import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, AlertCircle, Info, Lock } from 'lucide-react';

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  component: React.ReactNode;
  validation?: () => boolean | Promise<boolean>;
  isRequired?: boolean;
  isDisabled?: boolean;
  isCompleted?: boolean;
  metadata?: Record<string, any>;
}

export interface WizardProps {
  steps: WizardStep[];
  onStepChange?: (currentStep: number, step: WizardStep) => void;
  onComplete?: (allSteps: WizardStep[]) => void;
  onCancel?: () => void;
  showStepNumbers?: boolean;
  showStepDescriptions?: boolean;
  showProgressBar?: boolean;
  showNavigationButtons?: boolean;
  allowStepNavigation?: boolean;
  className?: string;
  initialStep?: number;
  stepSize?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
}

export const Wizard: React.FC<WizardProps> = ({
  steps,
  onStepChange,
  onComplete,
  onCancel,
  showStepNumbers = true,
  showStepDescriptions = true,
  showProgressBar = true,
  showNavigationButtons = true,
  allowStepNavigation = true,
  className = '',
  initialStep = 0,
  stepSize = 'md',
  orientation = 'horizontal'
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
  const [isValidating, setIsValidating] = useState(false);
  const [stepData, setStepData] = useState<Record<string, any>>({});

  const stepSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const stepIconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStep, steps[currentStep]);
    }
  }, [currentStep, steps, onStepChange]);

  const validateStep = useCallback(async (stepIndex: number): Promise<boolean> => {
    const step = steps[stepIndex];
    if (!step.validation) return true;

    try {
      setIsValidating(true);
      const isValid = await step.validation();
      
      if (isValid) {
        setStepErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[step.id];
          return newErrors;
        });
        return true;
      } else {
        setStepErrors(prev => ({
          ...prev,
          [step.id]: 'Validation failed for this step'
        }));
        return false;
      }
    } catch (error) {
      setStepErrors(prev => ({
        ...prev,
        [step.id]: error instanceof Error ? error.message : 'Validation error occurred'
      }));
      return false;
    } finally {
      setIsValidating(false);
    }
  }, [steps]);

  const goToStep = useCallback(async (stepIndex: number) => {
    if (stepIndex < 0 || stepIndex >= steps.length) return;
    if (!allowStepNavigation && stepIndex > currentStep) return;

    // Validate current step before moving
    if (stepIndex > currentStep) {
      const isValid = await validateStep(currentStep);
      if (!isValid) return;
    }

    setCurrentStep(stepIndex);
  }, [currentStep, steps.length, allowStepNavigation, validateStep]);

  const nextStep = useCallback(async () => {
    if (currentStep < steps.length - 1) {
      const isValid = await validateStep(currentStep);
      if (isValid) {
        goToStep(currentStep + 1);
      }
    }
  }, [currentStep, steps.length, validateStep, goToStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  }, [currentStep, goToStep]);

  const completeWizard = useCallback(async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCompletedSteps(prev => new Set([...prev, steps[currentStep].id]));
      onComplete?.(steps);
    }
  }, [currentStep, steps, validateStep, onComplete]);

  const markStepCompleted = useCallback((stepId: string) => {
    setCompletedSteps(prev => new Set([...prev, stepId]));
  }, []);

  const getStepStatus = (stepIndex: number) => {
    const step = steps[stepIndex];
    
    if (stepIndex < currentStep) {
      return completedSteps.has(step.id) ? 'completed' : 'visited';
    } else if (stepIndex === currentStep) {
      return 'current';
    } else {
      return 'upcoming';
    }
  };

  const getStepIcon = (step: WizardStep, stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    
    if (status === 'completed') {
      return <Check className={`${stepIconSizes[stepSize]} text-green-600`} />;
    } else if (status === 'current') {
      return step.icon || <Info className={`${stepIconSizes[stepSize]} text-blue-600`} />;
    } else if (step.isDisabled) {
      return <Lock className={`${stepIconSizes[stepSize]} text-gray-400`} />;
    } else {
      return step.icon || <Info className={`${stepIconSizes[stepSize]} text-gray-400`} />;
    }
  };

  const getStepClasses = (stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    const step = steps[stepIndex];
    
    let baseClasses = 'flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer';
    
    switch (status) {
      case 'completed':
        baseClasses += ' bg-green-50 border border-green-200 text-green-700';
        break;
      case 'current':
        baseClasses += ' bg-blue-50 border border-blue-200 text-blue-700 ring-2 ring-blue-500';
        break;
      case 'visited':
        baseClasses += ' bg-gray-50 border border-gray-200 text-gray-700';
        break;
      default:
        baseClasses += step.isDisabled 
          ? ' bg-gray-50 border border-gray-200 text-gray-400 cursor-not-allowed'
          : ' bg-white border border-gray-200 text-gray-500 hover:bg-gray-50';
    }
    
    return baseClasses;
  };

  const renderStepIndicator = (step: WizardStep, stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    const isClickable = allowStepNavigation && !step.isDisabled;
    
    return (
      <div
        key={step.id}
        className={getStepClasses(stepIndex)}
        onClick={isClickable ? () => goToStep(stepIndex) : undefined}
      >
        {/* Step Icon */}
        <div className="flex-shrink-0">
          {getStepIcon(step, stepIndex)}
        </div>

        {/* Step Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            {showStepNumbers && (
              <span className={`font-medium ${stepSizeClasses[stepSize]}`}>
                {stepIndex + 1}
              </span>
            )}
            <h3 className={`font-medium ${stepSizeClasses[stepSize]} truncate`}>
              {step.title}
            </h3>
            {step.isRequired && (
              <span className="text-red-500 text-xs">*</span>
            )}
          </div>
          
          {showStepDescriptions && step.description && (
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {step.description}
            </p>
          )}
        </div>

        {/* Step Status */}
        {status === 'completed' && (
          <Check className={`${stepIconSizes[stepSize]} text-green-600 flex-shrink-0`} />
        )}
      </div>
    );
  };

  const renderProgressBar = () => {
    if (!showProgressBar) return null;

    const progress = ((currentStep + 1) / steps.length) * 100;
    const completedCount = completedSteps.size;
    const totalRequired = steps.filter(step => step.isRequired).length;

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {completedCount} of {totalRequired} required steps completed
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  const renderNavigationButtons = () => {
    if (!showNavigationButtons) return null;

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;
    const currentStepData = stepData[steps[currentStep]?.id];
    const hasError = stepErrors[steps[currentStep]?.id];

    return (
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          )}
          
          {!isFirstStep && (
            <button
              onClick={prevStep}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {hasError && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{hasError}</span>
            </div>
          )}
          
          {isLastStep ? (
            <button
              onClick={completeWizard}
              disabled={isValidating || !!hasError}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isValidating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Validating...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Complete</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={isValidating || !!hasError}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  };

  if (steps.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 ${className}`}>
        <Info className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p>No wizard steps defined</p>
      </div>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Bar */}
      {renderProgressBar()}

      <div className={`grid gap-6 ${
        orientation === 'vertical' ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'
      }`}>
        {/* Step Indicators */}
        <div className={`space-y-2 ${
          orientation === 'vertical' ? 'lg:col-span-1' : 'lg:col-span-1'
        }`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Steps</h2>
          {steps.map((step, index) => renderStepIndicator(step, index))}
        </div>

        {/* Step Content */}
        <div className={`${orientation === 'vertical' ? 'lg:col-span-3' : 'lg:col-span-3'}`}>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {/* Step Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                {currentStepData.icon && (
                  <div className="text-blue-600">
                    {currentStepData.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900">
                  {currentStepData.title}
                </h3>
                {currentStepData.isRequired && (
                  <span className="text-red-500 text-sm">*</span>
                )}
              </div>
              
              {currentStepData.description && (
                <p className="text-gray-600">{currentStepData.description}</p>
              )}
            </div>

            {/* Step Component */}
            <div className="min-h-[300px]">
              {currentStepData.component}
            </div>

            {/* Navigation Buttons */}
            {renderNavigationButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};