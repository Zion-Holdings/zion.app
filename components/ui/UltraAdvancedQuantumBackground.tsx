import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumBackgroundProps {
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
  children: React.ReactNode;
}

const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({
  intensity = 1.0,
  variant = 'quantum',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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

    // Quantum particle system
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: string;

      constructor(x: number, y: number, type: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * intensity;
        this.vy = (Math.random() - 0.5) * 2 * intensity;
        this.size = Math.random() * 3 * intensity + 1;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.type = type;
        
        switch (variant) {
          case 'quantum':
            this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${Math.random() * 60 + 120}, 70%, 60%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${Math.random() * 60 + 280}, 80%, 60%)`;
            break;
          case 'space':
            this.color = `hsl(${Math.random() * 60 + 220}, 70%, 60%)`;
            break;
          default:
            this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Quantum tunneling effect
        if (Math.random() < 0.01 * intensity) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Boundary wrapping with quantum effects
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Quantum wave function visualization
        if (this.type === 'quantum') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum interference pattern
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        
        // Holographic projection
        else if (this.type === 'holographic') {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 2, this.y + this.vy * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.size;
          ctx.stroke();
        }
        
        // Neural network connections
        else if (this.type === 'neural') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Synaptic connections
          particlesRef.current.forEach(particle => {
            if (particle !== this && particle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)
              );
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(particle.x, particle.y);
                ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
        
        // Cyberpunk energy
        else if (this.type === 'cyberpunk') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Energy trails
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - this.vx * 3, this.y - this.vy * 3);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        // Space particles
        else if (this.type === 'space') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Stellar trails
          if (Math.random() < 0.3) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 5, this.y + this.vy * 5);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        ctx.restore();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        const types = ['quantum', 'holographic', 'neural', 'cyberpunk', 'space'];
        const type = types[Math.floor(Math.random() * types.length)];
        particlesRef.current.push(
          new QuantumParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          )
        );
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'quantum':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 50, 100, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(100, 0, 100, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 100, 50, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(100, 0, 50, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
          break;
        case 'space':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(50, 0, 100, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
          break;
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          const types = ['quantum', 'holographic', 'neural', 'cyberpunk', 'space'];
          const type = types[Math.floor(Math.random() * types.length)];
          particlesRef.current[index] = new QuantumParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          );
        }
      });

      // Add quantum entanglement effects
      if (variant === 'quantum' && Math.random() < 0.1) {
        ctx.beginPath();
        ctx.moveTo(
          particlesRef.current[0]?.x || 0,
          particlesRef.current[0]?.y || 0
        );
        ctx.lineTo(
          particlesRef.current[1]?.x || 0,
          particlesRef.current[1]?.y || 0
        );
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              variant === 'quantum' ? 'rgba(0, 255, 255, 0.3)' :
              variant === 'holographic' ? 'rgba(255, 0, 255, 0.3)' :
              variant === 'neural' ? 'rgba(0, 255, 100, 0.3)' :
              variant === 'cyberpunk' ? 'rgba(255, 0, 100, 0.3)' :
              'rgba(100, 0, 255, 0.3)'
            }, transparent)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              variant === 'quantum' ? 'rgba(100, 200, 255, 0.3)' :
              variant === 'holographic' ? 'rgba(255, 200, 0, 0.3)' :
              variant === 'neural' ? 'rgba(100, 255, 200, 0.3)' :
              variant === 'cyberpunk' ? 'rgba(255, 100, 200, 0.3)' :
              'rgba(200, 100, 255, 0.3)'
            }, transparent)`
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;