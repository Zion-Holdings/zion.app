import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const DialogContext = React.createContext(undefined);
export const Dialog = ({ open = false, onOpenChange, children, className, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(open);
    React.useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const handleOpenChange = (newOpen) => {
        setIsOpen(newOpen);
        onOpenChange?.(newOpen);
    };
    return (_jsx(DialogContext.Provider, { value: { open: isOpen, setOpen: handleOpenChange }, children: _jsx("div", { className: cn('relative', className), ...props, children: children }) }));
};
export const DialogTrigger = ({ children, className, ...props }) => {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error('DialogTrigger must be used within Dialog');
    }
    const { setOpen } = context;
    return (_jsx("button", { className: cn('inline-flex items-center justify-center', className), onClick: () => setOpen(true), ...props, children: children }));
};
export const DialogContent = ({ children, className, ...props }) => {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error('DialogContent must be used within Dialog');
    }
    const { open, setOpen } = context;
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "fixed inset-0 bg-black/50", onClick: () => setOpen(false) }), _jsx("div", { className: cn('relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4', className), ...props, children: children })] }));
};
export const DialogHeader = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cn('mb-4', className), ...props, children: children }));
};
export const DialogTitle = ({ children, className, ...props }) => {
    return (_jsx("h2", { className: cn('text-lg font-semibold', className), ...props, children: children }));
};
export const DialogDescription = ({ children, className, ...props }) => {
    return (_jsx("p", { className: cn('text-sm text-gray-600', className), ...props, children: children }));
};
export const DialogFooter = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cn('flex justify-end gap-2 mt-4', className), ...props, children: children }));
};
