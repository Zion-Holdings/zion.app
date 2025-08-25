<<<<<<< HEAD

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
=======
import React from 'react';
import { cn } from '@/lib/utils';
>>>>>>> premium-enhancements-2025

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const textClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <div className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
          sizeClasses[size]
        )} />
      </div>
    </div>
  );
}

export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <LoadingSpinner size="xl" className="mb-4" />
        <p className="text-white text-lg">{text}</p>
      </div>
<<<<<<< HEAD
      {text && (
        <motion.p
          className={cn("text-zion-slate-light font-medium", textSizes[size])}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
=======
>>>>>>> premium-enhancements-2025
    </div>
  );
}

<<<<<<< HEAD
// Full page loading component
=======
>>>>>>> premium-enhancements-2025
export function FullPageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
<<<<<<< HEAD
        <LoadingSpinner size="xl" text={text} variant="pulse" />
        <motion.div
          className="mt-8 text-zion-slate-light text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Please wait while we prepare your experience...
        </motion.div>
=======
        <LoadingSpinner size="xl" className="mb-4" />
        <p className="text-white text-lg">{text}</p>
>>>>>>> premium-enhancements-2025
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ text, size = "sm" }: { text?: string; size?: "sm" | "md" | "lg" }) {
  return (
<<<<<<< HEAD
    <div className="inline-flex items-center gap-2">
      <LoadingSpinner size={size} variant="dots" />
      {text && <span className="text-zion-slate-light text-sm">{text}</span>}
=======
    <div className="inline-flex items-center">
      <LoadingSpinner size={size} />
      {text && <span className="ml-2 text-sm text-gray-600">{text}</span>}
>>>>>>> premium-enhancements-2025
    </div>
  );
}