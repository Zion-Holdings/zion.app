import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface RevolutionaryFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic';
  intensity?: 'low' | 'medium' | 'high';
}

const RevolutionaryFuturisticBackground: React.FC<RevolutionaryFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic',
  intensity = 'high'
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
    }> = [];

    // Holographic grid system
    const gridPoints: Array<{ x: number; y: number; phase: number }> = [];

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Initialize grid points
    for (let x = 0; x < canvas.width; x += 50) {
      for (let y = 0; y < canvas.height; y += 50) {
        gridPoints.push({
          x,
          y,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant === 'holographic') {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant === 'cyberpunk') {
        gradient.addColorStop(0, 'rgba(236, 73, 153, 0.1)');
        gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant === 'neural') {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else {
        // quantum-holographic
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.08)');
        gradient.addColorStop(0.6, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle with glow effect
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();
      });

      // Draw holographic grid
      gridPoints.forEach((point) => {
        point.phase += 0.02;
        const alpha = (Math.sin(point.phase) + 1) / 2 * 0.3;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = variant === 'holographic' ? '#8b5cf6' : '#00ffff';
        ctx.lineWidth = 1;
        
        // Draw grid lines
        ctx.beginPath();
        ctx.moveTo(point.x, 0);
        ctx.lineTo(point.x, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, point.y);
        ctx.lineTo(canvas.width, point.y);
        ctx.stroke();
        
        ctx.restore();
      });

      // Draw quantum entanglement lines
      if (variant === 'quantum' || variant === 'quantum-holographic') {
        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach((particle2) => {
            const distance = Math.sqrt(
              Math.pow(particle1.x - particle2.x, 2) + 
              Math.pow(particle1.y - particle2.y, 2)
            );
            
            if (distance < 100) {
              const alpha = (100 - distance) / 100 * 0.1;
              ctx.save();
              ctx.globalAlpha = alpha;
              ctx.strokeStyle = '#00ffff';
              ctx.lineWidth = 1;
              
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
              
              ctx.restore();
            }
          });
        });
      }

      // Draw neural network connections for neural variant
      if (variant === 'neural') {
        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach((particle2) => {
            const distance = Math.sqrt(
              Math.pow(particle1.x - particle2.x, 2) + 
              Math.pow(particle1.y - particle2.y, 2)
            );
            
            if (distance < 80) {
              const alpha = (80 - distance) / 80 * 0.15;
              ctx.save();
              ctx.globalAlpha = alpha;
              ctx.strokeStyle = '#10b981';
              ctx.lineWidth = 1;
              
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
              
              ctx.restore();
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regenerate grid points for new dimensions
      gridPoints.length = 0;
      for (let x = 0; x < canvas.width; x += 50) {
        for (let y = 0; y < canvas.height; y += 50) {
          gridPoints.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
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
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Quantum field effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-cyan-400/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-purple-400/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RevolutionaryFuturisticBackground;