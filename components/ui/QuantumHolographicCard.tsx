import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface QuantumHolographicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'biometric';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralConnections?: boolean;
  enableBiometricScanning?: boolean;
  onClick?: () => void;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  particleEffect?: boolean;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'high',
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralConnections = true,
  enableBiometricScanning = true,
  onClick,
  hoverEffect = true,
  glowEffect = true,
  particleEffect = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [quantumState, setQuantumState] = useState(0);
  const [holographicPhase, setHolographicPhase] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [biometricData, setBiometricData] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Variant-specific configurations
  const variantConfigs = {
    quantum: {
      primaryColor: 'from-cyan-500 to-blue-600',
      secondaryColor: 'from-blue-400 to-cyan-500',
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      glowColor: 'shadow-cyan-500/50',
      particleColor: 'hsl(200, 80%, 70%)'
    },
    holographic: {
      primaryColor: 'from-purple-500 to-pink-600',
      secondaryColor: 'from-pink-400 to-purple-500',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/50',
      particleColor: 'hsl(280, 80%, 70%)'
    },
    neural: {
      primaryColor: 'from-green-500 to-emerald-600',
      secondaryColor: 'from-emerald-400 to-green-500',
      accentColor: 'text-green-400',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/50',
      particleColor: 'hsl(120, 80%, 70%)'
    },
    cyber: {
      primaryColor: 'from-red-500 to-orange-600',
      secondaryColor: 'from-orange-400 to-red-500',
      accentColor: 'text-red-400',
      borderColor: 'border-red-500/30',
      glowColor: 'shadow-red-500/50',
      particleColor: 'hsl(0, 80%, 70%)'
    },
    biometric: {
      primaryColor: 'from-yellow-500 to-amber-600',
      secondaryColor: 'from-amber-400 to-yellow-500',
      accentColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      glowColor: 'shadow-yellow-500/50',
      particleColor: 'hsl(30, 80%, 70%)'
    }
  };

  const config = variantConfigs[variant];

  // Animation variants
  const cardVariants: Variants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: 'brightness(1)'
    },
    hover: { 
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
      filter: 'brightness(1.1)',
      transition: { duration: 0.3, ease: "easeOut" }
    },
    active: { 
      scale: 0.98,
      rotateX: -1,
      rotateY: -1,
      filter: 'brightness(0.9)',
      transition: { duration: 0.1 }
    }
  };

  // Particle system for quantum effects
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
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.quantumState = Math.random() * Math.PI * 2;
        this.color = config.particleColor;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.quantumState += 0.1;

        // Quantum tunneling effect
        if (enableQuantumEffects && Math.random() < 0.01) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (isHovered) {
          const centerX = width / 2;
          const centerY = height / 2;
          const dx = centerX - this.x;
          const dy = centerY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 50) {
            const force = (50 - distance) / 50;
            this.vx += dx * force * 0.02;
            this.vy += dy * force * 0.02;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        
        const alpha = this.life / this.maxLife;
        ctx.globalAlpha = alpha;

        // Quantum wave function effect
        if (enableQuantumEffects) {
          const waveSize = this.size + Math.sin(this.quantumState) * 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveSize, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum probability cloud
          ctx.globalAlpha *= 0.3;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveSize * 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles: QuantumParticle[] = [];
    const particleCount = intensity === 'extreme' ? 30 : intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new QuantumParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

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
  }, [particleEffect, enableQuantumEffects, isHovered, intensity, config.particleColor]);

  // Continuous state updates for effects
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => prev + 0.02);
      setHolographicPhase(prev => prev + 0.03);
      setNeuralActivity(prev => prev + 0.04);
      setBiometricData(prev => prev + 0.05);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Holographic projection effect
  const holographicEffect = enableHolographic ? (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 50%, ${config.secondaryColor.split(' ')[1]}20 0%, transparent 70%)`,
        opacity: 0.3 + Math.sin(holographicPhase) * 0.2
      }}
    />
  ) : null;

  // Neural network connections
  const neuralEffect = enableNeuralConnections ? (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
      <defs>
        <linearGradient id={`neural-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={config.secondaryColor.split(' ')[1]} stopOpacity="0.5" />
          <stop offset="100%" stopColor={config.primaryColor.split(' ')[1]} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <g>
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={i}
            x1={Math.sin(neuralActivity + i) * 100 + 150}
            y1={Math.cos(neuralActivity + i) * 100 + 150}
            x2={Math.sin(neuralActivity + i + 1) * 100 + 150}
            y2={Math.cos(neuralActivity + i + 1) * 100 + 150}
            stroke={`url(#neural-${variant})`}
            strokeWidth="1"
            opacity={0.3 + Math.sin(neuralActivity + i) * 0.2}
          />
        ))}
      </g>
    </svg>
  ) : null;

  // Biometric scanning effect
  const biometricEffect = enableBiometricScanning ? (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `linear-gradient(90deg, transparent 0%, ${config.accentColor}20 50%, transparent 100%)`,
        transform: `translateX(${Math.sin(biometricData) * 100}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  ) : null;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.primaryColor} p-6 ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover={hoverEffect ? "hover" : undefined}
      whileTap={onClick ? "active" : undefined}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsActive(true)}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        perspective: '1000px'
      }}
    >
      {/* Quantum particle canvas */}
      {particleEffect && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Holographic effect */}
      {holographicEffect}

      {/* Neural network effect */}
      {neuralEffect}

      {/* Biometric scanning effect */}
      {biometricEffect}

      {/* Glow effect */}
      {glowEffect && (
        <div 
          className={`absolute inset-0 rounded-2xl ${config.glowColor} blur-xl transition-opacity duration-300`}
          style={{ 
            opacity: isHovered ? 0.8 : 0.3,
            zIndex: -1
          }}
        />
      )}

      {/* Quantum state indicator */}
      {enableQuantumEffects && (
        <div 
          className={`absolute top-2 right-2 w-3 h-3 rounded-full ${config.accentColor} transition-all duration-300`}
          style={{
            opacity: 0.7 + Math.sin(quantumState) * 0.3,
            transform: `scale(${1 + Math.sin(quantumState) * 0.2})`
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Holographic border effect */}
      {enableHolographic && (
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${config.secondaryColor.split(' ')[1]}20 50%, transparent 70%)`,
            opacity: 0.5 + Math.sin(holographicPhase) * 0.3,
            zIndex: 2
          }}
        />
      )}
    </motion.div>
  );
};

export default QuantumHolographicCard;