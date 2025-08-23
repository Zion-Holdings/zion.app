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

  // Enhanced animation loop with quantum effects and neon pulses
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with enhanced transparency for layering effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create gradient background for enhanced depth
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    
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

  // Enhanced initialization and cleanup
  useEffect(() => {
    initParticles();
    animate();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent'
        }}
      />
      
      {/* Additional visual elements */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#quantumGradient)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>
      
      {children}
    </div>
  );
}