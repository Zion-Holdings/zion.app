import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  variant = 'quantum',
  intensity = 'medium',
  children,
  className = ''
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
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      holographic: ['#ff0080', '#8000ff', '#0080ff', '#80ff00'],
      cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff8000'],
      neural: ['#00ff80', '#8000ff', '#ff0080', '#80ff00'],
      space: ['#ffffff', '#00ffff', '#ff00ff', '#ffff00']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 2
    };

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(50 * intensityMultiplier[intensity]);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
          size: Math.random() * 3 * intensityMultiplier[intensity] + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
          type: variant
        });
      }
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      if (variant === 'quantum') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 100; i++) {
          const x = (i / 100) * canvas.width;
          const y = Math.sin(time + i * 0.1) * 50 + canvas.height / 2;
          const opacity = Math.sin(time + i * 0.1) * 0.3 + 0.1;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }

      // Create holographic grid
      if (variant === 'holographic') {
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const opacity = Math.sin(time + x * 0.01 + y * 0.01) * 0.2 + 0.1;
            ctx.strokeStyle = `rgba(255, 0, 128, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, gridSize, gridSize);
          }
        }
      }

      // Create cyberpunk matrix effect
      if (variant === 'cyberpunk') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const height = Math.random() * 100 + 50;
          const opacity = Math.sin(time + i) * 0.3 + 0.2;
          
          ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
          ctx.fillRect(x, y, 2, height);
        }
      }

      // Create neural network effect
      if (variant === 'neural') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = `rgba(0, 255, 128, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Create space nebula effect
      if (variant === 'space') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width / 2 + Math.cos(time + i) * 200;
          const y = canvas.height / 2 + Math.sin(time + i) * 200;
          const radius = Math.sin(time + i) * 50 + 100;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          gradient.addColorStop(0, `rgba(255, 255, 255, 0.3)`);
          gradient.addColorStop(0.5, `rgba(0, 255, 255, 0.2)`);
          gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

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
        ctx.globalAlpha = 1;

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
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
  }, [variant, intensity]);

  const backgroundVariants = {
    quantum: 'from-cyan-900/20 via-blue-900/30 to-purple-900/20',
    holographic: 'from-pink-900/20 via-purple-900/30 to-blue-900/20',
    cyberpunk: 'from-green-900/20 via-black/40 to-blue-900/20',
    neural: 'from-emerald-900/20 via-teal-900/30 to-cyan-900/20',
    space: 'from-black/60 via-blue-900/40 to-purple-900/30'
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: `linear-gradient(135deg, ${backgroundVariants[variant]})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
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
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400/20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Quantum Field Lines */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic Grid */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 128, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 128, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;