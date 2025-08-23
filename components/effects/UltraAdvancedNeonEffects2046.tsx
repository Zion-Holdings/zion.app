import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltraAdvancedNeonEffects2046: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeEffects, setActiveEffects] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-activate effects
    const effectInterval = setInterval(() => {
      const effects = ['quantum', 'neon', 'hologram', 'plasma', 'cyber'];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      setActiveEffects(prev => [...prev, randomEffect]);
      
      // Remove effect after 3 seconds
      setTimeout(() => {
        setActiveEffects(prev => prev.filter(e => e !== randomEffect));
      }, 3000);
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(effectInterval);
    };
  }, []);

  // Neon text effect
  const NeonText: React.FC<{ text: string; color: string; delay?: number }> = ({ 
    text, 
    color, 
    delay = 0 
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <motion.span
        className="text-6xl font-bold tracking-wider"
        style={{
          color: color,
          textShadow: `
            0 0 5px ${color},
            0 0 10px ${color},
            0 0 15px ${color},
            0 0 20px ${color},
            0 0 25px ${color},
            0 0 30px ${color}
          `,
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
        }}
        animate={{
          textShadow: [
            `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px ${color}, 0 0 25px ${color}, 0 0 30px ${color}`,
            `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 50px ${color}, 0 0 60px ${color}`,
            `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px ${color}, 0 0 25px ${color}, 0 0 30px ${color}`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );

  // Quantum particle effect
  const QuantumParticles: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );

  // Neon grid effect
  const NeonGrid: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgba(0, 255, 255, 0.3)"
              strokeWidth="0.1"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  );

  // Hologram effect
  const HologramEffect: React.FC = () => (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{
        background: [
          'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.1) 50%, transparent 70%)',
          'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          'linear-gradient(45deg, transparent 30%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
          'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.1) 50%, transparent 70%)'
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // Plasma effect
  const PlasmaEffect: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );

  // Cyber effect
  const CyberEffect: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
          }}
          animate={{
            height: [16, 32, 16],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1
          }}
        />
      ))}
    </div>
  );

  // Floating neon orbs
  const FloatingNeonOrbs: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[
        { color: 'rgba(0, 255, 255, 0.8)', size: 'w-4 h-4', delay: 0 },
        { color: 'rgba(147, 51, 234, 0.8)', size: 'w-3 h-3', delay: 1 },
        { color: 'rgba(236, 72, 153, 0.8)', size: 'w-5 h-5', delay: 2 },
        { color: 'rgba(59, 130, 246, 0.8)', size: 'w-2 h-2', delay: 0.5 },
        { color: 'rgba(16, 185, 129, 0.8)', size: 'w-4 h-4', delay: 1.5 }
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} rounded-full`}
          style={{
            background: orb.color,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            boxShadow: `0 0 20px ${orb.color}`
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
        />
      ))}
    </div>
  );

  // Energy waves
  const EnergyWaves: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at ${20 + i * 30}% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at ${80 - i * 30}% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at ${50}% ${20 + i * 30}%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at ${20 + i * 30}% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-10"
    >
      {/* Base neon effects */}
      <FloatingNeonOrbs />
      <EnergyWaves />
      <NeonGrid />
      
      {/* Dynamic effects based on state */}
      <AnimatePresence>
        {activeEffects.includes('quantum') && <QuantumParticles />}
        {activeEffects.includes('hologram') && <HologramEffect />}
        {activeEffects.includes('plasma') && <PlasmaEffect />}
        {activeEffects.includes('cyber') && <CyberEffect />}
      </AnimatePresence>

      {/* Interactive mouse trail */}
      <motion.div
        className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)'
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neon text showcase */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8">
          <NeonText text="ZION" color="#00ffff" delay={0} />
          <NeonText text="TECH" color="#9333ea" delay={0.5} />
          <NeonText text="GROUP" color="#ec4899" delay={1} />
        </div>
      </div>

      {/* Quantum field lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
          </linearGradient>
        </defs>
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#quantumGradient)"
            strokeWidth="0.5"
            opacity="0.6"
            animate={{
              opacity: [0.6, 1, 0.6],
              strokeWidth: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default UltraAdvancedNeonEffects2046;