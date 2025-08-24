"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">Theme</span>
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">
        <button
          onClick={() => setTheme("light")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "light"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Switch to light theme"
          aria-pressed={theme === "light"}
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "system"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Switch to system theme"
          aria-pressed={theme === "system"}
        >
          <Monitor className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "dark"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
          aria-label="Switch to dark theme"
          aria-pressed={theme === "dark"}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}