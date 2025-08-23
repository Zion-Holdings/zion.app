import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2047Props {
  children?: React.ReactNode;
  intensity?: number;
  speed?: number;
}

const UltraFuturisticBackground2047: React.FC<UltraFuturisticBackground2047Props> = ({
  children,
  intensity = 1,
  speed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      type: 'quantum' | 'neon' | 'matrix';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * speed,
          vy: (Math.random() - 0.5) * 2 * speed,
          size: Math.random() * 3 + 1,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
          alpha: Math.random() * 0.8 + 0.2,
          type: ['quantum', 'neon', 'matrix'][Math.floor(Math.random() * 3)] as 'quantum' | 'neon' | 'matrix'
        });
      }
    };

    // Animation loop
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
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      
      ctx.fillStyle = gradient;
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

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        
        if (particle.type === 'quantum') {
          // Quantum particles with wave effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Wave rings
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * i * 2, 0, Math.PI * 2);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = particle.alpha / (i * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'neon') {
          // Neon particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        } else {
          // Matrix particles with digital effect
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 2}px monospace`;
          ctx.fillText('1', particle.x, particle.y);
        }
        
        ctx.restore();
      });

      // Draw quantum grid lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating geometric shapes
      const time = Date.now() * 0.001 * speed;
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, rotation: time * 0.5, size: 50 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, rotation: time * 0.3, size: 40 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, rotation: time * 0.7, size: 60 }
      ];

      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + index) * 0.2})`;
        ctx.lineWidth = 2;
        
        // Draw different shapes
        if (index === 0) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.closePath();
        } else if (index === 1) {
          // Square
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else {
          // Hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size / 2;
            const y = Math.sin(angle) * shape.size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }
        
        ctx.stroke();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, speed]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-pink-900/10" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 1, 0.2],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
        animate={{
          x: [0, 20, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content */}
      {children}
    </div>
  );
};

export default UltraFuturisticBackground2047;