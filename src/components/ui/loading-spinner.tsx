import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative">
        <div className={cn(
          "animate-spin rounded-full border-2 border-zion-blue-light/20",
          sizeClasses[size]
        )}>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-transparent border-t-zion-cyan animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-transparent border-t-zion-purple animate-pulse"></div>
        </div>
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-transparent border-t-zion-cyan animate-spin",
          sizeClasses[size]
        )} style={{ animationDuration: '1.5s' }}></div>
      </div>
      {text && (
        <p className="mt-3 text-zion-slate-light text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

export function LoadingDots({ className, text }: { className?: string; text?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-zion-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-zion-cyan-light rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      {text && (
        <p className="mt-3 text-zion-slate-light text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
}

export function LoadingSkeleton({ className, lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-zion-blue-light/20 rounded animate-pulse"
          style={{ 
            width: `${Math.random() * 40 + 60}%`,
            animationDelay: `${i * 100}ms`
          }}
        />
      ))}
    </div>
  );
}