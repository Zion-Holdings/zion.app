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
import React from 'react';
const Avatar = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: `relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}` }, props)));
});
Avatar.displayName = 'Avatar';
const AvatarImage = React.forwardRef((_a, ref) => {
    var { className, src, alt = '' } = _a, props = __rest(_a, ["className", "src", "alt"]);
    return (_jsx("img", Object.assign({ ref: ref, className: `aspect-square h-full w-full ${className || ''}`, src: src, alt: alt }, props)));
});
AvatarImage.displayName = 'AvatarImage';
const AvatarFallback = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: `flex h-full w-full items-center justify-center rounded-full bg-zion-slate-light text-zion-slate-dark text-sm font-medium ${className || ''}` }, props)));
});
AvatarFallback.displayName = 'AvatarFallback';
export { Avatar, AvatarImage, AvatarFallback };
