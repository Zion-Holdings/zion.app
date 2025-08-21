import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'holographic-advanced' | 'quantum-field' | 'neural-network' | 'cyber-grid' | 'plasma-flow';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  variant = 'holographic-advanced',
  intensity = 'medium',
  children
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

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'hologram' | 'quantum' | 'neural' | 'cyber' | 'plasma';
    }> = [];

    const colors = {
      holographic: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'],
      quantum: ['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4', '#10b981'],
      neural: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'],
      cyber: ['#00ff00', '#00ffff', '#ff00ff', '#ffff00', '#ff0000'],
      plasma: ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#00d4ff']
    };

    const getColorScheme = () => {
      switch (variant) {
        case 'holographic-advanced': return colors.holographic;
        case 'quantum-field': return colors.quantum;
        case 'neural-network': return colors.neural;
        case 'cyber-grid': return colors.cyber;
        case 'plasma-flow': return colors.plasma;
        default: return colors.holographic;
      }
    };

    const colorScheme = getColorScheme();

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colorScheme[Math.floor(Math.random() * colorScheme.length)],
          type: variant === 'holographic-advanced' ? 'hologram' : 
                variant === 'quantum-field' ? 'quantum' :
                variant === 'neural-network' ? 'neural' :
                variant === 'cyber-grid' ? 'cyber' : 'plasma'
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'holographic-advanced':
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'quantum-field':
          gradient.addColorStop(0, 'rgba(79, 70, 229, 0.1)');
          gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'neural-network':
          gradient.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'cyber-grid':
          gradient.addColorStop(0, 'rgba(0, 255, 0, 0.1)');
          gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
        case 'plasma-flow':
          gradient.addColorStop(0, 'rgba(255, 107, 53, 0.1)');
          gradient.addColorStop(0.5, 'rgba(6, 255, 165, 0.05)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          break;
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Enhanced particle effects based on type
        switch (particle.type) {
          case 'hologram':
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            break;
          case 'quantum':
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            break;
          case 'neural':
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 8;
            break;
          case 'cyber':
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 12;
            break;
          case 'plasma':
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            break;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.3;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Add special effects based on variant
      if (variant === 'holographic-advanced') {
        // Holographic grid effect
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
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Enhanced Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;