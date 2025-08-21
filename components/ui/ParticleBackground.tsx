import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

interface ParticleBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeCanvas);
    }

    // Particle configuration
    const particles: Particle[] = [];
    const particleCount = 100;
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
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
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (150 - distance) / 150 * 0.1;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Draw geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas);
      }
    };
  }, [isClient]);

  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001;

    // Rotating triangles
    for (let i = 0; i < 3; i++) {
      const x = width * 0.2 + Math.cos(time + i * Math.PI * 2 / 3) * 50;
      const y = height * 0.2 + Math.sin(time + i * Math.PI * 2 / 3) * 50;
      
      ctx.beginPath();
      ctx.moveTo(x, y - 20);
      ctx.lineTo(x - 17.32, y + 10);
      ctx.lineTo(x + 17.32, y + 10);
      ctx.closePath();
      ctx.strokeStyle = '#3b82f6';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Floating circles
    for (let i = 0; i < 5; i++) {
      const x = width * 0.8 + Math.cos(time * 0.5 + i) * 30;
      const y = height * 0.8 + Math.sin(time * 0.5 + i) * 30;
      
      ctx.beginPath();
      ctx.arc(x, y, 15 + Math.sin(time + i) * 5, 0, Math.PI * 2);
      ctx.strokeStyle = '#8b5cf6';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Grid pattern
    ctx.strokeStyle = '#06b6d4';
    ctx.globalAlpha = 0.05;
    ctx.lineWidth = 1;

    const gridSize = 100;
    const offset = (time * 10) % gridSize;

    for (let x = offset; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = offset; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.3 }}
    >
      {children}
    </canvas>
  );
};

export default ParticleBackground;