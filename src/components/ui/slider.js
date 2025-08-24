import { jsx as _jsx } from "react/jsx-runtime";
export const Slider = ({ value = 0, min = 0, max = 100, step = 1, onChange, className = "" }) => {
    return (_jsx("input", { type: "range", min: min, max: max, step: step, value: value, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(Number(e.target.value)), className: `w-full h-2 bg-zion-blue-light rounded-lg appearance-none cursor-pointer slider ${className}` }));
};
