import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
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

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      '#ff8000', // Orange
    ];

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100,
      });
    }

    // Quantum entanglement lines
    const entanglementLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      life: number;
    }> = [];

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Create entanglement lines
        if (Math.random() < 0.01) {
          const targetIndex = Math.floor(Math.random() * particles.length);
          if (targetIndex !== index) {
            entanglementLines.push({
              x1: particle.x,
              y1: particle.y,
              x2: particles[targetIndex].x,
              y2: particles[targetIndex].y,
              opacity: 1,
              life: 50,
            });
          }
        }
      });

      // Update and draw entanglement lines
      entanglementLines.forEach((line, index) => {
        line.life--;
        line.opacity = line.life / 50;

        if (line.life > 0) {
          ctx.globalAlpha = line.opacity * 0.3;
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.stroke();
        } else {
          entanglementLines.splice(index, 1);
        }
      });

      // Draw quantum wave patterns
      const time = Date.now() * 0.001;
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.01 + time + i) * 50 + 
            Math.sin(x * 0.005 + time * 2 + i) * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw holographic grid
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;

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

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      {/* Floating Quantum Orbs */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <svg className="w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Quantum Energy Field */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Data Particles */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-cyan-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;