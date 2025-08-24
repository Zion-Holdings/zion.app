import { jsx as _jsx } from "react/jsx-runtime";
export function Steps({ children, className = '' }) {
    return (_jsx("div", { className: `flex items-center space-x-2 ${className}`, children: children }));
}
export function Step({ children, className = '' }) {
    return (_jsx("div", { className: `flex items-center ${className}`, children: children }));
}
