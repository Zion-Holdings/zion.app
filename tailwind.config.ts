import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
<<<<<<< HEAD
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
=======
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
  ],
  safelist: ['border-border'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
<<<<<<< HEAD
        // Enhanced Zion colors for futuristic design
        'zion-blue': {
          DEFAULT: '#0a0f1f',
          light: '#1e263b',
          dark: '#090c1a',
          neon: '#00e5ff',
          glow: '#0ea5e9',
        },
        'zion-purple': {
          DEFAULT: '#a855f7',
          light: '#d8b4fe',
          dark: '#9333ea',
          neon: '#c084fc',
          glow: '#8b5cf6',
        },
        'zion-cyan': {
          DEFAULT: '#00e5ff',
          light: '#7df9ff',
          dark: '#00c4cc',
          neon: '#06b6d4',
          glow: '#0891b2',
        },
        'zion-slate': {
          DEFAULT: '#94A3B8',
          light: '#CBD5E1',
          dark: '#64748B',
          neon: '#475569',
          glow: '#334155',
        },
        // New futuristic colors
        'neon-pink': '#ff0080',
        'neon-green': '#00ff41',
        'neon-orange': '#ff6b35',
        'neon-yellow': '#ffff00',
        'quantum-blue': '#1e40af',
        'quantum-purple': '#7c3aed',
        'quantum-cyan': '#0891b2',
=======
        // Custom Zion colors
        "zion-blue": {
          DEFAULT: "#0a0f1f",
          light: "#1e263b",
          dark: "#090c1a",
        },
        "zion-purple": {
          DEFAULT: "#a855f7",
          light: "#d8b4fe",
          dark: "#9333ea",
        },
        "zion-cyan": {
          DEFAULT: "#00e5ff",
          light: "#7df9ff",
          dark: "#00c4cc",
        },
        "zion-slate": {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
        },
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
        heading: [
          'var(--font-poppins)',
          'Poppins Fallback',
          ...defaultTheme.fontFamily.sans
        ],
        futuristic: ['Orbitron', 'monospace'],
        neon: ['Rajdhani', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
<<<<<<< HEAD
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '50%': { 
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 7px currentColor',
            opacity: '0.8'
          },
        },
        'quantum-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'holographic-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'quantum-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
=======
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.8)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 15px #00e5ff, 0 0 20px #00e5ff' 
          },
          '50%': { 
            textShadow: '0 0 2px #00e5ff, 0 0 5px #00e5ff, 0 0 7px #00e5ff, 0 0 10px #00e5ff' 
          },
        }
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
<<<<<<< HEAD
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'holographic-shift': 'holographic-shift 3s ease infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neon-flicker': 'neon-flicker 0.15s ease-in-out infinite alternate',
        'quantum-spin': 'quantum-spin 20s linear infinite',
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neon-gradient': 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7)',
        'holographic-gradient': 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7, #ff0080)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0f1f 0%, #1e263b 50%, #0a0f1f 100%)',
        'quantum-mesh': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'quantum': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)',
        'holographic': '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)',
      },
=======
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
      }
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
        '.text-neon': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.border-neon': {
          boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.bg-holographic': {
          background: 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7)',
          backgroundSize: '400% 400%',
          animation: 'holographic-shift 3s ease infinite',
        },
        '.quantum-border': {
          border: '1px solid transparent',
          background: 'linear-gradient(45deg, #00e5ff, #a855f7) border-box',
          backgroundClip: 'border-box',
        },
      };
      addUtilities(newUtilities);
    })
  ]
};

export default config;