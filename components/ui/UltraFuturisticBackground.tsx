import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let holographicGrid: GridPoint[] = [];
    let neuralConnections: Connection[] = [];
    let time = 0;

    // Enhanced particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'energy';

      constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'energy') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = 1;
        this.maxLife = Math.random() * 100 + 50;
        this.type = type;
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 80%, 60%)`;
            break;
          case 'energy':
            this.color = `hsl(${30 + Math.random() * 60}, 90%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1;
        
        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        
        // Neural network connections
        if (this.type === 'neural') {
          this.vx += (Math.random() - 0.5) * 0.1;
          this.vy += (Math.random() - 0.5) * 0.1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (this.type === 'quantum') {
          // Quantum particle with glow effect
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'holographic') {
          // Holographic particle with interference pattern
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.size;
          ctx.beginPath();
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.stroke();
        } else {
          // Standard particle
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Holographic grid system
    class GridPoint {
      x: number;
      y: number;
      phase: number;
      frequency: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.phase = Math.random() * Math.PI * 2;
        this.frequency = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.phase += this.frequency;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const intensity = (Math.sin(this.phase) + 1) / 2;
        const alpha = 0.1 + intensity * 0.2;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = `hsl(${280 + intensity * 60}, 80%, 70%)`;
        ctx.lineWidth = 1;
        
        // Draw grid lines
        if (this.x % 50 === 0) {
          ctx.beginPath();
          ctx.moveTo(this.x, 0);
          ctx.lineTo(this.x, canvas.height);
          ctx.stroke();
        }
        
        if (this.y % 50 === 0) {
          ctx.beginPath();
          ctx.moveTo(0, this.y);
          ctx.lineTo(canvas.width, this.y);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Neural network connections
    class Connection {
      from: { x: number; y: number };
      to: { x: number; y: number };
      strength: number;
      phase: number;

      constructor(from: { x: number; y: number }, to: { x: number; y: number }) {
        this.from = from;
        this.to = to;
        this.strength = Math.random();
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.02;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const intensity = (Math.sin(this.phase) + 1) / 2;
        const alpha = 0.1 + intensity * 0.3;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = `hsl(${120 + intensity * 60}, 80%, 60%)`;
        ctx.lineWidth = this.strength * 2;
        
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Initialize systems based on variant
    const initSystems = () => {
      particles = [];
      holographicGrid = [];
      neuralConnections = [];

      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const types: ('quantum' | 'holographic' | 'neural' | 'energy')[] = ['quantum', 'holographic', 'neural', 'energy'];
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push(new Particle(x, y, type));
      }

      // Create holographic grid
      for (let x = 0; x < canvas.width; x += 50) {
        for (let y = 0; y < canvas.height; y += 50) {
          holographicGrid.push(new GridPoint(x, y));
        }
      }

      // Create neural connections
      for (let i = 0; i < 20; i++) {
        const from = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        };
        const to = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        };
        neuralConnections.push(new Connection(from, to));
      }
    };

    // Animation loop
    const animate = () => {
      time += 0.016;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw systems
      holographicGrid.forEach(point => {
        point.update();
        point.draw(ctx);
      });

      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw(ctx);
      });

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particles.splice(index, 1);
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const types: ('quantum' | 'holographic' | 'neural' | 'energy')[] = ['quantum', 'holographic', 'neural', 'energy'];
          const type = types[Math.floor(Math.random() * types.length)];
          particles.push(new Particle(x, y, type));
        }
      });

      // Add special effects based on variant
      if (variant === 'quantum') {
        // Quantum entanglement effect
        ctx.strokeStyle = `hsla(${200 + Math.sin(time) * 30}, 70%, 60%, 0.3)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + Math.sin(time) * 100);
        ctx.lineTo(canvas.width, canvas.height / 2 + Math.sin(time * 1.5) * 100);
        ctx.stroke();
      } else if (variant === 'holographic') {
        // Holographic interference patterns
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(time * (i + 1) * 0.5) * canvas.width / 2 + canvas.width / 2;
          const y = Math.cos(time * (i + 1) * 0.3) * canvas.height / 2 + canvas.height / 2;
          ctx.strokeStyle = `hsla(${280 + i * 20}, 80%, 70%, 0.2)`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(x, y, 50 + Math.sin(time) * 20, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        initSystems();
      }
    };

    // Initialize
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-purple-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-900/10 to-emerald-900/10" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-emerald-400/20 transform rotate-12 animate-ping" />
        
        {/* Energy waves */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;