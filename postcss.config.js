export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
  // Exclude third-party CSS files from PostCSS processing
  filter: {
    include: (file) => !file.includes('react-loading-skeleton'),
  },
};