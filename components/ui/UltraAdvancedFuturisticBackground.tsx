import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix' | 'quantum-holographic' | 'neural-quantum' | 'quantum-advanced';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum' 
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
      type: 'particle' | 'quantum' | 'holographic' | 'neural';
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b'],
      holographic: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#00ffff'],
      neural: ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#00ffff'],
      cyberpunk: ['#ec4899', '#f59e0b', '#ef4444', '#00ffff', '#8b5cf6', '#10b981'],
      space: ['#3b82f6', '#1e40af', '#1e3a8a', '#0f172a', '#00ffff', '#8b5cf6'],
      matrix: ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#00ffff'],
      'quantum-holographic': ['#00ffff', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'],
      'neural-quantum': ['#10b981', '#00ffff', '#8b5cf6', '#3b82f6', '#ec4899', '#f59e0b'],
      'quantum-advanced': ['#00ffff', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444']
    };

    const currentColors = colors[variant] || colors.quantum;

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x: number, y: number, vx: number, vy: number;
      const particleType: 'particle' | 'quantum' | 'holographic' | 'neural' = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'particle';

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
        rotationSpeed: (Math.random() - 0.5) * 0.1
      };
    };

    const createQuantumField = () => {
      const field = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        intensity: Math.random() * 0.5 + 0.3,
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
      return field;
    };

    let quantumFields: Array<ReturnType<typeof createQuantumField>> = [];

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (particles.length < 150) {
        particles.push(createParticle());
      }

      // Create quantum fields
      if (Math.random() > 0.98) {
        quantumFields.push(createQuantumField());
      }

      // Update and draw quantum fields
      quantumFields = quantumFields.filter(field => {
        field.life++;
        if (field.life > field.maxLife) return false;

        const alpha = (field.maxLife - field.life) / field.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * field.intensity;
        
        // Create gradient for quantum field
        const gradient = ctx.createRadialGradient(field.x, field.y, 0, field.x, field.y, field.radius);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return true;
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.rotation += particle.rotationSpeed;

        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(index, 1);
          return;
        }

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = (particle.maxLife - particle.life) / particle.maxLife;
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave function
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const angle = particle.rotation + (i * Math.PI / 4);
            const x = particle.x + Math.cos(angle) * particle.size;
            const y = particle.y + Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        } else if (particle.type === 'holographic') {
          // Holographic particle with rainbow effect
          const hue = (particle.life * 2) % 360;
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Holographic rings
          ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.5)`;
          ctx.lineWidth = 1;
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * i, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else {
          // Regular particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Add neural network connections for neural variant
      if (variant === 'neural' || variant === 'neural-quantum') {
        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach(particle2 => {
            const distance = Math.sqrt(
              Math.pow(particle1.x - particle2.x, 2) + 
              Math.pow(particle1.y - particle2.y, 2)
            );
            
            if (distance < 100) {
              const alpha = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Quantum grid overlay */}
        {variant.includes('quantum') && (
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        )}
        
        {/* Holographic scan lines */}
        {variant.includes('holographic') && (
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.1) 2px, rgba(139, 92, 246, 0.1) 4px)'
            }} />
          </div>
        )}
        
        {/* Neural network overlay */}
        {variant.includes('neural') && (
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
              `
            }} />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;