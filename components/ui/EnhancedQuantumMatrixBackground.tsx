import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedQuantumMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-blue' | 'quantum-purple' | 'quantum-fusion' | 'quantum-rainbow';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableMatrixRain?: boolean;
  enableParticleSwarm?: boolean;
  enableQuantumEntanglement?: boolean;
}

export default function EnhancedQuantumMatrixBackground({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableMatrixRain = true,
  enableParticleSwarm = true,
  enableQuantumEntanglement = true
}: EnhancedQuantumMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Get color scheme
  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-blue':
        return {
          primary: '#00d4ff',
          secondary: '#0099cc',
          accent: '#0066ff',
          glow: '#00ffff'
        };
      case 'quantum-purple':
        return {
          primary: '#8b5cf6',
          secondary: '#7c3aed',
          accent: '#6d28d9',
          glow: '#a855f7'
        };
      case 'quantum-rainbow':
        return {
          primary: '#ff0080',
          secondary: '#8000ff',
          accent: '#0080ff',
          glow: '#00ff80'
        };
      default: // quantum-fusion
        return {
          primary: '#00d4ff',
          secondary: '#8b5cf6',
          accent: '#ff0080',
          glow: '#00ffff'
        };
    }
  };

  // Get intensity values
  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.3, blur: 2, scale: 0.8 };
      case 'medium':
        return { opacity: 0.5, blur: 1.5, scale: 1.0 };
      case 'high':
        return { opacity: 0.7, blur: 1.0, scale: 1.2 };
      case 'extreme':
        return { opacity: 0.9, blur: 0.5, scale: 1.5 };
      default:
        return { opacity: 0.5, blur: 1.5, scale: 1.0 };
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    setIsVisible(true);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const colors = getColorScheme();
    const intensityValues = getIntensityValues();

    // Matrix rain effect
    if (enableMatrixRain) {
      const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const matrixDrops: Array<{ x: number; y: number; speed: number; char: string; opacity: number }> = [];

      for (let i = 0; i < 100; i++) {
        matrixDrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 1 + Math.random() * 2,
          char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
          opacity: Math.random() * 0.8 + 0.2
        });
      }

      const drawMatrixRain = () => {
        ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = '16px monospace';
        ctx.fillStyle = colors.primary;

        matrixDrops.forEach((drop, index) => {
          ctx.globalAlpha = drop.opacity;
          ctx.fillText(drop.char, drop.x, drop.y);
          
          drop.y += drop.speed;
          if (drop.y > canvas.height) {
            drop.y = -20;
            drop.x = Math.random() * canvas.width;
            drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          }
        });

        ctx.globalAlpha = 1;
      };

      const matrixInterval = setInterval(drawMatrixRain, 100 / animationSpeed);
      return () => clearInterval(matrixInterval);
    }

    // Particle swarm effect
    if (enableParticleSwarm) {
      const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; life: number }> = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50
        });
      }

      const drawParticleSwarm = () => {
        ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          // Update particle position
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;

          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

          // Reset particle if it dies
          if (particle.life <= 0) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.life = Math.random() * 100 + 50;
          }

          // Draw particle
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, colors.glow);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw connections between nearby particles
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              
              if (distance < 100) {
                ctx.strokeStyle = `rgba(${colors.primary}, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        });
      };

      const particleInterval = setInterval(drawParticleSwarm, 50 / animationSpeed);
      return () => clearInterval(particleInterval);
    }

    // Quantum entanglement effect
    if (enableQuantumEntanglement) {
      const quantumParticles: Array<{ x: number; y: number; phase: number; entangled: number }> = [];

      for (let i = 0; i < 20; i++) {
        quantumParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          phase: Math.random() * Math.PI * 2,
          entangled: Math.floor(Math.random() * 20)
        });
      }

      const drawQuantumEntanglement = () => {
        quantumParticles.forEach((particle, index) => {
          particle.phase += 0.02 * animationSpeed;
          
          // Draw quantum particle
          const x = particle.x + Math.sin(particle.phase) * 30;
          const y = particle.y + Math.cos(particle.phase) * 30;
          
          ctx.fillStyle = colors.accent;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Draw entanglement lines
          if (particle.entangled !== index) {
            const entangledParticle = quantumParticles[particle.entangled];
            const entangledX = entangledParticle.x + Math.sin(entangledParticle.phase) * 30;
            const entangledY = entangledParticle.y + Math.cos(entangledParticle.phase) * 30;
            
            ctx.strokeStyle = `rgba(${colors.secondary}, 0.3)`;
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(entangledX, entangledY);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      };

      const quantumInterval = setInterval(drawQuantumEntanglement, 100 / animationSpeed);
      return () => clearInterval(quantumInterval);
    }
  }, [dimensions, isVisible, intensity, colorScheme, particleCount, animationSpeed, enableMatrixRain, enableParticleSwarm, enableQuantumEntanglement]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          filter: `blur(${getIntensityValues().blur}px)`,
          opacity: getIntensityValues().opacity,
          transform: `scale(${getIntensityValues().scale})`
        }}
      />

      {/* Holographic Overlay */}
      {enableHolographic && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-500/5 to-cyan-500/5" />
          
          {/* Scanning lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                style={{ top: `${(i * 5)}%` }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quantum Effects Overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          {/* Quantum interference patterns */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-96 h-96 rounded-full border border-cyan-400/20"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Quantum particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
}