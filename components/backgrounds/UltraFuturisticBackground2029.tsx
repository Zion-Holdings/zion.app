import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const UltraFuturisticBackground2029: React.FC<UltraFuturisticBackground2029Props> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Quantum particles with advanced physics
    const particles = Array.from({ length: intensity === 'high' ? 300 : intensity === 'medium' ? 200 : 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 4 + 1,
      color: [
        '#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6',
        '#f59e0b', '#ef4444', '#06b6d4', '#84cc16', '#f97316'
      ][Math.floor(Math.random() * 10)],
      opacity: Math.random() * 0.6 + 0.2,
      life: Math.random() * 100 + 50,
      maxLife: Math.random() * 100 + 50,
      type: Math.random() > 0.7 ? 'quantum' : 'normal'
    }));

    // Holographic grid
    const gridSize = 60;
    const gridOpacity = 0.15;

    // Neon wave effect
    let waveOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Quantum particle behavior
        if (particle.type === 'quantum') {
          particle.vx += (Math.random() - 0.5) * 0.1;
          particle.vy += (Math.random() - 0.5) * 0.1;
          particle.size = Math.sin(Date.now() * 0.001 + index) * 2 + 3;
        }

        // Wrap around edges with quantum tunneling effect
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Regenerate particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, particle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections with quantum entanglement effect
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = intensity === 'high' ? 150 : intensity === 'medium' ? 120 : 100;

            if (distance < maxDistance) {
              const opacity = (maxDistance - distance) / maxDistance * 0.2;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Quantum entanglement visualization
              const lineGradient = ctx.createLinearGradient(
                particle.x, particle.y, otherParticle.x, otherParticle.y
              );
              lineGradient.addColorStop(0, particle.color);
              lineGradient.addColorStop(1, otherParticle.color);
              
              ctx.strokeStyle = lineGradient;
              ctx.globalAlpha = opacity;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw holographic grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = gridOpacity;

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

      // Draw neon wave effect
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.4;

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 2) {
        const y = Math.sin((x + waveOffset) * 0.01) * 50 + canvas.height / 2;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw second wave
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 2) {
        const y = Math.sin((x + waveOffset * 1.5) * 0.015) * 40 + canvas.height / 2 + 100;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      waveOffset += 2;

      // Draw floating holographic elements
      const time = Date.now() * 0.001;
      const holographicElements = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 80, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 60, rotation: time * 0.3 },
        { x: canvas.width * 0.5, y: canvas.height * 0.1, size: 100, rotation: time * 0.7 }
      ];

      holographicElements.forEach((element, index) => {
        ctx.save();
        ctx.translate(element.x, element.y);
        ctx.rotate(element.rotation);
        ctx.globalAlpha = 0.1;

        // Draw holographic symbol
        ctx.strokeStyle = `hsl(${240 + index * 60}, 70%, 60%)`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(-element.size / 2, 0);
        ctx.lineTo(element.size / 2, 0);
        ctx.moveTo(0, -element.size / 2);
        ctx.lineTo(0, element.size / 2);
        ctx.arc(0, 0, element.size / 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      });

      // Mouse interaction effect
      if (isHovering) {
        const radius = 150;
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, radius
        );
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, isHovering, mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Quantum Matrix Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 405],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-pink-400/20 rounded-lg"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-60" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;