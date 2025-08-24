import { jsx as _jsx } from "react/jsx-runtime";
const Steps = ({ children, className = "" }) => (_jsx("div", { className: `flex items-center ${className}`, children: children }));
const Step = ({ children, className = "", isActive = false, isCompleted = false }) => (_jsx("div", { className: `flex items-center ${className}`, children: _jsx("div", { className: `flex h-8 w-8 items-center justify-center rounded-full border-2 ${isCompleted
            ? "border-zion-cyan bg-zion-cyan text-white"
            : isActive
                ? "border-zion-cyan bg-white text-zion-cyan"
                : "border-zion-slate-300 bg-white text-zion-slate-500"}`, children: isCompleted ? (_jsx(CheckIcon, { className: "h-4 w-4" })) : (_jsx("span", { className: "text-sm font-medium", children: children })) }) }));
const CheckIcon = ({ className = "" }) => (_jsx("svg", { className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }));
export { Steps, Step, CheckIcon };
