import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
  children,
  intensity = 'medium',
  theme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const intensityValues = {
    low: { particles: 50, speed: 0.5, opacity: 0.3 },
    medium: { particles: 100, speed: 1, opacity: 0.6 },
    high: { particles: 200, speed: 1.5, opacity: 0.8 }
  };

  const themeConfigs = {
    quantum: {
      colors: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      patterns: ['quantum', 'wave', 'particle'],
      effects: ['entanglement', 'superposition', 'tunneling']
    },
    neon: {
      colors: ['#ff0080', '#8000ff', '#00ffff', '#ffff00'],
      patterns: ['grid', 'circuit', 'digital'],
      effects: ['glow', 'pulse', 'flicker']
    },
    holographic: {
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      patterns: ['hologram', 'prism', 'rainbow'],
      effects: ['reflection', 'refraction', 'diffraction']
    },
    cyberpunk: {
      colors: ['#ff0040', '#00ff41', '#0080ff', '#ff8000'],
      patterns: ['matrix', 'circuit', 'digital'],
      effects: ['glitch', 'scan', 'corrupt']
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const config = intensityValues[intensity];
    const themeConfig = themeConfigs[theme];

    // Initialize particles (respect reduced motion)
    const particleCount = prefersReducedMotion ? Math.min(16, config.particles / 4) : config.particles;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * config.speed,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * config.speed,
        size: Math.random() * 3 + 1,
        color: themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)],
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );

      if (theme === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.3, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (theme === 'neon') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.4, 'rgba(255, 0, 128, 0.1)');
        gradient.addColorStop(0.7, 'rgba(128, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      } else if (theme === 'holographic') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.3, 'rgba(255, 107, 107, 0.1)');
        gradient.addColorStop(0.6, 'rgba(78, 205, 196, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.4, 'rgba(255, 0, 64, 0.1)');
        gradient.addColorStop(0.7, 'rgba(0, 255, 65, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (!prefersReducedMotion) {
          particle.life--;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is over
        if (!prefersReducedMotion && particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
        }

        // Draw particle with glow effect
        const alpha = (particle.life / particle.maxLife) * config.opacity;
        ctx.shadowBlur = prefersReducedMotion ? 0 : 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = prefersReducedMotion ? particle.color : `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles (skip in reduced motion)
        if (!prefersReducedMotion) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index === otherIndex) return;
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              const opacity = ((100 - distance) / 100) * alpha * 0.3;
              ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        }
      });

      // Skip expensive wave/grid effects if user prefers reduced motion
      if (!prefersReducedMotion && theme === 'quantum') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + 
              Math.sin(x * 0.01 + time + i) * 50 * Math.sin(time * 0.5) +
              Math.sin(x * 0.005 + time * 2 + i) * 30;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion && theme === 'neon') {
        const gridSize = 50;
        ctx.strokeStyle = 'rgba(255, 0, 128, 0.1)';
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

      animationRef.current = requestAnimationFrame(animate);
    };

    // If reduced motion, render a single frame and stop
    if (prefersReducedMotion) {
      animate();
      window.removeEventListener('resize', resizeCanvas);
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Quantum energy field */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2026;