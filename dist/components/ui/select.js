import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const SelectContext = React.createContext(undefined);
export const Select = ({ value, onValueChange, disabled = false, className, children, ...props }) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || '');
    const currentValue = value !== undefined ? value : internalValue;
    const handleValueChange = (newValue) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
        setOpen(false);
    };
    return (_jsx(SelectContext.Provider, { value: {
            value: currentValue,
            onValueChange: handleValueChange,
            open,
            setOpen,
            disabled
        }, children: _jsx("div", { className: cn('relative', className), ...props, children: children }) }));
};
export const SelectTrigger = ({ className, children, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context)
        throw new Error('SelectTrigger must be used within Select');
    const { open, setOpen, disabled } = context;
    return (_jsxs("button", { type: "button", className: cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className), onClick: () => !disabled && setOpen(!open), disabled: disabled, ...props, children: [children, _jsx("svg", { className: cn('h-4 w-4 opacity-50 transition-transform', open && 'rotate-180'), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6,9 12,15 18,9" }) })] }));
};
export const SelectContent = ({ className, children, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context)
        throw new Error('SelectContent must be used within Select');
    const { open } = context;
    if (!open)
        return null;
    return (_jsx("div", { className: cn('absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md', className), ...props, children: children }));
};
export const SelectItem = ({ value, className, children, disabled = false, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context)
        throw new Error('SelectItem must be used within Select');
    const { value: currentValue, onValueChange } = context;
    const isSelected = currentValue === value;
    return (_jsxs("div", { className: cn('relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', isSelected && 'bg-accent text-accent-foreground', disabled && 'pointer-events-none opacity-50', className), onClick: () => !disabled && onValueChange(value), ...props, children: [isSelected && (_jsx("svg", { className: "absolute left-2 h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "20,6 9,17 4,12" }) })), children] }));
};
export const SelectValue = ({ placeholder, className, ...props }) => {
    const context = React.useContext(SelectContext);
    if (!context)
        throw new Error('SelectValue must be used within Select');
    const { value } = context;
    return (_jsx("span", { className: cn('block truncate', className), ...props, children: value || placeholder }));
};
