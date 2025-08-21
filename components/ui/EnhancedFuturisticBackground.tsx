import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic';
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium',
  theme = 'quantum'
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
        this.color = getThemeColor();
        this.alpha = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
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
        if (ctx && this.alpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = this.alpha * 0.3;
          ctx.strokeStyle = getThemeColor();
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Get theme-based colors
    function getThemeColor(): string {
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080', '#ffff00'],
        cyberpunk: ['#ff0066', '#00ffff', '#ffff00', '#ff6600', '#9900ff'],
        neural: ['#00ff88', '#0088ff', '#8800ff', '#ff8800', '#ff0088'],
        holographic: ['#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff8000']
      };
      return colors[theme][Math.floor(Math.random() * colors[theme].length)];
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
    const animate = () => {
      time += 0.01;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

      // Create connections between nearby particles
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

      // Add quantum wave effects
      if (theme === 'quantum') {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2 + Math.sin(time + i) * 50);
          for (let x = 0; x < canvas.width; x += 10) {
            const y = canvas.height / 2 + Math.sin(time * 2 + x * 0.01 + i) * 50;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // Add neural network effects
      if (theme === 'neural') {
        ctx.save();
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 3 * (i + 1));
          for (let x = 0; x < canvas.width; x += 20) {
            const y = canvas.height / 3 * (i + 1) + Math.sin(time + x * 0.02) * 30;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // Add holographic grid
      if (theme === 'holographic') {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = 0; x < canvas.width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < canvas.height; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Add cyberpunk effects
      if (theme === 'cyberpunk') {
        ctx.save();
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = '#ff0066';
        ctx.lineWidth = 3;
        
        // Lightning effects
        for (let i = 0; i < 3; i++) {
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, 0);
            let x = Math.random() * canvas.width;
            let y = 0;
            for (let j = 0; j < 10; j++) {
              const newX = x + (Math.random() - 0.5) * 100;
              const newY = y + Math.random() * (canvas.height / 10);
              ctx.lineTo(newX, newY);
              x = newX;
              y = newY;
            }
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">{children}</div>
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(theme)} opacity-5`} />
        <div className={`absolute inset-0 bg-gradient-to-tl ${getGradientClass(theme)} opacity-5`} />
        
        {/* Animated border glow */}
        <div className={`absolute inset-0 border-2 border-transparent rounded-lg ${getBorderGlowClass(theme)}`} />
      </div>
    </div>
  );
};

// Helper functions for theme-specific styling
function getGradientClass(theme: string): string {
  switch (theme) {
    case 'quantum':
      return 'from-cyan-500 via-blue-500 to-purple-600';
    case 'cyberpunk':
      return 'from-pink-500 via-red-500 to-orange-500';
    case 'neural':
      return 'from-green-500 via-emerald-500 to-teal-500';
    case 'holographic':
      return 'from-purple-500 via-pink-500 to-cyan-500';
    default:
      return 'from-blue-500 to-purple-600';
  }
}

function getBorderGlowClass(theme: string): string {
  switch (theme) {
    case 'quantum':
      return 'shadow-[0_0_20px_rgba(0,255,255,0.3)]';
    case 'cyberpunk':
      return 'shadow-[0_0_20px_rgba(255,0,102,0.3)]';
    case 'neural':
      return 'shadow-[0_0_20px_rgba(0,255,136,0.3)]';
    case 'holographic':
      return 'shadow-[0_0_20px_rgba(255,0,255,0.3)]';
    default:
      return 'shadow-[0_0_20px_rgba(59,130,246,0.3)]';
  }
}

export default EnhancedFuturisticBackground;