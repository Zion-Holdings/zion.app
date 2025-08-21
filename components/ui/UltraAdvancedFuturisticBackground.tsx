import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium'
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

    // Enhanced particle system
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
        this.type = ['quantum', 'holographic', 'cyberpunk', 'neural'][Math.floor(Math.random() * 4)] as any;
        this.color = this.getColor();
      }

      getColor() {
        switch (this.type) {
          case 'quantum':
            return `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
          case 'holographic':
            return `hsl(${270 + Math.random() * 60}, 100%, 70%)`;
          case 'cyberpunk':
            return `hsl(${320 + Math.random() * 40}, 100%, 70%)`;
          case 'neural':
            return `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
          default:
            return `hsl(${200 + Math.random() * 60}, 100%, 70%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Quantum entanglement effect
        if (Math.random() < 0.01) {
          this.vx *= -1;
          this.vy *= -1;
        }

        // Boundary wrapping with quantum tunneling
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 2;
        
        // Draw particle based on type
        switch (this.type) {
          case 'quantum':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'holographic':
            ctx.beginPath();
            ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            ctx.fill();
            break;
          case 'cyberpunk':
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            break;
          case 'neural':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
            break;
        }
        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new QuantumParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'quantum':
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 100, 255, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
          gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(236, 73, 153, 0.1)');
          gradient.addColorStop(0.5, 'rgba(255, 69, 0, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
          gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'space':
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'matrix':
          gradient.addColorStop(0, 'rgba(0, 255, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 100, 0, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = new QuantumParticle();
        }
      });

      // Draw quantum entanglement lines
      if (variant === 'quantum' || variant === 'default') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw holographic grid for holographic variant
      if (variant === 'holographic') {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
        ctx.lineWidth = 0.5;
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // Draw neural network connections for neural variant
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 405],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30 transform rotate-12"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [12, 372],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum energy waves */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 border border-cyan-400/10 rounded-full"
          animate={{
            scale: [1, 1.5, 2, 1],
            opacity: [0.1, 0.3, 0, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 border border-purple-400/10 rounded-full"
          animate={{
            scale: [1, 1.8, 2.5, 1],
            opacity: [0.1, 0.2, 0, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;