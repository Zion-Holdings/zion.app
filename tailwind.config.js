/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './scripts/**/*.{js,ts,jsx,tsx,mdx}',
    './automation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Enable JIT mode for better performance
  mode: 'jit',
  
  // Dark mode configuration
  darkMode: 'class',
  
  // Theme configuration
  theme: {
    extend: {
      // Custom colors for Zion Tech Group brand
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        
        // Secondary brand colors
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        
        // Accent colors
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        
        // Neutral colors
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Zion Tech Group specific colors
        zion: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          emerald: '#10b981',
          teal: '#14b8a6',
          yellow: '#eab308',
          orange: '#f97316',
          red: '#ef4444',
          indigo: '#6366f1',
        },
        
        // Futuristic colors for 2044 theme
        futuristic: {
          neon: {
            cyan: '#00ffff',
            blue: '#0080ff',
            purple: '#8000ff',
            pink: '#ff0080',
            green: '#00ff80',
            yellow: '#ffff00',
            orange: '#ff8000',
            red: '#ff0000',
          },
          glow: {
            cyan: 'rgba(0, 255, 255, 0.3)',
            blue: 'rgba(0, 128, 255, 0.3)',
            purple: 'rgba(128, 0, 255, 0.3)',
            pink: 'rgba(255, 0, 128, 0.3)',
            green: 'rgba(0, 255, 128, 0.3)',
            yellow: 'rgba(255, 255, 0, 0.3)',
            orange: 'rgba(255, 128, 0, 0.3)',
            red: 'rgba(255, 0, 0, 0.3)',
          }
        }
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom font sizes
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
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },
      
      // Custom font weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // Custom line heights
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      // Custom shadows
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
        'glow-xl': '0 0 60px rgba(6, 182, 212, 0.5)',
        'glow-2xl': '0 0 80px rgba(6, 182, 212, 0.6)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(6, 182, 212, 0.2)',
        'cyber': '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        'rotate-in': 'rotateIn 0.5s ease-out',
        'rotate-out': 'rotateOut 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'bounce-out': 'bounceOut 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'matrix': 'matrix 20s linear infinite',
        'cyber': 'cyber 4s ease-in-out infinite',
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '100%': { transform: 'rotate(200deg)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '20%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(0.3)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        matrix: {
          '0%': { transform: 'matrix(1, 0, 0, 1, 0, 0)' },
          '100%': { transform: 'matrix(1, 0, 0, 1, 100, 100)' },
        },
        cyber: {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.1)' 
          },
          '50%': { 
            textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)' 
          },
        },
      },
      
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'gradient-cyber': 'linear-gradient(45deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
        'gradient-futuristic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-neon': 'linear-gradient(45deg, #00ffff 0%, #ff00ff 100%)',
        'gradient-matrix': 'linear-gradient(45deg, #00ff00 0%, #000000 50%, #00ff00 100%)',
      },
      
      // Custom grid
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      
      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom screens
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
      
      // Custom aspect ratios
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'ultrawide': '21 / 9',
        'cinematic': '2.39 / 1',
      },
    },
  },
  
  // Plugins
  plugins: [
    // Custom utilities plugin
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.text-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-glow-lg': {
          textShadow: '0 0 20px currentColor',
        },
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': theme('colors.gray.400') + ' ' + theme('colors.gray.200'),
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme('colors.gray.200'),
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.gray.400'),
            borderRadius: '4px',
          },
        },
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.line-clamp-4': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        '.line-clamp-5': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '5',
        },
        '.line-clamp-6': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '6',
        },
      };
      addUtilities(newUtilities);
    },
    
    // Import additional plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  
  // Core plugins configuration
  corePlugins: {
    preflight: true,
    container: false,
    accessibility: false,
  },
  
  // Variants configuration
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled', 'group-hover', 'group-focus'],
      borderColor: ['disabled', 'group-hover', 'group-focus'],
      textColor: ['disabled', 'group-hover', 'group-focus'],
      scale: ['group-hover', 'group-focus'],
      rotate: ['group-hover', 'group-focus'],
      translate: ['group-hover', 'group-focus'],
      skew: ['group-hover', 'group-focus'],
      animation: ['hover', 'focus', 'group-hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  
  // Important configuration
  important: false,
  
  // Separator configuration
  separator: ':',
  
  // Prefix configuration
  prefix: '',
  
  // Future configuration
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColor: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
  },
};