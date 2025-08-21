import React, { useEffect, useRef, useState } from 'react';

interface QuantumHolographicBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic' | 'neural-quantum' | 'cyberpunk-holographic' | 'quantum-entanglement' | 'holographic-matrix';
  intensity?: 'low' | 'medium' | 'high';
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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

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
      holographicMatrix: number;
      quantumField: number;
      neuralNetwork: number;
      holographicProjection: number;
    }> = [];

    const createParticles = () => {
      const particleCount = intensity === 'high' ? 1200 : intensity === 'medium' ? 800 : 400;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          size: Math.random() * 15 + 3,
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
          holographicMatrix: Math.random() * Math.PI * 2,
          quantumField: Math.random() * Math.PI * 2,
          neuralNetwork: Math.random() * Math.PI * 2,
          holographicProjection: Math.random() * Math.PI * 2
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
        case 'quantum-entanglement':
          return `hsl(${320 + Math.sin(time * 0.03) * 160}, 98%, 85%)`;
        case 'holographic-matrix':
          return `hsl(${120 + Math.sin(time * 0.018) * 100}, 92%, 78%)`;
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
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(128, 0, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
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

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        particle.quantumState += 0.02;
        particle.holographicLayer += 0.01;
        particle.neuralConnection += 0.015;
        particle.cyberpunkGlow += 0.025;
        particle.quantumEntanglement += 0.03;
        particle.holographicDepth += 0.018;
        particle.neuralSynapse += 0.022;
        particle.holographicMatrix += 0.028;
        particle.quantumField += 0.035;
        particle.neuralNetwork += 0.032;
        particle.holographicProjection += 0.038;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle with advanced effects
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Quantum entanglement effect
        const entanglement = Math.sin(particle.quantumEntanglement) * 0.5 + 0.5;
        const holographicEffect = Math.sin(particle.holographicProjection) * 0.3 + 0.7;
        const neuralEffect = Math.sin(particle.neuralNetwork) * 0.4 + 0.6;

        // Multi-layer particle rendering
        for (let layer = 0; layer < 3; layer++) {
          const layerOpacity = (1 - layer * 0.3) * (particle.life / particle.maxLife);
          const layerSize = particle.size * (1 + layer * 0.2);
          
          ctx.globalAlpha = layerOpacity * 0.6;
          ctx.fillStyle = particle.color;
          
          // Holographic matrix effect
          if (variant === 'holographic-matrix') {
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.strokeRect(-layerSize/2, -layerSize/2, layerSize, layerSize);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, layerSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Neural connections
        if (variant === 'neural-quantum') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.globalAlpha = (100 - distance) / 100 * 0.3 * (particle.life / particle.maxLife);
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(otherParticle.x - particle.x, otherParticle.y - particle.y);
                ctx.stroke();
              }
            }
          });
        }

        // Cyberpunk glow effect
        if (variant === 'cyberpunk-holographic') {
          const glow = Math.sin(particle.cyberpunkGlow) * 0.5 + 0.5;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 * glow;
          ctx.globalAlpha = glow * 0.8;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw quantum field lines
      if (variant === 'quantum-entanglement') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
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