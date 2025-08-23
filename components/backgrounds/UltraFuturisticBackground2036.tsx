import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2036Props {
  variant?: 'quantum' | 'ai' | 'space' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraFuturisticBackground2036({ 
  variant = 'quantum', 
  intensity = 'high' 
}: UltraFuturisticBackground2036Props) {
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
      type: 'quantum' | 'neon' | 'energy' | 'data';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      ai: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      space: ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
      cyber: ['#ff0080', '#00ff80', '#8000ff', '#ff8000']
    };

    const variantColors = colors[variant as keyof typeof colors];

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: variantColors[Math.floor(Math.random() * variantColors.length)],
        type: ['quantum', 'neon', 'energy', 'data'][Math.floor(Math.random() * 4)] as any
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.8)');
        gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant === 'ai') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(40, 20, 20, 0.8)');
        gradient.addColorStop(0.7, 'rgba(60, 40, 40, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else if (variant === 'space') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(20, 20, 60, 0.8)');
        gradient.addColorStop(0.7, 'rgba(40, 20, 80, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(40, 40, 20, 0.8)');
        gradient.addColorStop(0.7, 'rgba(60, 60, 40, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

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
            particle.x, particle.y, particle.size * 4
          );
          glowGradient.addColorStop(0, particle.color);
          glowGradient.addColorStop(0.3, particle.color + '80');
          glowGradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = glowGradient;
          ctx.fill();
          
          // Add quantum entanglement lines
          if (index % 3 === 0) {
            const partner = particles[(index + 50) % particles.length];
            const distance = Math.sqrt(
              Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(partner.x, partner.y);
              ctx.strokeStyle = particle.color + '20';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        } else if (particle.type === 'neon') {
          // Neon particles with pulsing effect
          const pulse = Math.sin(Date.now() * 0.01 + index) * 0.3 + 0.7;
          ctx.fillStyle = particle.color + Math.floor(pulse * 255).toString(16).padStart(2, '0');
          ctx.fill();
          
          // Add neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (particle.type === 'energy') {
          // Energy particles with trail effect
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw energy trail
          for (let i = 1; i <= 5; i++) {
            const trailX = particle.x - particle.vx * i * 0.5;
            const trailY = particle.y - particle.vy * i * 0.5;
            const trailOpacity = (6 - i) / 6;
            
            ctx.beginPath();
            ctx.arc(trailX, trailY, particle.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = particle.color + Math.floor(trailOpacity * 255).toString(16).padStart(2, '0');
            ctx.fill();
          }
        } else {
          // Data particles with matrix effect
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Add data stream effect
          if (index % 7 === 0) {
            ctx.fillStyle = particle.color + '40';
            ctx.fillRect(particle.x - 2, particle.y - 10, 4, 20);
          }
        }
      });

      // Draw quantum grid
      if (variant === 'quantum') {
        ctx.strokeStyle = '#00ffff20';
        ctx.lineWidth = 0.5;
        
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

      // Draw floating geometric shapes
      if (intensity === 'high') {
        const time = Date.now() * 0.001;
        
        // Rotating hexagon
        ctx.save();
        ctx.translate(canvas.width * 0.8, canvas.height * 0.2);
        ctx.rotate(time * 0.5);
        ctx.strokeStyle = '#ff00ff40';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * 60;
          const y = Math.sin(angle) * 60;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        // Pulsing circle
        const pulseSize = Math.sin(time * 2) * 20 + 80;
        ctx.beginPath();
        ctx.arc(canvas.width * 0.2, canvas.height * 0.8, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = '#00ff0040';
        ctx.lineWidth = 3;
        ctx.stroke();
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
  }, [variant, intensity]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field lines */}
        {variant === 'quantum' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* AI neural network effect */}
        {variant === 'ai' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Space nebula effect */}
        {variant === 'space' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 75% 75%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Cyber matrix effect */}
        {variant === 'cyber' && (
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 60%, rgba(0, 255, 128, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Quantum entanglement lines */}
        {variant === 'quantum' && intensity === 'high' && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-cyan-400/40 to-transparent"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scaleY: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-px h-32 bg-gradient-to-b from-purple-400/40 to-transparent"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scaleY: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
          </>
        )}
      </div>
    </div>
  );
}