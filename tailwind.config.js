/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Base background
        foreground: "hsl(var(--foreground))", // Base text color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary interactive elements
          foreground: "hsl(var(--primary-foreground))", // Text on primary elements
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary interactive elements
          foreground: "hsl(var(--secondary-foreground))", // Text on secondary elements
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Muted backgrounds (e.g., cards)
          foreground: "hsl(var(--muted-foreground))", // Muted text
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Accent color for highlights
          foreground: "hsl(var(--accent-foreground))", // Text on accent elements
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom modern additions
        'modern-bg': 'hsl(220, 15%, 95%)', // Light grey background
        'modern-bg-dark': 'hsl(220, 25%, 10%)', // Darker background for dark mode
        'modern-text': 'hsl(220, 25%, 10%)', // Dark text for light mode
        'modern-text-dark': 'hsl(220, 15%, 95%)', // Light text for dark mode
        'modern-primary': 'hsl(210, 90%, 50%)', // Vibrant blue
        'modern-primary-hover': 'hsl(210, 90%, 60%)',
        'modern-secondary': 'hsl(180, 70%, 45%)', // Teal accent
        'modern-accent': 'hsl(330, 80%, 60%)', // Pink/Magenta accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'], // Keep Orbitron for headings if desired, or change
        // body: ['Roboto', 'sans-serif'], // Example: Add Roboto for body text
      },
      borderRadius: {
        lg: "var(--radius)", // Example: 0.75rem
        md: "calc(var(--radius) - 2px)", // Example: 0.5rem
        sm: "calc(var(--radius) - 4px)", // Example: 0.375rem
        xl: "calc(var(--radius) + 4px)", // Example: 1rem
      },
      boxShadow: {
        'modern-sm': '0 2px 4px rgba(0,0,0,0.05)',
        'modern-md': '0 5px 10px rgba(0,0,0,0.1)',
        'modern-lg': '0 10px 20px rgba(0,0,0,0.1)',
        'modern-xl': '0 20px 40px rgba(0,0,0,0.15)',
        'modern-inner': 'inset 0 2px 4px rgba(0,0,0,0.05)',
      },
      backgroundImage: {
        'modern-gradient-primary': 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--modern-primary-hover)))',
        'modern-gradient-accent': 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--modern-accent)))',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0'},
          '100%': { transform: 'translateY(0px)', opacity: '1'},
        }
      },
    },
  },
  plugins: [],
}