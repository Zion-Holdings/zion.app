import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const ErrorBoundary = ({ children }) => {
    const [errorState, setErrorState] = useState({
        hasError: false,
        error: null
    });
    useEffect(() => {
        const handleError = (event) => {
            console.error('Error caught by boundary:', event.error);
            setErrorState({
                hasError: true,
                error: event.error
            });
        };
        const handleUnhandledRejection = (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            setErrorState({
                hasError: true,
                error: new Error(event.reason)
            });
        };
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);
    const handleRetry = () => {
        setErrorState({
            hasError: false,
            error: null
        });
        window.location.reload();
    };
    if (errorState.hasError) {
        return _jsx(ErrorFallback, { error: errorState.error, onRetry: handleRetry });
    }
    return _jsx(_Fragment, { children: children });
};
const ErrorFallback = ({ error, onRetry }) => {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'An unexpected error occurred';
    const errorStack = (error === null || error === void 0 ? void 0 : error.stack) || 'No stack trace available';
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center p-4", children: _jsxs(motion.div, { className: "max-w-md w-full text-center", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx(motion.div, { className: "w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center", initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 200 }, children: _jsx(AlertTriangle, { className: "w-10 h-10 text-red-400" }) }), _jsx(motion.h1, { className: "text-2xl font-bold text-white mb-4", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: "Oops! Something went wrong" }), _jsx(motion.p, { className: "text-zion-slate-light mb-6 leading-relaxed", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, children: "We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it." }), _jsx(motion.div, { className: "mb-6 p-4 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-left", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, transition: { delay: 0.5 }, children: _jsxs("details", { className: "text-sm", children: [_jsx("summary", { className: "cursor-pointer text-zion-cyan font-medium mb-2", children: "Technical Details" }), _jsxs("div", { className: "text-zion-slate-light space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Message:" }), " ", errorMessage] }), _jsx("p", { children: _jsx("strong", { children: "Stack:" }) }), _jsx("pre", { className: "text-xs overflow-auto bg-zion-slate-dark p-2 rounded", children: errorStack })] })] }) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-3 justify-center", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, children: [_jsxs(Button, { onClick: onRetry, className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Try Again"] }), _jsx(Button, { variant: "outline", size: "lg", asChild: true, children: _jsxs(Link, { to: "/", children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Go Home"] }) })] }), _jsxs(motion.div, { className: "mt-8 p-4 bg-zion-blue/20 border border-zion-blue-light/20 rounded-lg", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.7 }, children: [_jsx("p", { className: "text-sm text-zion-slate-light mb-2", children: "Need help? We're here for you:" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-center text-sm", children: [_jsxs(Link, { to: "/contact", className: "text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center gap-1", children: [_jsx(Mail, { className: "w-3 h-3" }), "Contact Support"] }), _jsx("span", { className: "text-zion-slate-light hidden sm:inline", children: "\u2022" }), _jsxs(Link, { to: "/help", className: "text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center gap-1", children: [_jsx(HelpCircle, { className: "w-3 h-3" }), "Help Center"] })] })] })] }) }));
};
export default ErrorBoundary;
