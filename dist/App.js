import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// Simplified imports - only what's needed for expanded services
const Suspense = React.Suspense;
const Home = React.lazy(() => import('./pages/Home'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/services', element: _jsx(EnhancedServicesPage, {}) },
    { path: '/expanded-services', element: _jsx(ExpandedServicesPage, {}) },
    { path: '/services-overview', element: _jsx(ServicesOverviewPage, {}) },
];
const App = () => {
    return (_jsx("div", { className: "App", children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Routes, { children: baseRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))) }) }) }));
};
export default App;
