import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
export const Accordion = ({ type = 'single', collapsible = false, children, className }) => {
    return (_jsx("div", { className: cn("w-full", className), children: children }));
};
export const AccordionItem = ({ value, children, className }) => {
    return (_jsx("div", { className: cn("border-b", className), children: children }));
};
export const AccordionTrigger = ({ children, className, onClick, isOpen }) => {
    return (_jsxs("button", { className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), onClick: onClick, children: [children, _jsx(ChevronDown, { className: cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180") })] }));
};
export const AccordionContent = ({ children, className, isOpen }) => {
    return (_jsx("div", { className: cn("overflow-hidden text-sm transition-all", isOpen ? "max-h-96 pb-4" : "max-h-0"), children: _jsx("div", { className: cn("pb-4 pt-0", className), children: children }) }));
};
