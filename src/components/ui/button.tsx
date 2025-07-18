import React from 'react''
import * as React from 'react''
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
'
const buttonVariants = cva('
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0','
  {'
    variants: {
      variant: "{,;
        default: 
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md','
        destructive:'
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md','
        outline:'
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md','
        secondary:'
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md','
        ghost: 'hover:bg-accent hover:text-accent-foreground','
        link: 'text-primary underline-offset-4 hover:underline active:text-primary/80','
        gradient:'
          'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-sm hover:shadow-md hover:from-primary/90 hover:to-primary/70','
        modern:'
          'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700','
        subtle:'
          'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground','
        success:'
          'bg-green-600 text-white shadow-sm hover:bg-green-700 hover:shadow-md','
        warning:'
          'bg-yellow-600 text-white shadow-sm hover:bg-yellow-700 hover:shadow-md','
      },'
      size: {
        default: 'h-10 px-4 py-2','
        sm: 'h-9 rounded-md px-3 text-xs','
        lg: 'h-11 rounded-md px-8 text-base','
        xl: 'h-12 rounded-lg px-10 text-lg','
        icon: 'h-10 w-10','
        'icon-sm': 'h-8 w-8','
        'icon-lg': 'h-12 w-12','
      },'
      animation: {
        none: '','
        pulse: 'animate-pulse','
        bounce: 'animate-bounce','
        spin: 'animate-spin','
      },'
    },'
    defaultVariants: {
      variant: 'default','
      size: 'default','
      animation: 'none','
    },'
  },'
);
'
export interface ButtonProps'
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,'
    VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode'
  rightIcon?: React.ReactNode'
};
'
const Button: React.forwardRef<HTMLButtonElement, ButtonProps>(
  (;
    {;
      className,;
      variant,;
      size,;
      animation,;
      asChild = false,;
      loading = false,;
      leftIcon,;
      rightIcon,;
      children,;
      disabled,
      ...props;""
    },;
    ref,
  ) => {"
    const Comp = asChild ? Slot : 'button'
'
    return ('
      <Comp;
        className={cn('
          buttonVariants({ variant, size, animation, className }),'
          loading && 'pointer-events-none opacity-70','
        )};
        ref={ref};
        disabled={disabled || loading}'
        {...props}'
      >;
        {loading && ('
          <svg'
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns=http://www.w3.org/2000/svg"
            fill="none"
            viewBox=0 0 24 24"
          >"
            <circle;
              className=opacity-25"
              cx="12"
              cy=12"
              r="10"
              stroke=currentColor"
              strokeWidth="4
            />"
            <path;"
              className="opacity-75"
              fill=currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z
            />;
          </svg>)};
        {!loading && leftIcon && leftIcon};
        {children};"
        {!loading && rightIcon && rightIcon}"
      </Comp>;"
    );
  },"
);"
Button.displayName = 'Button'

export { Button, buttonVariants }'
'''''