import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'grid' | 'particles' | 'waves' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function AnimatedBackground({ 
  variant = 'grid', 
  intensity = 'medium',
  className = '' 
}: AnimatedBackgroundProps) {
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
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
        });
      }
    };

    const drawGrid = () => {
      const gridSize = 50;
      const offsetX = (Date.now() * 0.05) % gridSize;
      const offsetY = (Date.now() * 0.03) % gridSize;

      ctx.strokeStyle = 'rgba(34, 221, 210, 0.1)';
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
    };

    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        // Create glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawWaves = () => {
      const time = Date.now() * 0.001;
      const amplitude = 50;
      const frequency = 0.01;
      const speed = 2;

      ctx.strokeStyle = 'rgba(34, 221, 210, 0.3)';
      ctx.lineWidth = 2;

      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
            amplitude * Math.sin(frequency * x + time * speed + wave * Math.PI / 2) +
            wave * 30;
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
      const time = Date.now() * 0.01;
      const columns = Math.floor(canvas.width / 20);
      
      ctx.fillStyle = 'rgba(34, 221, 210, 0.1)';
      ctx.font = '12px monospace';

      for (let i = 0; i < columns; i++) {
        const x = i * 20;
        const y = (Math.sin(time + i) * 0.5 + 0.5) * canvas.height;
        
        ctx.fillText('01', x, y);
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
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

// Neon glow effect component
export function NeonGlow({ 
  children, 
  color = 'zion-cyan',
  intensity = 'medium' 
}: {
  children: React.ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
}) {
  const glowIntensity = intensity === 'low' ? '0 0 10px' : 
                        intensity === 'medium' ? '0 0 20px' : '0 0 30px';

  return (
    <div 
      className={`text-${color} drop-shadow-[${glowIntensity}_${color}]`}
      style={{
        textShadow: `0 0 ${glowIntensity.split(' ')[2]} var(--tw-shadow-color)`
      }}
    >
      {children}
    </div>
  );
}

// Animated gradient border component
export function AnimatedGradientBorder({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan rounded-lg p-[2px] animate-pulse">
        <div className="bg-zion-blue-dark rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

// Floating elements component
export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}