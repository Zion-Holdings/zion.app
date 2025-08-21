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

    // Enhanced quantum particles with advanced physics
    const particles = Array.from({ length: intensity === 'high' ? 400 : intensity === 'medium' ? 250 : 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      size: Math.random() * 5 + 1,
      color: [
        '#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6',
        '#f59e0b', '#ef4444', '#06b6d4', '#84cc16', '#f97316',
        '#a855f7', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'
      ][Math.floor(Math.random() * 15)],
      opacity: Math.random() * 0.8 + 0.2,
      life: Math.random() * 150 + 100,
      maxLife: Math.random() * 150 + 100,
      type: Math.random() > 0.6 ? 'quantum' : Math.random() > 0.3 ? 'holographic' : 'normal',
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1
    }));

    // Advanced holographic grid with quantum properties
    const gridSize = 80;
    const gridOpacity = 0.2;

    // Enhanced neon wave effect
    let waveOffset = 0;
    let timeOffset = 0;

    // Quantum entanglement lines
    const entanglementLines: Array<{x1: number, y1: number, x2: number, y2: number, opacity: number, life: number}> = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        particle.rotation += particle.rotationSpeed;

        // Enhanced quantum particle behavior
        if (particle.type === 'quantum') {
          particle.vx += (Math.random() - 0.5) * 0.15;
          particle.vy += (Math.random() - 0.5) * 0.15;
          particle.size = Math.sin(Date.now() * 0.001 + index) * 3 + 4;
          
          // Quantum tunneling effect
          if (Math.random() > 0.995) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
          }
        }

        // Holographic particle behavior
        if (particle.type === 'holographic') {
          particle.opacity = Math.sin(Date.now() * 0.002 + index) * 0.4 + 0.4;
          particle.size = Math.cos(Date.now() * 0.0015 + index) * 2 + 3;
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
          particle.type = Math.random() > 0.6 ? 'quantum' : Math.random() > 0.3 ? 'holographic' : 'normal';
        }

        // Draw particle with enhanced glow effect
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        
        // Enhanced glow effect with multiple layers
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.3, particle.color + '80');
        gradient.addColorStop(0.6, particle.color + '40');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add particle trail effect
        if (particle.type === 'quantum') {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-particle.vx * 3, -particle.vy * 3);
          ctx.strokeStyle = particle.color + '40';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Draw enhanced holographic grid
      ctx.strokeStyle = `rgba(0, 255, 255, ${gridOpacity})`;
      ctx.lineWidth = 0.5;
      
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

      // Enhanced neon wave effect
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + Math.sin(timeOffset * 0.001) * 0.2})`;
      ctx.lineWidth = 2;
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

      // Second wave with different frequency
      ctx.strokeStyle = `rgba(236, 72, 153, ${0.2 + Math.sin(timeOffset * 0.0015) * 0.15})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      
      for (let x = 0; x < canvas.width; x += 2) {
        const y = Math.sin((x + waveOffset * 0.7) * 0.015) * 30 + canvas.height / 2 + 100;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Quantum entanglement visualization
      if (Math.random() > 0.95 && entanglementLines.length < 20) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        if (p1 && p2 && Math.abs(p1.x - p2.x) < 200 && Math.abs(p1.y - p2.y) < 200) {
          entanglementLines.push({
            x1: p1.x, y1: p1.y,
            x2: p2.x, y2: p2.y,
            opacity: 0.8,
            life: 100
          });
        }
      }

      // Draw and update entanglement lines
      entanglementLines.forEach((line, index) => {
        line.life--;
        line.opacity = line.life / 100;
        
        if (line.life > 0) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${line.opacity * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.stroke();
          
          // Add quantum interference pattern
          const midX = (line.x1 + line.x2) / 2;
          const midY = (line.y1 + line.y2) / 2;
          ctx.beginPath();
          ctx.arc(midX, midY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${line.opacity * 0.8})`;
          ctx.fill();
        } else {
          entanglementLines.splice(index, 1);
        }
      });

      // Add floating geometric shapes
      if (Math.random() > 0.98) {
        const shape = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * Math.PI * 2,
          type: Math.random() > 0.5 ? 'triangle' : 'diamond',
          opacity: 0.3,
          life: 200
        };
        
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;
        
        if (shape.type === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
          ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
          ctx.closePath();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(shape.size, 0);
          ctx.lineTo(0, shape.size);
          ctx.lineTo(-shape.size, 0);
          ctx.closePath();
        }
        
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Update animation parameters
      waveOffset += 2;
      timeOffset += 1;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity]);

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
      {/* Enhanced Quantum Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)'
        }}
      />
      
      {/* Enhanced Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/3 via-indigo-500/3 to-purple-500/3" />
        
        {/* Enhanced Quantum Grid Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              style={{
                top: `${(i * 5) % 100}%`,
                left: '0',
                right: '0',
                transform: `translateX(${Math.sin(i * 0.5) * 50}px)`
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Quantum Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Content Container */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Enhanced Interactive Elements */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-30"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="w-4 h-4 bg-cyan-400/30 rounded-full blur-sm" />
          <div className="w-2 h-2 bg-cyan-400/60 rounded-full absolute inset-0 m-auto" />
        </motion.div>
      )}
    </div>
  );
};

export default UltraFuturisticBackground2029;