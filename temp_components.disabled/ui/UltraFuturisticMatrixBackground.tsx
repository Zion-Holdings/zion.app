import React, { useEffect, useRef } from 'react';

interface UltraFuturisticMatrixBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticMatrixBackground({ children, className = '' }: UltraFuturisticMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let matrix: MatrixCharacter[] = [];
    let quantumFields: QuantumField[] = [];
    let holographicGrids: HolographicGrid[] = [];

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

    // Particle class for quantum effects
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.size *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Matrix character class
    class MatrixCharacter {
      x: number;
      y: number;
      char: string;
      speed: number;
      life: number;
      color: string;

      constructor(x: number) {
        this.x = x;
        this.y = -20;
        this.char = String.fromCharCode(0x30A0 + Math.random() * 96);
        this.speed = Math.random() * 2 + 1;
        this.life = Math.random() * 255;
        this.color = `rgba(0, 255, 0, ${this.life / 255})`;
      }

      update() {
        this.y += this.speed;
        this.life -= 2;
        this.color = `rgba(0, 255, 0, ${this.life / 255})`;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.life > 0) {
          ctx.fillStyle = this.color;
          ctx.font = '16px monospace';
          ctx.fillText(this.char, this.x, this.y);
        }
      }
    }

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      intensity: number;
      phase: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.5 + 0.3;
        this.phase = Math.random() * Math.PI * 2;
        this.color = `hsl(${240 + Math.random() * 60}, 100%, 70%)`;
      }

      update() {
        this.phase += 0.02;
        this.intensity = 0.3 + Math.sin(this.phase) * 0.2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `${this.color}${Math.floor(this.intensity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.save();
        ctx.globalAlpha = this.intensity * 0.3;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Holographic grid class
    class HolographicGrid {
      offsetX: number;
      offsetY: number;
      spacing: number;
      rotation: number;
      color: string;

      constructor() {
        this.offsetX = 0;
        this.offsetY = 0;
        this.spacing = 30;
        this.rotation = 0;
        this.color = `hsl(${280 + Math.random() * 40}, 100%, 70%)`;
      }

      update() {
        this.offsetX += 0.5;
        this.offsetY += 0.3;
        this.rotation += 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.1;

        // Draw grid lines
        for (let i = -20; i <= 20; i++) {
          const pos = i * this.spacing;
          ctx.beginPath();
          ctx.moveTo(pos, -canvas.height);
          ctx.lineTo(pos, canvas.height);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(-canvas.width, pos);
          ctx.lineTo(canvas.width, pos);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Initialize objects
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    for (let i = 0; i < 20; i++) {
      matrix.push(new MatrixCharacter(Math.random() * canvas.width));
    }

    for (let i = 0; i < 8; i++) {
      quantumFields.push(new QuantumField());
    }

    for (let i = 0; i < 3; i++) {
      holographicGrids.push(new HolographicGrid());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      quantumFields.forEach(field => {
        field.update();
        field.draw(ctx);
      });

      // Update and draw holographic grids
      holographicGrids.forEach(grid => {
        grid.update();
        grid.draw(ctx);
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        if (particle.life <= 0) {
          particles[index] = new Particle(Math.random() * canvas.width, Math.random() * canvas.height);
        }
      });

      // Update and draw matrix characters
      matrix.forEach((char, index) => {
        char.update();
        char.draw(ctx);
        
        if (char.y > canvas.height || char.life <= 0) {
          matrix[index] = new MatrixCharacter(Math.random() * canvas.width);
        }
      });

      // Add new matrix characters occasionally
      if (Math.random() < 0.1) {
        matrix.push(new MatrixCharacter(Math.random() * canvas.width));
      }

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum energy orbs */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50"></div>
        
        {/* Holographic lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
        
        {/* Matrix-style corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-400 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}