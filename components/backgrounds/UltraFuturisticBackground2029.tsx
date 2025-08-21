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
      size: Math.random() * 6 + 2,
      color: [
        '#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6',
        '#f59e0b', '#ef4444', '#06b6d4', '#84cc16', '#f97316',
        '#a855f7', '#06b6d4', '#14b8a6', '#f43f5e', '#8b5cf6'
      ][Math.floor(Math.random() * 15)],
      opacity: Math.random() * 0.8 + 0.3,
      life: Math.random() * 150 + 100,
      maxLife: Math.random() * 150 + 100,
      type: Math.random() > 0.6 ? 'quantum' : Math.random() > 0.3 ? 'holographic' : 'normal',
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1
    }));

    // Advanced holographic grid
    const gridSize = 80;
    const gridOpacity = 0.2;

    // Quantum field effects
    let fieldOffset = 0;
    let holographicWaves = 0;

    // Enhanced neon wave effect
    let waveOffset = 0;

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
          particle.size = Math.sin(Date.now() * 0.002 + index) * 3 + 4;
          
          // Quantum entanglement effect
          if (index % 3 === 0) {
            const partner = particles[(index + 3) % particles.length];
            if (partner && partner.type === 'quantum') {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(partner.x, partner.y);
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(Date.now() * 0.001) * 0.1})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Holographic particle effects
        if (particle.type === 'holographic') {
          particle.size = Math.sin(Date.now() * 0.003 + index) * 2 + 3;
          particle.opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.4;
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

        // Draw particle with enhanced glow effect
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Create enhanced glow effect
        const gradient = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, particle.size * 4
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.3, particle.color + '80');
        gradient.addColorStop(0.6, particle.color + '40');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        
        // Draw different shapes based on particle type
        if (particle.type === 'quantum') {
          // Quantum particle - diamond shape
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          ctx.fill();
        } else if (particle.type === 'holographic') {
          // Holographic particle - hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * particle.size;
            const y = Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Normal particle - circle
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Enhanced holographic grid
      ctx.strokeStyle = `rgba(139, 92, 246, ${gridOpacity})`;
      ctx.lineWidth = 1;
      
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

      // Quantum field effects
      fieldOffset += 0.5;
      holographicWaves += 0.3;
      
      // Draw quantum field ripples
      for (let i = 0; i < 3; i++) {
        const radius = (fieldOffset + i * 100) % (Math.max(canvas.width, canvas.height) * 0.8);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 - (radius / (Math.max(canvas.width, canvas.height) * 0.8)) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Enhanced neon wave effect
      waveOffset += 0.02;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
          Math.sin(x * 0.01 + waveOffset) * 50 +
          Math.sin(x * 0.02 + waveOffset * 2) * 25 +
          Math.sin(x * 0.005 + waveOffset * 0.5) * 100;
        
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      const waveGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      waveGradient.addColorStop(0, 'rgba(236, 72, 153, 0.1)');
      waveGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      waveGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = waveGradient;
      ctx.fill();

      // Holographic wave effects
      for (let i = 0; i < 2; i++) {
        const waveY = canvas.height * 0.3 + Math.sin(holographicWaves + i * Math.PI) * 20;
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = waveY + Math.sin(x * 0.015 + holographicWaves * 2) * 15;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - i * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Mouse interaction effects
      if (isHovering) {
        const mouseRadius = 100;
        const mouseGradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, mouseRadius
        );
        mouseGradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        mouseGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, mouseRadius, 0, Math.PI * 2);
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
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Enhanced Radial Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-green-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-pink-500/10 via-transparent to-transparent" />
      </div>

      {/* Enhanced Quantum Field Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0, 255, 255, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
              'linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(0, 255, 255, 0.05), rgba(139, 92, 246, 0.05))',
              'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05), rgba(0, 255, 255, 0.05))'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Enhanced Holographic Matrix */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(139, 92, 246, 0.3) 100%),
              linear-gradient(0deg, transparent 98%, rgba(139, 92, 246, 0.3) 100%)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
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

export default UltraFuturisticBackground2029;