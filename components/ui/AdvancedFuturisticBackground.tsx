import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    updateCanvasSize();

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural';
    }> = [];

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
        type: ['quantum', 'holographic', 'neural'][Math.floor(Math.random() * 3)] as any
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.9)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.85)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 10;
            break;
          case 'holographic':
            ctx.fillStyle = `rgba(255, 0, 255, ${particle.opacity})`;
            ctx.shadowColor = '#ff00ff';
            ctx.shadowBlur = 15;
            break;
          case 'neural':
            ctx.fillStyle = `rgba(255, 255, 0, ${particle.opacity})`;
            ctx.shadowBlur = 8;
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
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw quantum grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
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
      const time = Date.now() * 0.001;
      const shapes = [
        { x: Math.sin(time * 0.5) * 200 + canvas.width / 2, y: Math.cos(time * 0.3) * 150 + canvas.height / 2, size: 30, rotation: time * 0.5 },
        { x: Math.sin(time * 0.7) * 300 + canvas.width / 2, y: Math.cos(time * 0.4) * 200 + canvas.height / 2, size: 25, rotation: time * 0.3 },
        { x: Math.sin(time * 0.3) * 250 + canvas.width / 2, y: Math.cos(time * 0.6) * 180 + canvas.height / 2, size: 35, rotation: time * 0.7 }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Draw hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isClient]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      {isClient && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.9) 50%, rgba(0,0,0,1) 100%)' }}
        />
      )}

      {/* Floating Elements */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {/* Quantum Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-6 h-6 bg-fuchsia-400 rounded-full opacity-70"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 1, 0.7],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-5 h-5 bg-yellow-400 rounded-full opacity-80"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.8, 1, 0.8],
              x: [0, 25, 0],
              y: [0, -25, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Holographic Lines */}
          <motion.div
            className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              x: [0, typeof window !== 'undefined' ? window.innerWidth : 1200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-fuchsia-400 to-transparent"
            animate={{
              x: [0, typeof window !== 'undefined' ? -window.innerWidth : -1200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />

          {/* Neural Network Nodes */}
          <div className="absolute top-1/3 left-1/4">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="absolute top-2/3 right-1/4">
            <motion.div
              className="w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none z-30" />
    </div>
  );
};

export default AdvancedFuturisticBackground;