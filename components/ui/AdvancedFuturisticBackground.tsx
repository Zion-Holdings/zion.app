import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdvancedFuturisticBackgroundProps {
  children?: React.ReactNode;
  intensity?: number;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'energy' | 'data';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'energy' : Math.random() > 0.5 ? 'data' : 'particle';
        let color: string;
        
        switch (variant) {
          case 'quantum':
            color = type === 'energy' ? '#00ffff' : type === 'data' ? '#ff00ff' : '#0080ff';
            break;
          case 'holographic':
            color = type === 'energy' ? '#ff80ff' : type === 'data' ? '#80ffff' : '#8080ff';
            break;
          case 'neural':
            color = type === 'energy' ? '#80ff80' : type === 'data' ? '#ff8080' : '#ffff80';
            break;
          case 'cyberpunk':
            color = type === 'energy' ? '#ff0080' : type === 'data' ? '#00ff80' : '#8000ff';
            break;
          default:
            color = type === 'energy' ? '#00ffff' : type === 'data' ? '#ff00ff' : '#0080ff';
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          size: Math.random() * 3 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color,
          type
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'quantum':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 128, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 0, 255, 0.05)');
          break;
        case 'holographic':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(128, 128, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 128, 255, 0.05)');
          break;
        case 'neural':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(128, 255, 128, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 255, 128, 0.05)');
          break;
        case 'cyberpunk':
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(255, 0, 128, 0.1)');
          gradient.addColorStop(1, 'rgba(128, 0, 255, 0.05)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 128, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 0, 255, 0.05)');
      }
      
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
        
        if (particle.type === 'energy') {
          // Energy particles with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 * intensity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'data') {
          // Data particles with geometric shapes
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          if (Math.random() > 0.5) {
            ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          } else {
            ctx.moveTo(particle.x - particle.size, particle.y);
            ctx.lineTo(particle.x + particle.size, particle.y);
            ctx.moveTo(particle.x, particle.y - particle.size);
            ctx.lineTo(particle.x, particle.y + particle.size);
          }
          ctx.stroke();
        } else {
          // Regular particles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 * intensity) {
            ctx.globalAlpha = (100 * intensity - distance) / (100 * intensity) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add quantum effects for quantum variant
      if (variant === 'quantum') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.3 + canvas.width / 2;
          const y = Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.3 + canvas.height / 2;
          
          ctx.beginPath();
          ctx.moveTo(x - 50, y);
          ctx.lineTo(x + 50, y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x, y - 50);
          ctx.lineTo(x, y + 50);
          ctx.stroke();
        }
        ctx.setLineDash([]);
      }

      // Add neural network effect for neural variant
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(128, 255, 128, 0.2)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 3; i++) {
          const layer1 = Array.from({ length: 8 }, (_, j) => ({
            x: (canvas.width / 9) * (j + 1),
            y: canvas.height * 0.2
          }));
          
          const layer2 = Array.from({ length: 6 }, (_, j) => ({
            x: (canvas.width / 7) * (j + 1),
            y: canvas.height * 0.5
          }));
          
          const layer3 = Array.from({ length: 4 }, (_, j) => ({
            x: (canvas.width / 5) * (j + 1),
            y: canvas.height * 0.8
          }));
          
          // Connect layers
          layer1.forEach(node1 => {
            layer2.forEach(node2 => {
              ctx.beginPath();
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.stroke();
            });
          });
          
          layer2.forEach(node2 => {
            layer3.forEach(node3 => {
              ctx.beginPath();
              ctx.moveTo(node2.x, node2.y);
              ctx.lineTo(node3.x, node3.y);
              ctx.stroke();
            });
          });
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400 opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400 opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-pink-400 opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400 opacity-30" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-3 h-3 bg-pink-400 rounded-full opacity-60"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {children}
    </div>
  );
};

export default AdvancedFuturisticBackground;