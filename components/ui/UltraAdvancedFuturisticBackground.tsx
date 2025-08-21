import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
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
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix';
      connections: number[];
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b'],
      holographic: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#00ffff'],
      neural: ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#00ffff'],
      cyberpunk: ['#ec4899', '#f59e0b', '#ef4444', '#00ffff', '#8b5cf6', '#10b981'],
      space: ['#3b82f6', '#1e40af', '#1e3a8a', '#0f172a', '#00ffff', '#8b5cf6'],
      matrix: ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#00ffff'],
      'quantum-entanglement': ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
      'holographic-matrix': ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#00ffff', '#ef4444'],
      'neural-quantum-cyberpunk': ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#00ffff', '#ef4444']
    };

    const currentColors = colors[variant] || colors.quantum;

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

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 4 + 1,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 150,
        type: variant as any,
        connections: []
      };
    };

    const createQuantumParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 6 + 2,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        life: 0,
        maxLife: Math.random() * 400 + 200,
        type: variant as any,
        connections: []
      };
    };

    const animate = () => {
      // Create quantum field effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (particles.length < 150) {
        if (variant.includes('quantum')) {
          particles.push(createQuantumParticle());
        } else {
          particles.push(createParticle());
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life++;
        
        if (particle.life > particle.maxLife) {
          particles.splice(index, 1);
          return;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        
        if (variant.includes('quantum')) {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Quantum glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Create connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              const connectionAlpha = (1 - distance / 100) * alpha * 0.3;
              ctx.globalAlpha = connectionAlpha;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Add special effects based on variant
      if (variant.includes('holographic')) {
        // Holographic grid effect
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
      }

      if (variant.includes('matrix')) {
        // Matrix rain effect
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#10b981';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (i * 100) % canvas.width;
          const y = (Date.now() * 0.01 + i * 50) % canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      if (variant.includes('cyberpunk')) {
        // Cyberpunk scan lines
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < canvas.height; i += 4) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
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
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      {/* Enhanced quantum field overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent">
          {variant.includes('quantum') && (
            <>
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500" />
            </>
          )}
          
          {variant.includes('holographic') && (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;