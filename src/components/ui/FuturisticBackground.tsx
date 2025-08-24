import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  variant?: 'default' | 'cyberpunk' | 'neon' | 'particle' | 'grid';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function FuturisticBackground({ 
  variant = 'default', 
  intensity = 'medium',
  className = '' 
}: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
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

    // Animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.5 + 0.5
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid pattern
      if (variant === 'grid' || variant === 'default') {
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time) * 0.05})`;
        ctx.lineWidth = 1;
        
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

      // Draw particles
      if (variant === 'particle' || variant === 'default') {
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
          ctx.save();
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();

          // Draw connections between nearby particles
          particles.slice(index + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          });
        });
      }

      // Draw neon effects
      if (variant === 'neon' || variant === 'cyberpunk') {
        // Neon lines
        const neonLines = [
          { x1: 0, y1: canvas.height * 0.3, x2: canvas.width, y2: canvas.height * 0.3 },
          { x1: 0, y1: canvas.height * 0.7, x2: canvas.width, y2: canvas.height * 0.7 },
          { x1: canvas.width * 0.3, y1: 0, x2: canvas.width * 0.3, y2: canvas.height },
          { x1: canvas.width * 0.7, y1: 0, x2: canvas.width * 0.7, y2: canvas.height }
        ];

        neonLines.forEach((line, index) => {
          const hue = (time * 50 + index * 90) % 360;
          const color = `hsl(${hue}, 100%, 60%)`;
          
          // Main neon line
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          ctx.shadowColor = color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.stroke();

          // Glow effect
          ctx.strokeStyle = `rgba(${hue}, 100%, 60%, 0.3)`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.stroke();
        });
      }

      // Draw cyberpunk elements
      if (variant === 'cyberpunk') {
        // Scanning lines
        const scanY = (canvas.height * 0.5) + Math.sin(time * 2) * 100;
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(canvas.width, scanY);
        ctx.stroke();

        // Digital rain effect
        const rainChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        ctx.fillStyle = 'rgba(0, 255, 0, 0.7)';
        ctx.font = '14px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (i * canvas.width / 20) + Math.sin(time + i) * 20;
          const y = (time * 100 + i * 30) % canvas.height;
          const char = rainChars[Math.floor(Math.random() * rainChars.length)];
          ctx.fillText(char, x, y);
        }
      }

      // Draw floating orbs
      if (variant === 'default') {
        const orbCount = 3;
        for (let i = 0; i < orbCount; i++) {
          const x = canvas.width * 0.5 + Math.cos(time + i * Math.PI * 2 / orbCount) * 200;
          const y = canvas.height * 0.5 + Math.sin(time + i * Math.PI * 2 / orbCount) * 200;
          const size = 50 + Math.sin(time * 2 + i) * 20;
          
          // Orb glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: variant === 'cyberpunk' 
            ? 'linear-gradient(45deg, #000000, #1a0033, #000000)'
            : variant === 'neon'
            ? 'linear-gradient(135deg, #000000, #0a0a0a, #000000)'
            : 'linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)'
        }}
      />
      
      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: variant === 'cyberpunk'
            ? 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
            : variant === 'neon'
            ? 'radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(0, 150, 255, 0.1) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}

// Preset variants for easy use
export const CyberpunkBackground = () => <FuturisticBackground variant="cyberpunk" intensity="high" />;
export const NeonBackground = () => <FuturisticBackground variant="neon" intensity="medium" />;
export const ParticleBackground = () => <FuturisticBackground variant="particle" intensity="high" />;
export const GridBackground = () => <FuturisticBackground variant="grid" intensity="low" />;