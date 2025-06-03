import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"

export function ModeToggle() {
  // Use theme and toggleTheme from the updated useTheme hook
  const { theme, toggleTheme } = useTheme();

  // Determine if the current preset is considered "dark"
  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    // Toggle theme using the toggleTheme function from context
    toggleTheme();
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
