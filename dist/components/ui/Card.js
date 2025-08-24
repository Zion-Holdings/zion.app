import { jsx as _jsx } from "react/jsx-runtime";
export default function Card({ children, className = '', hover = true, padding = 'md' }) {
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };
    const baseClasses = 'bg-white rounded-xl border border-gray-200 shadow-sm';
    const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-200' : '';
    const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
    return (_jsx("div", { className: classes, children: children }));
}
