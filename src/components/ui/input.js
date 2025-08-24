import { jsx as _jsx } from "react/jsx-runtime";
export function Input({ type = 'text', placeholder, value, onChange, className = '', disabled = false, required = false }) {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled, required: required, className: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}` }));
}
