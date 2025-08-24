import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  variant?: 'particles' | 'grid' | 'waves' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function FuturisticBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  className = '' 
}: FuturisticBackgroundProps) {
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

    // Particle system
    if (variant === 'particles') {
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
        color: string;
      }> = [];

      const colors = [
        '#00ffff', // Cyan
        '#ff00ff', // Magenta
        '#ffff00', // Yellow
        '#00ff00', // Green
        '#ff0080', // Pink
        '#8000ff', // Purple
        '#00ff80', // Mint
        '#ff8000'  // Orange
      ];

      // Create particles
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
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
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          // Draw glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;
          
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
                ctx.globalAlpha = (150 - distance) / 150 * 0.3;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    // Grid system
    if (variant === 'grid') {
      const gridSize = intensity === 'high' ? 20 : intensity === 'medium' ? 30 : 40;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = '#00ffff';
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
        
        // Animated grid points
        const time = Date.now() * 0.001;
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, 2 * pulse, 0, Math.PI * 2);
            ctx.fillStyle = '#00ffff';
            ctx.globalAlpha = 0.8 * pulse;
            ctx.fill();
          }
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    // Wave system
    if (variant === 'waves') {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        const waveCount = intensity === 'high' ? 5 : intensity === 'medium' ? 3 : 2;
        
        for (let i = 0; i < waveCount; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.6;
          
          for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + 
              Math.sin(x * 0.01 + time + i) * 100 +
              Math.sin(x * 0.005 + time * 0.5 + i) * 50;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.stroke();
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    // Matrix system
    if (variant === 'matrix') {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const drops: number[] = [];
      const fontSize = intensity === 'high' ? 12 : intensity === 'medium' ? 16 : 20;
      const columns = Math.floor(canvas.width / fontSize);
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      
      const animate = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          drops[i]++;
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    />
  );
}

// Neon text component
export function NeonText({ 
  children, 
  color = '#00ffff', 
  glowIntensity = 'medium',
  className = '' 
}: {
  children: React.ReactNode;
  color?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  className?: string;
}) {
  const glowSize = glowIntensity === 'high' ? '0 0 20px' : glowIntensity === 'medium' ? '0 0 15px' : '0 0 10px';
  
  return (
    <span
      className={className}
      style={{
        color: color,
        textShadow: `
          ${glowSize} ${color},
          0 0 30px ${color},
          0 0 40px ${color}
        `,
        animation: 'neon-pulse 2s ease-in-out infinite alternate'
      }}
    >
      {children}
    </span>
  );
}

// Futuristic card component
export function FuturisticCard({ 
  children, 
  className = '',
  glowColor = '#00ffff',
  intensity = 'medium'
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}) {
  const glowSize = intensity === 'high' ? '0 0 30px' : intensity === 'medium' ? '0 0 20px' : '0 0 10px';
  
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm ${className}`}
      style={{
        boxShadow: `0 0 ${glowSize} ${glowColor}`,
        borderColor: `${glowColor}40`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      <div className="relative z-10 p-6">
        {children}
      </div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${glowColor}20 50%, transparent 70%)`,
          animation: 'shimmer 3s ease-in-out infinite'
        }}
      />
    </div>
  );
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes neon-pulse {
    from {
      text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
    }
    to {
      text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
    }
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);