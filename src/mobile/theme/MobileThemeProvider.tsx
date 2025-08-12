
import React from "react";
import { useTheme } from "@/hooks/useTheme";

interface MobileThemeProviderProps {
  children: React.ReactNode;
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme(); // This hook should provide the current theme state
  
  // If theme is 'system', we might need to resolve it to 'light' or 'dark'
  // For now, let's assume 'theme' variable will be either 'light' or 'dark'
  // or that the CSS handles [data-theme='system'] appropriately.
  // We will default to 'light' if 'system' is returned and not handled by CSS.
  // A more robust solution would involve resolving 'system' to 'light' or 'dark'
  // based on actual system preference, but that's out of scope for this immediate fix.
  const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <div
      className="mobile-app" // Remove light/dark classes, rely on data-theme
      data-theme={currentTheme} // Set data-theme attribute
    >
      {children}
    </div>
  );
}
