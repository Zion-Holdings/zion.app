import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const Separator = ({ orientation = 'horizontal', className }) => {
    return (_jsx("div", { className: cn("shrink-0 bg-border", orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]", className) }));
};
