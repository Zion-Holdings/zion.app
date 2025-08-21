import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum';
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
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      quantumState: number;
      holographicLayer: number;
      neuralConnection: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 400 : intensity === 'medium' ? 250 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 6 + 2,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.08 + 0.03,
          quantumState: Math.random() * Math.PI * 2,
          holographicLayer: Math.random() * 3,
          neuralConnection: Math.random() * 5
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
          return `hsl(${280 + Math.sin(time * 0.03) * 120}, 90%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${160 + Math.sin(time * 0.025) * 150}, 95%, 70%)`;
        case 'quantum-holographic':
          return `hsl(${220 + Math.sin(time * 0.04) * 180}, 95%, 80%)`;
        case 'neural-quantum':
          return `hsl(${240 + Math.sin(time * 0.035) * 200}, 90%, 70%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    const drawNeuralNetwork = () => {
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 + Math.sin(time * 0.005) * 0.1})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i += 3) {
        for (let j = i + 3; j < particles.length; j += 3) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawQuantumEffects = () => {
      particles.forEach((particle, index) => {
        if (particle.type.includes('quantum')) {
          // Quantum entanglement lines
          const nextParticle = particles[(index + 1) % particles.length];
          const dx = particle.x - nextParticle.x;
          const dy = particle.y - nextParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = (200 - distance) / 200 * 0.4;
            const quantumColor = `hsl(${280 + Math.sin(time * 0.02 + index * 0.1) * 80}, 80%, 70%)`;
            ctx.strokeStyle = `hsla(${280 + Math.sin(time * 0.02 + index * 0.1) * 80}, 80%, 70%, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.stroke();
          }

          // Quantum wave function visualization
          const waveRadius = 50 + Math.sin(time * 0.01 + particle.quantumState) * 20;
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.3 + Math.sin(time * 0.01) * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    };

    const drawHolographicEffects = () => {
      particles.forEach((particle) => {
        if (particle.type.includes('holographic')) {
          // Holographic layers
          for (let layer = 0; layer < particle.holographicLayer; layer++) {
            const layerRadius = (layer + 1) * 30;
            const layerOpacity = 0.2 - layer * 0.05;
            const holographicColor = `hsl(${160 + Math.sin(time * 0.015 + layer * 0.5) * 100}, 90%, 65%)`;
            
            ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015 + layer * 0.5) * 100}, 90%, 65%, ${layerOpacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, layerRadius, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Holographic interference patterns
          const interferenceRadius = 80 + Math.sin(time * 0.02 + particle.x * 0.01) * 30;
          ctx.strokeStyle = `rgba(0, 255, 127, ${0.2 + Math.sin(time * 0.015) * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, interferenceRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    };

    const drawNeuralConnections = () => {
      particles.forEach((particle, index) => {
        if (particle.type.includes('neural')) {
          // Neural network connections
          for (let connection = 0; connection < particle.neuralConnection; connection++) {
            const targetIndex = (index + connection * 7) % particles.length;
            const targetParticle = particles[targetIndex];
            const dx = particle.x - targetParticle.x;
            const dy = particle.y - targetParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 180) {
              const opacity = (180 - distance) / 180 * 0.4;
              const neuralColor = `hsl(${200 + Math.sin(time * 0.01 + connection * 0.5) * 60}, 70%, 60%)`;
              ctx.strokeStyle = `hsla(${200 + Math.sin(time * 0.01 + connection * 0.5) * 60}, 70%, 60%, ${opacity})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(targetParticle.x, targetParticle.y);
              ctx.stroke();
            }
          }

          // Synaptic firing effects
          if (Math.random() < 0.01) {
            const fireRadius = 20 + Math.random() * 30;
            ctx.fillStyle = `rgba(0, 255, 255, ${0.6 + Math.random() * 0.4})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, fireRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        particle.quantumState += 0.02;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const pulseScale = 1 + Math.sin(particle.pulse) * 0.3;
        const size = particle.size * pulseScale;
        
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Enhanced particle shapes based on variant
        if (particle.type.includes('quantum')) {
          // Quantum particle - hexagonal shape
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * size;
            const y = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();
        } else if (particle.type.includes('holographic')) {
          // Holographic particle - star shape
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const x = Math.cos(angle) * size;
            const y = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();
        } else {
          // Standard particle - circle
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const animate = () => {
      time += 0.5;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw effects based on variant
      if (variant.includes('neural')) drawNeuralNetwork();
      if (variant.includes('quantum')) drawQuantumEffects();
      if (variant.includes('holographic')) drawHolographicEffects();
      if (variant.includes('neural')) drawNeuralConnections();
      
      // Draw particles
      drawParticles();

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
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;