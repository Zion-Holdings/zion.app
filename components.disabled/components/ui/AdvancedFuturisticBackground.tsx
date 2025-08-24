import React, { useEffect, useRef, useCallback } from 'react';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic' | 'neural-cyberpunk' | 'quantum-neural' | 'holographic-cyberpunk' | 'quantum-advanced' | 'neural-advanced' | 'cyberpunk-advanced';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  className?: string;
  interactive?: boolean;
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic',
  intensity = 'medium',
  className = '',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const touchRef = useRef({ x: 0, y: 0 });

  const getParticleCount = useCallback(() => {
    switch (intensity) {
      case 'extreme': return 800;
      case 'high': return 600;
      case 'medium': return 400;
      case 'low': return 200;
      default: return 400;
    }
  }, [intensity]);

  const getParticleColor = useCallback((variant: string, time: number, particle: any): string => {
    const baseHue = time * 0.01;
    const saturation = 80 + Math.sin(time * 0.02) * 20;
    const lightness = 60 + Math.sin(time * 0.03) * 20;

    switch (variant) {
      case 'quantum-holographic':
        return `hsl(${280 + Math.sin(baseHue) * 100 + particle.quantumState * 50}, ${saturation}%, ${lightness}%)`;
      case 'neural-cyberpunk':
        return `hsl(${200 + Math.sin(baseHue) * 60 + particle.neuralConnection * 30}, ${saturation}%, ${lightness}%)`;
      case 'quantum-neural':
        return `hsl(${320 + Math.sin(baseHue) * 80 + particle.quantumEntanglement * 40}, ${saturation}%, ${lightness}%)`;
      case 'holographic-cyberpunk':
        return `hsl(${160 + Math.sin(baseHue) * 120 + particle.holographicDepth * 25}, ${saturation}%, ${lightness}%)`;
      case 'quantum-advanced':
        return `hsl(${300 + Math.sin(baseHue) * 120 + particle.quantumState * 60}, ${saturation}%, ${lightness}%)`;
      case 'neural-advanced':
        return `hsl(${180 + Math.sin(baseHue) * 100 + particle.neuralSynapse * 35}, ${saturation}%, ${lightness}%)`;
      case 'cyberpunk-advanced':
        return `hsl(${0 + Math.sin(baseHue) * 80 + particle.cyberpunkGlow * 45}, ${saturation}%, ${lightness}%)`;
      default:
        return `hsl(${240 + Math.sin(baseHue) * 60}, ${saturation}%, ${lightness}%)`;
    }
  }, []);

  const createParticle = useCallback((canvas: HTMLCanvasElement, variant: string) => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: Math.random() * 12 + 4,
      life: Math.random() * 150,
      maxLife: 150,
      color: '',
      type: variant,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.15 + 0.08,
      quantumState: Math.random() * Math.PI * 2,
      holographicLayer: Math.random() * 6,
      neuralConnection: Math.random() * 8,
      cyberpunkGlow: Math.random() * Math.PI * 2,
      quantumEntanglement: Math.random() * Math.PI * 2,
      holographicDepth: Math.random() * 7,
      neuralSynapse: Math.random() * Math.PI * 2,
      energy: Math.random() * 100 + 50,
      resonance: Math.random() * Math.PI * 2,
      field: Math.random() * 10,
      wave: Math.random() * Math.PI * 2
    };
  }, []);

  const updateParticle = useCallback((particle: any, canvas: HTMLCanvasElement, time: number, variant: string) => {
    // Update position with quantum fluctuations
    particle.x += particle.vx + Math.sin(time * 0.01 + particle.quantumState) * 2;
    particle.y += particle.vy + Math.cos(time * 0.01 + particle.quantumEntanglement) * 2;

    // Quantum tunneling effect
    if (Math.random() < 0.001) {
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
    }

    // Boundary wrapping with quantum effects
    if (particle.x < 0) particle.x = canvas.width + Math.random() * 100;
    if (particle.x > canvas.width) particle.x = -100;
    if (particle.y < 0) particle.y = canvas.height + Math.random() * 100;
    if (particle.y > canvas.height) particle.y = -100;

    // Update quantum properties
    particle.quantumState += 0.02;
    particle.quantumEntanglement += 0.015;
    particle.holographicDepth += 0.01;
    particle.neuralSynapse += 0.025;
    particle.cyberpunkGlow += 0.03;
    particle.resonance += 0.018;
    particle.wave += 0.012;

    // Life cycle with quantum revival
    particle.life--;
    if (particle.life <= 0 && Math.random() < 0.1) {
      particle.life = particle.maxLife;
      particle.energy = Math.random() * 100 + 50;
    }

    // Update color
    particle.color = getParticleColor(variant, time, particle);
  }, [getParticleColor]);

  const renderParticle = useCallback((ctx: CanvasRenderingContext2D, particle: any, time: number) => {
    ctx.save();
    
    // Apply quantum effects
    const quantumEffect = Math.sin(time * 0.01 + particle.quantumState) * 0.3 + 0.7;
    const holographicEffect = Math.sin(time * 0.015 + particle.holographicDepth) * 0.4 + 0.6;
    const neuralEffect = Math.sin(time * 0.02 + particle.neuralSynapse) * 0.3 + 0.7;
    
    ctx.globalAlpha = (particle.life / particle.maxLife) * quantumEffect * holographicEffect * neuralEffect;
    
    // Create gradient for particle
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 2
    );
    
    gradient.addColorStop(0, particle.color);
    gradient.addColorStop(0.5, particle.color + '80');
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    
    // Draw particle with quantum effects
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * quantumEffect, 0, Math.PI * 2);
    ctx.fill();
    
    // Add holographic layers
    if (particle.holographicLayer > 3) {
      ctx.strokeStyle = particle.color + '40';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Add neural connections
    if (particle.neuralConnection > 4) {
      ctx.strokeStyle = particle.color + '30';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(
        particle.x + Math.cos(particle.neuralSynapse) * 20,
        particle.y + Math.sin(particle.neuralSynapse) * 20
      );
      ctx.stroke();
    }
    
    ctx.restore();
  }, []);

  const renderQuantumField = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number, variant: string) => {
    const fieldIntensity = intensity === 'extreme' ? 0.8 : intensity === 'high' ? 0.6 : intensity === 'medium' ? 0.4 : 0.2;
    
    // Create quantum field effect
    for (let i = 0; i < 50; i++) {
      const x = (i / 50) * canvas.width;
      const y = canvas.height / 2 + Math.sin(time * 0.01 + i * 0.1) * 100;
      
      const alpha = Math.sin(time * 0.02 + i * 0.1) * fieldIntensity * 0.3;
      ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }, [intensity]);

  const renderNeuralNetwork = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    const nodes = 20;
    const connections: Array<{ x: number; y: number; connections: number[] }> = [];
    
    // Create neural nodes
    for (let i = 0; i < nodes; i++) {
      connections.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: []
      });
    }
    
    // Create connections
    for (let i = 0; i < nodes; i++) {
      for (let j = i + 1; j < nodes; j++) {
        if (Math.random() < 0.3) {
          connections[i].connections.push(j);
        }
      }
    }
    
    // Render neural network
    ctx.strokeStyle = `rgba(100, 255, 200, ${0.1 + Math.sin(time * 0.01) * 0.1})`;
    ctx.lineWidth = 1;
    
    connections.forEach((node, i) => {
      node.connections.forEach(j => {
        if (j < connections.length) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connections[j].x, connections[j].y);
          ctx.stroke();
        }
      });
    });
  }, []);

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

    const particles: any[] = [];
    let time = 0;

    // Create particles
    const particleCount = getParticleCount();
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas, variant));
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        touchRef.current.x = e.touches[0].clientX;
        touchRef.current.y = e.touches[0].clientY;
      }
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach(particle => {
        updateParticle(particle, canvas, time, variant);
        renderParticle(ctx, particle, time);
      });

      // Render quantum field
      renderQuantumField(ctx, canvas, time, variant);
      
      // Render neural network
      renderNeuralNetwork(ctx, canvas, time);

      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, interactive, getParticleCount, createParticle, updateParticle, renderParticle, renderQuantumField, renderNeuralNetwork]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AdvancedFuturisticBackground;