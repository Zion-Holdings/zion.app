import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-entanglement';
}

const QuantumHolographicBackground: React.FC<QuantumHolographicBackgroundProps> = ({
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
      type: 'quantum' | 'holographic' | 'neural';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'],
      holographic: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500'],
      cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff0000', '#8000ff'],
      neural: ['#00ff00', '#ff00ff', '#ffff00', '#00ffff', '#ff8000'],
      'quantum-entanglement': ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#ff0080', '#00ffff', '#ffff00']
    };

    const currentColors = colors[variant] || colors.quantum;

    // Create particles
    for (let i = 0; i < (intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80); i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        type: variant === 'quantum-entanglement' ? 'quantum' : variant as any
      });
    }

    // Quantum entanglement effect
    const createEntanglement = () => {
      if (variant === 'quantum-entanglement') {
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            particles[i].vx = particles[i + 1].vx;
            particles[i].vy = particles[i + 1].vy;
            particles[i].color = particles[i + 1].color;
          }
        }
      }
    };

    // Neural network connections
    const drawNeuralConnections = () => {
      if (variant === 'neural' || variant === 'quantum-entanglement') {
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      if (variant === 'holographic' || variant === 'quantum-entanglement') {
        ctx.strokeStyle = 'rgba(0, 191, 255, 0.1)';
        ctx.lineWidth = 0.3;
        
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
      }
    };

    // Cyberpunk effects
    const drawCyberpunkEffects = () => {
      if (variant === 'cyberpunk' || variant === 'quantum-entanglement') {
        // Digital rain effect
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillText('01', x, y);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background effects
      drawHolographicGrid();
      drawNeuralConnections();
      drawCyberpunkEffects();

      // Update and draw particles
      particles.forEach((particle, index) => {
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Particle trail
        if (variant === 'quantum' || variant === 'quantum-entanglement') {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        }
      });

      // Create quantum entanglement
      createEntanglement();

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Quantum Holographic Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant === 'quantum-entanglement' 
            ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(20,0,40,0.9) 50%, rgba(0,0,0,1) 100%)'
            : variant === 'cyberpunk'
            ? 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)'
            : variant === 'neural'
            ? 'radial-gradient(ellipse at center, rgba(0,20,0,0.8) 0%, rgba(0,40,0,0.9) 50%, rgba(0,0,0,1) 100%)'
            : 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,20,40,0.9) 50%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className={`w-2 h-2 ${
                variant === 'quantum-entanglement' ? 'bg-gradient-to-r from-pink-500 to-cyan-500'
                : variant === 'cyberpunk' ? 'bg-gradient-to-r from-green-500 to-blue-500'
                : variant === 'neural' ? 'bg-gradient-to-r from-green-500 to-purple-500'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
              } rounded-full blur-sm`}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Quantum field lines */}
      {variant === 'quantum' || variant === 'quantum-entanglement' && (
        <div className="fixed inset-0 pointer-events-none z-5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`field-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuantumHolographicBackground;