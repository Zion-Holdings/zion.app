import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'cyber-futuristic';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'holographic-advanced',
  intensity = 'high',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyber';

      constructor(type: 'quantum' | 'holographic' | 'neural' | 'cyber') {
        this.type = type;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'cyber':
            this.color = `hsl(${0 + Math.random() * 60}, 80%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.05) {
          this.size *= 0.5 + Math.random();
        }

        // Neural connections
        if (this.type === 'neural' && Math.random() < 0.02) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Wave function rings
            for (let i = 1; i <= 3; i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i * 2, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = alpha * (1 - i * 0.3);
              ctx.stroke();
            }
            break;
            
          case 'holographic':
            // Holographic projection
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y - this.size);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Holographic glitch effect
            if (Math.random() < 0.1) {
              ctx.strokeStyle = 'white';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
            
          case 'neural':
            // Neural network node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Synaptic connections
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = alpha * 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
            ctx.stroke();
            break;
            
          case 'cyber':
            // Cyberpunk pixel
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
            
            // Digital distortion
            if (Math.random() < 0.05) {
              ctx.fillStyle = 'white';
              ctx.fillRect(this.x, this.y, this.size, 1);
            }
            break;
        }
        
        ctx.restore();
      }
    }

    // Create particle arrays based on variant
    let particles: Particle[] = [];
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let type: 'quantum' | 'holographic' | 'neural' | 'cyber';
        switch (variant) {
          case 'holographic-advanced':
            type = Math.random() < 0.4 ? 'holographic' : Math.random() < 0.3 ? 'quantum' : Math.random() < 0.2 ? 'neural' : 'cyber';
            break;
          case 'quantum-holographic':
            type = Math.random() < 0.5 ? 'quantum' : 'holographic';
            break;
          case 'neural-quantum':
            type = Math.random() < 0.4 ? 'neural' : Math.random() < 0.4 ? 'quantum' : 'holographic';
            break;
          case 'cyber-futuristic':
            type = Math.random() < 0.5 ? 'cyber' : Math.random() < 0.3 ? 'holographic' : 'neural';
            break;
          default:
            type = 'holographic';
        }
        particles.push(new Particle(type));
      }
    };

    createParticles();

    // Grid system for advanced effects
    const gridSize = 50;
    const grid: { x: number; y: number; energy: number; connections: number[] }[] = [];

    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        grid.push({
          x,
          y,
          energy: Math.random(),
          connections: []
        });
      }
    }

    // Create grid connections
    grid.forEach((node, i) => {
      grid.forEach((other, j) => {
        if (i !== j) {
          const distance = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2);
          if (distance < gridSize * 2 && Math.random() < 0.3) {
            node.connections.push(j);
          }
        }
      });
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid connections
      if (variant === 'holographic-advanced' || variant === 'neural-quantum') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        grid.forEach((node, i) => {
          node.connections.forEach(connectionIndex => {
            const connection = grid[connectionIndex];
            const energy = (node.energy + connection.energy) / 2;
            ctx.globalAlpha = energy * 0.3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
          });
        });
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          const index = particles.indexOf(particle);
          if (index > -1) {
            particles.splice(index, 1);
            particles.push(new Particle(particle.type));
          }
        }
      });

      // Draw energy waves
      if (variant === 'quantum-holographic' || variant === 'holographic-advanced') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = `hsla(${200 + i * 60}, 70%, 60%, ${0.1 + Math.sin(time + i) * 0.05})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let x = 0; x < width; x += 10) {
            const y = height / 2 + Math.sin(x * 0.01 + time + i) * 100 + Math.sin(time * 2 + i) * 50;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      // Draw neural network patterns
      if (variant === 'neural-quantum') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          for (let x = 0; x < width; x += 20) {
            const y = height / 2 + Math.sin(x * 0.005 + time + i) * 150 + Math.cos(time * 0.5 + i) * 100;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      // Draw cyber grid
      if (variant === 'cyber-futuristic') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.2)';
        ctx.lineWidth = 0.5;
        
        // Vertical lines
        for (let x = 0; x < width; x += 100) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < height; y += 100) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
        
        // Animated scan line
        const scanY = (time * 50) % height;
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
      }

      // Update grid energy
      grid.forEach(node => {
        node.energy = Math.sin(Date.now() * 0.001 + node.x * 0.01 + node.y * 0.01) * 0.5 + 0.5;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Holographic scan lines */}
        {variant === 'holographic-advanced' && (
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${(i * 100) / 20}%`,
                  animation: `scan ${2 + i * 0.1}s linear infinite`
                }}
              />
            ))}
          </div>
        )}

        {/* Quantum interference patterns */}
        {variant === 'quantum-holographic' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(138,43,226,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}

        {/* Neural network overlay */}
        {variant === 'neural-quantum' && (
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,0,0.1)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        )}

        {/* Cyber grid overlay */}
        {variant === 'cyber-futuristic' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,0,255,0.1)_50%,transparent_51%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(255,0,255,0.1)_50%,transparent_51%)] bg-[length:20px_20px]" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedFuturisticBackground;