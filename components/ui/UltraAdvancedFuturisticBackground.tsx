import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
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
    const createParticle = (x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') => {
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        holographic: ['#ff00ff', '#00ff00', '#ffff00', '#00ffff'],
        neural: ['#ff8000', '#8000ff', '#00ff80', '#ff0080'],
        cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff8000']
      };

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        life: 1,
        maxLife: Math.random() * 100 + 50,
        type
      };
    };

    // Initialize particles
    for (let i = 0; i < 200; i++) {
      particles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
      ));
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        if (particle.life > 0) {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // Replace dead particle
          particles[index] = createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
          );
        }
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 2) {
        if (particles[i] && particles[i + 1] && particles[i].life > 0 && particles[i + 1].life > 0) {
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

      // Draw holographic grid
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

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 3) {
        if (particles[i] && particles[i + 1] && particles[i + 2] && 
            particles[i].life > 0 && particles[i + 1].life > 0 && particles[i + 2].life > 0) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.lineTo(particles[i + 2].x, particles[i + 2].y);
          ctx.closePath();
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  const backgroundVariants = {
    quantum: 'from-cyan-500 via-blue-600 to-purple-700',
    holographic: 'from-purple-500 via-pink-600 to-rose-700',
    cyberpunk: 'from-red-500 via-orange-600 to-yellow-700',
    neural: 'from-green-500 via-emerald-600 to-teal-700',
    'quantum-holographic': 'from-cyan-500 via-purple-600 to-pink-700',
    'quantum-advanced': 'from-cyan-500 via-blue-600 to-indigo-700',
    'holographic-advanced': 'from-purple-500 via-violet-600 to-indigo-700',
    'neural-quantum': 'from-green-500 via-cyan-600 to-blue-700',
    'quantum-cyberpunk': 'from-cyan-500 via-red-600 to-orange-700',
    'holographic-neural': 'from-purple-500 via-green-600 to-cyan-700',
    'quantum-holographic-advanced': 'from-cyan-500 via-purple-600 to-pink-700',
    'quantum-matrix': 'from-cyan-500 via-green-600 to-blue-700',
    'neural-cyberpunk': 'from-green-500 via-red-600 to-orange-700',
    'holographic-quantum': 'from-purple-500 via-cyan-600 to-blue-700',
    'quantum-neural-advanced': 'from-cyan-500 via-green-600 to-emerald-700',
    'cyberpunk-holographic': 'from-red-500 via-purple-600 to-pink-700',
    'quantum-space': 'from-cyan-500 via-blue-600 to-indigo-700',
    'ai-futuristic': 'from-purple-500 via-cyan-600 to-green-700',
    'quantum-entanglement': 'from-cyan-500 via-violet-600 to-purple-700',
    'holographic-matrix': 'from-purple-500 via-green-600 to-cyan-700',
    'neural-quantum-cyberpunk': 'from-green-500 via-cyan-600 to-red-700'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      {/* Quantum Energy Field */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-500/5 to-blue-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/5 to-yellow-500/5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Holographic Grid Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Neural Network Patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Quantum Entanglement Effects */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Cyberpunk Energy Lines */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Particle Trails */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Holographic Data Streams */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-20 bg-gradient-to-b from-purple-400 to-transparent rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, (typeof window !== 'undefined' ? window.innerHeight : 800) + 20],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;