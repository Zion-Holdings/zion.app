import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-rainbow' | 'neural-network' | 'quantum-entanglement' | 'space-quantum' | 'ai-consciousness';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetwork?: boolean;
  enableSpaceEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground({
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = false,
  enableQuantumEffects = false,
  enableNeuralNetwork = false,
  enableSpaceEffects = false,
  children
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const holographicRef = useRef<HTMLDivElement>(null);
  const neuralNetworkRef = useRef<HTMLDivElement>(null);
  const spaceEffectsRef = useRef<HTMLDivElement>(null);

  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          fusion: 'rgba(255, 165, 0, 0.6)'
        };
      case 'neon-cyber':
        return {
          primary: 'rgba(0, 255, 0, 0.8)',
          secondary: 'rgba(255, 0, 255, 0.6)',
          accent: 'rgba(0, 191, 255, 0.7)',
          quantum: 'rgba(255, 215, 0, 0.9)',
          cyber: 'rgba(255, 69, 0, 0.6)'
        };
      case 'holographic':
        return {
          primary: 'rgba(255, 182, 193, 0.8)',
          secondary: 'rgba(173, 216, 230, 0.6)',
          accent: 'rgba(144, 238, 144, 0.7)',
          quantum: 'rgba(221, 160, 221, 0.9)',
          holo: 'rgba(255, 218, 185, 0.6)'
        };
      case 'quantum-rainbow':
        return {
          primary: 'rgba(255, 0, 0, 0.8)',
          secondary: 'rgba(0, 255, 0, 0.6)',
          accent: 'rgba(0, 0, 255, 0.7)',
          quantum: 'rgba(255, 255, 0, 0.9)',
          rainbow: 'rgba(255, 0, 255, 0.6)'
        };
      case 'neural-network':
        return {
          primary: 'rgba(16, 185, 129, 0.8)',
          secondary: 'rgba(59, 130, 246, 0.6)',
          accent: 'rgba(168, 85, 247, 0.7)',
          quantum: 'rgba(236, 72, 153, 0.9)',
          neural: 'rgba(251, 146, 60, 0.6)'
        };
      case 'quantum-entanglement':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(255, 0, 255, 0.6)',
          accent: 'rgba(255, 255, 0, 0.7)',
          quantum: 'rgba(0, 255, 0, 0.9)',
          entanglement: 'rgba(255, 0, 0, 0.6)'
        };
      case 'space-quantum':
        return {
          primary: 'rgba(59, 130, 246, 0.8)',
          secondary: 'rgba(16, 185, 129, 0.6)',
          accent: 'rgba(236, 72, 153, 0.7)',
          quantum: 'rgba(251, 146, 60, 0.9)',
          space: 'rgba(139, 92, 246, 0.6)'
        };
      case 'ai-consciousness':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(139, 92, 246, 0.6)',
          accent: 'rgba(16, 185, 129, 0.7)',
          quantum: 'rgba(236, 72, 153, 0.9)',
          consciousness: 'rgba(251, 146, 60, 0.6)'
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          fusion: 'rgba(255, 165, 0, 0.6)'
        };
    }
  };

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': return 0.5;
      case 'medium': return 1.0;
      case 'high': return 1.5;
      case 'extreme': return 2.5;
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

    // Enhanced particle system
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
      type: 'quantum' | 'neural' | 'holographic' | 'space';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'neural', 'holographic', 'space'][Math.floor(Math.random() * 4)] as any;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Neural network connections
        if (this.type === 'neural' && Math.random() < 0.01 * intensityMultiplier) {
          this.vx *= 1.1;
          this.vy *= 1.1;
        }

        // Holographic distortion
        if (this.type === 'holographic' && Math.random() < 0.005 * intensityMultiplier) {
          this.size *= 1.5;
        }

        // Space-time effects
        if (this.type === 'space' && Math.random() < 0.003 * intensityMultiplier) {
          this.vx *= 0.9;
          this.vy *= 0.9;
        }
      }

      draw() {
        if (!ctx) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20 * intensityMultiplier;
        ctx.shadowColor = this.color;

        // Different shapes for different particle types
        switch (this.type) {
          case 'quantum':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'neural':
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          case 'holographic':
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            break;
          case 'space':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
        }

        ctx.restore();
      }
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw connections between nearby particles
      if (enableNeuralNetwork) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
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
  }, [intensity, colorScheme, particleCount, animationSpeed, enableNeuralNetwork]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Quantum Field Overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-pink-500/5 via-transparent to-transparent" />
        </div>
      )}

      {/* Holographic Matrix */}
      {enableHolographic && (
        <div
          ref={holographicRef}
          className="fixed inset-0 pointer-events-none z-20 opacity-30"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.1)_50%)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(139,92,246,0.1)_50%)] bg-[length:20px_20px]" />
        </div>
      )}

      {/* Neural Network Grid */}
      {enableNeuralNetwork && (
        <div
          ref={neuralNetworkRef}
          className="fixed inset-0 pointer-events-none z-30 opacity-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(16,185,129,0.1)_50%,transparent_51%)] bg-[length:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[length:40px_40px]" />
        </div>
      )}

      {/* Space Effects */}
      {enableSpaceEffects && (
        <div
          ref={spaceEffectsRef}
          className="fixed inset-0 pointer-events-none z-40 opacity-25"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>

      {/* Enhanced Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-60">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-3000" />
      </div>
    </div>
  );
}