import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorBoundary } from 'react-error-boundary';
import { mutate } from 'swr';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { logError } from '@/utils/logError';
function ErrorFallback({ error, resetErrorBoundary }) {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center text-center space-y-4 p-4", children: [_jsx("h1", { className: "text-2xl font-semibold", children: "Something went wrong." }), error?.message && _jsx("p", { className: "text-red-500 break-words", children: error.message }), _jsx("button", { onClick: resetErrorBoundary, className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Retry" })] }));
}
export default function Custom500() {
    const { user } = useAuth();
    const router = useRouter();
    const handleError = (error, info) => {
        logError(error, {
            route: router.asPath,
            componentStack: info.componentStack,
            userId: user?.id,
        });
    };
    const handleReset = () => {
        mutate(() => true, undefined, { revalidate: false });
        router.reload();
    };
    return (_jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, onError: handleError, onReset: handleReset, children: _jsx("div", {}) }));
}
