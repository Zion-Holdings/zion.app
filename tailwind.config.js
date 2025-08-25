/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#172d67',
        'zion-blue-dark': '#0f1a3d',
        'zion-blue-light': '#2e73ea',
        'zion-cyan': '#22ddd2',
        'zion-cyan-light': '#4de8e0',
        'zion-purple': '#8c15e9',
        'zion-purple-dark': '#6b21a8',
        'zion-purple-light': '#a855f7',
        'zion-slate': '#64748b',
        'zion-slate-light': '#94a3b8',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2' },
          '100%': { boxShadow: '0 0 10px #22ddd2, 0 0 20px #22ddd2, 0 0 30px #22ddd2' }
        },
        neonPulse: {
          '0%': { textShadow: '0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2' },
          '100%': { textShadow: '0 0 10px #22ddd2, 0 0 20px #22ddd2, 0 0 30px #22ddd2' }
        },
      },
    },
  },
  plugins: [],
}

