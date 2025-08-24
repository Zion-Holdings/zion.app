import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ProfileLoadingState = () => {
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-b-2 border-zion-blue mx-auto mb-4" }), _jsx("p", { className: "text-lg text-gray-600", children: "Loading profile..." })] }) }));
};
