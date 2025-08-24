import React from 'react'

interface StepsProps {
  children: React.ReactNode
  className?: string
}

interface StepProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
  isCompleted?: boolean
}

const Steps = ({ children, className = "" }: StepsProps) => (
  <div className={`flex items-center ${className}`}>
    {children}
  </div>
)

const Step = ({ children, className = "", isActive = false, isCompleted = false }: StepProps) => (
  <div className={`flex items-center ${className}`}>
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
        isCompleted
          ? "border-zion-cyan bg-zion-cyan text-white"
          : isActive
          ? "border-zion-cyan bg-white text-zion-cyan"
          : "border-zion-slate-300 bg-white text-zion-slate-500"
      }`}
    >
      {isCompleted ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <span className="text-sm font-medium">{children}</span>
      )}
    </div>
  </div>
)

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
)

export { Steps, Step, CheckIcon }