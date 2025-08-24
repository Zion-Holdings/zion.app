import { jsx as _jsx } from "react/jsx-runtime";
export function Avatar({ children, className = '' }) {
    return (_jsx("div", { className: `relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`, children: children }));
}
export function AvatarImage({ src, alt, className = '' }) {
    return (_jsx("img", { src: src, alt: alt, className: `aspect-square h-full w-full ${className}` }));
}
export function AvatarFallback({ children, className = '' }) {
    return (_jsx("div", { className: `flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`, children: children }));
}
