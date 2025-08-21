import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowEffect?: boolean;
  particleEffect?: boolean;
  borderAnimation?: boolean;
  backgroundPattern?: boolean;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  theme = 'quantum',
  intensity = 'medium',
  interactive = true,
  glowEffect = true,
  particleEffect = true,
  borderAnimation = true,
  backgroundPattern = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle system for enhanced effects
  useEffect(() => {
    if (!particleEffect || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = intensity === 'low' ? 20 : intensity === 'medium' ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
        life: Math.random() * 100 + 50,
        maxLife: 150,
        color: getThemeColor(theme)
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1,
            life: Math.random() * 100 + 50,
            maxLife: 150,
            color: getThemeColor(theme)
          };
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleEffect, intensity, theme]);

  const getThemeColor = (theme: string): string => {
    const colors = {
      quantum: ['#00ffff', '#0080ff', '#8000ff'],
      cyberpunk: ['#ff0066', '#00ffff', '#ffff00'],
      neural: ['#00ff88', '#0088ff', '#8800ff'],
      holographic: ['#ff00ff', '#00ffff', '#ffff00']
    };
    return colors[theme as keyof typeof colors]?.[Math.floor(Math.random() * 3)] || '#00ffff';
  };

  const getThemeClasses = (theme: string) => {
    const baseClasses = {
      quantum: {
        bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
        border: 'border-cyan-500/30',
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
        text: 'text-cyan-400'
      },
      cyberpunk: {
        bg: 'bg-gradient-to-br from-gray-900 via-red-900 to-pink-900',
        border: 'border-pink-500/30',
        glow: 'shadow-[0_0_30px_rgba(255,0,102,0.3)]',
        text: 'text-pink-400'
      },
      neural: {
        bg: 'bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900',
        border: 'border-emerald-500/30',
        glow: 'shadow-[0_0_30px_rgba(0,255,136,0.3)]',
        text: 'text-emerald-400'
      },
      holographic: {
        bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900',
        border: 'border-purple-500/30',
        glow: 'shadow-[0_0_30px_rgba(255,0,255,0.3)]',
        text: 'text-purple-400'
      }
    };
    return baseClasses[theme as keyof typeof baseClasses] || baseClasses.quantum;
  };

  const themeClasses = getThemeClasses(theme);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl backdrop-blur-sm ${themeClasses.bg} ${themeClasses.border} border ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Particle canvas background */}
      {particleEffect && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        />
      )}

      {/* Background pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 ${getBackgroundPattern(theme)}`} />
        </div>
      )}

      {/* Animated border */}
      {borderAnimation && (
        <motion.div
          className={`absolute inset-0 rounded-xl border-2 ${themeClasses.border}`}
          animate={{
            boxShadow: isHovered || isFocused 
              ? `0 0 40px ${getGlowColor(theme)}` 
              : `0 0 20px ${getGlowColor(theme)}`
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hover effects */}
      <AnimatePresence>
        {isHovered && interactive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50 rounded-br-xl" />

      {/* Glow effect */}
      {glowEffect && (
        <motion.div
          className={`absolute inset-0 rounded-xl ${themeClasses.glow}`}
          animate={{
            opacity: isHovered || isFocused ? 0.8 : 0.3
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

// Helper functions
function getBackgroundPattern(theme: string): string {
  switch (theme) {
    case 'quantum':
      return 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]';
    case 'cyberpunk':
      return 'bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,102,0.1)_25%,rgba(255,0,102,0.1)_75%,transparent_75%)] bg-[length:20px_20px]';
    case 'neural':
      return 'bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[length:30px_30px]';
    case 'holographic':
      return 'bg-[linear-gradient(90deg,transparent_50%,rgba(255,0,255,0.1)_50%)] bg-[length:25px_25px]';
    default:
      return 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]';
  }
}

function getGlowColor(theme: string): string {
  switch (theme) {
    case 'quantum':
      return 'rgba(0,255,255,0.4)';
    case 'cyberpunk':
      return 'rgba(255,0,102,0.4)';
    case 'neural':
      return 'rgba(0,255,136,0.4)';
    case 'holographic':
      return 'rgba(255,0,255,0.4)';
    default:
      return 'rgba(0,255,255,0.4)';
  }
}

export default EnhancedFuturisticCard;