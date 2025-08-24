import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', className, text }) {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };
    const textSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center', className), children: [_jsx(motion.div, { className: cn('border-2 border-zion-blue-light border-t-zion-cyan rounded-full', sizeClasses[size]), animate: { rotate: 360 }, transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                } }), text && (_jsx(motion.p, { className: cn('mt-3 text-zion-slate-light', textSizes[size]), initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: text }))] }));
}
export function LoadingDots({ className }) {
    return (_jsxs("div", { className: cn('flex space-x-2', className), children: [[0, 1, 2].map((index) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                }, transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                } }, index))), "======= // Skeleton loading component export function Skeleton(", (className,
            ), "...props }: React.HTMLAttributes", _jsxs(HTMLDivElement, { children: [") ", , "return (", _jsx("div", Object.assign({ className: cn('animate-pulse rounded-md bg-muted', className) }, props)), "); } // Page loading component export function PageLoader() ", , "return (", _jsxs("div", { className: "min-h-screen flex items-center justify-center bg-background", children: [_jsx(LoadingSpinner, { size: "xl", showText: true, text: "Loading Zion..." }), ">>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-f1c5"] })] })] }));
    export function LoadingPulse({ className }) {
        return (_jsx(motion.div, { className: cn('w-4 h-4 bg-zion-purple rounded-full', className), animate: {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
            }, transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
            } }));
    }
}
