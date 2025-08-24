import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", router.asPath);
    }, [router.asPath]);
    const path = router.asPath || '';
    const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
    const description = `The page at ${path || 'this URL'} could not be found.`;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const canonical = baseUrl && path ? `${baseUrl}${path}` : undefined;
    return (_jsxs(_Fragment, { children: [_jsxs(Head, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), canonical && _jsx("meta", { property: "og:url", content: canonical })] }), _jsx("div", { className: "flex flex-1 items-center justify-center bg-gray-100", children: _jsxs("div", { className: "text-center p-6", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 text-gray-800", children: "404" }), _jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Oops! Page not found" }), _jsx(Link, { href: "/", className: "text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded", children: "Return to Home" })] }) })] }));
};
export default NotFound;
