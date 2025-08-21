import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'quantum-neural' | 'holographic-cyber';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glow?: boolean;
  particleEffect?: boolean;
}

const QuantumCard: React.FC<QuantumCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  interactive = true,
  glow = true,
  particleEffect = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!particleEffect || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resizeCanvas = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();

    // Quantum particle system
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      quantumState: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 0.5;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.quantumState = Math.random() * Math.PI * 2;
        
        switch (variant) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 90%, 80%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'cyber':
            this.color = `hsl(${0 + Math.random() * 60}, 90%, 80%)`;
            break;
          case 'quantum-neural':
            this.color = `hsl(${160 + Math.random() * 40}, 85%, 75%)`;
            break;
          case 'holographic-cyber':
            this.color = `hsl(${320 + Math.random() * 40}, 85%, 75%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.quantumState += 0.1;

        // Quantum tunneling
        if (variant === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.globalAlpha = this.life / this.maxLife;

        if (variant === 'quantum') {
          // Quantum wave function
          const waveSize = this.size * (1 + Math.sin(this.quantumState * 2) * 0.3);
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveSize, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else if (variant === 'holographic') {
          // Holographic geometric shapes
          const sides = 6;
          const angle = (Math.PI * 2) / sides;
          ctx.beginPath();
          ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
          for (let i = 1; i <= sides; i++) {
            ctx.lineTo(
              this.x + this.size * Math.cos(i * angle),
              this.y + this.size * Math.sin(i * angle)
            );
          }
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
        } else {
          // Standard particles
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles: QuantumParticle[] = [];
    const particleCount = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new QuantumParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.life <= 0) {
          particles[index] = new QuantumParticle();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, particleEffect]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-cyan-400'
        };
      case 'holographic':
        return {
          border: 'from-purple-500 to-pink-600',
          glow: 'shadow-purple-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-purple-400'
        };
      case 'neural':
        return {
          border: 'from-green-500 to-emerald-600',
          glow: 'shadow-green-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-green-400'
        };
      case 'cyber':
        return {
          border: 'from-red-500 to-orange-600',
          glow: 'shadow-red-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-red-400'
        };
      case 'quantum-neural':
        return {
          border: 'from-teal-500 to-green-600',
          glow: 'shadow-teal-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-teal-400'
        };
      case 'holographic-cyber':
        return {
          border: 'from-fuchsia-500 to-purple-600',
          glow: 'shadow-fuchsia-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-fuchsia-400'
        };
      default:
        return {
          border: 'from-cyan-500 to-blue-600',
          glow: 'shadow-cyan-500/50',
          bg: 'from-slate-900/80 to-slate-800/80',
          accent: 'text-cyan-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={interactive ? 0 : -1}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileFocus={interactive ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Particle effect canvas */}
      {particleEffect && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Main card content */}
      <div
        className={`
          relative z-10 p-6 rounded-xl backdrop-blur-xl
          bg-gradient-to-br ${styles.bg}
          border border-transparent
          ${glow ? `shadow-2xl ${styles.glow}` : ''}
          ${interactive ? 'cursor-pointer' : ''}
          transition-all duration-300 ease-out
          ${isHovered || isFocused ? 'border-opacity-100' : 'border-opacity-0'}
        `}
        style={{
          backgroundImage: `linear-gradient(135deg, ${styles.bg})`,
          borderImage: `linear-gradient(135deg, ${styles.border}) 1`,
        }}
      >
        {/* Holographic border effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div
            className={`
              absolute inset-0 rounded-xl
              bg-gradient-to-r ${styles.border}
              opacity-0 transition-opacity duration-300
              ${isHovered || isFocused ? 'opacity-20' : ''}
            `}
          />
        </div>

        {/* Quantum interference pattern */}
        {variant === 'quantum' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(138,43,226,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}

        {/* Holographic scan lines */}
        {variant === 'holographic' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"
                style={{
                  top: `${(i * 100) / 10}%`,
                  animation: `scan ${2 + i * 0.1}s linear infinite`
                }}
              />
            ))}
          </div>
        )}

        {/* Neural network overlay */}
        {variant === 'neural' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,0,0.1)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        )}

        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>

        {/* Interactive glow effect */}
        {interactive && glow && (
          <div
            className={`
              absolute inset-0 rounded-xl
              bg-gradient-to-r ${styles.border}
              opacity-0 transition-opacity duration-300
              ${isHovered || isFocused ? 'opacity-10' : ''}
            `}
          />
        )}
      </div>

      {/* Floating particles */}
      <AnimatePresence>
        {isHovered && particleEffect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-2 -right-2 w-4 h-4"
          >
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${styles.border} animate-ping`} />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  );
};

export default QuantumCard;