import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
const variantStyles = {
    default: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
};
const variantIcons = {
    default: Clock,
    success: CheckCircle,
    warning: AlertCircle,
    error: AlertCircle,
    info: Clock
};
const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
};
const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
};
export const Progress = ({ value, max = 100, variant = 'default', size = 'md', showLabel = true, showIcon = false, animated = true, striped = false, className = '' }) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const Icon = variantIcons[variant];
    const progressClasses = `
    ${variantStyles[variant]}
    ${animated ? 'transition-all duration-500 ease-out' : ''}
    ${striped ? 'bg-stripes bg-stripes-white bg-stripes-opacity-25' : ''}
  `;
    const getStatusText = () => {
        if (percentage === 100)
            return 'Complete';
        if (percentage >= 75)
            return 'Almost there';
        if (percentage >= 50)
            return 'Halfway';
        if (percentage >= 25)
            return 'Getting started';
        return 'Just beginning';
    };
    const getVariantColor = () => {
        if (percentage === 100)
            return 'text-green-600';
        if (variant === 'success')
            return 'text-green-600';
        if (variant === 'warning')
            return 'text-yellow-600';
        if (variant === 'error')
            return 'text-red-600';
        return 'text-blue-600';
    };
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: `relative bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`, children: [_jsx("div", { className: `h-full rounded-full ${progressClasses}`, style: { width: `${percentage}%` } }), striped && animated && (_jsx("div", { className: "absolute inset-0 bg-stripes bg-stripes-white bg-stripes-opacity-25 animate-pulse" }))] }), showLabel && (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [showIcon && Icon && (_jsx(Icon, { className: `w-4 h-4 ${getVariantColor()}` })), _jsx("span", { className: `font-medium ${labelSizeClasses[size]} ${getVariantColor()}`, children: getStatusText() })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("span", { className: `text-sm font-medium ${getVariantColor()}`, children: [Math.round(percentage), "%"] }), _jsxs("span", { className: "text-sm text-gray-500", children: [value, " / ", max] })] })] }))] }));
};
export const CircularProgress = ({ value, max = 100, size = 'md', strokeWidth = 4, variant = 'default', showLabel = true, className = '' }) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = size === 'sm' ? 20 : size === 'md' ? 30 : 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32'
    };
    const textSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg'
    };
    return (_jsxs("div", { className: `flex flex-col items-center space-y-2 ${className}`, children: [_jsxs("div", { className: `relative ${sizeClasses[size]}`, children: [_jsxs("svg", { className: "w-full h-full transform -rotate-90", viewBox: `0 0 ${radius * 2} ${radius * 2}`, children: [_jsx("circle", { cx: radius, cy: radius, r: radius - strokeWidth / 2, stroke: "currentColor", strokeWidth: strokeWidth, fill: "none", className: "text-gray-200" }), _jsx("circle", { cx: radius, cy: radius, r: radius - strokeWidth / 2, stroke: "currentColor", strokeWidth: strokeWidth, fill: "none", strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeLinecap: "round", className: `${variantStyles[variant]} transition-all duration-500 ease-out` })] }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("span", { className: `font-bold ${textSizeClasses[size]} ${variantStyles[variant]}`, children: [Math.round(percentage), "%"] }) })] }), showLabel && (_jsxs("span", { className: `text-sm font-medium ${variantStyles[variant]}`, children: [value, " / ", max] }))] }));
};
