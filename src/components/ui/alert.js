import { jsx as _jsx } from "react/jsx-runtime";
export function Alert({ children, variant = 'default', className = '' }) {
    const baseClasses = 'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7';
    const variants = {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    };
    const classes = `${baseClasses} ${variants[variant]} ${className}`;
    return (_jsx("div", { className: classes, children: children }));
}
export function AlertDescription({ children, className = '' }) {
    return (_jsx("div", { className: `text-sm [&_p]:leading-relaxed ${className}`, children: children }));
}
