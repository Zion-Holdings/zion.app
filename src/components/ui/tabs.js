import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export const Tabs = ({ value, onValueChange, children, className }) => {
    return (_jsx("div", { className: cn("w-full", className), children: children }));
};
export const TabsList = ({ children, className }) => {
    return (_jsx("div", { className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className), children: children }));
};
export const TabsTrigger = ({ value, children, className, disabled }) => {
    return (_jsx("button", { className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className), disabled: disabled, children: children }));
};
export const TabsContent = ({ value, children, className }) => {
    return (_jsx("div", { className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), children: children }));
};
