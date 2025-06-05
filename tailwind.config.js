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
        border: "hsl(222, 39%, 17%)",
        input: "hsl(222, 39%, 17%)",
        ring: "hsl(188, 85%, 53%)",
        background: "hsl(222, 47%, 8%)",
        foreground: "hsl(0, 0%, 88%)",
        primary: {
          DEFAULT: "hsl(188, 85%, 53%)",
          foreground: "hsl(222, 47%, 8%)",
        },
        secondary: {
          DEFAULT: "hsl(271, 76%, 53%)",
          foreground: "hsl(0, 0%, 88%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Keeping existing destructive colors
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Keeping existing muted colors
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(288, 85%, 60%)",
          foreground: "hsl(0, 0%, 88%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Keeping existing popover colors
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(220, 30%, 11%)",
          foreground: "hsl(0, 0%, 88%)", // Using foreground for card text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}