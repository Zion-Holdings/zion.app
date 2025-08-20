import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'matrix' | 'hologram' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'particles', 
  intensity = 'medium',
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    let matrixChars: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string;
      opacity: number;
    }> = [];
    let hologramLines: any[] = [];

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    const initParticles = () => {
      particles = [];
      const particleCount = intensity === 'high' ? 100 : intensity === 'medium' ? 60 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
        });
      }
    };

    const initMatrix = () => {
      matrixChars = [];
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columnCount = Math.floor(canvas.width / 20);
      
      for (let i = 0; i < columnCount; i++) {
        matrixChars.push({
          x: i * 20,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          chars: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.5 + 0.5
        });
      }
    };

    const initHologram = () => {
      hologramLines = [];
      const lineCount = intensity === 'high' ? 8 : intensity === 'medium' ? 6 : 4;
      
      for (let i = 0; i < lineCount; i++) {
        hologramLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 100 + 50,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
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

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = '#00d4ff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const drawMatrix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      matrixChars.forEach(char => {
        ctx.save();
        ctx.globalAlpha = char.opacity;
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px monospace';
        ctx.fillText(char.chars, char.x, char.y);
        ctx.restore();

        char.y += char.speed;
        if (char.y > canvas.height) {
          char.y = -20;
        }
      });
    };

    const drawHologram = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      hologramLines.forEach(line => {
        ctx.save();
        ctx.globalAlpha = line.opacity;
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        const endX = line.x + Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;
        
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();

        // Animate line
        line.angle += 0.02;
        line.opacity = Math.sin(Date.now() * 0.001 + line.x * 0.01) * 0.3 + 0.3;
      });
    };

    const animate = () => {
      switch (variant) {
        case 'particles':
          drawParticles();
          break;
        case 'matrix':
          drawMatrix();
          break;
        case 'hologram':
          drawHologram();
          break;
        case 'cyber':
          drawParticles();
          drawMatrix();
          break;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize based on variant
    switch (variant) {
      case 'particles':
        initParticles();
        break;
      case 'matrix':
        initMatrix();
        break;
      case 'hologram':
        initHologram();
        break;
      case 'cyber':
        initParticles();
        initMatrix();
        break;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-5" />
        
        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neon-blue/20 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-purple/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-green/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neon-pink/20 to-transparent" />
        
        {/* Scanning lines */}
        <div className="absolute inset-0 scanning-lines opacity-10" />
      </div>
    </div>
  );
};

export default AnimatedBackground;