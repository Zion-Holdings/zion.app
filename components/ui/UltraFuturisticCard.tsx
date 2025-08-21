import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'quantum-holographic';
  interactive?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum-holographic',
  interactive = true,
  glowIntensity = 'medium',
  animationSpeed = 'normal'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Animation speed multipliers
  const speedMultipliers = {
    slow: 0.5,
    normal: 1,
    fast: 2
  };

  const speed = speedMultipliers[animationSpeed];

  // Glow intensity values
  const glowValues = {
    low: { blur: 10, opacity: 0.3, spread: 5 },
    medium: { blur: 20, opacity: 0.5, spread: 10 },
    high: { blur: 30, opacity: 0.7, spread: 15 }
  };

  const glow = glowValues[glowIntensity];

  // Variant-specific configurations
  const variantConfigs = {
    default: {
      primaryColor: '#3b82f6',
      secondaryColor: '#8b5cf6',
      accentColor: '#06b6d4',
      borderStyle: 'solid',
      background: 'rgba(17, 24, 39, 0.8)',
      backdrop: 'blur(20px)'
    },
    quantum: {
      primaryColor: '#00ffff',
      secondaryColor: '#0080ff',
      accentColor: '#8000ff',
      borderStyle: 'solid',
      background: 'rgba(0, 0, 0, 0.9)',
      backdrop: 'blur(25px)'
    },
    cyberpunk: {
      primaryColor: '#ff0080',
      secondaryColor: '#ff8000',
      accentColor: '#ffff00',
      borderStyle: 'solid',
      background: 'rgba(20, 0, 10, 0.9)',
      backdrop: 'blur(20px)'
    },
    holographic: {
      primaryColor: '#00ffff',
      secondaryColor: '#ff00ff',
      accentColor: '#ffff00',
      borderStyle: 'dashed',
      background: 'rgba(0, 20, 40, 0.8)',
      backdrop: 'blur(30px)'
    },
    neural: {
      primaryColor: '#00ff80',
      secondaryColor: '#8000ff',
      accentColor: '#ff0080',
      borderStyle: 'solid',
      background: 'rgba(0, 40, 20, 0.9)',
      backdrop: 'blur(25px)'
    },
    'quantum-holographic': {
      primaryColor: '#00ffff',
      secondaryColor: '#ff00ff',
      accentColor: '#ffff00',
      borderStyle: 'double',
      background: 'rgba(0, 0, 0, 0.95)',
      backdrop: 'blur(35px)'
    }
  };

  const config = variantConfigs[variant];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    // Particle system for card background
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = variant === 'quantum-holographic' ? 50 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5 * speed,
          vy: (Math.random() - 0.5) * 0.5 * speed,
          size: Math.random() * 2 + 0.5,
          color: [config.primaryColor, config.secondaryColor, config.accentColor][
            Math.floor(Math.random() * 3)
          ],
          life: Math.random() * 100 + 50,
          maxLife: 150
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Add new particles if needed
      if (particles.length < (variant === 'quantum-holographic' ? 50 : 30)) {
        createParticles();
      }

      // Draw variant-specific effects
      if (variant === 'quantum-holographic') {
        drawQuantumHolographicEffects(ctx);
      } else if (variant === 'neural') {
        drawNeuralConnections(ctx, particles);
      } else if (variant === 'cyberpunk') {
        drawCyberpunkEffects(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawQuantumHolographicEffects = (ctx: CanvasRenderingContext2D) => {
      // Quantum field lines
      ctx.strokeStyle = `${config.primaryColor}40`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 5; i++) {
        const x = (i / 4) * canvas.width;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 50, canvas.height);
        ctx.stroke();
      }

      // Holographic grid
      ctx.strokeStyle = `${config.secondaryColor}30`;
      ctx.lineWidth = 0.5;
      
      const gridSize = 25;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D, particles: any[]) => {
      ctx.strokeStyle = `${config.primaryColor}30`;
      ctx.lineWidth = 1;
      
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 80) {
            ctx.globalAlpha = (80 - distance) / 80 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D) => {
      // Energy waves
      ctx.strokeStyle = `${config.primaryColor}40`;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        const y = canvas.height / 2 + Math.sin(Date.now() * 0.001 * speed + i) * 20;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, speed, config]);

  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
      z: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    focus: {
      scale: 1.01,
      rotateX: 1,
      rotateY: 1,
      z: 10,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const borderVariants = {
    initial: {
      opacity: 0.5,
      scale: 1
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    focus: {
      opacity: 0.8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const glowVariants = {
    initial: {
      opacity: 0.3,
      scale: 1
    },
    hover: {
      opacity: 0.8,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    focus: {
      opacity: 0.6,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      variants={cardVariants}
      initial="initial"
      animate={isHovered ? "hover" : isFocused ? "focus" : "initial"}
      onHoverStart={() => interactive && setIsHovered(true)}
      onHoverEnd={() => interactive && setIsHovered(false)}
      onFocus={() => interactive && setIsFocused(true)}
      onBlur={() => interactive && setIsFocused(false)}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full rounded-xl pointer-events-none opacity-60"
        style={{ zIndex: 0 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={glowVariants}
        style={{
          background: `radial-gradient(circle at center, ${config.primaryColor}20, transparent 70%)`,
          filter: `blur(${glow.blur}px)`,
          zIndex: 1
        }}
      />

      {/* Border Effects */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={borderVariants}
        style={{
          border: `${config.borderStyle === 'double' ? '3px double' : '2px ' + config.borderStyle}`,
          borderColor: config.primaryColor,
          zIndex: 2
        }}
      />

      {/* Corner Accents */}
      <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ zIndex: 3 }}>
        {/* Top-left corner */}
        <div 
          className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 rounded-tl-xl"
          style={{ borderColor: config.accentColor }}
        />
        
        {/* Top-right corner */}
        <div 
          className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 rounded-tr-xl"
          style={{ borderColor: config.secondaryColor }}
        />
        
        {/* Bottom-left corner */}
        <div 
          className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 rounded-bl-xl"
          style={{ borderColor: config.secondaryColor }}
        />
        
        {/* Bottom-right corner */}
        <div 
          className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 rounded-br-xl"
          style={{ borderColor: config.accentColor }}
        />
      </div>

      {/* Animated Border Lines */}
      <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden" style={{ zIndex: 4 }}>
        <motion.div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`
          }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3 * speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${config.secondaryColor}, transparent)`
          }}
          animate={{
            x: ['100%', '-100%']
          }}
          transition={{
            duration: 4 * speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-0 left-0 w-px h-full"
          style={{
            background: `linear-gradient(180deg, transparent, ${config.accentColor}, transparent)`
          }}
          animate={{
            y: ['-100%', '100%']
          }}
          transition={{
            duration: 5 * speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-px h-full"
          style={{
            background: `linear-gradient(180deg, transparent, ${config.secondaryColor}, transparent)`
          }}
          animate={{
            y: ['100%', '-100%']
          }}
          transition={{
            duration: 3.5 * speed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative p-6 rounded-xl"
        style={{
          background: config.background,
          backdropFilter: config.backdrop,
          zIndex: 5
        }}
      >
        {/* Floating Particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full pointer-events-none"
                  style={{
                    background: [config.primaryColor, config.secondaryColor, config.accentColor][i % 3],
                    left: `${20 + (i * 15)}%`,
                    top: `${10 + (i * 20)}%`
                  }}
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0], 
                    y: [0, -20, -40] 
                  }}
                  transition={{
                    duration: 2 * speed,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {children}
      </div>
    </motion.div>
  );
};

export default UltraFuturisticCard;