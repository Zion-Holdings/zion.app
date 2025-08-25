import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function Checkbox({ checked, onCheckedChange, onChange, className = '', disabled = false }) {
    const handleChange = (e) => {
        if (onCheckedChange) {
            onCheckedChange(e.target.checked);
        }
        if (onChange) {
            onChange();
        }
    };
    return (_jsx("input", { type: "checkbox", checked: checked, onChange: handleChange, disabled: disabled, className: cn('h-4 w-4 rounded border-zion-blue-light bg-zion-blue-dark text-zion-cyan focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2', className) }));
}
