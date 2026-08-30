/**
 * Missing from the repo alongside tailwind.config.ts. Next.js only runs
 * Tailwind when it finds a PostCSS config, so without this file the
 * @tailwind directives in app/globals.css are emitted verbatim and dropped,
 * producing the 468-byte stylesheet that shipped with no utility classes.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
