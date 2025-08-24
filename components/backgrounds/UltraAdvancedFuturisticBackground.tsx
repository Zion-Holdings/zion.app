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
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ffff'],
      neon: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff'],
      holographic: ['#ff1493', '#00bfff', '#ffd700', '#7fff00', '#ff69b4', '#ff4500', '#00fa9a'],
      cyberpunk: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493', '#00bfff']
    };

    const selectedColors = colors[theme] || colors.quantum;

    // Initialize particles with enhanced properties
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 200 : 120;
      
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
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1
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
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      } else if (theme === 'neon') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      } else if (theme === 'holographic') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 102, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life++;

        // Bounce off edges with enhanced physics
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Wrap around edges for continuous flow
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle when life expires
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.rotation = Math.random() * Math.PI * 2;
        }

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect and glow
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 4, 0, Math.PI * 2);
          ctx.fill();

          // Add quantum wave effect
          ctx.strokeStyle = particle.color + '60';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 3; i++) {
            const waveRadius = particle.size * (2 + i * 2);
            ctx.arc(0, 0, waveRadius, 0, Math.PI * 2);
          }
          ctx.stroke();

        } else if (particle.type === 'neon') {
          // Neon particle with bright glow and trail
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 3);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.5, particle.color + '80');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Add neon trail effect
          ctx.strokeStyle = particle.color + '40';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-particle.vx * 5, -particle.vy * 5);
          ctx.stroke();

        } else if (particle.type === 'holographic') {
          // Holographic particle with prismatic effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2.5);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.4, particle.color + '60');
          gradient.addColorStop(0.8, particle.color + '20');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Add holographic rings
          ctx.strokeStyle = particle.color + '40';
          ctx.lineWidth = 1;
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(0, 0, particle.size * i, 0, Math.PI * 2);
            ctx.stroke();
          }

        } else {
          // Cyberpunk particle with electric effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.6, particle.color + '60');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();

          // Add electric bolt effect
          ctx.strokeStyle = particle.color + '80';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.moveTo(particle.size, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Add connection lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Add floating geometric shapes for enhanced futuristic effect
      if (intensity === 'high') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * canvas.width;
          const y = (Math.cos(time * 0.3 + i) * 0.3 + 0.5) * canvas.height;
          const size = 20 + Math.sin(time + i) * 10;
          
          ctx.save();
          ctx.globalAlpha = 0.1;
          ctx.translate(x, y);
          ctx.rotate(time * 0.2 + i);
          
          if (i % 2 === 0) {
            // Draw hexagon
            ctx.beginPath();
            for (let j = 0; j < 6; j++) {
              const angle = (j * Math.PI) / 3;
              const px = Math.cos(angle) * size;
              const py = Math.sin(angle) * size;
              if (j === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = selectedColors[i % selectedColors.length] + '40';
            ctx.lineWidth = 2;
            ctx.stroke();
          } else {
            // Draw triangle
            ctx.beginPath();
            for (let j = 0; j < 3; j++) {
              const angle = (j * Math.PI * 2) / 3;
              const px = Math.cos(angle) * size;
              const py = Math.sin(angle) * size;
              if (j === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = selectedColors[i % selectedColors.length] + '40';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          
          ctx.restore();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
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
  }, [intensity, theme]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Corner glow effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, 20, 0],
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}