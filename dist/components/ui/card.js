import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '' }) => {
    return (_jsx("div", { className: `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`, children: children }));
};
export const CardHeader = ({ children, className = '' }) => {
    return (_jsx("div", { className: `flex flex-col space-y-1.5 p-6 ${className}`, children: children }));
};
export const CardTitle = ({ children, className = '' }) => {
    return (_jsx("h3", { className: `text-2xl font-semibold leading-none tracking-tight ${className}`, children: children }));
};
export const CardDescription = ({ children, className = '' }) => {
    return (_jsx("p", { className: `text-sm text-muted-foreground ${className}`, children: children }));
};
export const CardContent = ({ children, className = '' }) => {
    return (_jsx("div", { className: `p-6 pt-0 ${className}`, children: children }));
};
export const CardFooter = ({ children, className = '' }) => {
    return (_jsx("div", { className: `flex items-center p-6 pt-0 ${className}`, children: children }));
};
