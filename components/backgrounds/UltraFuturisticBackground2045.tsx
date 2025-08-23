import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2045Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'ultra-futuristic';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2045({ 
  intensity = 'medium', 
  theme = 'ultra-futuristic',
  children
}: UltraFuturisticBackground2045Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with ultra-futuristic elements
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
    wave: number;
    waveSpeed: number;
    holographic: boolean;
    neonIntensity: number;
  }>>([]);

  // Ultra-futuristic theme-based color schemes
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'ultra-futuristic':
        return {
          primary: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
          secondary: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2'],
          accent: ['#ff69b4', '#00ced1', '#98fb98', '#f0e68c', '#ff6347', '#9370db'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2'],
          cosmic: ['#4b0082', '#8a2be2', '#9370db', '#ba55d3', '#da70d6', '#ee82ee'],
          digital: ['#00ff00', '#00ffff', '#0080ff', '#8000ff', '#ff0080', '#ffff00']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      default:
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
    }
  }, [theme]);

  // Initialize particles with ultra-futuristic variety
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 2));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'plasma', 'cosmic', 'digital', 'quantum-field'];
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
        maxLife: Math.random() * 100 + 50,
        type: particleType as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        wave: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 0.03 + 0.01,
        holographic: Math.random() > 0.7,
        neonIntensity: Math.random() * 0.8 + 0.2
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with ultra-futuristic effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with gradient background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with enhanced effects
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.wave += particle.waveSpeed;
      particle.life--;

      // Wrap particles around screen
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Regenerate dead particles
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.color = getThemeColors().primary[Math.floor(Math.random() * 6)];
      }

      // Draw particle with enhanced effects
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Enhanced particle rendering based on type
      switch (particle.type) {
        case 'quantum': {
          // Quantum particles with wave effects
          const quantumSize = particle.size * (1 + Math.sin(particle.wave) * 0.3);
          ctx.beginPath();
          ctx.arc(0, 0, quantumSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity * 0.8})`;
          ctx.fill();
          
          // Quantum field effect
          ctx.beginPath();
          ctx.arc(0, 0, quantumSize * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 212, 255, ${particle.opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          break;
        }

        case 'neon': {
          // Neon particles with glow effects
          const neonSize = particle.size * (1 + Math.sin(particle.pulse) * 0.5);
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(0, 0, neonSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Neon glow
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(0, 0, neonSize * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          break;
        }

        case 'holographic': {
          // Holographic particles with rainbow effects
          const holographicSize = particle.size * (1 + Math.sin(particle.pulse) * 0.4);
          const hue = (Date.now() * 0.1 + index * 10) % 360;
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.globalAlpha = particle.opacity * 0.9;
          
          // Holographic pattern
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(0, 0, holographicSize * (1 + i * 0.3), 0, Math.PI * 2);
            ctx.strokeStyle = `hsla(${hue + i * 30}, 70%, 60%, ${particle.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
          break;
        }

        case 'cosmic': {
          // Cosmic particles with star-like effects
          const cosmicSize = particle.size * (1 + Math.sin(particle.pulse) * 0.6);
          ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
          ctx.shadowColor = '#ffd700';
          ctx.shadowBlur = 15;
          
          // Star shape
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const radius = cosmicSize * (i % 2 === 0 ? 1 : 0.5);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          break;
        }

        default:
          // Standard particles
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.6})`;
          ctx.fill();
      }

      ctx.restore();
    });

    // Add connecting lines between nearby particles
    particles.current.forEach((particle1, i) => {
      particles.current.slice(i + 1).forEach((particle2) => {
        const distance = Math.sqrt(
          Math.pow(particle1.x - particle2.x, 2) + 
          Math.pow(particle1.y - particle2.y, 2)
        );
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    initParticles();
  }, [initParticles]);

  // Initialize and cleanup
  useEffect(() => {
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
  }, [initParticles, handleResize, animate]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0">
        {/* Quantum field lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                top: `${(i * 5) % 100}%`,
                left: '0',
                right: '0',
                transform: `translateX(${Math.sin(Date.now() * 0.001 + i) * 100}px)`
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
              style={{
                left: `${(i * 7) % 100}%`
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Neon pulse effects */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full border border-pink-400"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.8, 0, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.8
              }}
            />
          ))}
        </div>
      </div>
      
      {children}
    </div>
  );
}