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
export function LoadingSpinner(_a) {
    var { size = 'md', variant = 'default', text, className } = _a, props = __rest(_a, ["size", "variant", "text", "className"]);
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const renderSpinner = () => {
        switch (variant) {
            case 'dots':
                return _jsx(LoadingDots, { className: cn(sizeClasses[size], className) });
            case 'pulse':
                return _jsx(LoadingPulse, { className: cn(sizeClasses[size], className) });
            case 'ring':
                return _jsx(LoadingRing, { className: cn(sizeClasses[size], className) });
            default:
                return _jsx(DefaultSpinner, { className: cn(sizeClasses[size], className) });
        }
    };
    return (_jsxs("div", Object.assign({ className: "flex flex-col items-center justify-center space-y-4" }, props, { children: [renderSpinner(), text && (_jsx(motion.p, { className: "text-sm text-muted-foreground text-center", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: text }))] })));
}
function DefaultSpinner({ className }) {
    return (_jsx(motion.div, { className: cn("border-2 border-muted border-t-primary rounded-full", className), animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } }));
}
function LoadingDots({ className }) {
    return (_jsx("div", { className: cn("flex space-x-1", className), children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: "w-2 h-2 bg-primary rounded-full", animate: {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
            }, transition: {
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2
            } }, i))) }));
}
function LoadingPulse({ className }) {
    return (_jsx(motion.div, { className: cn("bg-primary rounded-full", className), animate: {
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
        }, transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        } }));
}
function LoadingRing({ className }) {
    return (_jsxs("div", { className: cn("relative", className), children: [_jsx(motion.div, { className: "absolute inset-0 border-4 border-muted rounded-full", animate: { rotate: 360 }, transition: { duration: 2, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "absolute inset-0 border-4 border-transparent border-t-primary rounded-full", animate: { rotate: -360 }, transition: { duration: 1.5, repeat: Infinity, ease: "linear" } })] }));
}
// Full page loader component
export function PageLoader(_a) {
    var { text = "Loading...", className = "min-h-screen" } = _a, props = __rest(_a, ["text", "className"]);
    return (_jsx("div", Object.assign({ className: cn("flex items-center justify-center", className) }, props, { children: _jsx(LoadingSpinner, { size: "xl", variant: "ring", text: text, className: "text-primary" }) })));
}
// Inline loader for buttons and small spaces
export function InlineLoader({ className }) {
    return (_jsx(LoadingSpinner, { size: "sm", variant: "dots", className: cn("text-current", className) }));
}
// Section loader for content areas
export function SectionLoader(_a) {
    var { text = "Loading content...", className = "py-20" } = _a, props = __rest(_a, ["text", "className"]);
    return (_jsx("div", Object.assign({ className: cn("flex items-center justify-center", className) }, props, { children: _jsx(LoadingSpinner, { size: "lg", variant: "default", text: text }) })));
}
