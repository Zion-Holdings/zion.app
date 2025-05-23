
// Provide a thin wrapper around the ThemeProvider's context so that hooks can
// be imported from a single location without losing type information.
import { useContext } from "react";
import { ThemeProviderContext } from "@/components/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeProviderContext);
};
