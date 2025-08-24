import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraQuantumHolographicBackground: React.FC<UltraQuantumHolographicBackgroundProps> = ({
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
  }>>([]);

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

    // Initialize particles
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      color: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6'][Math.floor(Math.random() * 5)],
      opacity: Math.random() * 0.5 + 0.2
    }));

    particlesRef.current = particles;

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
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.1;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw quantum grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

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

      // Draw holographic matrix
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.08)';
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.2;

      const matrixSize = 100;
      for (let x = 0; x < canvas.width; x += matrixSize) {
        for (let y = 0; y < canvas.height; y += matrixSize) {
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + matrixSize, y + matrixSize);
            ctx.stroke();
          }
        }
      }

      // Draw neural network
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.06)';
      ctx.lineWidth = 0.4;
      ctx.globalAlpha = 0.15;

      const nodes = 20;
      const nodePositions = Array.from({ length: nodes }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      }));

      nodePositions.forEach((node, index) => {
        nodePositions.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex && Math.random() > 0.8) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)' }}
      />

      {/* Enhanced Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Quantum Consciousness Background */}
        <div className="absolute inset-0 quantum-consciousness-bg opacity-30" />
        
        {/* Holographic Metaverse Background */}
        <div className="absolute inset-0 holographic-metaverse-bg opacity-25" />
        
        {/* Neural Evolution Background */}
        <div className="absolute inset-0 neural-evolution-bg opacity-20" />
        
        {/* Cyberpunk Future Background */}
        <div className="absolute inset-0 cyberpunk-future-bg opacity-15" />
        
        {/* Space Quantum Background */}
        <div className="absolute inset-0 space-quantum-bg opacity-10" />
        
        {/* Biotech Neural Background */}
        <div className="absolute inset-0 biotech-neural-bg opacity-12" />
      </div>

      {/* Animated Grid Patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-quantum-grid opacity-20" />
        <div className="absolute inset-0 bg-holographic-dots opacity-15" />
        <div className="absolute inset-0 bg-neural-waves opacity-10" />
      </div>

      {/* Floating Quantum Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Quantum Ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400 rounded-full opacity-15"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.15, 0.05, 0.15]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Holographic Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-30"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural Connections */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 border border-green-400 rounded-full opacity-25"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Particle Container */}
      <div className="particle-container fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="particle absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Enhanced Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-pink-500/5 via-transparent to-green-500/5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/5 via-transparent to-yellow-500/5" />
      </div>

      {/* Quantum Field Resonance */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 border border-cyan-400/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 border border-purple-400/8 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraQuantumHolographicBackground;