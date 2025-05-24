
// Provide a thin wrapper around the ThemeProvider's context so that hooks can
// be imported from a single location without losing type information.
import { useContext } from "react";
import { ThemeProviderContext, type ThemeProviderState } from "@/components/ThemeProvider";

export const useTheme = (): ThemeProviderState => {
  return useContext(ThemeProviderContext);
};
