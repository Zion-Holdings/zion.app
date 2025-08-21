import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix';
  className?: string;
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum',
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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Quantum field effect
    const quantumFields: Array<{
      x: number;
      y: number;
      radius: number;
      strength: number;
      phase: number;
    }> = [];

    // Initialize quantum fields
    for (let i = 0; i < 5; i++) {
      quantumFields.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200,
        strength: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Color schemes for different variants
    const colorSchemes = {
      quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080', '#ffff00'],
      holographic: ['#ff00ff', '#00ffff', '#ffff00', '#ff8000', '#8000ff'],
      neural: ['#00ff80', '#80ff00', '#ff8000', '#8000ff', '#ff0080'],
      cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff8000', '#8000ff'],
      space: ['#ffffff', '#00ffff', '#0080ff', '#8000ff', '#ff0080'],
      matrix: ['#00ff00', '#00cc00', '#009900', '#006600', '#003300']
    };

    const colors = colorSchemes[variant];

    // Create particles
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;

      switch (side) {
        case 0: // top
          x = Math.random() * canvas.width;
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;
        case 3: // left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;
      }

      particles.push({
        x: x!,
        y: y!,
        vx: vx!,
        vy: vy!,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      });
    };

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update quantum fields
      quantumFields.forEach(field => {
        field.phase += 0.01;
        field.x += Math.sin(field.phase) * 0.5;
        field.y += Math.cos(field.phase) * 0.5;
      });

      // Create new particles
      if (particles.length < 100) {
        createParticle();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity = (particle.maxLife - particle.life) / particle.maxLife;

        // Apply quantum field effects
        quantumFields.forEach(field => {
          const dx = particle.x - field.x;
          const dy = particle.y - field.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < field.radius) {
            const force = (field.radius - distance) / field.radius * field.strength;
            particle.vx += (dx / distance) * force * 0.01;
            particle.vy += (dy / distance) * force * 0.01;
          }
        });

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.restore();
      }

      // Draw quantum field connections
      ctx.strokeStyle = colors[0];
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < quantumFields.length; i++) {
        for (let j = i + 1; j < quantumFields.length; j++) {
          const field1 = quantumFields[i];
          const field2 = quantumFields[j];
          const distance = Math.sqrt(
            Math.pow(field1.x - field2.x, 2) + Math.pow(field1.y - field2.y, 2)
          );

          if (distance < 300) {
            ctx.beginPath();
            ctx.moveTo(field1.x, field1.y);
            ctx.lineTo(field2.x, field2.y);
            ctx.stroke();
          }
        }
      }

      // Draw neural network effect for neural variant
      if (variant === 'neural') {
        ctx.strokeStyle = colors[0];
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.2;

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );

            if (distance < 50) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw matrix effect for matrix variant
      if (variant === 'matrix') {
        ctx.fillStyle = colors[0];
        ctx.font = '12px monospace';
        ctx.globalAlpha = 0.1;

        for (let i = 0; i < 20; i++) {
          const x = (time * 0.1 + i * 50) % canvas.width;
          const y = (time * 0.05 + i * 30) % canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

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
  }, [variant]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Gradient overlays for different variants */}
      <div className="fixed inset-0 pointer-events-none">
        {variant === 'quantum' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        )}
        {variant === 'holographic' && (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-cyan-900/20" />
        )}
        {variant === 'neural' && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-cyan-900/20" />
        )}
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20" />
        )}
        {variant === 'space' && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-purple-900/20" />
        )}
        {variant === 'matrix' && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/10 to-black/40" />
        )}
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AdvancedFuturisticBackground;