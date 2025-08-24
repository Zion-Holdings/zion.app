import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function FuturisticBackground({ 
  children, 
  className = '', 
  intensity = 'medium' 
}: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

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

    const colors = [
      '#8c15e9', // zion-purple
      '#22ddd2', // zion-cyan
      '#2e73ea', // zion-blue
      '#b971f2', // zion-purple-light
      '#7aeae4', // zion-cyan-light
    ];

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initParticles();

    // Animation loop
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
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw grid lines
      ctx.strokeStyle = '#8c15e9';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

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

      // Draw scanning line effect
      const time = Date.now() * 0.001;
      const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * canvas.height;
      
      ctx.strokeStyle = '#22ddd2';
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw scanning line glow
      ctx.strokeStyle = '#22ddd2';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw corner brackets
      const bracketSize = 30;
      const bracketThickness = 3;
      
      ctx.strokeStyle = '#8c15e9';
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = bracketThickness;

      // Top-left bracket
      ctx.beginPath();
      ctx.moveTo(20, 20 + bracketSize);
      ctx.lineTo(20, 20);
      ctx.lineTo(20 + bracketSize, 20);
      ctx.stroke();

      // Top-right bracket
      ctx.beginPath();
      ctx.moveTo(canvas.width - 20 - bracketSize, 20);
      ctx.lineTo(canvas.width - 20, 20);
      ctx.lineTo(canvas.width - 20, 20 + bracketSize);
      ctx.stroke();

      // Bottom-left bracket
      ctx.beginPath();
      ctx.moveTo(20, canvas.height - 20 - bracketSize);
      ctx.lineTo(20, canvas.height - 20);
      ctx.lineTo(20 + bracketSize, canvas.height - 20);
      ctx.stroke();

      // Bottom-right bracket
      ctx.beginPath();
      ctx.moveTo(canvas.width - 20 - bracketSize, canvas.height - 20);
      ctx.lineTo(canvas.width - 20, canvas.height - 20);
      ctx.lineTo(canvas.width - 20, canvas.height - 20 - bracketSize);
      ctx.stroke();

      // Draw floating orbs
      const orbCount = 3;
      for (let i = 0; i < orbCount; i++) {
        const orbX = canvas.width * 0.2 + (canvas.width * 0.6 * i) / (orbCount - 1);
        const orbY = canvas.height * 0.3 + Math.sin(time + i) * 50;
        const orbSize = 20 + Math.sin(time * 2 + i) * 5;
        
        // Orb glow
        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize * 2);
        gradient.addColorStop(0, 'rgba(140, 21, 233, 0.8)');
        gradient.addColorStop(0.5, 'rgba(34, 221, 210, 0.4)');
        gradient.addColorStop(1, 'rgba(140, 21, 233, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Orb core
        ctx.fillStyle = '#8c15e9';
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();
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
  }, [intensity]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Simplified version for performance
export function SimpleFuturisticBackground({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-purple/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-zion-cyan/40 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-tr from-zion-purple/30 to-zion-cyan/30 rounded animate-spin-reverse"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,21,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(140,21,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}