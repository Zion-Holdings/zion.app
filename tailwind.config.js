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
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
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
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'monospace'],
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
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.5)',
        'glow-xl': '0 0 60px rgba(6, 182, 212, 0.5)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out',
        'fade-in-right': 'fadeInRight 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'slide-in-down': 'slideInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'bounce-out': 'bounceOut 0.6s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'rotate-out': 'rotateOut 0.6s ease-out',
        'flip-in-x': 'flipInX 0.6s ease-out',
        'flip-in-y': 'flipInY 0.6s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'zoom-out': 'zoomOut 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out infinite',
        'quantum': 'quantum 4s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'hologram': 'hologram 3s ease-in-out infinite',
        'cyberpunk': 'cyberpunk 2s ease-in-out infinite',
        'space-float': 'spaceFloat 5s ease-in-out infinite',
        'quantum-float': 'quantumFloat 4s ease-in-out infinite',
        'neon-float': 'neonFloat 3s ease-in-out infinite',
        'hologram-float': 'hologramFloat 6s ease-in-out infinite',
        'cyberpunk-float': 'cyberpunkFloat 4s ease-in-out infinite',
        'space-rotate': 'spaceRotate 20s linear infinite',
        'quantum-rotate': 'quantumRotate 15s linear infinite',
        'neon-rotate': 'neonRotate 10s linear infinite',
        'hologram-rotate': 'hologramRotate 25s linear infinite',
        'cyberpunk-rotate': 'cyberpunkRotate 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
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
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(0.3)', opacity: '0' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '100%': { transform: 'rotate(200deg)', opacity: '0' },
        },
        flipInX: {
          '0%': { transform: 'perspective(400px) rotateX(90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotateX(-20deg)' },
          '60%': { transform: 'perspective(400px) rotateX(10deg)' },
          '80%': { transform: 'perspective(400px) rotateX(-5deg)' },
          '100%': { transform: 'perspective(400px) rotateX(0deg)', opacity: '1' },
        },
        flipInY: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotateY(-20deg)' },
          '60%': { transform: 'perspective(400px) rotateY(10deg)' },
          '80%': { transform: 'perspective(400px) rotateY(-5deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { transform: 'scale(0.3)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-20deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        quantum: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '25%': { transform: 'scale(1.1) rotate(90deg)', opacity: '1' },
          '50%': { transform: 'scale(0.9) rotate(180deg)', opacity: '0.6' },
          '75%': { transform: 'scale(1.05) rotate(270deg)', opacity: '0.9' },
        },
        neonPulse: {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '0.8'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            opacity: '1'
          },
        },
        hologram: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(5deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-5px) rotate(-3deg)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(2deg)',
            opacity: '0.9'
          },
        },
        cyberpunk: {
          '0%, 100%': { 
            transform: 'skew(0deg) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'skew(2deg) scale(1.05)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'skew(-1deg) scale(0.95)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'skew(1deg) scale(1.02)',
            filter: 'hue-rotate(270deg)'
          },
        },
        spaceFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(-25px) translateX(-5px)' },
          '75%': { transform: 'translateY(-10px) translateX(15px)' },
        },
        quantumFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)',
            opacity: '0.8'
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(120deg) scale(1.1)',
            opacity: '1'
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(240deg) scale(0.9)',
            opacity: '0.6'
          },
        },
        neonFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px)',
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor'
          },
          '50%': { 
            transform: 'translateY(-25px)',
            boxShadow: '0 0 15px currentColor, 0 0 25px currentColor, 0 0 35px currentColor'
          },
        },
        hologramFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translateY(-30px) rotate(90deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-15px) rotate(180deg)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-35px) rotate(270deg)',
            opacity: '0.9'
          },
        },
        cyberpunkFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) skew(0deg)',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '33%': { 
            transform: 'translateY(-20px) skew(2deg)',
            filter: 'hue-rotate(120deg) brightness(1.2)'
          },
          '66%': { 
            transform: 'translateY(-10px) skew(-1deg)',
            filter: 'hue-rotate(240deg) brightness(0.8)'
          },
        },
        spaceRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        quantumRotate: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.2)',
            opacity: '1'
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)',
            opacity: '0.8'
          },
        },
        neonRotate: {
          '0%': { 
            transform: 'rotate(0deg)',
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor'
          },
          '50%': { 
            transform: 'rotate(180deg)',
            boxShadow: '0 0 15px currentColor, 0 0 25px currentColor'
          },
          '100%': { 
            transform: 'rotate(360deg)',
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor'
          },
        },
        hologramRotate: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'rotate(90deg) scale(1.1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'rotate(180deg) scale(0.9)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'rotate(270deg) scale(1.05)',
            opacity: '0.9'
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)',
            opacity: '0.6'
          },
        },
        cyberpunkRotate: {
          '0%': { 
            transform: 'rotate(0deg) skew(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '33%': { 
            transform: 'rotate(120deg) skew(2deg)',
            filter: 'hue-rotate(120deg)'
          },
          '66%': { 
            transform: 'rotate(240deg) skew(-1deg)',
            filter: 'hue-rotate(240deg)'
          },
          '100%': { 
            transform: 'rotate(360deg) skew(0deg)',
            filter: 'hue-rotate(360deg)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd)',
        'gradient-cyber': 'linear-gradient(45deg, #ff0055, #00ffff, #ffff00, #ff00ff, #8000ff)',
        'gradient-quantum': 'linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899, #10b981, #f59e0b)',
        'gradient-neon': 'linear-gradient(45deg, #ff0080, #00ffff, #ffff00, #ff00ff, #8000ff)',
        'gradient-hologram': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
        'gradient-space': 'linear-gradient(45deg, #1e3a8a, #7c3aed, #059669, #dc2626, #ea580c)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
        '300%': '300%',
        '400%': '400%',
        '500%': '500%',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
        'top-left': 'top left',
        'top-right': 'top right',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right',
      },
      backgroundAttachment: {
        'fixed': 'fixed',
        'local': 'local',
        'scroll': 'scroll',
      },
      backgroundClip: {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box',
        'text': 'text',
      },
      backgroundOrigin: {
        'border': 'border-box',
        'padding': 'padding-box',
        'content': 'content-box',
      },
      backgroundRepeat: {
        'repeat': 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        'repeat-round': 'repeat-round',
        'repeat-space': 'repeat-space',
      },
      backgroundBlendMode: {
        'normal': 'normal',
        'multiply': 'multiply',
        'screen': 'screen',
        'overlay': 'overlay',
        'darken': 'darken',
        'lighten': 'lighten',
        'color-dodge': 'color-dodge',
        'color-burn': 'color-burn',
        'hard-light': 'hard-light',
        'soft-light': 'soft-light',
        'difference': 'difference',
        'exclusion': 'exclusion',
        'hue': 'hue',
        'saturation': 'saturation',
        'color': 'color',
        'luminosity': 'luminosity',
      },
      mixBlendMode: {
        'normal': 'normal',
        'multiply': 'multiply',
        'screen': 'screen',
        'overlay': 'overlay',
        'darken': 'darken',
        'lighten': 'lighten',
        'color-dodge': 'color-dodge',
        'color-burn': 'color-burn',
        'hard-light': 'hard-light',
        'soft-light': 'soft-light',
        'difference': 'difference',
        'exclusion': 'exclusion',
        'hue': 'hue',
        'saturation': 'saturation',
        'color': 'color',
        'luminosity': 'luminosity',
      },
      filter: {
        'none': 'none',
        'blur': 'blur(4px)',
        'blur-sm': 'blur(2px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
        'blur-xl': 'blur(24px)',
        'blur-2xl': 'blur(40px)',
        'blur-3xl': 'blur(64px)',
        'brightness': 'brightness(1.1)',
        'brightness-75': 'brightness(0.75)',
        'brightness-90': 'brightness(0.9)',
        'brightness-110': 'brightness(1.1)',
        'brightness-125': 'brightness(1.25)',
        'brightness-150': 'brightness(1.5)',
        'brightness-200': 'brightness(2)',
        'contrast': 'contrast(1.1)',
        'contrast-75': 'contrast(0.75)',
        'contrast-90': 'contrast(0.9)',
        'contrast-110': 'contrast(1.1)',
        'contrast-125': 'contrast(1.25)',
        'contrast-150': 'contrast(1.5)',
        'contrast-200': 'contrast(2)',
        'grayscale': 'grayscale(1)',
        'grayscale-0': 'grayscale(0)',
        'hue-rotate': 'hue-rotate(15deg)',
        'hue-rotate-30': 'hue-rotate(30deg)',
        'hue-rotate-60': 'hue-rotate(60deg)',
        'hue-rotate-90': 'hue-rotate(90deg)',
        'hue-rotate-180': 'hue-rotate(180deg)',
        'invert': 'invert(1)',
        'invert-0': 'invert(0)',
        'saturate': 'saturate(1.1)',
        'saturate-0': 'saturate(0)',
        'saturate-50': 'saturate(0.5)',
        'saturate-75': 'saturate(0.75)',
        'saturate-90': 'saturate(0.9)',
        'saturate-110': 'saturate(1.1)',
        'saturate-125': 'saturate(1.25)',
        'saturate-150': 'saturate(1.5)',
        'saturate-200': 'saturate(2)',
        'sepia': 'sepia(1)',
        'sepia-0': 'sepia(0)',
        'drop-shadow': 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
        'drop-shadow-sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
        'drop-shadow-md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
        'drop-shadow-lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        'drop-shadow-xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
        'drop-shadow-2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
        'drop-shadow-none': 'drop-shadow(0 0 #0000)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(4px)',
        'blur-sm': 'blur(2px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
        'blur-xl': 'blur(24px)',
        'blur-2xl': 'blur(40px)',
        'blur-3xl': 'blur(64px)',
        'brightness': 'brightness(1.1)',
        'brightness-75': 'brightness(0.75)',
        'brightness-90': 'brightness(0.9)',
        'brightness-110': 'brightness(1.1)',
        'brightness-125': 'brightness(1.25)',
        'brightness-150': 'brightness(1.5)',
        'brightness-200': 'brightness(2)',
        'contrast': 'contrast(1.1)',
        'contrast-75': 'contrast(0.75)',
        'contrast-90': 'contrast(0.9)',
        'contrast-110': 'contrast(1.1)',
        'contrast-125': 'contrast(1.25)',
        'contrast-150': 'contrast(1.5)',
        'contrast-200': 'contrast(2)',
        'grayscale': 'grayscale(1)',
        'grayscale-0': 'grayscale(0)',
        'hue-rotate': 'hue-rotate(15deg)',
        'hue-rotate-30': 'hue-rotate(30deg)',
        'hue-rotate-60': 'hue-rotate(60deg)',
        'hue-rotate-90': 'hue-rotate(90deg)',
        'hue-rotate-180': 'hue-rotate(180deg)',
        'invert': 'invert(1)',
        'invert-0': 'invert(0)',
        'saturate': 'saturate(1.1)',
        'saturate-0': 'saturate(0)',
        'saturate-50': 'saturate(0.5)',
        'saturate-75': 'saturate(0.75)',
        'saturate-90': 'saturate(0.9)',
        'saturate-110': 'saturate(1.1)',
        'saturate-125': 'saturate(1.25)',
        'saturate-150': 'saturate(1.5)',
        'saturate-200': 'saturate(2)',
        'sepia': 'sepia(1)',
        'sepia-0': 'sepia(0)',
      },
      transitionProperty: {
        'none': 'none',
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'background': 'background-color, background-image, background-position, background-size, background-repeat, background-attachment, background-clip, background-origin',
        'border': 'border-color, border-width, border-style, border-radius',
        'spacing': 'margin, padding, width, height, top, right, bottom, left',
        'typography': 'color, background-color, font-size, font-weight, line-height, text-align, text-decoration, text-transform, letter-spacing, word-spacing',
        'layout': 'display, position, top, right, bottom, left, z-index, float, clear, vertical-align, text-align, white-space, word-break, word-wrap, overflow, overflow-x, overflow-y, clip, visibility, opacity, zoom, cursor, pointer-events, user-select, resize, transition, animation, transform, transform-origin, transform-style, perspective, perspective-origin, backface-visibility',
      },
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      transitionTimingFunction: {
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-quantum': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-neon': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-hologram': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-cyberpunk': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-space': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDelay: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
  safelist: [
    'focus:ring-cyan-500/50',
    'focus:ring-cyan-400/50',
    'focus:ring-offset-2',
    'focus:ring-offset-gray-900'
  ]
}