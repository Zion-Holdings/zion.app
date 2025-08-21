import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
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

    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

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
      aiIntelligence: number;
      quantumCoherence: number;
      holographicProjection: number;
      neuralPlasticity: number;
      cyberpunkMatrix: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 1200 : intensity === 'medium' ? 800 : 400;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.5) * 12,
          size: Math.random() * 16 + 6,
          life: Math.random() * 200,
          maxLife: 200,
          color: getParticleColor(variant),
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
          aiIntelligence: Math.random() * Math.PI * 2,
          quantumCoherence: Math.random() * Math.PI * 2,
          holographicProjection: Math.random() * Math.PI * 2,
          neuralPlasticity: Math.random() * Math.PI * 2,
          cyberpunkMatrix: Math.random() * Math.PI * 2
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'neural':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 80%, 70%)`;
        case 'quantum':
          return `hsl(${280 + Math.sin(time * 0.02) * 100}, 90%, 80%)`;
        case 'holographic':
          return `hsl(${160 + Math.sin(time * 0.015) * 120}, 95%, 75%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(time * 0.03) * 60}, 100%, 70%)`;
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.025) * 150}, 95%, 85%)`;
        case 'holographic-advanced':
          return `hsl(${120 + Math.sin(time * 0.02) * 180}, 100%, 80%)`;
        case 'quantum-holographic':
          return `hsl(${240 + Math.sin(time * 0.018) * 200}, 90%, 75%)`;
        case 'neural-quantum':
          return `hsl(${180 + Math.sin(time * 0.022) * 140}, 85%, 70%)`;
        case 'quantum-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.028) * 160}, 100%, 80%)`;
        case 'holographic-neural':
          return `hsl(${140 + Math.sin(time * 0.016) * 160}, 95%, 75%)`;
        case 'quantum-holographic-advanced':
          return `hsl(${260 + Math.sin(time * 0.024) * 220}, 95%, 80%)`;
        case 'quantum-matrix':
          return `hsl(${340 + Math.sin(time * 0.03) * 180}, 100%, 85%)`;
        case 'neural-cyberpunk':
          return `hsl(${220 + Math.sin(time * 0.026) * 120}, 90%, 75%)`;
        case 'holographic-quantum':
          return `hsl(${100 + Math.sin(time * 0.019) * 200}, 100%, 80%)`;
        case 'quantum-neural-advanced':
          return `hsl(${200 + Math.sin(time * 0.023) * 180}, 90%, 75%)`;
        case 'cyberpunk-holographic':
          return `hsl(${60 + Math.sin(time * 0.021) * 140}, 95%, 80%)`;
        case 'quantum-space':
          return `hsl(${280 + Math.sin(time * 0.027) * 240}, 95%, 85%)`;
        case 'ai-futuristic':
          return `hsl(${160 + Math.sin(time * 0.02) * 160}, 100%, 80%)`;
        case 'quantum-entanglement':
          return `hsl(${300 + Math.sin(time * 0.025) * 200}, 95%, 80%)`;
        case 'holographic-matrix':
          return `hsl(${80 + Math.sin(time * 0.018) * 180}, 100%, 75%)`;
        case 'neural-quantum-cyberpunk':
          return `hsl(${240 + Math.sin(time * 0.029) * 220}, 95%, 80%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 80%, 70%)`;
      }
    };

    // Enhanced particle rendering with advanced effects
    const renderParticle = (particle: any) => {
      const alpha = particle.life / particle.maxLife;
      const size = particle.size * (0.5 + 0.5 * Math.sin(particle.pulse));
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Advanced rendering based on variant
      switch (variant) {
        case 'quantum-advanced':
        case 'quantum-entanglement':
          renderQuantumParticle(ctx, particle, size);
          break;
        case 'holographic-advanced':
        case 'holographic-matrix':
          renderHolographicParticle(ctx, particle, size);
          break;
        case 'neural-quantum-cyberpunk':
          renderNeuralQuantumCyberpunkParticle(ctx, particle, size);
          break;
        case 'ai-futuristic':
          renderAIFuturisticParticle(ctx, particle, size);
          break;
        default:
          renderStandardParticle(ctx, particle, size);
      }

      ctx.restore();
    };

    // Quantum particle rendering with entanglement effects
    const renderQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any, size: number) => {
      const quantumPhase = Math.sin(particle.quantumState + time * 0.01);
      const entanglement = Math.sin(particle.quantumEntanglement + time * 0.015);
      const alpha = particle.life / particle.maxLife;
      
      // Quantum wave function
      ctx.beginPath();
      ctx.arc(0, 0, size * (1 + 0.3 * quantumPhase), 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Quantum entanglement lines
      if (Math.random() > 0.7) {
        ctx.strokeStyle = `hsla(${280 + quantumPhase * 60}, 90%, 70%, ${0.3 * alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(entanglement) * size * 3,
          Math.sin(entanglement) * size * 3
        );
        ctx.stroke();
      }
    };

    // Holographic particle rendering with depth and projection
    const renderHolographicParticle = (ctx: CanvasRenderingContext2D, particle: any, size: number) => {
      const holographicPhase = Math.sin(particle.holographicProjection + time * 0.012);
      const depth = Math.sin(particle.holographicDepth + time * 0.008);
      const alpha = particle.life / particle.maxLife;
      
      // Multi-layer holographic effect
      for (let i = 0; i < 3; i++) {
        const layerSize = size * (1 + i * 0.2 + depth * 0.3);
        const layerAlpha = alpha * (0.3 + i * 0.2);
        
        ctx.globalAlpha = layerAlpha;
        ctx.beginPath();
        ctx.arc(0, 0, layerSize, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${160 + holographicPhase * 120}, 95%, 75%, ${layerAlpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    };

    // Neural-Quantum-Cyberpunk hybrid particle
    const renderNeuralQuantumCyberpunkParticle = (ctx: CanvasRenderingContext2D, particle: any, size: number) => {
      const neuralPhase = Math.sin(particle.neuralPlasticity + time * 0.014);
      const cyberpunkPhase = Math.sin(particle.cyberpunkMatrix + time * 0.032);
      const alpha = particle.life / particle.maxLife;
      
      // Neural network connections
      ctx.strokeStyle = `hsla(${200 + neuralPhase * 60}, 80%, 70%, ${0.4 * alpha})`;
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + neuralPhase;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(angle) * size * 2,
          Math.sin(angle) * size * 2
        );
        ctx.stroke();
      }
      
      // Cyberpunk matrix effect
      ctx.fillStyle = `hsla(${0 + cyberpunkPhase * 60}, 100%, 70%, ${0.6 * alpha})`;
      ctx.fillRect(-size * 0.3, -size * 0.3, size * 0.6, size * 0.6);
    };

    // AI Futuristic particle with intelligence simulation
    const renderAIFuturisticParticle = (ctx: CanvasRenderingContext2D, particle: any, size: number) => {
      const aiPhase = Math.sin(particle.aiIntelligence + time * 0.016);
      const coherence = Math.sin(particle.quantumCoherence + time * 0.011);
      const alpha = particle.life / particle.maxLife;
      
      // AI neural network simulation
      ctx.strokeStyle = `hsla(${160 + aiPhase * 100}, 100%, 80%, ${0.5 * alpha})`;
      ctx.lineWidth = 3;
      
      // Dynamic neural connections
      const connectionCount = 3 + Math.floor(Math.abs(coherence) * 3);
      for (let i = 0; i < connectionCount; i++) {
        const angle = (i / connectionCount) * Math.PI * 2 + aiPhase;
        const connectionLength = size * (1.5 + coherence * 0.5);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(angle) * connectionLength,
          Math.sin(angle) * connectionLength
        );
        ctx.stroke();
      }
      
      // AI core
      ctx.fillStyle = `hsla(${160 + aiPhase * 100}, 100%, 80%, ${0.8 * alpha})`;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      ctx.fill();
    };

    // Standard particle rendering
    const renderStandardParticle = (ctx: CanvasRenderingContext2D, particle: any, size: number) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      time += 0.016; // 60 FPS
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      switch (variant) {
        case 'quantum':
        case 'quantum-advanced':
        case 'quantum-entanglement':
          gradient.addColorStop(0, 'rgba(30, 10, 60, 0.1)');
          gradient.addColorStop(0.5, 'rgba(20, 5, 40, 0.05)');
          gradient.addColorStop(1, 'rgba(10, 2, 20, 0.02)');
          break;
        case 'holographic':
        case 'holographic-advanced':
        case 'holographic-matrix':
          gradient.addColorStop(0, 'rgba(10, 40, 20, 0.1)');
          gradient.addColorStop(0.5, 'rgba(5, 20, 10, 0.05)');
          gradient.addColorStop(1, 'rgba(2, 10, 5, 0.02)');
          break;
        case 'cyberpunk':
        case 'quantum-cyberpunk':
          gradient.addColorStop(0, 'rgba(60, 10, 10, 0.1)');
          gradient.addColorStop(0.5, 'rgba(30, 5, 5, 0.05)');
          gradient.addColorStop(1, 'rgba(15, 2, 2, 0.02)');
          break;
        default:
          gradient.addColorStop(0, 'rgba(20, 20, 40, 0.1)');
          gradient.addColorStop(0.5, 'rgba(10, 10, 20, 0.05)');
          gradient.addColorStop(1, 'rgba(5, 5, 10, 0.02)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        particle.quantumState += 0.02;
        particle.holographicLayer += 0.01;
        particle.neuralConnection += 0.015;
        particle.cyberpunkGlow += 0.025;
        particle.quantumEntanglement += 0.018;
        particle.holographicDepth += 0.012;
        particle.neuralSynapse += 0.022;
        particle.aiIntelligence += 0.019;
        particle.quantumCoherence += 0.016;
        particle.holographicProjection += 0.014;
        particle.neuralPlasticity += 0.021;
        particle.cyberpunkMatrix += 0.028;
        
        particle.life--;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Render particle
        renderParticle(particle);
      }

      // Add new particles to maintain count
      if (particles.length < (intensity === 'high' ? 1200 : intensity === 'medium' ? 800 : 400)) {
        createParticles();
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

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
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

export default EnhancedFuturisticBackground;