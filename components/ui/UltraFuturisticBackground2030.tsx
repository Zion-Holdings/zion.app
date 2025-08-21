import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      color: string;
      alpha: number;
      type: 'quantum' | 'holographic' | 'neon';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.8 + 0.2,
          type: ['quantum', 'holographic', 'neon'][Math.floor(Math.random() * 3)] as 'quantum' | 'holographic' | 'neon'
        });
      }
    };

    // Draw quantum particles
    const drawQuantumParticle = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      
      // Create quantum wave effect
      const time = Date.now() * 0.001;
      const wave = Math.sin(time * 3 + particle.x * 0.01) * 0.5 + 0.5;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * wave, 0, Math.PI * 2);
      ctx.fill();
      
      // Add quantum entanglement lines
      if (Math.random() < 0.1) {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x + Math.cos(time) * 50,
          particle.y + Math.sin(time) * 50
        );
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Draw holographic particles
    const drawHolographicParticle = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.globalAlpha = particle.alpha * 0.7;
      
      const time = Date.now() * 0.002;
      const hologram = Math.sin(time + particle.x * 0.02) * 0.5 + 0.5;
      
      // Create holographic grid effect
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 0.3;
      
      const gridSize = 20;
      const offsetX = (particle.x % gridSize) - gridSize / 2;
      const offsetY = (particle.y % gridSize) - gridSize / 2;
      
      ctx.beginPath();
      ctx.moveTo(particle.x - offsetX, particle.y - offsetY);
      ctx.lineTo(particle.x + offsetX, particle.y + offsetY);
      ctx.stroke();
      
      // Add holographic glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * hologram, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Draw neon particles
    const drawNeonParticle = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time * 5 + particle.x * 0.01) * 0.5 + 0.5;
      
      // Create neon glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 20 * pulse;
      
      // Draw neon core
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
      ctx.fill();
      
      // Add neon trail
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2 * pulse;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(
        particle.x - particle.vx * 10,
        particle.y - particle.vy * 10
      );
      ctx.stroke();
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw based on type
        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(particle);
            break;
          case 'holographic':
            drawHolographicParticle(particle);
            break;
          case 'neon':
            drawNeonParticle(particle);
            break;
        }
        
        // Occasionally change particle type
        if (Math.random() < 0.001) {
          particle.type = ['quantum', 'holographic', 'neon'][Math.floor(Math.random() * 3)] as 'quantum' | 'holographic' | 'neon';
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
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
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Quantum Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Holographic Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-40 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-35 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Quantum Energy Waves */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              x: ['100%', '-100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Circuit Patterns */}
        <motion.div
          className="absolute top-1/4 right-20 w-16 h-16 border border-cyan-400 opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Holographic Data Streams */}
        <motion.div
          className="absolute bottom-1/4 left-20 w-20 h-20 border border-purple-400 opacity-25 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Neural Network Nodes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.cos(i * Math.PI / 3) * 40}px`,
                top: `${Math.sin(i * Math.PI / 3) * 40}px`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default UltraFuturisticBackground2030;