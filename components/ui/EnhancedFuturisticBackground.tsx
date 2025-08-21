import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'quantum-holographic' | 'neural-quantum' | 'cyberpunk' | 'holographic' | 'quantum-holographic-advanced' | 'neural-advanced' | 'cyberpunk-advanced' | 'holographic-advanced';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  variant = 'quantum-holographic',
  intensity = 'medium',
  children,
  className
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
      type: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
    }> = [];

    const createParticle = () => {
      const types = ['quantum', 'neural', 'holographic', 'cyberpunk'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      
      let color: string;
      switch (type) {
        case 'quantum':
          color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`;
          break;
        case 'neural':
          color = `hsl(${240 + Math.random() * 60}, 70%, 60%)`;
          break;
        case 'holographic':
          color = `hsl(${300 + Math.random() * 60}, 70%, 60%)`;
          break;
        case 'cyberpunk':
          color = `hsl(${0 + Math.random() * 60}, 70%, 60%)`;
          break;
      }

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color,
        type
      };
    };

    // Initialize particles
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    // Enhanced animation loop
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

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Add quantum effects
        if (particle.type === 'quantum' && Math.random() < 0.01) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = 0.3;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Add neural network effects
        if (particle.type === 'neural' && Math.random() < 0.005) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x + (Math.random() - 0.5) * 100, particle.y + (Math.random() - 0.5) * 100);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = 0.2;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw enhanced background effects
      if (variant.includes('quantum')) {
        drawQuantumEffects(ctx, canvas);
      }
      
      if (variant.includes('holographic')) {
        drawHolographicEffects(ctx, canvas);
      }
      
      if (variant.includes('cyberpunk')) {
        drawCyberpunkEffects(ctx, canvas);
      }
      
      if (variant.includes('neural')) {
        drawNeuralEffects(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  const drawQuantumEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    // Quantum wave patterns
    for (let i = 0; i < 5; i++) {
      const waveOffset = i * Math.PI * 0.4;
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${180 + i * 30}, 70%, 60%, 0.1)`;
      ctx.lineWidth = 2;
      
      for (let x = 0; x < canvas.width; x += 10) {
        const y = Math.sin((x + time * 50 + waveOffset) * 0.01) * 100 + canvas.height / 2;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  };

  const drawHolographicEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    // Holographic grid
    ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
    ctx.lineWidth = 1;
    
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Holographic circles
    for (let i = 0; i < 3; i++) {
      const centerX = canvas.width / 2 + Math.cos(time + i) * 100;
      const centerY = canvas.height / 2 + Math.sin(time + i) * 100;
      const radius = 50 + Math.sin(time * 2 + i) * 20;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${300 + i * 30}, 70%, 60%, 0.2)`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  };

  const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    // Cyberpunk scan lines
    for (let y = 0; y < canvas.height; y += 4) {
      const opacity = Math.sin(time * 10 + y * 0.1) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(255, 0, 255, ${opacity * 0.1})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Cyberpunk energy fields
    for (let i = 0; i < 2; i++) {
      const centerX = canvas.width / 2 + Math.cos(time + i * Math.PI) * 200;
      const centerY = canvas.height / 2 + Math.sin(time + i * Math.PI) * 200;
      
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
      gradient.addColorStop(0, `hsla(${0 + i * 180}, 70%, 60%, 0.3)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawNeuralEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    // Neural network nodes
    const nodes = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3 },
      { x: canvas.width * 0.8, y: canvas.height * 0.3 },
      { x: canvas.width * 0.2, y: canvas.height * 0.7 },
      { x: canvas.width * 0.8, y: canvas.height * 0.7 },
      { x: canvas.width * 0.5, y: canvas.height * 0.5 }
    ];

    // Draw connections
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.lineWidth = 2;
    
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(otherNode => {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(otherNode.x, otherNode.y);
        ctx.stroke();
      });
    });

    // Draw nodes with pulse effect
    nodes.forEach((node, i) => {
      const pulse = Math.sin(time * 3 + i) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8 + pulse * 4, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(240, 70%, 60%, ${0.5 + pulse * 0.3})`;
      ctx.fill();
    });
  };

  const getBackgroundClasses = () => {
    const baseClasses = 'relative min-h-screen overflow-hidden';
    
    switch (variant) {
      case 'quantum-holographic':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-blue-900 to-purple-900');
      case 'neural-quantum':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-indigo-900 to-blue-900');
      case 'cyberpunk':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-purple-900 to-pink-900');
      case 'holographic':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-cyan-900 to-blue-900');
      case 'quantum-holographic-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-blue-900 via-purple-900 to-pink-900');
      case 'neural-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-indigo-900 via-blue-900 to-cyan-900');
      case 'cyberpunk-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-purple-900 via-pink-900 to-red-900');
      case 'holographic-advanced':
        return cn(baseClasses, 'bg-gradient-to-br from-black via-cyan-900 via-blue-900 to-purple-900');
      default:
        return cn(baseClasses, 'bg-gradient-to-br from-black via-blue-900 to-purple-900');
    }
  };

  return (
    <div className={cn(getBackgroundClasses(), className)}>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Enhanced Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Quantum Holographic Overlay */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-blue-500/5 animate-pulse" />
        )}
        
        {/* Neural Network Overlay */}
        {variant.includes('neural') && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-purple-500/5 animate-pulse" />
        )}
        
        {/* Cyberpunk Overlay */}
        {variant.includes('cyberpunk') && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-red-500/5 animate-pulse" />
        )}
        
        {/* Holographic Overlay */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5 animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;