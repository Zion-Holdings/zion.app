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
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6'],
      holographic: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'],
      neural: ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'],
      cyberpunk: ['#ec4899', '#f59e0b', '#ef4444', '#00ffff', '#8b5cf6'],
      space: ['#3b82f6', '#1e40af', '#1e3a8a', '#0f172a', '#00ffff'],
      matrix: ['#10b981', '#059669', '#047857', '#065f46', '#064e3b']
    };

    const currentColors = colors[variant.includes('quantum') ? 'quantum' : variant.includes('holographic') ? 'holographic' : variant] || colors.quantum;

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

      const particleType: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' = 
        Math.random() > 0.7 ? 'quantum' : 
        Math.random() > 0.5 ? 'holographic' : 
        Math.random() > 0.3 ? 'neural' : 'cyberpunk';

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 4 + 1,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.01
      };
    };

    const animate = () => {
      // Enhanced background with multiple layers
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      if (variant.includes('quantum')) {
        ctx.fillStyle = 'rgba(0, 255, 255, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Create holographic grid effect
      if (variant.includes('holographic')) {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 0.5;
        const gridSize = 50;
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
      }

      // Create new particles
      if (particles.length < 150) {
        particles.push(createParticle());
      }

      // Update and draw particles
      particles = particles.filter(particle => {
        particle.life++;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;

        if (particle.life > particle.maxLife) return false;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle based on type
        const alpha = 1 - (particle.life / particle.maxLife);
        const pulseEffect = Math.sin(particle.pulse) * 0.3 + 0.7;
        
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = alpha * pulseEffect;

        switch (particle.type) {
          case 'quantum':
            // Quantum particle with entanglement effect
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * pulseEffect, 0, Math.PI * 2);
            ctx.fill();
            
            // Quantum entanglement lines
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-particle.size * 2, 0);
            ctx.lineTo(particle.size * 2, 0);
            ctx.moveTo(0, -particle.size * 2);
            ctx.lineTo(0, particle.size * 2);
            ctx.stroke();
            break;

          case 'holographic':
            // Holographic particle with geometric shapes
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            const size = particle.size * pulseEffect;
            ctx.moveTo(-size, -size);
            ctx.lineTo(size, -size);
            ctx.lineTo(size, size);
            ctx.lineTo(-size, size);
            ctx.closePath();
            ctx.stroke();
            break;

          case 'neural':
            // Neural network particle
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * pulseEffect, 0, Math.PI * 2);
            ctx.fill();
            
            // Neural connections
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-particle.size * 1.5, -particle.size * 1.5);
            ctx.lineTo(particle.size * 1.5, particle.size * 1.5);
            ctx.stroke();
            break;

          case 'cyberpunk':
            // Cyberpunk particle with angular design
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1.5;
            const cSize = particle.size * pulseEffect;
            ctx.beginPath();
            ctx.moveTo(0, -cSize);
            ctx.lineTo(cSize, 0);
            ctx.lineTo(0, cSize);
            ctx.lineTo(-cSize, 0);
            ctx.closePath();
            ctx.stroke();
            break;
        }

        ctx.restore();

        return true;
      });

      // Create quantum entanglement effects
      if (variant.includes('quantum') && particles.length > 10) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i += 3) {
          if (i + 2 < particles.length) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.lineTo(particles[i + 2].x, particles[i + 2].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Quantum field lines */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-pink-400/20 rounded-full animate-pulse delay-2000"></div>
          </div>
        )}
        
        {/* Holographic grid overlay */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
        )}
        
        {/* Neural network overlay */}
        {variant.includes('neural') && (
          <div className="absolute inset-0 bg-gradient-to-tl from-green-500/5 via-transparent to-blue-500/5"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;