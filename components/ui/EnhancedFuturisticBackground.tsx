import React, { useRef, useEffect, useCallback } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'matrix' | 'quantum-cyberpunk' | 'holographic-matrix';
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
      type: 'particle' | 'energy' | 'data' | 'quantum';
      life: number;
      maxLife: number;
    }> = [];

    const connections: Array<{
      from: number;
      to: number;
      opacity: number;
      strength: number;
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      connections.length = 0;
      const particleCount = Math.floor(80 * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() > 0.7 ? 'energy' : 
                           Math.random() > 0.5 ? 'data' : 
                           Math.random() > 0.3 ? 'quantum' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 3 * intensityMultiplier,
          size: Math.random() * 4 * intensityMultiplier + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant, particleType),
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100
        });
      }

      // Create connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150 && Math.random() > 0.7) {
            connections.push({
              from: i,
              to: j,
              opacity: Math.random() * 0.3 + 0.1,
              strength: 1 - (distance / 150)
            });
          }
        }
      }
    };

    const getParticleColor = (variant: string, type: string) => {
      const baseColors = {
        'quantum': {
          particle: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 180}, 90%, 70%)`,
          data: `hsl(${Math.random() * 60 + 220}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 240}, 95%, 75%)`
        },
        'holographic': {
          particle: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`,
          data: `hsl(${Math.random() * 60 + 160}, 75%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 220}, 85%, 75%)`
        },
        'neural': {
          particle: `hsl(${Math.random() * 40 + 120}, 80%, 60%)`,
          energy: `hsl(${Math.random() * 40 + 140}, 90%, 70%)`,
          data: `hsl(${Math.random() * 40 + 100}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 40 + 160}, 95%, 75%)`
        },
        'cyberpunk': {
          particle: `hsl(${Math.random() * 60 + 300}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 320}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 280}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 340}, 100%, 75%)`
        },
        'matrix': {
          particle: `hsl(${Math.random() * 60 + 120}, 100%, 50%)`,
          energy: `hsl(${Math.random() * 60 + 140}, 100%, 60%)`,
          data: `hsl(${Math.random() * 60 + 100}, 100%, 55%)`,
          quantum: `hsl(${Math.random() * 60 + 160}, 100%, 65%)`
        },
        'quantum-cyberpunk': {
          particle: `hsl(${Math.random() * 60 + 250}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 270}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 230}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 290}, 100%, 75%)`
        },
        'holographic-matrix': {
          particle: `hsl(${Math.random() * 60 + 150}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 170}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 130}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 190}, 100%, 75%)`
        }
      };
      
      return baseColors[variant]?.[type] || baseColors.quantum.particle;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Regenerate particles that have expired
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.color = getParticleColor(variant, particle.type);
        }

        // Draw particle with enhanced effects
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        const alpha = (particle.opacity * particle.life / particle.maxLife).toString(16).padStart(2, '0');
        const baseColor = particle.color;
        
        if (particle.type === 'energy') {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(0.5, baseColor + '80');
          gradient.addColorStop(1, baseColor + '00');
        } else if (particle.type === 'quantum') {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(0.3, baseColor + 'A0');
          gradient.addColorStop(0.7, baseColor + '60');
          gradient.addColorStop(1, baseColor + '00');
        } else {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(1, baseColor + '00');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect for energy and quantum particles
        if (particle.type === 'energy' || particle.type === 'quantum') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw connections
      connections.forEach(connection => {
        const from = particles[connection.from];
        const to = particles[connection.to];
        
        if (from && to) {
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          
          const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          const alpha = (connection.opacity * connection.strength).toString(16).padStart(2, '0');
          
          gradient.addColorStop(0, from.color + alpha);
          gradient.addColorStop(1, to.color + alpha);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = connection.strength * 2;
          ctx.stroke();
        }
      });

      // Add special effects based on variant
      if (variant === 'matrix' || variant === 'holographic-matrix') {
        drawMatrixEffect(ctx, canvas, intensityMultiplier);
      }

      if (variant === 'cyberpunk' || variant === 'quantum-cyberpunk') {
        drawCyberpunkEffect(ctx, canvas, intensityMultiplier);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, intensity: number) => {
      const time = Date.now() * 0.001;
      ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 50 + time * 100) % canvas.width;
        const y = (i * 30 + time * 50) % canvas.height;
        ctx.fillRect(x, y, 2, 20);
      }
    };

    const drawCyberpunkEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, intensity: number) => {
      const time = Date.now() * 0.0005;
      ctx.strokeStyle = `hsla(${280 + Math.sin(time) * 20}, 100%, 50%, 0.3)`;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * (0.2 + i * 0.15) + Math.sin(time + i) * 20);
        ctx.lineTo(canvas.width, canvas.height * (0.2 + i * 0.15) + Math.sin(time + i + 1) * 20);
        ctx.stroke();
      }
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}