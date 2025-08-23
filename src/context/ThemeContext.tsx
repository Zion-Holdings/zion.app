import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useLocalStorage } from '@/hooks'

export type Theme = 'light' | 'dark'

export interface ThemeContextState {
  theme: Theme
  toggleTheme: () => void
}

const initialState: ThemeContextState = {
  theme: 'light',
  toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextState>(initialState)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const applyTheme = (nextTheme: Theme) => {
    const root = document.documentElement
    if (nextTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
