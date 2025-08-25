import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', color = 'primary', customColor, text = 'Loading...', className, showText = false }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const colorClasses = {
        primary: 'border-zion-purple border-t-transparent',
        secondary: 'border-zion-cyan border-t-transparent',
        white: 'border-white border-t-transparent',
        custom: ''
    };
    const textSizes = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg'
    };
    const spinnerColor = customColor || (color === 'custom' ? undefined : undefined);
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center', className), children: [_jsx(motion.div, { className: cn('rounded-full border-2 animate-spin', sizeClasses[size], color === 'custom' ? '' : colorClasses[color]), style: spinnerColor ? { borderColor: spinnerColor, borderTopColor: 'transparent' } : undefined, role: "status", "aria-label": "Loading", children: _jsx("span", { className: "sr-only", children: text }) }), showText && (_jsx(motion.p, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: cn('mt-3 text-zion-slate-light font-medium', textSizes[size]), children: text }))] }));
}
// Pulse loading variant
export function LoadingPulse({ size = 'md', color = 'primary', className }) {
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
    return (_jsx(motion.div, { className: cn('rounded-full', sizeClasses[size], color === 'custom' ? '' : colorClasses[color], className), animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
        }, transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }, role: "status", "aria-label": "Loading", children: _jsx("span", { className: "sr-only", children: "Loading" }) }));
}
// Skeleton loading variant
export function LoadingSkeleton({ className, lines = 3, height = 'h-4' }) {
    return (_jsx("div", { className: cn('space-y-3', className), children: Array.from({ length: lines }).map((_, index) => (_jsx(motion.div, { className: cn('bg-zion-slate-light/20 rounded animate-pulse', height), initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: index * 0.1 } }, index))) }));
}
// Page loading overlay
export const LoadingOverlay = ({ text = "Loading...", showSpinner = true }) => {
    return (_jsx("div", { className: "loading-overlay", children: _jsxs("div", { className: "text-center", children: [showSpinner && (_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" })), _jsx("p", { className: "text-lg", children: text })] }) }));
};
