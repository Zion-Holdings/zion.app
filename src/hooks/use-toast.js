import { useState } from 'react';
export const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const addToast = (toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = Object.assign(Object.assign({}, toast), { id });
        setToasts(prev => [...prev, newToast]);
        // Auto-remove toast after duration
        const duration = toast.duration || 5000;
        setTimeout(() => {
            removeToast(id);
        }, duration);
    };
    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    const toast = {
        success: (title, description) => addToast({ title, description, type: 'success' }),
        error: (title, description) => addToast({ title, description, type: 'error' }),
        warning: (title, description) => addToast({ title, description, type: 'warning' }),
        info: (title, description) => addToast({ title, description, type: 'info' }),
    };
    return {
        toasts,
        toast,
        removeToast,
    };
};
