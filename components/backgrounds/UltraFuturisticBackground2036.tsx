import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Theme-based color schemes
    const getThemeColors = () => {
      switch (theme) {
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#ff1493', '#00bfff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff69b4', '#87ceeb'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ffb6c1', '#add8e6']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffa726', '#42a5f5'],
            secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff7043', '#7e57c2'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#ffab91', '#90caf9']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#ff1493', '#00bfff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff69b4', '#87ceeb'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ffb6c1', '#add8e6']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f97316', '#3b82f6'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f43f5e', '#8b5cf6'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#fbbf24', '#06b6d4']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 80 : 200);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.25 ? 'quantum' : 
                           Math.random() < 0.45 ? 'wave' : 
                           Math.random() < 0.65 ? 'neon' : 
                           Math.random() < 0.8 ? 'holographic' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.8 * intensityMultiplier,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.8 * intensityMultiplier,
          size: Math.random() * (isSmallScreen ? 3 : 6) + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1
        });
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;

        // Life cycle management
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1);
        }

        // Calculate opacity based on life
        const lifeOpacity = 1 - (particle.life / particle.maxLife);
        const finalOpacity = particle.opacity * lifeOpacity;

        // Draw based on particle type
        ctx.save();
        ctx.globalAlpha = finalOpacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(ctx, particle, colors, finalOpacity);
            break;
          case 'wave':
            drawWaveParticle(ctx, particle, colors, finalOpacity);
            break;
          case 'neon':
            drawNeonParticle(ctx, particle, colors, finalOpacity);
            break;
          default:
            drawStandardParticle(ctx, particle, colors, finalOpacity);
        }

        ctx.restore();
      });

      // Draw connections
      drawConnections(ctx, particles, colors, intensityMultiplier);

      if (!prefersReducedMotion) {
        requestAnimationFrame(updateParticles);
      }
    };

    // Draw quantum particles with quantum effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any, opacity: number) => {
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.5, colors.secondary[Math.floor(Math.random() * colors.secondary.length)]);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Quantum entanglement lines
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity * 0.3;
      ctx.beginPath();
      ctx.moveTo(-particle.size * 3, -particle.size * 3);
      ctx.lineTo(particle.size * 3, particle.size * 3);
      ctx.stroke();
    };

    // Draw wave particles with wave effects
    const drawWaveParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any, opacity: number) => {
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity;

      for (let i = 0; i < 3; i++) {
        const waveSize = particle.size * (1 + i * 0.5);
        ctx.beginPath();
        ctx.arc(0, 0, waveSize, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha *= 0.7;
      }
    };

    // Draw neon particles with glow effects
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any, opacity: number) => {
      // Glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 3;
      ctx.fillStyle = particle.color;
      
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Remove shadow for next operations
      ctx.shadowBlur = 0;
    };

    // Draw standard particles
    const drawStandardParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any, opacity: number) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw connections between particles
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], colors: any, intensity: number) => {
      const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 200) * intensity;

      if (maxDistance > 0) {
        particles.forEach((particle, index) => {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                const opacity = (maxDistance - distance) / maxDistance * 0.15 * intensity;
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        });
      }
    };

    // Initialize and start animation
    initParticles();
    updateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            background: theme === 'quantum' ? 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' :
                       theme === 'neon' ? 'radial-gradient(ellipse at center, #1a0033 0%, #330066 50%, #660099 100%)' :
                       theme === 'holographic' ? 'radial-gradient(ellipse at center, #001122 0%, #003366 50%, #0066cc 100%)' :
                       'radial-gradient(ellipse at center, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)'
          }}
        />
        
        {/* Additional visual effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
            animate={{
              rotate: [45, 405],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
      {children}
    </>
  );
}