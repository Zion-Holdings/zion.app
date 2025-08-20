/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './automation/**/*.{js,ts,jsx,tsx,mdx}',
    './scripts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'indigo-950': '#1e1b4b',
        'purple-950': '#2d1b69',
        'slate-950': '#020617',
        'cyan-400': '#22d3ee',
        'fuchsia-400': '#e879f9',
        'blue-400': '#60a5fa',
        'yellow-400': '#facc15',
        'purple-400': '#c084fc',
        'green-400': '#4ade80',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
}