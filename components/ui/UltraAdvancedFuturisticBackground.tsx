import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'futuristic' | 'neural' | 'cosmic' | 'quantum-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableGlitch?: boolean;
  enableHologram?: boolean;
  enableQuantum?: boolean;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  enableGlitch = true,
  enableHologram = true,
  enableQuantum = true,
  enableHolographic = false,
  enableQuantumEffects = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced color schemes
  const colorSchemes = {
    quantum: {
      primary: 'from-cyan-400 via-blue-500 to-purple-600',
      secondary: 'from-emerald-400 via-teal-500 to-cyan-600',
      accent: 'from-pink-400 via-rose-500 to-orange-600',
      particle: '#00ffff',
      glow: '#00ffff',
      matrix: '#00ff41',
      hologram: '#ff00ff'
    },
    neon: {
      primary: 'from-pink-400 via-purple-500 to-indigo-600',
      secondary: 'from-cyan-400 via-blue-500 to-purple-600',
      accent: 'from-green-400 via-emerald-500 to-teal-600',
      particle: '#ff00ff',
      glow: '#ff00ff',
      matrix: '#00ff41',
      hologram: '#00ffff'
    },
    holographic: {
      primary: 'from-indigo-400 via-purple-500 to-pink-600',
      secondary: 'from-cyan-400 via-teal-500 to-emerald-600',
      accent: 'from-yellow-400 via-orange-500 to-red-600',
      particle: '#8b5cf6',
      glow: '#8b5cf6',
      matrix: '#00ff41',
      hologram: '#ff00ff'
    },
    cyberpunk: {
      primary: 'from-red-400 via-pink-500 to-purple-600',
      secondary: 'from-yellow-400 via-orange-500 to-red-600',
      accent: 'from-cyan-400 via-blue-500 to-indigo-600',
      particle: '#ef4444',
      glow: '#ef4444',
      matrix: '#00ff41',
      hologram: '#ff00ff'
    },
    futuristic: {
      primary: 'from-slate-400 via-gray-500 to-zinc-600',
      secondary: 'from-blue-400 via-indigo-500 to-purple-600',
      accent: 'from-emerald-400 via-teal-500 to-cyan-600',
      particle: '#3b82f6',
      glow: '#3b82f6',
      matrix: '#00ff41',
      hologram: '#00ffff'
    }
  };

  const currentColors = colorSchemes[colorScheme];

  // Intensity multipliers
  const intensityMultipliers = {
    low: { particles: 0.5, speed: 0.5, glow: 0.3 },
    medium: { particles: 0.75, speed: 0.75, glow: 0.5 },
    high: { particles: 1, speed: 1, glow: 0.8 },
    extreme: { particles: 1.5, speed: 1.5, glow: 1.2 }
  };

  const currentIntensity = intensityMultipliers[intensity];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'hologram' | 'matrix' | 'neural';
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount * currentIntensity.particles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * currentIntensity.speed,
        vy: (Math.random() - 0.5) * 2 * currentIntensity.speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: currentColors.particle,
        type: Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'hologram' : 'matrix'
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Enhanced background gradient
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Quantum effects
        if (enableQuantum && particle.type === 'quantum') {
          ctx.shadowColor = currentColors.glow;
          ctx.shadowBlur = 20 * currentIntensity.glow;
          ctx.fillStyle = currentColors.particle;
        }
        // Holographic effects
        else if (enableHolographic && particle.type === 'hologram') {
          ctx.shadowColor = currentColors.hologram;
          ctx.shadowBlur = 15 * currentIntensity.glow;
          ctx.fillStyle = currentColors.hologram;
        }
        // Matrix effects
        else {
          ctx.shadowColor = currentColors.matrix;
          ctx.shadowBlur = 10 * currentIntensity.glow;
          ctx.fillStyle = currentColors.matrix;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.save();
            ctx.globalAlpha = (80 - distance) / 80 * 0.3;
            ctx.strokeStyle = currentColors.particle;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Glitch effect
      if (enableGlitch && Math.random() > 0.995) {
        ctx.save();
        ctx.globalCompositeOperation = 'difference';
        ctx.fillStyle = currentColors.glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, animationSpeed, enableGlitch, enableHolographic, enableQuantum, currentIntensity, currentColors]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(0, 0, 0, 0.9) 100%)'
        }}
      />

      {/* Enhanced Overlay Effects */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Quantum Field Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                style={{
                  left: `${(i * 5) % 100}%`,
                  animationDelay: `${i * 0.1}s`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>

          {/* Holographic Grid */}
          {enableHolographic && (
            <div className="absolute inset-0 opacity-10">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  style={{
                    top: `${(i * 7) % 100}%`,
                    animationDelay: `${i * 0.15}s`
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;