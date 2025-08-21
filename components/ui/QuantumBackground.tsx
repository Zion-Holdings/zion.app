import React, { useEffect, useRef, useState } from 'react';

interface QuantumBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const QuantumBackground: React.FC<QuantumBackgroundProps> = ({
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeCanvas);
    }

    // Quantum particle system
    const particles: Particle[] = [];
    const connections: Connection[] = [];
    const maxParticles = 50;
    const maxConnections = 100;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      energy: number;
      phase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.energy = Math.random();
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.phase += 0.02;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Energy fluctuations
        this.energy = 0.5 + 0.5 * Math.sin(this.phase);
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.energy;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.energy, 0, Math.PI * 2);
        ctx.fill();
        
        // Quantum glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10 * this.energy;
        ctx.fill();
        ctx.restore();
      }
    }

    class Connection {
      particle1: Particle;
      particle2: Particle;
      strength: number;
      phase: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.strength = Math.random();
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.01;
        this.strength = 0.3 + 0.7 * Math.sin(this.phase);
      }

      draw() {
        if (!ctx) return;
        
        const distance = Math.sqrt(
          Math.pow(this.particle1.x - this.particle2.x, 2) +
          Math.pow(this.particle1.y - this.particle2.y, 2)
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.strength * (1 - distance / 150);
          ctx.strokeStyle = `hsl(${200 + this.phase * 30}, 70%, 60%)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          
          // Quantum entanglement effect
          ctx.shadowColor = ctx.strokeStyle;
          ctx.shadowBlur = 5;
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Initialize connections
    for (let i = 0; i < maxConnections; i++) {
      const p1 = particles[Math.floor(Math.random() * particles.length)];
      const p2 = particles[Math.floor(Math.random() * particles.length)];
      if (p1 !== p2) {
        connections.push(new Connection(p1, p2));
      }
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Quantum wave interference pattern
      drawWaveInterference();

      animationId = requestAnimationFrame(animate);
    };

    const drawWaveInterference = () => {
      if (!ctx) return;
      
      ctx.save();
      ctx.globalAlpha = 0.1;
      
      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          const time = Date.now() * 0.001;
          const wave1 = Math.sin(x * 0.01 + time);
          const wave2 = Math.sin(y * 0.01 + time * 0.7);
          const interference = (wave1 + wave2) * 0.5;
          
          if (Math.abs(interference) > 0.3) {
            ctx.fillStyle = `hsl(${200 + interference * 60}, 70%, 60%)`;
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }
      
      ctx.restore();
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas);
      }
    };
  }, [isClient]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children}
    </div>
  );
}

export default QuantumBackground;