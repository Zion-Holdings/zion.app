import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'cyber' | 'cosmic';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function EnhancedFuturisticBackground({ 
  children, 
  variant = 'neural', 
  intensity = 'medium',
  className = '' 
}: EnhancedFuturisticBackgroundProps) {
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
      type: 'neural' | 'quantum' | 'cyber' | 'cosmic';
    }> = [];

    const colors = {
      neural: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      quantum: ['#8b5cf6', '#06b6d4', '#3b82f6', '#ec4899'],
      cyber: ['#ef4444', '#f97316', '#eab308', '#22c55e'],
      cosmic: ['#1e40af', '#7c3aed', '#be185d', '#059669']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    };

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(50 * intensityMultiplier[intensity]);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
          type: variant
        });
      }
    };

    // Neural network connections
    const drawNeuralConnections = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Quantum entanglement effect
    const drawQuantumEntanglement = () => {
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.stroke();
          
          // Add quantum glow
          ctx.shadowColor = particles[i].color;
          ctx.shadowBlur = 20;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }
    };

    // Cyber grid effect
    const drawCyberGrid = () => {
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)';
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
    };

    // Cosmic waves
    const drawCosmicWaves = () => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(30, 64, 175, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background effects based on variant
      switch (variant) {
        case 'neural':
          drawNeuralConnections();
          break;
        case 'quantum':
          drawQuantumEntanglement();
          break;
        case 'cyber':
          drawCyberGrid();
          break;
        case 'cosmic':
          drawCosmicWaves();
          break;
      }
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Add trail effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}20`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
      
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Quantum Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-80" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-70" />
        
        {/* Neural Connections */}
        <div className="absolute top-1/3 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
        <div className="absolute top-2/3 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/3 left-1/2 w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
      </div>
    </div>
  );
}