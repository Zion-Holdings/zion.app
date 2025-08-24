import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useCallback } from 'react';
import { Toast } from './Toast';
export const ToastContainer = () => {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((options) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
            id,
            title: options.title,
            description: options.description,
            variant: options.variant || 'default',
            duration: options.duration || 5000,
            onDismiss: (toastId) => {
                setToasts(prev => prev.filter(toast => toast.id !== toastId));
            }
        };
        setToasts(prev => [...prev, newToast]);
        return id;
    }, []);
    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    const clearAll = useCallback(() => {
        setToasts([]);
    }, []);
    // Expose methods globally for easy access
    React.useEffect(() => {
        window.showToast = addToast;
        window.removeToast = removeToast;
        window.clearToasts = clearAll;
    }, [addToast, removeToast, clearAll]);
    return (_jsx("div", { className: "fixed top-4 right-4 z-50 space-y-2", children: toasts.map((toast) => (_jsx(Toast, Object.assign({}, toast, { onDismiss: removeToast }), toast.id))) }));
};
