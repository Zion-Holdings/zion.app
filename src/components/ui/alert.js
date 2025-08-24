import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const Alert = ({ children, className, variant = 'default' }) => {
    return (_jsx("div", { className: cn("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", variant === 'destructive' && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", className), children: children }));
};
export const AlertDescription = ({ children, className }) => {
    return (_jsx("div", { className: cn("text-sm [&_p]:leading-relaxed", className), children: children }));
};
