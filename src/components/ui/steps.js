import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
const Steps = React.forwardRef(({ className, children, currentStep = 0, ...props }, ref) => {
    const steps = React.Children.toArray(children);
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-between", className), ...props, children: steps.map((step, index) => {
            if (React.isValidElement(step)) {
                return React.cloneElement(step, {
                    key: index,
                    isActive: index === currentStep,
                    isCompleted: index < currentStep,
                    isLast: index === steps.length - 1,
                });
            }
            return step;
        }) }));
});
Steps.displayName = "Steps";
const Step = React.forwardRef(({ className, children, isActive = false, isCompleted = false, isLast = false, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center", className), ...props, children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors", isCompleted
                        ? "border-zion-cyan bg-zion-cyan text-white"
                        : isActive
                            ? "border-zion-purple bg-zion-purple text-white"
                            : "border-zion-slate-light text-zion-slate-light"), children: isCompleted ? (_jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })) : (_jsx("span", { children: props.children })) }), !isLast && (_jsx("div", { className: cn("h-0.5 w-8 transition-colors", isCompleted ? "bg-zion-cyan" : "bg-zion-slate-light") }))] }) }));
});
Step.displayName = "Step";
export { Steps, Step };
