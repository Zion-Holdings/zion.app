import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2036: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    // Quantum particle system
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
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
        type: ['quantum', 'neural', 'data'][Math.floor(Math.random() * 3)] as 'quantum' | 'neural' | 'data'
      });
    }

    // Neural network connections
    const connections: Array<{ from: number; to: number; strength: number }> = [];
    for (let i = 0; i < 20; i++) {
      connections.push({
        from: Math.floor(Math.random() * particles.length),
        to: Math.floor(Math.random() * particles.length),
        strength: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      time += 0.01;
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(15, 15, 35, 0.6)');
      gradient.addColorStop(0.6, 'rgba(26, 26, 46, 0.4)');
      gradient.addColorStop(1, 'rgba(22, 33, 62, 0.2)');
      
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

        // Add quantum behavior
        if (particle.type === 'quantum') {
          particle.x += Math.sin(time + index) * 0.5;
          particle.y += Math.cos(time + index) * 0.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw neural connections
      connections.forEach(connection => {
        const from = particles[connection.from];
        const to = particles[connection.to];
        
        if (from && to) {
          const distance = Math.sqrt(
            Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
          );
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${connection.strength * 0.3})`;
            ctx.lineWidth = connection.strength;
            ctx.stroke();
          }
        }
      });

      // Draw quantum grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.2, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.3, size: 40, rotation: -time * 0.3 },
        { x: canvas.width * 0.3, y: canvas.height * 0.8, size: 50, rotation: time * 0.7 }
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
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Enhanced Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Field Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-32 bg-gradient-to-b from-cyan-400/20 via-blue-400/20 to-transparent"
              style={{
                left: `${(i + 1) * 12.5}%`,
                top: '20%',
              }}
              animate={{
                height: ['8rem', '12rem', '8rem'],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-500"></div>
        
        {/* Additional Quantum Elements */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/15 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-emerald-400/15 transform rotate-12 animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 border border-yellow-400/15 rounded-lg animate-pulse delay-900"></div>

        {/* Neural Network Nodes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-pink-400/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping delay-1500"></div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent"></div>
        <div className="absolute left-1/2 top-0 w-px h-20 bg-gradient-to-b from-transparent via-pink-400/30 to-transparent"></div>
        <div className="absolute left-1/2 bottom-0 w-px h-20 bg-gradient-to-t from-transparent via-blue-400/30 to-transparent"></div>

        {/* Quantum Entanglement Effect */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Consciousness Field */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <motion.div
              className="absolute inset-0 border border-cyan-400/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 border border-purple-400/10 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute inset-0 border border-pink-400/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2036;