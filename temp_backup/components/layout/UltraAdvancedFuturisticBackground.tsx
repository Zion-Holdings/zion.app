import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function UltraAdvancedFuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle system with quantum effects
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neural' | 'energy' | 'data' | 'consciousness' | 'neon';
      life: number;
      maxLife: number;
      connections: number[];
      glow: number;
    }> = [];

    // Initialize particles with enhanced effects
    const initParticles = () => {
      particles.length = 0;
      
      // Quantum particles (cyan/blue with entanglement)
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: `hsl(${180 + Math.random() * 40}, 80%, 70%)`,
          type: 'quantum',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.5 + 0.5
        });
      }

      // Neural particles (purple/pink with consciousness)
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${280 + Math.random() * 40}, 80%, 70%)`,
          type: 'neural',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.6 + 0.4
        });
      }

      // Energy particles (green/emerald with power)
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 4 + 3,
          opacity: Math.random() * 0.9 + 0.1,
          color: `hsl(${140 + Math.random() * 40}, 80%, 70%)`,
          type: 'energy',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.7 + 0.3
        });
      }

      // Data particles (white/blue with information)
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          color: `hsl(${200 + Math.random() * 40}, 80%, 90%)`,
          type: 'data',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.4 + 0.2
        });
      }

      // Consciousness particles (golden with awareness)
      for (let i = 0; i < 25; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 5 + 4,
          opacity: Math.random() * 0.9 + 0.1,
          color: `hsl(${45 + Math.random() * 30}, 90%, 70%)`,
          type: 'consciousness',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.8 + 0.2
        });
      }

      // Neon particles (bright with glow effects)
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          size: Math.random() * 2.5 + 1.5,
          opacity: Math.random() * 0.9 + 0.1,
          color: `hsl(${320 + Math.random() * 40}, 100%, 80%)`,
          type: 'neon',
          life: Math.random() * 100,
          maxLife: 100,
          connections: [],
          glow: Math.random() * 0.9 + 0.1
        });
      }
    };

    // Initialize particles
    initParticles();

    // Animation loop with enhanced effects
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.5, 'rgba(10, 10, 30, 0.9)');
      gradient.addColorStop(1, 'rgba(20, 20, 50, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;

        // Bounce off edges with quantum tunneling effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          if (Math.random() < 0.1) { // 10% chance of quantum tunneling
            particle.x = particle.x < 0 ? canvas.width : 0;
          }
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          if (Math.random() < 0.1) { // 10% chance of quantum tunneling
            particle.y = particle.y < 0 ? canvas.height : 0;
          }
        }

        // Reset particle if it goes off screen
        if (particle.x < -100 || particle.x > canvas.width + 100 || 
            particle.y < -100 || particle.y > canvas.height + 100) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
        }

        // Draw particle with enhanced effects
        ctx.save();
        
        // Add glow effect
        const glowSize = particle.size * (2 + particle.glow * 3);
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        
        // Enhanced glow colors based on particle type
        let glowColor = particle.color;
        let glowOpacity = particle.opacity * 0.3;
        
        switch (particle.type) {
          case 'quantum':
            glowColor = 'hsl(180, 100%, 80%)';
            glowOpacity = particle.opacity * 0.5;
            break;
          case 'neural':
            glowColor = 'hsl(280, 100%, 80%)';
            glowOpacity = particle.opacity * 0.4;
            break;
          case 'energy':
            glowColor = 'hsl(140, 100%, 80%)';
            glowOpacity = particle.opacity * 0.6;
            break;
          case 'consciousness':
            glowColor = 'hsl(45, 100%, 80%)';
            glowOpacity = particle.opacity * 0.7;
            break;
          case 'neon':
            glowColor = 'hsl(320, 100%, 90%)';
            glowOpacity = particle.opacity * 0.8;
            break;
        }
        
        glowGradient.addColorStop(0, `${glowColor.replace(')', `, ${glowOpacity})`)}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(particle.x - glowSize, particle.y - glowSize, glowSize * 2, glowSize * 2);

        // Draw main particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add particle type-specific effects
        if (particle.type === 'quantum') {
          // Quantum entanglement lines
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'quantum') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 150) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }

        if (particle.type === 'neural') {
          // Neural network connections
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'neural') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 120) {
                ctx.strokeStyle = `rgba(255, 0, 255, ${0.2 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }

        if (particle.type === 'consciousness') {
          // Consciousness ripple effect
          const rippleSize = (particle.life % 50) * 2;
          ctx.strokeStyle = `rgba(255, 215, 0, ${0.3 * (1 - rippleSize / 100)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, rippleSize, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Add floating geometric shapes for futuristic effect
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = (canvas.width / 2) + Math.sin(time + i) * 200;
        const y = (canvas.height / 2) + Math.cos(time + i * 0.7) * 150;
        const size = 20 + Math.sin(time * 2 + i) * 10;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.translate(x, y);
        ctx.rotate(time + i);
        
        // Draw geometric shapes
        if (i === 0) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.closePath();
        } else if (i === 1) {
          // Square
          ctx.strokeRect(-size, -size, size * 2, size * 2);
        } else {
          // Hexagon
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const angle = (j * Math.PI) / 3;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
        }
        
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(10,10,30,0.9) 50%, rgba(20,20,50,0.8) 100%)'
        }}
      />
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanning line effect */}
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          animate={{
            y: [0, '100vh', 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-40" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400 opacity-40" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-green-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-pink-400 opacity-40" />
        
        {/* Floating data streams */}
        <motion.div
          className="absolute top-1/4 left-10 text-xs text-cyan-400 opacity-20 font-mono"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          01:01:01:01
        </motion.div>
        
        <motion.div
          className="absolute top-3/4 right-10 text-xs text-purple-400 opacity-20 font-mono"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          QUANTUM:ACTIVE
        </motion.div>
      </div>
    </div>
  );
}