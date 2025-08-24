import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function GradientHeading({ children, className, level = "h2", id }) {
    const Tag = level;
    return (_jsx(Tag, { id: id, className: cn("text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent", className), children: children }));
}
