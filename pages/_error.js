import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureException } from '@/utils/sentry';
export default function ErrorPage({ statusCode = 500, err }) {
    const location = useLocation();
    useEffect(() => {
        captureException({
            path: location.pathname,
            message: err?.message ?? `Error page rendered with status ${statusCode}`,
            statusCode,
        });
    }, [err, location.pathname, statusCode]);
    return (_jsxs("main", { className: "min-h-screen flex flex-col items-center justify-center p-6 text-center", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Something went wrong" }), _jsx("p", { children: "Please try again later." })] }));
}
