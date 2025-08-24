var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const Avatar = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ className: cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className) }, props, { children: children })));
};
export const AvatarImage = (_a) => {
    var { className, src, alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
    return (_jsx("img", Object.assign({ className: cn('aspect-square h-full w-full', className), src: src, alt: alt }, props)));
};
export const AvatarFallback = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ className: cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className) }, props, { children: children })));
};
