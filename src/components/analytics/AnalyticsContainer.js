import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
export function AnalyticsContainer({ children }) {
    const { isAuthenticated, isLoading, user } = useAuth();
    // Check if user is admin (using either role or userType)
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'admin' || (user === null || user === void 0 ? void 0 : user.userType) === 'admin';
    // If still loading auth status, show loading
    if (isLoading) {
        return (_jsx("div", { className: "flex justify-center items-center min-h-screen bg-zion-blue", children: _jsx("div", { className: "animate-pulse text-zion-purple text-lg", children: "Loading..." }) }));
    }
    // If not authenticated, redirect
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", state: { from: '/analytics' }, replace: true });
    }
    // If not admin, redirect
    if (!isAdmin) {
        return _jsx(Navigate, { to: "/unauthorized", replace: true });
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-zion-blue", children: [_jsx(SEO, { title: "Analytics Dashboard", description: "Track user behavior, page views, and conversion rates to improve your platform performance" }), _jsxs("main", { className: "flex-1 p-6 md:p-8 container mx-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Analytics Dashboard" }), _jsx("p", { className: "text-zion-slate-light", children: "Track user behavior, page views, and conversion rates" })] }), children] })] }));
}
