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
        fuchsia: {
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
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
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
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite alternate',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'quantum-shift': 'quantumShift 4s ease-in-out infinite',
        'space-drift': 'spaceDrift 8s ease-in-out infinite',
        'ai-breathe': 'aiBreathe 3s ease-in-out infinite',
        'hologram-flicker': 'hologramFlicker 0.5s ease-in-out infinite alternate',
        'cyber-glitch': 'cyberGlitch 0.3s ease-in-out infinite alternate',
        'neural-pulse': 'neuralPulse 2s ease-in-out infinite',
        'quantum-entangle': 'quantumEntangle 5s ease-in-out infinite',
        'space-time-warp': 'spaceTimeWarp 10s ease-in-out infinite',
        'ai-consciousness': 'aiConsciousness 6s ease-in-out infinite',
        'biotech-evolution': 'biotechEvolution 7s ease-in-out infinite',
        'metaverse-float': 'metaverseFloat 4s ease-in-out infinite',
        'quantum-compute': 'quantumCompute 8s ease-in-out infinite',
        'space-mining': 'spaceMining 12s ease-in-out infinite',
        'ai-emotion': 'aiEmotion 3.5s ease-in-out infinite',
        'quantum-security': 'quantumSecurity 5.5s ease-in-out infinite',
        'biotech-dna': 'biotechDNA 6.5s ease-in-out infinite',
        'space-colonization': 'spaceColonization 15s ease-in-out infinite',
        'ai-creativity': 'aiCreativity 4.5s ease-in-out infinite',
        'quantum-learning': 'quantumLearning 7.5s ease-in-out infinite',
        'space-exploration': 'spaceExploration 20s ease-in-out infinite',
        'ai-autonomy': 'aiAutonomy 5.5s ease-in-out infinite',
        'quantum-finance': 'quantumFinance 6.5s ease-in-out infinite',
        'biotech-health': 'biotechHealth 4.5s ease-in-out infinite',
        'space-technology': 'spaceTechnology 18s ease-in-out infinite',
        'ai-innovation': 'aiInnovation 3.5s ease-in-out infinite',
        'quantum-space': 'quantumSpace 25s ease-in-out infinite',
        'biotech-research': 'biotechResearch 8.5s ease-in-out infinite',
        'space-mining-automation': 'spaceMiningAutomation 30s ease-in-out infinite',
        'ai-consciousness-evolution': 'aiConsciousnessEvolution 10s ease-in-out infinite',
        'quantum-internet-security': 'quantumInternetSecurity 7.5s ease-in-out infinite',
        'biotech-dna-computing': 'biotechDNAComputing 12.5s ease-in-out infinite',
        'quantum-financial-trading': 'quantumFinancialTrading 9.5s ease-in-out infinite',
        'space-mining-platform': 'spaceMiningPlatform 35s ease-in-out infinite',
        'metaverse-digital-reality': 'metaverseDigitalReality 6.5s ease-in-out infinite',
        'autonomous-devops': 'autonomousDevOps 8.5s ease-in-out infinite',
        'quantum-cloud-infrastructure': 'quantumCloudInfrastructure 15.5s ease-in-out infinite',
        'ai-powered-enterprise-security': 'aiPoweredEnterpriseSecurity 6.5s ease-in-out infinite',
        'autonomous-it-operations': 'autonomousITOperations 9.5s ease-in-out infinite',
        'zero-trust-architecture': 'zeroTrustArchitecture 7.5s ease-in-out infinite',
        'ai-emotion-marketing': 'aiEmotionMarketing 4.5s ease-in-out infinite',
        'biotech-personalized-nutrition': 'biotechPersonalizedNutrition 5.5s ease-in-out infinite',
        'quantum-learning-accelerator': 'quantumLearningAccelerator 8.5s ease-in-out infinite',
        'intelligent-data-governance': 'intelligentDataGovernance 6.5s ease-in-out infinite',
        'ai-meeting-transcriber': 'aiMeetingTranscriber 4.5s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4' },
          '100%': { boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        neonPulse: {
          '0%': { textShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4' },
          '100%': { textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4' }
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        quantumShift: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateX(0px) rotate(180deg)' },
          '75%': { transform: 'translateX(-10px) rotate(270deg)' }
        },
        spaceDrift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(20px) translateY(-10px)' },
          '50%': { transform: 'translateX(0px) translateY(-20px)' },
          '75%': { transform: 'translateX(-20px) translateY(-10px)' }
        },
        aiBreathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        hologramFlicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.7' }
        },
        cyberGlitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        neuralPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' }
        },
        quantumEntangle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(0.9)' }
        },
        spaceTimeWarp: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        aiConsciousness: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.05) rotate(5deg)' },
          '50%': { transform: 'scale(1.1) rotate(0deg)' },
          '75%': { transform: 'scale(1.05) rotate(-5deg)' }
        },
        biotechEvolution: {
          '0%, 100%': { transform: 'scale(1) translateY(0px)' },
          '33%': { transform: 'scale(1.1) translateY(-5px)' },
          '66%': { transform: 'scale(1.05) translateY(5px)' }
        },
        metaverseFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(180deg)' }
        },
        quantumCompute: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.2)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(0.8)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        spaceMining: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) translateY(-10px) rotate(90deg)' },
          '50%': { transform: 'translateX(0px) translateY(-20px) rotate(180deg)' },
          '75%': { transform: 'translateX(-10px) translateY(-10px) rotate(270deg)' }
        },
        aiEmotion: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(1.05) rotate(240deg)' }
        },
        quantumSecurity: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(5px)' },
          '50%': { transform: 'scale(1) translateX(0px)' },
          '75%': { transform: 'scale(0.9) translateX(-5px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        },
        biotechDNA: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(90deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '75%': { transform: 'scale(1.1) rotate(270deg)' }
        },
        spaceColonization: {
          '0%': { transform: 'translateX(0px) translateY(0px) scale(1)' },
          '20%': { transform: 'translateX(20px) translateY(-20px) scale(1.1)' },
          '40%': { transform: 'translateX(0px) translateY(-40px) scale(1.2)' },
          '60%': { transform: 'translateX(-20px) translateY(-20px) scale(1.1)' },
          '80%': { transform: 'translateX(0px) translateY(0px) scale(1)' },
          '100%': { transform: 'translateX(0px) translateY(0px) scale(1)' }
        },
        aiCreativity: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.15) rotate(45deg)' },
          '50%': { transform: 'scale(1.3) rotate(90deg)' },
          '75%': { transform: 'scale(1.15) rotate(135deg)' }
        },
        quantumLearning: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '25%': { transform: 'scale(1.1) translateY(-10px)' },
          '50%': { transform: 'scale(1.2) translateY(-20px)' },
          '75%': { transform: 'scale(1.1) translateY(-10px)' },
          '100%': { transform: 'scale(1) translateY(0px)' }
        },
        spaceExploration: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
          '20%': { transform: 'translateX(30px) translateY(-30px) rotate(72deg) scale(1.1)' },
          '40%': { transform: 'translateX(0px) translateY(-60px) rotate(144deg) scale(1.2)' },
          '60%': { transform: 'translateX(-30px) translateY(-30px) rotate(216deg) scale(1.1)' },
          '80%': { transform: 'translateX(0px) translateY(0px) rotate(288deg) scale(1)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg) scale(1)' }
        },
        aiAutonomy: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(1.05) rotate(240deg)' }
        },
        quantumFinance: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(10px)' },
          '50%': { transform: 'scale(1.2) translateX(0px)' },
          '75%': { transform: 'scale(1.1) translateX(-10px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        },
        biotechHealth: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(90deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '75%': { transform: 'scale(1.1) rotate(270deg)' }
        },
        spaceTechnology: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateX(25px) translateY(-25px) rotate(90deg) scale(1.1)' },
          '50%': { transform: 'translateX(0px) translateY(-50px) rotate(180deg) scale(1.2)' },
          '75%': { transform: 'translateX(-25px) translateY(-25px) rotate(270deg) scale(1.1)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg) scale(1)' }
        },
        aiInnovation: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.15) rotate(120deg)' },
          '66%': { transform: 'scale(1.1) rotate(240deg)' }
        },
        quantumSpace: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
          '20%': { transform: 'translateX(40px) translateY(-40px) rotate(72deg) scale(1.1)' },
          '40%': { transform: 'translateX(0px) translateY(-80px) rotate(144deg) scale(1.2)' },
          '60%': { transform: 'translateX(-40px) translateY(-40px) rotate(216deg) scale(1.1)' },
          '80%': { transform: 'translateX(0px) translateY(0px) rotate(288deg) scale(1)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg) scale(1)' }
        },
        biotechResearch: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '25%': { transform: 'scale(1.1) translateY(-15px)' },
          '50%': { transform: 'scale(1.2) translateY(-30px)' },
          '75%': { transform: 'scale(1.1) translateY(-15px)' },
          '100%': { transform: 'scale(1) translateY(0px)' }
        },
        spaceMiningAutomation: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
          '10%': { transform: 'translateX(20px) translateY(-20px) rotate(36deg) scale(1.05)' },
          '20%': { transform: 'translateX(40px) translateY(-40px) rotate(72deg) scale(1.1)' },
          '30%': { transform: 'translateX(60px) translateY(-60px) rotate(108deg) scale(1.15)' },
          '40%': { transform: 'translateX(80px) translateY(-80px) rotate(144deg) scale(1.2)' },
          '50%': { transform: 'translateX(100px) translateY(-100px) rotate(180deg) scale(1.25)' },
          '60%': { transform: 'translateX(80px) translateY(-80px) rotate(216deg) scale(1.2)' },
          '70%': { transform: 'translateX(60px) translateY(-60px) rotate(252deg) scale(1.15)' },
          '80%': { transform: 'translateX(40px) translateY(-40px) rotate(288deg) scale(1.1)' },
          '90%': { transform: 'translateX(20px) translateY(-20px) rotate(324deg) scale(1.05)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg) scale(1)' }
        },
        aiConsciousnessEvolution: {
          '0%': { transform: 'scale(1) rotate(0deg) translateY(0px)' },
          '25%': { transform: 'scale(1.1) rotate(90deg) translateY(-10px)' },
          '50%': { transform: 'scale(1.2) rotate(180deg) translateY(-20px)' },
          '75%': { transform: 'scale(1.1) rotate(270deg) translateY(-10px)' },
          '100%': { transform: 'scale(1) rotate(360deg) translateY(0px)' }
        },
        quantumInternetSecurity: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(15px)' },
          '50%': { transform: 'scale(1.2) translateX(0px)' },
          '75%': { transform: 'scale(1.1) translateX(-15px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        },
        biotechDNAComputing: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '20%': { transform: 'scale(1.1) rotate(72deg)' },
          '40%': { transform: 'scale(1.2) rotate(144deg)' },
          '60%': { transform: 'scale(1.1) rotate(216deg)' },
          '80%': { transform: 'scale(1.05) rotate(288deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' }
        },
        quantumFinancialTrading: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '25%': { transform: 'scale(1.1) translateY(-20px)' },
          '50%': { transform: 'scale(1.2) translateY(-40px)' },
          '75%': { transform: 'scale(1.1) translateY(-20px)' },
          '100%': { transform: 'scale(1) translateY(0px)' }
        },
        spaceMiningPlatform: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
          '10%': { transform: 'translateX(30px) translateY(-30px) rotate(36deg) scale(1.05)' },
          '20%': { transform: 'translateX(60px) translateY(-60px) rotate(72deg) scale(1.1)' },
          '30%': { transform: 'translateX(90px) translateY(-90px) rotate(108deg) scale(1.15)' },
          '40%': { transform: 'translateX(120px) translateY(-120px) rotate(144deg) scale(1.2)' },
          '50%': { transform: 'translateX(150px) translateY(-150px) rotate(180deg) scale(1.25)' },
          '60%': { transform: 'translateX(120px) translateY(-120px) rotate(216deg) scale(1.2)' },
          '70%': { transform: 'translateX(90px) translateY(-90px) rotate(252deg) scale(1.15)' },
          '80%': { transform: 'translateX(60px) translateY(-60px) rotate(288deg) scale(1.1)' },
          '90%': { transform: 'translateX(30px) translateY(-30px) rotate(324deg) scale(1.05)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg) scale(1)' }
        },
        metaverseDigitalReality: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(1.05) rotate(240deg)' }
        },
        autonomousDevOps: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(10px)' },
          '50%': { transform: 'scale(1.2) translateX(0px)' },
          '75%': { transform: 'scale(1.1) translateX(-10px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        },
        quantumCloudInfrastructure: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(90deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '75%': { transform: 'scale(1.1) rotate(270deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' }
        },
        aiPoweredEnterpriseSecurity: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(1.05) rotate(240deg)' }
        },
        autonomousITOperations: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '25%': { transform: 'scale(1.1) translateY(-15px)' },
          '50%': { transform: 'scale(1.2) translateY(-30px)' },
          '75%': { transform: 'scale(1.1) translateY(-15px)' },
          '100%': { transform: 'scale(1) translateY(0px)' }
        },
        zeroTrustArchitecture: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(15px)' },
          '50%': { transform: 'scale(1.2) translateX(0px)' },
          '75%': { transform: 'scale(1.1) translateX(-15px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        },
        aiEmotionMarketing: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(90deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '75%': { transform: 'scale(1.1) rotate(270deg)' }
        },
        biotechPersonalizedNutrition: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '25%': { transform: 'scale(1.1) translateY(-20px)' },
          '50%': { transform: 'scale(1.2) translateY(-40px)' },
          '75%': { transform: 'scale(1.1) translateY(-20px)' },
          '100%': { transform: 'scale(1) translateY(0px)' }
        },
        quantumLearningAccelerator: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(90deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '75%': { transform: 'scale(1.1) rotate(270deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' }
        },
        intelligentDataGovernance: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(1.05) rotate(240deg)' }
        },
        aiMeetingTranscriber: {
          '0%': { transform: 'scale(1) translateX(0px)' },
          '25%': { transform: 'scale(1.1) translateX(10px)' },
          '50%': { transform: 'scale(1.2) translateX(0px)' },
          '75%': { transform: 'scale(1.1) translateX(-10px)' },
          '100%': { transform: 'scale(1) translateX(0px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        'cyber-grid': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        'neural-dots': 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
        'quantum-waves': 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.03) 35px, rgba(59, 130, 246, 0.03) 70px)',
        'plasma-flow': 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
        'hologram-pattern': 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.1) 0deg, transparent 60deg, rgba(34, 197, 94, 0.1) 120deg, transparent 180deg, rgba(168, 85, 247, 0.1) 240deg, transparent 300deg, rgba(59, 130, 246, 0.1) 360deg)',
        'matrix-rain': 'linear-gradient(180deg, transparent 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)',
        'energy-field': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        'cyber-circuit': 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0.05) 75%, transparent 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}