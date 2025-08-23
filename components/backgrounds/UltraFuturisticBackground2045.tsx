import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2045: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neon' | 'cosmic';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
          type: ['quantum', 'neon', 'cosmic'][Math.floor(Math.random() * 3)] as 'quantum' | 'neon' | 'cosmic'
        });
      }
    };

    // Quantum entanglement effect
    const drawQuantumConnections = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && particles[i].type === 'quantum' && particles[j].type === 'quantum') {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        switch (particle.type) {
          case 'quantum': {
            // Quantum particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Quantum wave function
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            ctx.stroke();
            break;
          }
            
          case 'neon': {
            // Neon particles with trail effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Neon trail
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle.x - particle.vx * 10, particle.y - particle.vy * 10);
            ctx.stroke();
            break;
          }
            
          case 'cosmic': {
            // Cosmic particles with star effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Star rays
            const rays = 8;
            for (let i = 0; i < rays; i++) {
              const angle = (i / rays) * Math.PI * 2;
              const x1 = particle.x + Math.cos(angle) * particle.size * 2;
              const y1 = particle.y + Math.sin(angle) * particle.size * 2;
              const x2 = particle.x + Math.cos(angle) * particle.size * 4;
              const y2 = particle.y + Math.sin(angle) * particle.size * 4;
              
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
            break;
          }
        }
        
        ctx.restore();
      });
    };

    // Update particles
    const updateParticles = () => {
      particles.forEach(particle => {
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
        
        // Fade in/out effect
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.1, Math.min(1, particle.opacity));
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(120, 119, 198, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawQuantumConnections();
      drawParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(120,119,198,0.1) 50%, rgba(0,0,0,0.9) 100%)' }}
      />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/3 w-28 h-28 border border-pink-400/20 transform rotate-45"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [45, 225, 405]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Quantum Wave Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%'
            }}
            animate={{
              left: ['-100%', '100%']
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>
      
      {/* Consciousness Nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + (i * 7) % 70}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              boxShadow: [
                '0 0 20px rgba(0, 255, 255, 0.3)',
                '0 0 40px rgba(0, 255, 255, 0.6)',
                '0 0 20px rgba(0, 255, 255, 0.3)'
              ]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Energy Fields */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-cyan-400/10 rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 0, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0.3)" />
          </linearGradient>
        </defs>
        
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 7}%`}
            y1="20%"
            x2={`${15 + i * 6}%`}
            y2="80%"
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            opacity="0.3"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              strokeDasharray: ['0,1000', '1000,0', '0,1000']
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default UltraFuturisticBackground2045;