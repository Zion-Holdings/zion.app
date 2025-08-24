import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const TabsContext = React.createContext(undefined);
export const Tabs = ({ defaultValue, value, onValueChange, children, className, ...props }) => {
    const [currentValue, setCurrentValue] = React.useState(value || defaultValue || '');
    React.useEffect(() => {
        if (value !== undefined) {
            setCurrentValue(value);
        }
    }, [value]);
    const handleValueChange = (newValue) => {
        setCurrentValue(newValue);
        onValueChange?.(newValue);
    };
    return (_jsx(TabsContext.Provider, { value: { value: currentValue, onValueChange: handleValueChange }, children: _jsx("div", { className: cn('w-full', className), ...props, children: children }) }));
};
export const TabsList = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className), ...props, children: children }));
};
export const TabsTrigger = ({ value, children, className, ...props }) => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('TabsTrigger must be used within Tabs');
    }
    const { value: currentValue, onValueChange } = context;
    const isActive = currentValue === value;
    return (_jsx("button", { className: cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', isActive
            ? 'bg-background text-foreground shadow-sm'
            : 'hover:bg-background/50 hover:text-foreground', className), onClick: () => onValueChange(value), ...props, children: children }));
};
export const TabsContent = ({ value, children, className, ...props }) => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('TabsContent must be used within Tabs');
    }
    const { value: currentValue } = context;
    if (currentValue !== value)
        return null;
    return (_jsx("div", { className: cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className), ...props, children: children }));
};
