import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  variant?: 'grid' | 'particles' | 'waves' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
}

export function AnimatedBackground({ 
  className = '', 
  variant = 'grid', 
  intensity = 'medium' 
}: AnimatedBackgroundProps) {
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

    let time = 0;
    const intensityMap = { low: 0.3, medium: 0.6, high: 1.0 };

    const animate = () => {
      time += 0.01 * intensityMap[intensity];
      
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      switch (variant) {
        case 'grid':
          drawGrid(ctx, canvas, time);
          break;
        case 'particles':
          drawParticles(ctx, canvas, time);
          break;
        case 'waves':
          drawWaves(ctx, canvas, time);
          break;
        case 'matrix':
          drawMatrix(ctx, canvas, time);
          break;
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

  const drawGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    const gridSize = 50;
    const offsetX = (time * 20) % gridSize;
    const offsetY = (time * 15) % gridSize;

    ctx.strokeStyle = `rgba(139, 21, 233, ${0.3 + 0.2 * Math.sin(time)})`;
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = offsetX; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = offsetY; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Intersection points
    ctx.fillStyle = 'rgba(34, 221, 210, 0.8)';
    for (let x = offsetX; x < canvas.width; x += gridSize) {
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        const pulse = Math.sin(time * 3 + x * 0.01 + y * 0.01);
        const size = 2 + pulse;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    const particleCount = 50;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      if (i === 0 || Math.random() < 0.1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1
        });
      }
    }

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.01;

      if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
        particles.splice(index, 1);
        return;
      }

      const alpha = particle.life;
      const size = 3 * particle.life;
      
      // Particle glow
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, size * 2);
      gradient.addColorStop(0, `rgba(139, 21, 233, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(34, 221, 210, ${alpha * 0.5})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Particle core
      ctx.fillStyle = `rgba(34, 221, 210, ${alpha})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawWaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    const waveCount = 3;
    
    for (let i = 0; i < waveCount; i++) {
      const amplitude = 50 + i * 20;
      const frequency = 0.01 + i * 0.005;
      const speed = 0.5 + i * 0.2;
      const phase = time * speed + i * Math.PI / 3;
      
      ctx.strokeStyle = `rgba(139, 21, 233, ${0.3 - i * 0.1})`;
      ctx.lineWidth = 2;

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 2) {
        const y = canvas.height / 2 + amplitude * Math.sin(frequency * x + phase);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  };

  const drawMatrix = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    ctx.fillStyle = 'rgba(34, 221, 210, 0.8)';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}

export function NeonGlow({ 
  children, 
  color = 'zion-purple', 
  intensity = 'medium' 
}: { 
  children: React.ReactNode; 
  color?: string; 
  intensity?: 'low' | 'medium' | 'high'; 
}) {
  const intensityMap = {
    low: '0 0 10px',
    medium: '0 0 20px, 0 0 40px',
    high: '0 0 20px, 0 0 40px, 0 0 60px'
  };

  const colorMap = {
    'zion-purple': 'rgba(139, 21, 233, 0.8)',
    'zion-cyan': 'rgba(34, 221, 210, 0.8)',
    'zion-blue': 'rgba(46, 115, 234, 0.8)',
    'white': 'rgba(255, 255, 255, 0.8)'
  };

  return (
    <div
      style={{
        textShadow: `${intensityMap[intensity]} ${colorMap[color as keyof typeof colorMap]}`,
        filter: `drop-shadow(0 0 10px ${colorMap[color as keyof typeof colorMap]})`
      }}
    >
      {children}
    </div>
  );
}

export function FloatingOrbs({ count = 5 }: { count?: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-pulse"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            background: `radial-gradient(circle, rgba(139, 21, 233, 0.3) 0%, rgba(34, 221, 210, 0.1) 70%, transparent 100%)`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`
          }}
        />
      ))}
    </div>
  );
}