import { jsx as _jsx } from "react/jsx-runtime";
export function Table({ children, className }) {
    return (_jsx("div", { className: `w-full overflow-x-auto ${className || ''}`, children: _jsx("table", { className: "w-full border-collapse", children: children }) }));
}
export function TableHeader({ children }) {
    return (_jsx("thead", { className: "bg-zion-blue-light", children: children }));
}
export function TableBody({ children }) {
    return (_jsx("tbody", { children: children }));
}
export function TableRow({ children, className }) {
    return (_jsx("tr", { className: `border-b border-zion-slate hover:bg-zion-blue-light ${className || ''}`, children: children }));
}
export function TableHead({ children, className }) {
    return (_jsx("th", { className: `px-4 py-3 text-left font-medium text-zion-cyan ${className || ''}`, children: children }));
}
export function TableCell({ children }) {
    return (_jsx("td", { className: "px-4 py-3 text-zion-slate", children: children }));
}
