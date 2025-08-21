import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2029: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
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
      opacity: number;
      type: 'quantum' | 'neon' | 'hologram';
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles with enhanced variety
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 200; i++) {
        const type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'neon' : 'hologram';
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          color: type === 'quantum' ? ['#00ffff', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)] :
                 type === 'neon' ? ['#ff0080', '#8000ff', '#00ff80'][Math.floor(Math.random() * 3)] :
                 ['#ffffff', '#00ffff', '#ff8000'][Math.floor(Math.random() * 3)],
          opacity: Math.random() * 0.9 + 0.1,
          type,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;

        // Wrap around edges with bounce effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Particle lifecycle
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with enhanced effects
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Enhanced particle effects based on type
        if (particle.type === 'quantum') {
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
        } else if (particle.type === 'neon') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = particle.color;
        } else {
          ctx.fillStyle = particle.color;
        }
        
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections with enhanced logic
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Enhanced connection effects
              if (particle.type === 'quantum' && otherParticle.type === 'quantum') {
                ctx.strokeStyle = '#00ffff';
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = (120 - distance) / 120 * 0.6;
              } else if (particle.type === 'neon' || otherParticle.type === 'neon') {
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = (120 - distance) / 120 * 0.4;
              } else {
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 0.5;
                ctx.globalAlpha = (120 - distance) / 120 * 0.2;
              }
              
              ctx.stroke();
            }
          }
        });
      });

      // Enhanced quantum wave effects
      const time = Date.now() * 0.001;
      for (let i = 0; i < 8; i++) {
        const waveX = (canvas.width / 9) * (i + 1);
        const waveY = canvas.height / 2 + Math.sin(time + i * 0.5) * 80;
        
        ctx.beginPath();
        ctx.moveTo(waveX - 150, waveY);
        ctx.lineTo(waveX + 150, waveY);
        
        const gradient = ctx.createLinearGradient(waveX - 150, waveY, waveX + 150, waveY);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.3 + 0.2 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Holographic grid effect
      const gridSize = 50;
      const gridOffset = (time * 20) % gridSize;
      
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let x = gridOffset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = gridOffset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Floating data streams
      for (let i = 0; i < 3; i++) {
        const streamX = canvas.width * 0.2 + (i * canvas.width * 0.3);
        const streamY = canvas.height * 0.3 + Math.sin(time * 0.5 + i) * 100;
        
        ctx.fillStyle = `rgba(0, 255, 255, ${0.4 + 0.2 * Math.sin(time + i)})`;
        ctx.font = '12px monospace';
        ctx.fillText('01', streamX, streamY);
        ctx.fillText('10', streamX + 20, streamY + 20);
        ctx.fillText('11', streamX + 40, streamY + 40);
      }

      // Energy pulse effects
      const pulseRadius = 50 + Math.sin(time * 2) * 30;
      const pulseX = canvas.width * 0.8;
      const pulseY = canvas.height * 0.7;
      
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 128, ${0.3 + 0.2 * Math.sin(time * 2)})`;
      ctx.lineWidth = 3;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Enhanced futuristic background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
        }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-500 opacity-30"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-yellow-400 opacity-25"
          animate={{
            rotate: 180,
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;