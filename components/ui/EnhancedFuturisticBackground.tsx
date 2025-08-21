import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk';
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
      type: 'neural' | 'quantum' | 'holographic' | 'cyberpunk';
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant
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
      ctx.strokeStyle = `rgba(200, 100, 255, ${0.2 + Math.sin(time * 0.008) * 0.15})`;
      ctx.lineWidth = 2;

      particles.forEach((particle, i) => {
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.stroke();

          // Quantum entanglement lines
          if (i < particles.length - 1) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.stroke();
          }
        }
      });
    };

    const drawHolographicGrid = () => {
      const gridSize = 50;
      const offset = time * 0.5;

      ctx.strokeStyle = `rgba(100, 255, 200, ${0.3 + Math.sin(time * 0.01) * 0.2})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawCyberpunkMatrix = () => {
      ctx.fillStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time * 0.02) * 0.1})`;
      ctx.font = '12px monospace';

      for (let i = 0; i < 20; i++) {
        const x = (i * 100 + time * 0.5) % canvas.width;
        const y = (i * 30 + time * 0.3) % canvas.height;
        const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        ctx.fillText(char, x, y);
      }
    };

    const animate = () => {
      time += 1;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = getParticleColor(variant);
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
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
        case 'cyberpunk':
          drawCyberpunkMatrix();
          break;
      }

      // Add floating geometric shapes
      drawFloatingShapes();

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawFloatingShapes = () => {
      const shapes = [
        { type: 'circle', x: Math.sin(time * 0.003) * 100 + canvas.width / 2, y: Math.cos(time * 0.002) * 80 + canvas.height / 2 },
        { type: 'triangle', x: Math.cos(time * 0.004) * 120 + canvas.width / 3, y: Math.sin(time * 0.003) * 100 + canvas.height / 3 },
        { type: 'square', x: Math.sin(time * 0.005) * 90 + canvas.width * 2 / 3, y: Math.cos(time * 0.004) * 70 + canvas.height * 2 / 3 }
      ];

      shapes.forEach((shape, index) => {
        const alpha = 0.1 + Math.sin(time * 0.01 + index) * 0.05;
        ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
        ctx.lineWidth = 2;

        switch (shape.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, 30, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(shape.x, shape.y - 20);
            ctx.lineTo(shape.x - 20, shape.y + 20);
            ctx.lineTo(shape.x + 20, shape.y + 20);
            ctx.closePath();
            ctx.stroke();
            break;
          case 'square':
            ctx.strokeRect(shape.x - 20, shape.y - 20, 40, 40);
            break;
        }
      });
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Scanning line effect */}
        <div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          style={{
            animation: 'scan 3s linear infinite',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedFuturisticBackground;