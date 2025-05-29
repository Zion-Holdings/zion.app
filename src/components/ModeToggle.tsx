import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react"; // Import useState and useEffect

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // 'theme' can be 'light', 'dark', or 'system'
  
  // currentDisplayTheme will hold the actual theme to display (always 'light' or 'dark')
  const [currentDisplayTheme, setCurrentDisplayTheme] = useState<'light' | 'dark'>(() => {
    // Initialize based on current theme, resolving 'system' if possible client-side at init
    if (theme === 'system') {
      if (typeof window !== 'undefined') { // Check for window object
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light'; // Default if window is not available (e.g., SSR, though less likely for this component)
    }
    return theme; // 'light' or 'dark'
  });

  useEffect(() => {
    // This effect runs on the client-side and updates currentDisplayTheme when 'theme' changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateDisplayBasedOnSystem = () => {
        setCurrentDisplayTheme(mediaQuery.matches ? 'dark' : 'light');
      };
      updateDisplayBasedOnSystem(); // Set initial based on system preference
      mediaQuery.addEventListener('change', updateDisplayBasedOnSystem); // Listen for system changes
      return () => mediaQuery.removeEventListener('change', updateDisplayBasedOnSystem); // Cleanup listener
    } else {
      setCurrentDisplayTheme(theme); // If not 'system', displayTheme is just the theme
    }
  }, [theme]); // Re-run when the persisted 'theme' (light, dark, or system) changes

  const handleToggle = () => {
    // Toggle always sets an explicit 'light' or 'dark', overriding 'system'
    setTheme(currentDisplayTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-pressed={currentDisplayTheme === "dark"}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="focus-visible:ring-zion-purple"
    >
      {currentDisplayTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
