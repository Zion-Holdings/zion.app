import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'quantum-holographic' | 'neural-cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  interactive?: boolean;
  glow?: boolean;
  floating?: boolean;
  border?: boolean;
  background?: boolean;
  onClick?: () => void;
}

const AdvancedFuturisticCard: React.FC<AdvancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum-holographic',
  intensity = 'medium',
  interactive = true,
  glow = true,
  floating = true,
  border = true,
  background = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400'
        };
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-purple-900/20 to-indigo-900/20',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          text: 'text-purple-400'
        };
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20',
          text: 'text-emerald-400'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-red-900/20 to-orange-900/20',
          border: 'border-red-500/30',
          glow: 'shadow-red-500/20',
          text: 'text-red-400'
        };
      case 'quantum-holographic':
        return {
          bg: 'bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20 shadow-purple-500/20',
          text: 'text-cyan-400'
        };
      case 'neural-cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-emerald-900/20 via-red-900/20 to-teal-900/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20 shadow-red-500/20',
          text: 'text-emerald-400'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-900/20 to-slate-900/20',
          border: 'border-gray-500/30',
          glow: 'shadow-gray-500/20',
          text: 'text-gray-400'
        };
    }
  };

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'extreme': return 2.0;
      case 'high': return 1.5;
      case 'medium': return 1.0;
      case 'low': return 0.5;
      default: return 1.0;
    }
  };

  const styles = getVariantStyles();
  const intensityMultiplier = getIntensityMultiplier();

  // Canvas animation for quantum effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !background) return;

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
      color: string;
    }> = [];

    // Create particles
    const particleCount = Math.floor(20 * intensityMultiplier);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        life: Math.random() * 100,
        maxLife: 100,
        color: styles.text
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Render particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [background, intensityMultiplier, styles.text]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovered(false);
  };

  const handleFocus = () => {
    if (!interactive) return;
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!interactive) return;
    setIsFocused(false);
  };

  const getTransform = () => {
    if (!interactive) return {};
    
    const isActive = isHovered || isFocused;
    const intensity = isActive ? intensityMultiplier : 1;
    
    if (floating) {
      return {
        y: isActive ? -8 * intensity : 0,
        rotateX: isActive ? (mousePosition.y - 150) * 0.01 * intensity : 0,
        rotateY: isActive ? (mousePosition.x - 150) * 0.01 * intensity : 0,
        scale: isActive ? 1.02 * intensity : 1,
      };
    }
    
    return {
      scale: isActive ? 1.02 * intensity : 1,
    };
  };

  const getGlowEffect = () => {
    if (!glow) return {};
    
    const isActive = isHovered || isFocused;
    const intensity = isActive ? intensityMultiplier : 0.5;
    
    return {
      boxShadow: isActive 
        ? `0 0 30px ${intensity * 2}px ${styles.glow.replace('shadow-', '').replace('/20', '')}`
        : `0 0 20px ${intensity}px ${styles.glow.replace('shadow-', '').replace('/20', '')}`
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${
        background ? styles.bg : ''
      } ${border ? `border ${styles.border}` : ''} ${className}`}
      style={{
        ...getGlowEffect(),
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={getTransform()}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={interactive ? 0 : -1}
      onClick={onClick}
    >
      {/* Background Canvas */}
      {background && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        />
      )}

      {/* Holographic Border Effect */}
      {border && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className={`absolute inset-0 rounded-2xl ${
              isHovered || isFocused 
                ? 'bg-gradient-to-r from-transparent via-current to-transparent opacity-20' 
                : 'opacity-0'
            } transition-opacity duration-500`}
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.text}, transparent)`,
              animation: isHovered || isFocused ? 'holographic-sweep 2s linear infinite' : 'none'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Quantum Energy Field */}
      {intensity === 'extreme' && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${styles.text}, transparent)`,
              animation: 'quantum-pulse 3s ease-in-out infinite'
            }}
          />
        </div>
      )}

      {/* Neural Network Overlay */}
      {variant.includes('neural') && intensity !== 'low' && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={styles.text}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>
      )}

      {/* Holographic Layers */}
      {variant.includes('holographic') && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          {[1, 2, 3].map((layer) => (
            <div
              key={layer}
              className={`absolute inset-0 rounded-2xl border border-current opacity-5`}
              style={{
                transform: `translateZ(${layer * 10}px)`,
                animation: `holographic-layer-${layer} ${4 + layer}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes holographic-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes quantum-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes holographic-layer-1 {
          0%, 100% { opacity: 0.05; transform: translateZ(10px) rotateY(0deg); }
          50% { opacity: 0.1; transform: translateZ(10px) rotateY(5deg); }
        }
        
        @keyframes holographic-layer-2 {
          0%, 100% { opacity: 0.03; transform: translateZ(20px) rotateY(0deg); }
          50% { opacity: 0.08; transform: translateZ(20px) rotateY(-3deg); }
        }
        
        @keyframes holographic-layer-3 {
          0%, 100% { opacity: 0.02; transform: translateZ(30px) rotateY(0deg); }
          50% { opacity: 0.06; transform: translateZ(30px) rotateY(2deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default AdvancedFuturisticCard;