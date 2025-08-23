import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  speed?: number;
}

const QuantumMatrixBackground: React.FC<QuantumMatrixBackgroundProps> = ({ 
  children, 
  intensity = 0.8, 
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

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const colors = [
      'rgba(0, 255, 255, 0.8)',   // Cyan
      'rgba(139, 92, 246, 0.8)',  // Purple
      'rgba(236, 73, 153, 0.8)',  // Pink
      'rgba(16, 185, 129, 0.8)',  // Green
      'rgba(59, 130, 246, 0.8)',  // Blue
      'rgba(245, 158, 11, 0.8)',  // Yellow
    ];

    const types = ['quantum', 'holographic', 'neural', 'cyberpunk'] as const;

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * speed,
        vy: (Math.random() - 0.5) * 2 * speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum entanglement effect
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
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
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw particle trail
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size * 0.5;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.stroke();

        // Create quantum connections
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
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });

        // Add quantum effects based on type
        switch (particle.type) {
          case 'quantum':
            // Quantum tunneling effect
            if (Math.random() < 0.01) {
              particle.x = Math.random() * canvas.width;
              particle.y = Math.random() * canvas.height;
            }
            break;
          case 'holographic':
            // Holographic shimmer
            particle.opacity = 0.2 + 0.6 * Math.sin(Date.now() * 0.001 + index);
            break;
          case 'neural':
            // Neural network connections
            if (Math.random() < 0.005) {
              particle.size = Math.random() * 5 + 2;
            }
            break;
          case 'cyberpunk':
            // Cyberpunk glitch effect
            if (Math.random() < 0.002) {
              particle.vx *= -1;
              particle.vy *= -1;
            }
            break;
        }
      });

      ctx.restore();

      // Add matrix rain effect
      ctx.save();
      ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 80) % canvas.width;
        const y = (Date.now() * 0.1 + i * 20) % canvas.height;
        ctx.fillText('01', x, y);
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Quantum Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: intensity }}
      />
      
      {/* Holographic Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Floating Quantum Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0.3)" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#neuralGradient)"
              strokeWidth="0.5"
              opacity="0.3"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Field Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default QuantumMatrixBackground;