import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, AlertCircle, Info, Lock } from 'lucide-react';
export const Wizard = ({ steps, onStepChange, onComplete, onCancel, showStepNumbers = true, showStepDescriptions = true, showProgressBar = true, showNavigationButtons = true, allowStepNavigation = true, className = '', initialStep = 0, stepSize = 'md', orientation = 'horizontal' }) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [stepErrors, setStepErrors] = useState({});
    const [isValidating, setIsValidating] = useState(false);
    const [stepData, setStepData] = useState({});
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
    const validateStep = useCallback(async (stepIndex) => {
        const step = steps[stepIndex];
        if (!step.validation)
            return true;
        try {
            setIsValidating(true);
            const isValid = await step.validation();
            if (isValid) {
                setStepErrors(prev => {
                    const newErrors = Object.assign({}, prev);
                    delete newErrors[step.id];
                    return newErrors;
                });
                return true;
            }
            else {
                setStepErrors(prev => (Object.assign(Object.assign({}, prev), { [step.id]: 'Validation failed for this step' })));
                return false;
            }
        }
        catch (error) {
            setStepErrors(prev => (Object.assign(Object.assign({}, prev), { [step.id]: error instanceof Error ? error.message : 'Validation error occurred' })));
            return false;
        }
        finally {
            setIsValidating(false);
        }
    }, [steps]);
    const goToStep = useCallback(async (stepIndex) => {
        if (stepIndex < 0 || stepIndex >= steps.length)
            return;
        if (!allowStepNavigation && stepIndex > currentStep)
            return;
        // Validate current step before moving
        if (stepIndex > currentStep) {
            const isValid = await validateStep(currentStep);
            if (!isValid)
                return;
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
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(steps);
        }
    }, [currentStep, steps, validateStep, onComplete]);
    const markStepCompleted = useCallback((stepId) => {
        setCompletedSteps(prev => new Set([...prev, stepId]));
    }, []);
    const getStepStatus = (stepIndex) => {
        const step = steps[stepIndex];
        if (stepIndex < currentStep) {
            return completedSteps.has(step.id) ? 'completed' : 'visited';
        }
        else if (stepIndex === currentStep) {
            return 'current';
        }
        else {
            return 'upcoming';
        }
    };
    const getStepIcon = (step, stepIndex) => {
        const status = getStepStatus(stepIndex);
        if (status === 'completed') {
            return _jsx(Check, { className: `${stepIconSizes[stepSize]} text-green-600` });
        }
        else if (status === 'current') {
            return step.icon || _jsx(Info, { className: `${stepIconSizes[stepSize]} text-blue-600` });
        }
        else if (step.isDisabled) {
            return _jsx(Lock, { className: `${stepIconSizes[stepSize]} text-gray-400` });
        }
        else {
            return step.icon || _jsx(Info, { className: `${stepIconSizes[stepSize]} text-gray-400` });
        }
    };
    const getStepClasses = (stepIndex) => {
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
    const renderStepIndicator = (step, stepIndex) => {
        const status = getStepStatus(stepIndex);
        const isClickable = allowStepNavigation && !step.isDisabled;
        return (_jsxs("div", { className: getStepClasses(stepIndex), onClick: isClickable ? () => goToStep(stepIndex) : undefined, children: [_jsx("div", { className: "flex-shrink-0", children: getStepIcon(step, stepIndex) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [showStepNumbers && (_jsx("span", { className: `font-medium ${stepSizeClasses[stepSize]}`, children: stepIndex + 1 })), _jsx("h3", { className: `font-medium ${stepSizeClasses[stepSize]} truncate`, children: step.title }), step.isRequired && (_jsx("span", { className: "text-red-500 text-xs", children: "*" }))] }), showStepDescriptions && step.description && (_jsx("p", { className: "text-sm text-gray-600 mt-1 line-clamp-2", children: step.description }))] }), status === 'completed' && (_jsx(Check, { className: `${stepIconSizes[stepSize]} text-green-600 flex-shrink-0` }))] }, step.id));
    };
    const renderProgressBar = () => {
        if (!showProgressBar)
            return null;
        const progress = ((currentStep + 1) / steps.length) * 100;
        const completedCount = completedSteps.size;
        const totalRequired = steps.filter(step => step.isRequired).length;
        return (_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("span", { className: "text-sm font-medium text-gray-700", children: ["Step ", currentStep + 1, " of ", steps.length] }), _jsxs("span", { className: "text-sm text-gray-500", children: [completedCount, " of ", totalRequired, " required steps completed"] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out", style: { width: `${progress}%` } }) })] }));
    };
    const renderNavigationButtons = () => {
        var _a, _b;
        if (!showNavigationButtons)
            return null;
        const isFirstStep = currentStep === 0;
        const isLastStep = currentStep === steps.length - 1;
        const currentStepData = stepData[(_a = steps[currentStep]) === null || _a === void 0 ? void 0 : _a.id];
        const hasError = stepErrors[(_b = steps[currentStep]) === null || _b === void 0 ? void 0 : _b.id];
        return (_jsxs("div", { className: "flex items-center justify-between pt-6 border-t border-gray-200", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [onCancel && (_jsx("button", { onClick: onCancel, className: "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors", children: "Cancel" })), !isFirstStep && (_jsxs("button", { onClick: prevStep, className: "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center space-x-2", children: [_jsx(ChevronLeft, { className: "w-4 h-4" }), _jsx("span", { children: "Previous" })] }))] }), _jsxs("div", { className: "flex items-center space-x-3", children: [hasError && (_jsxs("div", { className: "flex items-center space-x-2 text-red-600 text-sm", children: [_jsx(AlertCircle, { className: "w-4 h-4" }), _jsx("span", { children: hasError })] })), isLastStep ? (_jsx("button", { onClick: completeWizard, disabled: isValidating || !!hasError, className: "px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2", children: isValidating ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), _jsx("span", { children: "Validating..." })] })) : (_jsxs(_Fragment, { children: [_jsx(Check, { className: "w-4 h-4" }), _jsx("span", { children: "Complete" })] })) })) : (_jsxs("button", { onClick: nextStep, disabled: isValidating || !!hasError, className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2", children: [_jsx("span", { children: "Next" }), _jsx(ChevronRight, { className: "w-4 h-4" })] }))] })] }));
    };
    if (steps.length === 0) {
        return (_jsxs("div", { className: `text-center py-8 text-gray-500 ${className}`, children: [_jsx(Info, { className: "w-12 h-12 mx-auto mb-4 text-gray-300" }), _jsx("p", { children: "No wizard steps defined" })] }));
    }
    const currentStepData = steps[currentStep];
    return (_jsxs("div", { className: `space-y-6 ${className}`, children: [renderProgressBar(), _jsxs("div", { className: `grid gap-6 ${orientation === 'vertical' ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'}`, children: [_jsxs("div", { className: `space-y-2 ${orientation === 'vertical' ? 'lg:col-span-1' : 'lg:col-span-1'}`, children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Steps" }), steps.map((step, index) => renderStepIndicator(step, index))] }), _jsx("div", { className: `${orientation === 'vertical' ? 'lg:col-span-3' : 'lg:col-span-3'}`, children: _jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-2", children: [currentStepData.icon && (_jsx("div", { className: "text-blue-600", children: currentStepData.icon })), _jsx("h3", { className: "text-xl font-semibold text-gray-900", children: currentStepData.title }), currentStepData.isRequired && (_jsx("span", { className: "text-red-500 text-sm", children: "*" }))] }), currentStepData.description && (_jsx("p", { className: "text-gray-600", children: currentStepData.description }))] }), _jsx("div", { className: "min-h-[300px]", children: currentStepData.component }), renderNavigationButtons()] }) })] })] }));
};
