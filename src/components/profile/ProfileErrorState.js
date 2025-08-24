import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';
export const ProfileErrorState = ({ error, onRetry }) => {
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center max-w-md mx-auto p-6", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4", children: _jsx(AlertTriangle, { className: "w-8 h-8 text-red-600" }) }), _jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Profile Not Found" }), _jsx("p", { className: "text-gray-600 mb-6", children: error }), onRetry && (_jsx(Button, { onClick: onRetry, className: "bg-zion-blue hover:bg-zion-blue-dark text-white", children: "Try Again" }))] }) }));
};
