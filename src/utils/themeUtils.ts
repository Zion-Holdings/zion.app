
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
        backgroundColor: '#0f172a',
        textColor: '#e2e8f0',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#1e293b',
      };
    case 'neon':
      return {
        primaryColor,
        backgroundColor: '#030712',
        textColor: '#f8fafc',
        accentColor: '#00ffbb',
        buttonColor: primaryColor,
        cardBackground: '#0f172a',
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
        backgroundColor: '#16181d',
        textColor: '#fafafa',
        accentColor: '#ff7f50',
        buttonColor: primaryColor,
        cardBackground: '#1e2127',
      };
    case 'light':
    default:
      return {
        primaryColor,
        backgroundColor: '#ffffff',
        textColor: '#0f172a',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#f8fafc',
      };
  }
}

// Apply theme colors to document CSS variables
export function applyThemeColors(colors: ThemeColors) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', colors.primaryColor);
  root.style.setProperty('--background-color', colors.backgroundColor);
  root.style.setProperty('--text-color', colors.textColor);
  root.style.setProperty('--accent-color', colors.accentColor);
  root.style.setProperty('--button-color', colors.buttonColor);
  root.style.setProperty('--card-background', colors.cardBackground);
  
  // Set background and text colors on body
  document.body.style.backgroundColor = colors.backgroundColor;
  document.body.style.color = colors.textColor;
}
