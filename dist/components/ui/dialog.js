import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const DialogContext = React.createContext(undefined);
export const Dialog = ({ open: controlledOpen, onOpenChange, className, children, ...props }) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;
    const setOpen = React.useCallback((newOpen) => {
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
        onOpenChange?.(typeof newOpen === 'function' ? newOpen(open) : newOpen);
    }, [isControlled, onOpenChange, open]);
    return (_jsx(DialogContext.Provider, { value: { open, setOpen }, children: _jsx("div", { className: cn('relative', className), ...props, children: children }) }));
};
export const DialogTrigger = ({ className, children, ...props }) => {
    const context = React.useContext(DialogContext);
    if (!context)
        throw new Error('DialogTrigger must be used within Dialog');
    const { setOpen } = context;
    return (_jsx("button", { type: "button", className: cn('inline-flex items-center justify-center', className), onClick: () => setOpen(true), ...props, children: children }));
};
export const DialogContent = ({ className, children, ...props }) => {
    const context = React.useContext(DialogContext);
    if (!context)
        throw new Error('DialogContent must be used within Dialog');
    const { open, setOpen } = context;
    if (!open)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", onClick: () => setOpen(false) }), _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: _jsx("div", { className: cn('relative w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg', className), ...props, children: children }) })] }));
};
export const DialogHeader = ({ className, children, ...props }) => {
    return (_jsx("div", { className: cn('flex flex-col space-y-1.5 text-center sm:text-left', className), ...props, children: children }));
};
export const DialogTitle = ({ className, children, ...props }) => {
    return (_jsx("h2", { className: cn('text-lg font-semibold leading-none tracking-tight', className), ...props, children: children }));
};
export const DialogDescription = ({ className, children, ...props }) => {
    return (_jsx("p", { className: cn('text-sm text-muted-foreground', className), ...props, children: children }));
};
export const DialogFooter = ({ className, children, ...props }) => {
    return (_jsx("div", { className: cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className), ...props, children: children }));
};
