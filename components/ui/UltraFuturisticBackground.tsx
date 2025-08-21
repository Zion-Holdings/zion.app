import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'space' | 'cyberpunk';
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  className = '',
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
      type: 'quantum' | 'holographic' | 'neural' | 'space' | 'cyberpunk';
    }> = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant)[Math.floor(Math.random() * getParticleColor(variant).length)],
          type: variant
        });
      }
    };

    const getParticleColor = (type: string) => {
      const colors = {
        quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
        holographic: ['#ff69b4', '#00bfff', '#ff1493', '#00fa9a'],
        neural: ['#32cd32', '#ff4500', '#9370db', '#ffd700'],
        space: ['#ffffff', '#87ceeb', '#dda0dd', '#f0e68c'],
        cyberpunk: ['#ff0080', '#00ff80', '#8000ff', '#ff8000']
      };
      return colors[type as keyof typeof colors] || colors.quantum;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw quantum field lines
      if (variant === 'quantum') {
        drawQuantumField(ctx);
      }
      
      // Draw holographic grid
      if (variant === 'holographic') {
        drawHolographicGrid(ctx);
      }
      
      // Draw neural connections
      if (variant === 'neural') {
        drawNeuralConnections(ctx);
      }
      
      // Draw space nebula
      if (variant === 'space') {
        drawSpaceNebula(ctx);
      }
      
      // Draw cyberpunk city
      if (variant === 'cyberpunk') {
        drawCyberpunkCity(ctx);
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
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw energy waves
      drawEnergyWaves(ctx);
      
      // Draw data streams
      drawDataStreams(ctx);
      
      // Draw quantum fluctuations
      drawQuantumFluctuations(ctx);
    };

    const drawQuantumField = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = '#ff69b4';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.2;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Diagonal lines
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(canvas.width, 0);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();
      
      ctx.globalAlpha = 1;
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = '#32cd32';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      
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
            ctx.stroke();
          }
        });
      });
      
      ctx.globalAlpha = 1;
    };

    const drawSpaceNebula = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.fillStyle = 'rgba(135, 206, 235, 0.1)';
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2 + Math.cos(time + i) * 100,
          canvas.height / 2 + Math.sin(time + i) * 100,
          50 + Math.sin(time * 2 + i) * 20,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    };

    const drawCyberpunkCity = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.fillStyle = '#ff0080';
      ctx.globalAlpha = 0.3;
      
      // Draw building silhouettes
      for (let i = 0; i < 10; i++) {
        const x = (canvas.width / 10) * i;
        const height = 50 + Math.sin(time + i) * 30;
        ctx.fillRect(x, canvas.height - height, 20, height);
      }
      
      ctx.globalAlpha = 1;
    };

    const drawEnergyWaves = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = '#00ff80';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + Math.sin(x * 0.02 + time * 2 + i) * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
    };

    const drawDataStreams = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.fillStyle = '#8000ff';
      ctx.globalAlpha = 0.4;
      
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * canvas.width / 2 + canvas.width / 2;
        const y = (time * 50 + i * 100) % canvas.height;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
    };

    const drawQuantumFluctuations = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = '#ffff00';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.sin(time + i) * 20 + 20;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
    };

    const animate = () => {
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
  }, [variant]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum energy field */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent animate-pulse" />
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5" />
        
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-green-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        </div>
        
        {/* Space dust */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
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

export default UltraFuturisticBackground;