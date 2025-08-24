<<<<<<< HEAD
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'white';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-zion-cyan',
    primary: 'text-zion-blue',
    secondary: 'text-zion-purple',
    white: 'text-white'
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
=======
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

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };

  if (variant === "pulse") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-1 rounded-full bg-zion-blue-dark"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-zion-cyan to-zion-purple rounded-full"
              style={{ height: `${(i + 1) * 8}px` }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  // Default spinner
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-zion-cyan/20"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-zion-cyan"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-zion-purple"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      {text && (
        <motion.p
          className={cn("text-zion-slate-light font-medium", textSizes[size])}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
>>>>>>> origin/website-audit-and-enhancement-complete
    </div>
  );
}

<<<<<<< HEAD
// Page loading component
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="text-center text-white">
        <LoadingSpinner size="xl" variant="white" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Loading Zion Tech Group...</h1>
        <p className="mt-2 text-blue-200">Please wait while we prepare your experience.</p>
=======
// Full page loading component
export function FullPageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" text={text} variant="pulse" />
        <motion.div
          className="mt-8 text-zion-slate-light text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Please wait while we prepare your experience...
        </motion.div>
>>>>>>> origin/website-audit-and-enhancement-complete
      </div>
    </div>
  );
}

// Inline loading component
<<<<<<< HEAD
export function InlineLoader({ size = 'sm', variant = 'default' }: LoadingSpinnerProps) {
  return (
    <div className="inline-flex items-center">
      <LoadingSpinner size={size} variant={variant} className="mr-2" />
      <span className="text-sm text-gray-600">Loading...</span>
=======
export function InlineLoader({ text, size = "sm" }: { text?: string; size?: "sm" | "md" | "lg" }) {
  return (
    <div className="inline-flex items-center gap-2">
      <LoadingSpinner size={size} variant="dots" />
      {text && <span className="text-zion-slate-light text-sm">{text}</span>}
>>>>>>> origin/website-audit-and-enhancement-complete
    </div>
  );
}