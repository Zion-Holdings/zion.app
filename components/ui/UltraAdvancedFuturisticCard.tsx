import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraAdvancedFuturisticCardProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix' | 'quantum-holographic' | 'neural-quantum' | 'quantum-advanced';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  glowIntensity?: number;
  animationSpeed?: number;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  children,
  variant = 'quantum',
  className = '',
  onClick,
  interactive = true,
  glowIntensity = 0.8,
  animationSpeed = 1
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Enhanced variant configurations
  const variantConfigs = {
    quantum: {
      colors: ['#00ffff', '#8b5cf6', '#ec4899'],
      glowColor: '#00ffff',
      borderGradient: 'linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899)',
      background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)',
      particleColor: '#00ffff'
    },
    holographic: {
      colors: ['#8b5cf6', '#ec4899', '#f59e0b'],
      glowColor: '#8b5cf6',
      borderGradient: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b)',
      background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 100%)',
      particleColor: '#8b5cf6'
    },
    neural: {
      colors: ['#10b981', '#3b82f6', '#8b5cf6'],
      glowColor: '#10b981',
      borderGradient: 'linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6)',
      background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
      particleColor: '#10b981'
    },
    cyberpunk: {
      colors: ['#ec4899', '#f59e0b', '#ef4444'],
      glowColor: '#ec4899',
      borderGradient: 'linear-gradient(45deg, #ec4899, #f59e0b, #ef4444)',
      background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 100%)',
      particleColor: '#ec4899'
    },
    space: {
      colors: ['#3b82f6', '#1e40af', '#1e3a8a'],
      glowColor: '#3b82f6',
      borderGradient: 'linear-gradient(45deg, #3b82f6, #1e40af, #1e3a8a)',
      background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 50%, transparent 100%)',
      particleColor: '#3b82f6'
    },
    matrix: {
      colors: ['#10b981', '#059669', '#047857'],
      glowColor: '#10b981',
      borderGradient: 'linear-gradient(45deg, #10b981, #059669, #047857)',
      background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 50%, transparent 100%)',
      particleColor: '#10b981'
    },
    'quantum-holographic': {
      colors: ['#00ffff', '#8b5cf6', '#ec4899'],
      glowColor: '#00ffff',
      borderGradient: 'linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899)',
      background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)',
      particleColor: '#00ffff'
    },
    'neural-quantum': {
      colors: ['#10b981', '#00ffff', '#8b5cf6'],
      glowColor: '#10b981',
      borderGradient: 'linear-gradient(45deg, #10b981, #00ffff, #8b5cf6)',
      background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%)',
      particleColor: '#10b981'
    },
    'quantum-advanced': {
      colors: ['#00ffff', '#8b5cf6', '#ec4899', '#f59e0b'],
      glowColor: '#00ffff',
      borderGradient: 'linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899, #f59e0b)',
      background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)',
      particleColor: '#00ffff'
    }
  };

  const config = variantConfigs[variant] || variantConfigs.quantum;

  // Enhanced particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!canvas) return;

    canvas.width = 300;
    canvas.height = 200;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural';
    }> = [];

    const createParticle = (): {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural';
    } => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      life: 0,
      maxLife: Math.random() * 100 + 50,
      type: Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'neural'
    });

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Remove dead particles and create new ones
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
        }

        // Draw particle based on type
        const alpha = (particle.maxLife - particle.life) / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (particle.type === 'quantum') {
          // Quantum particle with wave function
          ctx.strokeStyle = config.particleColor;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (particle.life * 0.1) + (i * Math.PI / 3);
            const x = particle.x + Math.cos(angle) * particle.size;
            const y = particle.y + Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        } else if (particle.type === 'holographic') {
          // Holographic particle with rainbow effect
          const hue = (particle.life * 3) % 360;
          ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Neural particle
          ctx.fillStyle = config.particleColor;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Add neural connections for neural variants
      if (variant.includes('neural')) {
        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach(particle2 => {
            const distance = Math.sqrt(
              Math.pow(particle1.x - particle2.x, 2) + 
              Math.pow(particle1.y - particle2.y, 2)
            );
            
            if (distance < 60) {
              const alpha = (60 - distance) / 60 * 0.3;
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, config.particleColor]);

  // Enhanced mouse tracking for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Calculate 3D rotation based on mouse position
  const rotateX = (mousePosition.y - 100) / 100 * 15;
  const rotateY = (mousePosition.x - 150) / 150 * 15;

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        background: config.background,
        borderImage: config.borderGradient,
        borderImageSlice: 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        z: isHovered ? 50 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }}
    >
      {/* Enhanced border glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${config.colors.join(', ')})`,
          opacity: isHovered ? 0.3 : 0,
          filter: `blur(20px)`,
        }}
      />

      {/* Quantum field overlay */}
      <div className="absolute inset-0 opacity-20">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ filter: `blur(0.5px)` }}
        />
      </div>

      {/* Enhanced content wrapper */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Interactive glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${config.glowColor}20, transparent 100px)`,
              filter: `blur(10px)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Quantum entanglement lines */}
      {variant.includes('quantum') && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 opacity-20"
              style={{
                left: `${20 + i * 30}%`,
                top: '0%',
                background: `linear-gradient(to bottom, ${config.glowColor}, transparent)`,
              }}
              animate={{
                height: ['20px', '80px', '20px'],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic scan lines */}
      {variant.includes('holographic') && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.2) 2px, rgba(139, 92, 246, 0.2) 4px)',
            }}
            animate={{
              y: [0, 4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      {/* Neural network nodes */}
      {variant.includes('neural') && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 60}%`,
                background: config.glowColor,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Focus indicator */}
      {isFocused && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: `0 0 0 2px ${config.glowColor}40`,
          }}
        />
      )}
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;