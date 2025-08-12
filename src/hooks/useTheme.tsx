
// Provide a thin wrapper around the ThemeProvider's context so that hooks can
// be imported from a single location without losing type information.
import { useContext } from "react";
import { ThemeProviderContext } from "@/components/ThemeProvider";

/**
 * Possible theme values supported by the application.
 */
export type Theme = "dark" | "light" | "system";

/**
 * Shape of the data exposed by the ThemeProvider context.
 */
export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Access the current theme and the function to update it.
 *
 * The explicit cast ensures TypeScript correctly infers the returned
 * object shape when the context type information is lost.
 */
export const useTheme = (): ThemeProviderState => {
  return useContext(ThemeProviderContext) as ThemeProviderState;
};
