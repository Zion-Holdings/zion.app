import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent" | "white";
  className?: string;
  text?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  color = "primary", 
  className,
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    primary: "border-zion-purple",
    secondary: "border-zion-cyan",
    accent: "border-zion-blue",
    white: "border-white"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative">
        <motion.div
          className={cn(
            "border-2 border-zion-slate-light/20 rounded-full",
            sizeClasses[size]
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 border-2 border-t-transparent rounded-full",
            colorClasses[color],
            sizeClasses[size]
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {text && (
        <motion.p
          className={cn(
            "mt-3 text-zion-slate-light font-medium",
            textSizes[size]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

export function LoadingDots({ 
  size = "md", 
  color = "primary",
  className 
}: Omit<LoadingSpinnerProps, "text">) {
  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
    xl: "w-4 h-4"
  };

  const colorClasses = {
    primary: "bg-zion-purple",
    secondary: "bg-zion-cyan",
    accent: "bg-zion-blue",
    white: "bg-white"
  };

  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            "rounded-full",
            colorClasses[color],
            dotSizes[size]
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function LoadingPulse({ 
  size = "md", 
  color = "primary",
  className 
}: Omit<LoadingSpinnerProps, "text">) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    primary: "bg-zion-purple",
    secondary: "bg-zion-cyan",
    accent: "bg-zion-blue",
    white: "bg-white"
  };

  return (
    <motion.div
      className={cn(
        "rounded-full",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}