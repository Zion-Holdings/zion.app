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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const DialogContext = React.createContext(undefined);
export const Dialog = (_a) => {
    var { open: controlledOpen, onOpenChange, className, children } = _a, props = __rest(_a, ["open", "onOpenChange", "className", "children"]);
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;
    const setOpen = React.useCallback((newOpen) => {
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(typeof newOpen === 'function' ? newOpen(open) : newOpen);
    }, [isControlled, onOpenChange, open]);
    return (_jsx(DialogContext.Provider, { value: { open, setOpen }, children: _jsx("div", Object.assign({ className: cn('relative', className) }, props, { children: children })) }));
};
export const DialogTrigger = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const context = React.useContext(DialogContext);
    if (!context)
        throw new Error('DialogTrigger must be used within Dialog');
    const { setOpen } = context;
    return (_jsx("button", Object.assign({ type: "button", className: cn('inline-flex items-center justify-center', className), onClick: () => setOpen(true) }, props, { children: children })));
};
export const DialogContent = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const context = React.useContext(DialogContext);
    if (!context)
        throw new Error('DialogContent must be used within Dialog');
    const { open, setOpen } = context;
    if (!open)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", onClick: () => setOpen(false) }), _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: _jsx("div", Object.assign({ className: cn('relative w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg', className) }, props, { children: children })) })] }));
};
export const DialogHeader = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ className: cn('flex flex-col space-y-1.5 text-center sm:text-left', className) }, props, { children: children })));
};
export const DialogTitle = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("h2", Object.assign({ className: cn('text-lg font-semibold leading-none tracking-tight', className) }, props, { children: children })));
};
export const DialogDescription = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("p", Object.assign({ className: cn('text-sm text-muted-foreground', className) }, props, { children: children })));
};
export const DialogFooter = (_a) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx("div", Object.assign({ className: cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props, { children: children })));
};
