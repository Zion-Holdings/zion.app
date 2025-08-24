import { jsx as _jsx } from "react/jsx-runtime";
const alertVariants = {
    default: "border-zion-slate-200 bg-white text-zion-slate-950 dark:border-zion-slate-800 dark:bg-zion-slate-950 dark:text-zion-slate-50",
    destructive: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-50",
};
const Alert = ({ children, variant = "default", className = "" }) => (_jsx("div", { className: `relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zion-slate-950 dark:[&>svg]:text-zion-slate-50 ${alertVariants[variant]} ${className}`, children: children }));
const AlertTitle = ({ children, className = "" }) => (_jsx("h5", { className: `mb-1 font-medium leading-none tracking-tight ${className}`, children: children }));
const AlertDescription = ({ children, className = "" }) => (_jsx("div", { className: `text-sm [&_p]:leading-relaxed ${className}`, children: children }));
export { Alert, AlertTitle, AlertDescription };
