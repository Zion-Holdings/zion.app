var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
const Steps = React.forwardRef((_a, ref) => {
    var { className, children, currentStep = 0 } = _a, props = __rest(_a, ["className", "children", "currentStep"]);
    const steps = React.Children.toArray(children);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center justify-between", className) }, props, { children: steps.map((step, index) => {
            if (React.isValidElement(step)) {
                return React.cloneElement(step, {
                    key: index,
                    isActive: index === currentStep,
                    isCompleted: index < currentStep,
                    isLast: index === steps.length - 1,
                });
            }
            return step;
        }) })));
});
Steps.displayName = "Steps";
const Step = React.forwardRef((_a, ref) => {
    var { className, children, isActive = false, isCompleted = false, isLast = false } = _a, props = __rest(_a, ["className", "children", "isActive", "isCompleted", "isLast"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center", className) }, props, { children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors", isCompleted
                        ? "border-zion-cyan bg-zion-cyan text-white"
                        : isActive
                            ? "border-zion-purple bg-zion-purple text-white"
                            : "border-zion-slate-light text-zion-slate-light"), children: isCompleted ? (_jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })) : (_jsx("span", { children: props.children })) }), !isLast && (_jsx("div", { className: cn("h-0.5 w-8 transition-colors", isCompleted ? "bg-zion-cyan" : "bg-zion-slate-light") }))] }) })));
});
Step.displayName = "Step";
export { Steps, Step };
