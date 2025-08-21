import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'space' | 'biotech' | 'energy';
  intensity?: 'low' | 'medium' | 'high';
  glow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'neural',
  intensity = 'medium',
  glow = true,
  interactive = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Get variant-specific colors and effects
  const getVariantStyles = () => {
    switch (variant) {
      case 'neural':
        return {
          borderColor: 'from-cyan-500/50 to-blue-500/50',
          glowColor: 'from-cyan-400/20 to-blue-400/20',
          accentColor: 'text-cyan-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#60a5fa'
        };
      case 'quantum':
        return {
          borderColor: 'from-purple-500/50 to-pink-500/50',
          glowColor: 'from-purple-400/20 to-pink-400/20',
          accentColor: 'text-purple-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#a855f7'
        };
      case 'holographic':
        return {
          borderColor: 'from-green-500/50 to-emerald-500/50',
          glowColor: 'from-green-400/20 to-emerald-400/20',
          accentColor: 'text-green-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#10b981'
        };
      case 'cyberpunk':
        return {
          borderColor: 'from-red-500/50 to-orange-500/50',
          glowColor: 'from-red-400/20 to-orange-400/20',
          accentColor: 'text-red-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#ef4444'
        };
      case 'space':
        return {
          borderColor: 'from-blue-500/50 to-indigo-500/50',
          glowColor: 'from-blue-400/20 to-indigo-400/20',
          accentColor: 'text-blue-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#3b82f6'
        };
      case 'biotech':
        return {
          borderColor: 'from-green-500/50 to-teal-500/50',
          glowColor: 'from-green-400/20 to-teal-400/20',
          accentColor: 'text-green-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#14b8a6'
        };
      case 'energy':
        return {
          borderColor: 'from-yellow-500/50 to-orange-500/50',
          glowColor: 'from-yellow-400/20 to-orange-400/20',
          accentColor: 'text-yellow-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#eab308'
        };
      default:
        return {
          borderColor: 'from-cyan-500/50 to-blue-500/50',
          glowColor: 'from-cyan-400/20 to-blue-400/20',
          accentColor: 'text-cyan-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#60a5fa'
        };
    }
  };

  const styles = getVariantStyles();

  // Canvas animation for particle effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !glow) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      const count = intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 6;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    const animate = () => {
      time += 1;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `${styles.particleColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity, glow, styles.particleColor]);

  const handleMouseEnter = () => {
    if (interactive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (interactive) setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (interactive) setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (interactive) setIsPressed(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300 ${
        glow ? 'shadow-2xl' : ''
      } ${className}`}
      style={{
        background: `linear-gradient(135deg, ${styles.bgGradient})`,
        border: `1px solid transparent`,
        backgroundImage: `linear-gradient(135deg, ${styles.bgGradient}), linear-gradient(135deg, ${styles.borderColor})`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      whileHover={interactive ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={interactive ? { 
        scale: 0.98,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* Glow effect */}
      {glow && (
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${styles.glowColor} opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />
      )}

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl">
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.borderColor} opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${styles.particleColor}, transparent)`,
            backgroundSize: '200% 100%',
            animation: isHovered ? 'borderFlow 2s linear infinite' : 'none'
          }}
        />
      </div>

      {/* Scanning line effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${styles.accentColor.replace('text-', '')} to-transparent opacity-60`}
            style={{
              boxShadow: `0 0 10px ${styles.particleColor}`
            }}
          />
        )}
      </AnimatePresence>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg" />

      {/* Particle canvas */}
      {glow && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Press effect */}
      <AnimatePresence>
        {isPressed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes borderFlow {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default EnhancedFuturisticCard;