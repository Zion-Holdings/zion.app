import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'matrix' | 'quantum-holographic';
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'quantum-holographic',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const screenFactor = typeof window !== 'undefined' ? (window.innerWidth < 640 ? 0.5 : window.innerWidth < 1024 ? 0.8 : 1) : 1;
      const particleBase = prefersReducedMotion ? 30 : 110;
      const particleCount = Math.floor(particleBase * intensity * screenFactor);
      
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          size: Math.random() * 4 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(type),
          type
        });
      }
    };

    const getParticleColor = (type: string) => {
      switch (type) {
        case 'quantum':
          return `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
        case 'holographic':
          return `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
        case 'neural':
          return `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.random() * 60}, 80%, 60%)`;
        default:
          return `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(2, 6, 23, 0.95)');
      gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.9)');
      gradient.addColorStop(1, 'rgba(24, 24, 27, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum field lines
      if (!prefersReducedMotion && variant.includes('quantum')) {
        drawQuantumFieldLines(ctx);
      }

      // Draw holographic grid
      if (!prefersReducedMotion && variant.includes('holographic')) {
        drawHolographicGrid(ctx);
      }

      // Draw neural connections
      if (!prefersReducedMotion && variant.includes('neural')) {
        drawNeuralConnections(ctx);
      }

      // Draw cyberpunk elements
      if (!prefersReducedMotion && variant.includes('cyberpunk')) {
        drawCyberpunkElements(ctx);
      }

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

        // Draw particle trail
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 3, particle.y - particle.vy * 3);
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size * 0.5;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.stroke();

        // Reset alpha
        ctx.globalAlpha = 1;
      });

      // Draw connections between nearby particles
      if (!prefersReducedMotion) {
        drawParticleConnections(ctx);
      }

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
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

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 1;
      
      particles.forEach((particle, i) => {
        if (particle.type === 'neural') {
          particles.forEach((otherParticle, j) => {
            if (i !== j && otherParticle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.globalAlpha = 1 - (distance / 100);
                ctx.stroke();
              }
            }
          });
        }
      });
      ctx.globalAlpha = 1;
    };

    const drawCyberpunkElements = (ctx: CanvasRenderingContext2D) => {
      // Draw scanning lines
      const scanY = (Date.now() * 0.05) % canvas.height;
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw data streams
      for (let i = 0; i < 5; i++) {
        const x = (i * canvas.width / 5) + (Date.now() * 0.02) % (canvas.width / 5);
        const height = 50 + Math.sin(Date.now() * 0.001 + i) * 20;
        
        ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
        ctx.fillRect(x, 0, 2, height);
        ctx.fillRect(x, canvas.height - height, 2, height);
      }
    };

    const drawParticleConnections = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      particles.forEach((particle, i) => {
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.globalAlpha = (1 - (distance / 80)) * 0.3;
              ctx.stroke();
            }
          }
        });
      });
      ctx.globalAlpha = 1;
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, variant]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
        aria-hidden="true"
        role="presentation"
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Quantum energy field */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Holographic interference patterns */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-indigo-500/5"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Neural network overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;