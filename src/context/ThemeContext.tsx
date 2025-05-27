import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextState {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const applyMode = (next: ThemeMode) => {
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial: ThemeMode = stored || (prefersDark ? "dark" : "light");
    setMode(initial);
    applyMode(initial);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
    applyMode(next);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextState => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};
