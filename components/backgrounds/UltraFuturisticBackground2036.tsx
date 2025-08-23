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

  // Enhanced particle system with more variety and advanced effects
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
    trail: Array<{ x: number; y: number; opacity: number }>;
    maxTrailLength: number;
    energy: number;
    frequency: number;
    amplitude: number;
    phase: number;
  }>>([]);

  // Enhanced theme-based color schemes with more futuristic colors
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff', '#feca57', '#ff9ff3'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4', '#54a0ff', '#5f27cd'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          plasma: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
          neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
          holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff', '#ff0055', '#00ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff0055', '#00ffff', '#8000ff', '#00ff80'],
          neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          cyber: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#7c3aed'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#8b5cf6'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6', '#06b6d4', '#7c3aed'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#7c3aed'],
          plasma: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          cosmic: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#7c3aed']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#7c3aed'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#8b5cf6'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#00d4ff', '#7c3aed'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#7c3aed']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced variety and advanced effects
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance and visual impact
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 2));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'plasma', 'cosmic', 'digital', 'quantum-field'] as const;
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      // Enhanced particle properties for more dynamic effects
      const particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 200,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.01,
        trail: [],
        maxTrailLength: Math.floor(Math.random() * 10) + 5,
        energy: Math.random() * 100,
        frequency: Math.random() * 0.1 + 0.01,
        amplitude: Math.random() * 20 + 10,
        phase: Math.random() * Math.PI * 2
      };
      
      particles.current.push(particle);
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with more advanced effects
  const animateParticles = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with enhanced background effects
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Enhanced particle rendering with advanced effects
    particles.current.forEach((particle) => {
      // Update particle properties
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.life += 1;
      particle.energy = Math.sin(particle.frequency * particle.life + particle.phase) * particle.amplitude + particle.amplitude;

      // Add trail effect
      particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
      if (particle.trail.length > particle.maxTrailLength) {
        particle.trail.shift();
      }

      // Boundary handling with enhanced wrapping
      if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.x > canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = canvas.height + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;

      // Enhanced particle rendering based on type
      ctx.save();
      ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
      
      switch (particle.type) {
        case 'quantum':
          // Quantum particles with wave-like effects
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + Math.sin(particle.pulse) * 3, 0, Math.PI * 2);
          ctx.stroke();
          
          // Quantum field effect
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3 + Math.sin(particle.pulse) * 5, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case 'neon':
          // Neon particles with glow effects
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'holographic': {
          // Holographic particles with prismatic effects
          const hue = (particle.life * 0.5) % 360;
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + Math.sin(particle.pulse) * 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'plasma':
          // Plasma particles with energy effects
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x, particle.y + particle.size);
          ctx.stroke();
          break;

        case 'cosmic':
          // Cosmic particles with star-like effects
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5 + particle.rotation;
            const radius = particle.size;
            const x = particle.x + Math.cos(angle) * radius;
            const y = particle.y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          break;

        case 'digital':
          // Digital particles with data-like effects
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 2}px monospace`;
          ctx.fillText('1', particle.x, particle.y);
          break;

        case 'quantum-field':
          // Quantum field particles with field effects
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2 + Math.sin(particle.pulse) * 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4 + Math.sin(particle.pulse) * 6, 0, Math.PI * 2);
          ctx.stroke();
          break;

        default:
          // Standard particles with enhanced effects
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + Math.sin(particle.pulse) * 2, 0, Math.PI * 2);
          ctx.fill();
      }

      // Render trail effect
      if (particle.trail.length > 1) {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = particle.opacity * 0.5;
        ctx.beginPath();
        particle.trail.forEach((trailPoint, trailIndex) => {
          const alpha = trailIndex / particle.trail.length;
          ctx.globalAlpha = particle.opacity * alpha * 0.3;
          if (trailIndex === 0) {
            ctx.moveTo(trailPoint.x, trailPoint.y);
          } else {
            ctx.lineTo(trailPoint.x, trailPoint.y);
          }
        });
        ctx.stroke();
      }

      ctx.restore();

      // Regenerate particles when they expire
      if (particle.life > particle.maxLife) {
        const colors = getThemeColors();
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = 0;
        particle.color = colors.primary[Math.floor(Math.random() * colors.primary.length)];
        particle.trail = [];
        particle.energy = Math.random() * 100;
        particle.phase = Math.random() * Math.PI * 2;
      }
    });

    // Enhanced connection lines between nearby particles
    particles.current.forEach((particle1, i) => {
      particles.current.slice(i + 1).forEach((particle2) => {
        const distance = Math.sqrt(
          Math.pow(particle1.x - particle2.x, 2) + Math.pow(particle1.y - particle2.y, 2)
        );
        
        if (distance < 100) {
          const alpha = (100 - distance) / 100 * 0.3;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      });
    });

    // Enhanced energy field effects
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const time = Date.now() * 0.001;
    
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 2;
    
    // Create multiple energy rings
    for (let i = 0; i < 3; i++) {
      const radius = 100 + i * 50 + Math.sin(time + i) * 20;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    animationFrameRef.current = requestAnimationFrame(animateParticles);
  }, [getThemeColors]);

  // Enhanced resize handler
  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  // Enhanced effect initialization
  useEffect(() => {
    initParticles();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      } else {
        animateParticles();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);
    
    animateParticles();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, animateParticles, handleResize]);

  // Enhanced theme switching effect
  useEffect(() => {
    initParticles();
  }, [theme, initParticles]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
        }}
      />
      
      {/* Enhanced Overlay Effects */}
      <div className="absolute inset-0">
        {/* Quantum Grid Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Enhanced Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Enhanced Energy Fields */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 border border-cyan-400 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="w-48 h-48 border border-purple-500 rounded-full opacity-10 animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="w-32 h-32 border border-pink-500 rounded-full opacity-10 animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '10s' }} />
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${20 + (i * 15)}%`,
            }}
          />
        ))}
      </div>
      
      {children}
    </div>
  );
}