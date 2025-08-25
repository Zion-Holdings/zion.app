import { useState } from 'react';
export function useToast() {
    const [toasts, setToasts] = useState([]);
    const addToast = (options) => {
        const id = Math.random().toString(36).substr(2, 9);
        const toast = {
            id,
            title: options.title,
            description: options.description,
            type: options.type || 'info',
            duration: options.duration || 5000
        };
        setToasts(prev => [...prev, toast]);
        // Auto remove toast after duration
        setTimeout(() => {
            removeToast(id);
        }, toast.duration);
        return id;
    };
    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    const clearToasts = () => {
        setToasts([]);
    };
    return {
        toasts,
        addToast,
        removeToast,
        clearToasts
    };
}
