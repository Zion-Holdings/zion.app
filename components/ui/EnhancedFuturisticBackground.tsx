import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced';
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
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 180 : 90;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
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
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.025) * 120}, 85%, 75%)`;
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

      for (let i = 0; i < particles.length; i += 2) {
        for (let j = i + 2; j < particles.length; j += 2) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (200 - distance) / 200;
            ctx.strokeStyle = `rgba(200, 100, 255, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawHolographicGrid = () => {
      ctx.strokeStyle = `rgba(100, 255, 200, ${0.2 + Math.sin(time * 0.01) * 0.1})`;
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.sin(time * 0.005 + y * 0.01) * 10);
        ctx.lineTo(canvas.width, y + Math.sin(time * 0.005 + y * 0.01) * 10);
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time * 0.005 + x * 0.01) * 10, 0);
        ctx.lineTo(x + Math.sin(time * 0.005 + x * 0.01) * 10, canvas.height);
        ctx.stroke();
      }
    };

    const drawCyberpunkMatrix = () => {
      ctx.fillStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time * 0.02) * 0.05})`;
      ctx.font = '12px monospace';
      
      for (let i = 0; i < particles.length; i += 4) {
        const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        ctx.fillText(char, particles[i].x, particles[i].y);
      }
    };

    const drawQuantumAdvanced = () => {
      // Quantum entanglement visualization
      ctx.strokeStyle = `rgba(255, 100, 255, ${0.2 + Math.sin(time * 0.01) * 0.1})`;
      ctx.lineWidth = 3;

      for (let i = 0; i < particles.length; i += 2) {
        for (let j = i + 2; j < particles.length; j += 2) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            const opacity = (250 - distance) / 250;
            const wave = Math.sin(time * 0.02 + distance * 0.01);
            ctx.strokeStyle = `rgba(255, 100, 255, ${opacity * 0.4 * (0.5 + wave * 0.5)})`;
            ctx.lineWidth = 3 + wave * 2;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Quantum probability waves
      ctx.strokeStyle = `rgba(100, 255, 255, ${0.3 + Math.sin(time * 0.015) * 0.2})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < canvas.width; i += 20) {
        const wave = Math.sin(time * 0.01 + i * 0.02) * 50;
        ctx.beginPath();
        ctx.moveTo(i, canvas.height / 2 + wave);
        ctx.lineTo(i + 20, canvas.height / 2 + Math.sin(time * 0.01 + (i + 20) * 0.02) * 50);
        ctx.stroke();
      }
    };

    const updateParticles = () => {
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `${particle.color.replace(')', `, ${alpha})`)}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      time += 1;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      updateParticles();

      // Draw connections based on variant
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
        case 'cyberpunk':
          drawCyberpunkMatrix();
          break;
        case 'quantum-advanced':
          drawQuantumAdvanced();
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
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;