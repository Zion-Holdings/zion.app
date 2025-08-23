import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2045Props {
  theme?: 'consciousness' | 'quantum' | 'space' | 'ai';
  intensity?: 'low' | 'medium' | 'high';
}

const UltraFuturisticBackground2045: React.FC<UltraFuturisticBackground2045Props> = ({
  theme = 'consciousness',
  intensity = 'high'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getThemeColors = () => {
    switch (theme) {
      case 'consciousness':
        return {
          primary: 'from-purple-500 to-pink-500',
          secondary: 'from-cyan-500 to-blue-500',
          tertiary: 'from-emerald-500 to-teal-500',
          accent: 'from-yellow-500 to-orange-500'
        };
      case 'quantum':
        return {
          primary: 'from-blue-500 to-indigo-500',
          secondary: 'from-cyan-500 to-blue-500',
          tertiary: 'from-purple-500 to-pink-500',
          accent: 'from-emerald-500 to-teal-500'
        };
      case 'space':
        return {
          primary: 'from-indigo-500 to-purple-500',
          secondary: 'from-blue-500 to-cyan-500',
          tertiary: 'from-purple-500 to-pink-500',
          accent: 'from-yellow-500 to-orange-500'
        };
      case 'ai':
        return {
          primary: 'from-emerald-500 to-teal-500',
          secondary: 'from-cyan-500 to-blue-500',
          tertiary: 'from-purple-500 to-pink-500',
          accent: 'from-yellow-500 to-orange-500'
        };
      default:
        return {
          primary: 'from-purple-500 to-pink-500',
          secondary: 'from-cyan-500 to-blue-500',
          tertiary: 'from-emerald-500 to-teal-500',
          accent: 'from-yellow-500 to-orange-500'
        };
    }
  };

  const colors = getThemeColors();
  const intensityMultiplier = intensity === 'high' ? 1 : intensity === 'medium' ? 0.7 : 0.4;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Floating Consciousness Orbs */}
      <motion.div
        className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r ${colors.primary} rounded-full blur-3xl opacity-30`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: `blur(${40 * intensityMultiplier}px)`
        }}
      />

      <motion.div
        className={`absolute top-40 right-20 w-80 h-80 bg-gradient-to-r ${colors.secondary} rounded-full blur-3xl opacity-30`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: `blur(${35 * intensityMultiplier}px)`
        }}
      />

      <motion.div
        className={`absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r ${colors.tertiary} rounded-full blur-3xl opacity-30`}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [180, 360, 180],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: `blur(${45 * intensityMultiplier}px)`
        }}
      />

      {/* Quantum Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r ${colors.accent} rounded-full opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            opacity="0"
            animate={{
              opacity: [0, 0.6, 0],
              strokeDasharray: [0, 100, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Consciousness Waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute inset-0 border border-gradient-to-r ${colors.primary} rounded-full opacity-20`}
            style={{
              borderWidth: `${2 + i * 2}px`,
              margin: `${-50 - i * 100}px`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Data Streams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-20 bg-gradient-to-b ${colors.secondary} opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            height: [20, 100, 20],
            opacity: [0.2, 0.8, 0.2],
            y: [0, -200, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Quantum Entanglement Effect */}
      <motion.div
        className={`absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r ${colors.primary} rounded-full blur-2xl opacity-20`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: `blur(${30 * intensityMultiplier}px)`,
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />

      {/* Scroll-based Parallax Elements */}
      <motion.div
        className={`absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r ${colors.tertiary} rounded-full blur-2xl opacity-30`}
        style={{
          y: scrollY * 0.3,
          filter: `blur(${25 * intensityMultiplier}px)`
        }}
      />

      <motion.div
        className={`absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r ${colors.accent} rounded-full blur-2xl opacity-25`}
        style={{
          y: -scrollY * 0.2,
          filter: `blur(${30 * intensityMultiplier}px)`
        }}
      />

      {/* Consciousness Nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 bg-gradient-to-r ${colors.primary} rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              `0 0 10px ${theme === 'consciousness' ? 'rgba(147, 51, 234, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`,
              `0 0 30px ${theme === 'consciousness' ? 'rgba(147, 51, 234, 0.8)' : 'rgba(59, 130, 246, 0.8)'}`,
              `0 0 10px ${theme === 'consciousness' ? 'rgba(147, 51, 234, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`,
            ],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Dynamic Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'noise 20s infinite linear'
        }}
      />

      {/* CSS Animation for Noise */}
      <style jsx>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 10%); }
          80% { transform: translate(3%, 15%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
    </div>
  );
};

export default UltraFuturisticBackground2045;