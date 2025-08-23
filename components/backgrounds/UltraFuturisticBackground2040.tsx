import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2040: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    quantumState: number;
    energy: number;
    phase: number;
  }>>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced Particle class with quantum effects
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      quantumState: number;
      energy: number;
      phase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 4 + 2;
        this.color = `hsl(${Math.random() * 60 + 180}, 80%, 70%)`;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.quantumState = Math.random() * Math.PI * 2;
        this.energy = Math.random() * 100 + 50;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.quantumState += 0.02;
        this.phase += 0.01;

        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Boundary handling with quantum reflection
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.quantumState += Math.PI;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.quantumState += Math.PI;
        }

        // Energy fluctuations
        this.energy += Math.sin(this.phase) * 0.5;
        this.alpha = (Math.sin(this.quantumState) * 0.3 + 0.7) * (this.energy / 150);
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Create gradient for quantum glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Quantum interference pattern
        if (this.energy > 100) {
          ctx.strokeStyle = this.color + '40';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Create quantum particles
    const particles: QuantumParticle[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new QuantumParticle());
    }
    particlesRef.current = particles;

    // Animation loop with enhanced effects
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const time = Date.now() * 0.001;
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Draw quantum particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Enhanced quantum connections with mouse interaction
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 200) {
            const mouseDistance = Math.sqrt(
              Math.pow(particle.x - mousePosition.x, 2) +
              Math.pow(particle.y - mousePosition.y, 2)
            );

            ctx.save();
            const connectionAlpha = (200 - distance) / 200 * 0.15;
            const mouseInfluence = Math.max(0, (300 - mouseDistance) / 300);
            
            ctx.globalAlpha = connectionAlpha * (1 + mouseInfluence);
            ctx.strokeStyle = `hsl(${180 + Math.sin(time + distance * 0.01) * 30}, 70%, 60%)`;
            ctx.lineWidth = 1 + mouseInfluence * 2;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Draw quantum wave patterns
      ctx.save();
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < 5; i++) {
        const waveOffset = time * 0.5 + i * Math.PI / 3;
        ctx.strokeStyle = `hsl(${200 + i * 20}, 70%, 60%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = Math.sin(x * 0.01 + waveOffset) * 100 + canvas.height / 2;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      // Draw floating geometric shapes
      ctx.save();
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 3; i++) {
        const shapeOffset = time * 0.3 + i * Math.PI / 2;
        const x = canvas.width / 2 + Math.cos(shapeOffset) * 200;
        const y = canvas.height / 2 + Math.sin(shapeOffset) * 200;
        const size = 50 + Math.sin(time + i) * 20;
        
        ctx.strokeStyle = `hsl(${220 + i * 40}, 70%, 60%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (i === 0) {
          // Triangle
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size * 0.866, y + size * 0.5);
          ctx.lineTo(x + size * 0.866, y + size * 0.5);
          ctx.closePath();
        } else if (i === 1) {
          // Square
          ctx.rect(x - size / 2, y - size / 2, size, size);
        } else {
          // Hexagon
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const angle = (j * Math.PI) / 3 + shapeOffset;
            const px = x + Math.cos(angle) * size;
            const py = y + Math.sin(angle) * size;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
        }
        ctx.stroke();
      }
      ctx.restore();

      // Draw energy pulses from mouse
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        ctx.save();
        ctx.globalAlpha = 0.3;
        const pulseSize = (Math.sin(time * 3) + 1) * 50 + 20;
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, pulseSize
        );
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.4)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2040;