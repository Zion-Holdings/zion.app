import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();
    const path = router.asPath || '';
    const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
    const description = `The page at ${path || 'this URL'} could not be found.`;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const canonical = baseUrl && path ? `${baseUrl}${path}` : undefined;
    return (_jsxs(_Fragment, { children: [_jsxs(Head, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), canonical && _jsx("meta", { property: "og:url", content: canonical })] }), _jsx("div", { className: "flex flex-1 items-center justify-center bg-gray-100", children: _jsxs("div", { className: "text-center p-6", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 text-gray-800", children: "404" }), _jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Oops! Page not found" }), _jsx("p", { className: "text-lg text-gray-600 mb-4", children: "Did you forget your password? You can reset it here:" }), _jsx(Link, { href: "/forgot-password", className: "text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded", children: "Reset Password" }), _jsx("p", { className: "mt-4", children: _jsx(Link, { href: "/", className: "text-sm text-gray-500 hover:text-gray-700 underline", children: "Or return to Home" }) })] }) })] }));
};
export default NotFound;
