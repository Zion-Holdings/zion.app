import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    };
    const renderSpinner = () => {
        switch (variant) {
            case 'pulse':
                return (_jsx("div", { className: cn("flex space-x-1", className), children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }, transition: {
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2
                        } }, i))) }));
            case 'dots':
                return (_jsx("div", { className: cn("flex space-x-1", className), children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-purple rounded-full", animate: {
                            y: [0, -10, 0]
                        }, transition: {
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1
                        } }, i))) }));
            case 'bars':
                return (_jsx("div", { className: cn("flex space-x-1", className), children: [0, 1, 2, 3].map((i) => (_jsx(motion.div, { className: "w-1 bg-zion-cyan rounded-full", animate: {
                            height: [20, 40, 20]
                        }, transition: {
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                        } }, i))) }));
            default:
                return (_jsx(motion.div, { className: cn("border-2 border-zion-cyan/30 border-t-zion-cyan rounded-full", sizeClasses[size], className), animate: { rotate: 360 }, transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    } }));
        }
    };
    return (_jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [renderSpinner(), text && (_jsx(motion.p, { className: cn("text-zion-slate-light font-medium", textSizeClasses[size]), initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: text }))] }));
}
// Page loading component
export function PageLoader({ text = "Loading...", className }) {
    return (_jsx("div", { className: cn("min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", className), children: _jsxs("div", { className: "text-center", children: [_jsx(LoadingSpinner, { size: "xl", variant: "default" }), _jsx(motion.p, { className: "mt-6 text-xl text-zion-cyan font-medium", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: text })] }) }));
}
// Skeleton loader component
export function Skeleton({ className, count = 1 }) {
    return (_jsx(_Fragment, { children: Array.from({ length: count }).map((_, i) => (_jsx(motion.div, { className: cn("bg-zion-blue-light/20 rounded-md animate-pulse", className), initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: i * 0.1 } }, i))) }));
}
// Card skeleton
export function CardSkeleton() {
    return (_jsxs("div", { className: "bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-xl p-6 space-y-4", children: [_jsx(Skeleton, { className: "h-8 w-3/4" }), _jsx(Skeleton, { className: "h-4 w-full" }), _jsx(Skeleton, { className: "h-4 w-2/3" }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Skeleton, { className: "h-6 w-16" }), _jsx(Skeleton, { className: "h-6 w-20" })] })] }));
}
