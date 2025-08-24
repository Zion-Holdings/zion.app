import { jsx as _jsx } from "react/jsx-runtime";
export function Separator({ orientation = 'horizontal', className = '' }) {
    return (_jsx("div", { className: `shrink-0 bg-border ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}` }));
}
