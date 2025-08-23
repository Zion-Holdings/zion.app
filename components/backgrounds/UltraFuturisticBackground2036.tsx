import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2036Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2036({ 
  intensity = 'medium', 
  theme = 'quantum',
  children
}: UltraFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    type: 'particle' | 'wave' | 'quantum' | 'neon';
    life: number;
    maxLife: number;
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
  }>>([]);

  // Theme-based color schemes with enhanced colors
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff']
        };
      default: // quantum
        return {
          primary: ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced properties
  const initParticles = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
    const baseCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
    const particleCount = Math.floor(baseCount * intensityMultiplier);

    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const particleType = Math.random() < 0.25 ? 'quantum' : 
                         Math.random() < 0.5 ? 'wave' : 
                         Math.random() < 0.75 ? 'neon' : 'particle';
      
      const colorSet = Math.random() < 0.5 ? colors.primary : colors.secondary;
      const color = colorSet[Math.floor(Math.random() * colorSet.length)];
      
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color,
        type: particleType,
        life: Math.random() * 100,
        maxLife: 100,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with better performance
  const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const colors = getThemeColors();
    const time = Date.now() * 0.001;
    
    // Clear canvas with subtle fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update particle properties
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.life -= 0.5;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Regenerate dead particles
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = particle.maxLife;
        particle.opacity = Math.random() * 0.8 + 0.2;
      }

      // Calculate pulse effect
      const pulseEffect = Math.sin(particle.pulse) * 0.3 + 0.7;
      const currentOpacity = particle.opacity * pulseEffect;

      // Draw particle based on type
      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      switch (particle.type) {
        case 'quantum':
          // Quantum particles with geometric shapes
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          if (Math.random() < 0.5) {
            // Diamond shape
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size, 0);
            ctx.lineTo(0, particle.size);
            ctx.lineTo(-particle.size, 0);
          } else {
            // Triangle
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size, particle.size);
            ctx.lineTo(-particle.size, particle.size);
          }
          ctx.closePath();
          ctx.fill();
          break;

        case 'wave':
          // Wave particles with sine wave effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 10; i++) {
            const x = (i - 5) * particle.size * 0.5;
            const y = Math.sin(time * 2 + i * 0.5) * particle.size * 0.3;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
          break;

        case 'neon':
          // Neon particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;

        default:
          // Regular particles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }

      ctx.restore();
    });

    // Draw connecting lines between nearby particles
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        
        if (distance < 100) {
          const opacity = (100 - distance) / 100 * 0.1;
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  }, [getThemeColors]);

  // Setup and cleanup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize and start animation
    initParticles(canvas, ctx);
    animate(canvas, ctx);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent'
        }}
      />
      
      {/* Additional visual elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/3 via-transparent to-pink-500/3" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-blue-400/10 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/8 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}