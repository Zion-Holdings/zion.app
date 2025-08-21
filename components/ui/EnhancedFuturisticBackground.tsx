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
          holographicDepth: Math.random() * 8,
          neuralSynapse: Math.random() * Math.PI * 2
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
          return `hsl(${0 + Math.sin(time * 0.03) * 80}, 100%, 70%)`;
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.025) * 120}, 95%, 85%)`;
        case 'holographic-advanced':
          return `hsl(${180 + Math.sin(time * 0.02) * 140}, 100%, 80%)`;
        case 'quantum-holographic':
          return `hsl(${240 + Math.sin(time * 0.018) * 160}, 90%, 75%)`;
        case 'neural-quantum':
          return `hsl(${220 + Math.sin(time * 0.015) * 100}, 85%, 70%)`;
        case 'quantum-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.035) * 140}, 100%, 75%)`;
        case 'holographic-neural':
          return `hsl(${140 + Math.sin(time * 0.012) * 120}, 90%, 70%)`;
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
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    // Enhanced particle rendering
    const renderParticle = (particle: any) => {
      const alpha = particle.life / particle.maxLife;
      const size = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Enhanced visual effects based on variant
      switch (particle.type) {
        case 'quantum-cyberpunk':
          // Cyberpunk neon effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 + Math.sin(particle.cyberpunkGlow) * 15;
          ctx.fillStyle = particle.color;
          ctx.fillRect(-size/2, -size/2, size, size);
          
          // Glitch effect
          if (Math.random() < 0.01) {
            ctx.fillStyle = '#ff00ff';
            ctx.fillRect(-size/2, -size/2, size, size);
          }
          break;
          
        case 'quantum-holographic-advanced': {
          // Advanced holographic effect
          const layers = 3;
          for (let i = 0; i < layers; i++) {
            const layerAlpha = alpha * (1 - i * 0.3);
            const layerSize = size * (1 + i * 0.2);
            ctx.globalAlpha = layerAlpha;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.strokeRect(-layerSize/2, -layerSize/2, layerSize, layerSize);
          }
          break;
        }
          
        case 'holographic-neural':
          // Neural network visualization
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-size/2, -size/2);
          ctx.lineTo(size/2, size/2);
          ctx.moveTo(size/2, -size/2);
          ctx.lineTo(-size/2, size/2);
          ctx.stroke();
          
          // Neural connections
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
          
        default:
          // Standard particle rendering
          ctx.fillStyle = particle.color;
          ctx.fillRect(-size/2, -size/2, size, size);
      }
      
      ctx.restore();
    };

    // Enhanced animation loop
    const animate = () => {
      time += 0.016;
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and render particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        particle.quantumState += 0.02;
        particle.cyberpunkGlow += 0.03;
        particle.quantumEntanglement += 0.015;
        particle.neuralSynapse += 0.025;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Decrease life
        particle.life--;
        
        // Render particle if alive
        if (particle.life > 0) {
          renderParticle(particle);
        } else {
          particles.splice(index, 1);
        }
      });

      // Add new particles to maintain count
      if (particles.length < (intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250)) {
        createParticles();
      }

      // Draw quantum entanglement lines
      if (variant.includes('quantum')) {
        ctx.strokeStyle = `hsla(${280 + Math.sin(time * 0.02) * 100}, 90%, 80%, 0.3)`;
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i += 3) {
          if (i + 1 < particles.length) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.stroke();
          }
        }
      }

      // Draw neural network connections
      if (variant.includes('neural')) {
        ctx.strokeStyle = `hsla(${200 + Math.sin(time * 0.01) * 60}, 80%, 70%, 0.2)`;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            const p1 = particles[i];
            const p2 = particles[i + 1];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw holographic grid
      if (variant.includes('holographic')) {
        ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015) * 120}, 95%, 75%, 0.1)`;
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
      }

      // Continue animation
      if (typeof requestAnimationFrame !== 'undefined') {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation
    if (typeof requestAnimationFrame !== 'undefined') {
      animationRef.current = requestAnimationFrame(animate);
    }

    // Cleanup function
    return () => {
      if (typeof cancelAnimationFrame !== 'undefined' && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas);
      }
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