import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum-holographic-advanced' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = [
        '#00ffff', '#8b5cf6', '#ec4899', '#10b981', 
        '#3b82f6', '#f59e0b', '#ef4444', '#06b6d4'
      ];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 2
      );
      
      if (variant.includes('quantum')) {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.02)');
      } else if (variant.includes('holographic')) {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.02)');
      } else if (variant.includes('cyberpunk')) {
        gradient.addColorStop(0, 'rgba(236, 73, 153, 0.1)');
        gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.05)');
        gradient.addColorStop(1, 'rgba(236, 73, 153, 0.02)');
      } else if (variant.includes('neural')) {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (variant.includes('quantum')) {
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('holographic')) {
          ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('cyberpunk')) {
          ctx.fillStyle = `rgba(236, 73, 153, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('neural')) {
          ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        }
        
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              const opacity = (100 - distance) / 100 * 0.3;
              if (variant.includes('quantum')) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
              } else if (variant.includes('holographic')) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
              } else if (variant.includes('cyberpunk')) {
                ctx.strokeStyle = `rgba(236, 73, 153, ${opacity})`;
              } else if (variant.includes('neural')) {
                ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
              }
              
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Reset particle if it's too old
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
        }
      });

      // Add matrix effect for cyberpunk variants
      if (variant.includes('cyberpunk') || variant.includes('matrix')) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      // Add neural network effect for neural variants
      if (variant.includes('neural')) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
          ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced animated background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ 
          background: variant.includes('quantum') 
            ? 'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            : variant.includes('holographic')
            ? 'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            : variant.includes('cyberpunk')
            ? 'radial-gradient(ellipse at center, rgba(236,73,153,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            : variant.includes('neural')
            ? 'radial-gradient(ellipse at center, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            : 'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum field lines */}
      {variant.includes('quantum') && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, rgba(139,92,246,0.1) 50%, transparent 100%)
              `
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Holographic grid */}
      {variant.includes('holographic') && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;