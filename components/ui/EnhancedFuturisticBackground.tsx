import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'space' | 'biotech' | 'energy';
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

    // Enhanced animation variables
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
      connections: number[];
    }> = [];

    // Create enhanced particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 180 : 90;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 4 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          pulse: Math.random() * Math.PI * 2,
          connections: []
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
        case 'space':
          return `hsl(${220 + Math.sin(time * 0.025) * 40}, 85%, 70%)`;
        case 'biotech':
          return `hsl(${120 + Math.sin(time * 0.018) * 80}, 75%, 65%)`;
        case 'energy':
          return `hsl(${45 + Math.sin(time * 0.022) * 60}, 90%, 60%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    // Enhanced drawing functions
    const drawNeuralNetwork = () => {
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 + Math.sin(time * 0.005) * 0.1})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i += 3) {
        for (let j = i + 3; j < particles.length; j += 3) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = Math.max(0, 1 - distance / 150);
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawQuantumField = () => {
      ctx.strokeStyle = `rgba(200, 100, 255, ${0.15 + Math.sin(time * 0.008) * 0.1})`;
      ctx.lineWidth = 2;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const waveRadius = (time * 0.5 + particle.life) % 200;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawHolographicGrid = () => {
      const gridSize = 50;
      const offset = time * 0.5;
      
      ctx.strokeStyle = `rgba(100, 255, 200, ${0.1 + Math.sin(time * 0.003) * 0.05})`;
      ctx.lineWidth = 1;

      for (let x = -offset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -offset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawSpaceField = () => {
      // Draw stars
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const twinkle = Math.sin(time * 0.01 + particle.life * 0.1) * 0.5 + 0.5;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * twinkle, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nebula effects
      const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, 300);
      gradient.addColorStop(0, `rgba(100, 50, 150, ${0.1 + Math.sin(time * 0.002) * 0.05})`);
      gradient.addColorStop(1, 'rgba(100, 50, 150, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawBiotechField = () => {
      // Draw organic connections
      ctx.strokeStyle = `rgba(100, 255, 100, ${0.2 + Math.sin(time * 0.004) * 0.1})`;
      ctx.lineWidth = 2;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = Math.max(0, 1 - distance / 120);
            ctx.strokeStyle = `rgba(100, 255, 100, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawEnergyField = () => {
      // Draw energy waves
      for (let i = 0; i < 5; i++) {
        const waveRadius = (time * 2 + i * 100) % 400;
        const opacity = Math.max(0, 1 - waveRadius / 400);
        
        ctx.strokeStyle = `rgba(255, 200, 100, ${opacity * 0.3})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      time += 1;
      
      // Clear canvas with fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += 0.1;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = getParticleColor(variant);
        }

        // Draw particle
        const pulseSize = particle.size + Math.sin(particle.pulse) * 2;
        ctx.fillStyle = particle.color;
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (variant === 'quantum') {
          // Quantum particles as squares
          ctx.fillRect(-pulseSize/2, -pulseSize/2, pulseSize, pulseSize);
        } else if (variant === 'cyberpunk') {
          // Cyberpunk particles as triangles
          ctx.beginPath();
          ctx.moveTo(0, -pulseSize);
          ctx.lineTo(-pulseSize, pulseSize);
          ctx.lineTo(pulseSize, pulseSize);
          ctx.closePath();
          ctx.fill();
        } else {
          // Default circular particles
          ctx.beginPath();
          ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Draw variant-specific effects
      switch (variant) {
        case 'neural':
          drawNeuralNetwork();
          break;
        case 'quantum':
          drawQuantumField();
          break;
        case 'holographic':
          drawHolographicGrid();
          break;
        case 'space':
          drawSpaceField();
          break;
        case 'biotech':
          drawBiotechField();
          break;
        case 'energy':
          drawEnergyField();
          break;
        default:
          drawNeuralNetwork();
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
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;