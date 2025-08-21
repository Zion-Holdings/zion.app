import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const holographicGridRef = useRef<any[]>([]);
  const matrixCodeRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Quantum particles
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      quantumState: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.quantumState = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.quantumState += 0.1;

        // Quantum tunneling effect
        if (Math.random() < 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.life / this.maxLife;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Quantum wave function visualization
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Holographic grid
    class HolographicGrid {
      x: number;
      y: number;
      size: number;
      rotation: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.rotation = Math.random() * Math.PI * 2;
        this.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.rotation += 0.005;
        this.opacity = Math.sin(Date.now() * 0.001) * 0.2 + 0.3;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.globalAlpha = this.opacity;
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;

          // Draw holographic grid
          for (let i = -this.size / 2; i <= this.size / 2; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, -this.size / 2);
            ctx.lineTo(i, this.size / 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-this.size / 2, i);
            ctx.lineTo(this.size / 2, i);
            ctx.stroke();
          }
          ctx.restore();
        }
      }
    }

    // Matrix code rain
    class MatrixCode {
      x: number;
      y: number;
      speed: number;
      text: string;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.speed = Math.random() * 3 + 1;
        this.text = String.fromCharCode(0x30A0 + Math.random() * 96);
        this.color = `hsl(${120 + Math.random() * 40}, 100%, 70%)`;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.fillStyle = this.color;
          ctx.globalAlpha = this.opacity;
          ctx.font = '16px monospace';
          ctx.fillText(this.text, this.x, this.y);
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
    const gridCount = intensity === 'high' ? 8 : intensity === 'medium' ? 6 : 4;
    const matrixCount = intensity === 'high' ? 80 : intensity === 'medium' ? 60 : 40;

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new QuantumParticle());
    }

    for (let i = 0; i < gridCount; i++) {
      holographicGridRef.current.push(new HolographicGrid());
    }

    for (let i = 0; i < matrixCount; i++) {
      matrixCodeRef.current.push(new MatrixCode());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
          particlesRef.current[index] = new QuantumParticle();
        }
      });

      // Update and draw holographic grids
      holographicGridRef.current.forEach(grid => {
        grid.update();
        grid.draw();
      });

      // Update and draw matrix code
      matrixCodeRef.current.forEach(code => {
        code.update();
        code.draw();
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      particlesRef.current = [];
      holographicGridRef.current = [];
      matrixCodeRef.current = [];
    };
  }, [intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Enhanced futuristic overlay elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Quantum field lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Holographic corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400 opacity-30">
          <div className="absolute top-0 left-0 w-4 h-4 bg-cyan-400 animate-pulse" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400 opacity-30">
          <div className="absolute top-0 right-0 w-4 h-4 bg-purple-400 animate-pulse" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-400 opacity-30">
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 animate-pulse" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-400 opacity-30">
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-pink-400 animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicMatrixBackground;