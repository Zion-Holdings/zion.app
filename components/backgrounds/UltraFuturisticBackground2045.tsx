import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2045: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
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

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation variables
    let animationId: number;
    let time = 0;
    
    // Particle system
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

    // Create particles
    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const colors = [
        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(147, 51, 234, 0.8)',  // Purple
        'rgba(236, 72, 153, 0.8)',  // Pink
        'rgba(59, 130, 246, 0.8)',  // Blue
        'rgba(16, 185, 129, 0.8)',  // Green
      ];
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 100 + 50
      });
    };

    // Update and draw particles
    const updateParticles = () => {
      // Remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -0.8;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -0.8;
        
        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;
      });

      // Create new particles
      if (Math.random() < 0.1) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Draw grid
    const drawGrid = () => {
      const gridSize = 50;
      const offsetX = (time * 0.1) % gridSize;
      const offsetY = (time * 0.05) % gridSize;
      
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw floating orbs
    const drawOrbs = () => {
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 80, color: 'rgba(0, 255, 255, 0.1)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 120, color: 'rgba(147, 51, 234, 0.1)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, size: 60, color: 'rgba(236, 72, 153, 0.1)' },
        { x: canvas.width * 0.1, y: canvas.height * 0.6, size: 100, color: 'rgba(59, 130, 246, 0.1)' },
      ];

      orbs.forEach((orb, index) => {
        const pulse = Math.sin(time * 0.01 + index) * 0.2 + 0.8;
        ctx.save();
        ctx.globalAlpha = 0.1 * pulse;
        ctx.fillStyle = orb.color;
        ctx.shadowColor = orb.color.replace('0.1)', '0.5)');
        ctx.shadowBlur = 50;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Draw energy waves
    const drawEnergyWaves = () => {
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const waveOffset = (time * 0.02 + i * Math.PI * 2 / waveCount) % (Math.PI * 2);
        const amplitude = 50 + Math.sin(time * 0.01) * 20;
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(waveOffset) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + waveOffset) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Draw mouse trail
    const drawMouseTrail = () => {
      if (mousePosition.x === 0 && mousePosition.y === 0) return;
      
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
      ctx.shadowBlur = 20;
      
      // Create ripple effect
      const rippleSize = (time % 100) / 100 * 100;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, rippleSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Main animation loop
    const animate = () => {
      time++;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw background elements
      drawGrid();
      drawOrbs();
      drawEnergyWaves();
      
      // Update and draw particles
      updateParticles();
      drawParticles();
      
      // Draw mouse trail
      drawMouseTrail();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%)' }}
      />
      
      {/* Overlay Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-lg"
          animate={{
            rotate: [0, 360],
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
          className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-blue-500/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/30"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Energy Field */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2045;