import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  intensity = 'medium',
  theme = 'quantum' 
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
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ffff', '#ff8000'],
      neon: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff', '#ffd700'],
      holographic: ['#ff1493', '#00bfff', '#ffd700', '#7fff00', '#ff69b4', '#00ffff', '#ff00ff', '#ffff00'],
      cyberpunk: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff', '#ffd700']
    };

    const selectedColors = colors[theme] || colors.quantum;

    // Initialize particles with enhanced properties
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 180 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
          type: ['quantum', 'neon', 'holographic', 'cyberpunk'][Math.floor(Math.random() * 4)] as any,
          life: Math.random() * 100,
          maxLife: 100,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.1 + 0.05
        });
      }
    };

    // Enhanced animation loop with advanced effects
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (theme === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 0, 255, 0.1)');
      } else if (theme === 'neon') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.1)');
      } else if (theme === 'holographic') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0.1)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update position with enhanced physics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Enhanced boundary handling with wrap-around
        if (particle.x <= 0) particle.x = canvas.width;
        if (particle.x >= canvas.width) particle.x = 0;
        if (particle.y <= 0) particle.y = canvas.height;
        if (particle.y >= canvas.height) particle.y = 0;

        // Update particle life and pulse
        particle.life -= 0.5;
        particle.pulse += particle.pulseSpeed;

        // Regenerate particles
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 3;
          particle.vy = (Math.random() - 0.5) * 3;
          particle.color = selectedColors[Math.floor(Math.random() * selectedColors.length)];
        }

        // Calculate dynamic opacity and size based on life and pulse
        const lifeRatio = particle.life / particle.maxLife;
        const pulseEffect = Math.sin(particle.pulse) * 0.3 + 0.7;
        const dynamicOpacity = particle.opacity * lifeRatio * pulseEffect;
        const dynamicSize = particle.size * (0.5 + lifeRatio * 0.5);

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = dynamicOpacity;
        
        if (particle.type === 'quantum') {
          // Enhanced quantum particle with wave effect and glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 4
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 4, 0, Math.PI * 2);
          ctx.fill();

          // Add quantum wave rings
          for (let i = 1; i <= 3; i++) {
            ctx.strokeStyle = particle.color + Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, dynamicSize * 2 * i, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'neon') {
          // Enhanced neon particle with glow and trail
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 3
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.5, particle.color + '60');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 3, 0, Math.PI * 2);
          ctx.fill();

          // Add neon trail effect
          ctx.strokeStyle = particle.color + Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 2, particle.y - particle.vy * 2);
          ctx.stroke();
        } else if (particle.type === 'holographic') {
          // Enhanced holographic particle with prism effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 3.5
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.4, particle.color + '80');
          gradient.addColorStop(0.7, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 3.5, 0, Math.PI * 2);
          ctx.fill();

          // Add holographic prism lines
          ctx.strokeStyle = particle.color + Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          for (let i = 0; i < 4; i++) {
            const angle = (Math.PI / 2) * i + particle.pulse;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(
              particle.x + Math.cos(angle) * dynamicSize * 2,
              particle.y + Math.sin(angle) * dynamicSize * 2
            );
            ctx.stroke();
          }
        } else {
          // Enhanced cyberpunk particle with electric effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 3
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.5, particle.color + '60');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 3, 0, Math.PI * 2);
          ctx.fill();

          // Add electric bolt effect
          if (Math.random() < 0.1) {
            ctx.strokeStyle = particle.color + Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            const endX = particle.x + (Math.random() - 0.5) * 100;
            const endY = particle.y + (Math.random() - 0.5) * 100;
            ctx.lineTo(endX, endY);
            ctx.stroke();
          }
        }

        ctx.restore();
      });

      // Add connection lines between nearby particles
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = selectedColors[0] + '40';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (150 - distance) / 150;
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Handle window resize
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
  }, [intensity, theme]);

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)'
        }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Corner glow effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-tl-full" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-purple-400/30 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse delay-1500" />
      </div>
      
      {children}
    </div>
  );
}