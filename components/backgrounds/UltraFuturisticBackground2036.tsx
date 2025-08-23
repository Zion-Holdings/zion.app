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

  // Enhanced particle system with more variety
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
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural';
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    trail: Array<{x: number, y: number, opacity: number}>;
  }>>([]);

  // Enhanced theme-based color schemes
  const getThemeColors = useCallback(() => {
    switch (theme) {
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

  // Initialize particles with enhanced variety
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 80 : 160);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.6 : intensity === 'medium' ? 1 : 1.8));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
        type: particleType as 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        trail: []
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with advanced effects
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
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    
    const colors = getThemeColors();
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Add to trail
      particle.trail.push({x: particle.x, y: particle.y, opacity: particle.opacity});
      if (particle.trail.length > 10) {
        particle.trail.shift();
      }

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

      // Update rotation and pulse
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;

      // Update life
      particle.life--;
      if (particle.life <= 0) {
        // Reset particle
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = particle.maxLife;
        particle.color = colors.primary[Math.floor(Math.random() * colors.primary.length)];
      }

      // Draw particle trails
      if (particle.trail && particle.trail.length > 0) {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
        for (let i = 1; i < particle.trail.length; i++) {
          ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
        }
        ctx.stroke();
        ctx.globalAlpha = particle.opacity;
      }

      // Draw main particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;

      // Enhanced particle rendering based on type
      switch (particle.type) {
        case 'quantum': {
          const waveLength = (particle.life / particle.maxLife) * 20;
          ctx.strokeStyle = `hsl(${particle.hue}, 70%, 60%)`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x - waveLength, particle.y);
          ctx.lineTo(particle.x + waveLength, particle.y);
          ctx.stroke();
          break;
        }
        case 'neon': {
          const glow = Math.sin(particle.life * particle.pulseSpeed) * 0.5 + 0.5;
          ctx.shadowColor = `hsl(${particle.hue}, 100%, 70%)`;
          ctx.shadowBlur = 20 * glow;
          ctx.fillStyle = `hsl(${particle.hue}, 100%, 60%)`;
          ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
          ctx.shadowBlur = 0;
          break;
        }
        case 'holographic': {
          const rainbowHue = (particle.life * 2 + particle.hue) % 360;
          ctx.strokeStyle = `hsl(${rainbowHue}, 80%, 60%)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
        }
        case 'energy': {
          const energy = Math.sin(particle.life * particle.pulseSpeed) * 0.5 + 0.5;
          ctx.fillStyle = `hsl(${particle.hue}, 90%, ${50 + energy * 30}%)`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * energy, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
        case 'data': {
          const binary = Math.random() > 0.5 ? '1' : '0';
          ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
          ctx.font = `${particle.size * 2}px monospace`;
          ctx.fillText(binary, particle.x, particle.y);
          break;
        }
        case 'neural': {
          const pulse = Math.sin(particle.life * particle.pulseSpeed) * 0.5 + 0.5;
          ctx.strokeStyle = `hsl(${particle.hue}, 80%, 60%)`;
          ctx.lineWidth = pulse * 2;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x, particle.y + particle.size);
          ctx.stroke();
          break;
        }

        default:
          // Standard particles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }

      ctx.restore();
    });

    // Add floating geometric shapes
    if (intensity !== 'low') {
      const time = Date.now() * 0.001;
      const shapes = [
        { type: 'triangle', x: canvas.width * 0.2, y: canvas.height * 0.3, size: 30, rotation: time * 0.5 },
        { type: 'square', x: canvas.width * 0.8, y: canvas.height * 0.7, size: 25, rotation: time * 0.3 },
        { type: 'hexagon', x: canvas.width * 0.5, y: canvas.height * 0.2, size: 35, rotation: time * 0.7 }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = colors.neon[Math.floor(Math.random() * colors.neon.length)];
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.3;

        switch (shape.type) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
            ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
            ctx.closePath();
            break;
          case 'square':
            ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
          case 'hexagon':
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * shape.size;
              const y = Math.sin(angle) * shape.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            break;
        }
        ctx.stroke();
        ctx.restore();
      });
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [intensity, getThemeColors]);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  // Initialize and cleanup
  useEffect(() => {
    initParticles();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, animate, handleResize]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      />
      
      {/* Additional Visual Layers */}
      <div className="absolute inset-0">
        {/* Floating Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Quantum Energy Fields */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural Network Connections */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Holographic Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(0, 212, 255, 0.1), transparent)'
          }}
          animate={{
            rotate: 360
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