import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  variant?: "default" | "pulse" | "dots" | "bars";
}

export function LoadingSpinner({ 
  size = "md", 
  className, 
  text,
  variant = "default" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const renderSpinner = () => {
    switch (variant) {
      case "pulse":
        return (
          <div className={cn("flex space-x-1", sizeClasses[size])}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-current rounded-full"
                style={{ width: size === "sm" ? "4px" : size === "md" ? "8px" : size === "lg" ? "12px" : "16px" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      case "dots":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-current rounded-full"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      case "bars":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-current rounded-full"
                style={{ height: size === "sm" ? "16px" : size === "md" ? "24px" : size === "lg" ? "32px" : "40px" }}
                animate={{
                  scaleY: [1, 1.5, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={cn("border-2 border-current border-t-transparent rounded-full", sizeClasses[size])}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="text-zion-cyan">
        {renderSpinner()}
      </div>
      {text && (
        <motion.p
          className="mt-3 text-sm text-zion-slate-light text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Page loading component
export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
      <LoadingSpinner size="lg" text={text} variant="default" />
    </div>
  );
}

// Inline loading component
export function InlineLoader({ text, size = "sm" }: { text?: string; size?: "sm" | "md" | "lg" }) {
  return (
    <div className="inline-flex items-center gap-2">
      <LoadingSpinner size={size} variant="pulse" />
      {text && <span className="text-sm text-zion-slate-light">{text}</span>}
    </div>
  );
}