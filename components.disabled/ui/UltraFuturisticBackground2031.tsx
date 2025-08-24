import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2031Props {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticBackground2031({ children, className = '' }: UltraFuturisticBackground2031Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      type: 'quantum' | 'neon' | 'holographic' | 'neural';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number) => {
      const types = ['quantum', 'neon', 'holographic', 'neural'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      
      const colors = {
        quantum: ['#00FFFF', '#0080FF', '#0040FF', '#0000FF'],
        neon: ['#FF00FF', '#FF0080', '#FF0040', '#FF0000'],
        holographic: ['#80FF00', '#40FF00', '#00FF00', '#00FF40'],
        neural: ['#FF8000', '#FF4000', '#FF0000', '#FF4000']
      };
      
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 2,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        alpha: Math.random() * 0.9 + 0.1,
        life: Math.random() * 150 + 100,
        type
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };

    const createQuantumField = () => {
      const fieldSize = Math.min(canvas.width, canvas.height) * 0.3;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, fieldSize
      );
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 128, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const createNeuralNetwork = () => {
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 1;
      
      // Create neural network connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const createHolographicGrid = () => {
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(128, 255, 0, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create enhanced gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.9)'); // Slate-900
      gradient.addColorStop(0.2, 'rgba(88, 28, 135, 0.7)'); // Purple-800
      gradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.5)'); // Cyan-500
      gradient.addColorStop(0.6, 'rgba(16, 185, 129, 0.3)'); // Emerald-500
      gradient.addColorStop(0.8, 'rgba(139, 92, 246, 0.7)'); // Purple-500
      gradient.addColorStop(1, 'rgba(15, 23, 42, 1)'); // Slate-900
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create quantum field
      createQuantumField();
      
      // Create holographic grid
      createHolographicGrid();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Add quantum tunneling effect
        if (Math.random() < 0.001) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Wrap around edges with quantum uncertainty
        if (particle.x < 0) particle.x = canvas.width + Math.random() * 50;
        if (particle.x > canvas.width) particle.x = -Math.random() * 50;
        if (particle.y < 0) particle.y = canvas.height + Math.random() * 50;
        if (particle.y > canvas.height) particle.y = -Math.random() * 50;

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }

        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        
        // Create glow effect
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        
        switch (particle.type) {
          case 'quantum':
            glow.addColorStop(0, particle.color);
            glow.addColorStop(0.5, particle.color + '80');
            glow.addColorStop(1, 'transparent');
            break;
          case 'neon':
            glow.addColorStop(0, particle.color);
            glow.addColorStop(0.3, particle.color + 'A0');
            glow.addColorStop(1, 'transparent');
            break;
          case 'holographic':
            glow.addColorStop(0, particle.color);
            glow.addColorStop(0.7, particle.color + '60');
            glow.addColorStop(1, 'transparent');
            break;
          case 'neural':
            glow.addColorStop(0, particle.color);
            glow.addColorStop(0.4, particle.color + '90');
            glow.addColorStop(1, 'transparent');
            break;
        }
        
        ctx.fillStyle = glow;
        ctx.fillRect(
          particle.x - particle.size * 3,
          particle.y - particle.size * 3,
          particle.size * 6,
          particle.size * 6
        );
        
        // Draw core particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Create neural network connections
      createNeuralNetwork();

      // Add floating geometric shapes
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 2;
      
      // Rotating hexagon
      const hexSize = 80;
      const hexX = canvas.width * 0.2 + Math.sin(time) * 50;
      const hexY = canvas.height * 0.3 + Math.cos(time) * 30;
      
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + time;
        const x = hexX + Math.cos(angle) * hexSize;
        const y = hexY + Math.sin(angle) * hexSize;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Floating triangle
      const triSize = 60;
      const triX = canvas.width * 0.8 + Math.sin(time * 0.7) * 40;
      const triY = canvas.height * 0.7 + Math.cos(time * 0.7) * 40;
      
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3 + time * 0.5;
        const x = triX + Math.cos(angle) * triSize;
        const y = triY + Math.sin(angle) * triSize;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional Visual Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Quantum Field Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-emerald-500/5" />
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-emerald-400/30 rounded-full animate-pulse delay-2000" />
        </div>
        
        {/* Holographic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}