import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic-advanced' | 'neural-network' | 'cyberpunk-matrix' | 'quantum-advanced' | 'holographic-advanced' | 'neural-advanced' | 'cyberpunk-advanced';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic-advanced',
  intensity = 'medium',
  className
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const colors = {
      quantum: ['#3b82f6', '#06b6d4', '#0891b2'],
      holographic: ['#8b5cf6', '#a855f7', '#c084fc'],
      neural: ['#10b981', '#059669', '#047857'],
      cyberpunk: ['#ef4444', '#dc2626', '#b91c1c']
    };

    const getParticleColor = (type: string) => {
      const colorSet = colors[type as keyof typeof colors] || colors.quantum;
      return colorSet[Math.floor(Math.random() * colorSet.length)];
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1),
          vy: (Math.random() - 0.5) * (intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1),
          size: Math.random() * (intensity === 'high' ? 4 : intensity === 'medium' ? 3 : 2) + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(type),
          type
        });
      }
    };

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        // Enhanced particle rendering based on type
        if (particle.type === 'quantum') {
          // Quantum particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'holographic') {
          // Holographic particles with rainbow effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'neural') {
          // Neural particles with connection lines
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connections to nearby particles
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.globalAlpha = (100 - distance) / 100 * 0.3;
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particles with flicker effect
          if (Math.random() > 0.1) {
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        ctx.restore();
      });

      // Draw additional effects based on variant
      if (variant === 'quantum-holographic-advanced') {
        drawQuantumHolographicEffect(ctx, canvas);
      } else if (variant === 'neural-network') {
        drawNeuralNetworkEffect(ctx, canvas);
      } else if (variant === 'cyberpunk-matrix') {
        drawCyberpunkMatrixEffect(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Quantum holographic effect
    const drawQuantumHolographicEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      // Draw quantum field lines
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `hsla(${200 + i * 30}, 70%, 60%, 0.3)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * (0.2 + i * 0.15));
        ctx.quadraticCurveTo(
          canvas.width * 0.5,
          canvas.height * (0.1 + i * 0.2) + Math.sin(time + i) * 50,
          canvas.width,
          canvas.height * (0.3 + i * 0.1)
        );
        ctx.stroke();
      }
    };

    // Neural network effect
    const drawNeuralNetworkEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      // Draw neural connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 8; i++) {
        const x1 = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
        const y1 = Math.cos(time + i * 0.5) * canvas.height * 0.3 + canvas.height * 0.5;
        const x2 = Math.sin(time + i + 1) * canvas.width * 0.3 + canvas.width * 0.5;
        const y2 = Math.cos(time + i * 0.5 + 1) * canvas.height * 0.3 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Cyberpunk matrix effect
    const drawCyberpunkMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      // Draw matrix rain effect
      ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 50 + time * 100) % canvas.width;
        const y = (time * 200 + i * 30) % canvas.height;
        ctx.fillText('01', x, y);
      }
    };

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  const getBackgroundClasses = () => {
    const baseClasses = 'relative min-h-screen overflow-hidden';
    
    switch (variant) {
      case 'quantum-holographic-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900', className);
      case 'neural-network':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900', className);
      case 'cyberpunk-matrix':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-red-900 to-pink-900', className);
      case 'quantum-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900', className);
      case 'holographic-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900', className);
      case 'neural-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900', className);
      case 'cyberpunk-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-orange-900 to-red-900', className);
      default:
        return cn(baseClasses, 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900', className);
    }
  };

  return (
    <div className={getBackgroundClasses()}>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent transform rotate-12"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -rotate-6"></div>
        </div>
        
        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Neural network nodes */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 7) % 80}%`,
                top: `${30 + (i * 8) % 60}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;