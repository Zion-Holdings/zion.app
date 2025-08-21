import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-rainbow';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground({
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = false,
  enableQuantumEffects = false,
  children
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)'
        };
      case 'neon-cyber':
        return {
          primary: 'rgba(0, 255, 0, 0.8)',
          secondary: 'rgba(255, 0, 255, 0.6)',
          accent: 'rgba(0, 191, 255, 0.7)',
          quantum: 'rgba(255, 215, 0, 0.9)'
        };
      case 'holographic':
        return {
          primary: 'rgba(255, 182, 193, 0.8)',
          secondary: 'rgba(173, 216, 230, 0.6)',
          accent: 'rgba(144, 238, 144, 0.7)',
          quantum: 'rgba(221, 160, 221, 0.9)'
        };
      case 'quantum-rainbow':
        return {
          primary: 'rgba(255, 0, 0, 0.8)',
          secondary: 'rgba(0, 255, 0, 0.6)',
          accent: 'rgba(0, 0, 255, 0.7)',
          quantum: 'rgba(255, 255, 0, 0.9)'
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)'
        };
    }
  };

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': return 0.5;
      case 'medium': return 1.0;
      case 'high': return 1.5;
      case 'extreme': return 2.0;
      default: return 1.0;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const colors = getColorScheme();
    const intensityMultiplier = getIntensityMultiplier();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neon';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'neon';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic flicker
        if (this.type === 'holographic') {
          this.size *= 0.99 + Math.random() * 0.02;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.type === 'quantum') {
          // Quantum particle with glow effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum entanglement lines
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + Math.random() * 100 - 50, this.y + Math.random() * 100 - 50);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else if (this.type === 'holographic') {
          // Holographic particle with matrix effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        } else {
          // Standard neon particle
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Initialize particle array
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

        // Replace dead particles
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw quantum field lines
      if (enableQuantumEffects) {
        drawQuantumFieldLines(ctx, colors);
      }

      // Draw holographic matrix
      if (enableHolographic) {
        drawHolographicMatrix(ctx, colors);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D, colors: any) => {
    ctx.save();
    ctx.strokeStyle = colors.quantum;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;

    for (let i = 0; i < 20; i++) {
      const x1 = Math.random() * ctx.canvas.width;
      const y1 = Math.random() * ctx.canvas.height;
      const x2 = Math.random() * ctx.canvas.width;
      const y2 = Math.random() * ctx.canvas.height;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    ctx.restore();
  };

  const drawHolographicMatrix = (ctx: CanvasRenderingContext2D, colors: any) => {
    ctx.save();
    ctx.strokeStyle = colors.secondary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.1;

    const gridSize = 50;
    for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < ctx.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
    }

    ctx.restore();
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rotate-45"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Quantum Particle System */}
      <QuantumParticleSystem />

      {/* Holographic Matrix */}
      <HolographicMatrix />

      {/* Neural Network Visualization */}
      <NeuralNetwork />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Quantum Particle System Component
function QuantumParticleSystem() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);

    return () => clearInterval(interval);
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`
          }}
          animate={{
            x: [0, particle.vx * 100],
            y: [0, particle.vy * 100],
            opacity: [1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Holographic Matrix Component
function HolographicMatrix() {
  if (typeof window === 'undefined') return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Neural Network Component
function NeuralNetwork() {
  if (typeof window === 'undefined') return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(138, 43, 226, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 20, 147, 0.3)" />
          </linearGradient>
        </defs>
        
        {/* Neural connections */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="url(#neuralGradient)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </svg>
    </div>
  );
}