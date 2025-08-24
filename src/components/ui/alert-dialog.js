import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const AlertDialog = ({ children, open, onOpenChange }) => {
    return (_jsxs("div", { className: cn("fixed inset-0 z-50 flex items-center justify-center", open ? "block" : "hidden"), children: [_jsx("div", { className: "fixed inset-0 bg-black/50", onClick: () => onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false) }), _jsx("div", { className: "relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4", children: children })] }));
};
export const AlertDialogTrigger = ({ children, asChild }) => {
    if (asChild) {
        return _jsx(_Fragment, { children: children });
    }
    return _jsx("div", { className: "cursor-pointer", children: children });
};
export const AlertDialogContent = ({ children, className }) => {
    return _jsx("div", { className: cn("p-6", className), children: children });
};
export const AlertDialogHeader = ({ children, className }) => {
    return _jsx("div", { className: cn("mb-4", className), children: children });
};
export const AlertDialogTitle = ({ children, className }) => {
    return _jsx("h2", { className: cn("text-lg font-semibold text-gray-900", className), children: children });
};
export const AlertDialogDescription = ({ children, className }) => {
    return _jsx("p", { className: cn("text-sm text-gray-600", className), children: children });
};
export const AlertDialogFooter = ({ children, className }) => {
    return _jsx("div", { className: cn("flex justify-end space-x-2", className), children: children });
};
export const AlertDialogAction = ({ children, onClick, className }) => {
    return (_jsx("button", { onClick: onClick, className: cn("px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors", className), children: children }));
};
export const AlertDialogCancel = ({ children, onClick, className }) => {
    return (_jsx("button", { onClick: onClick, className: cn("px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition-colors", className), children: children }));
};
