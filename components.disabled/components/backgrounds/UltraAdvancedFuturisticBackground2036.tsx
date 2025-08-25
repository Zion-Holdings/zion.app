import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2036Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space';
  interactive?: boolean;
  children?: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2036({ 
  intensity = 'medium', 
  theme = 'quantum',
  interactive = true,
  children
}: UltraAdvancedFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
            accent: ['#ffff40', '#ff40ff', '#8040ff', '#40ff80', '#ff8040'],
            glow: ['#ff1493', '#00bfff', '#ffd700', '#ff4500', '#9400d3']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff9f43', '#10ac84'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4'],
            glow: ['#ff1493', '#00bfff', '#ffd700', '#ff4500', '#9400d3']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#8040ff', '#40ff80', '#ff8040'],
            glow: ['#ff1493', '#00bfff', '#ffd700', '#ff4500', '#9400d3']
          };
        case 'space':
          return {
            primary: ['#1e3a8a', '#7c3aed', '#059669', '#dc2626', '#ea580c'],
            secondary: ['#3b82f6', '#a855f7', '#10b981', '#ef4444', '#f97316'],
            accent: ['#60a5fa', '#c084fc', '#34d399', '#f87171', '#fb923c'],
            glow: ['#93c5fd', '#d8b4fe', '#6ee7b7', '#fca5a5', '#fdba74']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
            glow: ['#a78bfa', '#22d3ee', '#f472b6', '#34d399', '#fbbf24']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with multiple types
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'energy' | 'data';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      connectionTargets: number[];
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 300);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.2 ? 'quantum' : 
                           Math.random() < 0.3 ? 'wave' : 
                           Math.random() < 0.4 ? 'neon' : 
                           Math.random() < 0.5 ? 'hologram' :
                           Math.random() < 0.6 ? 'energy' :
                           Math.random() < 0.7 ? 'data' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 200,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.05 + 0.02,
          connectionTargets: []
        });
      }
    };

    // Initialize connections between particles
    const initConnections = () => {
      particles.forEach((particle, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * particles.length);
          if (targetIndex !== i && !particle.connectionTargets.includes(targetIndex)) {
            particle.connectionTargets.push(targetIndex);
          }
        }
      });
    };

    // Update particles
    const updateParticles = () => {
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;

        // Update life
        particle.life++;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Mouse interaction
        if (interactive && isHovered) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += (dx / distance) * force * 0.1;
            particle.vy += (dy / distance) * force * 0.1;
          }
        }
      });
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first
      particles.forEach((particle) => {
        particle.connectionTargets.forEach((targetIndex) => {
          const target = particles[targetIndex];
          if (target) {
            const distance = Math.sqrt(
              Math.pow(particle.x - target.x, 2) + Math.pow(particle.y - target.y, 2)
            );
            if (distance < 150) {
              const opacity = Math.max(0, (150 - distance) / 150) * 0.3;
              ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        const pulseOpacity = Math.sin(particle.pulse) * 0.3 + 0.7;
        const finalOpacity = particle.opacity * pulseOpacity;

        switch (particle.type) {
          case 'quantum':
            // Draw quantum particle
            ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Quantum glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = particle.size * 3;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'wave':
            // Draw wave particle
            ctx.strokeStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 10; i++) {
              const x = (i - 5) * particle.size * 0.5;
              const y = Math.sin(i * 0.5 + particle.pulse) * particle.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
            break;

          case 'hologram':
            // Draw hologram particle
            ctx.strokeStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.rect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            break;

          case 'energy':
            // Draw energy particle
            ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size * 0.5, particle.size * 0.5);
            ctx.lineTo(-particle.size * 0.5, particle.size * 0.5);
            ctx.closePath();
            ctx.fill();
            break;

          case 'data':
            // Draw data particle
            ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.fillRect(-particle.size * 0.5, -particle.size * 0.5, particle.size, particle.size);
            break;

          default:
            // Draw regular particle
            ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
      });
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    initConnections();
    animate();

    // Mouse event handlers
    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      };

      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resizeCanvas);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme, interactive, mousePosition.x, mousePosition.y, isHovered]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/5 to-blue-500/5" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(59,130,246,0.3)_100%)] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(147,51,234,0.3)_100%)] bg-[length:50px_50px]" />
        </div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}