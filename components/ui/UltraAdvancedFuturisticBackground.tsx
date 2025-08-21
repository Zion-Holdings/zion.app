import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'futuristic';
  particleCount?: number;
  animationSpeed?: number;
  enableGlitch?: boolean;
  enableHologram?: boolean;
  enableQuantum?: boolean;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  enableGlitch = true,
  enableHologram = true,
  enableQuantum = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Color schemes
  const colorSchemes = {
    quantum: {
      primary: 'from-cyan-400 via-blue-500 to-purple-600',
      secondary: 'from-emerald-400 via-teal-500 to-cyan-600',
      accent: 'from-pink-400 via-rose-500 to-orange-600',
      particle: '#00ffff',
      glow: '#00ffff'
    },
    neon: {
      primary: 'from-pink-400 via-purple-500 to-indigo-600',
      secondary: 'from-cyan-400 via-blue-500 to-purple-600',
      accent: 'from-green-400 via-emerald-500 to-teal-600',
      particle: '#ff00ff',
      glow: '#ff00ff'
    },
    holographic: {
      primary: 'from-indigo-400 via-purple-500 to-pink-600',
      secondary: 'from-cyan-400 via-teal-500 to-emerald-600',
      accent: 'from-yellow-400 via-orange-500 to-red-600',
      particle: '#8b5cf6',
      glow: '#8b5cf6'
    },
    cyberpunk: {
      primary: 'from-red-400 via-pink-500 to-purple-600',
      secondary: 'from-yellow-400 via-orange-500 to-red-600',
      accent: 'from-cyan-400 via-blue-500 to-indigo-600',
      particle: '#ef4444',
      glow: '#ef4444'
    },
    futuristic: {
      primary: 'from-slate-400 via-gray-500 to-zinc-600',
      secondary: 'from-blue-400 via-indigo-500 to-purple-600',
      accent: 'from-emerald-400 via-teal-500 to-cyan-600',
      particle: '#3b82f6',
      glow: '#3b82f6'
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
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'hologram' | 'neon';
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount * currentIntensity.particles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed * currentIntensity.speed,
        vy: (Math.random() - 0.5) * 2 * animationSpeed * currentIntensity.speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: currentColors.particle,
        type: Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'hologram' : 'neon'
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
        
        if (distance < 100 && isHovering) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'quantum') {
          // Quantum particle effect
          ctx.shadowColor = currentColors.glow;
          ctx.shadowBlur = 20 * currentIntensity.glow;
          ctx.fillStyle = currentColors.particle;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Quantum trail
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.strokeStyle = currentColors.particle;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        } else if (particle.type === 'hologram') {
          // Hologram particle effect
          ctx.strokeStyle = currentColors.particle;
          ctx.lineWidth = particle.size * 0.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.stroke();
          
          // Hologram grid
          ctx.globalAlpha = particle.opacity * 0.2;
          ctx.beginPath();
          ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          ctx.stroke();
        } else {
          // Neon particle effect
          ctx.shadowColor = currentColors.glow;
          ctx.shadowBlur = 15 * currentIntensity.glow;
          ctx.fillStyle = currentColors.particle;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Draw connection lines between nearby particles
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = currentColors.particle;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, animationSpeed, currentIntensity, currentColors, mousePosition, isHovering]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${currentColors.primary})`,
        }}
      />

      {/* Animated Grid Overlay */}
      {enableHologram && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-l border-cyan-400/30"
                style={{ left: `${(i * 100) / 20}%` }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scaleY: [0, 1, 0],
                  transition: {
                    duration: 3 + i * 0.1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-t border-cyan-400/30"
                style={{ top: `${(i * 100) / 15}%` }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scaleX: [0, 1, 0],
                  transition: {
                    duration: 3 + i * 0.1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quantum Fluctuation Effects */}
      {enableQuantum && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                transition: {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }
              }}
            />
          ))}
        </div>
      )}

      {/* Glitch Effect Overlay */}
      {enableGlitch && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{
              x: ['-100%', '100%'],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 5
              }
            }}
          />
        </div>
      )}

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-16 border-2 border-cyan-400/30 ${
              i % 2 === 0 ? 'rotate-45' : 'rotate-0'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            initial={{ 
              opacity: 0, 
              rotate: 0, 
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.3, 0],
              rotate: [0, 360],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              transition: {
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5
              }
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>

      {/* Ambient Light Effects */}
      <div className="fixed inset-0 z-60 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;