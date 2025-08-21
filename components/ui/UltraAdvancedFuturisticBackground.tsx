import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: number;
  className?: string;
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  variant = 'quantum-advanced',
  intensity = 1.0,
  className = ''
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: string;
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensity);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.5 ? 'quantum' : 'holographic';
        const colors = type === 'quantum' 
          ? ['#00ffff', '#0080ff', '#8000ff', '#ff0080']
          : ['#ff00ff', '#8000ff', '#0080ff', '#00ff80'];
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          size: Math.random() * 3 * intensity + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      
      if (variant.includes('quantum')) {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(128, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant.includes('holographic')) {
        gradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(128, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant.includes('cyberpunk')) {
        gradient.addColorStop(0, 'rgba(255, 0, 128, 0.1)');
        gradient.addColorStop(0.5, 'rgba(255, 128, 0, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 128, 0.1)');
        gradient.addColorStop(0.5, 'rgba(0, 128, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (particle.type === 'quantum') {
          // Quantum particles with glow effect
          const glowGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          glowGradient.addColorStop(0, particle.color);
          glowGradient.addColorStop(0.5, `${particle.color}40`);
          glowGradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = glowGradient;
          ctx.fill();
          
          // Add quantum entanglement lines
          if (Math.random() > 0.95) {
            const partner = particles[Math.floor(Math.random() * particles.length)];
            if (partner && partner !== particle) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(partner.x, partner.y);
              ctx.strokeStyle = `${particle.color}20`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        } else {
          // Holographic particles with matrix effect
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          // Add matrix-style connections
          if (Math.random() > 0.98) {
            const nearby = particles.filter(p => 
              Math.abs(p.x - particle.x) < 100 && Math.abs(p.y - particle.y) < 100
            );
            nearby.forEach(near => {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(near.x, near.y);
              ctx.strokeStyle = `${particle.color}10`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            });
          }
        }
        
        ctx.globalAlpha = 1;
      });

      // Add special effects based on variant
      if (variant.includes('matrix')) {
        // Matrix rain effect
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const length = Math.random() * 100 + 50;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + length);
          ctx.strokeStyle = '#00ff00';
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      if (variant.includes('entanglement')) {
        // Quantum entanglement visualization
        particles.forEach((particle, i) => {
          if (i % 3 === 0) {
            const entangled = particles.filter((_, j) => j % 3 === 0 && j !== i);
            entangled.forEach(partner => {
              const distance = Math.sqrt(
                Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
              );
              if (distance < 200) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(partner.x, partner.y);
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 200)})`;
                ctx.lineWidth = 2;
                ctx.stroke();
              }
            });
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional Visual Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Quantum Field Lines */}
        {variant.includes('quantum') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(128, 0, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Holographic Grid */}
        {variant.includes('holographic') && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Neural Network Pattern */}
        {variant.includes('neural') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 10% 10%, rgba(0, 255, 128, 0.1) 0%, transparent 40%)',
                'radial-gradient(circle at 90% 90%, rgba(0, 128, 255, 0.1) 0%, transparent 40%)',
                'radial-gradient(circle at 50% 50%, rgba(128, 255, 0, 0.1) 0%, transparent 40%)'
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Cyberpunk Energy Field */}
        {variant.includes('cyberpunk') && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 70%, rgba(255, 0, 128, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 30%, rgba(255, 128, 0, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 60%)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}