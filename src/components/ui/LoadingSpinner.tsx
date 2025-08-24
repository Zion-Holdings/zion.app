import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'ring';
  text?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text,
  className,
  ...props 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return <LoadingDots className={cn(sizeClasses[size], className)} />;
      case 'pulse':
        return <LoadingPulse className={cn(sizeClasses[size], className)} />;
      case 'ring':
        return <LoadingRing className={cn(sizeClasses[size], className)} />;
      default:
        return <DefaultSpinner className={cn(sizeClasses[size], className)} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4" {...props}>
      {renderSpinner()}
      {text && (
        <motion.p 
          className="text-sm text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

function DefaultSpinner({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("border-2 border-muted border-t-primary rounded-full", className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}

function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-primary rounded-full"
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
}

function LoadingPulse({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("bg-primary rounded-full", className)}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

function LoadingRing({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 border-4 border-muted rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Full page loader component
export function PageLoader({ 
  text = "Loading...", 
  className = "min-h-screen",
  ...props 
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <LoadingSpinner 
        size="xl" 
        variant="ring" 
        text={text}
        className="text-primary"
      />
    </div>
  );
}

// Inline loader for buttons and small spaces
export function InlineLoader({ className }: { className?: string }) {
  return (
    <LoadingSpinner 
      size="sm" 
      variant="dots" 
      className={cn("text-current", className)} 
    />
  );
}

// Section loader for content areas
export function SectionLoader({ 
  text = "Loading content...", 
  className = "py-20",
  ...props 
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <LoadingSpinner 
        size="lg" 
        variant="default" 
        text={text}
      />
    </div>
  );
}