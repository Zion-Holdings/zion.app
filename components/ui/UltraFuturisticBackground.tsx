import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
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
    let quantumWaves: Wave[] = [];

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
      life: number;
      maxLife: number;
      color: string;
      type: 'energy' | 'data' | 'quantum' | 'holographic';

      constructor(x: number, y: number, type: 'energy' | 'data' | 'quantum' | 'holographic') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.type = type;
        
        switch (type) {
          case 'energy':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'data':
            this.color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'quantum':
            this.color = `hsl(${280 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${0 + Math.random() * 60}, 70%, 60%)`;
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
        
        // Add quantum entanglement effect
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          
          // Create glow effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Add energy trails
          if (this.type === 'energy') {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          
          ctx.restore();
        }
      }
    }

    // Grid point class for holographic effect
    class GridPoint {
      x: number;
      y: number;
      size: number;
      pulse: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.pulse += this.speed;
      }

      draw() {
        if (ctx) {
          const alpha = (Math.sin(this.pulse) + 1) / 2 * 0.3;
          ctx.save();
          ctx.globalAlpha = alpha;
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'hsl(180, 70%, 60%)';
          ctx.fill();
          
          ctx.restore();
        }
      }
    }

    // Wave class for quantum effects
    class Wave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = Math.random() * 100 + 50;
        this.speed = Math.random() * 2 + 1;
        this.color = `hsl(${280 + Math.random() * 60}, 70%, 60%)`;
      }

      update() {
        this.radius += this.speed;
      }

      draw() {
        if (ctx && this.radius < this.maxRadius) {
          const alpha = 1 - (this.radius / this.maxRadius);
          ctx.save();
          ctx.globalAlpha = alpha;
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
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
      quantumWaves = [];

      // Create particles
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      for (let i = 0; i < particleCount; i++) {
        const type = ['energy', 'data', 'quantum', 'holographic'][Math.floor(Math.random() * 4)] as any;
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          type
        ));
      }

      // Create holographic grid
      const gridSpacing = 40;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          if (Math.random() < 0.3) {
            holographicGrid.push(new GridPoint(x, y));
          }
        }
      }

      // Create quantum waves
      for (let i = 0; i < 5; i++) {
        quantumWaves.push(new Wave(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      switch (variant) {
        case 'quantum':
          gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
          gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.95)');
          gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(20, 30, 50, 0.95)');
          gradient.addColorStop(0.5, 'rgba(40, 50, 80, 0.95)');
          gradient.addColorStop(1, 'rgba(20, 30, 50, 0.95)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(25, 15, 25, 0.95)');
          gradient.addColorStop(0.5, 'rgba(45, 25, 45, 0.95)');
          gradient.addColorStop(1, 'rgba(25, 15, 25, 0.95)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(15, 25, 35, 0.95)');
          gradient.addColorStop(0.5, 'rgba(35, 45, 55, 0.95)');
          gradient.addColorStop(1, 'rgba(15, 25, 35, 0.95)');
          break;
        case 'space':
          gradient.addColorStop(0, 'rgba(10, 15, 30, 0.95)');
          gradient.addColorStop(0.5, 'rgba(20, 30, 50, 0.95)');
          gradient.addColorStop(1, 'rgba(10, 15, 30, 0.95)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
          gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.95)');
          gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw effects
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            particle.type
          );
        }
      });

      holographicGrid.forEach(point => {
        point.update();
        point.draw();
      });

      quantumWaves.forEach((wave, index) => {
        wave.update();
        wave.draw();
        
        // Create new waves when old ones finish
        if (wave.radius >= wave.maxRadius) {
          quantumWaves[index] = new Wave(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });

      // Add neural network connections for neural variant
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const alpha = 1 - (distance / 100);
              ctx.strokeStyle = `rgba(34, 197, 94, ${alpha * 0.3})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Add cyberpunk glitch effect
      if (variant === 'cyberpunk' && Math.random() < 0.01) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;