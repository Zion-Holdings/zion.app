import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export function Logo({ customLogo, customColor }) {
    const logoColor = customColor || 'from-zion-cyan via-zion-purple-light to-zion-purple';
    return (_jsx(Link, { to: "/", className: "flex items-center space-x-2", children: customLogo ? (_jsx("img", { src: customLogo, alt: "Logo", className: "h-8 w-auto" })) : (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold text-sm", children: "Z" }) }), _jsx("span", { className: `text-xl font-bold bg-gradient-to-r ${logoColor} bg-clip-text text-transparent`, children: "ZION" })] })) }));
}
