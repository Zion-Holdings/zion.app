import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2036Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'matrix';
  children?: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2036({ 
  intensity = 'medium', 
  theme = 'quantum',
  children
}: UltraAdvancedFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Enhanced theme-based color schemes
    const getThemeColors = () => {
      switch (theme) {
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#80ff00', '#ff0080', '#00ff40']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff'],
            accent: ['#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#80ff00', '#ff0080', '#00ff40']
          };
        case 'matrix':
          return {
            primary: ['#00ff00', '#00dd00', '#00bb00', '#009900', '#007700'],
            secondary: ['#00ff40', '#00ff60', '#00ff80', '#00ffa0', '#00ffc0'],
            accent: ['#40ff00', '#60ff00', '#80ff00', '#a0ff00', '#c0ff00']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            accent: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with quantum effects
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'matrix';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      waveFrequency: number;
      waveAmplitude: number;
      quantumState: number;
      entanglement: number[];
    }> = [];

    // Initialize enhanced particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 300);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.2 ? 'quantum' : 
                           Math.random() < 0.4 ? 'wave' : 
                           Math.random() < 0.6 ? 'neon' : 
                           Math.random() < 0.8 ? 'hologram' : 'matrix';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          waveFrequency: Math.random() * 0.1 + 0.05,
          waveAmplitude: Math.random() * 20 + 10,
          quantumState: Math.random() * Math.PI * 2,
          entanglement: [Math.random() * canvas.width, Math.random() * canvas.height]
        });
      }
    };

    // Enhanced animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life--;
        particle.quantumState += 0.02;

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
          particle.color = colors.primary[Math.floor(Math.random() * colors.primary.length)];
        }

        // Draw based on particle type
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        
        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(ctx, particle, colors);
            break;
          case 'wave':
            drawWaveParticle(ctx, particle, colors);
            break;
          case 'neon':
            drawNeonParticle(ctx, particle, colors);
            break;
          case 'hologram':
            drawHologramParticle(ctx, particle, colors);
            break;
          case 'matrix':
            drawMatrixParticle(ctx, particle, colors);
            break;
          default:
            drawStandardParticle(ctx, particle);
        }
        
        ctx.restore();
      });

      // Draw quantum entanglement lines
      drawEntanglementLines(ctx, particles, colors);

      // Draw mouse interaction effects
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        drawMouseInteraction(ctx, mousePosition, colors);
      }

      animationId = requestAnimationFrame(animate);
    };

    // Particle drawing functions
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any) => {
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.5, colors.secondary[Math.floor(Math.random() * colors.secondary.length)]);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Quantum state visualization
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, particle.quantumState);
      ctx.stroke();
    };

    const drawWaveParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any) => {
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let i = 0; i < 20; i++) {
        const x = particle.x + i * 2;
        const y = particle.y + Math.sin(i * particle.waveFrequency + particle.quantumState) * particle.waveAmplitude;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any) => {
      // Neon glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 20;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner core
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any) => {
      const time = Date.now() * 0.001;
      const hologramColor = colors.accent[Math.floor(Math.random() * colors.accent.length)];
      
      ctx.strokeStyle = hologramColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.lineDashOffset = time * 10;
      
      ctx.beginPath();
      ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
      ctx.stroke();
      
      ctx.setLineDash([]);
    };

    const drawMatrixParticle = (ctx: CanvasRenderingContext2D, particle: any, colors: any) => {
      ctx.fillStyle = particle.color;
      ctx.font = `${particle.size * 2}px monospace`;
      ctx.fillText('01', particle.x, particle.y);
    };

    const drawStandardParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawEntanglementLines = (ctx: CanvasRenderingContext2D, particles: any[], colors: any) => {
      ctx.strokeStyle = colors.primary[0];
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
      
      particles.forEach((particle, i) => {
        if (particle.type === 'quantum' && Math.random() < 0.1) {
          const target = particles[Math.floor(Math.random() * particles.length)];
          if (target && target !== particle) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        }
      });
      
      ctx.globalAlpha = 1;
    };

    const drawMouseInteraction = (ctx: CanvasRenderingContext2D, mousePos: any, colors: any) => {
      const gradient = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 100);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 100, 0, Math.PI * 2);
      ctx.fill();
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Initialize and start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      {children}
    </div>
  );
}