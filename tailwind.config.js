/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "holographic-shift": "holographic-shift 3s ease infinite",
        "cyber-float": "cyber-float 6s ease-in-out infinite",
        "particle-drift": "particle-drift 8s linear infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "neon-text-glow": "neon-text-glow 2s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
        glitch: "glitch 0.3s ease-in-out infinite",
        typewriter: "typewriter 3s steps(40) infinite",
        breathe: "breathe 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "pulse-neon": "pulse-neon 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)",
          },
        },
        "holographic-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "cyber-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        "particle-drift": {
          "0%": {
            transform: "translateX(-100px) translateY(0px)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateX(calc(100vw + 100px)) translateY(-100px)",
            opacity: "0",
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "neon-text-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            textShadow:
              "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
          },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        typewriter: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "100%": { width: "0%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(50px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(50px) rotate(-360deg)",
          },
        },
        "pulse-neon": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 15px rgba(0, 212, 255, 0.8), 0 0 25px rgba(0, 212, 255, 0.5)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        holographic:
          "linear-gradient(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981)",
        cyber: "linear-gradient(135deg, #0f0f23, #1a1a2e, #16213e, #0f3460)",
        "neon-blue": "linear-gradient(45deg, #00d4ff, #0099cc)",
        "neon-purple": "linear-gradient(45deg, #8b5cf6, #7c3aed)",
        "neon-pink": "linear-gradient(45deg, #ec4899, #db2777)",
        "neon-green": "linear-gradient(45deg, #10b981, #059669)",
        glass:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "glass-dark":
          "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
      fontSize: {
        "responsive-xs": ["0.75rem", { lineHeight: "1rem" }],
        "responsive-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "responsive-base": ["1rem", { lineHeight: "1.5rem" }],
        "responsive-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "responsive-xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "responsive-2xl": ["1.5rem", { lineHeight: "2rem" }],
        "responsive-3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "responsive-4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "responsive-5xl": ["3rem", { lineHeight: "1" }],
      },
      colors: {
        neon: {
          blue: "#00d4ff",
          purple: "#8b5cf6",
          pink: "#ec4899",
          green: "#10b981",
        },
        cyber: {
          dark: "#0f0f23",
          darker: "#1a1a2e",
          "dark-blue": "#16213e",
          blue: "#0f3460",
        },
        "high-contrast": "#ffffff",
        "high-contrast-secondary": "#e5e7eb",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
        "neon-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
        "neon-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "neon-glow":
          "0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)",
      },
      spacing: {
        responsive: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
