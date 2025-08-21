import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-rainbow' | 'quantum-holographic';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground({
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = false,
  enableQuantumEffects = false,
  children
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const holographicRef = useRef<HTMLDivElement>(null);

  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          holographic: 'rgba(255, 182, 193, 0.5)'
        };
      case 'neon-cyber':
        return {
          primary: 'rgba(0, 255, 0, 0.8)',
          secondary: 'rgba(255, 0, 255, 0.6)',
          accent: 'rgba(0, 191, 255, 0.7)',
          quantum: 'rgba(255, 215, 0, 0.9)',
          holographic: 'rgba(144, 238, 144, 0.5)'
        };
      case 'holographic':
        return {
          primary: 'rgba(255, 182, 193, 0.8)',
          secondary: 'rgba(173, 216, 230, 0.6)',
          accent: 'rgba(144, 238, 144, 0.7)',
          quantum: 'rgba(221, 160, 221, 0.9)',
          holographic: 'rgba(255, 218, 185, 0.5)'
        };
      case 'quantum-rainbow':
        return {
          primary: 'rgba(255, 0, 0, 0.8)',
          secondary: 'rgba(0, 255, 0, 0.6)',
          accent: 'rgba(0, 0, 255, 0.7)',
          quantum: 'rgba(255, 255, 0, 0.9)',
          holographic: 'rgba(255, 0, 255, 0.5)'
        };
      case 'quantum-holographic':
        return {
          primary: 'rgba(0, 255, 255, 0.9)',
          secondary: 'rgba(138, 43, 226, 0.7)',
          accent: 'rgba(255, 20, 147, 0.8)',
          quantum: 'rgba(0, 255, 127, 1.0)',
          holographic: 'rgba(255, 182, 193, 0.6)'
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.8)',
          secondary: 'rgba(138, 43, 226, 0.6)',
          accent: 'rgba(255, 20, 147, 0.7)',
          quantum: 'rgba(0, 255, 127, 0.9)',
          holographic: 'rgba(255, 182, 193, 0.5)'
        };
    }
  };

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': return 0.5;
      case 'medium': return 1.0;
      case 'high': return 1.5;
      case 'extreme': return 2.5;
      default: return 1.0;
    }
  };

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
    const colors = getColorScheme();
    const intensityMultiplier = getIntensityMultiplier();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'standard';
      connectionDistance: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'standard';
        this.connectionDistance = 150 * intensityMultiplier;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() > 0.995) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic flicker
        if (this.type === 'holographic') {
          this.size *= 0.95 + Math.random() * 0.1;
        }

        // Reset particle if it dies
        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = this.maxLife;
          this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life / this.maxLife;
        
        if (this.type === 'quantum') {
          // Quantum particle effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum aura
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else if (this.type === 'holographic') {
          // Holographic particle effect
          ctx.shadowColor = colors.holographic;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.holographic;
          ctx.fill();
        } else {
          // Standard particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particlesRef.current[i].connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Add quantum wave effects
      if (enableQuantumEffects) {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = colors.quantum;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.4;

        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          const waveY = canvas.height / 2 + Math.sin(time + i) * 100;
          ctx.moveTo(0, waveY);
          ctx.lineTo(canvas.width, waveY);
          ctx.stroke();
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
  }, [intensity, colorScheme, particleCount, animationSpeed, enableQuantumEffects]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Quantum Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Holographic Overlay */}
      {enableHolographic && (
        <div
          ref={holographicRef}
          className="fixed inset-0 pointer-events-none z-10"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255, 182, 193, 0.1) 0%, 
              rgba(173, 216, 230, 0.1) 25%, 
              rgba(144, 238, 144, 0.1) 50%, 
              rgba(221, 160, 221, 0.1) 75%, 
              rgba(255, 182, 193, 0.1) 100%)`,
            animation: 'holographic-shift 8s ease-in-out infinite'
          }}
        />
      )}

      {/* Quantum Energy Grid */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-5">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 49%, rgba(0, 255, 255, 0.3) 50%, transparent 51%),
                linear-gradient(0deg, transparent 49%, rgba(0, 255, 255, 0.3) 50%, transparent 51%)
              `,
              backgroundSize: '50px 50px',
              animation: 'quantum-grid 4s linear infinite'
            }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes holographic-shift {
          0%, 100% { opacity: 0.1; transform: translateX(0px) translateY(0px); }
          25% { opacity: 0.2; transform: translateX(10px) translateY(-10px); }
          50% { opacity: 0.15; transform: translateX(-5px) translateY(5px); }
          75% { opacity: 0.25; transform: translateX(15px) translateY(15px); }
        }
        
        @keyframes quantum-grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes quantum-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes holographic-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}