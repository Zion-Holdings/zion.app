import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export function Button({ children, variant = 'default', size = 'default', className = '', onClick, disabled = false, type = 'button', asChild = false, }) {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
    };
    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    };
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            className: classes,
            onClick,
            disabled,
            type,
        });
    }
    return (_jsx("button", { type: type, className: classes, onClick: onClick, disabled: disabled, children: children }));
}
