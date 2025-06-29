
import { createContext, useContext, useLayoutEffect, useState } from "react"
import { safeStorage } from "@/utils/safeStorage"
import { getThemeColors, applyThemeColors } from "@/utils/themeUtils"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  toggleTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme
  })

  const applyTheme = (t: Theme) => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    let resolved: Theme = t
    if (t === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    root.classList.add(resolved)
    root.setAttribute("data-theme", resolved)

    const primaryColor = safeStorage.getItem("primaryColor") || "#3b82f6"
    const colors = getThemeColors(resolved, primaryColor)
    applyThemeColors(colors)
  }

  useLayoutEffect(() => {
    applyTheme(theme)
    safeStorage.setItem("theme", theme)
  }, [theme])

  const setCurrentTheme = (newTheme: Theme) => {
    safeStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    let currentResolvedTheme = theme;
    if (currentResolvedTheme === "system") {
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    setTheme: setCurrentTheme,
    toggleTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
