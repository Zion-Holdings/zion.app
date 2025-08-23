import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

type ParticleType = 'quantum' | 'holographic' | 'consciousness' | 'neon' | 'space-time' | 'cyberpunk';

interface UltraFuturisticBackground2037Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum-neon' | 'holographic-cyberpunk' | 'consciousness-ai' | 'space-time' | 'quantum-holographic';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2037({ 
  intensity = 'medium', 
  theme = 'quantum-holographic',
  children
}: UltraFuturisticBackground2037Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Advanced particle system with consciousness simulation
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
    type: 'quantum' | 'holographic' | 'consciousness' | 'neon' | 'space-time' | 'cyberpunk';
    consciousness: number;
    entanglement: number[];
    quantumState: 'superposition' | 'entangled' | 'collapsed';
  }>>([]);

  // Theme-based color schemes for 2037
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'quantum-neon':
        return {
          primary: ['#00ffff', '#ff00ff', '#ffff00', '#ff0080'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981']
        };
      case 'holographic-cyberpunk':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b'],
          holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
          cyberpunk: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff']
        };
      case 'consciousness-ai':
        return {
          primary: ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          consciousness: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
          ai: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981']
        };
      case 'space-time':
        return {
          primary: ['#1e40af', '#1e3a8a', '#1e293b', '#0f172a'],
          secondary: ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'],
          accent: ['#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc'],
          space: ['#0f172a', '#1e293b', '#334155', '#475569'],
          time: ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe']
        };
      default: // quantum-holographic
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
        };
    }
  }, [theme]);

  // Initialize advanced particles with consciousness simulation
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Optimized particle count for 2037 performance
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 60 : 120);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.6 : intensity === 'medium' ? 1 : 1.8));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['quantum', 'holographic', 'consciousness', 'neon', 'space-time', 'cyberpunk'];
      const quantumStates = ['superposition', 'entangled', 'collapsed'];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 150,
        maxLife: 150,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)] as ParticleType,
        consciousness: Math.random(),
        entanglement: [Math.random(), Math.random(), Math.random()],
        quantumState: quantumStates[Math.floor(Math.random() * quantumStates.length)] as string
      });
    }
  }, [intensity, getThemeColors]);

  // Advanced animation loop with consciousness effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.05)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with consciousness effects
    particles.current.forEach((particle, index) => {
      // Update particle position with consciousness influence
      particle.x += particle.vx * (1 + particle.consciousness * 0.5);
      particle.y += particle.vy * (1 + particle.consciousness * 0.5);
      
      // Quantum entanglement effects
      if (particle.quantumState === 'entangled') {
        const entangledIndex = (index + 1) % particles.current.length;
        const entangledParticle = particles.current[entangledIndex];
        if (entangledParticle) {
          particle.x += (entangledParticle.x - particle.x) * 0.01;
          particle.y += (entangledParticle.y - particle.y) * 0.01;
        }
      }

      // Consciousness-based behavior
      if (particle.consciousness > 0.7) {
        particle.size *= 1.001;
        particle.opacity = Math.min(1, particle.opacity * 1.01);
      }

      // Wrap around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle with advanced effects
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Type-specific rendering
      switch (particle.type) {
        case 'quantum': {
          // Quantum particle with wave function
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Quantum wave effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.stroke();
          break;
        }
          
        case 'holographic': {
          // Holographic particle with rainbow effect
          const hue = (Date.now() * 0.1 + index * 10) % 360;
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Holographic rings
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * i, 0, Math.PI * 2);
            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${0.3 / i})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
          break;
        }
          
        case 'consciousness': {
          // Consciousness particle with neural network effect
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Neural connections
          particles.current.forEach((otherParticle, otherIndex) => {
            if (otherIndex !== index && otherParticle.type === 'consciousness') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
          break;
        }
          
        case 'neon': {
          // Neon particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          break;
        }
          
        case 'space-time': {
          // Space-time particle with distortion effect
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Time dilation effect
          const timeScale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.2;
          ctx.scale(timeScale, timeScale);
          break;
        }
          
        case 'cyberpunk': {
          // Cyberpunk particle with glitch effect
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Glitch effect
          if (Math.random() > 0.95) {
            ctx.fillStyle = '#ff00ff';
            ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
          }
          break;
        }
      }
      
      ctx.restore();
    });

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

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
      {/* Advanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional Visual Effects */}
      <div className="absolute inset-0">
        {/* Quantum Field Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
              style={{
                left: `${(i + 1) * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Consciousness Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}