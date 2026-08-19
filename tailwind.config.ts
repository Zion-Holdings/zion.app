import type { Config } from 'tailwindcss';

/**
 * Tailwind was declared in package.json and `globals.css` carried the
 * @tailwind directives, but this config and postcss.config.js were absent
 * from the repo -- so the compiler never ran and the shipped CSS bundle was
 * 468 bytes containing zero utility classes. Every `max-w-5xl`, `grid`,
 * `rounded-2xl` and `text-slate-*` on 100+ pages resolved to nothing, which
 * is what "the template broke and content looks missing" actually was: the
 * markup renders, unstyled and unspaced.
 *
 * `content` must cover app/ (App Router pages) and app/components/ -- the
 * tsconfig alias maps @/components/* to ./app/components/*, not ./components/*.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The palette the pages already reference, promoted to theme tokens
        // so future components inherit it instead of hardcoding hex values.
        ink: {
          950: '#0b0f1a',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        brand: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#7c3aed',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        container: '80rem',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
