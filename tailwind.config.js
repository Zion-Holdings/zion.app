/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue-dark': '#172d67',
        'zion-blue': '#1e3a8a',
        'zion-blue-light': '#2e73ea',
        'zion-purple': '#8c15e9',
        'zion-purple-dark': '#6b21a8',
        'zion-purple-light': '#a855f7',
        'zion-cyan': '#22ddd2',
        'zion-cyan-dark': '#14b8a6',
        'zion-slate-light': '#94a3b8',
        'zion-slate': '#64748b',
        'zion-slate-dark': '#475569',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 221, 210, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 221, 210, 0.8), 0 0 40px rgba(34, 221, 210, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px rgba(34, 221, 210, 0.5), 0 0 10px rgba(34, 221, 210, 0.3), 0 0 15px rgba(34, 221, 210, 0.1)' 
          },
          '100%': { 
            textShadow: '0 0 10px rgba(34, 221, 210, 0.8), 0 0 20px rgba(34, 221, 210, 0.6), 0 0 30px rgba(34, 221, 210, 0.4)' 
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(34, 221, 210, 0.5)',
        'neon-lg': '0 0 30px rgba(34, 221, 210, 0.6)',
        'neon-xl': '0 0 40px rgba(34, 221, 210, 0.7)',
        'purple-neon': '0 0 20px rgba(140, 21, 233, 0.5)',
        'purple-neon-lg': '0 0 30px rgba(140, 21, 233, 0.6)',
        'purple-neon-xl': '0 0 40px rgba(140, 21, 233, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #22ddd2, #8c15e9, #2e73ea, #22ddd2)',
        'gradient-mesh-2': 'linear-gradient(135deg, #8c15e9, #22ddd2, #2e73ea, #8c15e9)',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '110': '1.10',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'monospace'],
        'tech': ['Rajdhani', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2.25',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}

