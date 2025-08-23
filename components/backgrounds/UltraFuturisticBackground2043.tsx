import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2043Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'consciousness';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2043({ 
  intensity = 'medium', 
  theme = 'consciousness',
  children
}: UltraFuturisticBackground2043Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with consciousness elements
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'consciousness' | 'neural' | 'quantum-field';
    consciousness: number;
    neuralConnections: Array<{ x: number; y: number; strength: number }>;
  }>>([]);

  // Enhanced theme-based color schemes
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'consciousness':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ffff40', '#ff40ff', '#8040ff', '#40ff80', '#ff8040'],
          neural: ['#ff1493', '#00bfff', '#ffd700', '#ff6b6b', '#4ecdc4'],
          quantum: ['#00ffff', '#ff00ff', '#ffff00', '#8000ff', '#00ff80']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
          secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4'],
          accent: ['#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ffff40', '#ff40ff', '#8040ff', '#40ff80', '#ff8040']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced consciousness elements
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for consciousness theme
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 60 : 120);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.6 : intensity === 'medium' ? 1 : 1.8));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'consciousness', 'neural', 'quantum-field'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      // Create neural connections for consciousness particles
      const neuralConnections = particleType === 'consciousness' || particleType === 'neural' ? 
        Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          strength: Math.random() * 0.8 + 0.2
        })) : [];

      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 150,
        maxLife: 150,
        type: particleType as any,
        consciousness: particleType === 'consciousness' ? Math.random() * 1 : 0,
        neuralConnections
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with consciousness effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with gradient background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    
    if (theme === 'consciousness') {
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    } else {
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

      // Regenerate particles
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.consciousness = particle.type === 'consciousness' ? Math.random() * 1 : 0;
      }

      // Draw particle based on type
      ctx.save();
      ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);

      switch (particle.type) {
              case 'consciousness': {
        // Draw consciousness particle with neural connections
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (1 + particle.consciousness), 0, Math.PI * 2);
        ctx.fill();
        
        // Draw neural connections
        particle.neuralConnections.forEach(connection => {
          const targetX = particle.x + connection.x;
          const targetY = particle.y + connection.y;
          
          if (targetX > 0 && targetX < canvas.width && targetY > 0 && targetY < canvas.height) {
            ctx.strokeStyle = particle.color + Math.floor(connection.strength * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = connection.strength * 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();
          }
        });
        break;
      }

        case 'neural': {
          // Draw neural network node
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connections to nearby particles
          particles.current.forEach(otherParticle => {
            if (otherParticle !== particle && otherParticle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.strokeStyle = particle.color + '40';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
          break;
        }

        case 'quantum-field': {
          // Draw quantum field effect
          const gradient2 = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient2.addColorStop(0, particle.color + '80');
          gradient2.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        default:
          // Standard particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }

      ctx.restore();
    });

    // Draw quantum grid pattern for consciousness theme
    if (theme === 'consciousness') {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
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
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [theme]);

  // Initialize and cleanup
  useEffect(() => {
    initParticles();
    animate();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      
      {/* Enhanced floating orbs for consciousness theme */}
      {theme === 'consciousness' && (
        <>
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      {/* Quantum energy waves */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
            }}
            animate={{
              left: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {children}
    </div>
  );
}