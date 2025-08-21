import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  glowColor?: string;
  interactive?: boolean;
  onClick?: () => void;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  intensity = 'medium',
  glowColor,
  interactive = false,
  onClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const particleCount = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50,
          maxLife: 150,
          color: getParticleColor(variant)
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'quantum':
          return `hsl(${280 + Math.sin(Date.now() * 0.001) * 80}, 80%, 70%)`;
        case 'holographic':
          return `hsl(${160 + Math.sin(Date.now() * 0.001) * 100}, 90%, 65%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(Date.now() * 0.001) * 60}, 100%, 60%)`;
        case 'neural':
          return `hsl(${200 + Math.sin(Date.now() * 0.001) * 60}, 70%, 60%)`;
        case 'space':
          return `hsl(${220 + Math.sin(Date.now() * 0.001) * 80}, 90%, 75%)`;
        default:
          return `hsl(${200 + Math.sin(Date.now() * 0.001) * 60}, 70%, 60%)`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life > 0) {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        } else {
          particles.splice(index, 1);
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      // Add new particles
      if (particles.length < (intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10)) {
        createParticles();
      }

      // Draw variant-specific effects
      switch (variant) {
        case 'holographic':
          drawHolographicGrid(ctx, canvas);
          break;
        case 'quantum':
          drawQuantumEffects(ctx, canvas);
          break;
        case 'cyberpunk':
          drawCyberpunkEffects(ctx, canvas);
          break;
        case 'neural':
          drawNeuralConnections(ctx, canvas);
          break;
        case 'space':
          drawSpaceEffects(ctx, canvas);
          break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015) * 100}, 90%, 65%, 0.3)`;
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          const opacity = Math.sin(time + x * 0.01 + y * 0.01) * 0.2 + 0.1;
          ctx.globalAlpha = opacity;
          ctx.strokeRect(x, y, 30, 30);
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawQuantumEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (i / 5) * canvas.width;
        const y = Math.sin(time + i * 0.5) * 20 + canvas.height / 2;
        ctx.fillStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const height = Math.random() * 50 + 30;
        ctx.fillStyle = `rgba(0, 255, 0, ${0.4 + Math.sin(time + i) * 0.2})`;
        ctx.fillRect(x, y, 2, height);
      }
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = (80 - distance) / 80 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 128, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawSpaceEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.cos(time + i) * 100;
        const y = canvas.height / 2 + Math.sin(time + i) * 100;
        const radius = Math.sin(time + i) * 20 + 40;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0.2)`);
        gradient.addColorStop(0.5, `rgba(0, 255, 255, 0.1)`);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, intensity]);

  const getGradientClass = (variant: string): string => {
    switch (variant) {
      case 'quantum':
        return 'from-purple-500 to-indigo-600';
      case 'holographic':
        return 'from-pink-500 to-purple-600';
      case 'cyberpunk':
        return 'from-green-500 to-blue-600';
      case 'neural':
        return 'from-emerald-500 to-cyan-600';
      case 'space':
        return 'from-blue-500 to-purple-600';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getGlowColor = (variant: string): string => {
    switch (variant) {
      case 'quantum':
        return 'rgba(147, 51, 234, 0.3)';
      case 'holographic':
        return 'rgba(236, 72, 153, 0.3)';
      case 'cyberpunk':
        return 'rgba(34, 197, 94, 0.3)';
      case 'neural':
        return 'rgba(16, 185, 129, 0.3)';
      case 'space':
        return 'rgba(59, 130, 246, 0.3)';
      default:
        return 'rgba(75, 85, 99, 0.3)';
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-700/50 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${getGradientClass(variant)})`,
        boxShadow: isHovered ? `0 0 40px ${getGlowColor(variant)}` : 'none'
      }}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default EnhancedFuturisticCard;