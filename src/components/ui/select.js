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
import { cn } from '@/lib/utils';
export const Select = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('relative', className) }, props, { children: children })));
});
Select.displayName = 'Select';
export const SelectTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("button", Object.assign({ ref: ref, className: cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className) }, props, { children: children })));
});
SelectTrigger.displayName = 'SelectTrigger';
export const SelectValue = React.forwardRef((_a, ref) => {
    var { className, placeholder } = _a, props = __rest(_a, ["className", "placeholder"]);
    return (_jsx("span", Object.assign({ ref: ref, className: cn('text-sm', className) }, props, { children: placeholder })));
});
SelectValue.displayName = 'SelectValue';
export const SelectContent = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md', className) }, props, { children: children })));
});
SelectContent.displayName = 'SelectContent';
export const SelectItem = React.forwardRef((_a, ref) => {
    var { className, children, value } = _a, props = __rest(_a, ["className", "children", "value"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className), "data-value": value }, props, { children: children })));
});
SelectItem.displayName = 'SelectItem';
