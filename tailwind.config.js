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
        'zion-blue-light': '#2e73ea',
        'zion-purple': '#8c15e9',
        'zion-purple-dark': '#6b21a8',
        'zion-cyan': '#22ddd2',
        'zion-slate-light': '#94a3b8',
      },
    },
  },
  plugins: [],
}

