import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-white mb-4", children: "404" }), _jsx("h2", { className: "text-2xl font-semibold text-blue-100 mb-6", children: "Page Not Found" }), _jsx("p", { className: "text-blue-200 mb-8 max-w-md mx-auto", children: "The page you're looking for doesn't exist. It might have been moved or deleted." }), _jsx(Link, { to: "/", className: "inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200", children: "Go Home" })] }) }));
};
export default NotFound;
