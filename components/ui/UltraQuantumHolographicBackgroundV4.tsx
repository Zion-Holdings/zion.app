import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicBackgroundV4Props {
  intensity?: 'mild' | 'moderate' | 'extreme';
  colorScheme?: 'quantum' | 'neural' | 'cosmic' | 'holographic' | 'cyberpunk';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetwork?: boolean;
  enableCosmicWaves?: boolean;
  enableFloatingElements?: boolean;
  enableMatrixRain?: boolean;
  enableEnergyFields?: boolean;
  enableTimeWarp?: boolean;
}

export default function UltraQuantumHolographicBackgroundV4({
  intensity = 'moderate',
  colorScheme = 'quantum',
  particleCount = 200,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralNetwork = true,
  enableCosmicWaves = true,
  enableFloatingElements = true,
  enableMatrixRain = true,
  enableEnergyFields = true,
  enableTimeWarp = true
}: UltraQuantumHolographicBackgroundV4Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Color schemes
  const colorSchemes = {
    quantum: {
      primary: '#8B5CF6',
      secondary: '#06B6D4',
      accent: '#EC4899',
      glow: '#A855F7'
    },
    neural: {
      primary: '#10B981',
      secondary: '#3B82F6',
      accent: '#F59E0B',
      glow: '#059669'
    },
    cosmic: {
      primary: '#6366F1',
      secondary: '#8B5CF6',
      accent: '#EC4899',
      glow: '#7C3AED'
    },
    holographic: {
      primary: '#06B6D4',
      secondary: '#8B5CF6',
      accent: '#F59E0B',
      glow: '#0891B2'
    },
    cyberpunk: {
      primary: '#EF4444',
      secondary: '#F59E0B',
      accent: '#10B981',
      glow: '#DC2626'
    }
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = intensity === 'mild' ? 0.5 : intensity === 'moderate' ? 1 : 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neural' | 'cosmic' | 'holographic';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)],
          type: ['quantum', 'neural', 'cosmic', 'holographic'][Math.floor(Math.random() * 4)] as any
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        initParticles();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 0.3 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particleCount, animationSpeed, colors, intensityMultiplier]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: `radial-gradient(ellipse at center, ${colors.primary}10 0%, ${colors.secondary}05 50%, transparent 100%)`
      }}
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 * intensityMultiplier }}
      />

      {/* Matrix Rain Effect */}
      {enableMatrixRain && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-30"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
              animate={{
                y: ['-100vh', '100vh'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-1">
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      )}

      {/* Energy Fields */}
      {enableEnergyFields && (
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-opacity-20"
              style={{
                borderColor: colors.glow,
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Elements */}
      {enableFloatingElements && (
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: [colors.primary, colors.secondary, colors.accent][i % 3],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}

      {/* Neural Network Grid */}
      {enableNeuralNetwork && (
        <div className="absolute inset-0">
          <svg className="w-full h-full" style={{ opacity: 0.1 * intensityMultiplier }}>
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      {/* Cosmic Waves */}
      {enableCosmicWaves && (
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                background: `conic-gradient(from ${i * 120}deg, transparent, ${colors.accent}20, transparent)`,
                borderRadius: '50%'
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      )}

      {/* Time Warp Effect */}
      {enableTimeWarp && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
      )}

      {/* Holographic Overlay */}
      {enableHolographic && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, ${colors.primary}05 0%, transparent 50%, ${colors.secondary}05 100%)`,
              backgroundSize: '200% 200%'
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${colors.accent}10 0%, transparent 50%)`
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      )}

      {/* Quantum Effects */}
      {enableQuantumEffects && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg, ${colors.primary}10, ${colors.secondary}10, ${colors.accent}10, ${colors.primary}10)`
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
      )}

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
            opacity: 0.6 * intensityMultiplier
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}20 0%, transparent 70%)`,
            opacity: 0.6 * intensityMultiplier
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)`,
            opacity: 0.4 * intensityMultiplier
          }}
        />
      </div>
    </div>
  );
}