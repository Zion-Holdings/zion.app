import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// Simple error display component
export function ErrorDisplay({ error, onRetry, className }) {
    const errorMessage = typeof error === 'string' ? error : error.message;
    return (_jsxs(motion.div, { className: `bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center ${className || ''}`, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-red-400" }), _jsx("span", { className: "text-red-400 font-medium", children: "Error" })] }), _jsx("p", { className: "text-red-300 mb-3", children: errorMessage }), onRetry && (_jsxs(Button, { onClick: onRetry, size: "sm", variant: "outline", className: "border-red-500/30 text-red-400 hover:bg-red-500/20", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Try Again"] }))] }));
}
// Hook for functional components to handle errors
export function useErrorHandler() {
    const [error, setError] = useState(null);
    const handleError = useCallback((error) => {
        console.error('Error caught by hook:', error);
        setError(error);
    }, []);
    const clearError = useCallback(() => {
        setError(null);
    }, []);
    return { error, handleError, clearError };
}
// Error fallback component for full page errors
export function ErrorFallback({ error, onRetry }) {
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center p-4", children: _jsxs(motion.div, { className: "max-w-md w-full text-center", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx(motion.div, { className: "w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center", initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 200 }, children: _jsx(AlertTriangle, { className: "w-10 h-10 text-red-400" }) }), _jsx(motion.h1, { className: "text-2xl font-bold text-white mb-4", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: "Oops! Something went wrong" }), _jsx(motion.p, { className: "text-zion-slate-light mb-6 leading-relaxed", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, children: "We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it." }), process.env.NODE_ENV === 'development' && error && (_jsx(motion.div, { className: "mb-6 p-4 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-left", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, transition: { delay: 0.5 }, children: _jsxs("details", { className: "text-sm", children: [_jsx("summary", { className: "cursor-pointer text-zion-cyan font-medium mb-2", children: "Error Details (Development)" }), _jsxs("div", { className: "text-zion-slate-light space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Message:" }), " ", error.message] }), _jsx("p", { children: _jsx("strong", { children: "Stack:" }) }), _jsx("pre", { className: "text-xs overflow-auto bg-zion-slate-dark p-2 rounded", children: error.stack })] })] }) })), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-3 justify-center", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, children: [_jsxs(Button, { onClick: onRetry, className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Try Again"] }), _jsx(Button, { variant: "outline", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105", asChild: true, children: _jsxs(Link, { to: "/", children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Go Home"] }) })] }), _jsxs(motion.div, { className: "mt-8 p-4 bg-zion-blue/20 border border-zion-blue-light/20 rounded-lg", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.7 }, children: [_jsx("p", { className: "text-sm text-zion-slate-light mb-2", children: "Still having issues?" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-center text-sm", children: [_jsx(Link, { to: "/contact", className: "text-zion-cyan hover:text-zion-cyan-light transition-colors", children: "Contact Support" }), _jsx("span", { className: "text-zion-slate-light hidden sm:inline", children: "\u2022" }), _jsx(Link, { to: "/help", className: "text-zion-cyan hover:text-zion-cyan-light transition-colors", children: "Help Center" })] })] })] }) }));
}
// Simple error boundary wrapper
export function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const handleError = (event) => {
            console.error('Error caught by boundary:', event.error);
            setError(event.error);
            setHasError(true);
        };
        const handleUnhandledRejection = (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            setError(new Error(event.reason));
            setHasError(true);
        };
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);
    if (hasError) {
        return (_jsx(ErrorFallback, { error: error || undefined, onRetry: () => {
                setHasError(false);
                setError(null);
                window.location.reload();
            } }));
    }
    return _jsx(_Fragment, { children: children });
}
