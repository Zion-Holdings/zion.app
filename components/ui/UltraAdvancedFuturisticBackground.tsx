import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix' | 'quantum-holographic' | 'neural-quantum' | 'cyberpunk-holographic';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum-holographic' 
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

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      trail: Array<{x: number, y: number, alpha: number}>;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b'],
      holographic: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#00ffff'],
      neural: ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#00ffff'],
      cyberpunk: ['#ec4899', '#f59e0b', '#ef4444', '#00ffff', '#8b5cf6', '#10b981'],
      space: ['#3b82f6', '#1e40af', '#1e3a8a', '#0f172a', '#00ffff', '#8b5cf6'],
      matrix: ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#00ffff']
    };

    const currentColors = colors[variant.includes('quantum') ? 'quantum' : variant.includes('holographic') ? 'holographic' : variant] || colors.quantum;

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;

      switch (side) {
        case 0: // top
          x = Math.random() * canvas.width;
          y = -10;
          vx = (Math.random() - 0.5) * 3;
          vy = Math.random() * 3 + 1;
          break;
        case 1: // right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 3 + 1);
          vy = (Math.random() - 0.5) * 3;
          break;
        case 2: // bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 3;
          vy = -(Math.random() * 3 + 1);
          break;
        case 3: // left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 3 + 1;
          vy = (Math.random() - 0.5) * 3;
          break;
      }

      const particleType: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' = 
        Math.random() > 0.7 ? 'quantum' : 
        Math.random() > 0.5 ? 'holographic' : 
        Math.random() > 0.3 ? 'neural' : 'cyberpunk';

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 6 + 2,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        life: 0,
        maxLife: Math.random() * 400 + 300,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: (Math.random() - 0.5) * 0.1 + 0.05,
        trail: []
      };
    };

    const drawParticle = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Draw particle trail
      if (particle.trail.length > 0) {
        ctx.globalAlpha = 0.3;
        particle.trail.forEach((trailPoint, index) => {
          const alpha = trailPoint.alpha * (index / particle.trail.length);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(trailPoint.x - particle.x, trailPoint.y - particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw main particle
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = particle.color;
      
      // Add glow effect
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.5, particle.color + '80');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Draw particle type indicator
      ctx.globalAlpha = 1;
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      
      switch (particle.type) {
        case 'quantum':
          // Draw quantum symbol
          ctx.beginPath();
          ctx.moveTo(-particle.size * 0.5, -particle.size * 0.5);
          ctx.lineTo(particle.size * 0.5, particle.size * 0.5);
          ctx.moveTo(-particle.size * 0.5, particle.size * 0.5);
          ctx.lineTo(particle.size * 0.5, -particle.size * 0.5);
          ctx.stroke();
          break;
        case 'holographic':
          // Draw holographic rings
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.6, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 'neural':
          // Draw neural network nodes
          ctx.beginPath();
          ctx.arc(-particle.size * 0.3, -particle.size * 0.3, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(particle.size * 0.3, particle.size * 0.3, 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'cyberpunk':
          // Draw cyberpunk diamond
          ctx.beginPath();
          ctx.moveTo(0, -particle.size * 0.5);
          ctx.lineTo(particle.size * 0.3, 0);
          ctx.lineTo(0, particle.size * 0.5);
          ctx.lineTo(-particle.size * 0.3, 0);
          ctx.closePath();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const updateParticle = (particle: typeof particles[0]) => {
      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, alpha: 1 });
      if (particle.trail.length > 10) {
        particle.trail.shift();
      }

      // Update trail alpha
      particle.trail.forEach(point => {
        point.alpha *= 0.95;
      });

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Update rotation and pulse
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;

      // Update life
      particle.life++;

      // Add some randomness to movement
      particle.vx += (Math.random() - 0.5) * 0.1;
      particle.vy += (Math.random() - 0.5) * 0.1;

      // Dampen velocity
      particle.vx *= 0.999;
      particle.vy *= 0.999;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (particles.length < 150) {
        particles.push(createParticle());
      }

      // Update and draw particles
      particles = particles.filter(particle => {
        if (particle.life >= particle.maxLife) {
          return false;
        }

        updateParticle(particle);
        drawParticle(particle);

        // Remove particles that are off screen
        if (particle.x < -50 || particle.x > canvas.width + 50 || 
            particle.y < -50 || particle.y > canvas.height + 50) {
          return false;
        }

        return true;
      });

      // Draw connection lines between nearby particles
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const alpha = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add floating geometric shapes
      if (Math.random() > 0.98) {
        drawFloatingShape(ctx, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawFloatingShape = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 40 + 20;
      const rotation = Math.random() * Math.PI * 2;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 2;
      
      // Random shape
      const shapeType = Math.floor(Math.random() * 4);
      switch (shapeType) {
        case 0: // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.closePath();
          break;
        case 1: // Square
          ctx.strokeRect(-size/2, -size/2, size, size);
          break;
        case 2: // Hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          break;
        case 3: // Circle
          ctx.beginPath();
          ctx.arc(0, 0, size/2, 0, Math.PI * 2);
          break;
      }
      
      ctx.stroke();
      ctx.restore();
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 pointer-events-none" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;