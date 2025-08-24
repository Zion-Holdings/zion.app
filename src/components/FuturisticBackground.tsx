import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  showParticles?: boolean;
  showGrid?: boolean;
  showNeon?: boolean;
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  showParticles = true,
  showGrid = true,
  showNeon = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
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
    const particleCount = intensity === 'high' ? 100 : intensity === 'medium' ? 60 : 30;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)]
    }));

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      if (showGrid) {
        drawGrid(ctx, canvas.width, canvas.height);
      }

      // Draw particles
      if (showParticles) {
        drawParticles(ctx, canvas.width, canvas.height);
      }

      // Draw neon effects
      if (showNeon) {
        drawNeonEffects(ctx, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, showParticles, showGrid, showNeon]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gridSize = 50;
    const gridOpacity = 0.1;

    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = gridOpacity;

    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  };

  const drawParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();

      // Draw glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw connection lines
      particlesRef.current.slice(index + 1).forEach(otherParticle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + 
          Math.pow(particle.y - otherParticle.y, 2)
        );
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = (100 - distance) / 100 * 0.3;
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
    });
  };

  const drawNeonEffects = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw scanning line effect
    const time = Date.now() * 0.001;
    const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * height;
    
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.3;
    
    // Main scan line
    ctx.beginPath();
    ctx.moveTo(0, scanY);
    ctx.lineTo(width, scanY);
    ctx.stroke();
    
    // Scan line glow
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(0, scanY);
    ctx.lineTo(width, scanY);
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Corner effects
    const cornerSize = 100;
    const cornerOpacity = 0.4;
    
    // Top-left corner
    ctx.strokeStyle = '#ff00ff';
    ctx.lineWidth = 3;
    ctx.globalAlpha = cornerOpacity;
    ctx.beginPath();
    ctx.moveTo(0, cornerSize);
    ctx.lineTo(0, 0);
    ctx.lineTo(cornerSize, 0);
    ctx.stroke();
    
    // Top-right corner
    ctx.strokeStyle = '#00ff00';
    ctx.beginPath();
    ctx.moveTo(width - cornerSize, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, cornerSize);
    ctx.stroke();
    
    // Bottom-left corner
    ctx.strokeStyle = '#ffff00';
    ctx.beginPath();
    ctx.moveTo(0, height - cornerSize);
    ctx.lineTo(0, height);
    ctx.lineTo(cornerSize, height);
    ctx.stroke();
    
    // Bottom-right corner
    ctx.strokeStyle = '#ff0080';
    ctx.beginPath();
    ctx.moveTo(width - cornerSize, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width, height - cornerSize);
    ctx.stroke();
    
    ctx.globalAlpha = 1;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 30, 60, 0.8) 0%, rgba(10, 10, 20, 0.95) 100%)'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Additional CSS-based effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 animate-gradient-shift"
          style={{
            background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #ff0080, #00ffff)',
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20 animate-spin-slow" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-yellow-400 opacity-20 animate-bounce" />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20 animate-ping" />
      </div>
    </div>
  );
};

export default FuturisticBackground;