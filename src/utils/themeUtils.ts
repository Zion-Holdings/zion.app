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
function hexToHsl(hex: string): string {
  let r = 0, g = 0, b = 0;
  if (hex.startsWith('#')) {
    const parsed = hex.slice(1);
    if (parsed.length === 3) {
      r = parseInt((parsed[0] || '0') + (parsed[0] || '0'), 16);
      g = parseInt((parsed[1] || '0') + (parsed[1] || '0'), 16);
      b = parseInt((parsed[2] || '0') + (parsed[2] || '0'), 16);
    } else if (parsed.length === 6) {
      r = parseInt(parsed.substring(0, 2), 16);
      g = parseInt(parsed.substring(2, 4), 16);
      b = parseInt(parsed.substring(4, 6), 16);
    }
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function toHsl(value: string): string {
  return value.startsWith('#') ? hexToHsl(value) : value.replace(/hsl\(|\)/g, '');
}

export function applyThemeColors(colors: ThemeColors) {
  const root = document.documentElement;

  // Map ThemeColors to the CSS variables expected by tailwind.config.js
  root.style.setProperty('--background', toHsl(colors.backgroundColor)); // Maps to tailwind 'background'
  root.style.setProperty('--foreground', toHsl(colors.textColor));       // Maps to tailwind 'foreground'
  root.style.setProperty('--primary', toHsl(colors.primaryColor));       // Maps to tailwind 'primary.DEFAULT'
  root.style.setProperty('--accent', toHsl(colors.accentColor));         // Maps to tailwind 'accent.DEFAULT'
  root.style.setProperty('--card', toHsl(colors.cardBackground));         // Maps to tailwind 'card.DEFAULT'

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
