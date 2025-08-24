import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'cyberpunk' | 'neon' | 'holographic' | 'matrix';
}

export function FuturisticBackground({ 
  children, 
  className = '', 
  intensity = 'medium',
  colorScheme = 'cyberpunk' 
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
      life: number;
      maxLife: number;
    }> = [];

    const getColorScheme = () => {
      switch (colorScheme) {
        case 'cyberpunk':
          return {
            primary: '#8c15e9',
            secondary: '#22ddd2',
            accent: '#ff0080',
            background: 'rgba(8, 8, 8, 0.8)'
          };
        case 'neon':
          return {
            primary: '#00ffff',
            secondary: '#ff00ff',
            accent: '#ffff00',
            background: 'rgba(0, 0, 0, 0.9)'
          };
        case 'holographic':
          return {
            primary: '#ff6b6b',
            secondary: '#4ecdc4',
            accent: '#45b7d1',
            background: 'rgba(0, 0, 0, 0.7)'
          };
        case 'matrix':
          return {
            primary: '#00ff00',
            secondary: '#00cc00',
            accent: '#009900',
            background: 'rgba(0, 0, 0, 0.95)'
          };
        default:
          return {
            primary: '#8c15e9',
            secondary: '#22ddd2',
            accent: '#ff0080',
            background: 'rgba(8, 8, 8, 0.8)'
          };
      }
    };

    const colors = getColorScheme();

    // Create particles
    const createParticle = () => {
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      
      if (particles.length < particleCount) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Update and draw particles
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      createParticle();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        // Draw particle
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, colors.primary);
        gradient.addColorStop(0.5, colors.secondary);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = colors.accent;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Draw grid lines for cyberpunk effect
      if (colorScheme === 'cyberpunk' || colorScheme === 'matrix') {
        ctx.strokeStyle = colors.primary;
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
      }

      // Draw scanning line effect
      if (intensity === 'high') {
        const scanY = (Date.now() / 20) % canvas.height;
        const gradient = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, colors.accent + '40');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, scanY - 10, canvas.width, 20);
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
  }, [intensity, colorScheme]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Preset background components for common use cases
export function CyberpunkBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="high" 
      colorScheme="cyberpunk"
    >
      {children}
    </FuturisticBackground>
  );
}

export function NeonBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="medium" 
      colorScheme="neon"
    >
      {children}
    </FuturisticBackground>
  );
}

export function HolographicBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="low" 
      colorScheme="holographic"
    >
      {children}
    </FuturisticBackground>
  );
}

export function MatrixBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="high" 
      colorScheme="matrix"
    >
      {children}
    </FuturisticBackground>
  );
}