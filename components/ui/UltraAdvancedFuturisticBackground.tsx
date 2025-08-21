import React, { useEffect, useRef } from 'react';
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
      type: 'quantum' | 'holographic' | 'standard';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'standard';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() > 0.99) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() > 0.95) {
          this.size *= 0.5;
        }
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.type === 'quantum') {
          // Quantum particle effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20 * intensityMultiplier;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();

          // Quantum trail
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.size * 0.5;
          ctx.stroke();
        } else if (this.type === 'holographic') {
          // Holographic effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15 * intensityMultiplier;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();

          // Holographic rings
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        } else {
          // Standard particle
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10 * intensityMultiplier;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw quantum field lines
      if (enableQuantumEffects) {
        ctx.strokeStyle = colors.quantum;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        
        for (let i = 0; i < 20; i++) {
          const x1 = Math.random() * canvas.width;
          const y1 = Math.random() * canvas.height;
          const x2 = x1 + (Math.random() - 0.5) * 200;
          const y2 = y1 + (Math.random() - 0.5) * 200;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Draw holographic grid
      if (enableHolographic) {
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 0.3;
        ctx.globalAlpha = 0.2;
        
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw quantum entanglement lines
      if (enableQuantumEffects) {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
        
        for (let i = 0; i < particlesRef.current.length; i += 2) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[i + 1];
          
          if (p1 && p2 && p1.life > 0 && p2.life > 0) {
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Advanced Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      />

      {/* Quantum Matrix Overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        </div>
      )}

      {/* Holographic Effects */}
      {enableHolographic && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-pink-500/5 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Floating Quantum Elements */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}