import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2034Props {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyberpunk' | 'space-hologram' | 'ai-consciousness';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceEffects?: boolean;
  children: React.ReactNode;
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  intensity = 'high',
  colorScheme = 'quantum-fusion',
  particleCount = 500,
  animationSpeed = 2.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceEffects = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          background: '#000011',
          particle: '#00ff88'
        };
      case 'neon-cyberpunk':
        return {
          primary: '#ff0080',
          secondary: '#00ffff',
          accent: '#ffff00',
          background: '#0a0a0a',
          particle: '#ff00ff'
        };
      case 'space-hologram':
        return {
          primary: '#4a90e2',
          secondary: '#7b68ee',
          accent: '#00d4aa',
          background: '#000033',
          particle: '#00ffff'
        };
      case 'ai-consciousness':
        return {
          primary: '#ff6b6b',
          secondary: '#4ecdc4',
          accent: '#45b7d1',
          background: '#1a1a2e',
          particle: '#ffa726'
        };
      default:
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          background: '#000011',
          particle: '#00ff88'
        };
    }
  };

  const colors = getColorScheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles: any[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed,
        vy: (Math.random() - 0.5) * 2 * animationSpeed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        type: Math.random() > 0.7 ? 'quantum' : 'normal',
        phase: Math.random() * Math.PI * 2
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum field lines
      if (enableQuantumEffects) {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        
        for (let i = 0; i < 20; i++) {
          ctx.beginPath();
          ctx.moveTo(
            Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.5 + canvas.width * 0.5,
            Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.5 + canvas.height * 0.5
          );
          ctx.lineTo(
            Math.sin(Date.now() * 0.002 + i) * canvas.width * 0.3 + canvas.width * 0.5,
            Math.cos(Date.now() * 0.002 + i) * canvas.height * 0.3 + canvas.height * 0.5
          );
          ctx.stroke();
        }
      }

      // Draw holographic grid
      if (enableHolographic) {
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.2;
        
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
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.phase += 0.02;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        if (particle.type === 'quantum') {
          // Quantum particles with wave function
          const wave = Math.sin(particle.phase) * 0.5 + 0.5;
          ctx.fillStyle = colors.particle;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * wave, 0, Math.PI * 2);
          ctx.fill();
          
          // Quantum entanglement lines
          if (index % 3 === 0) {
            ctx.strokeStyle = colors.accent;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(
              particles[(index + 1) % particles.length].x,
              particles[(index + 1) % particles.length].y
            );
            ctx.stroke();
          }
        } else {
          // Normal particles
          ctx.fillStyle = colors.primary;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw neon effects
      if (enableNeonEffects) {
        ctx.globalAlpha = 0.6;
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 20;
        
        // Floating neon orbs
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y = Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.3 + canvas.height * 0.5;
          
          ctx.fillStyle = colors.secondary;
          ctx.beginPath();
          ctx.arc(x, y, 30 + Math.sin(Date.now() * 0.002 + i) * 10, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;
      }

      // Draw space effects
      if (enableSpaceEffects) {
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = colors.accent;
        
        // Shooting stars
        for (let i = 0; i < 3; i++) {
          const x = (Date.now() * 0.1 + i * 100) % canvas.width;
          const y = (Date.now() * 0.05 + i * 50) % canvas.height;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 100, y - 50);
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Draw consciousness waves
      if (colorScheme === 'ai-consciousness') {
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 3; i++) {
          const centerX = canvas.width * 0.5;
          const centerY = canvas.height * 0.5;
          const radius = 100 + Math.sin(Date.now() * 0.001 + i) * 50;
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceEffects]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: colors.background }}
      />
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-green-400/30 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Quantum particle overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-15">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UltraFuturisticBackground2034;