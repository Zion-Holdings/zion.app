import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2034Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  children,
  intensity = 'medium',
  theme = 'quantum'
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

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
    }> = [];

    const getThemeColors = () => {
      switch (theme) {
        case 'quantum':
          return {
            primary: '#00ffff',
            secondary: '#8b5cf6',
            accent: '#10b981',
            background: 'rgba(0, 0, 0, 0.8)'
          };
        case 'neural':
          return {
            primary: '#10b981',
            secondary: '#3b82f6',
            accent: '#f59e0b',
            background: 'rgba(0, 0, 0, 0.85)'
          };
        case 'holographic':
          return {
            primary: '#ec4899',
            secondary: '#8b5cf6',
            accent: '#00ffff',
            background: 'rgba(0, 0, 0, 0.9)'
          };
        case 'cyberpunk':
          return {
            primary: '#f59e0b',
            secondary: '#ef4444',
            accent: '#00ffff',
            background: 'rgba(0, 0, 0, 0.95)'
          };
        default:
          return {
            primary: '#00ffff',
            secondary: '#8b5cf6',
            accent: '#10b981',
            background: 'rgba(0, 0, 0, 0.8)'
          };
      }
    };

    const colors = getThemeColors();

    const createParticle = () => {
      const intensityMultiplier = intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1;
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
        size: Math.random() * 3 * intensityMultiplier + 1,
        color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)],
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50
      };
    };

    // Initialize particles
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      // Clear canvas with theme background
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Update life
        particle.life--;

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle with glow effect
        const alpha = particle.life / particle.maxLife;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        
        gradient.addColorStop(0, `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${particle.color}${Math.floor(alpha * 128).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw quantum entanglement lines
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100 && distance > 20) {
            const alpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = `${colors.primary}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Draw neural network connections
      if (theme === 'neural') {
        particles.forEach((particle, i) => {
          if (i % 3 === 0) {
            const nextParticle = particles[(i + 1) % particles.length];
            const distance = Math.sqrt(
              Math.pow(particle.x - nextParticle.x, 2) + 
              Math.pow(particle.y - nextParticle.y, 2)
            );
            
            if (distance < 150) {
              const alpha = (150 - distance) / 150 * 0.4;
              ctx.strokeStyle = `${colors.accent}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(nextParticle.x, nextParticle.y);
              ctx.stroke();
            }
          }
        });
      }

      // Draw holographic matrix effect
      if (theme === 'holographic') {
        for (let i = 0; i < canvas.width; i += 30) {
          for (let j = 0; j < canvas.height; j += 30) {
            const alpha = Math.sin(Date.now() * 0.001 + i * 0.01 + j * 0.01) * 0.1 + 0.1;
            ctx.fillStyle = `${colors.primary}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.fillRect(i, j, 2, 2);
          }
        }
      }

      // Draw cyberpunk grid
      if (theme === 'cyberpunk') {
        ctx.strokeStyle = `${colors.primary}20`;
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let j = 0; j < canvas.height; j += 50) {
          ctx.beginPath();
          ctx.moveTo(0, j);
          ctx.lineTo(canvas.width, j);
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
  }, [intensity, theme]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)`,
          zIndex: 10
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-20" style={{ zIndex: 20 }}>
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
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
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-green-400/30 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-pink-400/30 transform rotate-12"
          animate={{
            rotate: [12, 372],
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum energy waves */}
      <div className="fixed inset-0 pointer-events-none z-30" style={{ zIndex: 30 }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-40" style={{ zIndex: 40 }}>
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;