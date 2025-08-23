import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2037Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2037({ 
  intensity = 'medium', 
  theme = 'quantum',
  children
}: UltraFuturisticBackground2037Props) {
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

    // Enhanced theme-based color schemes
    const getThemeColors = () => {
      switch (theme) {
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4', '#45b7d1']
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
            accent: ['#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4', '#45b7d1']
          };
        case 'space':
          return {
            primary: ['#1e3a8a', '#7c3aed', '#059669', '#dc2626', '#ea580c'],
            secondary: ['#0891b2', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'],
            accent: ['#06b6d4', '#a855f7', '#f97316', '#ef4444', '#84cc16']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
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
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'space';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
    }> = [];

    // Initialize particles with enhanced quantum effects
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 300);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.2 ? 'quantum' : 
                           Math.random() < 0.4 ? 'wave' : 
                           Math.random() < 0.6 ? 'neon' : 
                           Math.random() < 0.8 ? 'hologram' : 'space';
        
        const color = colors.primary[Math.floor(Math.random() * colors.primary.length)];
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: color,
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 20 + 10,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: []
        });
      }

      // Create quantum entanglement between particles
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          particles[i].entanglement = [i + 1];
          particles[i + 1].entanglement = [i];
        }
      }
    };

    // Enhanced particle rendering with quantum effects
    const renderParticle = (particle: any) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      switch (particle.type) {
        case 'quantum': {
          // Quantum particle with uncertainty effect
          const uncertainty = Math.sin(particle.life * 0.1) * 5;
          ctx.beginPath();
          ctx.arc(particle.x + uncertainty, particle.y + uncertainty, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Quantum entanglement lines
          if (particle.entanglement.length > 0) {
            particle.entanglement.forEach((entangledIndex: number) => {
              const entangled = particles[entangledIndex];
              if (entangled) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(entangled.x, entangled.y);
                ctx.strokeStyle = `${particle.color}40`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            });
          }
          break;
        }
          
        case 'wave': {
          // Wave particle with oscillating motion
          const waveOffset = Math.sin(particle.life * particle.frequency + particle.phase) * particle.amplitude;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y + waveOffset, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          break;
        }
          
        case 'neon':
          // Neon particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
          break;
          
        case 'hologram':
          // Holographic particle with transparency
          ctx.globalAlpha = particle.opacity * 0.6;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.stroke();
          break;
          
        case 'space':
          // Space particle with star-like appearance
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x + particle.size * 0.5, particle.y + particle.size * 0.5);
          ctx.lineTo(particle.x - particle.size * 0.5, particle.y + particle.size * 0.5);
          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (theme === 'space') {
        gradient.addColorStop(0, '#0f0f23');
        gradient.addColorStop(0.5, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
      } else {
        gradient.addColorStop(0, '#000000');
        gradient.addColorStop(0.5, '#1a1a2e');
        gradient.addColorStop(1, '#000000');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;
        particle.rotation += particle.rotationSpeed;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Render particle
        if (particle.life > 0) {
          renderParticle(particle);
        } else {
          // Respawn particle
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = colors.primary[Math.floor(Math.random() * colors.primary.length)];
        }
      });

      // Add quantum field effects
      if (theme === 'quantum' && intensity === 'high') {
        ctx.save();
        ctx.globalAlpha = 0.1;
        for (let i = 0; i < 5; i++) {
          const time = Date.now() * 0.001;
          const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width / 2;
          const y = Math.cos(time + i) * canvas.height * 0.3 + canvas.height / 2;
          
          ctx.beginPath();
          ctx.arc(x, y, 100 + Math.sin(time * 2) * 50, 0, Math.PI * 2);
          ctx.strokeStyle = colors.primary[i % colors.primary.length];
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.restore();
      }

      // Add neon grid effect for cyberpunk theme
      if (theme === 'cyberpunk') {
        ctx.save();
        ctx.strokeStyle = '#00ffff20';
        ctx.lineWidth = 1;
        
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: theme === 'space' 
            ? 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
            : 'radial-gradient(ellipse at center, #000000 0%, #1a1a2e 50%, #000000 100%)'
        }}
      />
      
      {/* Enhanced geometric overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
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
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
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
        
        {/* Additional quantum-inspired elements */}
        {theme === 'quantum' && (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-400/30 transform rotate-12"
              animate={{
                rotate: [12, 372],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-green-400/25 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.25, 0.5, 0.25]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
        
        {/* Neon effects for cyberpunk theme */}
        {theme === 'cyberpunk' && (
          <>
            <motion.div
              className="absolute top-1/3 left-1/3 w-28 h-28 border-2 border-pink-500/40"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.4)',
                  '0 0 40px rgba(236, 72, 153, 0.8)',
                  '0 0 20px rgba(236, 72, 153, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-32 h-32 border-2 border-cyan-500/40 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.4)'
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>
      
      {children}
    </div>
  );
}