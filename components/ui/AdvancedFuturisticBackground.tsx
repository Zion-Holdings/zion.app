import React, { useEffect, useRef } from 'react';

interface AdvancedFuturisticBackgroundProps {
  variant?: 'quantum-matrix' | 'neural-network' | 'holographic-space' | 'cyberpunk-future' | 'quantum-entanglement';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

export default function AdvancedFuturisticBackground({
  variant = 'quantum-matrix',
  intensity = 'medium',
  children,
  className = ''
}: AdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = getParticleColor();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.alpha = (this.life / this.maxLife) * 0.8 + 0.2;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Connection class
    class Connection {
      particle1: Particle;
      particle2: Particle;
      distance: number;
      alpha: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
        this.alpha = Math.max(0, 1 - this.distance / 150);
      }

      draw() {
        if (this.alpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = this.alpha * 0.3;
          ctx.strokeStyle = getConnectionColor();
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Color functions based on variant
    function getParticleColor(): string {
      switch (variant) {
        case 'quantum-matrix':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        case 'neural-network':
          return `hsl(${280 + Math.sin(time * 0.02) * 40}, 80%, 70%)`;
        case 'holographic-space':
          return `hsl(${180 + Math.sin(time * 0.015) * 80}, 90%, 80%)`;
        case 'cyberpunk-future':
          return `hsl(${0 + Math.sin(time * 0.025) * 60}, 100%, 70%)`;
        case 'quantum-entanglement':
          return `hsl(${320 + Math.sin(time * 0.03) * 100}, 85%, 75%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    }

    function getConnectionColor(): string {
      switch (variant) {
        case 'quantum-matrix':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        case 'neural-network':
          return `hsl(${280 + Math.sin(time * 0.02) * 40}, 80%, 70%)`;
        case 'holographic-space':
          return `hsl(${180 + Math.sin(time * 0.015) * 80}, 90%, 80%)`;
        case 'cyberpunk-future':
          return `hsl(${0 + Math.sin(time * 0.025) * 60}, 100%, 70%)`;
        case 'quantum-entanglement':
          return `hsl(${320 + Math.sin(time * 0.03) * 100}, 85%, 75%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    }

    // Initialize particles
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });

      // Create connections
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw());

      // Add special effects based on variant
      addSpecialEffects(ctx, canvas, time);

      time++;
      animationFrameId = requestAnimationFrame(animate);
    }

    // Special effects function
    function addSpecialEffects(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) {
      switch (variant) {
        case 'quantum-matrix':
          // Matrix rain effect
          ctx.save();
          ctx.fillStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time * 0.01) * 0.05})`;
          for (let i = 0; i < 20; i++) {
            const x = (time * 2 + i * 50) % canvas.width;
            const y = (time * 3 + i * 30) % canvas.height;
            ctx.fillRect(x, y, 2, 20);
          }
          ctx.restore();
          break;

        case 'neural-network':
          // Neural network pulses
          ctx.save();
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.3 + Math.sin(time * 0.02) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const x = canvas.width * 0.5 + Math.sin(time * 0.01 + i) * 100;
            const y = canvas.height * 0.5 + Math.cos(time * 0.01 + i) * 100;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
          break;

        case 'holographic-space':
          // Holographic grid
          {
            ctx.save();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 + Math.sin(time * 0.015) * 0.1})`;
            ctx.lineWidth = 1;
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
            ctx.restore();
          }
          break;

        case 'cyberpunk-future':
          // Cyberpunk glitch effect
          if (Math.random() > 0.95) {
            ctx.save();
            ctx.fillStyle = 'rgba(255, 0, 255, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
          }
          break;

        case 'quantum-entanglement':
          // Quantum entanglement waves
          ctx.save();
          ctx.strokeStyle = `rgba(255, 0, 255, ${0.2 + Math.sin(time * 0.03) * 0.1})`;
          ctx.lineWidth = 3;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(
              canvas.width * 0.5,
              canvas.height * 0.5,
              50 + i * 50 + Math.sin(time * 0.02 + i) * 20,
              0,
              Math.PI * 2
            );
            ctx.stroke();
          }
          ctx.restore();
          break;
      }
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(variant)} opacity-5`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
      </div>
    </div>
  );
}

function getGradientClass(variant: string): string {
  switch (variant) {
    case 'quantum-matrix':
      return 'from-green-400 via-blue-500 to-purple-600';
    case 'neural-network':
      return 'from-purple-400 via-pink-500 to-red-500';
    case 'holographic-space':
      return 'from-cyan-400 via-blue-500 to-indigo-600';
    case 'cyberpunk-future':
      return 'from-red-400 via-pink-500 to-purple-600';
    case 'quantum-entanglement':
      return 'from-violet-400 via-purple-500 to-indigo-600';
    default:
      return 'from-blue-400 via-purple-500 to-pink-600';
  }
}