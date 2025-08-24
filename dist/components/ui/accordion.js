import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const AccordionContext = React.createContext(undefined);
export const Accordion = ({ type = 'single', collapsible = false, defaultValue, value, onValueChange, className, children, ...props }) => {
    const [openItems, setOpenItems] = React.useState(defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []);
    const contextValue = React.useMemo(() => ({
        type,
        collapsible,
        openItems: value ? (Array.isArray(value) ? value : [value]) : openItems,
        setOpenItems,
        value,
        onValueChange
    }), [type, collapsible, openItems, value, onValueChange]);
    return (_jsx(AccordionContext.Provider, { value: contextValue, children: _jsx("div", { className: cn('w-full', className), ...props, children: children }) }));
};
export const AccordionItem = ({ value, disabled = false, className, children, ...props }) => {
    return (_jsx("div", { className: cn('border-b', className), "data-disabled": disabled, ...props, children: children }));
};
export const AccordionTrigger = ({ children, className, ...props }) => {
    const context = React.useContext(AccordionContext);
    if (!context)
        throw new Error('AccordionTrigger must be used within Accordion');
    const { type, collapsible, openItems, setOpenItems, onValueChange } = context;
    const handleClick = () => {
        if (props.disabled)
            return;
        const newOpenItems = type === 'single'
            ? openItems.includes(props.value || '') ? [] : [props.value || '']
            : openItems.includes(props.value || '')
                ? openItems.filter(item => item !== props.value)
                : [...openItems, props.value || ''];
        setOpenItems(newOpenItems);
        onValueChange?.(type === 'single' ? newOpenItems[0] || '' : newOpenItems);
    };
    return (_jsxs("button", { type: "button", className: cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className), onClick: handleClick, ...props, children: [children, _jsx("svg", { className: "h-4 w-4 shrink-0 transition-transform duration-200", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6,9 12,15 18,9" }) })] }));
};
export const AccordionContent = ({ children, className, ...props }) => {
    const context = React.useContext(AccordionContext);
    if (!context)
        throw new Error('AccordionContent must be used within Accordion');
    const { openItems } = context;
    const isOpen = openItems.includes(props.value || '');
    return (_jsx("div", { className: cn('overflow-hidden text-sm transition-all', isOpen ? 'animate-accordion-down' : 'animate-accordion-up'), ...props, children: _jsx("div", { className: cn('pb-4 pt-0', className), children: children }) }));
};
// Wrapper component for easier usage
export const AccordionItemWrapper = ({ value, children, className }) => (_jsx(AccordionItem, { value: value, className: className, children: children }));
