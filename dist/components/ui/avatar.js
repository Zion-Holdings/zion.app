import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const Avatar = ({ className, children, ...props }) => {
    return (_jsx("div", { className: cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className), ...props, children: children }));
};
export const AvatarImage = ({ className, src, alt, ...props }) => {
    return (_jsx("img", { className: cn('aspect-square h-full w-full', className), src: src, alt: alt, ...props }));
};
export const AvatarFallback = ({ className, children, ...props }) => {
    return (_jsx("div", { className: cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className), ...props, children: children }));
};
