import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2029: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      // Draw quantum wave effects
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2 + Math.sin(time + i) * 50;
        
        ctx.beginPath();
        ctx.moveTo(waveX - 100, waveY);
        ctx.quadraticCurveTo(waveX, waveY - 100, waveX + 100, waveY);
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw neural network connections
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 8; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsl(${240 + i * 45}, 100%, 70%)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 z-10">
        {/* Radial gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-pink-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-blue-900/10" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Circles */}
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 border border-pink-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 border border-blue-400/30 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Triangles */}
        <motion.div
          className="absolute top-1/2 left-16 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-cyan-400/30 border-r-[20px] border-r-transparent"
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-1/3 right-16 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-purple-400/30 border-r-[15px] border-r-transparent"
          animate={{
            rotate: [0, -360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy Field Effects */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            x: [-window.innerWidth, window.innerWidth]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
          animate={{
            y: [-window.innerHeight, window.innerHeight]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-50"
        animate={{
          y: [0, window.innerHeight]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner Glow Effects */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400/20 to-transparent" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;