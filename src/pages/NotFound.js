import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '@/components/SEO';
const NotFound = () => {
    const location = useLocation();
    React.useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    const path = location.pathname || '';
    const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
    const description = `The page at ${path || 'this URL'} could not be found.`;
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: title, description: description, canonical: "https://ziontechgroup.com/404" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsxs("div", { className: "text-center p-6", children: [_jsx("h1", { className: "text-6xl font-bold mb-4 text-zion-cyan", children: "404" }), _jsx("p", { className: "text-2xl text-white mb-6", children: "Oops! Page not found" }), _jsx("p", { className: "text-zion-slate-light mb-8 text-lg", children: "The page you're looking for doesn't exist." }), _jsx(Link, { to: "/", className: "inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg", children: "Return to Home" })] }) })] }));
};
export default NotFound;
