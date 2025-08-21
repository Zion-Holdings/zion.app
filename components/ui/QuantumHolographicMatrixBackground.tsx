import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  speed?: number;
  variant?: 'default' | 'intense' | 'subtle' | 'quantum' | 'holographic' | 'matrix' | 'neural' | 'cyberpunk';
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
  intensity = 1,
  speed = 1,
  variant = 'default'
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
      type: 'quantum' | 'holographic' | 'matrix' | 'neural';
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = variant === 'intense' ? 200 : variant === 'subtle' ? 50 : 100;

      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'matrix', 'neural'][Math.floor(Math.random() * 4)] as any;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * speed,
          vy: (Math.random() - 0.5) * 2 * speed,
          size: Math.random() * 3 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getColorForType(type),
          type
        });
      }
    };

    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
          return `hsl(${180 + Math.random() * 60}, 70%, 60%)`;
        case 'holographic':
          return `hsl(${280 + Math.random() * 60}, 80%, 70%)`;
        case 'matrix':
          return `hsl(${120 + Math.random() * 40}, 90%, 60%)`;
        case 'neural':
          return `hsl(${0 + Math.random() * 60}, 80%, 70%)`;
        default:
          return `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );

      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'holographic') {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'matrix') {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'neural') {
        gradient.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
        gradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.08)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
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

        // Draw connection lines for nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3 * intensity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Add quantum effects based on variant
        if (variant === 'quantum' && Math.random() < 0.01) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${particle.opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        if (variant === 'holographic' && Math.random() < 0.005) {
          ctx.beginPath();
          ctx.moveTo(particle.x - 20, particle.y);
          ctx.lineTo(particle.x + 20, particle.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${particle.opacity * 0.7})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        if (variant === 'matrix' && Math.random() < 0.02) {
          ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity * 0.8})`;
          ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
        }

        if (variant === 'neural' && Math.random() < 0.015) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 158, 11, ${particle.opacity * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Add floating geometric shapes for intense variants
      if (variant === 'intense') {
        const time = Date.now() * 0.001;
        
        // Floating hexagons
        for (let i = 0; i < 3; i++) {
          const x = (canvas.width / 4) * (i + 1);
          const y = canvas.height / 2 + Math.sin(time + i) * 50;
          const size = 30 + Math.sin(time * 2 + i) * 10;
          
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const angle = (j * Math.PI) / 3 + time * 0.5;
            const px = x + size * Math.cos(angle);
            const py = y + size * Math.sin(angle);
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, speed, variant]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'transparent',
          zIndex: -1
        }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field lines */}
        {variant === 'quantum' && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
                style={{
                  top: `${20 + i * 20}%`,
                  left: 0
                }}
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic grid */}
        {variant === 'holographic' && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-15"
                style={{
                  left: `${12.5 * (i + 1)}%`,
                  top: 0
                }}
                animate={{
                  opacity: [0.05, 0.2, 0.05]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        )}

        {/* Matrix rain effect */}
        {variant === 'matrix' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400 text-xs font-mono opacity-30"
                style={{
                  left: `${5 * i}%`,
                  top: '-20px'
                }}
                animate={{
                  y: ['0vh', '100vh']
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 5
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>
            ))}
          </div>
        )}

        {/* Neural network nodes */}
        {variant === 'neural' && (
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-40"
                style={{
                  left: `${8.33 * (i + 1)}%`,
                  top: `${8.33 * (i + 1)}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicMatrixBackground;