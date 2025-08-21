import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'matrix';
}

const QuantumMatrixBackground: React.FC<QuantumMatrixBackgroundProps> = ({
  children,
  intensity = 'medium',
  variant = 'quantum'
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
      type: string;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#0040ff', '#0000ff'],
      holographic: ['#ff00ff', '#8000ff', '#4000ff', '#0000ff'],
      cyberpunk: ['#ff0080', '#ff0040', '#ff0000', '#800000'],
      neural: ['#00ff80', '#00ff40', '#00ff00', '#008000'],
      matrix: ['#00ff00', '#40ff40', '#80ff80', '#c0ffc0']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 2
    };

    const particleCount = Math.floor(100 * intensityMultiplier[intensity]);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        type: Math.random() > 0.5 ? 'circle' : 'square'
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

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'circle') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        } else {
          ctx.rect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }
        
        ctx.fill();

        // Draw connection lines
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (150 - distance) / 150 * 0.3;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();

      // Add matrix rain effect for matrix variant
      if (variant === 'matrix') {
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px monospace';
        ctx.globalAlpha = 0.3;
        
        for (let i = 0; i < 20; i++) {
          const x = (i * 80) % canvas.width;
          const y = (Date.now() * 0.01 + i * 20) % canvas.height;
          ctx.fillText('01', x, y);
        }
        ctx.globalAlpha = 1;
      }

      // Add holographic interference pattern
      if (variant === 'holographic') {
        ctx.strokeStyle = '#ff00ff';
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(0, i * 100);
          ctx.lineTo(canvas.width, i * 100);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(i * 100, 0);
          ctx.lineTo(i * 100, canvas.height);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

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
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Quantum Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant === 'matrix' 
            ? 'linear-gradient(180deg, #000000 0%, #001100 50%, #000000 100%)'
            : variant === 'cyberpunk'
            ? 'linear-gradient(180deg, #000000 0%, #200010 50%, #000000 100%)'
            : variant === 'holographic'
            ? 'linear-gradient(180deg, #000000 0%, #100020 50%, #000000 100%)'
            : variant === 'neural'
            ? 'linear-gradient(180deg, #000000 0%, #002000 50%, #000000 100%)'
            : 'linear-gradient(180deg, #000000 0%, #001020 50%, #000000 100%)'
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${
              variant === 'quantum' ? 'bg-cyan-400' :
              variant === 'holographic' ? 'bg-purple-400' :
              variant === 'cyberpunk' ? 'bg-pink-400' :
              variant === 'neural' ? 'bg-green-400' :
              'bg-green-400'
            } rounded-full opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Quantum Field Lines */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className={`absolute h-px w-full ${
              variant === 'quantum' ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent' :
              variant === 'holographic' ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' :
              variant === 'cyberpunk' ? 'bg-gradient-to-r from-transparent via-pink-400 to-transparent' :
              variant === 'neural' ? 'bg-gradient-to-r from-transparent via-green-400 to-transparent' :
              'bg-gradient-to-r from-transparent via-green-400 to-transparent'
            }`}
            style={{
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Quantum Energy Field */}
      <div className="absolute inset-0 pointer-events-none z-40">
        <motion.div
          className={`absolute inset-0 ${
            variant === 'quantum' ? 'bg-gradient-radial from-cyan-500/5 via-transparent to-transparent' :
            variant === 'holographic' ? 'bg-gradient-radial from-purple-500/5 via-transparent to-transparent' :
            variant === 'cyberpunk' ? 'bg-gradient-radial from-pink-500/5 via-transparent to-transparent' :
            variant === 'neural' ? 'bg-gradient-radial from-green-500/5 via-transparent to-transparent' :
            'bg-gradient-radial from-green-500/5 via-transparent to-transparent'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default QuantumMatrixBackground;