import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
const AccordionContext = React.createContext(undefined);
export const Accordion = ({ type = 'single', collapsible = false, defaultValue, value, onValueChange, children, className, ...props }) => {
    const [openItems, setOpenItems] = React.useState(defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []);
    const handleToggle = (itemValue) => {
        if (type === 'single') {
            const newOpenItems = openItems.includes(itemValue) ? [] : [itemValue];
            setOpenItems(newOpenItems);
            onValueChange?.(newOpenItems);
        }
        else {
            const newOpenItems = openItems.includes(itemValue)
                ? openItems.filter(item => item !== itemValue)
                : [...openItems, itemValue];
            setOpenItems(newOpenItems);
            onValueChange?.(newOpenItems);
        }
    };
    React.useEffect(() => {
        if (value !== undefined) {
            setOpenItems(Array.isArray(value) ? value : [value]);
        }
    }, [value]);
    return (_jsx(AccordionContext.Provider, { value: {
            type,
            collapsible,
            openItems,
            onToggle: handleToggle
        }, children: _jsx("div", { className: cn('space-y-2', className), ...props, children: children }) }));
};
export const AccordionItem = ({ value, disabled = false, children, className, ...props }) => {
    return (_jsx("div", { className: cn('border rounded-lg', disabled && 'opacity-50 cursor-not-allowed', className), ...props, children: children }));
};
export const AccordionTrigger = ({ children, className, ...props }) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
        throw new Error('AccordionTrigger must be used within Accordion');
    }
    const { onToggle, openItems } = context;
    const isOpen = openItems.includes(props.value || '');
    return (_jsxs("button", { type: "button", className: cn('flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-gray-50 [&[data-state=open]>svg]:rotate-180', className), onClick: () => onToggle(props.value || ''), ...props, children: [children, _jsx("svg", { className: "h-4 w-4 shrink-0 transition-transform duration-200", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6,9 12,15 18,9" }) })] }));
};
export const AccordionContent = ({ children, className, ...props }) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
        throw new Error('AccordionContent must be used within Accordion');
    }
    const { openItems } = context;
    const isOpen = openItems.includes(props.value || '');
    if (!isOpen)
        return null;
    return (_jsx("div", { className: cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className), ...props, children: _jsx("div", { className: "p-4 pt-0", children: children }) }));
};
export const AccordionItemWrapper = (props) => {
    return (_jsxs(AccordionItem, { ...props, children: [_jsx(AccordionTrigger, { value: props.value, children: props.children }), _jsxs(AccordionContent, { value: props.value, children: ["Content for ", props.value] })] }));
};
