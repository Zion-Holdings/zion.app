import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: ['border-border'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Zion colors (updated palette)
        "zion-blue": {
          DEFAULT: "#2e73ea",
          light: "#8ab1f3",
          dark: "#172d67",
        },
        "zion-purple": {
          DEFAULT: "#8c15e9",
          light: "#b971f2",
          dark: "#530c8b",
        },
        "zion-cyan": {
          DEFAULT: "#22ddd2",
          light: "#7aeae4",
          dark: "#14847e",
        },
        "zion-slate": {
          DEFAULT: "#17072b",
          light: "#451582",
          dark: "#000000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "neon-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2" 
          },
          "50%": { 
            boxShadow: "0 0 10px #22ddd2, 0 0 20px #22ddd2, 0 0 30px #22ddd2" 
          },
        },
        "neon-pulse": {
          "0%, 100%": { 
            opacity: "1",
            textShadow: "0 0 5px #22ddd2, 0 0 10px #22ddd2" 
          },
          "50%": { 
            opacity: "0.8",
            textShadow: "0 0 10px #22ddd2, 0 0 20px #22ddd2" 
          },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-glow": "neon-glow 2s ease-in-out infinite alternate",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
      },
    },
  },
  plugins: [
    animatePlugin,
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;