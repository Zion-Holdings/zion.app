import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix' | 'fusion';
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'fusion',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Particle system for advanced effects
  useEffect(() => {
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
      opacity: number;
      color: string;
      type: string;
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);

      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.5 ? 'quantum' : 'holographic';
        const color = type === 'quantum' 
          ? `hsl(${200 + Math.random() * 60}, 70%, 60%)`
          : `hsl(${280 + Math.random() * 80}, 70%, 60%)`;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color,
          type
        });
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, Math.max(canvas.width, canvas.height) / 2
      );

      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(25, 25, 50, 0.8)');
        gradient.addColorStop(0.7, 'rgba(50, 25, 75, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (variant === 'holographic') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(25, 50, 25, 0.8)');
        gradient.addColorStop(0.7, 'rgba(50, 75, 50, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (variant === 'neural') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(50, 25, 25, 0.8)');
        gradient.addColorStop(0.7, 'rgba(75, 50, 50, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (variant === 'cyberpunk') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(50, 25, 0, 0.8)');
        gradient.addColorStop(0.7, 'rgba(75, 50, 25, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (variant === 'space') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(25, 0, 50, 0.8)');
        gradient.addColorStop(0.7, 'rgba(50, 25, 75, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else if (variant === 'matrix') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.3, 'rgba(0, 25, 0, 0.8)');
        gradient.addColorStop(0.7, 'rgba(0, 50, 0, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else {
        // Fusion variant - combination of all
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.2, 'rgba(25, 25, 50, 0.8)');
        gradient.addColorStop(0.4, 'rgba(50, 25, 75, 0.7)');
        gradient.addColorStop(0.6, 'rgba(75, 50, 25, 0.6)');
        gradient.addColorStop(0.8, 'rgba(25, 75, 50, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100 && isHovered) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'quantum') {
          // Quantum particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Holographic particles with geometric shapes
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          if (index % 3 === 0) {
            // Triangle
            ctx.moveTo(particle.x, particle.y - particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.closePath();
          } else if (index % 3 === 1) {
            // Square
            ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          } else {
            // Diamond
            ctx.moveTo(particle.x, particle.y - particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y);
            ctx.lineTo(particle.x, particle.y + particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y);
            ctx.closePath();
          }
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw neural network connections for neural variant
      if (variant === 'neural' || variant === 'fusion') {
        ctx.strokeStyle = 'rgba(255, 100, 100, 0.2)';
        ctx.lineWidth = 2;
        
        particles.forEach((particle, index) => {
          if (index % 5 === 0) {
            const targetIndex = (index + 7) % particles.length;
            const target = particles[targetIndex];
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      }

      // Draw matrix code for matrix variant
      if (variant === 'matrix' || variant === 'fusion') {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (i * 100) % canvas.width;
          const y = (Date.now() * 0.1 + i * 50) % canvas.height;
          const char = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillText(char, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    initParticles();
    updateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, variant, mousePosition, isHovered]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Advanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: `blur(${isHovered ? 0 : 0.5}px)` }}
      />

      {/* Holographic Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 150, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 150, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Quantum Energy Field */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{
          background: variant === 'quantum' || variant === 'fusion' 
            ? [
              'radial-gradient(circle at 20% 80%, rgba(100, 150, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(150, 100, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(100, 150, 255, 0.1) 0%, transparent 50%)'
            ]
            : 'none'
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neural Network Visualization */}
      {variant === 'neural' || variant === 'fusion' && (
        <motion.div
          className="fixed inset-0 z-0 pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 100, 100, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="40%" fill="url(#neuralGradient)" />
          </svg>
        </motion.div>
      )}

      {/* Cyberpunk Glitch Effect */}
      {variant === 'cyberpunk' || variant === 'fusion' && (
        <motion.div
          className="fixed inset-0 z-0 pointer-events-none"
          animate={{
            clipPath: [
              'inset(0 0 0 0)',
              'inset(10% 0 20% 0)',
              'inset(0 0 0 0)',
              'inset(20% 0 10% 0)',
              'inset(0 0 0 0)'
            ]
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-orange-500/20 to-red-500/20" />
        </motion.div>
      )}

      {/* Space Nebula Effect */}
      {variant === 'space' || variant === 'fusion' && (
        <motion.div
          className="fixed inset-0 z-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(100, 50, 150, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 30%, rgba(150, 50, 100, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 70%, rgba(100, 50, 150, 0.2) 0%, transparent 60%)'
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Holographic Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Quantum Entanglement Lines */}
      {variant === 'quantum' || variant === 'fusion' && (
        <svg className="fixed inset-0 z-0 pointer-events-none w-full h-full">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(100, 150, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(150, 100, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(100, 150, 255, 0.8)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#quantumGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 100 200 Q 300 100 500 200 T 900 200",
                "M 100 200 Q 300 300 500 200 T 900 200",
                "M 100 200 Q 300 100 500 200 T 900 200"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      )}
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;