module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      // Only process files in src/ and public/ directories
      content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './public/**/*.css',
      ],
      // Exclude static/css directory completely
      exclude: ['./static/**/*', '**/static/**/*'],
    },
    autoprefixer: {},
  },
};
