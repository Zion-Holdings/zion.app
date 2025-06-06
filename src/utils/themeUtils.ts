
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  buttonColor: string;
  cardBackground: string;
}

// Define theme presets
export function getThemeColors(preset: ThemePreset, primaryColor: string): ThemeColors {
  switch (preset) {
    case 'dark':
      return {
        primaryColor,
        backgroundColor: '#000000',
        textColor: '#ffffff',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#0a0a0a',
      };
    case 'neon':
      return {
        primaryColor,
        backgroundColor: '#030712',
        textColor: '#f8fafc',
        accentColor: '#00ffbb',
        buttonColor: primaryColor,
        cardBackground: '#000000',
      };
    case 'corporate':
      return {
        primaryColor,
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#ffffff',
      };
    case 'startup':
      return {
        primaryColor,
        backgroundColor: '#000000',
        textColor: '#ffffff',
        accentColor: '#3b82f6',
        buttonColor: primaryColor,
        cardBackground: '#0a0a0a',
      };
    case 'light':
    default:
      return {
        primaryColor,
        backgroundColor: '#ffffff',
        textColor: '#000000',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#f8fafc',
      };
  }
}

// Apply theme colors to document CSS variables
export function applyThemeColors(colors: ThemeColors) {
  const root = document.documentElement;

  // Map ThemeColors to the CSS variables expected by tailwind.config.js
  root.style.setProperty('--background', colors.backgroundColor); // Maps to tailwind 'background'
  root.style.setProperty('--foreground', colors.textColor);       // Maps to tailwind 'foreground'
  root.style.setProperty('--primary', colors.primaryColor);       // Maps to tailwind 'primary.DEFAULT'
  root.style.setProperty('--accent', colors.accentColor);         // Maps to tailwind 'accent.DEFAULT'
  root.style.setProperty('--card', colors.cardBackground);         // Maps to tailwind 'card.DEFAULT'

  // We are not setting --primary-foreground, --accent-foreground, --card-foreground etc. yet.
  // These would require more detailed color definitions in ThemeColors.
  // For now, they will fall back to what's in index.css or their default behavior.

  // --button-color is not directly used by tailwind config, but can be used by custom components
  root.style.setProperty('--button-color', colors.buttonColor);

  // Also, retain the specific variable names if other custom CSS relies on them directly
  root.style.setProperty('--primary-color', colors.primaryColor);
  root.style.setProperty('--background-color', colors.backgroundColor);
  root.style.setProperty('--text-color', colors.textColor);
  root.style.setProperty('--accent-color', colors.accentColor);
  root.style.setProperty('--card-background', colors.cardBackground);
  
  // Set background and text colors on body (optional, as Tailwind utilities should handle this via CSS vars)
  // However, keeping this ensures direct body styling if needed outside of Tailwind context.
  document.body.style.backgroundColor = colors.backgroundColor; // Or use `var(--background)`
  document.body.style.color = colors.textColor; // Or use `var(--foreground)`
}

export const getPreferredTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
