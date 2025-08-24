import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  variant?: 'grid' | 'particles' | 'waves' | 'matrix';
}

export function AnimatedBackground({ className = '', variant = 'grid' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = variant === 'particles' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawGrid = () => {
      const gridSize = 40;
      const offset = (Date.now() * 0.001) % gridSize;
      
      ctx.strokeStyle = 'rgba(139, 21, 233, 0.1)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
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
        ctx.fillStyle = `rgba(34, 221, 210, ${particle.opacity})`;
        ctx.fill();
        
        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 21, 233, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const drawWaves = () => {
      const time = Date.now() * 0.001;
      const amplitude = 50;
      const frequency = 0.01;
      
      ctx.strokeStyle = 'rgba(34, 221, 210, 0.3)';
      ctx.lineWidth = 2;
      
      // Draw multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
                   amplitude * Math.sin(frequency * x + time + layer) +
                   layer * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    const drawMatrix = () => {
      const time = Date.now() * 0.001;
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      
      ctx.fillStyle = 'rgba(34, 221, 210, 0.8)';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = (Math.sin(time + i) * 0.5 + 0.5) * canvas.height;
        
        const char = String.fromCharCode(
          Math.floor(Math.random() * 26) + 65
        );
        
        ctx.fillText(char, x, y);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch (variant) {
        case 'grid':
          drawGrid();
          break;
        case 'particles':
          drawParticles();
          break;
        case 'waves':
          drawWaves();
          break;
        case 'matrix':
          drawMatrix();
          break;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    />
  );
}

// Neon glow effect component
export function NeonGlow({ children, className = '', glowColor = '#8c15e9' }: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        filter: `drop-shadow(0 0 10px ${glowColor})`
      }}
    >
      {children}
    </div>
  );
}

// Floating particles component
export function FloatingParticles({ count = 20, className = '' }: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-zion-cyan rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Gradient border component
export function GradientBorder({ children, className = '', borderWidth = '2px' }: {
  children: React.ReactNode;
  className?: string;
  borderWidth?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(45deg, #8c15e9, #22ddd2, #8c15e9)`,
        padding: borderWidth,
        borderRadius: 'inherit',
      }}
    >
      <div className="bg-zion-blue-dark rounded-[inherit] h-full w-full">
        {children}
      </div>
    </div>
  );
}