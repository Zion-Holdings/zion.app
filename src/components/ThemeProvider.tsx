<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react';
=======
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
<<<<<<< HEAD
  children: React.ReactNode;
=======
  children: ReactNode;
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
<<<<<<< HEAD
  defaultTheme = 'dark' 
=======
  defaultTheme = 'system' 
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
<<<<<<< HEAD
=======
    
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
<<<<<<< HEAD
    setTheme,
=======
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};