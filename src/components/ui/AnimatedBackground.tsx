import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'grid' | 'waves' | 'stars';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function AnimatedBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  className = '' 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles based on variant and intensity
    const initParticles = () => {
      particles.length = 0;
      const count = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: variant === 'stars' ? '#ffffff' : 
                 variant === 'grid' ? '#22ddd2' : 
                 variant === 'waves' ? '#8c15e9' : '#2e73ea'
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === 'particles' || variant === 'stars') {
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
          ctx.fillStyle = `rgba(${particle.color === '#ffffff' ? '255,255,255' : 
                                   particle.color === '#22ddd2' ? '34,221,210' :
                                   particle.color === '#8c15e9' ? '140,21,233' : '46,115,234'}, ${particle.opacity})`;
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Draw connections between nearby particles
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(34, 221, 210, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });
      } else if (variant === 'grid') {
        // Draw animated grid
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = '#22ddd2';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;

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

        // Add moving highlight
        const highlightX = (time * 50) % canvas.width;
        const highlightY = (time * 30) % canvas.height;
        
        ctx.strokeStyle = '#22ddd2';
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.8;
        
        ctx.beginPath();
        ctx.moveTo(highlightX, 0);
        ctx.lineTo(highlightX, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, highlightY);
        ctx.lineTo(canvas.width, highlightY);
        ctx.stroke();

        ctx.globalAlpha = 1;
      } else if (variant === 'waves') {
        // Draw animated waves
        const time = Date.now() * 0.001;
        const amplitude = 50;
        const frequency = 0.01;
        const speed = 0.5;

        ctx.strokeStyle = '#8c15e9';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;

        // Draw multiple wave layers
        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + 
                     amplitude * Math.sin(frequency * x + time * speed + layer * Math.PI / 3) +
                     layer * 20;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: variant === 'stars' ? 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' :
                   variant === 'grid' ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' :
                   variant === 'waves' ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' :
                   'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
    />
  );
}

// Neon glow effect component
export function NeonGlow({ 
  children, 
  color = '#22ddd2', 
  intensity = 'medium',
  className = '' 
}: {
  children: React.ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}) {
  const blurAmount = intensity === 'low' ? '5px' : intensity === 'medium' ? '10px' : '20px';
  
  return (
    <div 
      className={`relative ${className}`}
      style={{
        textShadow: `0 0 ${blurAmount} ${color}`,
        filter: `drop-shadow(0 0 ${blurAmount} ${color})`
      }}
    >
      {children}
    </div>
  );
}

// Floating elements component
export function FloatingElements({ 
  count = 5, 
  className = '' 
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-zion-cyan rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;
document.head.appendChild(style);