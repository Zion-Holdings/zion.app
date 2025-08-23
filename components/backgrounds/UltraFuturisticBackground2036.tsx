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
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.8 : intensity === 'medium' ? 1.2 : 2.0));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: particleType as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with more effects
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
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Update life
      particle.life--;
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }

      // Draw particle based on type
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(particle.pulse));
      
      switch (particle.type) {
        case 'neon':
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = pulseOpacity;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner glow
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = pulseOpacity * 0.5;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'quantum':
          // Quantum wave effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.globalAlpha = pulseOpacity;
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = particle.size * (1 + 0.5 * Math.sin(particle.pulse + i));
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;
          
        case 'holographic':
          // Holographic effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = pulseOpacity;
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.lineTo(particle.size, 0);
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(0, particle.size);
          ctx.stroke();
          
          // Cross pattern
          ctx.beginPath();
          ctx.moveTo(-particle.size * 0.7, -particle.size * 0.7);
          ctx.lineTo(particle.size * 0.7, particle.size * 0.7);
          ctx.moveTo(particle.size * 0.7, -particle.size * 0.7);
          ctx.lineTo(-particle.size * 0.7, particle.size * 0.7);
          ctx.stroke();
          break;
          
        case 'energy':
          // Energy bolt effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 3;
          ctx.globalAlpha = pulseOpacity;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.lineTo(particle.size, 0);
          ctx.stroke();
          
          // Energy particles
          for (let i = 0; i < 5; i++) {
            const offset = (i - 2) * particle.size * 0.3;
            ctx.beginPath();
            ctx.arc(offset, 0, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
          }
          break;
          
        case 'data':
          // Data stream effect
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = pulseOpacity;
          for (let i = 0; i < 3; i++) {
            const offset = (i - 1) * particle.size * 0.4;
            ctx.fillRect(-2, offset, 4, 8);
          }
          break;
          
        case 'neural':
          // Neural network effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = pulseOpacity;
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.moveTo(particle.size, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.stroke();
          
          // Connection points
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(-particle.size, -particle.size, 2, 0, Math.PI * 2);
          ctx.arc(particle.size, particle.size, 2, 0, Math.PI * 2);
          ctx.arc(particle.size, -particle.size, 2, 0, Math.PI * 2);
          ctx.arc(-particle.size, particle.size, 2, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        default:
          // Standard particle
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = pulseOpacity;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }
      
      ctx.restore();
    });

    // Draw connecting lines between nearby particles
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.globalAlpha = (100 - distance) / 100 * 0.1;
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }

    // Add floating geometric shapes
    const time = Date.now() * 0.001;
    const shapes = [
      { x: canvas.width * 0.1, y: canvas.height * 0.2, size: 40, rotation: time * 0.5 },
      { x: canvas.width * 0.9, y: canvas.height * 0.8, size: 60, rotation: -time * 0.3 },
      { x: canvas.width * 0.8, y: canvas.height * 0.1, size: 30, rotation: time * 0.7 }
    ];

    shapes.forEach((shape, index) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      const color = colors.neon ? colors.neon[index % colors.neon.length] : colors.primary[index % colors.primary.length];
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.1;
      
      // Draw different shapes
      if (index === 0) {
        // Triangle
        ctx.beginPath();
        ctx.moveTo(0, -shape.size);
        ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
        ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
        ctx.closePath();
        ctx.stroke();
      } else if (index === 1) {
        // Square
        ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else {
        // Hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
      
      ctx.restore();
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Initialize and start animation
  useEffect(() => {
    initParticles();
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, animate]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      />
      
      {/* Additional futuristic overlay elements */}
      <div className="absolute inset-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-400/30"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 transform rotate-45 bg-gradient-to-r from-pink-500/20 to-rose-600/20 border border-pink-400/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [45, 225, 45]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Scanning lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['-200% 0', '200% 0']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}