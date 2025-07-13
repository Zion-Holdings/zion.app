import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/hooks/use-toast"
import { darkModeMessages, lightModeMessages } from "@/utils/themeToggleMessages"
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { Moon, Sun } from 'lucide-react';
// Use the correct ThemeProvider hook from context
import { useThemePreset } from "@/context/ThemeContext"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme: resolvedThemeFromContext, themePreset, toggleTheme } = useThemePreset();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  // This will be 'light' or 'dark' based on context's resolution
  const currentDisplayTheme = isClient ? resolvedThemeFromContext : 'light'; // Default to 'light' for SSR
  const isDarkMode = currentDisplayTheme === "dark";

  const handleToggle = () => {
    try {
      // Determine the theme we are switching TO for logging and messaging.
      // toggleTheme in context cycles themePreset: light -> dark -> system -> light
      let nextPresetDisplay: string;
      if (themePreset === 'light') nextPresetDisplay = 'dark';
      else if (themePreset === 'dark') nextPresetDisplay = 'system';
      else nextPresetDisplay = 'light'; // system goes to light

      logInfo(`Theme toggle: Current preset: ${themePreset}, Current display: ${currentDisplayTheme}. Attempting to switch to preset: ${nextPresetDisplay}.`);

      toggleTheme(); // This cycles the themePreset in the context

      // For the toast, we want to announce what the new display theme will be.
      // This requires knowing how "system" will resolve AFTER the toggle.
      // This is tricky because window.matchMedia is client-side.
      // For simplicity, the toast will announce the preset we are switching to.
      // A more accurate toast would require useEffect to listen to resolvedThemeFromContext changes.

      let newThemeForToast: string = nextPresetDisplay;
      if (nextPresetDisplay === 'system') {
        newThemeForToast = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark (system)" : "light (system)";
      } else {
        newThemeForToast = nextPresetDisplay;
      }

      const messages = (nextPresetDisplay === 'dark' || (nextPresetDisplay === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? darkModeMessages : lightModeMessages;
      const title: string = messages && messages.length > 0 ? (messages[Math.floor(Math.random() * messages.length)] || "Theme changed") : "Theme changed";

      toast({
        title,
        description: `Theme changed to ${newThemeForToast} mode successfully`,
      });

      const announcement = `Theme switched to ${newThemeForToast} mode`;
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.textContent = announcement;
      document.body.appendChild(liveRegion);
      
      setTimeout(() => {
        document.body.removeChild(liveRegion);
      }, 1000);
      
    } catch (error) {
      logErrorToProduction('Theme toggle error:', { data: error });
      // Use themePreset for currentTheme in error logging as `theme` (old var) is not defined
      // logIssue('Theme switch failed', { error, currentThemePreset: themePreset, currentDisplayTheme }); // Removed logIssue
      toast({
        title: "Theme switch failed",
        description: "Unable to change theme. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isClient) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Loading theme toggle"
        className="focus-visible:ring-ring relative text-foreground"
      >
        <div className="h-5 w-5 bg-muted rounded animate-pulse" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${currentDisplayTheme}. Click to switch to ${isDarkMode ? (themePreset === 'dark' ? 'system' : 'light') : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? (themePreset === 'dark' ? 'system' : 'light') : 'dark'} mode`}
            className="focus-visible:ring-ring relative group text-foreground"
            data-testid="theme-toggle"
            data-theme={currentDisplayTheme}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />
            )}
            
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50' 
                : 'bg-slate-600 dark:bg-slate-400'
            } opacity-70 group-hover:opacity-100`} />
            
            <span className="sr-only">
              Toggle theme. Current: {currentDisplayTheme}. Click to switch to {isDarkMode ? (themePreset === 'dark' ? 'system' : 'light') : 'dark'}.
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="text-sm font-medium">Theme: {currentDisplayTheme}</p>
            <p className="text-xs opacity-80">Click to switch to {isDarkMode ? (themePreset === 'dark' ? 'system' : 'light') : 'dark'} mode</p>
            {themePreset === 'system' && ( // Check themePreset here
              <p className="text-xs opacity-60 mt-1">Following system preference</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
