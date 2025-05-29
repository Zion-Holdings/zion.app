import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme'; // UPDATED IMPORT

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // UPDATED HOOK USAGE

  const handleToggle = () => {
    let currentActualTheme = theme;
    if (theme === 'system') {
      currentActualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(currentActualTheme === 'light' ? 'dark' : 'light');
  };

  // Determine the current theme for display purposes (Sun/Moon icon)
  let displayTheme = theme;
  if (theme === 'system') {
    // Check system preference for immediate UI update if needed, or rely on useEffect in ThemeProvider
    // For icon display, it's better to reflect the actual current state.
    displayTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return (
    <Button aria-label="Toggle theme" onClick={handleToggle} variant="ghost" size="icon"> {/* UPDATED onClick */}
      {displayTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />} {/* UPDATED theme check */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
