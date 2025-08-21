import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-rainbow' | 'neural-network' | 'quantum-holographic';
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
          quantum: 'rgba(0, 255, 127, 0.9)',
          holographic: 'rgba(255, 182, 193, 0.5)',
          neural: 'rgba(64, 224, 208, 0.6)'
        };
      case 'neon-cyber':
        return {
          primary: 'rgba(0, 255, 0, 0.8)',
          secondary: 'rgba(255, 0, 255, 0.6)',
          accent: 'rgba(0, 191, 255, 0.7)',
          quantum: 'rgba(255, 215, 0, 0.9)',
          holographic: 'rgba(255, 69, 0, 0.5)',
          neural: 'rgba(50, 205, 50, 0.6)'
        };
      case 'holographic':
        return {
          primary: 'rgba(255, 182, 193, 0.8)',
          secondary: 'rgba(173, 216, 230, 0.6)',
          accent: 'rgba(144, 238, 144, 0.7)',
          quantum: 'rgba(221, 160, 221, 0.9)',
          holographic: 'rgba(255, 218, 185, 0.5)',
          neural: 'rgba(176, 224, 230, 0.6)'
        };
      case 'quantum-rainbow':
        return {
          primary: 'rgba(255, 0, 0, 0.8)',
          secondary: 'rgba(0, 255, 0, 0.6)',
          accent: 'rgba(0, 0, 255, 0.7)',
          quantum: 'rgba(255, 255, 0, 0.9)',
          holographic: 'rgba(255, 165, 0, 0.5)',
          neural: 'rgba(128, 0, 128, 0.6)'
        };
      case 'neural-network':
        return {
          primary: 'rgba(64, 224, 208, 0.8)',
          secondary: 'rgba(255, 105, 180, 0.6)',
          accent: 'rgba(135, 206, 250, 0.7)',
          quantum: 'rgba(255, 215, 0, 0.9)',
          holographic: 'rgba(152, 251, 152, 0.5)',
          neural: 'rgba(240, 230, 140, 0.6)'
        };
      case 'quantum-holographic':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(255, 20, 147, 0.6)',
          accent: 'rgba(138, 43, 226, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          holographic: 'rgba(255, 182, 193, 0.5)',
          neural: 'rgba(64, 224, 208, 0.6)'
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          holographic: 'rgba(255, 182, 193, 0.5)',
          neural: 'rgba(64, 224, 208, 0.6)'
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
      type: 'quantum' | 'holographic' | 'neural' | 'standard';
      connectionDistance: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : Math.random() > 0.3 ? 'neural' : 'standard';
        this.connectionDistance = Math.random() * 150 * intensityMultiplier;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.5;
        this.pulsePhase += 0.1;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() > 0.99) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic flicker
        if (this.type === 'holographic') {
          this.size = Math.sin(this.pulsePhase) * 2 + 2;
        }

        // Neural network connections
        if (this.type === 'neural') {
          this.connectionDistance = Math.sin(this.pulsePhase) * 50 + 100;
        }
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = this.life / this.maxLife;
        ctx.globalAlpha = alpha;

        // Draw particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Quantum effects
        if (this.type === 'quantum' && enableQuantumEffects) {
          ctx.strokeStyle = colors.quantum;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Holographic effects
        if (this.type === 'holographic' && enableHolographic) {
          ctx.strokeStyle = colors.holographic;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Neural network effects
        if (this.type === 'neural') {
          ctx.strokeStyle = colors.neural;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      drawConnections() {
        if (this.life <= 0) return;

        particlesRef.current.forEach(particle => {
          if (particle === this || particle.life <= 0) return;

          const distance = Math.sqrt(
            Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)
          );

          if (distance < this.connectionDistance) {
            const alpha = (1 - distance / this.connectionDistance) * 0.3;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        });
      }
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
        particle.drawConnections();
      });

      // Remove dead particles and add new ones
      particlesRef.current = particlesRef.current.filter(particle => particle.life > 0);
      while (particlesRef.current.length < particleCount) {
        particlesRef.current.push(new Particle());
      }

      // Add quantum field effects
      if (enableQuantumEffects) {
        drawQuantumField(ctx, canvas, colors, intensityMultiplier);
      }

      // Add holographic grid
      if (enableHolographic) {
        drawHolographicGrid(ctx, canvas, colors, intensityMultiplier);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  const drawQuantumField = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any, intensity: number) => {
    const time = Date.now() * 0.001;
    const gridSize = 50 * intensity;
    
    ctx.strokeStyle = colors.quantum;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;

    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        const wave = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 20;
        ctx.beginPath();
        ctx.moveTo(x, y + wave);
        ctx.lineTo(x + gridSize, y + wave);
        ctx.stroke();
      }
    }
  };

  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any, intensity: number) => {
    const time = Date.now() * 0.0005;
    const gridSize = 80 * intensity;
    
    ctx.strokeStyle = colors.holographic;
    ctx.lineWidth = 0.3;
    ctx.globalAlpha = 0.2;

    // Vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      const wave = Math.sin(x * 0.02 + time) * 30;
      ctx.beginPath();
      ctx.moveTo(x + wave, 0);
      ctx.lineTo(x + wave, canvas.height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
      const wave = Math.cos(y * 0.02 + time) * 30;
      ctx.beginPath();
      ctx.moveTo(0, y + wave);
      ctx.lineTo(canvas.width, y + wave);
      ctx.stroke();
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(0, 0, 0, 0.8) 0%, 
            rgba(20, 20, 40, 0.9) 50%, 
            rgba(0, 0, 20, 1) 100%)`
        }}
      />
      
      {/* Quantum Energy Field Overlay */}
      {enableQuantumEffects && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-green-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      {/* Holographic Grid Overlay */}
      {enableHolographic && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200/5 via-transparent to-cyan-200/5 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/5 via-transparent to-yellow-200/5 animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      )}

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-cyan-400">
                  <animate attributeName="r" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#neural-grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
}