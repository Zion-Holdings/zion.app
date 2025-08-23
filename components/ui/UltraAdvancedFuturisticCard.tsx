import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Brain, Atom, Eye, Shield, Rocket, Star } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum' | 'quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  glowColor?: string;
  interactive?: boolean;
  floating?: boolean;
  quantum?: boolean;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  glowColor,
  interactive = true,
  floating = true,
  quantum = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  // Get variant-specific properties
  const getVariantProperties = () => {
    switch (variant) {
      case 'quantum':
        return {
          borderColor: 'from-cyan-400 via-blue-500 to-cyan-400',
          glowColor: 'rgba(0, 255, 255, 0.6)',
          accentColor: 'from-cyan-400 to-blue-500',
          icon: <Atom className="w-5 h-5" />
        };
      case 'holographic':
        return {
          borderColor: 'from-purple-400 via-pink-500 to-purple-400',
          glowColor: 'rgba(139, 92, 246, 0.6)',
          accentColor: 'from-purple-400 to-pink-500',
          icon: <Eye className="w-5 h-5" />
        };
      case 'neural':
        return {
          borderColor: 'from-green-400 via-emerald-500 to-green-400',
          glowColor: 'rgba(16, 185, 129, 0.6)',
          accentColor: 'from-green-400 to-emerald-500',
          icon: <Brain className="w-5 h-5" />
        };
      case 'cyberpunk':
        return {
          borderColor: 'from-yellow-400 via-orange-500 to-yellow-400',
          glowColor: 'rgba(245, 158, 11, 0.6)',
          accentColor: 'from-yellow-400 to-orange-500',
          icon: <Zap className="w-5 h-5" />
        };
      case 'quantum-entanglement':
        return {
          borderColor: 'from-cyan-400 via-purple-500 to-pink-400',
          glowColor: 'rgba(0, 255, 255, 0.8)',
          accentColor: 'from-cyan-400 via-purple-500 to-pink-400',
          icon: <Sparkles className="w-5 h-5" />
        };
      case 'holographic-matrix':
        return {
          borderColor: 'from-purple-400 via-cyan-500 to-green-400',
          glowColor: 'rgba(139, 92, 246, 0.8)',
          accentColor: 'from-purple-400 via-cyan-500 to-green-400',
          icon: <Shield className="w-5 h-5" />
        };
      case 'neural-quantum':
        return {
          borderColor: 'from-green-400 via-cyan-500 to-blue-400',
          glowColor: 'rgba(16, 185, 129, 0.8)',
          accentColor: 'from-green-400 via-cyan-500 to-blue-400',
          icon: <Rocket className="w-5 h-5" />
        };
      case 'quantum-cyberpunk':
        return {
          borderColor: 'from-cyan-400 via-yellow-500 to-orange-400',
          glowColor: 'rgba(0, 255, 255, 0.8)',
          accentColor: 'from-cyan-400 via-yellow-500 to-orange-400',
          icon: <Star className="w-5 h-5" />
        };
      default:
        return {
          borderColor: 'from-cyan-400 via-blue-500 to-cyan-400',
          glowColor: 'rgba(0, 255, 255, 0.6)',
          accentColor: 'from-cyan-400 to-blue-500',
          icon: <Atom className="w-5 h-5" />
        };
    }
  };

  const variantProps = getVariantProperties();
  const finalGlowColor = glowColor || variantProps.glowColor;

  // Intensity multipliers
  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5,
    extreme: 2
  };

  const intensityValue = intensityMultiplier[intensity];

  // Quantum particle system
  useEffect(() => {
    if (!quantum || !particlesRef.current) return;

    const canvas = particlesRef.current;
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

    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: QuantumParticle[] = [];
    for (let i = 0; i < 20; i++) {
      particles.push(new QuantumParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
          particles[index] = new QuantumParticle();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [quantum, variant]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={interactive ? 0 : -1}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Quantum Particle Canvas */}
      {quantum && (
        <canvas
          ref={particlesRef}
          className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Main Card Container */}
      <motion.div
        className={`
          relative z-10 p-6 rounded-xl backdrop-blur-xl
          bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80
          border border-transparent
          ${interactive ? 'cursor-pointer' : ''}
          ${floating ? 'shadow-2xl' : ''}
        `}
        style={{
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(17,24,39,0.6) 50%, rgba(0,0,0,0.8) 100%)
          `,
          borderImage: `linear-gradient(135deg, ${variantProps.borderColor}) 1`,
          boxShadow: `
            0 0 20px ${finalGlowColor},
            0 0 40px ${finalGlowColor}40,
            0 0 60px ${finalGlowColor}20,
            inset 0 0 20px ${finalGlowColor}10
          `
        }}
        whileHover={interactive ? {
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        } : {}}
        whileTap={interactive ? {
          scale: 0.98,
          transition: { duration: 0.1 }
        } : {}}
        animate={floating ? {
          y: [0, -10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      >
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Quantum Energy Field */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-radial from-transparent via-transparent to-transparent"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${finalGlowColor}20 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural Network Grid */}
        <div className="absolute inset-0 rounded-xl opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Variant Icon */}
        <motion.div
          className="absolute top-4 right-4 text-cyan-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {variantProps.icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>

        {/* Interactive Glow Effect */}
        <AnimatePresence>
          {(isHovered || isFocused) && interactive && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Quantum Entanglement Lines */}
        {variant === 'quantum-entanglement' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 100}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic Matrix Effect */}
        {variant === 'holographic-matrix' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* External Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-xl opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${finalGlowColor}, transparent 70%)`,
          zIndex: -1
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;