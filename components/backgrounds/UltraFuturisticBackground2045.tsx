import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2045Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'consciousness';
  children?: React.ReactNode;
}

type ParticleType = 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural' | 'consciousness' | 'thought' | 'emotion' | 'memory';
type EmotionalState = 'calm' | 'excited' | 'focused' | 'creative' | 'analytical';

export default function UltraFuturisticBackground2045({ 
  intensity = 'medium', 
  theme = 'consciousness',
  children
}: UltraFuturisticBackground2045Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with consciousness-inspired elements
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
    type: ParticleType;
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    connection: number[];
    consciousness: number;
    emotionalState: EmotionalState;
  }>>([]);

  // Enhanced theme-based color schemes with consciousness colors
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'consciousness':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2'],
          consciousness: ['#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          emotional: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          neural: ['#a8e6cf', '#dcedc1', '#ffd3a5', '#ffaaa5', '#ff8b94', '#ff6b6b']
        };
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
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced variety and consciousness
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 25 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 1.5));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes: ParticleType[] = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'consciousness', 'thought', 'emotion', 'memory'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const emotionalStates: EmotionalState[] = ['calm', 'excited', 'focused', 'creative', 'analytical'];
      const emotionalState = emotionalStates[Math.floor(Math.random() * emotionalStates.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        connection: [],
        consciousness: Math.random(),
        emotionalState
      });
    }
  }, [getThemeColors, intensity]);

  // Enhanced animation loop with consciousness effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.life -= 0.5;

      // Wrap around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Regenerate particles
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.consciousness = Math.random();
        const emotionalStates: EmotionalState[] = ['calm', 'excited', 'focused', 'creative', 'analytical'];
        particle.emotionalState = emotionalStates[Math.floor(Math.random() * emotionalStates.length)];
      }

      // Calculate consciousness-based effects
      const consciousnessEffect = Math.sin(particle.consciousness * Math.PI * 2 + Date.now() * 0.001) * 0.5 + 0.5;
      const emotionalEffect = Math.sin(particle.pulse) * 0.3 + 0.7;
      const sizeVariation = particle.size * (1 + consciousnessEffect * 0.5);
      const opacityVariation = particle.opacity * emotionalEffect;

      // Draw particle based on type
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = opacityVariation;

      switch (particle.type) {
        case 'consciousness':
          {
            // Draw consciousness particles as expanding circles
            ctx.beginPath();
            ctx.arc(0, 0, sizeVariation * 2, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Add consciousness glow
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = sizeVariation * 3;
            ctx.beginPath();
            ctx.arc(0, 0, sizeVariation, 0, Math.PI * 2);
            ctx.fill();
          }
          break;

        case 'thought':
          {
            // Draw thought particles as connected dots
            ctx.beginPath();
            ctx.arc(0, 0, sizeVariation, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Add thought connections
            particles.current.forEach((otherParticle, otherIndex) => {
              if (index !== otherIndex && otherParticle.type === 'thought') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - otherParticle.x, 2) + 
                  Math.pow(particle.y - otherParticle.y, 2)
                );
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(0, 0);
                  ctx.lineTo(otherParticle.x - particle.x, otherParticle.y - particle.y);
                  ctx.strokeStyle = particle.color;
                  ctx.lineWidth = 0.5;
                  ctx.globalAlpha = opacityVariation * (1 - distance / 100);
                  ctx.stroke();
                }
              }
            });
          }
          break;

        case 'emotion':
          {
            // Draw emotion particles as hearts or stars
            const emotionSize = sizeVariation * (1 + emotionalEffect * 0.5);
            ctx.fillStyle = particle.color;
            
            if (particle.emotionalState === 'excited') {
              // Draw star
              ctx.beginPath();
              for (let i = 0; i < 5; i++) {
                const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
                const x = Math.cos(angle) * emotionSize;
                const y = Math.sin(angle) * emotionSize;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              ctx.fill();
            } else {
              // Draw circle with emotional pulse
              ctx.beginPath();
              ctx.arc(0, 0, emotionSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;

        case 'memory':
          {
            // Draw memory particles as fading trails
            ctx.beginPath();
            ctx.arc(0, 0, sizeVariation, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Add memory trail
            for (let i = 1; i <= 3; i++) {
              ctx.globalAlpha = opacityVariation * (1 - i / 3) * 0.3;
              ctx.beginPath();
              ctx.arc(-particle.vx * i, -particle.vy * i, sizeVariation * (1 - i / 3), 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;

        default:
          // Standard particle rendering
          ctx.beginPath();
          ctx.arc(0, 0, sizeVariation, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Add glow effect for neon particles
          if (particle.type === 'neon') {
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = sizeVariation * 2;
            ctx.beginPath();
            ctx.arc(0, 0, sizeVariation * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
      }

      ctx.restore();
    });

    // Draw consciousness connections
    if (theme === 'consciousness') {
      particles.current.forEach((particle, index) => {
        if (particle.type === 'consciousness' || particle.type === 'neural') {
          particles.current.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && (otherParticle.type === 'consciousness' || otherParticle.type === 'neural')) {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [theme]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

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
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent'
        }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Consciousness grid */}
        {theme === 'consciousness' && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
          </div>
        )}
        
        {/* Quantum field lines */}
        {theme === 'quantum' && (
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                style={{
                  left: `${(i / 20) * 100}%`,
                  animationDelay: `${i * 0.1}s`
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
        )}
        
        {/* Neon pulse effects */}
        {theme === 'neon' && (
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${['#ff0080', '#00ffff', '#ffff00', '#ff00ff'][i % 4]}/20, transparent)`
                }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 0.5, 0]
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
        )}
      </div>
      
      {children}
    </div>
  );
}