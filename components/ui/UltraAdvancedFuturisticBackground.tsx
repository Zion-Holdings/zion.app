import React, { useEffect, useRef } from 'react';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  intensity = 'medium',
  children
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
    let quantumFields: QuantumField[] = [];
    let neuralConnections: NeuralConnection[] = [];

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
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';

      constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.type = type;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;

        switch (type) {
          case 'quantum':
            this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${270 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${320 + Math.random() * 40}, 100%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Add quantum field influence
        quantumFields.forEach(field => {
          const dx = field.x - this.x;
          const dy = field.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < field.radius) {
            const force = (field.radius - distance) / field.radius;
            this.vx += (dx / distance) * force * 0.01;
            this.vy += (dy / distance) * force * 0.01;
          }
        });
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.life / this.maxLife;
          
          // Create glow effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = this.size * 2;
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          ctx.restore();
        }
      }
    }

    // Grid point class
    class GridPoint {
      x: number;
      y: number;
      size: number;
      pulse: number;
      connections: GridPoint[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.connections = [];
      }

      update() {
        this.pulse += 0.02;
      }

      draw() {
        if (ctx) {
          const alpha = 0.5 + 0.5 * Math.sin(this.pulse);
          ctx.save();
          ctx.globalAlpha = alpha;
          
          // Draw grid point
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
          ctx.fill();
          
          // Draw connections
          this.connections.forEach(connection => {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          });
          
          ctx.restore();
        }
      }
    }

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      strength: number;
      pulse: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 100 + 50;
        this.strength = Math.random() * 0.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.pulse += 0.01;
      }

      draw() {
        if (ctx) {
          const alpha = 0.1 + 0.05 * Math.sin(this.pulse);
          ctx.save();
          ctx.globalAlpha = alpha;
          
          // Create radial gradient
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)');
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          ctx.restore();
        }
      }
    }

    // Neural connection class
    class NeuralConnection {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
      pulse: number;

      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.strength = Math.random() * 0.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.pulse += 0.03;
      }

      draw() {
        if (ctx) {
          const alpha = 0.3 + 0.2 * Math.sin(this.pulse);
          ctx.save();
          ctx.globalAlpha = alpha;
          
          // Create gradient line
          const gradient = ctx.createLinearGradient(this.x1, this.y1, this.x2, this.y2);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0.8)');
          
          ctx.beginPath();
          ctx.moveTo(this.x1, this.y1);
          ctx.lineTo(this.x2, this.y2);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          ctx.restore();
        }
      }
    }

    // Initialize particles and effects
    const initEffects = () => {
      particles = [];
      holographicGrid = [];
      quantumFields = [];
      neuralConnections = [];

      // Create particles
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          type
        ));
      }

      // Create holographic grid
      const gridSpacing = 80;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          holographicGrid.push(new GridPoint(x, y));
        }
      }

      // Create quantum fields
      const fieldCount = intensity === 'high' ? 8 : intensity === 'medium' ? 5 : 3;
      for (let i = 0; i < fieldCount; i++) {
        quantumFields.push(new QuantumField(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Create neural connections
      const connectionCount = intensity === 'high' ? 15 : intensity === 'medium' ? 10 : 6;
      for (let i = 0; i < connectionCount; i++) {
        const point1 = holographicGrid[Math.floor(Math.random() * holographicGrid.length)];
        const point2 = holographicGrid[Math.floor(Math.random() * holographicGrid.length)];
        if (point1 !== point2) {
          neuralConnections.push(new NeuralConnection(point1.x, point1.y, point2.x, point2.y));
        }
      }

      // Connect grid points
      holographicGrid.forEach(point => {
        holographicGrid.forEach(otherPoint => {
          if (point !== otherPoint) {
            const distance = Math.sqrt(
              Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2)
            );
            if (distance < gridSpacing * 1.5 && Math.random() < 0.3) {
              point.connections.push(otherPoint);
            }
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      quantumFields.forEach(field => {
        field.update();
        field.draw();
      });

      // Update and draw neural connections
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Update and draw holographic grid
      holographicGrid.forEach(point => {
        point.update();
        point.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          );
        }
      });

      // Add matrix rain effect for high intensity
      if (intensity === 'high') {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (Date.now() * 0.001 + i * 50) % canvas.width;
          const y = (Date.now() * 0.002 + i * 30) % canvas.height;
          const char = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillText(char, x, y);
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initEffects();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        {/* Quantum field indicators */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Neural network lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                <stop offset="100%" stopColor="rgba(0, 255, 255, 0.3)" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="70%" y1="60%" x2="90%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;