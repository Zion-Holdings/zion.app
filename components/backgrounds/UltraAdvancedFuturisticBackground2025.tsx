import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2025Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'matrix' | 'energy';
  children?: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2025({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children
}: UltraAdvancedFuturisticBackground2025Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced particle system with better performance
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
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'matrix';
    rotation: number;
    rotationSpeed: number;
    pulsePhase: number;
  }>>([]);

  // Enhanced theme-based color schemes
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff0080'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4'],
          neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff0080'],
          neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
        };
      case 'matrix':
        return {
          primary: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300'],
          secondary: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300'],
          accent: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300'],
          neon: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300']
        };
      case 'energy':
        return {
          primary: ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#00d4ff'],
          secondary: ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#00d4ff'],
          accent: ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#00d4ff'],
          neon: ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#00d4ff']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
          neon: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced performance
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Optimize particle count for better performance
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 60 : 120);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.6 : intensity === 'medium' ? 1 : 1.4));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'matrix'];
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)] as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with better performance
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with subtle fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulsePhase += 0.05;
      particle.life--;

      // Wrap around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Regenerate dead particles
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = particle.maxLife;
        particle.color = getThemeColors().primary[Math.floor(Math.random() * 5)];
      }

      // Calculate pulse effect
      const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
      const currentOpacity = particle.opacity * pulse;

      // Draw particle based on type
      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      switch (particle.type) {
        case 'neon':
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'holographic':
          // Holographic effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.stroke();
          break;

        case 'energy':
          // Energy pulse effect
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * pulse, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'matrix':
          // Matrix digital rain effect
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 2}px monospace`;
          ctx.fillText('1', 0, 0);
          break;

        default:
          // Standard particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }

      ctx.restore();
    });

    // Draw connection lines between nearby particles
    ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Enhanced initialization
  useEffect(() => {
    setIsVisible(true);
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
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: theme === 'matrix' 
            ? 'linear-gradient(180deg, #000000 0%, #001100 50%, #000000 100%)'
            : theme === 'energy'
            ? 'linear-gradient(180deg, #000000 0%, #1a0f00 50%, #000000 100%)'
            : 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
        }}
      />
      
      {/* Additional Visual Effects */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Energy waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-emerald-400/10 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {children}
    </motion.div>
  );
}