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
    const toast = React.useCallback((toastData) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { ...toastData, id };
        setToasts(prev => [...prev, newToast]);
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            dismiss(id);
        }, 5000);
    }, []);
    const dismiss = React.useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    const value = {
        toasts,
        toast,
        dismiss
    };
    return (_jsx(ToasterContext.Provider, { value: value, children: children }));
};
export const Toaster = ({ toasts, onDismiss }) => {
    if (toasts.length === 0)
        return null;
    return (_jsx("div", { className: "fixed top-4 right-4 z-50 space-y-2", children: toasts.map((toast) => (_jsxs("div", { className: cn('flex w-full max-w-sm items-center space-x-4 rounded-lg border bg-background p-4 shadow-lg', toast.variant === 'destructive' && 'border-destructive bg-destructive text-destructive-foreground'), children: [_jsxs("div", { className: "flex-1 space-y-1", children: [toast.title && (_jsx("p", { className: "text-sm font-medium leading-none", children: toast.title })), toast.description && (_jsx("p", { className: "text-sm text-muted-foreground", children: toast.description }))] }), toast.action, _jsx("button", { onClick: () => onDismiss(toast.id), className: "rounded-md p-1 text-muted-foreground hover:text-foreground", children: "\u00D7" })] }, toast.id))) }));
};
