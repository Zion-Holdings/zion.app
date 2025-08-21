import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  variant = 'default',
  intensity = 'medium'
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

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
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
      holographic: ['#ff00ff', '#00ffff', '#ffff00', '#ff8000'],
      neural: ['#00ff80', '#80ff00', '#0080ff', '#8000ff'],
      cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff8000'],
      space: ['#ffffff', '#00ffff', '#0080ff', '#8000ff']
    };

    const variantColors = colors[variant as keyof typeof colors] || colors.quantum;

    // Create particles
    for (let i = 0; i < (intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50); i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: variantColors[Math.floor(Math.random() * variantColors.length)],
        type: variant as any
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
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
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
              ctx.strokeStyle = particle.color + Math.floor((0.1 * (1 - distance / 150)) * 255).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw quantum field effects
      if (variant === 'quantum') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        for (let i = 0; i < 5; i++) {
          const time = Date.now() * 0.001;
          const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y = Math.cos(time + i * 0.5) * canvas.height * 0.3 + canvas.height * 0.5;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.restore();
      }

      // Draw holographic grid
      if (variant === 'holographic') {
        ctx.save();
        ctx.strokeStyle = '#ff00ff';
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
        ctx.restore();
      }

      // Draw neural network
      if (variant === 'neural') {
        ctx.save();
        ctx.strokeStyle = '#00ff80';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
        
        const nodes = 8;
        for (let i = 0; i < nodes; i++) {
          const x1 = Math.sin(i * Math.PI * 2 / nodes) * 200 + canvas.width * 0.5;
          const y1 = Math.cos(i * Math.PI * 2 / nodes) * 200 + canvas.height * 0.5;
          
          for (let j = i + 1; j < nodes; j++) {
            const x2 = Math.sin(j * Math.PI * 2 / nodes) * 200 + canvas.width * 0.5;
            const y2 = Math.cos(j * Math.PI * 2 / nodes) * 200 + canvas.height * 0.5;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // Draw cyberpunk elements
      if (variant === 'cyberpunk') {
        ctx.save();
        ctx.strokeStyle = '#ff0040';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.4;
        
        // Draw angular lines
        for (let i = 0; i < 10; i++) {
          const x = (i / 10) * canvas.width;
          const y = Math.sin(Date.now() * 0.001 + i) * 100 + canvas.height * 0.5;
          
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + 50, y);
          ctx.lineTo(x + 100, canvas.height);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw space elements
      if (variant === 'space') {
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 0.8;
        
        // Draw stars
        for (let i = 0; i < 100; i++) {
          const x = (i * 37) % canvas.width;
          const y = (i * 73) % canvas.height;
          const size = Math.sin(Date.now() * 0.001 + i) * 2 + 1;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10">
        {/* Primary gradient */}
        <div className={`absolute inset-0 ${
          variant === 'quantum' ? 'bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5' :
          variant === 'holographic' ? 'bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5' :
          variant === 'neural' ? 'bg-gradient-to-br from-green-500/5 via-teal-500/5 to-blue-500/5' :
          variant === 'cyberpunk' ? 'bg-gradient-to-br from-red-500/5 via-pink-500/5 to-orange-500/5' :
          variant === 'space' ? 'bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5' :
          'bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5'
        }`} />
        
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,73,153,0.05),transparent_50%)]" />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className={`absolute w-32 h-32 rounded-full ${
            variant === 'quantum' ? 'bg-cyan-500/10' :
            variant === 'holographic' ? 'bg-pink-500/10' :
            variant === 'neural' ? 'bg-green-500/10' :
            variant === 'cyberpunk' ? 'bg-red-500/10' :
            variant === 'space' ? 'bg-blue-500/10' :
            'bg-cyan-500/10'
          } blur-3xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        
        <motion.div
          className={`absolute w-24 h-24 rounded-full ${
            variant === 'quantum' ? 'bg-purple-500/10' :
            variant === 'holographic' ? 'bg-cyan-500/10' :
            variant === 'neural' ? 'bg-blue-500/10' :
            variant === 'cyberpunk' ? 'bg-orange-500/10' :
            variant === 'space' ? 'bg-indigo-500/10' :
            'bg-purple-500/10'
          } blur-3xl`}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '20%' }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,255,0.3)_100%)] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(139,92,246,0.3)_100%)] bg-[length:50px_50px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
}