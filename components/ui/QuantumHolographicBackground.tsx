import React, { useEffect, useRef, useState } from 'react';

interface QuantumHolographicBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic' | 'neural-quantum' | 'cyberpunk-holographic' | 'space-time' | 'quantum-entanglement';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  className?: string;
}

const QuantumHolographicBackground: React.FC<QuantumHolographicBackgroundProps> = ({
  children,
  variant = 'quantum-holographic',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (typeof window === 'undefined') return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      quantumState: number;
      holographicLayer: number;
      neuralConnection: number;
      cyberpunkGlow: number;
      quantumEntanglement: number;
      holographicDepth: number;
      neuralSynapse: number;
      spaceTimeWarp: number;
      dimensionalShift: number;
      quantumField: number;
      holographicMatrix: number;
    }> = [];

    const createParticles = () => {
      const particleCount = intensity === 'extreme' ? 1200 : intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.5) * 12,
          size: Math.random() * 16 + 6,
          life: Math.random() * 200,
          maxLife: 200,
          color: getParticleColor(variant, time),
          type: variant,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.4,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.2 + 0.1,
          quantumState: Math.random() * Math.PI * 2,
          holographicLayer: Math.random() * 8,
          neuralConnection: Math.random() * 10,
          cyberpunkGlow: Math.random() * Math.PI * 2,
          quantumEntanglement: Math.random() * Math.PI * 2,
          holographicDepth: Math.random() * 10,
          neuralSynapse: Math.random() * Math.PI * 2,
          spaceTimeWarp: Math.random() * Math.PI * 2,
          dimensionalShift: Math.random() * Math.PI * 2,
          quantumField: Math.random() * Math.PI * 2,
          holographicMatrix: Math.random() * Math.PI * 2
        });
      }
    };

    const getParticleColor = (variant: string, time: number): string => {
      switch (variant) {
        case 'quantum-holographic':
          return `hsl(${280 + Math.sin(time * 0.02) * 120}, 95%, 80%)`;
        case 'neural-quantum':
          return `hsl(${200 + Math.sin(time * 0.015) * 80}, 90%, 75%)`;
        case 'cyberpunk-holographic':
          return `hsl(${160 + Math.sin(time * 0.025) * 140}, 100%, 70%)`;
        case 'space-time':
          return `hsl(${320 + Math.sin(time * 0.03) * 160}, 85%, 85%)`;
        case 'quantum-entanglement':
          return `hsl(${240 + Math.sin(time * 0.018) * 100}, 95%, 80%)`;
        default:
          return `hsl(${280 + Math.sin(time * 0.02) * 120}, 95%, 80%)`;
      }
    };

    const animate = () => {
      time += 0.016;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, 300
      );
      gradient.addColorStop(0, `rgba(100, 200, 255, 0.1)`);
      gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = {
            ...particle,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            life: particle.maxLife
          };
        }

        // Quantum effects
        particle.quantumState += 0.1;
        particle.holographicLayer += 0.05;
        particle.neuralConnection += 0.08;
        particle.cyberpunkGlow += 0.12;
        particle.quantumEntanglement += 0.06;
        particle.holographicDepth += 0.04;
        particle.neuralSynapse += 0.09;
        particle.spaceTimeWarp += 0.07;
        particle.dimensionalShift += 0.05;
        particle.quantumField += 0.11;
        particle.holographicMatrix += 0.08;

        // Position updates with quantum fluctuations
        particle.x += particle.vx + Math.sin(particle.quantumState) * 2;
        particle.y += particle.vy + Math.cos(particle.holographicLayer) * 2;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;

        // Bounce off edges with quantum tunneling effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          if (Math.random() < 0.1) { // 10% chance of quantum tunneling
            particle.x = particle.x < 0 ? canvas.width : 0;
          }
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          if (Math.random() < 0.1) {
            particle.y = particle.y < 0 ? canvas.height : 0;
          }
        }

        // Draw particle with advanced effects
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Holographic layering effect
        const layers = Math.floor(particle.holographicLayer) % 4;
        for (let i = 0; i < layers; i++) {
          const alpha = (1 - i * 0.2) * (particle.life / particle.maxLife);
          const size = particle.size * (1 + i * 0.3);
          
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = particle.color;
          
          // Different shapes based on variant
          if (variant === 'quantum-holographic') {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fill();
          } else if (variant === 'neural-quantum') {
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(size * 0.5, size * 0.5);
            ctx.lineTo(-size * 0.5, size * 0.5);
            ctx.closePath();
            ctx.fill();
          } else if (variant === 'cyberpunk-holographic') {
            ctx.fillRect(-size * 0.5, -size * 0.5, size, size);
          } else if (variant === 'space-time') {
            ctx.beginPath();
            ctx.ellipse(0, 0, size, size * 0.3, particle.spaceTimeWarp, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Main particle
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fillStyle = particle.color;
        
        if (variant === 'quantum-holographic') {
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Quantum entanglement lines
          if (Math.random() < 0.1) {
            const targetParticle = particles[Math.floor(Math.random() * particles.length)];
            if (targetParticle && targetParticle !== particle) {
              ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * (particle.life / particle.maxLife)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(targetParticle.x - particle.x, targetParticle.y - particle.y);
              ctx.stroke();
            }
          }
        } else if (variant === 'neural-quantum') {
          // Neural network connections
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size * 0.5, particle.size * 0.5);
          ctx.lineTo(-particle.size * 0.5, particle.size * 0.5);
          ctx.closePath();
          ctx.fill();
          
          // Neural synapses
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * (particle.life / particle.maxLife)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
          ctx.stroke();
        } else if (variant === 'cyberpunk-holographic') {
          ctx.fillRect(-particle.size * 0.5, -particle.size * 0.5, particle.size, particle.size);
          
          // Cyberpunk grid effect
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.6 * (particle.life / particle.maxLife)})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(-particle.size * 0.5, -particle.size * 0.5, particle.size, particle.size);
        } else if (variant === 'space-time') {
          ctx.beginPath();
          ctx.ellipse(0, 0, particle.size, particle.size * 0.3, particle.spaceTimeWarp, 0, Math.PI * 2);
          ctx.fill();
          
          // Space-time distortion
          ctx.strokeStyle = `rgba(255, 100, 255, ${0.4 * (particle.life / particle.maxLife)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(0, 0, particle.size * 1.2, particle.size * 0.4, particle.spaceTimeWarp, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Glow effect
        const glowSize = particle.size * 2;
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
        glowGradient.addColorStop(0, `${particle.color}40`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.globalAlpha = 0.3 * (particle.life / particle.maxLife);
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw quantum field lines
      if (variant === 'quantum-entanglement') {
        ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 20; i++) {
          const x1 = Math.sin(time * 0.01 + i) * canvas.width * 0.5 + canvas.width * 0.5;
          const y1 = Math.cos(time * 0.015 + i) * canvas.height * 0.5 + canvas.height * 0.5;
          const x2 = Math.sin(time * 0.02 + i * 2) * canvas.width * 0.5 + canvas.width * 0.5;
          const y2 = Math.cos(time * 0.025 + i * 2) * canvas.height * 0.5 + canvas.height * 0.5;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicBackground;