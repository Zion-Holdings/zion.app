import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
// Lazy load only the pages we know work
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
// Enhanced loading component with skeleton
const PageLoader = () => (_jsx("div", { className: "loading-overlay", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" }), _jsx("p", { className: "text-lg", children: "Loading amazing content..." })] }) }));
const baseRoutes = [
    { path: '/', element: _jsx(MicroSaasServicesPage, {}) },
    { path: '/micro-saas-services', element: _jsx(MicroSaasServicesPage, {}) },
    { path: '/pricing', element: _jsx(PricingPage, {}) },
];
function App() {
    return (_jsx(ErrorBoundary, { children: _jsxs("div", { className: "app", children: [_jsx("main", { className: "main-content", children: _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Routes, { children: baseRoutes.map((route) => (_jsx(Route, { path: route.path, element: route.element }, route.path))) }) }) }), _jsx(PerformanceOptimizer, {}), _jsx(AccessibilityEnhancer, {})] }) }));
}
export default App;
