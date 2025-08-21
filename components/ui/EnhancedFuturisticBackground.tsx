import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'holographic' | 'quantum' | 'neural' | 'holographic-advanced';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  variant = 'holographic-advanced',
  intensity = 'high',
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const controls = useAnimation();
  const scrollY = useMotionValue(0);
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Advanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
      holographic: ['#ff00ff', '#00ff00', '#ffff00', '#00ffff'],
      neural: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[variant === 'quantum' ? 'quantum' : variant === 'neural' ? 'neural' : 'holographic'][Math.floor(Math.random() * 4)],
          type: variant === 'quantum' ? 'quantum' : variant === 'neural' ? 'neural' : 'holographic'
        });
      }
    };

    initParticles();

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height);
      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 20, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 40, 80, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 20, 0.8)');
      } else if (variant === 'neural') {
        gradient.addColorStop(0, 'rgba(20, 0, 20, 0.8)');
        gradient.addColorStop(0.5, 'rgba(40, 0, 40, 0.6)');
        gradient.addColorStop(1, 'rgba(20, 0, 20, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(20, 0, 40, 0.8)');
        gradient.addColorStop(0.5, 'rgba(40, 0, 80, 0.6)');
        gradient.addColorStop(1, 'rgba(20, 0, 40, 0.8)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Add glow effect
        if (variant === 'holographic-advanced') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          const glowGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          glowGradient.addColorStop(0, particle.color + '40');
          glowGradient.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
      });

      // Add holographic grid for advanced variant
      if (variant === 'holographic-advanced') {
        ctx.strokeStyle = '#00ffff20';
        ctx.lineWidth = 0.5;
        
        // Vertical lines
        for (let x = 0; x < dimensions.width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, dimensions.height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < dimensions.height; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(dimensions.width, y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, variant, intensity]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: -1 }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-pink-400/20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Holographic overlay */}
      {variant === 'holographic-advanced' && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              y: [0, dimensions.height]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              x: [0, -dimensions.width]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      )}

      {/* Quantum field effects */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Neural network effects */}
      {variant === 'neural' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`
              }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Content with parallax effect */}
      <motion.div
        className="relative z-10"
        style={{ y }}
      >
        {children}
      </motion.div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;