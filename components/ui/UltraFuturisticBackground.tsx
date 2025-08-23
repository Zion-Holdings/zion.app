import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  variant = 'neural',
  intensity = 'medium',
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const connections: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
    }> = [];

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5,
      extreme: 2
    }[intensity];

    const variantConfig = {
      neural: {
        particleCount: 100 * intensityMultiplier,
        connectionDistance: 150,
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'],
        particleSpeed: 0.5 * intensityMultiplier,
        connectionOpacity: 0.3
      },
      quantum: {
        particleCount: 150 * intensityMultiplier,
        connectionDistance: 200,
        colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'],
        particleSpeed: 0.8 * intensityMultiplier,
        connectionOpacity: 0.4
      },
      holographic: {
        particleCount: 200 * intensityMultiplier,
        connectionDistance: 120,
        colors: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
        particleSpeed: 1.2 * intensityMultiplier,
        connectionOpacity: 0.5
      },
      cyberpunk: {
        particleCount: 250 * intensityMultiplier,
        connectionDistance: 100,
        colors: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6'],
        particleSpeed: 1.5 * intensityMultiplier,
        connectionOpacity: 0.6
      }
    }[variant];

    // Initialize particles
    for (let i = 0; i < variantConfig.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * variantConfig.particleSpeed,
        vy: (Math.random() - 0.5) * variantConfig.particleSpeed,
        size: Math.random() * 3 + 1,
        color: variantConfig.colors[Math.floor(Math.random() * variantConfig.colors.length)],
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Create neural network connections
    const createConnections = () => {
      connections.length = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < variantConfig.connectionDistance) {
            connections.push({
              x1: particles[i].x,
              y1: particles[i].y,
              x2: particles[j].x,
              y2: particles[j].y,
              strength: 1 - (distance / variantConfig.connectionDistance)
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle when it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = variantConfig.colors[Math.floor(Math.random() * variantConfig.colors.length)];
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();
      });

      // Create and draw connections
      createConnections();
      connections.forEach(connection => {
        ctx.beginPath();
        ctx.moveTo(connection.x1, connection.y1);
        ctx.lineTo(connection.x2, connection.y2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${connection.strength * variantConfig.connectionOpacity})`;
        ctx.lineWidth = connection.strength * 2;
        ctx.stroke();
      });

      // Add floating geometric shapes
      if (variant === 'holographic' || variant === 'cyberpunk') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width * 0.5 + Math.cos(time + i) * 200;
          const y = canvas.height * 0.5 + Math.sin(time + i * 0.7) * 200;
          
          ctx.beginPath();
          ctx.moveTo(x, y - 20);
          ctx.lineTo(x + 20, y + 20);
          ctx.lineTo(x - 20, y + 20);
          ctx.closePath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 + 0.2 * Math.sin(time + i)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Add quantum wave effects
      if (variant === 'quantum') {
        const time = Date.now() * 0.002;
        for (let i = 0; i < 3; i++) {
          const waveX = canvas.width * 0.5;
          const waveY = canvas.height * 0.5 + i * 100;
          
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 5) {
            const y = waveY + Math.sin((x + time * 100) * 0.01) * 30;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 + 0.2 * Math.sin(time + i)})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      // Add cyberpunk grid
      if (variant === 'cyberpunk') {
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.2 + 0.1 * Math.sin(time)})`;
        ctx.lineWidth = 1;
        
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant === 'cyberpunk' 
            ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
            : variant === 'quantum'
            ? 'linear-gradient(135deg, #000000 0%, #0f172a 50%, #1e293b 100%)'
            : variant === 'holographic'
            ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Glowing orbs */}
        {variant === 'holographic' && (
          <>
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-xl animate-pulse delay-2000" />
          </>
        )}
        
        {/* Neural network overlay */}
        {variant === 'neural' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        )}
        
        {/* Quantum field overlay */}
        {variant === 'quantum' && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5" />
        )}
        
        {/* Cyberpunk scan lines */}
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-pulse" />
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;