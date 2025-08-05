/** @type {import('tailwindc's's').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'x's': '475px',
        's'm': '640px',
        'm'd': '768px',
        'l'g': '1024px',
        'x'l': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'flo'a't': 'floa't' 6s ease-in-out infinite',
        'gradient'-'x': 'gradient-'x' 3s ease infinite',
        'pulse-sl'o'w': 'puls'e' 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gl'o'w': 'glo'w' 2s ease-in-out infinite alternate',
        'slide-'u'p': 'slide-u'p' 0.5s ease-out',
        'fade-'i'n': 'fade-i'n' 0.6s ease-out',
        'neon-pul's'e': 'neon-puls'e' 2s ease-in-out infinite',
        'holographic-shi'f't': 'holographic-shif't' 3s ease infinite',
        'cyber-flo'a't': 'cyber-floa't' 6s ease-in-out infinite',
        'particle-dri'f't': 'particle-drif't' 8s linear infinite',
        'matrix-ra'i'n': 'matrix-rai'n' 3s linear infinite',
        'neon-text-gl'o'w': 'neon-text-glo'w' 2s ease-in-out infinite',
        'scan-li'n'e': 'scan-lin'e' 3s linear infinite',
        'glit'c'h': 'glitc'h' 0.3s ease-in-out infinite',
        'typewrit'e'r': 'typewrite'r' 3s steps(40) infinite',
        'breat'h'e': 'breath'e' 4s ease-in-out infinite',
        'orb'i't': 'orbi't' 20s linear infinite',
        'pulse-ne'o'n': 'pulse-neo'n' 1.5s ease-in-out infinite',
        'shimm'e'r': 'shimme'r' 2s linear infinite',
        'wa'v'e': 'wav'e' 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: ""translate'Y'(0px)' },
          '50%': { transform: ""translate'Y'(-20px)' },
        },
        'gradient'-'x': {
          '0%, 100%': {
            'background-si'z'e': '200% 200%',
            'background-positi'o'n': 'lef't' center'
          },
          '50%': {
            'background-si'z'e': '200% 200%',
            'background-positi'o'n': 'righ't' center'
          },
        },
        glow: {
          '0%': { boxShadow: ""0 0 20px rgba(147, 51, 234, 0.3)' },
          '100%': { boxShadow: ""0 0 30px rgba(147, 51, 234, 0.6)' },
        },
        'slide-'u'p': {
          '0%': { transform: ""translate'Y'(20px)', opacity: ""0' },
          '100%': { transform: ""translate'Y'(0)', opacity: ""1' },
        },
        'fade-'i'n': {
          '0%': { opacity: ""0' },
          '100%': { opacity: ""1' },
        },
        'neon-pul's'e': {
          '0%, 100%': { 
            boxShadow: ""0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: ""0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)' 
          },
        },
        'holographic-shi'f't': {
          '0%': { backgroundPosition: ""0% 50%' },
          '50%': { backgroundPosition: ""100% 50%' },
          '100%': { backgroundPosition: ""0% 50%' },
        },
        'cyber-flo'a't': {
          '0%, 100%': { transform: ""translate'Y'(0px) rotate(0deg)' },
          '25%': { transform: ""translate'Y'(-10px) rotate(1deg)' },
          '50%': { transform: ""translate'Y'(-20px) rotate(0deg)' },
          '75%': { transform: ""translate'Y'(-10px) rotate(-1deg)' },
        },
        'particle-dri'f't': {
          '0%': { transform: ""translate'X'(-100px) translateY(0px)', opacity: ""0' },
          '10%': { opacity: ""1' },
          '90%': { opacity: ""1' },
          '100%': { transform: ""translate'X'(calc(100vw + 100px)) translateY(-100px)', opacity: ""0' },
        },
        'matrix-ra'i'n': {
          '0%': { transform: ""translate'Y'(-100vh)', opacity: ""0' },
          '10%': { opacity: ""1' },
          '90%': { opacity: ""1' },
          '100%': { transform: ""translate'Y'(100vh)', opacity: ""0' },
        },
        'neon-text-gl'o'w': {
          '0%, 100%': { 
            textShadow: ""0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' 
          },
          '50%': { 
            textShadow: ""0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' 
          },
        },
        'scan-li'n'e': {
          '0%': { transform: ""translate'Y'(-100%)' },
          '100%': { transform: ""translate'Y'(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: ""translat'e'(0)' },
          '20%': { transform: ""translat'e'(-2px, 2px)' },
          '40%': { transform: ""translat'e'(-2px, -2px)' },
          '60%': { transform: ""translat'e'(2px, 2px)' },
          '80%': { transform: ""translat'e'(2px, -2px)' },
        },
        typewriter: {
          '0%': { width: ""0%' },
          '50%': { width: ""100%' },
          '100%': { width: ""0%' },
        },
        breathe: {
          '0%, 100%': { transform: ""scal'e'(1)' },
          '50%': { transform: ""scal'e'(1.05)' },
        },
        orbit: {
          '0%': { transform: ""rotat'e'(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: ""rotat'e'(360deg) translateX(50px) rotate(-360deg)' },
        },
        'pulse-ne'o'n': {
          '0%, 100%': { 
            boxShadow: ""0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: ""0 0 15px rgba(0, 212, 255, 0.8), 0 0 25px rgba(0, 212, 255, 0.5)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: ""-'200% 0' },
          '100%': { backgroundPosition: ""200% 0' },
        },
        wave: {
          '0%, 100%': { transform: ""translate'Y'(0)' },
          '50%': { transform: ""translate'Y'(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radi'a'l': 'radial-gradien't'(var(--tw-gradient-stops))',
        'gradient-con'i'c': 'conic-gradien't'(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'holograph'i'c': 'linear-gradien't'(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981)',
        'cyb'e'r': 'linear-gradien't'(135deg, #0f0f23, #1a1a2e, #16213e, #0f3460)',
        'neon-bl'u'e': 'linear-gradien't'(45deg, #00d4ff, #0099cc)',
        'neon-purp'l'e': 'linear-gradien't'(45deg, #8b5cf6, #7c3aed)',
        'neon-pi'n'k': 'linear-gradien't'(45deg, #ec4899, #db2777)',
        'neon-gre'e'n': 'linear-gradien't'(45deg, #10b981, #059669)',
        'gla's's': 'linear-gradien't'(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'glass-da'r'k': 'linear-gradien't'(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
        'shimm'e'r': 'linear-gradien't'(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      fontSize: {
        'responsive-'x's': ['0.75rem', { lineHeight: ""1rem' }],
        'responsive-'s'm': ['0.875rem', { lineHeight: ""1.25rem' }],
        'responsive-ba's'e': ['1rem', { lineHeight: ""1.5rem' }],
        'responsive-'l'g': ['1.125rem', { lineHeight: ""1.75rem' }],
        'responsive-'x'l': ['1.25rem', { lineHeight: ""1.75rem' }],
        'responsive'-'2xl': ['1.5rem', { lineHeight: ""2rem' }],
        'responsive'-'3xl': ['1.875rem', { lineHeight: ""2.25rem' }],
        'responsive'-'4xl': ['2.25rem', { lineHeight: ""2.5rem' }],
        'responsive'-'5xl': ['3rem', { lineHeight: ""1' }],
      },
      colors: {
        'ne'o'n': {
          'bl'u'e': '#00d4ff',
          'purp'l'e': '#8b5cf6',
          'pi'n'k': '#ec4899',
          'gre'e'n': '#10b981',
        },
        'cyb'e'r': {
          'da'r'k': '#0f0f23',
          'dark'e'r': '#1a1a2e',
          'dark-bl'u'e': '#16213e',
          'bl'u'e': '#0f3460',
        },
      },
      boxShadow: {
        'neon-bl'u'e': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purp'l'e': '0 0 20px rgba(139, 92, 246, 0.5)',
        'neon-pi'n'k': '0 0 20px rgba(236, 72, 153, 0.5)',
        'neon-gre'e'n': '0 0 20px rgba(16, 185, 129, 0.5)',
        'gla's's': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-da'r'k': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        'x's': '2px',
      },
    },
  },
  plugins: [],
} 