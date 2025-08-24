import { jsx as _jsx } from "react/jsx-runtime";
export function Accordion({ children, type = 'single', collapsible = false, className = '' }) {
    return (_jsx("div", { className: `${className}`, children: children }));
}
export function AccordionItem({ children, value, className = '' }) {
    return (_jsx("div", { className: `border-b ${className}`, children: children }));
}
export function AccordionTrigger({ children, className = '' }) {
    return (_jsx("div", { className: `flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`, children: children }));
}
export function AccordionContent({ children, className = '' }) {
    return (_jsx("div", { className: `overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`, children: _jsx("div", { className: "pb-4 pt-0", children: children }) }));
}
