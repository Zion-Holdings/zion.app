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
        // Additional service category colors
        "zion-green": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-orange": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        "zion-red": {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#dc2626",
        },
        "zion-pink": {
          DEFAULT: "#ec4899",
          light: "#f472b6",
          dark: "#db2777",
        },
        "zion-indigo": {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        "zion-emerald": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-teal": {
          DEFAULT: "#14b8a6",
          light: "#2dd4bf",
          dark: "#0d9488",
        },
        "zion-amber": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        "zion-yellow": {
          DEFAULT: "#eab308",
          light: "#facc15",
          dark: "#ca8a04",
        },
        "zion-lime": {
          DEFAULT: "#84cc16",
          light: "#a3e635",
          dark: "#65a30d",
        },
        "zion-rose": {
          DEFAULT: "#f43f5e",
          light: "#fb7185",
          dark: "#e11d48",
        },
        "zion-violet": {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        "zion-fuchsia": {
          DEFAULT: "#d946ef",
          light: "#e879f9",
          dark: "#c026d3",
        },
        "zion-sky": {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
          dark: "#0284c7",
        },
        "zion-blue-light": {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },
        "zion-cyan-light": {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
          dark: "#0891b2",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(34, 221, 210, 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(34, 221, 210, 0.8)",
            transform: "scale(1.05)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(45deg, #8c15e9, #22ddd2, #2e73ea, #8c15e9)",
        "gradient-neon": "linear-gradient(45deg, #22ddd2, #8c15e9, #22ddd2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon": "0 0 20px rgba(34, 221, 210, 0.5)",
        "neon-purple": "0 0 20px rgba(140, 21, 233, 0.5)",
        "neon-blue": "0 0 20px rgba(46, 115, 234, 0.5)",
        "glow": "0 0 40px rgba(34, 221, 210, 0.3)",
        "glow-purple": "0 0 40px rgba(140, 21, 233, 0.3)",
        "glow-blue": "0 0 40px rgba(46, 115, 234, 0.3)",
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
        '.text-gradient': {
          background: 'linear-gradient(45deg, #22ddd2, #8c15e9, #2e73ea)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.bg-mesh': {
          background: 'linear-gradient(45deg, #8c15e9, #22ddd2, #2e73ea, #8c15e9)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 3s ease infinite',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;