import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2040Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'futuristic-2040';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2040({ 
  intensity = 'medium', 
  theme = 'futuristic-2040',
  children
}: UltraFuturisticBackground2040Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with more variety and futuristic effects
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
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural' | 'plasma' | 'cosmic' | 'digital' | 'quantum-field';
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    trail: Array<{x: number, y: number, opacity: number}>;
    maxTrailLength: number;
    energy: number;
    frequency: number;
    amplitude: number;
  }>>([]);

  // Enhanced theme-based color schemes for 2040
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'futuristic-2040':
        return {
          primary: ['#00ffff', '#ff00ff', '#ffff00', '#ff0080', '#8000ff', '#00ff80'],
          secondary: ['#ff8000', '#0080ff', '#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
          accent: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          plasma: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          cosmic: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1'],
          digital: ['#00ff00', '#ff0000', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        };
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1'],
          neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff0055', '#00ffff'],
          neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced variety for 2040
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 2));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes: Array<'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural' | 'plasma' | 'cosmic' | 'digital' | 'quantum-field'> = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'plasma', 'cosmic', 'digital', 'quantum-field'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100 + 50,
        maxLife: 150,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        trail: [],
        maxTrailLength: Math.floor(Math.random() * 10) + 5,
        energy: Math.random() * 100 + 50,
        frequency: Math.random() * 0.1 + 0.05,
        amplitude: Math.random() * 20 + 10
      });
    }
  }, [getThemeColors, intensity]);

  // Enhanced animation loop with futuristic effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Add trail effect
      particle.trail.push({x: particle.x, y: particle.y, opacity: particle.opacity});
      if (particle.trail.length > particle.maxTrailLength) {
        particle.trail.shift();
      }

      // Update particle properties
      particle.life--;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.energy += particle.frequency;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

      // Remove dead particles
      if (particle.life <= 0) {
        particles.current.splice(index, 1);
        return;
      }

      // Draw particle trail
      particle.trail.forEach((trailPoint, trailIndex) => {
        const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * 0.5;
        ctx.save();
        ctx.globalAlpha = trailOpacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(trailPoint.x, trailPoint.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw main particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      // Enhanced particle effects based on type
      switch (particle.type) {
        case 'neon':
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'quantum':
          // Quantum field effect
          ctx.globalAlpha = particle.opacity * 0.7;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        case 'plasma':
          // Plasma energy effect
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * Math.sin(particle.pulse) + particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'cosmic':
          // Cosmic wave effect
          ctx.globalAlpha = particle.opacity * 0.6;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.quadraticCurveTo(0, -particle.size, particle.size, 0);
          ctx.stroke();
          break;
          
        case 'digital':
          // Digital data effect
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          break;
          
        case 'quantum-field':
          // Quantum field lines
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.stroke();
          break;
          
        default:
          // Standard particle
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }
      
      ctx.restore();
    });

    // Add new particles if needed
    if (particles.current.length < 50) {
      initParticles();
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [initParticles]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    initParticles();
  }, [initParticles]);

  // Initialize and cleanup
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleResize]);

  // Start animation
  useEffect(() => {
    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)'
        }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 border border-cyan-400 opacity-30"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 border border-pink-400 opacity-30"
          animate={{
            rotate: -360,
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-3 h-3 border border-blue-400 opacity-30"
          animate={{
            rotate: 360,
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}