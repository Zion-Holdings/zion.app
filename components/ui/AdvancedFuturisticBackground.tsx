import React, { useEffect, useRef } from 'react';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'cyberpunk' | 'quantum' | 'holographic' | 'neon';
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
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

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
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
      p1: Particle;
      p2: Particle;
      distance: number;
      alpha: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
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
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Theme color function
    function getThemeColor(): string {
      switch (theme) {
        case 'cyberpunk':
          return `hsl(${time * 0.5 % 360}, 100%, 70%)`;
        case 'quantum':
          return `hsl(${180 + Math.sin(time * 0.01) * 30}, 100%, 70%)`;
        case 'holographic':
          return `hsl(${time * 0.3 % 360}, 80%, 60%)`;
        case 'neon':
          return `hsl(${time * 0.2 % 360}, 100%, 50%)`;
        default:
          return `hsl(${time * 0.1 % 360}, 100%, 70%)`;
      }
    }

    // Initialize particles
    function initParticles() {
      particles = [];
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    }

    // Create connections
    function createConnections() {
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
    }

    // Animation loop
    function animate() {
      time++;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });

      // Create and draw connections
      createConnections();
      connections.forEach(connection => connection.draw());

      // Add quantum effects
      if (theme === 'quantum') {
        drawQuantumEffects();
      }

      // Add cyberpunk effects
      if (theme === 'cyberpunk') {
        drawCyberpunkEffects();
      }

      // Add holographic effects
      if (theme === 'holographic') {
        drawHolographicEffects();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Quantum effects
    function drawQuantumEffects() {
      if (ctx) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = `hsl(${time * 0.5 % 360}, 100%, 70%)`;
        ctx.lineWidth = 2;
        
        // Quantum wave patterns
        for (let i = 0; i < canvas.width; i += 20) {
          const y = canvas.height / 2 + Math.sin(i * 0.02 + time * 0.01) * 100;
          ctx.beginPath();
          ctx.moveTo(i, y);
          ctx.lineTo(i + 10, y + Math.sin(i * 0.02 + time * 0.01 + 0.1) * 100);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Cyberpunk effects
    function drawCyberpunkEffects() {
      if (ctx) {
        ctx.save();
        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = `hsl(${time * 0.3 % 360}, 100%, 50%)`;
        ctx.lineWidth = 1;
        
        // Grid pattern
        for (let i = 0; i < canvas.width; i += 30) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 30) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Holographic effects
    function drawHolographicEffects() {
      if (ctx) {
        ctx.save();
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = `hsl(${time * 0.4 % 360}, 80%, 60%)`;
        ctx.lineWidth = 1;
        
        // Holographic scan lines
        for (let i = 0; i < canvas.height; i += 3) {
          const alpha = Math.sin(i * 0.1 + time * 0.02) * 0.5 + 0.5;
          ctx.globalAlpha = alpha * 0.15;
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Handle resize
    function handleResize() {
      if (canvas && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        initParticles();
      }
    }

    // Initialize
    handleResize();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AdvancedFuturisticBackground;