import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'quantum-holographic';
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum-holographic' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Create initial particles
    const createParticles = () => {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: getParticleColor(),
          life: Math.random() * 100,
          maxLife: 100,
          type: getParticleType()
        });
      }
    };

    const getParticleColor = () => {
      const colors = [
        '#00ffff', // Cyan
        '#ff00ff', // Magenta
        '#ffff00', // Yellow
        '#00ff00', // Green
        '#ff0080', // Pink
        '#8000ff', // Purple
        '#0080ff', // Blue
        '#ff8000', // Orange
        '#80ff00', // Lime
        '#ff0080'  // Rose
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const getParticleType = () => {
      const types: Array<'quantum' | 'holographic' | 'neural' | 'cyberpunk'> = [
        'quantum', 'holographic', 'neural', 'cyberpunk'
      ];
      return types[Math.floor(Math.random() * types.length)];
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        // Draw particle based on type
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;

        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(ctx, particle);
            break;
          case 'holographic':
            drawHolographicParticle(ctx, particle);
            break;
          case 'neural':
            drawNeuralParticle(ctx, particle);
            break;
          case 'cyberpunk':
            drawCyberpunkParticle(ctx, particle);
            break;
        }
      });

      // Add new particles
      if (particles.length < 150) {
        createParticles();
      }

      // Draw quantum entanglement lines
      drawQuantumEntanglement(ctx, particles);

      // Draw neural network connections
      drawNeuralConnections(ctx, particles);

      // Draw holographic grid
      drawHolographicGrid(ctx);

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawHolographicParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const alpha = particle.life / particle.maxLife;
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(particle.x - particle.size, particle.y);
      ctx.lineTo(particle.x + particle.size, particle.y);
      ctx.moveTo(particle.x, particle.y - particle.size);
      ctx.lineTo(particle.x, particle.y + particle.size);
      ctx.stroke();

      // Holographic rings
      for (let i = 1; i <= 3; i++) {
        ctx.strokeStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * i, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawNeuralParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const alpha = particle.life / particle.maxLife;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.rect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
      ctx.fill();

      // Neural connections
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      particles.forEach(otherParticle => {
        if (otherParticle !== particle && otherParticle.type === 'neural') {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * alpha;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    };

    const drawCyberpunkParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
      ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
      ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
      ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
      ctx.stroke();

      // Cyberpunk energy field
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x = particle.x + Math.cos(angle) * particle.size * 2;
        const y = particle.y + Math.sin(angle) * particle.size * 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const drawQuantumEntanglement = (ctx: CanvasRenderingContext2D, particles: any[]) => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      
      particles.forEach((particle, i) => {
        if (particle.type === 'quantum') {
          particles.slice(i + 1).forEach(otherParticle => {
            if (otherParticle.type === 'quantum') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 150) {
                ctx.globalAlpha = (150 - distance) / 150 * 0.3;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }
      });
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D, particles: any[]) => {
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.2)';
      ctx.lineWidth = 1;
      
      particles.forEach((particle, i) => {
        if (particle.type === 'neural') {
          particles.slice(i + 1).forEach(otherParticle => {
            if (otherParticle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 120) {
                ctx.globalAlpha = (120 - distance) / 120 * 0.2;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }
      });
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
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
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 z-10" />
      
      {/* Quantum Field Lines */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"
              style={{
                left: `${(i / 20) * 100}%`,
                transform: 'translateX(-50%)'
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"
              style={{
                top: `${(i / 15) * 100}%`,
                transform: 'translateY(-50%)'
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 border border-purple-400 rotate-45"
            style={{
              right: `${25 + (i * 12)}%`,
              top: `${20 + (i * 10)}%`
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;