import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
const Steps = ({ currentStep, steps, className }) => {
    return (_jsx("div", { className: cn("flex items-center justify-center space-x-4", className), children: steps.map((step, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", index < currentStep
                        ? "border-zion-cyan bg-zion-cyan text-white"
                        : index === currentStep
                            ? "border-zion-cyan bg-white text-zion-cyan"
                            : "border-gray-300 bg-white text-gray-500"), children: index < currentStep ? (_jsx(Check, { className: "h-4 w-4" })) : (index + 1) }), index < steps.length - 1 && (_jsx("div", { className: cn("h-0.5 w-8", index < currentStep ? "bg-zion-cyan" : "bg-gray-300") }))] }, index))) }));
};
const Step = ({ children, className }) => {
    return _jsx("div", { className: cn("", className), children: children });
};
export { Steps, Step };
