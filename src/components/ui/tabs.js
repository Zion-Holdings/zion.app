import { jsx as _jsx } from "react/jsx-runtime";
export function Tabs({ children, defaultValue, value, onValueChange, className = '' }) {
    return (_jsx("div", { className: `${className}`, children: children }));
}
export function TabsList({ children, className = '' }) {
    return (_jsx("div", { className: `inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`, children: children }));
}
export function TabsTrigger({ children, value, className = '' }) {
    return (_jsx("div", { className: `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`, children: children }));
}
export function TabsContent({ children, value, className = '' }) {
    return (_jsx("div", { className: `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`, children: children }));
}
