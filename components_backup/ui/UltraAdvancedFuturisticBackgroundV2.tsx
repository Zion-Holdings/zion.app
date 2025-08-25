import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundV2Props {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'hybrid';
  particleCount?: number;
  animationSpeed?: number;
  enableGlitch?: boolean;
  enableHologram?: boolean;
  enableQuantum?: boolean;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackgroundV2({
  intensity = 'high',
  colorScheme = 'hybrid',
  particleCount = 300,
  animationSpeed = 1.5,
  enableGlitch = true,
  enableHologram = true,
  enableQuantum = true,
  enableHolographic = true,
  enableQuantumEffects = true,
  children
}: UltraAdvancedFuturisticBackgroundV2Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  // Enhanced color schemes with more vibrant colors
  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#8b5cf6',
      accent: '#10b981',
      glow: '0 0 30px rgba(0, 255, 255, 0.6)',
      particles: ['#00ffff', '#8b5cf6', '#10b981', '#3b82f6']
    },
    holographic: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      glow: '0 0 40px rgba(236, 73, 153, 0.7)',
      particles: ['#ec4899', '#8b5cf6', '#f59e0b', '#ef4444']
    },
    cyberpunk: {
      primary: '#ef4444',
      secondary: '#f59e0b',
      accent: '#10b981',
      glow: '0 0 35px rgba(239, 68, 68, 0.8)',
      particles: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6']
    },
    neural: {
      primary: '#10b981',
      secondary: '#3b82f6',
      accent: '#8b5cf6',
      glow: '0 0 45px rgba(16, 185, 129, 0.6)',
      particles: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b']
    },
    hybrid: {
      primary: '#00ffff',
      secondary: '#ec4899',
      accent: '#10b981',
      glow: '0 0 50px rgba(0, 255, 255, 0.5)',
      particles: ['#00ffff', '#ec4899', '#10b981', '#8b5cf6', '#f59e0b']
    }
  };

  const currentScheme = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, extreme: 2 }[intensity];

  useEffect(() => {
    setIsVisible(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Initialize particles with enhanced variety
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier,
        vy: (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier,
        size: Math.random() * 3 + 1,
        color: currentScheme.particles[Math.floor(Math.random() * currentScheme.particles.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
      });
    }

    // Enhanced animation loop
    let animationId: number;
    let glitchTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update glitch effect
      if (enableGlitch) {
        glitchTimer += 0.1;
        if (glitchTimer > 2) {
          setGlitchIntensity(Math.random() * 0.3);
          glitchTimer = 0;
        }
      }

      // Draw enhanced particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Enhanced particle rendering based on type
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * (1 + Math.sin(Date.now() * 0.001 + index) * 0.3);

        ctx.save();
        ctx.globalAlpha = alpha;

        // Quantum particles with entanglement effects
        if (particle.type === 'quantum' && enableQuantum) {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 * alpha;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          // Entanglement lines
          if (Math.random() < 0.1) {
            const partner = particles[Math.floor(Math.random() * particles.length)];
            if (partner && partner !== particle) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(partner.x, partner.y);
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1 * alpha;
              ctx.stroke();
            }
          }
        }

        // Holographic particles with matrix effects
        if (particle.type === 'holographic' && enableHologram) {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15 * alpha;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2 * alpha;
          ctx.strokeRect(particle.x - size/2, particle.y - size/2, size, size);

          // Matrix rain effect
          if (Math.random() < 0.05) {
            ctx.fillStyle = particle.color;
            ctx.fillText('01', particle.x, particle.y + size);
          }
        }

        // Neural particles with network effects
        if (particle.type === 'neural') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 25 * alpha;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          // Neural connections
          if (Math.random() < 0.15) {
            const nearby = particles.filter(p => 
              Math.abs(p.x - particle.x) < 100 && 
              Math.abs(p.y - particle.y) < 100
            );
            nearby.forEach(near => {
              if (near !== particle) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(near.x, near.y);
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 0.5 * alpha;
                ctx.stroke();
              }
            });
          }
        }

        // Cyberpunk particles with glitch effects
        if (particle.type === 'cyberpunk') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 30 * alpha;
          
          // Glitch effect
          if (enableGlitch && Math.random() < glitchIntensity) {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(Math.random() * Math.PI);
            ctx.scale(1 + Math.random() * 0.5, 1);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-size/2, -size/2, size, size);
            ctx.restore();
          } else {
            ctx.fillStyle = particle.color;
            ctx.fillRect(particle.x - size/2, particle.y - size/2, size, size);
          }
        }

        ctx.restore();
      });

      // Enhanced background effects
      if (enableQuantumEffects) {
        // Quantum field ripples
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = currentScheme.primary;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 3; i++) {
          const time = Date.now() * 0.001 + i * 2;
          const radius = (time * 50) % 400;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Holographic grid overlay
      if (enableHolographic) {
        ctx.save();
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = currentScheme.secondary;
        ctx.lineWidth = 1;

        const gridSize = 100;
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

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, animationSpeed, intensityMultiplier, currentScheme, enableGlitch, enableHologram, enableQuantum, enableHolographic, enableQuantumEffects]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          filter: `blur(${glitchIntensity}px)`,
          transform: `scale(${1 + glitchIntensity * 0.1})`
        }}
      />

      {/* Enhanced Overlay Effects */}
      <div className="relative z-10">
        {/* Quantum Field Overlay */}
        {enableQuantum && (
          <div 
            className="fixed inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${currentScheme.primary}10 0%, transparent 70%)`,
              animation: 'quantum-pulse 4s ease-in-out infinite'
            }}
          />
        )}

        {/* Holographic Matrix Overlay */}
        {enableHologram && (
          <div 
            className="fixed inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${currentScheme.secondary} 1px, transparent 1px),
                linear-gradient(0deg, ${currentScheme.secondary} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'matrix-scroll 20s linear infinite'
            }}
          />
        )}

        {/* Neural Network Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-10"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${currentScheme.accent}20 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, ${currentScheme.primary}20 0%, transparent 50%)`
          }}
        />

        {/* Enhanced Content */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-20"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes quantum-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        @keyframes matrix-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes neural-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }

        @keyframes cyberpunk-glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
}