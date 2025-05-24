
// Provide a thin wrapper around the ThemeProvider's context so that hooks can
// be imported from a single location without losing type information.
// Re-export the typed hook from the ThemeProvider so components using
// `@/hooks/useTheme` automatically receive the correct context type.
export { useTheme } from "@/components/ThemeProvider";
