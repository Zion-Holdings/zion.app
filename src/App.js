import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";
// Lazy load only the working pages
const Home = React.lazy(() => import('./pages/Home'));
function App() {
    useScrollToTop();
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "App", children: [_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) }) }), _jsx(FloatingCTA, {}), _jsx(Footer, {}), _jsx(Toaster, {}), _jsx(SonnerToaster, {})] }) }));
}
export default App;
