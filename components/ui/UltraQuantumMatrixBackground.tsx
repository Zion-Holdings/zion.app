import React, { useEffect, useRef } from 'react';

interface UltraQuantumMatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'neon' | 'cosmic' | 'cyber';
  particleCount?: number;
  animationSpeed?: number;
  children: React.ReactNode;
}

export default function UltraQuantumMatrixBackground({
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 150,
  animationSpeed = 1.0,
  children
}: UltraQuantumMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Color schemes
  const getColorScheme = () => {
    switch (colorScheme) {
      case 'neon':
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          background: '#0a0a0a'
        };
      case 'cosmic':
        return {
          primary: '#4f46e5',
          secondary: '#7c3aed',
          accent: '#ec4899',
          background: '#0f0f23'
        };
      case 'cyber':
        return {
          primary: '#10b981',
          secondary: '#f59e0b',
          accent: '#ef4444',
          background: '#111827'
        };
      default: // quantum
        return {
          primary: '#06b6d4',
          secondary: '#8b5cf6',
          accent: '#ec4899',
          background: '#0f172a'
        };
    }
  };

  const colors = getColorScheme();

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

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'matrix' | 'quantum' | 'energy';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 0.5 * animationSpeed;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.color = [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)];
        this.type = ['matrix', 'quantum', 'energy'][Math.floor(Math.random() * 3)] as any;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade in/out
        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(1, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        switch (this.type) {
          case 'matrix': {
            // Matrix-style characters
            ctx.fillStyle = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, this.x, this.y);
            break;
          }

          case 'quantum': {
            // Quantum wave function
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size * 0.5;
            ctx.beginPath();
            const waveLength = 20;
            const amplitude = this.size * 2;
            for (let i = 0; i < waveLength; i++) {
              const x = this.x + i * 2;
              const y = this.y + Math.sin(i * 0.3 + Date.now() * 0.001) * amplitude;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.stroke();
            break;
          }

          case 'energy':
            // Energy particles
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Glow effect
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.size * 3;
            ctx.fill();
            ctx.shadowBlur = 0;
            break;

          default: {
            break;
          }
        }

        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const actualParticleCount = Math.floor(particleCount * (intensity === 'low' ? 0.5 : intensity === 'high' ? 1.5 : 1));

    for (let i = 0; i < actualParticleCount; i++) {
      particles.push(new Particle());
    }

    // Connection lines
    const drawConnections = () => {
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = 1 - (distance / 100);
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Grid effect
    const drawGrid = () => {
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.1;

      const gridSize = 50;
      const offset = (Date.now() * 0.01) % gridSize;

      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    // Quantum field effect
    const drawQuantumField = () => {
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;

      const time = Date.now() * 0.001;
      const fieldStrength = Math.sin(time * 0.5) * 0.5 + 0.5;

      for (let i = 0; i < 10; i++) {
        const x = (canvas.width / 10) * i;
        const y = canvas.height / 2 + Math.sin(time + i) * 50 * fieldStrength;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw effects
      drawGrid();
      drawQuantumField();
      drawConnections();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, colors]);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 80%, ${colors.primary}10 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.secondary}10 0%, transparent 50%), radial-gradient(circle at 40% 40%, ${colors.accent}10 0%, transparent 50%)`,
          zIndex: -1
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}