import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'ultra';
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic-advanced',
  intensity = 'ultra',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural';
      life: number;
      maxLife: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#0040ff', '#00ff80'],
      holographic: ['#ff00ff', '#8000ff', '#ff0080', '#ff8000'],
      cyberpunk: ['#ff0040', '#ff4000', '#ff8000', '#ffc000'],
      neural: ['#00ff40', '#40ff00', '#80ff00', '#c0ff00']
    };

    const createParticle = () => {
      const types: Array<'quantum' | 'holographic' | 'cyberpunk' | 'neural'> = ['quantum', 'holographic', 'cyberpunk', 'neural'];
      const type = types[Math.floor(Math.random() * types.length)];
      const colorSet = colors[type];
      const color = colorSet[Math.floor(Math.random() * colorSet.length)];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color,
        type,
        life: Math.random() * 100,
        maxLife: 100
      };
    };

    // Initialize particles
    for (let i = 0; i < 200; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Regenerate dead particles
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 2) {
        if (particles[i] && particles[i + 1]) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[i + 1].x, 2) +
            Math.pow(particles[i].y - particles[i + 1].y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.stroke();
          }
        }
      }

      // Draw holographic matrix
      if (variant.includes('holographic') || variant.includes('matrix')) {
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

      // Draw neural network connections
      if (variant.includes('neural')) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 1;
        particles.forEach((particle, i) => {
          if (particle.type === 'neural') {
            particles.forEach((otherParticle, j) => {
              if (i !== j && otherParticle.type === 'neural') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - otherParticle.x, 2) +
                  Math.pow(particle.y - otherParticle.y, 2)
                );
                if (distance < 80) {
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(otherParticle.x, otherParticle.y);
                  ctx.stroke();
                }
              }
            });
          }
        });
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  const getBackgroundGradient = () => {
    switch (variant) {
      case 'quantum':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 128, 255, 0.3) 0%, transparent 50%)';
      case 'holographic':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)';
      case 'cyberpunk':
        return 'radial-gradient(circle at 20% 80%, rgba(255, 0, 64, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 192, 0, 0.3) 0%, transparent 50%)';
      case 'neural':
        return 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)';
      case 'quantum-holographic':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)';
      case 'quantum-advanced':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 128, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 255, 128, 0.2) 0%, transparent 50%)';
      case 'holographic-advanced':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)';
      case 'neural-quantum':
        return 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)';
      case 'quantum-cyberpunk':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 64, 0.3) 0%, transparent 50%)';
      case 'holographic-neural':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)';
      case 'quantum-holographic-advanced':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)';
      case 'quantum-matrix':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 128, 255, 0.4) 0%, transparent 50%), linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, transparent 50%)';
      case 'neural-cyberpunk':
        return 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 64, 0.3) 0%, transparent 50%)';
      case 'holographic-quantum':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.4) 0%, transparent 50%)';
      case 'quantum-neural-advanced':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 255, 128, 0.2) 0%, transparent 50%)';
      case 'cyberpunk-holographic':
        return 'radial-gradient(circle at 20% 80%, rgba(255, 0, 64, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)';
      case 'quantum-space':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, transparent 50%)';
      case 'ai-futuristic':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)';
      case 'quantum-entanglement':
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 255, 128, 0.3) 0%, transparent 50%)';
      case 'holographic-matrix':
        return 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%), linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%)';
      case 'neural-quantum-cyberpunk':
        return 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 0, 64, 0.2) 0%, transparent 50%)';
      default:
        return 'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)';
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30';
      case 'medium':
        return 'opacity-50';
      case 'high':
        return 'opacity-70';
      case 'ultra':
        return 'opacity-90';
      default:
        return 'opacity-70';
    }
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced Background Gradients */}
      <div 
        className={`absolute inset-0 ${getIntensityClass()}`}
        style={{
          background: getBackgroundGradient(),
          animation: 'backgroundFloat 25s ease-in-out infinite'
        }}
      />
      
      {/* Quantum Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Holographic Overlay */}
      {variant.includes('holographic') && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/5 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-pink-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}
      
      {/* Neural Network Overlay */}
      {variant.includes('neural') && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-green-500/5 to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-emerald-500/5 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      )}
      
      {/* Cyberpunk Overlay */}
      {variant.includes('cyberpunk') && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-red-500/5 to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-orange-500/5 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      )}
      
      {/* Quantum Field Effects */}
      {variant.includes('quantum') && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes backgroundFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(1deg);
          }
          50% {
            transform: translateY(-10px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) rotate(0.5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;