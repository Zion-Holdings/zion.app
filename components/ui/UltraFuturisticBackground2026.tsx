import React, { useEffect, useRef, useState, useCallback } from 'react';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyber' | 'neon';
  className?: string;
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
  children,
  intensity = 'medium',
  theme = 'quantum',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get intensity value
  const getIntensityValue = useCallback((intensity: string): number => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'medium': return 0.6;
      case 'high': return 1.0;
      default: return 0.6;
    }
  }, []);

  // Get theme colors
  const getThemeColors = useCallback((theme: string): { primary: string; secondary: string; accent: string } => {
    switch (theme) {
      case 'quantum':
        return {
          primary: '#3b82f6',   // Blue
          secondary: '#8b5cf6',  // Purple
          accent: '#06b6d4'      // Cyan
        };
      case 'cyber':
        return {
          primary: '#10b981',    // Green
          secondary: '#f59e0b',  // Amber
          accent: '#ef4444'      // Red
        };
      case 'neon':
        return {
          primary: '#ec4899',    // Pink
          secondary: '#f97316',  // Orange
          accent: '#8b5cf6'      // Purple
        };
      default:
        return {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4'
        };
    }
  }, []);

  // Initialize canvas and animation
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
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = getThemeColors(theme);
    const intensityValue = getIntensityValue(intensity);
    const particleCount = Math.floor(50 * intensityValue);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5 * intensityValue,
        vy: (Math.random() - 0.5) * 0.5 * intensityValue,
        size: Math.random() * 2 * intensityValue + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)]
      });
    }

    // Animation loop
    const animate = () => {
      if (isReducedMotion) {
        // Static background for reduced motion
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw static particles
        particles.forEach(particle => {
          ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Clear canvas with fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle
          ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw connection lines
          particles.forEach(otherParticle => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100 * intensityValue) {
              ctx.strokeStyle = particle.color + Math.floor((particle.opacity * 0.3) * 255).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, intensity, isReducedMotion, getThemeColors, getIntensityValue]);

  return (
    <div className={`relative ${className}`}>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2026;