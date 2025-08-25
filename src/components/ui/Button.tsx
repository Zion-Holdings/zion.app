import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-zion-cyan text-white hover:bg-zion-cyan-light focus:ring-zion-cyan shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-lg hover:shadow-xl hover:shadow-red-500/25",
        outline: "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white focus:ring-zion-cyan",
        secondary: "bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20 hover:text-white border border-zion-cyan/20 hover:border-zion-cyan/40",
        ghost: "text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10",
        link: "text-zion-cyan underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25",
        neon: "bg-zion-blue-dark text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark shadow-lg hover:shadow-xl hover:shadow-zion-cyan/50",
        glass: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/20 hover:border-zion-cyan/40",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        xl: "h-14 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        lift: "hover:-translate-y-1 hover:shadow-xl",
        glow: "hover:shadow-lg hover:shadow-zion-cyan/25",
        pulse: "hover:animate-pulse",
        bounce: "hover:animate-bounce",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale",
    },
  }
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    const content = (
      <>
        {loading && (
          <motion.div
            className="mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        disabled={isDisabled}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Specialized button components
export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'> & { gradient?: boolean }> = ({ 
  gradient = true, 
  ...props 
}) => (
  <Button variant={gradient ? "gradient" : "default"} {...props} />
);

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="outline" {...props} />
);

export const IconButton: React.FC<Omit<ButtonProps, 'size'> & { icon: React.ReactNode }> = ({ 
  icon, 
  ...props 
}) => (
  <Button size="icon" {...props}>
    {icon}
  </Button>
);

export const LoadingButton: React.FC<ButtonProps & { loadingText?: string }> = ({ 
  loadingText = "Loading...", 
  children, 
  ...props 
}) => (
  <Button loading {...props}>
    {loadingText}
  </Button>
);

export default Button;