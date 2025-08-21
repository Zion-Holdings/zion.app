import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'quantum' | 'holographic' | 'matrix' | 'neural' | 'cyberpunk';
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
  intensity = 'medium',
  variant = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'matrix' | 'neural';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(),
          type: getParticleType()
        });
      }
    };

    const getParticleColor = () => {
      const colors = [
        '#00ffff', // Cyan
        '#8b5cf6', // Purple
        '#ec4899', // Pink
        '#10b981', // Green
        '#3b82f6', // Blue
        '#f59e0b', // Yellow
        '#ef4444', // Red
        '#06b6d4', // Sky
        '#a855f7', // Violet
        '#f97316'  // Orange
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const getParticleType = () => {
      const types: Array<'quantum' | 'holographic' | 'matrix' | 'neural'> = ['quantum', 'holographic', 'matrix', 'neural'];
      return types[Math.floor(Math.random() * types.length)];
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw quantum entanglement lines
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        switch (particle.type) {
          case 'quantum':
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(0.5, `${particle.color}80`);
            gradient.addColorStop(1, 'transparent');
            break;
          case 'holographic':
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.3, particle.color);
            gradient.addColorStop(0.7, `${particle.color}80`);
            gradient.addColorStop(1, 'transparent');
            break;
          case 'matrix':
            gradient.addColorStop(0, '#00ff00');
            gradient.addColorStop(0.5, particle.color);
            gradient.addColorStop(1, 'transparent');
            break;
          case 'neural':
            gradient.addColorStop(0, '#ff00ff');
            gradient.addColorStop(0.5, particle.color);
            gradient.addColorStop(1, 'transparent');
            break;
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 3;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
      });

      // Draw matrix rain effect
      if (variant === 'matrix') {
        drawMatrixRain();
      }

      // Draw neural network connections
      if (variant === 'neural') {
        drawNeuralConnections();
      }

      // Draw quantum wave functions
      if (variant === 'quantum') {
        drawQuantumWaves();
      }

      // Draw holographic projections
      if (variant === 'holographic') {
        drawHolographicProjections();
      }
    };

    const drawMatrixRain = () => {
      ctx.fillStyle = '#00ff00';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 50; i++) {
        const x = (i * 20) % canvas.width;
        const y = (Date.now() * 0.01 + i * 10) % canvas.height;
        const char = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(char, x, y);
      }
    };

    const drawNeuralConnections = () => {
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawQuantumWaves = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.01 + Date.now() * 0.001 + i) * 50 +
            Math.sin(x * 0.02 + Date.now() * 0.002 + i * 2) * 25;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    const drawHolographicProjections = () => {
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50 + i * 30;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw holographic grid
        for (let j = 0; j < 8; j++) {
          const angle = (j * Math.PI * 2) / 8;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update opacity for breathing effect
        particle.opacity = 0.2 + 0.6 * Math.sin(Date.now() * 0.001 + particle.x * 0.01);
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, variant]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
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
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400/20"
          style={{ transform: 'rotate(45deg)' }}
          animate={{
            rotate: [45, 405],
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
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
          style={{ transform: 'rotate(30deg)' }}
          animate={{
            rotate: [30, 390],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum energy fields */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicMatrixBackground;