import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2040Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'cyberpunk' | 'quantum' | 'neon' | 'holographic';
}

const UltraFuturisticBackground2040: React.FC<UltraFuturisticBackground2040Props> = ({
  children,
  intensity = 'medium',
  theme = 'cyberpunk'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = {
      cyberpunk: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      quantum: ['#4f46e5', '#06b6d4', '#8b5cf6', '#ec4899'],
      neon: ['#ff0080', '#00ff80', '#8000ff', '#ff8000'],
      holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
    };

    const selectedColors = colors[theme];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 150) * 0.3 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  const intensityClasses = {
    low: 'opacity-30',
    medium: 'opacity-60',
    high: 'opacity-90'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none ${intensityClasses[intensity]} transition-opacity duration-1000`}
        style={{ zIndex: -1 }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Cyberpunk Grid */}
        {theme === 'cyberpunk' && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
              animate={{
                rotate: [45, 405],
                scale: [1, 0.8, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        )}

        {/* Quantum Particles */}
        {theme === 'quantum' && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, 60, 0],
                y: [0, -40, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Neon Lines */}
        {theme === 'neon' && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Holographic Elements */}
        {theme === 'holographic' && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 border border-white/10 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/20 rounded-full"
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'cyberpunk' ? 'from-cyan-900/20 via-purple-900/20 to-pink-900/20' :
          theme === 'quantum' ? 'from-blue-900/20 via-indigo-900/20 to-purple-900/20' :
          theme === 'neon' ? 'from-pink-900/20 via-green-900/20 to-blue-900/20' :
          'from-white/5 via-gray-900/10 to-black/20'
        }`} />
        
        <div className={`absolute inset-0 bg-gradient-to-tl ${
          theme === 'cyberpunk' ? 'from-black/40 via-transparent to-cyan-900/20' :
          theme === 'quantum' ? 'from-black/40 via-transparent to-blue-900/20' :
          theme === 'neon' ? 'from-black/40 via-transparent to-pink-900/20' :
          'from-black/40 via-transparent to-white/10'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2040;