import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced';
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
    }> = [];

    // Create particles based on variant
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
          pulseSpeed: Math.random() * 0.05 + 0.02
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
            const opacity = Math.max(0, 0.3 - distance / 500);
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
      // Quantum entanglement lines
      for (let i = 0; i < particles.length; i += 4) {
        for (let j = i + 4; j < particles.length; j += 4) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = Math.max(0, 0.4 - distance / 600);
            const wave = Math.sin(time * 0.02 + distance * 0.01);
            ctx.strokeStyle = `rgba(200, 100, 255, ${opacity * (0.5 + wave * 0.5)})`;
            ctx.lineWidth = 2 + wave;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Quantum particles with rotation and pulse
      particles.forEach(particle => {
        if (particle.type.includes('quantum')) {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);
          
          const pulse = Math.sin(particle.pulse) * 0.3 + 0.7;
          const size = particle.size * pulse;
          
          // Draw quantum particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw quantum aura
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.restore();
        }
      });
    };

    const drawHolographicEffects = () => {
      // Holographic grid
      const gridSize = 50;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;
      
      ctx.strokeStyle = `rgba(0, 255, 200, ${0.1 + Math.sin(time * 0.01) * 0.05})`;
      ctx.lineWidth = 1;
      
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Holographic particles with glow
      particles.forEach(particle => {
        if (particle.type.includes('holographic')) {
          const glow = Math.sin(particle.pulse) * 0.5 + 0.5;
          const glowSize = particle.size * (2 + glow);
          
          // Draw glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, glowSize
          );
          gradient.addColorStop(0, `${particle.color}80`);
          gradient.addColorStop(0.5, `${particle.color}40`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw core
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const drawCyberpunkEffects = () => {
      // Cyberpunk scan lines
      const scanLineHeight = 2;
      const scanSpeed = time * 0.5;
      
      for (let y = 0; y < canvas.height; y += scanLineHeight * 2) {
        const opacity = Math.sin((y + scanSpeed) * 0.01) * 0.3 + 0.1;
        ctx.fillStyle = `rgba(255, 0, 100, ${opacity})`;
        ctx.fillRect(0, y, canvas.width, scanLineHeight);
      }

      // Cyberpunk particles
      particles.forEach(particle => {
        if (particle.type === 'cyberpunk') {
          const flicker = Math.random() > 0.95 ? 0.3 : 1;
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = flicker;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });
    };

    const animate = () => {
      time += 1;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      updateParticles();
      
      // Draw effects based on variant
      if (variant.includes('neural')) {
        drawNeuralNetwork();
      }
      
      if (variant.includes('quantum')) {
        drawQuantumEffects();
      }
      
      if (variant.includes('holographic')) {
        drawHolographicEffects();
      }
      
      if (variant === 'cyberpunk') {
        drawCyberpunkEffects();
      }
      
      // Draw all particles
      particles.forEach(particle => {
        if (!particle.type.includes('quantum') && !particle.type.includes('holographic') && particle.type !== 'cyberpunk') {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / particle.maxLife;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      ctx.globalAlpha = 1;
      
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;