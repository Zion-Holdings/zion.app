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
const TabsContext = React.createContext(undefined);
export const Tabs = (_a) => {
    var { defaultValue, value, onValueChange, className, children } = _a, props = __rest(_a, ["defaultValue", "value", "onValueChange", "className", "children"]);
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const currentValue = value !== undefined ? value : internalValue;
    const handleValueChange = (newValue) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    };
    return (_jsx(TabsContext.Provider, { value: { value: currentValue, onValueChange: handleValueChange }, children: _jsx("div", Object.assign({ className: cn('w-full', className) }, props, { children: children })) }));
};
export const TabsList = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ className: cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className) }, props, { children: children })));
};
export const TabsTrigger = (_a) => {
    var { value, className, children } = _a, props = __rest(_a, ["value", "className", "children"]);
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error('TabsTrigger must be used within Tabs');
    const { value: currentValue, onValueChange } = context;
    const isActive = currentValue === value;
    return (_jsx("button", Object.assign({ type: "button", className: cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', isActive
            ? 'bg-background text-foreground shadow-sm'
            : 'hover:bg-background hover:text-foreground', className), onClick: () => onValueChange(value) }, props, { children: children })));
};
export const TabsContent = (_a) => {
    var { value, className, children } = _a, props = __rest(_a, ["value", "className", "children"]);
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error('TabsContent must be used within Tabs');
    const { value: currentValue } = context;
    const isActive = currentValue === value;
    if (!isActive)
        return null;
    return (_jsx("div", Object.assign({ className: cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className) }, props, { children: children })));
};
