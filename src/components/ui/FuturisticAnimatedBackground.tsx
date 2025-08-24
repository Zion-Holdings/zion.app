import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'zion' | 'cyber' | 'quantum';
}

export function FuturisticAnimatedBackground({ 
  className = '', 
  intensity = 'medium',
  colorScheme = 'zion' 
}: FuturisticAnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const colorSchemes = {
    zion: {
      primary: '#8c15e9',
      secondary: '#22ddd2',
      accent: '#2e73ea',
      background: 'rgba(23, 7, 43, 0.1)'
    },
    cyber: {
      primary: '#00ff88',
      secondary: '#ff0088',
      accent: '#0088ff',
      background: 'rgba(0, 0, 0, 0.1)'
    },
    quantum: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(0, 0, 0, 0.1)'
    }
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 2 }[intensity];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
        size: Math.random() * 3 * intensityMultiplier + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50
      };
    };

    const initParticles = () => {
      const particleCount = Math.floor(50 * intensityMultiplier);
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle
        const opacity = (particle.life / particle.maxLife) * particle.opacity;
        ctx.save();
        ctx.globalAlpha = opacity;
        
        // Glow effect
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 20 * intensityMultiplier;
        
        // Particle
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.fillStyle = colors.secondary;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 * intensityMultiplier) {
            const opacity = 1 - (distance / (100 * intensityMultiplier));
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, colors, intensityMultiplier);

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const drawGeometricShapes = (ctx: CanvasRenderingContext2D, colors: any, intensity: number) => {
      const time = Date.now() * 0.001;
      
      // Hexagons
      for (let i = 0; i < 3 * intensity; i++) {
        const x = (canvas.width / 4) * (i + 1);
        const y = canvas.height / 2 + Math.sin(time + i) * 50;
        const size = 30 + Math.sin(time * 2 + i) * 10;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        ctx.translate(x, y);
        ctx.rotate(time + i);
        
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // Triangles
      for (let i = 0; i < 2 * intensity; i++) {
        const x = canvas.width - (canvas.width / 4) * (i + 1);
        const y = canvas.height / 2 + Math.cos(time + i) * 60;
        const size = 25 + Math.sin(time * 1.5 + i) * 8;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 2;
        ctx.translate(x, y);
        ctx.rotate(-time * 0.5 + i);
        
        ctx.beginPath();
        for (let j = 0; j < 3; j++) {
          const angle = (j * Math.PI * 2) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    };

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}