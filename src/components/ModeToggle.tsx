
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"

export function ModeToggle() {
  // Use themePreset and setThemePreset from the updated useTheme hook
  const { theme, setTheme } = useTheme();

  // Determine if the current preset is considered "dark"
  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-pressed={isDarkMode} // Reflects the current mode based on themePreset
      aria-label="Toggle theme"
      title="Toggle theme"
      className="focus-visible:ring-zion-purple"
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
