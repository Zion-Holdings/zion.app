import * as React from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  currentStep: number;
  steps: string[];
  className?: string;
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ currentStep, steps, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-2", className)}
        {...props}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                index <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index < currentStep ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 w-8",
                  index < currentStep ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);
Steps.displayName = "Steps";

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Step.displayName = "Step";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-4 w-4", className)}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export { Steps, Step };