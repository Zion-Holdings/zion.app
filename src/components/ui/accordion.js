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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
const Accordion = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('', className) }, props)));
});
Accordion.displayName = 'Accordion';
const AccordionItem = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('border-b border-zion-blue-lighter', className) }, props)));
});
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef((_a, ref) => {
    var { className, children, isOpen = false } = _a, props = __rest(_a, ["className", "children", "isOpen"]);
    return (_jsxs("button", Object.assign({ ref: ref, className: cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-zion-cyan [&[data-state=open]>svg]:rotate-180', className) }, props, { children: [children, _jsx(ChevronDown, { className: cn('h-4 w-4 shrink-0 transition-transform duration-200', {
                    'rotate-180': isOpen
                }) })] })));
});
AccordionTrigger.displayName = 'AccordionTrigger';
const AccordionContent = React.forwardRef((_a, ref) => {
    var { className, children, isOpen = false } = _a, props = __rest(_a, ["className", "children", "isOpen"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn('overflow-hidden text-sm transition-all', isOpen ? 'max-h-96 pb-4' : 'max-h-0', className) }, props, { children: children })));
});
AccordionContent.displayName = 'AccordionContent';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
