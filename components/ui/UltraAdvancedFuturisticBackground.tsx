import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-rainbow' | 'neural-network' | 'quantum-entanglement';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetwork?: boolean;
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
  children
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const holographicRef = useRef<HTMLDivElement>(null);

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
      type: 'quantum' | 'holographic' | 'neural' | 'fusion';
      connections: Particle[];

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'holographic', 'neural', 'fusion'][Math.floor(Math.random() * 4)] as any;
        this.connections = [];
      }

      update() {
        this.x += this.vx * animationSpeed;
        this.y += this.vy * animationSpeed;
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
        if (enableNeuralNetwork && this.type === 'neural') {
          this.createConnections();
        }
      }

      createConnections() {
        this.connections = [];
        particlesRef.current.forEach(particle => {
          if (particle !== this && particle.type === 'neural') {
            const distance = Math.sqrt(
              Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)
            );
            if (distance < 100 * intensityMultiplier) {
              this.connections.push(particle);
            }
          }
        });
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw connections for neural network
        if (enableNeuralNetwork && this.connections.length > 0) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          this.connections.forEach(connection => {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
          });
        }

        // Quantum effects
        if (enableQuantumEffects && this.type === 'quantum') {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20 * intensityMultiplier;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Holographic effects
        if (enableHolographic && this.type === 'holographic') {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15 * intensityMultiplier;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.life = this.maxLife;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
      }
    }

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      if (enableQuantumEffects) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();

        if (particle.life <= 0) {
          particle.reset();
        }
      });

      // Create wave effects
      if (enableHolographic) {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = `rgba(255, 182, 193, ${0.3 - i * 0.1})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 10) {
            const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 50 * intensityMultiplier;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
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
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetwork]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Holographic Overlay */}
      {enableHolographic && (
        <div
          ref={holographicRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      {/* Quantum Field Effect */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" style={{ animationDelay: '0.5s' }} />
        </div>
      )}

      {/* Neural Network Grid */}
      {enableNeuralNetwork && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 3 }}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}