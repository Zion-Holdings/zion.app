import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'neural-quantum' | 'cyber-futuristic' | 'quantum-entanglement' | 'neural-network';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  variant = 'neural-quantum',
  intensity = 'medium',
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

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
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neural' | 'cyber';
    }> = [];

    // Initialize particles based on variant and intensity
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant)[Math.floor(Math.random() * getParticleColor(variant).length)],
          type: getParticleType(variant)
        });
      }
    };

    const getParticleColor = (variant: string) => {
      const colors = {
        'neural-quantum': ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'],
        'cyber-futuristic': ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
        'quantum-entanglement': ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899'],
        'neural-network': ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981']
      };
      return colors[variant as keyof typeof colors] || colors['neural-quantum'];
    };

    const getParticleType = (variant: string) => {
      const types = ['quantum', 'neural', 'cyber'] as const;
      return types[Math.floor(Math.random() * types.length)];
    };

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

        // Add quantum effects
        if (particle.type === 'quantum') {
          particle.x += Math.sin(time + index) * 0.5;
          particle.y += Math.cos(time + index) * 0.5;
        }

        // Add neural network effects
        if (particle.type === 'neural') {
          particle.size = Math.sin(time + index) * 2 + 2;
          particle.opacity = Math.sin(time + index) * 0.4 + 0.6;
        }

        // Add cyber effects
        if (particle.type === 'cyber') {
          particle.vx += Math.sin(time * 2 + index) * 0.01;
          particle.vy += Math.cos(time * 2 + index) * 0.01;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Add quantum wave effects
      if (variant === 'quantum-entanglement') {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Add neural network grid
      if (variant === 'neural-network') {
        const gridSize = 50;
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 0.5;
        
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
      }

      // Add cyber grid overlay
      if (variant === 'cyber-futuristic') {
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
        ctx.lineWidth = 1;
        
        // Diagonal lines
        for (let i = -canvas.width; i < canvas.width + canvas.height; i += 30) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + canvas.height, canvas.height);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  const getBackgroundClass = () => {
    const baseClass = 'relative min-h-screen overflow-hidden';
    const variantClasses = {
      'neural-quantum': 'neural-bg',
      'cyber-futuristic': 'quantum-bg',
      'quantum-entanglement': 'quantum-bg',
      'neural-network': 'neural-bg'
    };
    
    return `${baseClass} ${variantClasses[variant]} ${className}`;
  };

  return (
    <div className={getBackgroundClass()}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Quantum Particles */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Quantum Wave Effect */}
      <div className="quantum-wave absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
    </div>
  );
};

export default EnhancedFuturisticBackground;