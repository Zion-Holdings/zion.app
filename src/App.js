import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { WhitelabelProvider } from "./context/WhitelabelContext";
// Import only the essential pages
const Home = React.lazy(() => import('./pages/Home'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const App = () => {
    return (_jsx(WhitelabelProvider, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(React.Suspense, { fallback: _jsx("div", { className: "p-4 text-center", children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/micro-saas-services", element: _jsx(MicroSaasServicesPage, {}) })] }) }), _jsx(Toaster, {}), _jsx(SonnerToaster, { position: "top-right" })] }) }));
};
export default App;
