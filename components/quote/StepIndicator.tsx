import React from 'react';

export type StepIndicatorProps = {
  steps: string[];
  currentStep: number;
};

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <ol className="flex items-center gap-3 text-sm" aria-label="Progress">
      {steps.map((label, idx) => {
        const isActive = idx === currentStep;
        const isComplete = idx < currentStep;
        return (
          <li key={label} className="flex items-center">
            <div
              className={[
                'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold',
                isActive
                  ? 'bg-indigo-600 text-white'
                  : isComplete
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300',
              ].join(' ')}
            >
              {idx + 1}
            </div>
            <span className="ml-2 mr-3 whitespace-nowrap">
              {label}
            </span>
            {idx < steps.length - 1 && (
              <span className="w-10 h-px bg-gray-300 dark:bg-gray-700" />
            )}
          </li>
        );
      })}
    </ol>
  );
}