import React, { useEffect, useRef } from 'react';
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

    // Enhanced theme-based color schemes with quantum-neon fusion
    const getThemeColors = () => {
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
        case 'quantum-neon':
          return {
            primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444']
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
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'quantum-neon';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
    }> = [];

    // Initialize particles with quantum-neon fusion
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 25 : (isSmallScreen ? 100 : 250);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.25 ? 'quantum-neon' : 
                           Math.random() < 0.4 ? 'quantum' : 
                           Math.random() < 0.6 ? 'wave' : 
                           Math.random() < 0.8 ? 'neon' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 50 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: [Math.random(), Math.random(), Math.random()]
        });
      }
    };

    // Enhanced animation loop with quantum effects
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create quantum field effect
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Quantum field visualization
      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const fieldStrength = Math.sin(distance * 0.01 - time * 2) * 0.5 + 0.5;
          
          if (fieldStrength > 0.3) {
            ctx.globalAlpha = fieldStrength * 0.1;
            ctx.fillStyle = colors.primary[0];
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.life--;
        particle.rotation += particle.rotationSpeed;
        particle.phase += particle.frequency;
        
        // Quantum entanglement effect
        if (particle.type === 'quantum-neon' || particle.type === 'quantum') {
          particle.x += Math.sin(particle.phase) * particle.amplitude * 0.01;
          particle.y += Math.cos(particle.phase) * particle.amplitude * 0.01;
          
          // Entanglement with other particles
          if (index % 3 === 0 && index + 2 < particles.length) {
            const partner1 = particles[index + 1];
            const partner2 = particles[index + 2];
            if (partner1 && partner2) {
              particle.entanglement[0] = Math.sin(time + index) * 0.1;
              partner1.entanglement[1] = Math.cos(time + index) * 0.1;
              partner2.entanglement[2] = Math.sin(time + index + 1) * 0.1;
            }
          }
        }

        // Neon glow effect
        if (particle.type === 'neon' || particle.type === 'quantum-neon') {
          particle.size = particle.size + Math.sin(particle.phase * 3) * 0.5;
          particle.opacity = 0.8 + Math.sin(particle.phase * 2) * 0.2;
        }

        // Wave effect
        if (particle.type === 'wave') {
          particle.y += Math.sin(particle.phase) * 2;
          particle.x += Math.cos(particle.phase) * 1;
        }

        // Standard particle movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Quantum-neon fusion rendering
        if (particle.type === 'quantum-neon') {
          // Outer glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size * 2, -particle.size * 2, particle.size * 4, particle.size * 4);
          
          // Inner core
          ctx.shadowBlur = 10;
          ctx.fillStyle = colors.neon ? colors.neon[Math.floor(Math.random() * colors.neon.length)] : '#ffffff';
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Quantum effect lines
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-particle.size * 3, -particle.size * 3);
          ctx.lineTo(particle.size * 3, particle.size * 3);
          ctx.moveTo(-particle.size * 3, particle.size * 3);
          ctx.lineTo(particle.size * 3, -particle.size * 3);
          ctx.stroke();
        } else if (particle.type === 'quantum') {
          // Quantum particle with entanglement visualization
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Entanglement lines
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(particle.entanglement[0] * 50, particle.entanglement[1] * 50);
          ctx.stroke();
        } else if (particle.type === 'neon') {
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 25;
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        } else if (particle.type === 'wave') {
          // Wave effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.moveTo(-particle.size * 2, 0);
          ctx.lineTo(particle.size * 2, 0);
          ctx.stroke();
        } else {
          // Standard particle
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        }

        ctx.restore();
      });

      // Add quantum field interference patterns
      if (theme === 'quantum-neon') {
        ctx.globalAlpha = 0.1;
        for (let i = 0; i < 5; i++) {
          const waveX = centerX + Math.sin(time + i) * 100;
          const waveY = centerY + Math.cos(time + i) * 100;
          
          ctx.strokeStyle = colors.neon ? colors.neon[i % colors.neon.length] : colors.primary[i % colors.primary.length];
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(waveX, waveY, 50 + Math.sin(time * 2 + i) * 20, 0, Math.PI * 2);
          ctx.stroke();
        }
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
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30" />
      
      {/* Quantum grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Neon accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {children}
    </div>
  );
}