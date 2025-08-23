import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useLocalStorage } from '@/hooks'
import { ThemePreset, getThemeColors, applyThemeColors } from '@/utils/themeUtils'

export type Theme = 'light' | 'dark' // This can be deprecated if presets cover these

export interface ThemeContextState {
  theme: Theme // Potentially deprecate in favor of themePreset
  themePreset: ThemePreset
  primaryColor: string
  toggleTheme: () => void // This might change to setThemePreset
  setThemePreset: (preset: ThemePreset) => void
  setPrimaryColor: (color: string) => void
}

const initialState: ThemeContextState = {
  theme: 'light', // Default, can be overridden by preset
  themePreset: 'light',
  primaryColor: '#3b82f6', // Default primary color
  toggleTheme: () => {},
  setThemePreset: () => {},
  setPrimaryColor: () => {},
}

const ThemeContext = createContext<ThemeContextState>(initialState)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light') // Keep for now for compatibility
  const [themePreset, setThemePresetState] = useLocalStorage<ThemePreset>('themePreset', 'light')
  const [primaryColor, setPrimaryColorState] = useLocalStorage<string>('primaryColor', '#3b82f6')

  // Apply theme based on preset and primary color
  useEffect(() => {
    const colors = getThemeColors(themePreset, primaryColor)
    applyThemeColors(colors)
    // Update body class for compatibility with existing CSS if needed
    document.documentElement.classList.remove('light', 'dark');
    if (themePreset === 'dark' || themePreset === 'neon' || themePreset === 'startup') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
    // Synchronize 'theme' state with 'themePreset'
    // This ensures 'theme' is 'dark' for specific presets, 'light' otherwise.
    if (themePreset === 'dark' || themePreset === 'neon' || themePreset === 'startup') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [themePreset, primaryColor, setTheme])

  const toggleTheme = () => {
    // This function can now cycle through presets or be removed if a preset selector is implemented
    setThemePresetState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleSetThemePreset = (preset: ThemePreset) => {
    setThemePresetState(preset)
  }

  const handleSetPrimaryColor = (color: string) => {
    setPrimaryColorState(color)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themePreset,
        primaryColor,
        toggleTheme,
        setThemePreset: handleSetThemePreset,
        setPrimaryColor: handleSetPrimaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemePreset = () => useContext(ThemeContext)
