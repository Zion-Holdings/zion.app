import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  intensity = 'medium',
  theme = 'quantum',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ffff'],
      neon: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff'],
      holographic: ['#ff1493', '#00bfff', '#ffd700', '#7fff00', '#ff69b4', '#00ced1', '#ff4500'],
      cyberpunk: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff'],
      'quantum-fusion': ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ffff', '#ff1493', '#00bfff']
    };

    const selectedColors = colors[theme] || colors.quantum;

    // Initialize particles with enhanced properties
    const initParticles = () => {
      const count = intensity === 'extreme' ? particleCount * 2 : 
                   intensity === 'high' ? particleCount : 
                   intensity === 'medium' ? Math.floor(particleCount * 0.7) : 
                   Math.floor(particleCount * 0.5);
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3 * animationSpeed,
          vy: (Math.random() - 0.5) * 3 * animationSpeed,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
          type: ['quantum', 'neon', 'holographic', 'cyberpunk'][Math.floor(Math.random() * 4)] as any,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1 * animationSpeed
        });
      }
    };

    // Enhanced animation loop with quantum effects
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (theme === 'quantum-fusion') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.98)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.98)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle life
        particle.life += 1;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Update position with quantum effects
        if (enableQuantumEffects) {
          particle.x += particle.vx + Math.sin(particle.life * 0.1) * 0.5;
          particle.y += particle.vy + Math.cos(particle.life * 0.1) * 0.5;
        } else {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        // Update rotation
        particle.rotation += particle.rotationSpeed;

        // Bounce off edges with quantum tunneling effect
        if (particle.x <= 0 || particle.x >= canvas.width) {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling - particle appears on opposite side
            particle.x = particle.x <= 0 ? canvas.width : 0;
          } else {
            particle.vx *= -1;
          }
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling - particle appears on opposite side
            particle.y = particle.y <= 0 ? canvas.height : 0;
          } else {
            particle.vy *= -1;
          }
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect and neon glow
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.7, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Add quantum entanglement lines
          if (enableQuantumEffects && Math.random() < 0.01) {
            ctx.strokeStyle = particle.color + '40';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
            ctx.stroke();
          }
        } else if (particle.type === 'holographic') {
          // Holographic particle with rainbow effect
          const hue = (particle.life * 2) % 360;
          const color = `hsl(${hue}, 100%, 70%)`;
          
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 15;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Add holographic rings
          if (enableHolographic) {
            ctx.strokeStyle = color + '60';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particle with electric effect
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 25;
          
          // Draw electric bolt shape
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.lineTo(particle.size, -particle.size);
          ctx.closePath();
          ctx.fill();
          
          // Add electric arcs
          if (Math.random() < 0.05) {
            ctx.strokeStyle = particle.color + '80';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-particle.size * 2, -particle.size * 2);
            ctx.lineTo(particle.size * 2, particle.size * 2);
            ctx.stroke();
          }
        } else {
          // Neon particle with glow effect
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        }
        
        ctx.restore();
      });

      // Add quantum field effects
      if (enableQuantumEffects && theme === 'quantum-fusion') {
        ctx.save();
        ctx.globalAlpha = 0.1;
        
        // Create quantum field ripples
        for (let i = 0; i < 3; i++) {
          const time = Date.now() * 0.001 * animationSpeed;
          const radius = (time * 50 + i * 100) % (Math.max(canvas.width, canvas.height) * 0.8);
          
          ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 70%)`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }

      // Add holographic matrix effect
      if (enableHolographic && theme === 'holographic') {
        ctx.save();
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 1;
        
        // Draw matrix grid
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
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, theme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ 
          background: 'transparent',
          filter: theme === 'quantum-fusion' ? 'blur(0.5px)' : 'none'
        }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {theme === 'quantum-fusion' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/3 to-pink-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,255,0.1),transparent_50%)]" />
          </>
        )}
        {theme === 'holographic' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-green-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,191,255,0.1),transparent_50%)]" />
          </>
        )}
        {theme === 'cyberpunk' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-pink-500/3 to-orange-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,20,147,0.1),transparent_50%)]" />
          </>
        )}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}