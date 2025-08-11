/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#020617',
        },
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'float-slow': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        'float-fast': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        twinkle: { '0%, 100%': { opacity: '0.2' }, '50%': { opacity: '0.5' } },
        gridMove: { '0%': { backgroundPosition: '0 0, 0 0, 0 0' }, '100%': { backgroundPosition: '0 0, 3rem 0, 0 3rem' } },
        tilt: { to: { '--angle': '360deg' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'float-fast': 'float-fast 8s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        grid: 'gridMove 24s linear infinite',
        tilt: 'tilt 8s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      backgroundImage: {
        aurora: 'radial-gradient(1200px 600px at 0% 0%, rgba(168,85,247,0.12), transparent), radial-gradient(1000px 600px at 100% 0%, rgba(34,211,238,0.12), transparent), radial-gradient(800px 600px at 50% 100%, rgba(99,102,241,0.12), transparent)',
      },
      dropShadow: {
        neon: '0 0 18px rgba(168,85,247,0.35)',
      },
    },
  },
  plugins: [],
};