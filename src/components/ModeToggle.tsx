import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
// Use the ThemeProvider hook which is backed by src/components/ThemeProvider
// to ensure we read and modify the same theme state used across the app.
// The hook is re-exported from '@/hooks/useTheme' so that components don't need
// to know the underlying context location.
import { useTheme } from "@/hooks/useTheme"
import { logIssue } from "@/utils/logIssue"

export function ModeToggle() {
  // Use theme and toggleTheme from the updated useTheme hook
  const { theme, toggleTheme } = useTheme();

  // Determine if the current preset is considered "dark"
  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    try {
      // Toggle theme using the toggleTheme function from context
      toggleTheme();
    } catch (error) {
      logIssue('Theme switch failed', { error });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-pressed={isDarkMode} // Reflects the current mode based on theme
      aria-label="Toggle theme"
      title="Toggle theme"
      className="focus-visible:ring-zion-purple"
      data-testid="theme-toggle"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
