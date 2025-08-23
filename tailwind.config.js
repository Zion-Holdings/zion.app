/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Extended color palette
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Accessibility-focused colors
        'accessibility': {
          'focus': '#ffff00',
          'focus-high-contrast': '#00ff00',
          'error': '#ff4444',
          'success': '#00cc44',
          'warning': '#ffaa00',
          'info': '#0088ff',
        },
        // Semantic colors
        'semantic': {
          'positive': '#10b981',
          'negative': '#ef4444',
          'neutral': '#6b7280',
          'caution': '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        display: [
          'Poppins',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-medium': 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      // Accessibility improvements
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      // Custom utilities for accessibility
      outline: {
        'focus': '2px solid #3b82f6',
        'focus-high-contrast': '3px solid #ffff00',
      },
      outlineOffset: {
        'focus': '2px',
        'focus-high-contrast': '3px',
      },
    },
  },
  plugins: [
    // Custom plugin for accessibility
    function({ addUtilities, addComponents, theme }) {
      // Accessibility utilities
      const accessibilityUtilities = {
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
        '.focus-visible': {
          outline: `2px solid ${theme('colors.blue.500')}`,
          outlineOffset: '2px',
        },
        '.high-contrast-focus': {
          outline: `3px solid ${theme('colors.yellow.400')}`,
          outlineOffset: '3px',
        },
        '.skip-link': {
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: theme('colors.black'),
          color: theme('colors.white'),
          padding: '8px',
          textDecoration: 'none',
          borderRadius: '4px',
          zIndex: '10000',
          transition: 'top 0.3s',
        },
        '.skip-link:focus': {
          top: '6px',
        },
      };

      // High contrast mode utilities
      const highContrastUtilities = {
        '.high-contrast': {
          '--text-primary': '#ffffff',
          '--text-secondary': '#ffff00',
          '--bg-primary': '#000000',
          '--bg-secondary': '#000080',
          '--accent-primary': '#ffff00',
          '--accent-secondary': '#00ff00',
          '--border-primary': '#ffffff',
          '--border-secondary': '#ffff00',
        },
        '.high-contrast *': {
          color: 'var(--text-primary) !important',
          backgroundColor: 'var(--bg-primary) !important',
          borderColor: 'var(--border-primary) !important',
        },
      };

      // Large text mode utilities
      const largeTextUtilities = {
        '.large-text': {
          '--font-size-base': '1.25rem',
          '--font-size-lg': '1.5rem',
          '--font-size-xl': '1.875rem',
          '--font-size-2xl': '2.25rem',
          '--font-size-3xl': '3rem',
          '--font-size-4xl': '3.75rem',
          '--font-size-5xl': '4.5rem',
          '--font-size-6xl': '6rem',
          '--font-size-7xl': '7.5rem',
          '--font-size-8xl': '9rem',
        },
        '.large-text body': {
          fontSize: 'var(--font-size-base)',
          lineHeight: '1.6',
        },
        '.large-text h1': { fontSize: 'var(--font-size-6xl)' },
        '.large-text h2': { fontSize: 'var(--font-size-5xl)' },
        '.large-text h3': { fontSize: 'var(--font-size-4xl)' },
        '.large-text h4': { fontSize: 'var(--font-size-3xl)' },
        '.large-text h5': { fontSize: 'var(--font-size-2xl)' },
        '.large-text h6': { fontSize: 'var(--font-size-xl)' },
        '.large-text p, .large-text span, .large-text div': {
          fontSize: 'var(--font-size-base)',
        },
        '.large-text button, .large-text .btn': {
          fontSize: 'var(--font-size-lg)',
          padding: '1rem 2rem',
        },
      };

      // Reduced motion utilities
      const reducedMotionUtilities = {
        '.reduced-motion *': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
        '.reduced-motion .animate-pulse, .reduced-motion .animate-spin, .reduced-motion .animate-bounce': {
          animation: 'none !important',
        },
        '.reduced-motion .hover\\:scale-105:hover, .reduced-motion .hover\\:scale-110:hover, .reduced-motion .hover\\:scale-125:hover': {
          transform: 'none !important',
        },
      };

      // Performance utilities
      const performanceUtilities = {
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        '.will-change-scroll': {
          willChange: 'scroll-position',
        },
        '.contain-layout': {
          contain: 'layout',
        },
        '.contain-paint': {
          contain: 'paint',
        },
        '.contain-size': {
          contain: 'size',
        },
        '.contain-strict': {
          contain: 'strict',
        },
      };

      addUtilities(accessibilityUtilities);
      addUtilities(highContrastUtilities);
      addUtilities(largeTextUtilities);
      addUtilities(reducedMotionUtilities);
      addUtilities(performanceUtilities);

      // Custom components for better accessibility
      const accessibilityComponents = {
        '.btn-accessible': {
          minHeight: '44px',
          minWidth: '44px',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '500',
          borderRadius: '0.5rem',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          border: 'none',
          outline: 'none',
          '&:focus-visible': {
            outline: `3px solid ${theme('colors.blue.500')}`,
            outlineOffset: '2px',
            boxShadow: `0 0 0 3px ${theme('colors.blue.500')}40`,
          },
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.medium'),
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.input-accessible': {
          minHeight: '44px',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          border: `1px solid ${theme('colors.gray.300')}`,
          borderRadius: '0.5rem',
          backgroundColor: theme('colors.white'),
          color: theme('colors.gray.900'),
          transition: 'all 0.2s ease-in-out',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.blue.500'),
            boxShadow: `0 0 0 3px ${theme('colors.blue.500')}20`,
          },
          '&:focus-visible': {
            outline: `2px solid ${theme('colors.blue.500')}`,
            outlineOffset: '2px',
          },
        },
      };

      addComponents(accessibilityComponents);
    },
  ],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};