import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
}

const UltraQuantumHolographicBackground: React.FC<UltraQuantumHolographicBackgroundProps> = ({ 
  children, 
  intensity = 1.0 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'energy';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const types = ['quantum', 'holographic', 'energy'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      
      let color: string;
      switch (type) {
        case 'quantum':
          color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
          break;
        case 'holographic':
          color = `hsl(${280 + Math.random() * 80}, 70%, 60%)`;
          break;
        case 'energy':
          color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
          break;
      }

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensity,
        vy: (Math.random() - 0.5) * 2 * intensity,
        size: Math.random() * 3 * intensity + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color,
        type
      };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'quantum') {
          // Quantum particles with wave effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Wave rings
          for (let i = 1; i <= 3; i++) {
            ctx.globalAlpha = particle.opacity * (1 - i * 0.3);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * (1 + i * 0.5), 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'holographic') {
          // Holographic particles with geometric shapes
          const sides = 6;
          const angle = (Date.now() * 0.001) % (Math.PI * 2);
          ctx.beginPath();
          for (let i = 0; i < sides; i++) {
            const x = particle.x + Math.cos(angle + (i * Math.PI * 2) / sides) * particle.size;
            const y = particle.y + Math.sin(angle + (i * Math.PI * 2) / sides) * particle.size;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Energy particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        ctx.restore();

        // Occasionally create new particles
        if (Math.random() < 0.01 * intensity) {
          particles[index] = createParticle();
        }
      });

      // Draw quantum field lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 3) {
        for (let j = i + 1; j < particles.length; j += 3) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && particles[i].type === particles[j].type) {
            ctx.globalAlpha = (150 - distance) / 150 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw holographic grid
      ctx.strokeStyle = 'rgba(128, 0, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 100;
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

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay Gradients */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient-1" />
        <div className="absolute top-0 right-0 w-full h-full bg-radial-gradient-2" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-radial-gradient-3" />
        
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum energy waves */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default UltraQuantumHolographicBackground;