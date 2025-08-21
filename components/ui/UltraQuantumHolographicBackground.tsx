import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-blue' | 'quantum-purple' | 'quantum-fusion' | 'quantum-rainbow';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetworks?: boolean;
  enableSpaceTime?: boolean;
}

export default function UltraQuantumHolographicBackground({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralNetworks = true,
  enableSpaceTime = true
}: UltraQuantumHolographicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intensity multipliers
  const intensityMultipliers = {
    low: { particles: 0.5, speed: 0.5, effects: 0.3 },
    medium: { particles: 1.0, speed: 1.0, effects: 0.6 },
    high: { particles: 1.5, speed: 1.5, effects: 0.8 },
    extreme: { particles: 2.0, speed: 2.0, effects: 1.0 }
  };

  const multiplier = intensityMultipliers[intensity];

  // Color schemes
  const colorSchemes = {
    'quantum-blue': {
      primary: '#00d4ff',
      secondary: '#0099cc',
      accent: '#0066ff',
      glow: '#00ffff'
    },
    'quantum-purple': {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#6d28d9',
      glow: '#a855f7'
    },
    'quantum-fusion': {
      primary: '#00d4ff',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      glow: '#00ffff'
    },
    'quantum-rainbow': {
      primary: '#ff0080',
      secondary: '#00ff80',
      accent: '#8000ff',
      glow: '#ffff00'
    }
  };

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'spacetime';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * multiplier.speed;
        this.vy = (Math.random() - 0.5) * 2 * multiplier.speed;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
        this.type = ['quantum', 'holographic', 'neural', 'spacetime'][Math.floor(Math.random() * 4)] as any;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += dx * force * 0.01;
          this.vy += dy * force * 0.01;
        }

        // Quantum tunneling effect
        if (Math.random() < 0.001 * multiplier.effects) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const alpha = this.life / this.maxLife;
        const size = this.size * (1 + Math.sin(Date.now() * 0.01) * 0.3);

        ctx.save();
        ctx.globalAlpha = alpha;

        switch (this.type) {
          case 'quantum':
            this.drawQuantum(ctx, size);
            break;
          case 'holographic':
            this.drawHolographic(ctx, size);
            break;
          case 'neural':
            this.drawNeural(ctx, size);
            break;
          case 'spacetime':
            this.drawSpacetime(ctx, size);
            break;
        }

        ctx.restore();
      }

      drawQuantum(ctx: CanvasRenderingContext2D, size: number) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
        gradient.addColorStop(0, colors.primary);
        gradient.addColorStop(0.5, colors.secondary);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Quantum glow
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = size * 2;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      drawHolographic(ctx: CanvasRenderingContext2D, size: number) {
        const baseAlpha = this.life / this.maxLife;
        
        // Holographic rings
        for (let i = 0; i < 3; i++) {
          const ringSize = size * (1 + i * 0.5);
          const ringAlpha = (1 - i * 0.3) * baseAlpha;
          
          ctx.strokeStyle = colors.secondary;
          ctx.lineWidth = 2;
          ctx.globalAlpha = ringAlpha;
          ctx.beginPath();
          ctx.arc(this.x, this.y, ringSize, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Holographic center
        ctx.fillStyle = colors.primary;
        ctx.globalAlpha = baseAlpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      drawNeural(ctx: CanvasRenderingContext2D, size: number) {
        const baseAlpha = this.life / this.maxLife;
        
        // Neural network node
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Neural connections
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 1;
        ctx.globalAlpha = baseAlpha * 0.5;
        
        // Draw connections to nearby particles
        particles.forEach(particle => {
          if (particle !== this && particle.type === 'neural') {
            const dx = particle.x - this.x;
            const dy = particle.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(particle.x, particle.y);
              ctx.stroke();
            }
          }
        });
      }

      drawSpacetime(ctx: CanvasRenderingContext2D, size: number) {
        const baseAlpha = this.life / this.maxLife;
        
        // Spacetime distortion
        const time = Date.now() * 0.001;
        const distortion = Math.sin(time + this.x * 0.01) * Math.cos(time + this.y * 0.01);
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(time * 0.5);
        ctx.scale(1 + distortion * 0.2, 1 - distortion * 0.2);

        // Spacetime geometry
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 2;
        ctx.globalAlpha = baseAlpha;
        
        // Draw spacetime grid
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath();
          ctx.moveTo(i * size, -2 * size);
          ctx.lineTo(i * size, 2 * size);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(-2 * size, i * size);
          ctx.lineTo(2 * size, i * size);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    const actualParticleCount = Math.floor(particleCount * multiplier.particles);

    // Helper functions for advanced effects
    const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D, particles: Particle[], colors: any, multiplier: any) => {
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      particles.forEach(particle => {
        if (particle.type === 'quantum') {
          const nearbyParticles = particles.filter(p => {
            if (p === particle) return false;
            const dx = p.x - particle.x;
            const dy = p.y - particle.y;
            return Math.sqrt(dx * dx + dy * dy) < 120;
          });

          nearbyParticles.forEach(nearby => {
            const dx = nearby.x - particle.x;
            const dy = nearby.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 60) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(nearby.x, nearby.y);
              ctx.stroke();
            }
          });
        }
      });
    };

    const drawHolographicMatrix = (ctx: CanvasRenderingContext2D, dimensions: any, colors: any, multiplier: any) => {
      const time = Date.now() * 0.001;
      const gridSize = 40;
      
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;

      for (let x = 0; x < dimensions.width; x += gridSize) {
        for (let y = 0; y < dimensions.height; y += gridSize) {
          const distortion = Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01) * 5;
          
          ctx.beginPath();
          ctx.moveTo(x + distortion, y);
          ctx.lineTo(x + distortion, y + gridSize);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x, y + distortion);
          ctx.lineTo(x + gridSize, y + distortion);
          ctx.stroke();
        }
      }
    };

    const drawNeuralNetworks = (ctx: CanvasRenderingContext2D, particles: Particle[], colors: any, multiplier: any) => {
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;

      // Create neural network connections
      const neuralParticles = particles.filter(p => p.type === 'neural');
      
      neuralParticles.forEach((particle, i) => {
        const connections = neuralParticles.slice(i + 1).filter(p => {
          const dx = p.x - particle.x;
          const dy = p.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < 100 && Math.random() < 0.3;
        });

        connections.forEach(connection => {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(connection.x, connection.y);
          ctx.stroke();
        });
      });
    };

    const drawSpacetimeFabric = (ctx: CanvasRenderingContext2D, dimensions: any, colors: any, multiplier: any) => {
      const time = Date.now() * 0.001;
      const waveCount = 5;
      
      for (let i = 0; i < waveCount; i++) {
        const frequency = 0.01 + i * 0.005;
        const amplitude = 20 + i * 10;
        const speed = 0.5 + i * 0.2;
        
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.1 - i * 0.02;
        
        ctx.beginPath();
        for (let x = 0; x < dimensions.width; x += 2) {
          const y = dimensions.height / 2 + Math.sin(x * frequency + time * speed) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Initialize particles
    for (let i = 0; i < actualParticleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle();
        }
      });

      // Draw quantum field lines
      if (enableQuantumEffects) {
        drawQuantumFieldLines(ctx, particles, colors, multiplier);
      }

      // Draw holographic matrix
      if (enableHolographic) {
        drawHolographicMatrix(ctx, dimensions, colors, multiplier);
      }

      // Draw neural networks
      if (enableNeuralNetworks) {
        drawNeuralNetworks(ctx, particles, colors, multiplier);
      }

      // Draw spacetime fabric
      if (enableSpaceTime) {
        drawSpacetimeFabric(ctx, dimensions, colors, multiplier);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, mousePosition, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetworks, enableSpaceTime, colors, multiplier]);



  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Quantum Holographic Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.primary}10 0%, ${colors.secondary}05 50%, transparent 100%)`
        }}
      />
      
      {/* Additional Visual Effects */}
      {enableHolographic && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Holographic Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(${colors.secondary}20 1px, transparent 1px),
                linear-gradient(90deg, ${colors.secondary}20 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Quantum Energy Fields */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-30 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
              animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
              animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Particle Overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.glow }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full"
            style={{ backgroundColor: colors.accent }}
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </div>
  );
}