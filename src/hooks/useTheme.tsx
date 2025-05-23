
// Re-export the theme hook from the shared ThemeProvider so that any component
// importing `@/hooks/useTheme` receives the real implementation.  This allows
// the ModeToggle and support components to correctly toggle between light and
// dark modes.
export { useTheme } from "@/components/ThemeProvider";
