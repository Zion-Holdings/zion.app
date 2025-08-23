import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2036Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2036({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children
}: UltraFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Optimized particle system
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
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic';
  }>>([]);

  // Enhanced theme-based color schemes with more vibrant colors
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#ff6b35'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff1493'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#00ff7f'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#ff6b35']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffa726'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff7043'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#26c6da'],
          neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffa726']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#ff6b35'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff1493'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#00ff7f'],
          neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#ff6b35']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#ff6b35']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
          neon: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced performance optimization and dynamic effects
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count with better performance
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 60 : 120);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.6 : intensity === 'medium' ? 1 : 1.8));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic'];
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)] as 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic';
      
      // Enhanced particle properties based on type
      let size, speed, opacity;
      switch (type) {
        case 'quantum':
          size = Math.random() * 3 + 1.5;
          speed = 0.8;
          opacity = Math.random() * 0.7 + 0.4;
          break;
        case 'neon':
          size = Math.random() * 2.5 + 1;
          speed = 1.2;
          opacity = Math.random() * 0.8 + 0.5;
          break;
        case 'holographic':
          size = Math.random() * 2 + 0.8;
          speed = 0.6;
          opacity = Math.random() * 0.6 + 0.3;
          break;
        default:
          size = Math.random() * 2 + 1;
          speed = 0.5;
          opacity = Math.random() * 0.5 + 0.3;
      }
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size,
        opacity,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type
      });
    }
  }, [intensity, getThemeColors]);

  // Optimized animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas efficiently
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
      
      // Update life
      particle.life -= 0.5;
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }
      
      // Draw particle based on type
      ctx.save();
      ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
      
      const colors = getThemeColors();
      
      switch (particle.type) {
        case 'holographic':
          // Holographic effect with multiple layers
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.globalAlpha *= 0.6;
          ctx.fillStyle = colors.secondary[Math.floor(Math.random() * colors.secondary.length)];
          ctx.beginPath();
          ctx.arc(particle.x + 2, particle.y + 2, particle.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'neon':
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'quantum':
          // Quantum entanglement effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
          ctx.stroke();
          break;
          
        case 'wave':
          // Wave effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        default: // particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }
      
      ctx.restore();
    });
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Handle resize with performance optimization
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Static background for users who prefer reduced motion
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const colors = getThemeColors();
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
        );
        gradient.addColorStop(0, colors.primary[0] + '20');
        gradient.addColorStop(1, colors.secondary[0] + '10');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    // Initialize and start animation
    initParticles();
    handleResize();
    
    window.addEventListener('resize', handleResize);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, handleResize, animate, getThemeColors]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Static fallback background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
        role="img"
        aria-label="Animated background with floating particles"
      />
      
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rounded-lg"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/10 rounded-full"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/10 transform rotate-45"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30" />
      
      {/* Quantum grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Neon accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {children}
    </div>
  );
}