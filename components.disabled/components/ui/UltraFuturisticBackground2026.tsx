import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface UltraFuturisticBackground2026Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyber' | 'neon';
  className?: string;
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
  intensity = 'medium',
  theme = 'quantum',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // Intersection Observer for performance
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
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

  // Memoized particle system configuration
  const particleConfig = useMemo(() => ({
    maxParticles: isReducedMotion ? 50 : 150,
    particleSize: { min: 1, max: 3 },
    speed: { min: 0.5, max: 2.0 },
    opacity: { min: 0.1, max: 0.8 }
  }), [isReducedMotion]);

  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible || isReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
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
      life: number;
      maxLife: number;
    }> = [];

    const colors = getThemeColors(theme);
    const intensityValue = getIntensityValue(intensity);

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleConfig.maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleConfig.speed.max * intensityValue,
          vy: (Math.random() - 0.5) * particleConfig.speed.max * intensityValue,
          size: Math.random() * (particleConfig.particleSize.max - particleConfig.particleSize.min) + particleConfig.particleSize.min,
          opacity: Math.random() * (particleConfig.opacity.max - particleConfig.opacity.min) + particleConfig.opacity.min,
          color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)],
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!isVisible || isReducedMotion) return;

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

        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.3 * intensityValue;
            ctx.strokeStyle = colors.primary;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isReducedMotion, theme, intensity, getThemeColors, getIntensityValue, particleConfig]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (isReducedMotion) {
    return (
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default UltraFuturisticBackground2026;