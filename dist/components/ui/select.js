import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const SelectContext = React.createContext(undefined);
export const Select = ({ value = '', onValueChange, disabled = false, children, className, ...props }) => {
    return (_jsx(SelectContext.Provider, { value: { value, onValueChange: onValueChange || (() => { }), disabled }, children: _jsx("div", { className: cn('relative', className), ...props, children: children }) }));
};
export const SelectTrigger = ({ children, className, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error('SelectTrigger must be used within Select');
    }
    const { disabled } = context;
    return (_jsx("button", { className: cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className), disabled: disabled, ...props, children: children }));
};
export const SelectContent = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cn('relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props, children: children }));
};
export const SelectItem = ({ value, children, disabled = false, className, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error('SelectItem must be used within Select');
    }
    const { onValueChange } = context;
    return (_jsx("div", { className: cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', disabled && 'pointer-events-none opacity-50', className), onClick: () => !disabled && onValueChange(value), ...props, children: children }));
};
export const SelectValue = ({ placeholder = 'Select an option', className, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error('SelectValue must be used within Select');
    }
    const { value } = context;
    return (_jsx("span", { className: cn('block truncate', className), ...props, children: value || placeholder }));
};
