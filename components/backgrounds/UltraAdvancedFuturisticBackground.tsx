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
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.98)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Update position with quantum effects
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Quantum entanglement effect
        if (enableQuantumEffects && Math.random() < 0.01) {
          const partner = particles[Math.floor(Math.random() * particles.length)];
          if (partner && partner !== particle) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * particle.opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(partner.x, partner.y);
            ctx.stroke();
          }
        }

        // Bounce off edges with quantum tunneling
        if (particle.x <= 0 || particle.x >= canvas.width) {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
            particle.x = particle.x <= 0 ? canvas.width : 0;
          } else {
            particle.vx *= -1;
          }
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
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
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(-particle.size * 2, -particle.size * 2, particle.size * 4, particle.size * 4);
          
          // Quantum wave rings
          if (enableQuantumEffects) {
            for (let i = 1; i <= 3; i++) {
              ctx.strokeStyle = particle.color + Math.floor(40 - i * 10).toString(16);
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * i, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        } else if (particle.type === 'holographic' && enableHolographic) {
          // Holographic particle with rainbow effect
          const hue = (Date.now() * 0.1 + index * 10) % 360;
          ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Holographic glitch effect
          if (Math.random() < 0.05) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(-particle.size * 1.5, -particle.size * 1.5, particle.size * 3, particle.size * 3);
          }
        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particle with neon glow
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 3;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          ctx.shadowBlur = 0;
        } else {
          // Standard neon particle
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          ctx.shadowBlur = 0;
        }
        
        ctx.restore();
      });

      // Add quantum field effects
      if (enableQuantumEffects && theme === 'quantum-fusion') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time * 2 + i)})`;
          ctx.lineWidth = 2;
          ctx.arc(x, y, 50 + 30 * Math.sin(time + i), 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Add holographic matrix effect
      if (enableHolographic && theme === 'holographic') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 20; i++) {
          const x = (i * canvas.width / 20 + time * 50) % canvas.width;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < 15; i++) {
          const y = (i * canvas.height / 15 + time * 30) % canvas.height;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
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
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional futuristic overlay effects */}
      {enableHolographic && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
        </div>
      )}
      
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.02),transparent_70%)]" />
        </div>
      )}
      
      {children}
    </div>
  );
}