import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

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
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix';
    }> = [];

    const colors = {
      quantum: ['#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F0ABFC'],
      holographic: ['#06B6D4', '#22D3EE', '#67E8F9', '#A5F3FC', '#CFFAFE'],
      cyberpunk: ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#3B82F6'],
      neural: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
      space: ['#1E40AF', '#3730A3', '#7C3AED', '#A855F7', '#C084FC'],
      matrix: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 2
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor(100 * intensityMultiplier[intensity]);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
          type: variant
        });
      }
    };

    // Quantum entanglement effect
    const createQuantumEntanglement = () => {
      if (variant === 'quantum' && intensity === 'high') {
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            const dx = particles[i].x - particles[i + 1].x;
            const dy = particles[i].y - particles[i + 1].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Holographic interference pattern
    const createHolographicPattern = () => {
      if (variant === 'holographic') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < canvas.width; i += 20) {
          for (let j = 0; j < canvas.height; j += 20) {
            const interference = Math.sin(i * 0.01 + time) * Math.cos(j * 0.01 + time);
            if (Math.abs(interference) > 0.5) {
              ctx.fillStyle = `rgba(6, 182, 212, ${0.1 * Math.abs(interference)})`;
              ctx.fillRect(i, j, 20, 20);
            }
          }
        }
      }
    };

    // Neural network connections
    const createNeuralConnections = () => {
      if (variant === 'neural') {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              const strength = 1 - distance / 80;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * strength})`;
              ctx.lineWidth = strength * 2;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Matrix digital rain effect
    const createMatrixRain = () => {
      if (variant === 'matrix') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < canvas.width; i += 15) {
          const y = (time * 50 + i * 0.1) % canvas.height;
          ctx.fillStyle = `rgba(5, 150, 105, ${0.8})`;
          ctx.font = '12px monospace';
          ctx.fillText('01', i, y);
        }
      }
    };

    // Space nebula effect
    const createSpaceNebula = () => {
      if (variant === 'space') {
        const time = Date.now() * 0.0005;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width / 2 + Math.cos(time + i) * 200;
          const y = canvas.height / 2 + Math.sin(time + i) * 200;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 150);
          gradient.addColorStop(0, `rgba(30, 64, 175, 0.3)`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create special effects based on variant
      createQuantumEntanglement();
      createHolographicPattern();
      createNeuralConnections();
      createMatrixRain();
      createSpaceNebula();

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Wrap around edges for space variant
        if (variant === 'space') {
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Add glow effect
        if (intensity === 'high') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Add trail effect for cyberpunk
        if (variant === 'cyberpunk') {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' }}
      />
      
      {/* Additional layered effects */}
      <div className="absolute inset-0 z-10">
        {/* Quantum field lines */}
        {variant === 'quantum' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Holographic grid */}
        {variant === 'holographic' && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        )}

        {/* Cyberpunk energy field */}
        {variant === 'cyberpunk' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                'inset 0 0 100px rgba(239, 68, 68, 0.3)',
                'inset 0 0 100px rgba(16, 185, 129, 0.3)',
                'inset 0 0 100px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Neural network overlay */}
        {variant === 'neural' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}

        {/* Space stars */}
        {variant === 'space' && (
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        )}

        {/* Matrix code rain overlay */}
        {variant === 'matrix' && (
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, window.innerHeight]
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              >
                {Math.random() > 0.5 ? '01' : '10'}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;