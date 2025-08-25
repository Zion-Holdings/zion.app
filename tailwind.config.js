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
        'zion-cyan': '#22ddd2',
        'zion-cyan-light': '#4de8e0',
        'zion-purple': '#8c15e9',
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
        'matrix-rain': 'matrixRain 20s linear infinite',
        'energy-pulse': 'energyPulse 3s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'quantum-shift': 'quantumShift 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 0.5s ease-in-out infinite alternate',
        'cyber-wave': 'cyberWave 8s ease-in-out infinite',
        'particle-float': 'particleFloat 5s ease-in-out infinite',
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
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        energyPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' }
        },
        hologram: {
          '0%, 100%': { opacity: '0.5', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '0.8', filter: 'hue-rotate(180deg)' }
        },
        quantumShift: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateX(10px) rotate(5deg)' }
        },
        neonFlicker: {
          '0%': { opacity: '1', textShadow: '0 0 5px #22ddd2' },
          '100%': { opacity: '0.8', textShadow: '0 0 10px #22ddd2, 0 0 20px #22ddd2' }
        },
        cyberWave: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(10px)' },
          '75%': { transform: 'translateY(-15px) translateX(5px)' }
        }
      },
    },
  },
  plugins: [],
}

