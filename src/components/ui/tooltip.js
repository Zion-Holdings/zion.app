import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const TooltipProvider = ({ children }) => {
    return _jsx("div", { className: "relative", children: children });
};
export const Tooltip = ({ children, className }) => {
    return _jsx("div", { className: cn("relative", className), children: children });
};
export const TooltipTrigger = ({ children, asChild, className }) => {
    if (asChild) {
        return _jsx(_Fragment, { children: children });
    }
    return _jsx("div", { className: cn("cursor-pointer", className), children: children });
};
export const TooltipContent = ({ children, className }) => {
    return (_jsx("div", { className: cn("absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-md", "opacity-0 group-hover:opacity-100 transition-opacity duration-200", "pointer-events-none", className), children: children }));
};
