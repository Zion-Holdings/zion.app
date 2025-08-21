import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'neural' | 'cyberpunk' | 'holographic';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  colorScheme = 'quantum',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    const getColorScheme = () => {
      switch (colorScheme) {
        case 'quantum':
          return {
            primary: '#00ffff',
            secondary: '#ff00ff',
            accent: '#ffff00',
            background: 'rgba(0, 0, 0, 0.1)'
          };
        case 'neural':
          return {
            primary: '#ff6b6b',
            secondary: '#4ecdc4',
            accent: '#45b7d1',
            background: 'rgba(255, 107, 107, 0.1)'
          };
        case 'cyberpunk':
          return {
            primary: '#ff006e',
            secondary: '#8338ec',
            accent: '#3a86ff',
            background: 'rgba(255, 0, 110, 0.1)'
          };
        case 'holographic':
          return {
            primary: '#ffd700',
            secondary: '#ff69b4',
            accent: '#00ced1',
            background: 'rgba(255, 215, 0, 0.1)'
          };
        default:
          return {
            primary: '#00ffff',
            secondary: '#ff00ff',
            accent: '#ffff00',
            background: 'rgba(0, 0, 0, 0.1)'
          };
      }
    };

    const colors = getColorScheme();
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 60;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)]
      });
    }

    // Grid system
    const gridSize = 50;
    const gridOpacity = 0.1;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = gridOpacity;

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

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = colors.primary;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw floating orbs
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
        const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
        const size = Math.sin(time * 2 + i) * 20 + 40;

        // Gradient orb
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `${colors.primary}80`);
        gradient.addColorStop(0.5, `${colors.secondary}40`);
        gradient.addColorStop(1, 'transparent');

        ctx.globalAlpha = 0.6;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw energy waves
      for (let i = 0; i < 2; i++) {
        const waveTime = time + i * Math.PI;
        const waveY = Math.sin(waveTime) * 100 + canvas.height * 0.5;
        
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = Math.sin(x * 0.01 + waveTime) * 50 + waveY;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ zIndex: 2 }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ zIndex: 2 }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-60"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ zIndex: 2 }}
      />

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono opacity-20"
            style={{
              left: `${(i * 5) % 100}%`,
              top: '-20px'
            }}
            animate={{
              y: ['-20px', '100vh'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;