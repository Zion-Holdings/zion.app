import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
export default function ThemeToggle() {
    const { mode, toggleTheme } = useTheme();
    return (_jsxs(Button, { "aria-label": "Toggle theme", onClick: toggleTheme, variant: "ghost", size: "icon", children: [mode === "dark" ? (_jsx(Sun, { className: "h-5 w-5" })) : (_jsx(Moon, { className: "h-5 w-5" })), _jsx("span", { className: "sr-only", children: "Toggle theme" })] }));
}
