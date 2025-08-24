import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const Tooltip = ({ children, content, className = "" }) => {
    return (_jsxs("div", { className: `relative group ${className}`, children: [children, _jsx("div", { className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-zion-blue-dark rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: content })] }));
};
export const TooltipContent = Tooltip;
export const TooltipProvider = ({ children }) => _jsx(_Fragment, { children: children });
export const TooltipTrigger = ({ children }) => _jsx(_Fragment, { children: children });
