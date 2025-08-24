import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
<<<<<<< HEAD
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

      // Update and draw particles
      particles.forEach((particle, index) => {
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
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

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
  }, []);

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
}
=======
  variant?: 'particles' | 'gradient' | 'grid' | 'waves' | 'stars';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function AnimatedBackground({ 
  variant = 'particles', 
  className = '', 
  intensity = 'medium' 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (variant === 'particles' && canvasRef.current) {
      const canvas = canvasRef.current;
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
        const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
        particles = [];
        
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`
          });
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create gradient background
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.05)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

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
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        });

        ctx.globalAlpha = 1;
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
    }
  }, [variant, intensity]);

  if (variant === 'particles') {
    return (
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none ${className}`}
        style={{ zIndex: -1 }}
      />
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-blue-900/10 to-indigo-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-teal-900/5 to-cyan-900/5" />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-purple-600/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-pink-600/5" />
      </div>
    );
  }

  if (variant === 'stars') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,255,198,0.05),transparent_50%)]" />
      </div>
    );
  }

  return null;
}

// CSS for grid pattern
const gridStyles = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = gridStyles;
  document.head.appendChild(style);
}
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b289
