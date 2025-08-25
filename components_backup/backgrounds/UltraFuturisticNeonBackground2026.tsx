import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticNeonBackground2026Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'neon' | 'cyberpunk' | 'holographic' | 'quantum-neon';
  children?: React.ReactNode;
}

export default function UltraFuturisticNeonBackground2026({ 
  intensity = 'medium', 
  theme = 'neon',
  children
}: UltraFuturisticNeonBackground2026Props) {
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

    // Enhanced neon color schemes
    const getNeonColors = () => {
      switch (theme) {
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4'],
            neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
          };
        case 'quantum-neon':
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            accent: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
            neon: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
          };
        default: // neon
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#8040ff'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
          };
      }
    };

    const colors = getNeonColors();

    // Enhanced particle system with neon effects
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'neon' | 'particle' | 'wave' | 'quantum' | 'hologram';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      glow: number;
      pulse: number;
      trail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.4 ? 'neon' : 
                           Math.random() < 0.6 ? 'hologram' : 
                           Math.random() < 0.8 ? 'quantum' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.neon[Math.floor(Math.random() * colors.neon.length)],
          type: particleType,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          glow: Math.random() * 20 + 10,
          pulse: Math.random() * 0.1 + 0.05,
          trail: []
        });
      }
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    let baseCount: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life--;
        particle.glow += Math.sin(Date.now() * particle.pulse) * 2;

        // Add trail effect
        particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // Draw trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * 0.5;
          ctx.save();
          ctx.globalAlpha = trailOpacity;
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.glow * 0.5;
          ctx.beginPath();
          ctx.arc(trailPoint.x, trailPoint.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.glow;

        if (particle.type === 'neon') {
          // Neon particle with glow effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Additional glow rings
          for (let i = 1; i <= 3; i++) {
            ctx.globalAlpha = particle.opacity * (0.3 / i);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size + i * 2, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'hologram') {
          // Holographic particle
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
          ctx.stroke();
        } else if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Wave rings
          for (let i = 1; i <= 2; i++) {
            ctx.globalAlpha = particle.opacity * (0.2 / i);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size + i * 4, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else {
          // Regular particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Add new particles if needed
      if (particles.length < Math.floor(baseCount * intensityMultiplier * 0.8)) {
        initParticles();
      }

      // Draw neon grid lines
      if (theme === 'cyberpunk' || theme === 'neon') {
        ctx.save();
        ctx.strokeStyle = colors.neon[0];
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.1;
        ctx.shadowColor = colors.neon[0];
        ctx.shadowBlur = 5;

        // Vertical lines
        for (let x = 0; x < canvas.width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y < canvas.height; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initialize baseCount and particles
    const isSmallScreen = window.innerWidth < 768;
    baseCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
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
          background: theme === 'cyberpunk' ? 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' :
                     theme === 'holographic' ? 'radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)' :
                     theme === 'quantum-neon' ? 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)' :
                     'radial-gradient(ellipse at center, #000000 0%, #0a0a0a 100%)'
        }}
      />
      
      {/* Additional neon overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          animate={{
            boxShadow: [
              '0 0 20px rgba(34, 211, 238, 0.5)',
              '0 0 40px rgba(34, 211, 238, 0.8)',
              '0 0 20px rgba(34, 211, 238, 0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-30"
          animate={{
            boxShadow: [
              '0 0 20px rgba(236, 72, 153, 0.5)',
              '0 0 40px rgba(236, 72, 153, 0.8)',
              '0 0 20px rgba(236, 72, 153, 0.5)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {children}
    </div>
  );
}