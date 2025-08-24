import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', className, text, variant = 'default' }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const textSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg'
    };
    if (variant === 'pulse') {
        return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx("div", { className: cn("rounded-full bg-zion-purple animate-pulse", sizeClasses[size]) }), text && (_jsx("p", { className: cn("mt-2 text-zion-slate-light text-center", textSizeClasses[size]), children: text }))] }));
    }
    if (variant === 'dots') {
        return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx("div", { className: "flex space-x-1", children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                            y: [0, -10, 0],
                            opacity: [0.5, 1, 0.5]
                        }, transition: {
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        } }, i))) }), text && (_jsx("p", { className: cn("mt-3 text-zion-slate-light text-center", textSizeClasses[size]), children: text }))] }));
    }
    return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx(motion.div, { className: cn("border-2 border-zion-blue-light border-t-zion-purple rounded-full", sizeClasses[size]), animate: { rotate: 360 }, transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                } }), text && (_jsx(motion.p, { className: cn("mt-3 text-zion-slate-light text-center", textSizeClasses[size]), initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.5 }, children: text }))] }));
}
export function PageLoader() {
    return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsx("div", { className: "text-center", children: _jsx(LoadingSpinner, { size: "xl", text: "Loading amazing content..." }) }) }));
}
export function SectionLoader() {
    return (_jsx("div", { className: "py-20 flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "lg", text: "Loading section..." }) }));
}
export function CardLoader() {
    return (_jsx("div", { className: "p-8 flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "md", text: "Loading..." }) }));
}
