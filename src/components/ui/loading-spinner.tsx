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
                className="bg-zion-cyan rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  width: size === "sm" ? "4px" : size === "md" ? "8px" : size === "lg" ? "12px" : "16px",
                  height: size === "sm" ? "4px" : size === "md" ? "8px" : size === "lg" ? "12px" : "16px"
                }}
              />
            ))}
          </div>
        );

      case "dots":
        return (
          <div className={cn("flex space-x-1", sizeClasses[size])}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-zion-purple rounded-full"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
                style={{
                  width: size === "sm" ? "4px" : size === "md" ? "6px" : size === "lg" ? "8px" : "10px",
                  height: size === "sm" ? "4px" : size === "md" ? "6px" : size === "lg" ? "8px" : "10px"
                }}
              />
            ))}
          </div>
        );

      case "bars":
        return (
          <div className={cn("flex space-x-1", sizeClasses[size])}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-zion-cyan to-zion-purple rounded-sm"
                animate={{
                  height: ["20%", "100%", "20%"]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
                style={{
                  width: size === "sm" ? "2px" : size === "md" ? "3px" : size === "lg" ? "4px" : "6px"
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={cn(
              "border-2 border-zion-blue-light border-t-zion-cyan rounded-full",
              sizeClasses[size]
            )}
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
      {renderSpinner()}
      {text && (
        <motion.p
          className="mt-3 text-zion-slate-light text-sm font-medium"
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

// Full page loading component
export function FullPageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" text={text} variant="pulse" />
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ size = "sm", className }: { size?: "sm" | "md" | "lg" | "xl", className?: string }) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      <LoadingSpinner size={size} variant="dots" />
    </div>
  );
}