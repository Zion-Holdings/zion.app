import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children?: React.ReactNode;
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
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ff80', '#ff8000'],
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
          maxLife: 100 + Math.random() * 100,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        });
      }
    };

    // Enhanced animation loop
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
        gradient.addColorStop(1, 'rgba(255, 0, 255, 0.05)');
      } else if (theme === 'neon') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.05)');
      } else if (theme === 'holographic') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0.05)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.05)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update life and pulse
        particle.life += 1;
        particle.pulse += particle.pulseSpeed;

        // Bounce off edges with enhanced physics
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Wrap around edges for some particles
        if (Math.random() < 0.1) {
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Remove old particles and add new ones
        if (particle.life > particle.maxLife) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            size: Math.random() * 6 + 2,
            opacity: Math.random() * 0.9 + 0.1,
            color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
            type: ['quantum', 'neon', 'holographic', 'cyberpunk'][Math.floor(Math.random() * 4)] as any,
            life: 0,
            maxLife: 100 + Math.random() * 100,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03
          };
        }

        // Calculate dynamic opacity and size
        const lifeRatio = particle.life / particle.maxLife;
        const pulseEffect = Math.sin(particle.pulse) * 0.3 + 0.7;
        const dynamicOpacity = particle.opacity * (1 - lifeRatio * 0.5) * pulseEffect;
        const dynamicSize = particle.size * (1 + Math.sin(particle.pulse) * 0.2);

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = dynamicOpacity;
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect and neon glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 4
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.7, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 2, 0, Math.PI * 2);
          ctx.fill();

          // Add neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = dynamicSize * 3;
          ctx.fillStyle = particle.color + '20';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

        } else if (particle.type === 'neon') {
          // Neon particle with electric effect
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          
          // Draw electric lines
          for (let i = 0; i < 3; i++) {
            const angle = (Math.PI * 2 * i) / 3 + particle.pulse;
            const endX = particle.x + Math.cos(angle) * dynamicSize * 2;
            const endY = particle.y + Math.sin(angle) * dynamicSize * 2;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(endX, endY);
            ctx.stroke();
          }

          // Add neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = dynamicSize * 2;
          ctx.fillStyle = particle.color + '40';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 0.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

        } else if (particle.type === 'holographic') {
          // Holographic particle with prism effect
          const colors = [particle.color, '#ffffff', particle.color];
          colors.forEach((color, i) => {
            const offset = (i - 1) * dynamicSize * 0.5;
            const gradient = ctx.createRadialGradient(
              particle.x + offset, particle.y + offset, 0,
              particle.x + offset, particle.y + offset, dynamicSize
            );
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x + offset, particle.y + offset, dynamicSize * 0.6, 0, Math.PI * 2);
            ctx.fill();
          });

        } else {
          // Cyberpunk particle with digital effect
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x - dynamicSize/2, particle.y - dynamicSize/2, dynamicSize, dynamicSize);
          
          // Add digital scan lines
          ctx.strokeStyle = particle.color + '80';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x - dynamicSize, particle.y);
          ctx.lineTo(particle.x + dynamicSize, particle.y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - dynamicSize);
          ctx.lineTo(particle.x, particle.y + dynamicSize);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Draw connection lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Add floating geometric shapes
      if (intensity === 'high') {
        const time = Date.now() * 0.001;
        const shapes = [
          { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 40, rotation: time * 0.5 },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 60, rotation: time * 0.3 },
          { x: canvas.width * 0.5, y: canvas.height * 0.8, size: 50, rotation: time * 0.7 }
        ];

        shapes.forEach((shape, index) => {
          ctx.save();
          ctx.translate(shape.x, shape.y);
          ctx.rotate(shape.rotation);
          ctx.globalAlpha = 0.1;
          ctx.strokeStyle = selectedColors[index % selectedColors.length];
          ctx.lineWidth = 2;
          
          if (index === 0) {
            // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
            ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
            ctx.closePath();
          } else if (index === 1) {
            // Square
            ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
          } else {
            // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI * 2 * i) / 6;
              const x = Math.cos(angle) * shape.size/2;
              const y = Math.sin(angle) * shape.size/2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
          }
          
          ctx.stroke();
          ctx.restore();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, theme]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500 opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-500 opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-500 opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500 opacity-30" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {children}
    </div>
  );
}