import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UltraAdvancedNeonEffects2047: React.FC = () => {
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

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Neon Glow Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-3xl"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Neon Energy Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="neonGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Diagonal Energy Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 12.5}
            y1="0"
            x2={i * 12.5 + 50}
            y2="100"
            stroke="url(#neonGradient1)"
            strokeWidth="1"
            strokeDasharray="10,20"
            animate={{
              strokeDashoffset: [0, 30],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Reverse Diagonal Energy Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`reverse-${i}`}
            x1={100 - (i * 12.5)}
            y1="0"
            x2={100 - (i * 12.5 + 50)}
            y2="100"
            stroke="url(#neonGradient2)"
            strokeWidth="1"
            strokeDasharray="10,20"
            animate={{
              strokeDashoffset: [30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Neon Pulse Rings */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-cyan-500/30 rounded-full"
            style={{
              left: `${-25 + i * 25}%`,
              top: `${-25 + i * 25}%`,
              width: `${150 - i * 25}%`,
              height: `${150 - i * 25}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              borderWidth: ['1px', '2px', '1px'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Quantum Field Distortion */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
            style={{
              left: `${(i * 8.33)}%`,
              top: "-1rem",
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Neon Trail */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />

      {/* Scroll-based Neon Effects */}
      <motion.div
        className="absolute left-10 top-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        style={{
          y: scrollY * 0.2,
          rotate: scrollY * 0.1,
        }}
      />
      <motion.div
        className="absolute right-20 bottom-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        style={{
          y: -scrollY * 0.25,
          rotate: -scrollY * 0.15,
        }}
      />

      {/* Ambient Neon Atmosphere */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
            style={{
              left: `${20 + (i * 12)}%`,
              transform: `rotate(${10 + i * 8}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Consciousness Energy Fields */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full border border-purple-500/20 rounded-full"
            style={{
              left: `${-20 + i * 20}%`,
              top: `${-20 + i * 20}%`,
              width: `${140 - i * 20}%`,
              height: `${140 - i * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.2, 0.05],
              borderWidth: ['1px', '3px', '1px'],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraAdvancedNeonEffects2047;