import { jsx as _jsx } from "react/jsx-runtime";
export const Checkbox = ({ checked = false, onChange, className = "" }) => {
    return (_jsx("input", { type: "checkbox", checked: checked, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.checked), className: `w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light rounded focus:ring-zion-cyan focus:ring-2 ${className}` }));
};
