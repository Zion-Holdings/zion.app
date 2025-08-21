import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'cyberpunk-advanced' | 'quantum-holographic' | 'neural-advanced' | 'fusion' | 'dimensional' | 'temporal';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'neural',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

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
      life: number;
      maxLife: number;
      color: string;
      type: string;
      connections: number[];
      phase: number;
      amplitude: number;
      frequency: number;
      quantumState: number;
      dimension: number;
      temporalPhase: number;
      fusionEnergy: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 600 : intensity === 'medium' ? 350 : 180;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 8 + 3,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
          connections: [],
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 60 + 30,
          frequency: Math.random() * 0.03 + 0.015,
          quantumState: Math.random(),
          dimension: Math.random() * 3,
          temporalPhase: Math.random() * Math.PI * 2,
          fusionEnergy: Math.random()
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'neural':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        case 'quantum':
          return `hsl(${280 + Math.sin(time * 0.02) * 80}, 80%, 70%)`;
        case 'holographic':
          return `hsl(${160 + Math.sin(time * 0.015) * 100}, 90%, 65%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(time * 0.03) * 60}, 100%, 60%)`;
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.025) * 120}, 85%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${120 + Math.sin(time * 0.018) * 140}, 95%, 70%)`;
        case 'cyberpunk-advanced':
          return `hsl(${15 + Math.sin(time * 0.035) * 90}, 100%, 65%)`;
        case 'quantum-holographic':
          return `hsl(${240 + Math.sin(time * 0.022) * 160}, 90%, 80%)`;
        case 'neural-advanced':
          return `hsl(${180 + Math.sin(time * 0.02) * 100}, 80%, 70%)`;
        case 'fusion':
          return `hsl(${45 + Math.sin(time * 0.04) * 120}, 100%, 65%)`;
        case 'dimensional':
          return `hsl(${320 + Math.sin(time * 0.03) * 180}, 90%, 75%)`;
        case 'temporal':
          return `hsl(${60 + Math.sin(time * 0.025) * 140}, 95%, 70%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    // Enhanced animation logic based on variant
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      const bgColor = getBackgroundColor(variant);
      gradient.addColorStop(0, bgColor.start);
      gradient.addColorStop(0.5, bgColor.middle);
      gradient.addColorStop(1, bgColor.end);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties based on variant
        updateParticleProperties(particle, variant, time);
        
        // Draw particle
        drawParticle(ctx, particle, variant);
        
        // Draw connections
        drawConnections(ctx, particles, index, variant);
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });

      // Add special effects based on variant
      addSpecialEffects(ctx, variant, time);

      time += 0.5;
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    const getBackgroundColor = (variant: string) => {
      switch (variant) {
        case 'neural':
          return { start: 'rgba(0, 0, 0, 0.1)', middle: 'rgba(0, 0, 0, 0.05)', end: 'rgba(0, 0, 0, 0.02)' };
        case 'quantum':
          return { start: 'rgba(30, 0, 50, 0.15)', middle: 'rgba(30, 0, 50, 0.08)', end: 'rgba(30, 0, 50, 0.03)' };
        case 'holographic':
          return { start: 'rgba(0, 30, 20, 0.12)', middle: 'rgba(0, 30, 20, 0.06)', end: 'rgba(0, 30, 20, 0.02)' };
        case 'cyberpunk':
          return { start: 'rgba(50, 0, 0, 0.18)', middle: 'rgba(50, 0, 0, 0.09)', end: 'rgba(50, 0, 0, 0.03)' };
        case 'fusion':
          return { start: 'rgba(50, 30, 0, 0.2)', middle: 'rgba(50, 30, 0, 0.1)', end: 'rgba(50, 30, 0, 0.04)' };
        case 'dimensional':
          return { start: 'rgba(30, 0, 30, 0.16)', middle: 'rgba(30, 0, 30, 0.08)', end: 'rgba(30, 0, 30, 0.03)' };
        case 'temporal':
          return { start: 'rgba(0, 30, 30, 0.14)', middle: 'rgba(0, 30, 30, 0.07)', end: 'rgba(0, 30, 30, 0.03)' };
        default:
          return { start: 'rgba(0, 0, 0, 0.1)', middle: 'rgba(0, 0, 0, 0.05)', end: 'rgba(0, 0, 0, 0.02)' };
      }
    };

    const updateParticleProperties = (particle: any, variant: string, time: number) => {
      switch (variant) {
        case 'fusion':
          particle.fusionEnergy = Math.sin(time * 0.01 + particle.phase) * 0.5 + 0.5;
          particle.size = particle.size * (0.8 + particle.fusionEnergy * 0.4);
          break;
        case 'dimensional':
          particle.dimension = (particle.dimension + 0.01) % 3;
          particle.x += Math.sin(time * 0.02 + particle.phase) * particle.dimension;
          particle.y += Math.cos(time * 0.02 + particle.phase) * particle.dimension;
          break;
        case 'temporal':
          particle.temporalPhase = (particle.temporalPhase + 0.02) % (Math.PI * 2);
          particle.life = particle.maxLife * (0.5 + Math.sin(particle.temporalPhase) * 0.5);
          break;
        case 'neural-advanced':
          particle.quantumState = (particle.quantumState + 0.01) % 1;
          particle.vx += Math.sin(time * 0.01 + particle.phase) * 0.1;
          particle.vy += Math.cos(time * 0.01 + particle.phase) * 0.1;
          break;
      }
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, variant: string) => {
      ctx.save();
      
      // Apply variant-specific effects
      switch (variant) {
        case 'fusion':
          ctx.globalAlpha = 0.8 + particle.fusionEnergy * 0.2;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 + particle.fusionEnergy * 30;
          break;
        case 'dimensional':
          ctx.globalAlpha = 0.6 + Math.sin(particle.dimension) * 0.4;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          break;
        case 'temporal':
          ctx.globalAlpha = 0.7 + Math.sin(particle.temporalPhase) * 0.3;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 25;
          break;
        default:
          ctx.globalAlpha = 0.8;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
      }

      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add inner glow
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.3)`;
      ctx.fill();

      ctx.restore();
    };

    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, variant: string) => {
      const maxDistance = variant.includes('advanced') ? 150 : 120;
      
      particles.forEach((otherParticle, otherIndex) => {
        if (currentIndex === otherIndex) return;
        
        const distance = Math.sqrt(
          Math.pow(particles[currentIndex].x - otherParticle.x, 2) +
          Math.pow(particles[currentIndex].y - otherParticle.y, 2)
        );
        
        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`;
          ctx.lineWidth = opacity * 2;
          ctx.beginPath();
          ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    };

    const addSpecialEffects = (ctx: CanvasRenderingContext2D, variant: string, time: number) => {
      switch (variant) {
        case 'fusion':
          // Fusion energy waves
          for (let i = 0; i < 3; i++) {
            const waveRadius = (time * 2 + i * 100) % (Math.max(canvas.width, canvas.height) * 0.8);
            ctx.strokeStyle = `rgba(255, 165, 0, ${0.3 - (waveRadius / (Math.max(canvas.width, canvas.height) * 0.8)) * 0.3})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
        case 'dimensional':
          // Dimensional portals
          const portalCount = 5;
          for (let i = 0; i < portalCount; i++) {
            const x = (canvas.width / (portalCount + 1)) * (i + 1);
            const y = canvas.height / 2;
            const size = 50 + Math.sin(time * 0.01 + i) * 20;
            ctx.strokeStyle = `rgba(138, 43, 226, ${0.6 + Math.sin(time * 0.02 + i) * 0.4})`;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
        case 'temporal':
          // Temporal distortion effects
          ctx.save();
          ctx.globalCompositeOperation = 'overlay';
          ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time * 0.01) * 0.05})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
          break;
      }
    };

    createParticles();
    animateParticles();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;