import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-advanced' | 'holographic-advanced' | 'neural-advanced' | 'cyber-advanced';
  intensity?: 'low' | 'medium' | 'high';
}

export default function EnhancedFuturisticBackground({ 
  children, 
  variant = 'quantum-advanced',
  intensity = 'medium' 
}: EnhancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyber';
    }> = [];

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    const createParticles = () => {
      particles = [];
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      
      for (let i = 0; i < particleCount; i++) {
        const type = variant === 'quantum-advanced' ? 'quantum' : 
                    variant === 'holographic-advanced' ? 'holographic' :
                    variant === 'neural-advanced' ? 'neural' : 'cyber';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: getParticleColor(type),
          type
        });
      }
    };

    const getParticleColor = (type: string) => {
      switch (type) {
        case 'quantum':
          return `hsl(${Math.random() * 60 + 180}, 70%, 60%)`; // Cyan to Blue
        case 'holographic':
          return `hsl(${Math.random() * 60 + 270}, 80%, 70%)`; // Purple to Pink
        case 'neural':
          return `hsl(${Math.random() * 60 + 120}, 80%, 60%)`; // Green to Yellow
        case 'cyber':
          return `hsl(${Math.random() * 60 + 0}, 80%, 60%)`; // Red to Orange
        default:
          return `hsl(${Math.random() * 360}, 70%, 60%)`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (variant === 'quantum-advanced') {
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'holographic-advanced') {
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'neural-advanced') {
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.1)');
        gradient.addColorStop(0.5, 'rgba(234, 179, 8, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(239, 68, 68, 0.1)');
        gradient.addColorStop(0.5, 'rgba(245, 101, 101, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Add quantum effects
        if (variant === 'quantum-advanced' && Math.random() < 0.01) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Add holographic effects
        if (variant === 'holographic-advanced' && Math.random() < 0.02) {
          ctx.save();
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.restore();
        }

        // Add neural network effects
        if (variant === 'neural-advanced' && Math.random() < 0.015) {
          ctx.beginPath();
          ctx.moveTo(particle.x - 10, particle.y);
          ctx.lineTo(particle.x + 10, particle.y);
          ctx.moveTo(particle.x, particle.y - 10);
          ctx.lineTo(particle.x, particle.y + 10);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Add cyber effects
        if (variant === 'cyber-advanced' && Math.random() < 0.02) {
          ctx.beginPath();
          ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Add floating geometric shapes
      if (intensity === 'high') {
        drawFloatingShapes(ctx, canvas);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawFloatingShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      // Draw rotating triangles
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(
          canvas.width * 0.2 + Math.sin(time + i) * 50,
          canvas.height * 0.3 + Math.cos(time + i) * 50
        );
        ctx.rotate(time + i);
        
        ctx.beginPath();
        ctx.moveTo(0, -20);
        ctx.lineTo(17, 10);
        ctx.lineTo(-17, 10);
        ctx.closePath();
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Draw floating circles
      for (let i = 0; i < 2; i++) {
        ctx.save();
        ctx.translate(
          canvas.width * 0.8 + Math.sin(time * 0.5 + i) * 40,
          canvas.height * 0.7 + Math.cos(time * 0.5 + i) * 40
        );
        
        ctx.beginPath();
        ctx.arc(0, 0, 15 + Math.sin(time + i) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
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
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-transparent to-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}