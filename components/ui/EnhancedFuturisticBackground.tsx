import React, { useRef, useEffect, useCallback } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function EnhancedFuturisticBackground({
  children,
  variant = 'quantum',
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const intensityMultiplier = {
      low: 0.5,
      medium: 1.0,
      high: 1.5
    }[intensity];

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(50 * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 3 * intensityMultiplier + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant)
        });
      }
    };

    const getParticleColor = (variant: string) => {
      switch (variant) {
        case 'holographic':
          return `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        case 'neural':
          return `hsl(${Math.random() * 40 + 120}, 80%, 60%)`;
        case 'cyberpunk':
          return `hsl(${Math.random() * 60 + 300}, 90%, 60%)`;
        case 'matrix':
          return `hsl(${Math.random() * 60 + 120}, 100%, 50%)`;
        default:
          return `hsl(${Math.random() * 60 + 200}, 80%, 60%)`;
      }
    };

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

        // Draw connections for neural variant
        if (variant === 'neural') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }

        // Draw scan lines for holographic variant
        if (variant === 'holographic' && Math.random() < 0.1) {
          ctx.beginPath();
          ctx.moveTo(0, particle.y);
          ctx.lineTo(canvas.width, particle.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw grid for cyberpunk variant
        if (variant === 'cyberpunk') {
          const gridSize = 50;
          for (let x = 0; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.strokeStyle = `rgba(0, 255, 0, ${0.1 * intensityMultiplier})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
          for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.strokeStyle = `rgba(0, 255, 0, ${0.1 * intensityMultiplier})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw matrix rain for matrix variant
        if (variant === 'matrix') {
          ctx.fillStyle = `rgba(0, 255, 0, ${particle.opacity})`;
          ctx.font = `${particle.size * 2}px monospace`;
          ctx.fillText('01', particle.x, particle.y);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
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

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}