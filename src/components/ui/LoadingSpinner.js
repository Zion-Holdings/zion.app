var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', color = 'primary', customColor, className, text = 'Loading...', showText = false }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const colorClasses = {
        primary: 'border-zion-purple',
        secondary: 'border-zion-cyan',
        white: 'border-white',
        custom: ''
    };
    const borderColor = customColor || colorClasses[color];
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center gap-3', className), children: [_jsxs("div", { className: "relative", children: [_jsx(motion.div, { className: cn('border-2 border-gray-200 rounded-full', sizeClasses[size], borderColor), style: {
                            borderTopColor: customColor || 'transparent'
                        }, animate: {
                            rotate: 360
                        }, transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        } }), _jsx(motion.div, { className: cn('absolute inset-0 rounded-full', sizeClasses[size]), animate: {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3]
                        }, transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        } })] }), showText && (_jsx(motion.p, { className: "text-sm text-muted-foreground text-center", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: text }))] }));
}
export function LoadingDots({ className }) {
    return (_jsx("div", { className: cn('flex space-x-2', className), children: [0, 1, 2].map((index) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
            }, transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
            } }, index))) }));
}
// Skeleton loading component
export function Skeleton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn('animate-pulse rounded-md bg-muted', className) }, props)));
}
// Page loading component
export function PageLoader({ text = "Loading Zion...", className = "" }) {
    return (_jsx("div", { className: cn("min-h-screen flex items-center justify-center bg-background", className), children: _jsx(LoadingSpinner, { size: "xl", showText: true, text: text }) }));
}
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
// Inline loading component
export function InlineLoader({ className }) {
    return (_jsxs("div", { className: cn('inline-flex items-center gap-2', className), children: [_jsx(LoadingSpinner, { size: "sm" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Loading..." })] }));
}
