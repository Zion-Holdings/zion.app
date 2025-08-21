import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'quantum-holographic-advanced'
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
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: string;

      constructor(x: number, y: number, type: string = 'quantum') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * intensity;
        this.vy = (Math.random() - 0.5) * 2 * intensity;
        this.size = Math.random() * 3 * intensity + 1;
        this.type = type;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        
        // Enhanced color schemes based on variant
        switch (variant) {
          case 'quantum-holographic-advanced':
            this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
            break;
          case 'quantum-cyberpunk':
            this.color = `hsl(${Math.random() * 30 + 300}, 80%, 60%)`;
            break;
          case 'neural-quantum':
            this.color = `hsl(${Math.random() * 40 + 120}, 70%, 60%)`;
            break;
          case 'quantum-space':
            this.color = `hsl(${Math.random() * 40 + 200}, 70%, 60%)`;
            break;
          default:
            this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges with enhanced physics
        if (this.x <= 0 || this.x >= canvas.width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Quantum entanglement effect
        if (variant.includes('quantum') && Math.random() < 0.01) {
          this.vx *= 1.5;
          this.vy *= 1.5;
        }

        // Neural network connections
        if (variant.includes('neural') && Math.random() < 0.005) {
          this.createConnection();
        }
      }

      createConnection() {
        const nearbyParticles = particlesRef.current.filter(p => 
          p !== this && 
          Math.abs(p.x - this.x) < 100 && 
          Math.abs(p.y - this.y) < 100
        );
        
        if (nearbyParticles.length > 0) {
          const target = nearbyParticles[Math.floor(Math.random() * nearbyParticles.length)];
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (this.life / this.maxLife)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      draw() {
        if (ctx) {
          ctx.save();
          
          // Enhanced glow effects
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Quantum particle trails
          if (variant.includes('quantum')) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    }

    // Initialize particles
    const particleCount = Math.floor(100 * intensity);
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        variant
      ));
    }

    // Animation loop
    const animate = () => {
      if (ctx && canvas) {
        // Enhanced background with multiple layers
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Quantum field effects
        if (variant.includes('quantum')) {
          ctx.fillStyle = 'rgba(0, 255, 255, 0.02)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Holographic matrix effects
        if (variant.includes('holographic')) {
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.03)';
          ctx.lineWidth = 0.5;
          for (let i = 0; i < canvas.width; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
          }
          for (let i = 0; i < canvas.height; i += 50) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
          }
        }

        // Update and draw particles
        particlesRef.current.forEach((particle, index) => {
          particle.update();
          particle.draw();

          // Remove dead particles and create new ones
          if (particle.life <= 0) {
            particlesRef.current.splice(index, 1);
            particlesRef.current.push(new Particle(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              variant
            ));
          }
        });

        // Cyberpunk grid effects
        if (variant.includes('cyberpunk')) {
          ctx.strokeStyle = 'rgba(236, 73, 153, 0.05)';
          ctx.lineWidth = 1;
          for (let i = 0; i < canvas.width; i += 100) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i + 50, canvas.height);
            ctx.stroke();
          }
        }

        // Neural network visualization
        if (variant.includes('neural')) {
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.03)';
          ctx.lineWidth = 0.3;
          particlesRef.current.forEach(particle => {
            if (Math.random() < 0.01) {
              particle.createConnection();
            }
          });
        }
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
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant.includes('quantum') 
            ? 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)'
            : variant.includes('holographic')
            ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)'
            : variant.includes('cyberpunk')
            ? 'radial-gradient(ellipse at center, rgba(236, 73, 153, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)'
            : variant.includes('neural')
            ? 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)'
            : 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)'
        }}
      />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Quantum Fluctuations */}
        {variant.includes('quantum') && (
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Holographic Orbs */}
        {variant.includes('holographic') && (
          <motion.div
            className="absolute top-40 right-32 w-4 h-4 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Cyberpunk Elements */}
        {variant.includes('cyberpunk') && (
          <motion.div
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-500"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
              x: [0, 40, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Neural Network Nodes */}
        {variant.includes('neural') && (
          <motion.div
            className="absolute top-1/2 right-20 w-2 h-2 bg-emerald-400 rounded-full"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.3, 1, 0.3],
              y: [0, -60, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Enhanced Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Quantum Field Lines */}
        {variant.includes('quantum') && (
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 255, 255, 0.1)" />
                <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 Q 200 0 400 50 T 800 50"
              stroke="url(#quantumGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
          </svg>
        )}

        {/* Holographic Grid */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
        )}

        {/* Cyberpunk Scan Lines */}
        {variant.includes('cyberpunk') && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/3 to-transparent" />
        )}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;