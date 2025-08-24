import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
function ErrorFallback({ error, resetError }) {
    const navigate = useNavigate();
    return (_jsx("div", { className: "min-h-screen bg-zion-blue-dark flex items-center justify-center p-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-md w-full text-center", children: [_jsxs("div", { className: "mb-8", children: [_jsx(motion.div, { animate: { rotate: [0, 10, -10, 0] }, transition: { duration: 2, repeat: Infinity }, className: "mx-auto w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mb-4", children: _jsx(AlertTriangle, { className: "w-10 h-10 text-zion-purple" }) }), _jsx("h1", { className: "text-2xl font-bold text-white mb-2", children: "Oops! Something went wrong" }), _jsx("p", { className: "text-zion-slate-light", children: "We're sorry, but something unexpected happened. Our team has been notified." })] }), _jsxs("div", { className: "space-y-3 mb-8", children: [_jsxs("button", { onClick: resetError, className: "w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2", children: [_jsx(RefreshCw, { className: "w-4 h-4" }), "Try Again"] }), _jsxs("button", { onClick: () => navigate(-1), className: "w-full bg-zion-blue hover:bg-zion-blue-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2", children: [_jsx(ChevronUp, { className: "w-4 h-4" }), "Go Back"] }), _jsxs(Link, { to: "/", className: "w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2", children: [_jsx(Home, { className: "w-4 h-4" }), "Go Home"] })] }), process.env.NODE_ENV === 'development' && error && (_jsxs("details", { className: "text-left bg-zion-blue/20 rounded-md p-4", children: [_jsx("summary", { className: "text-zion-cyan cursor-pointer mb-2 font-medium", children: "Error Details (Development)" }), _jsx("pre", { className: "text-xs text-zion-slate-light overflow-auto", children: error.stack })] }))] }) }));
}
export function ErrorBoundary({ children, fallback }) {
    const [errorState, setErrorState] = useState({ hasError: false });
    useEffect(() => {
        const handleError = (error) => {
            console.error('Error caught by boundary:', error);
            setErrorState({ hasError: true, error: error.error });
        };
        const handleUnhandledRejection = (event) => {
            console.error('Unhandled promise rejection:', event);
            setErrorState({ hasError: true, error: new Error(event.reason) });
        };
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);
    const resetError = () => {
        setErrorState({ hasError: false, error: undefined });
    };
    if (errorState.hasError) {
        if (fallback) {
            return fallback;
        }
        return _jsx(ErrorFallback, { error: errorState.error, resetError: resetError });
    }
    return _jsx(_Fragment, { children: children });
}
