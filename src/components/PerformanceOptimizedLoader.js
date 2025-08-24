import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function PerformanceOptimizedLoader({ size = 'md', color = 'primary', text, fullScreen = false }) {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };
    const colorClasses = {
        primary: 'text-zion-purple',
        secondary: 'text-zion-cyan',
        white: 'text-white'
    };
    const spinnerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };
    const pulseVariants = {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const LoaderContent = () => (_jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [_jsx(motion.div, { variants: spinnerVariants, animate: "animate", className: `${sizeClasses[size]} ${colorClasses[color]}`, children: _jsx("svg", { className: "w-full h-full", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeDasharray: "31.416", strokeDashoffset: "31.416", className: "animate-dash" }) }) }), text && (_jsx(motion.p, { variants: pulseVariants, animate: "animate", className: "text-zion-slate-light text-center font-medium", children: text }))] }));
    if (fullScreen) {
        return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50", children: _jsx(LoaderContent, {}) }));
    }
    return _jsx(LoaderContent, {});
}
// Skeleton loader for content
export function SkeletonLoader({ className = "", lines = 3, height = "h-4" }) {
    return (_jsx("div", { className: `space-y-3 ${className}`, children: Array.from({ length: lines }).map((_, index) => (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: index * 0.1 }, className: `${height} bg-zion-blue-light/20 rounded-lg animate-pulse`, style: {
                width: `${Math.random() * 40 + 60}%`
            } }, index))) }));
}
// Card skeleton loader
export function CardSkeleton({ className = "" }) {
    return (_jsx("div", { className: `bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${className}`, children: _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse" }), _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4" }), _jsx("div", { className: "h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full" }), _jsx("div", { className: "h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" })] }), _jsxs("div", { className: "flex gap-3 pt-4", children: [_jsx("div", { className: "h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1" }), _jsx("div", { className: "h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24" })] })] }) }));
}
// Grid skeleton loader
export function GridSkeleton({ columns = 3, rows = 2, className = "" }) {
    return (_jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`, children: Array.from({ length: columns * rows }).map((_, index) => (_jsx(CardSkeleton, {}, index))) }));
}
// Page skeleton loader
export function PageSkeleton({ className = "" }) {
    return (_jsxs("div", { className: `space-y-8 ${className}`, children: [_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" }), _jsx("div", { className: "h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" })] }), _jsx(GridSkeleton, { columns: 3, rows: 2 }), _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2" }), _jsx("div", { className: "h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" })] })] }));
}
