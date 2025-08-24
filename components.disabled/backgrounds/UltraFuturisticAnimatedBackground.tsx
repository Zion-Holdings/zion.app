import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface NeonGrid {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

const UltraFuturisticAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [neonGrids, setNeonGrids] = useState<NeonGrid[]>([]);
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

    // Initialize particles
    const initParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'];
      
      for (let i = 0; i < 150; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(newParticles);
    };

    // Initialize neon grids
    const initNeonGrids = () => {
      const newGrids: NeonGrid[] = [];
      for (let i = 0; i < 20; i++) {
        newGrids.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: Math.random() * 0.3 + 0.1,
          scale: Math.random() * 0.5 + 0.5
        });
      }
      setNeonGrids(newGrids);
    };

    initParticles();
    initNeonGrids();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

          // Wrap around
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

          // Draw particle trail
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();

          return particle;
        })
      );

      // Draw neon grids
      setNeonGrids(prevGrids =>
        prevGrids.map(grid => {
          // Draw grid lines
          ctx.strokeStyle = '#00ffff';
          ctx.globalAlpha = grid.opacity;
          ctx.lineWidth = 1;

          // Vertical lines
          for (let x = grid.x; x < grid.x + 200 * grid.scale; x += 20 * grid.scale) {
            ctx.beginPath();
            ctx.moveTo(x, grid.y);
            ctx.lineTo(x, grid.y + 200 * grid.scale);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = grid.y; y < grid.y + 200 * grid.scale; y += 20 * grid.scale) {
            ctx.beginPath();
            ctx.moveTo(grid.x, y);
            ctx.lineTo(grid.x + 200 * grid.scale, y);
            ctx.stroke();
          }

          // Animate grid
          grid.opacity = Math.sin(Date.now() * 0.001 + grid.x * 0.01) * 0.2 + 0.3;
          grid.scale = Math.sin(Date.now() * 0.002 + grid.y * 0.01) * 0.2 + 0.5;

          return grid;
        })
      );

      // Draw energy waves
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const waveOffset = time + i * Math.PI * 2 / 3;
        const waveRadius = (time * 100 + i * 200) % (Math.max(canvas.width, canvas.height) * 0.8);
        
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.globalAlpha = Math.max(0, 1 - waveRadius / (Math.max(canvas.width, canvas.height) * 0.8));
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw floating orbs
      for (let i = 0; i < 5; i++) {
        const orbX = canvas.width / 2 + Math.sin(time * 0.5 + i) * 300;
        const orbY = canvas.height / 2 + Math.cos(time * 0.3 + i) * 200;
        const orbSize = Math.sin(time + i) * 10 + 20;
        
        // Orb glow
        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize * 2);
        orbGradient.addColorStop(0, `hsla(${180 + i * 72}, 100%, 70%, 0.8)`);
        orbGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Orb core
        ctx.fillStyle = `hsl(${180 + i * 72}, 100%, 70%)`;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connection lines between nearby particles
      ctx.strokeStyle = '#00ffff';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      {/* Floating geometric shapes */}
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
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400/30 transform rotate-12"
        animate={{
          rotate: [12, 372],
          scale: [1, 0.8, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default UltraFuturisticAnimatedBackground;