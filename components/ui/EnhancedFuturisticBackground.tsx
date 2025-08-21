import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic-advanced',
  intensity = 'high',
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
      waveFunction: number;
      superposition: number;
      quantumTunnel: number;
      holographicProjection: number;
      neuralPlasticity: number;
      quantumCoherence: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 12 + 4,
          life: Math.random() * 150,
          maxLife: 150,
          color: getParticleColor(variant),
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
          waveFunction: Math.random() * Math.PI * 2,
          superposition: Math.random() * Math.PI * 2,
          quantumTunnel: Math.random() * Math.PI * 2,
          holographicProjection: Math.random() * Math.PI * 2,
          neuralPlasticity: Math.random() * Math.PI * 2,
          quantumCoherence: Math.random() * Math.PI * 2
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
          return `hsl(${120 + Math.sin(time * 0.02) * 140}, 95%, 70%)`;
        case 'quantum-holographic':
          return `hsl(${240 + Math.sin(time * 0.03) * 160}, 90%, 80%)`;
        case 'neural-quantum':
          return `hsl(${180 + Math.sin(time * 0.018) * 100}, 80%, 65%)`;
        case 'quantum-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.035) * 100}, 95%, 70%)`;
        case 'holographic-neural':
          return `hsl(${140 + Math.sin(time * 0.022) * 120}, 85%, 75%)`;
        case 'quantum-holographic-advanced':
          return `hsl(${260 + Math.sin(time * 0.05) * 220}, 98%, 85%)`;
        case 'quantum-matrix':
          return `hsl(${120 + Math.sin(time * 0.04) * 100}, 85%, 65%)`;
        case 'neural-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.06) * 140}, 90%, 70%)`;
        case 'holographic-quantum':
          return `hsl(${200 + Math.sin(time * 0.035) * 160}, 95%, 75%)`;
        case 'quantum-neural-advanced':
          return `hsl(${250 + Math.sin(time * 0.045) * 180}, 92%, 80%)`;
        case 'cyberpunk-holographic':
          return `hsl(${340 + Math.sin(time * 0.055) * 120}, 95%, 70%)`;
        case 'quantum-space':
          return `hsl(${220 + Math.sin(time * 0.065) * 200}, 88%, 75%)`;
        case 'ai-futuristic':
          return `hsl(${180 + Math.sin(time * 0.075) * 240}, 90%, 80%)`;
        case 'quantum-entanglement':
          return `hsl(${280 + Math.sin(time * 0.085) * 160}, 95%, 85%)`;
        case 'holographic-matrix':
          return `hsl(${140 + Math.sin(time * 0.095) * 180}, 92%, 70%)`;
        case 'neural-quantum-cyberpunk':
          return `hsl(${300 + Math.sin(time * 0.105) * 220}, 98%, 90%)`;
        default:
          return `hsl(${260 + Math.sin(time * 0.04) * 180}, 95%, 85%)`;
      }
    };

    // Advanced particle rendering
    const renderParticle = (particle: any) => {
      const alpha = particle.life / particle.maxLife;
      const size = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Quantum effects
      if (particle.type.includes('quantum')) {
        const quantumGlow = Math.sin(particle.quantumState + time * 0.01) * 0.5 + 0.5;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20 * quantumGlow;
        
        // Quantum entanglement lines
        if (Math.random() < 0.1) {
          const entangledParticle = particles.find(p => 
            p !== particle && 
            Math.random() < 0.05 &&
            Math.abs(p.x - particle.x) < 100 &&
            Math.abs(p.y - particle.y) < 100
          );
          
          if (entangledParticle) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(entangledParticle.x - particle.x, entangledParticle.y - particle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Holographic effects
      if (particle.type.includes('holographic')) {
        const holographicEffect = Math.sin(particle.holographicProjection + time * 0.02) * 0.5 + 0.5;
        ctx.globalAlpha = alpha * (0.5 + holographicEffect * 0.5);
        
        // Multi-layer holographic rendering
        for (let layer = 0; layer < particle.holographicLayer; layer++) {
          const layerAlpha = alpha * (1 - layer * 0.1);
          const layerSize = size * (1 + layer * 0.2);
          
          ctx.globalAlpha = layerAlpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, layerSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Neural network effects
      if (particle.type.includes('neural')) {
        const neuralPulse = Math.sin(particle.neuralSynapse + time * 0.015) * 0.5 + 0.5;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2 * neuralPulse;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        
        // Neural connections
        ctx.beginPath();
        ctx.moveTo(-size/2, -size/2);
        ctx.lineTo(size/2, size/2);
        ctx.moveTo(size/2, -size/2);
        ctx.lineTo(-size/2, size/2);
        ctx.stroke();
      }

      // Cyberpunk effects
      if (particle.type.includes('cyberpunk')) {
        const cyberGlow = Math.sin(particle.cyberpunkGlow + time * 0.04) * 0.5 + 0.5;
        ctx.shadowColor = '#ff0080';
        ctx.shadowBlur = 15 * cyberGlow;
        
        // Glitch effect
        if (Math.random() < 0.01) {
          ctx.translate(Math.random() * 4 - 2, Math.random() * 4 - 2);
        }
      }

      // Base particle rendering
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      
      // Different shapes based on type
      if (particle.type.includes('quantum')) {
        // Quantum wave function
        const wavePoints = 8;
        for (let i = 0; i < wavePoints; i++) {
          const angle = (i / wavePoints) * Math.PI * 2;
          const waveRadius = size * (1 + Math.sin(particle.waveFunction + angle * 2) * 0.3);
          const x = Math.cos(angle) * waveRadius;
          const y = Math.sin(angle) * waveRadius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
      } else if (particle.type.includes('holographic')) {
        // Holographic hexagon
        const sides = 6;
        for (let i = 0; i < sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          const x = Math.cos(angle) * size;
          const y = Math.sin(angle) * size;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
      } else {
        // Standard circle
        ctx.arc(0, 0, size, 0, Math.PI * 2);
      }
      
      ctx.fill();
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      time += 0.016; // 60 FPS
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
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
        particle.holographicProjection += 0.015;
        particle.neuralSynapse += 0.018;
        particle.waveFunction += 0.025;
        particle.superposition += 0.03;
        particle.quantumTunnel += 0.022;
        particle.neuralPlasticity += 0.02;
        particle.quantumCoherence += 0.028;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Decrease life
        particle.life--;
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        // Render particle
        renderParticle(particle);
      }

      // Replenish particles
      if (particles.length < (intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250)) {
        createParticles();
      }

      // Add quantum field effects
      if (variant.includes('quantum')) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 1;
        
        // Quantum field lines
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const length = 100 + Math.random() * 200;
          const angle = Math.random() * Math.PI * 2;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            x + Math.cos(angle) * length,
            y + Math.sin(angle) * length
          );
          ctx.stroke();
        }
        ctx.restore();
      }

      // Add holographic grid
      if (variant.includes('holographic')) {
        ctx.save();
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 0.5;
        
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
        ctx.restore();
      }

      // Add neural network connections
      if (variant.includes('neural')) {
        ctx.save();
        ctx.globalAlpha = 0.08;
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 0.5;
        
        // Create neural connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            
            if (distance < 150 && Math.random() < 0.1) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
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

export default EnhancedFuturisticBackground;