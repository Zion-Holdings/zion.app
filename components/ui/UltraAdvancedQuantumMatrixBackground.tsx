import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumMatrixBackgroundProps {
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'matrix' | 'quantum-holographic';
  children: React.ReactNode;
}

const UltraAdvancedQuantumMatrixBackground: React.FC<UltraAdvancedQuantumMatrixBackgroundProps> = ({
  intensity = 1.0,
  variant = 'quantum',
  children
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

    // Quantum particle system
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

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        const type = variant === 'quantum' ? 'quantum' : 
                    variant === 'holographic' ? 'holographic' :
                    variant === 'neural' ? 'neural' : 'cyberpunk';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          size: Math.random() * 4 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: type === 'quantum' ? '#00ffff' :
                 type === 'holographic' ? '#ff00ff' :
                 type === 'neural' ? '#00ff00' : '#ff6600',
          type
        });
      }
    };

    // Quantum entanglement effect
    const drawQuantumEntanglement = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && particles[i].type === particles[j].type) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Holographic matrix effect
    const drawHolographicMatrix = () => {
      ctx.fillStyle = 'rgba(255, 0, 255, 0.05)';
      ctx.font = '12px monospace';
      
      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          const char = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillText(char, x, y);
        }
      }
    };

    // Neural network effect
    const drawNeuralNetwork = () => {
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.lineWidth = 2;
      
      particles.forEach((particle, i) => {
        if (particle.type === 'neural') {
          const nextIndex = (i + 1) % particles.length;
          const nextParticle = particles[nextIndex];
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(nextParticle.x, nextParticle.y);
          ctx.stroke();
        }
      });
    };

    // Cyberpunk grid effect
    const drawCyberpunkGrid = () => {
      ctx.strokeStyle = 'rgba(255, 102, 0, 0.1)';
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
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20 * intensity;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      // Draw effects based on variant
      if (variant === 'quantum' || variant === 'quantum-holographic') {
        drawQuantumEntanglement();
      }
      
      if (variant === 'holographic' || variant === 'quantum-holographic') {
        drawHolographicMatrix();
      }
      
      if (variant === 'neural') {
        drawNeuralNetwork();
      }
      
      if (variant === 'cyberpunk') {
        drawCyberpunkGrid();
      }
      
      if (variant === 'matrix') {
        drawHolographicMatrix();
        drawCyberpunkGrid();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    // Handle resize
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
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Quantum Matrix Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
      </div>
      
      {/* Animated Quantum Particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Holographic Grid Lines */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 255, 255, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumMatrixBackground;