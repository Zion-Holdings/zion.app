import React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface Step {
  title: string;
  description?: string;
  status: 'pending' | 'current' | 'completed';
}

export interface StepsProps {
  steps: Step[];
  className?: string;
}

export function Steps({ steps, className }: StepsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2",
                step.status === 'completed' && "bg-zion-cyan border-zion-cyan text-white",
                step.status === 'current' && "bg-zion-purple border-zion-purple text-white",
                step.status === 'pending' && "bg-transparent border-zion-slate-light text-zion-slate-light"
              )}
            >
              {step.status === 'completed' ? (
                <Check className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            <div className="mt-2 text-center">
              <div className={cn(
                "text-sm font-medium",
                step.status === 'completed' && "text-zion-cyan",
                step.status === 'current' && "text-zion-purple",
                step.status === 'pending' && "text-zion-slate-light"
              )}>
                {step.title}
              </div>
              {step.description && (
                <div className="text-xs text-zion-slate-light mt-1">
                  {step.description}
                </div>
              )}
            </div>
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-0.5 mx-4",
                steps[index + 1].status === 'completed' 
                  ? "bg-zion-cyan" 
                  : "bg-zion-slate-light"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
