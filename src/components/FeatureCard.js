import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function FeatureCard({ icon: Icon, title, description, className = '' }) {
    return (_jsxs("div", { className: `bg-zion-blue-light rounded-lg p-6 border border-zion-blue-lighter ${className}`, children: [_jsx("div", { className: "w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4", children: _jsx(Icon, { className: "h-6 w-6 text-zion-cyan" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: title }), _jsx("p", { className: "text-zion-slate-light text-sm", children: description })] }));
}
