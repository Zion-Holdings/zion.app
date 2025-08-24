import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

interface StepsProps {
  currentStep: number
  steps: string[]
  className?: string
}

const Steps: React.FC<StepsProps> = ({ currentStep, steps, className }) => {
  return (
    <div className={cn("flex items-center justify-center space-x-4", className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium",
              index < currentStep
                ? "border-zion-cyan bg-zion-cyan text-white"
                : index === currentStep
                ? "border-zion-cyan bg-white text-zion-cyan"
                : "border-gray-300 bg-white text-gray-500"
            )}
          >
            {index < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              index + 1
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-0.5 w-8",
                index < currentStep ? "bg-zion-cyan" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}

interface StepProps {
  children: React.ReactNode
  className?: string
}

const Step: React.FC<StepProps> = ({ children, className }) => {
  return <div className={cn("", className)}>{children}</div>
}

export { Steps, Step }