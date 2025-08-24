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
<<<<<<< HEAD
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
    </div>
  );
}

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
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ text, size = "sm" }: { text?: string; size?: "sm" | "md" | "lg" }) {
  return (
    <div className="inline-flex items-center gap-2">
      <LoadingSpinner size={size} variant="dots" />
      {text && <span className="text-zion-slate-light text-sm">{text}</span>}
=======
        style={spinnerColor ? { borderColor: spinnerColor, borderTopColor: 'transparent' } : undefined}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">{text}</span>
      </motion.div>
      
      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            'mt-3 text-zion-slate-light font-medium',
            textSizes[size]
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Pulse loading variant
export function LoadingPulse({
  size = 'md',
  color = 'primary',
  className
}: Omit<LoadingSpinnerProps, 'text' | 'showText'>) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'bg-zion-purple',
    secondary: 'bg-zion-cyan',
    white: 'bg-white',
    custom: ''
  };

  return (
    <motion.div
      className={cn(
        'rounded-full',
        sizeClasses[size],
        color === 'custom' ? '' : colorClasses[color],
        className
      )}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading</span>
    </motion.div>
  );
}

// Skeleton loading variant
export function LoadingSkeleton({
  className,
  lines = 3,
  height = 'h-4'
}: {
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            'bg-zion-slate-light/20 rounded animate-pulse',
            height
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

// Page loading overlay
export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  text = "Loading...", 
  showSpinner = true 
}) => {
  return (
    <div className="loading-overlay">
      <div className="text-center">
        {showSpinner && (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        )}
        <p className="text-lg">{text}</p>
      </div>
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
    </div>
  );
};