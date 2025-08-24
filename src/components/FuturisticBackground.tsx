import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function FuturisticBackground({ className = '', intensity = 'medium' }: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

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

    // Matrix rain effect
    const matrixRain = () => {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#22ddd2';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 50);
      return () => clearInterval(interval);
    };

    const cleanup = matrixRain();

    return () => {
      cleanup();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.className = 'absolute rounded-full bg-zion-cyan opacity-20';
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
      `;

      particlesContainer.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles based on intensity
    const particleCount = intensity === 'low' ? 10 : intensity === 'medium' ? 20 : 35;
    const interval = setInterval(() => {
      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0"
        style={{ zIndex: 2 }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(140, 21, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 221, 210, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(140, 21, 233, 0.05) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
}