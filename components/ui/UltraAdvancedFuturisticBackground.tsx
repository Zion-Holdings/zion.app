import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum' 
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
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';

      constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
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
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        
        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        
        // Neural network connections
        if (this.type === 'neural' && Math.random() < 0.1) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (this.type === 'quantum') {
          // Quantum wave function visualization
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum entanglement lines
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + Math.sin(Date.now() * 0.001) * 20, this.y + Math.cos(Date.now() * 0.001) * 20);
          ctx.stroke();
        } else if (this.type === 'holographic') {
          // Holographic projection effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else if (this.type === 'neural') {
          // Neural network nodes
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Synaptic connections
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
          ctx.stroke();
        } else if (this.type === 'cyberpunk') {
          // Cyberpunk glitch effect
          ctx.beginPath();
          ctx.moveTo(this.x - this.size, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y + this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Glitch lines
          if (Math.random() < 0.1) {
            ctx.strokeStyle = '#ff00ff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.stroke();
          }
        }
        
        ctx.restore();
      }
    }

    // Initialize particles based on variant
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 150;
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const types: ('quantum' | 'holographic' | 'neural' | 'cyberpunk')[] = ['quantum', 'holographic', 'neural', 'cyberpunk'];
        const type = types[Math.floor(Math.random() * types.length)];
        particlesRef.current.push(new QuantumParticle(x, y, type));
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
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.3, 'rgba(0, 100, 150, 0.3)');
          gradient.addColorStop(0.7, 'rgba(0, 50, 100, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.3, 'rgba(100, 0, 150, 0.3)');
          gradient.addColorStop(0.7, 'rgba(50, 0, 100, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.3, 'rgba(0, 150, 100, 0.3)');
          gradient.addColorStop(0.7, 'rgba(0, 100, 50, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.3, 'rgba(150, 0, 100, 0.3)');
          gradient.addColorStop(0.7, 'rgba(100, 0, 50, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.3, 'rgba(0, 100, 150, 0.3)');
          gradient.addColorStop(0.7, 'rgba(0, 50, 100, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particlesRef.current.splice(index, 1);
          const types: ('quantum' | 'holographic' | 'neural' | 'cyberpunk')[] = ['quantum', 'holographic', 'neural', 'cyberpunk'];
          const type = types[Math.floor(Math.random() * types.length)];
          particlesRef.current.push(new QuantumParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          ));
        }
      });

      // Draw quantum entanglement network
      if (variant.includes('quantum')) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
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

      // Draw neural network connections
      if (variant.includes('neural')) {
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.lineWidth = 0.3;
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
  }, [variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Quantum field lines */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-32 bg-gradient-to-b from-cyan-400/20 to-transparent"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 3) % 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic grid */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
          </div>
        )}

        {/* Neural network overlay */}
        {variant.includes('neural') && (
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400/30 rounded-full"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `${(i * 5) % 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}

        {/* Cyberpunk glitch effect */}
        {variant.includes('cyberpunk') && (
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent"
              animate={{
                opacity: [0, 0.3, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;