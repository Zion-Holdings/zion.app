import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({ 
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
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const colors = {
      quantum: '#00ffff',
      holographic: '#8b5cf6',
      neural: '#10b981',
      cyberpunk: '#ec4899'
    };

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: Object.values(colors)[Math.floor(Math.random() * 4)],
          life: Math.random() * 100,
          maxLife: 100,
          type: Object.keys(colors)[Math.floor(Math.random() * 4)] as any
        });
      }
    };

    // Quantum entanglement effect
    const createEntanglement = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 100,
          y: y + (Math.random() - 0.5) * 100,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 2 + 0.5,
          color: colors.quantum,
          life: 50,
          maxLife: 50,
          type: 'quantum'
        });
      }
    };

    // Neural network connections
    const drawNeuralConnections = () => {
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && particles[i].type === 'neural' && particles[j].type === 'neural') {
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
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < canvas.width; i += 30) {
        for (let j = 0; j < canvas.height; j += 30) {
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo(i + 20, j);
            ctx.moveTo(i, j);
            ctx.lineTo(i, j + 20);
            ctx.stroke();
          }
        }
      }
    };

    // Quantum wave interference
    const drawQuantumWaves = () => {
      const time = Date.now() * 0.001;
      
      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          const wave1 = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.5);
          const wave2 = Math.sin(x * 0.015 + time * 1.5) * Math.cos(y * 0.015 + time * 0.8);
          const interference = (wave1 + wave2) * 0.5;
          
          if (Math.abs(interference) > 0.3) {
            ctx.fillStyle = `rgba(0, 255, 255, ${Math.abs(interference) * 0.1})`;
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }
    };

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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();

        // Create entanglement effect
        if (Math.random() > 0.995) {
          createEntanglement(particle.x, particle.y);
        }

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Draw effects
      drawNeuralConnections();
      drawHolographicMatrix();
      drawQuantumWaves();

      // Maintain particle count
      if (particles.length < 100) {
        initParticles();
      }

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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />
      
      {/* Quantum Field Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-indigo-500/5 to-cyan-500/5" />
      </div>

      {/* Floating Quantum Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 border border-pink-400/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [180, 0, 180]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neural Network Grid */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Quantum Ripple Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-400/20 rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Quantum Particle Trails */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [1, 0.5, 0],
              scale: [1, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;