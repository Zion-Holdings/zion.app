import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic' | 'neural-cyberpunk' | 'quantum-space' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  variant = 'quantum-holographic',
  intensity = 'medium'
}: UltraAdvancedFuturisticBackgroundProps) {
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
      life: number;
      maxLife: number;
      color: string;
      type: string;

      constructor(x: number, y: number, type: string = 'quantum') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = 1;
        this.maxLife = Math.random() * 100 + 50;
        this.type = type;
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${270 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${0 + Math.random() * 60}, 100%, 70%)`;
            break;
          default:
            this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life += 1;
        
        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
        
        // Add some quantum randomness
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = 1 - (this.life / this.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (this.type === 'quantum') {
          // Quantum particle effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum entanglement lines
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else if (this.type === 'holographic') {
          // Holographic effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (this.type === 'neural') {
          // Neural network effect
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
          ctx.fill();
        } else if (this.type === 'cyberpunk') {
          // Cyberpunk effect
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Initialize particles based on variant
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        let type = 'quantum';
        switch (variant) {
          case 'quantum-holographic':
            type = Math.random() < 0.5 ? 'quantum' : 'holographic';
            break;
          case 'neural-cyberpunk':
            type = Math.random() < 0.5 ? 'neural' : 'cyberpunk';
            break;
          case 'quantum-space':
            type = Math.random() < 0.7 ? 'quantum' : 'holographic';
            break;
          case 'holographic-matrix':
            type = Math.random() < 0.6 ? 'holographic' : 'neural';
            break;
                      case 'neural-quantum-cyberpunk': {
              const rand = Math.random();
              if (rand < 0.33) type = 'neural';
              else if (rand < 0.66) type = 'quantum';
              else type = 'cyberpunk';
              break;
            }
          default:
            type = 'quantum';
        }
        
        particlesRef.current.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          type
        ));
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradients
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'quantum-holographic':
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
          break;
        case 'neural-cyberpunk':
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
          gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
          break;
        case 'quantum-space':
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.15)');
          gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.1)');
          gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        case 'holographic-matrix':
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
          gradient.addColorStop(0.4, 'rgba(16, 185, 129, 0.05)');
          gradient.addColorStop(0.8, 'rgba(236, 73, 153, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
          break;
        case 'neural-quantum-cyberpunk':
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
          gradient.addColorStop(0.33, 'rgba(0, 255, 255, 0.05)');
          gradient.addColorStop(0.66, 'rgba(236, 73, 153, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and add new ones
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(index, 1);
          let type = 'quantum';
          switch (variant) {
            case 'quantum-holographic':
              type = Math.random() < 0.5 ? 'quantum' : 'holographic';
              break;
            case 'neural-cyberpunk':
              type = Math.random() < 0.5 ? 'neural' : 'cyberpunk';
              break;
            case 'quantum-space':
              type = Math.random() < 0.7 ? 'quantum' : 'holographic';
              break;
            case 'holographic-matrix':
              type = Math.random() < 0.6 ? 'holographic' : 'neural';
              break;
            case 'neural-quantum-cyberpunk': {
              const rand = Math.random();
              if (rand < 0.33) type = 'neural';
              else if (rand < 0.66) type = 'quantum';
              else type = 'cyberpunk';
              break;
            }
            default:
              type = 'quantum';
          }
          particlesRef.current.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          ));
        }
      });

      // Draw quantum field lines
      if (variant.includes('quantum') && intensity !== 'low') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.moveTo(Math.random() * canvas.width, 0);
          ctx.lineTo(Math.random() * canvas.width, canvas.height);
          ctx.stroke();
        }
      }

      // Draw holographic grid
      if (variant.includes('holographic') && intensity !== 'low') {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;
        const gridSize = 100;
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
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Quantum Ripple Effect */}
        {variant.includes('quantum') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        
        {/* Holographic Matrix Effect */}
        {variant.includes('holographic') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        
        {/* Neural Network Effect */}
        {variant.includes('neural') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        
        {/* Cyberpunk Effect */}
        {variant.includes('cyberpunk') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 10% 90%, rgba(236, 73, 153, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 90% 10%, rgba(236, 73, 153, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 10% 90%, rgba(236, 73, 153, 0.05) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}