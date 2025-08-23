import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2045Props {
  theme?: 'consciousness' | 'quantum' | 'space' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
}

const UltraFuturisticBackground2045: React.FC<UltraFuturisticBackground2045Props> = ({
  theme = 'consciousness',
  intensity = 'high',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles based on theme
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getThemeColor(theme)
        });
      }
    };

    const getThemeColor = (theme: string) => {
      switch (theme) {
        case 'consciousness':
          return `hsl(${Math.random() * 60 + 280}, 70%, 60%)`; // Purple to blue
        case 'quantum':
          return `hsl(${Math.random() * 60 + 200}, 80%, 60%)`; // Blue to cyan
        case 'space':
          return `hsl(${Math.random() * 60 + 240}, 75%, 65%)`; // Indigo to purple
        case 'cyber':
          return `hsl(${Math.random() * 60 + 120}, 70%, 60%)`; // Green to cyan
        default:
          return `hsl(${Math.random() * 60 + 280}, 70%, 60%)`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      switch (theme) {
        case 'consciousness':
          gradient.addColorStop(0, 'rgba(88, 28, 135, 0.1)'); // Purple
          gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)'); // Blue
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)'); // Green
          break;
        case 'quantum':
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)'); // Blue
          gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.05)'); // Cyan
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)'); // Green
          break;
        case 'space':
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.1)'); // Indigo
          gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)'); // Purple
          gradient.addColorStop(1, 'rgba(236, 72, 153, 0.02)'); // Pink
          break;
        case 'cyber':
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)'); // Green
          gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.05)'); // Cyan
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)'); // Blue
          break;
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, intensity]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />

      {/* Enhanced Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.1), transparent)'
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent, rgba(168, 85, 247, 0.1), transparent)'
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent)'
          }}
        />

        {/* Neon Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.05, scaleX: 1 }}
              transition={{ duration: 3, delay: i * 0.1 }}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${(i * 100) % (typeof window !== 'undefined' ? window.innerHeight : 1000)}px`,
                left: 0,
                right: 0,
                transform: 'scaleX(0)',
                transformOrigin: 'left'
              }}
            />
          ))}
        </div>

        {/* Floating Orbs with Glow */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
        />

        {/* Interactive Mouse Trail */}
        <motion.div
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{ duration: 0.5 }}
          className="absolute w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl pointer-events-none"
        />

        {/* Energy Waves */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.8, 0, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
              style={{
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default UltraFuturisticBackground2045;