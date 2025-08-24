import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2026V2Props {
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2026V2({ children }: UltraAdvancedFuturisticBackground2026V2Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neural' | 'data';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
          type: ['quantum', 'neural', 'data'][Math.floor(Math.random() * 3)] as 'quantum' | 'neural' | 'data'
        });
      }
    };

    // Animation loop
    const animate = () => {
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Different styles for different particle types
        switch (particle.type) {
          case 'quantum':
            ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
            ctx.shadowColor = '#8B5CF6';
            ctx.shadowBlur = 10;
            break;
          case 'neural':
            ctx.fillStyle = `rgba(236, 72, 153, ${particle.opacity})`;
            ctx.shadowColor = '#EC4899';
            ctx.shadowBlur = 8;
            break;
          case 'data':
            ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
            ctx.shadowColor = '#06B6D4';
            ctx.shadowBlur = 6;
            break;
        }
        
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
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw quantum grid
      const gridSize = 50;
      const time = Date.now() * 0.001;
      
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

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 40, rotation: time * 0.5, type: 'triangle' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 60, rotation: time * 0.3, type: 'square' },
        { x: canvas.width * 0.5, y: canvas.height * 0.1, size: 50, rotation: time * 0.7, type: 'circle' },
        { x: canvas.width * 0.1, y: canvas.height * 0.8, size: 45, rotation: time * 0.4, type: 'hexagon' }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
        ctx.lineWidth = 2;
        
        switch (shape.type) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
            ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
            ctx.closePath();
            break;
          case 'square':
            ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            break;
          case 'hexagon':
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * shape.size / 2;
              const y = Math.sin(angle) * shape.size / 2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            break;
        }
        
        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Linear gradients for atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" style={{ zIndex: 3 }}></div>
    </div>
  );
}