import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const ToasterContext = React.createContext(undefined);
export const useToaster = () => {
    const context = React.useContext(ToasterContext);
    if (!context) {
        throw new Error('useToaster must be used within ToasterProvider');
    }
    return context;
};
export const ToasterProvider = ({ children }) => {
    const [toasts, setToasts] = React.useState([]);
    const toast = React.useCallback((newToast) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { ...newToast, id }]);
    }, []);
    const dismiss = React.useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    const value = React.useMemo(() => ({
        toasts,
        toast,
        dismiss
    }), [toasts, toast, dismiss]);
    return (_jsx(ToasterContext.Provider, { value: value, children: children }));
};
export const Toaster = ({ toasts, onDismiss }) => {
    return (_jsx("div", { className: "fixed top-4 right-4 z-50 flex flex-col gap-2", children: toasts.map((toast) => (_jsxs("div", { className: cn('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all', toast.variant === 'destructive'
                ? 'destructive border-destructive bg-destructive text-destructive-foreground'
                : 'border-border bg-background text-foreground'), children: [_jsxs("div", { className: "grid gap-1", children: [toast.title && (_jsx("div", { className: "text-sm font-semibold", children: toast.title })), toast.description && (_jsx("div", { className: "text-sm opacity-90", children: toast.description }))] }), toast.action, _jsx("button", { onClick: () => onDismiss(toast.id), className: "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100", children: _jsxs("svg", { className: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }, toast.id))) }));
};
