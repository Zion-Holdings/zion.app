import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackgroundProps {
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  variant = 'quantum',
  intensity = 'medium',
  children,
  className = ''
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

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        
        switch (variant) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${120 + Math.random() * 60}, 90%, 50%)`;
            break;
          case 'neural':
            this.color = `hsl(${300 + Math.random() * 60}, 80%, 60%)`;
            break;
          case 'space':
            this.color = `hsl(${220 + Math.random() * 40}, 70%, 70%)`;
            break;
          case 'matrix':
            this.color = `hsl(${120 + Math.random() * 20}, 100%, 50%)`;
            break;
          default:
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        
        switch (variant) {
          case 'quantum':
            // Quantum wave function visualization
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
          case 'holographic':
            // Holographic interference pattern
            ctx.beginPath();
            ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            ctx.fill();
            break;
          case 'cyberpunk':
            // Cyberpunk energy bursts
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 5, this.y + this.vy * 5);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size;
            ctx.stroke();
            break;
          case 'neural':
            // Neural network connections
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'space':
            // Space dust particles
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'matrix':
            // Matrix digital rain
            ctx.fillStyle = '#00ff00';
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fillText('01', this.x, this.y);
            break;
        }
        
        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      switch (variant) {
        case 'quantum':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
          gradient.addColorStop(0.5, 'rgba(0, 100, 200, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
          gradient.addColorStop(0.5, 'rgba(150, 0, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
          gradient.addColorStop(0.5, 'rgba(0, 255, 100, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
          gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'space':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
          gradient.addColorStop(0.5, 'rgba(0, 150, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'matrix':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
          gradient.addColorStop(0.5, 'rgba(0, 50, 0, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
          break;
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      if (variant === 'neural' || variant === 'quantum') {
        ctx.strokeStyle = variant === 'neural' ? 'rgba(255, 0, 255, 0.3)' : 'rgba(0, 150, 255, 0.3)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            
            if (distance < 100) {
              const alpha = Math.max(0, 1 - distance / 100);
              ctx.globalAlpha = alpha * 0.3;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
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
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional visual effects */}
      <div className="relative z-10">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-green-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Quantum energy waves */}
        {variant === 'quantum' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Holographic interference patterns */}
        {variant === 'holographic' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(150, 0, 255, 0.05) 10px, rgba(150, 0, 255, 0.05) 20px)'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Cyberpunk energy grid */}
        {variant === 'cyberpunk' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 49%, rgba(0, 255, 100, 0.1) 50%, transparent 51%)'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;