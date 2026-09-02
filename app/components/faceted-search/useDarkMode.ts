"use client";

import { useState, useEffect } from "react";

/**
 * Hook for managing dark/light mode with system preference
 * Defaults to dark mode for ZTG's design system
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return { isDark, toggleDark: () => setIsDark(!isDark) };
}