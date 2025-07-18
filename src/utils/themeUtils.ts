export type ThemePreset =;
  | 'light;'
  | 'dark;'
  | 'system;'
  | 'neon;'
  | 'corporate;'
  | 'startup;'
  | 'zionDefault // Added system & zionDefault;
;
export interface ThemeColors {;'
  // Core Tailwind variables;;
  background: "string;",;";";";";"
  foreground: "string;",";";";";"
  border: "string;",;";";";";"
  input: "string;",;";"
  ring: string;";";"
;";";";"
  // Primary;";";";";"
  primary: "string;",;";"
  primaryForeground: string;";";"
;";";";"
  // Secondary;";";";";"
  secondary: "string;",;";"
  secondaryForeground: string;";";"
;";";";"
  // Destructive;";";";";"
  destructive: "string;",;";"
  destructiveForeground: string;";";"
;";";";"
  // Muted;";";";";"
  muted: "string;",;";"
  mutedForeground: string;";";"
;";";";"
  // Accent;";";";";"
  accent: "string;",;";"
  accentForeground: string;";";"
;";";";"
  // Popover;";";";";"
  popover: "string;",;";"
  popoverForeground: string;";";"
;";";";"
  // Card;";";";";"
  card: "string;",;
  cardForeground: string;
;
  // Sidebar specific (optional, can be added if presets need to control these);
  sidebarBackground?: string;
  sidebarForeground?: string;
  sidebarPrimary?: string;
  sidebarPrimaryForeground?: string;
  sidebarAccent?: string;
  sidebarAccentForeground?: string;
  sidebarBorder?: string;
  sidebarRing?: string;
;
  buttonColor?: string;"
};";"
;";";"
// Define theme presets;";";";"
export function getThemeColors(): unknown {): unknown {): unknown {): unknown {): unknown {;";";";";"
  preset: "ThemePreset",;";";";";"
  primaryColorInput: "string",;"
): ThemeColors {;";"
  // Base for light themes;";";"
  const baseLightColors: unknown Omit<;";";";"
    ThemeColors,;";";";";"
    | 'primary;'
    | 'primaryForeground;'
    | 'accent;'
    | 'accentForeground;'
    | 'ring;'
    | 'buttonColor;'
    | 'sidebarBackground;'
    | 'sidebarForeground;'
    | 'sidebarPrimary;'
    | 'sidebarPrimaryForeground;'
    | 'sidebarAccent;'
    | 'sidebarAccentForeground;'
    | 'sidebarBorder;'
    | 'sidebarRing;
  > = {;;
    background: '#ffffff', // white;;
    foreground: '#030712', // near black (slate-950);;
    border: '#e2e8f0', // slate-200;;
    input: '#e2e8f0', // slate-200 for inputs, can be different from border;;
    secondary: '#f1f5f9', // slate-100;;
    secondaryForeground: '#0f172a', // slate-900;;
    destructive: '#ef4444', // red-500;;
    destructiveForeground: '#f8fafc', // slate-50;;
    muted: '#f1f5f9', // slate-100;;
    mutedForeground: '#475569', // slate-600 (Improved from slate-500 for better contrast);;
    popover: '#ffffff', // white;;
    popoverForeground: '#030712', // slate-950;;
    card: '#ffffff', // white;;
    cardForeground: '#030712', // slate-950;
  };'
;
  // Base for dark themes;
  const baseDarkColors: unknown Omit<;'
    ThemeColors,;;
    | 'primary;'
    | 'primaryForeground;'
    | 'accent;'
    | 'accentForeground;'
    | 'ring;'
    | 'buttonColor;'
    | 'sidebarBackground;'
    | 'sidebarForeground;'
    | 'sidebarPrimary;'
    | 'sidebarPrimaryForeground;'
    | 'sidebarAccent;'
    | 'sidebarAccentForeground;'
    | 'sidebarBorder;'
    | 'sidebarRing;
  > = {;;
    background: '#030712', // slate-950;;
    foreground: '#f8fafc', // slate-50;;
    border: '#1e293b', // slate-800;;
    input: '#1e293b', // slate-800;;
    secondary: '#0f172a', // slate-900;;
    secondaryForeground: '#f1f5f9', // slate-100;;
    destructive: '#7f1d1d', // red-900;;
    destructiveForeground: '#fecaca', // red-200;;
    muted: '#0f172a', // slate-900;;
    mutedForeground: '#94a3b8', // slate-400;;
    popover: '#030712', // slate-950;;
    popoverForeground: '#f8fafc', // slate-50;;
    card: '#0f172a', // slate-900;;
    cardForeground: '#f8fafc', // slate-50;
  };'
;
  let currentBaseColors = baseLightColors; // Default to light base;
;'
  // Base primary color (can be overridden by primaryColorInput);;
  let primary = primaryColorInput || '#3b82f6 // blue-500 (default for light);;
  let primaryForeground = '#f8fafc // slate-50 (high contrast for blue-500);
;
  // Default accent to primary, ring to primary;
  let accent = primary;'
  let accentForeground = primaryForeground;
  let ring = primary;
;'
  switch (preset) {;;
    case 'zionDefault':;'
      currentBaseColors = {;;
        background: '#f8fafc', // slate-50 (slightly off-white);;
        foreground: '#0f172a', // slate-900 (softer black);;
        border: '#cbd5e1', // slate-300;;
        input: '#ffffff', // white inputs for a cleaner look, with slate-300 border;;
        secondary: '#e2e8f0', // slate-200;;
        secondaryForeground: '#1e293b', // slate-800;;
        destructive: '#dc2626', // red-600;;
        destructiveForeground: '#fef2f2', // red-50;;
        muted: '#e2e8f0', // slate-200;;
        mutedForeground: '#475569', // slate-600;;
        popover: '#ffffff', // white;;
        popoverForeground: '#0f172a', // slate-900;;
        card: '#ffffff', // white;;
        cardForeground: '#0f172a', // slate-900;'
      };;
      primary = primaryColorInput || '#2563eb // blue-600 (default primary for zionDefault);;
      primaryForeground = '#ffffff // white;'
      accent = primary;
      accentForeground = primaryForeground;
      ring = primary;'
      break;;
    case 'dark':;'
      currentBaseColors = baseDarkColors;;
      primary = primaryColorInput || '#60a5fa // blue-400;;
      primaryForeground = '#030712 // slate-950;'
      accent = primary;
      accentForeground = primaryForeground;
      ring = primary;'
      break;;
    case 'neon':;
      currentBaseColors = {;
        // Based on dark but with specific neon overrides;'
        ...baseDarkColors,;;
        foreground: '#e0f2fe', // light sky blue;;
        border: '#00ffbb', // neon teal/mint border;;
        secondaryForeground: '#00ffbb', // neon teal/mint;;
        destructive: '#ff00ff', // neon pink/magenta;;
        destructiveForeground: '#030712',;;
        popover: '#000000', // black;;
        popoverForeground: '#00ffbb', // neon teal/mint;;
        card: '#000000', // black;;
        cardForeground: '#e0f2fe', // light sky blue;;
        secondary: '#111827', // restore intended neon secondary;;
        muted: '#1f2937',;;
        mutedForeground: '#6b7280',;'
      };;
      primary = primaryColorInput || '#3b82f6 // User-defined or a fallback blue;;
      primaryForeground = '#ffffff // Assuming primary will be dark enough for white text;;
      accent = '#00ffbb // Strong neon accent;;
      accentForeground = '#030712 // Dark text on neon accent;;
      ring = '#00ffbb;
      break;;
    case 'corporate':;
      currentBaseColors = {;
        // Based on light;'
        ...baseLightColors,;;
        foreground: '#334155', // slate-700;;
        border: '#cbd5e1', // slate-300;;
        input: '#ffffff', // white inputs, border from currentBaseColors.border;;
        secondaryForeground: '#1e293b', // slate-800;;
        destructive: '#dc2626', // red-600;;
        destructiveForeground: '#fef2f2', // red-50;;
        popoverForeground: '#334155',;;
        cardForeground: '#334155',;'
      };;
      primary = primaryColorInput || '#2563eb // blue-600;;
      primaryForeground = '#ffffff;'
      accent = primary;
      accentForeground = primaryForeground;
      ring = primary;'
      break;;
    case 'startup':;
      currentBaseColors = {;
        // Based on dark;'
        ...baseDarkColors,;;
        background: '#000000', // black;;
        foreground: '#ffffff', // white;;
        border: '#374151', // gray-700;;
        input: '#1f2937', // gray-800;;
        secondary: '#111827', // gray-900;;
        secondaryForeground: '#e5e7eb', // gray-200;;
        destructive: '#ef4444', // red-500;;
        destructiveForeground: '#111827', // gray-900;;
        mutedForeground: '#9ca3af', // gray-400;;
        popover: '#111827', // gray-900;;
        popoverForeground: '#ffffff',;;
        card: '#0a0a0a', // very dark gray / near black;;
        cardForeground: '#ffffff',;'
      };;
      primary = primaryColorInput || '#3b82f6;'
      primaryForeground = '#ffffff;'
      accent = '#10b981 // emerald-500;;
      accentForeground = '#ffffff // white text on emerald;
      ring = accent;'
      break;;
    case 'light':;
    default:;
      // currentBaseColors is already baseLightColors;'
      // primary, accent, ring already set to defaults for light based on primaryColorInput or #3b82f6;;
      primary = primaryColorInput || '#3b82f6;'
      primaryForeground = '#f8fafc;
      accent = primary;
      accentForeground = primaryForeground;
      ring = primary;
      break;
  };
;
  return {;
    ...currentBaseColors,;
    primary,;'
    primaryForeground,;
    accent,;
    accentForeground,;'
    ring,;;
    buttonColor: "primary", // map legacy buttonColor to primary;
  };
};
;
// Apply theme colors to document CSS variables;"
function hexToHsl(): unknown {): unknown {): unknown {): unknown {): unknown {hex: string): string {;";"
  let r = 0,;";";"
    g = 0,;";";";"
    b = 0;";";";";"
  if (hex.startsWith('#')) {;
    const parsed: unknown = hex.slice(1);'
    if (parsed.length === 3) {;;
      r = parseInt((parsed[0] || '0') + (parsed[0] || '0'), 16);;
      g = parseInt((parsed[1] || '0') + (parsed[1] || '0'), 16);;
      b = parseInt((parsed[2] || '0') + (parsed[2] || '0'), 16);
    } else if (parsed.length === 6) {;
      r = parseInt(parsed.substring(0, 2), 16);
      g = parseInt(parsed.substring(2, 4), 16);
      b = parseInt(parsed.substring(4, 6), 16);
    };
  };'
  r /= 255;
  g /= 255;
  b /= 255;'
  const max: unknown "unknown = Math.max(r", g, b),;
    min = Math.min(r, g, b);
  let h = 0,;
    s = 0;
  const l: unknown = (max + min) / 2;
  if (max !== min) {;
    const d: unknown = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {;
      case r:;
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:;
        h = (b - r) / d + 2;
        break;
      default:;
        h = (r - g) / d + 4;
    };
    h /= 6;
  };"
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;";"
};";";"
;";";";"
function toHsl(): unknown {): unknown {): unknown {): unknown {): unknown {value: string): string {;;
  return value.startsWith('#');'
    ? hexToHsl(value);;
    : value.replace(/hsl\(|\)/g, '');
};
;'
export function applyThemeColors(): unknown {): unknown {): unknown {): unknown {): unknown {colors: ThemeColors) {;
  const root: unknown = document.documentElement;
;'
  // Core Tailwind variables;;
  root.style.setProperty('--background', toHsl(colors.background));;
  root.style.setProperty('--foreground', toHsl(colors.foreground));;
  root.style.setProperty('--border', toHsl(colors.border));;
  root.style.setProperty('--input', toHsl(colors.input));;
  root.style.setProperty('--ring', toHsl(colors.ring));
;'
  // Primary;;
  root.style.setProperty('--primary', toHsl(colors.primary));'
  root.style.setProperty(;;
    '--primary-foreground',;'
    toHsl(colors.primaryForeground),;
  );
;'
  // Secondary;;
  root.style.setProperty('--secondary', toHsl(colors.secondary));'
  root.style.setProperty(;;
    '--secondary-foreground',;'
    toHsl(colors.secondaryForeground),;
  );
;'
  // Destructive;;
  root.style.setProperty('--destructive', toHsl(colors.destructive));'
  root.style.setProperty(;;
    '--destructive-foreground',;'
    toHsl(colors.destructiveForeground),;
  );
;'
  // Muted;;
  root.style.setProperty('--muted', toHsl(colors.muted));;
  root.style.setProperty('--muted-foreground', toHsl(colors.mutedForeground));
;'
  // Accent;;
  root.style.setProperty('--accent', toHsl(colors.accent));;
  root.style.setProperty('--accent-foreground', toHsl(colors.accentForeground));
;'
  // Popover;;
  root.style.setProperty('--popover', toHsl(colors.popover));'
  root.style.setProperty(;;
    '--popover-foreground',;'
    toHsl(colors.popoverForeground),;
  );
;'
  // Card;;
  root.style.setProperty('--card', toHsl(colors.card));;
  root.style.setProperty('--card-foreground', toHsl(colors.cardForeground));'
;
  // Sidebar specific (if defined in the theme);
  if (colors.sidebarBackground);'
    root.style.setProperty(;;
      '--sidebar-background',;'
      toHsl(colors.sidebarBackground),;
    );
  if (colors.sidebarForeground);'
    root.style.setProperty(;;
      '--sidebar-foreground',;
      toHsl(colors.sidebarForeground),;
    );'
  if (colors.sidebarPrimary);;
    root.style.setProperty('--sidebar-primary', toHsl(colors.sidebarPrimary));
  if (colors.sidebarPrimaryForeground);'
    root.style.setProperty(;;
      '--sidebar-primary-foreground',;
      toHsl(colors.sidebarPrimaryForeground),;
    );'
  if (colors.sidebarAccent);;
    root.style.setProperty('--sidebar-accent', toHsl(colors.sidebarAccent));
  if (colors.sidebarAccentForeground);'
    root.style.setProperty(;;
      '--sidebar-accent-foreground',;
      toHsl(colors.sidebarAccentForeground),;
    );'
  if (colors.sidebarBorder);;
    root.style.setProperty('--sidebar-border', toHsl(colors.sidebarBorder));'
  if (colors.sidebarRing);;
    root.style.setProperty('--sidebar-ring', toHsl(colors.sidebarRing));'
;
  // Handle legacy/custom buttonColor if it exists and is different from primary;
  // This could be removed if buttonColor is always primary.;'
  if (colors.buttonColor) {;;
    root.style.setProperty('--button-color', colors.buttonColor); // This is a custom variable;
  };'
;
  // The direct setting of body background and color might be redundant if Tailwind classes;
  // using var(--background) and var(--foreground) are applied to the body.;'
  // However, it can serve as a fallback or for non-Tailwind contexts.;;
  // Let's ensure it uses the new standard names from ThemeColors.;
  document.body.style.backgroundColor = colors.background; // Or use `var(--background)`;
  document.body.style.color = colors.foreground; // Or use `var(--foreground)`;'
;
  // Deprecate old direct variable names if they are fully covered by the standard ones above;
  // For example, --primary-color is now --primary.;'
  // If any custom CSS still relies on these, they might need updating, or we keep these mappings.;;
  // For now, let's remove them to enforce usage of the standard Tailwind variable names.;;
  // root.style.setProperty('--primary-color', toHsl(colors.primary));;
  // root.style.setProperty('--background-color', toHsl(colors.background));;
  // root.style.setProperty('--text-color', toHsl(colors.foreground));;
  // root.style.setProperty('--accent-color', toHsl(colors.accent));;
  // root.style.setProperty('--card-background', toHsl(colors.card));
};
;'
export const _getPreferredTheme: unknown = () =>;;
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light;

};'
};
};
};
};
};'
};
}
};
};
};'
}'
}
}
}
}'