import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
  intensity?: 'low' | 'medium' | 'high';
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant),
          type: variant as any
        });
      }
    };

    const getParticleColor = (variant: string) => {
      switch (variant) {
        case 'quantum':
          return `hsl(${Math.random() * 60 + 200}, 70%, 60%)`; // Blue-cyan range
        case 'holographic':
          return `hsl(${Math.random() * 60 + 280}, 80%, 70%)`; // Purple-pink range
        case 'neural':
          return `hsl(${Math.random() * 60 + 120}, 70%, 60%)`; // Green range
        case 'cyberpunk':
          return `hsl(${Math.random() * 60 + 0}, 80%, 60%)`; // Red-orange range
        case 'space':
          return `hsl(${Math.random() * 60 + 240}, 70%, 70%)`; // Blue range
        default:
          return `hsl(${Math.random() * 360}, 70%, 60%)`; // Full spectrum
      }
    };

    // Quantum entanglement effect
    const createQuantumEntanglement = () => {
      if (variant === 'quantum' && intensity !== 'low') {
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            const p1 = particles[i];
            const p2 = particles[i + 1];
            
            // Create connection lines
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(Date.now() * 0.001) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Holographic grid effect
    const createHolographicGrid = () => {
      if (variant === 'holographic') {
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 + Math.sin(time) * 0.1})`;
        ctx.lineWidth = 0.5;
        
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
    };

    // Neural network effect
    const createNeuralNetwork = () => {
      if (variant === 'neural') {
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
            );
            
            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.3;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(0, 255, 127, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }
    };

    // Cyberpunk matrix effect
    const createCyberpunkMatrix = () => {
      if (variant === 'cyberpunk') {
        const time = Date.now() * 0.001;
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (i * 100 + time * 50) % canvas.width;
          const y = (i * 50 + time * 30) % canvas.height;
          ctx.fillText('01', x, y);
        }
      }
    };

    // Space nebula effect
    const createSpaceNebula = () => {
      if (variant === 'space') {
        const time = Date.now() * 0.001;
        
        // Create nebula clouds
        for (let i = 0; i < 5; i++) {
          const x = (i * 200 + time * 20) % canvas.width;
          const y = (i * 150 + time * 15) % canvas.height;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
          gradient.addColorStop(0, `rgba(138, 43, 226, ${0.1})`);
          gradient.addColorStop(1, 'rgba(138, 43, 226, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 100, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Wrap around edges for space variant
        if (variant === 'space') {
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Add glow effect
        if (intensity !== 'low') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      
      ctx.globalAlpha = 1;
      
      // Create special effects based on variant
      createQuantumEntanglement();
      createHolographicGrid();
      createNeuralNetwork();
      createCyberpunkMatrix();
      createSpaceNebula();
      
      // Add floating geometric shapes
      if (intensity !== 'low') {
        const time = Date.now() * 0.001;
        
        // Floating triangles
        for (let i = 0; i < 3; i++) {
          const x = (i * 300 + time * 30) % canvas.width;
          const y = (i * 200 + time * 20) % canvas.height;
          
          ctx.beginPath();
          ctx.moveTo(x, y - 20);
          ctx.lineTo(x - 15, y + 10);
          ctx.lineTo(x + 15, y + 10);
          ctx.closePath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Floating circles
        for (let i = 0; i < 2; i++) {
          const x = (i * 400 + time * 25) % canvas.width;
          const y = (i * 300 + time * 15) % canvas.height;
          
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: getBackgroundGradient(variant),
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Gradient overlays */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: getOverlayGradient(variant),
          }}
        />
        
        {/* Animated light rays */}
        {intensity !== 'low' && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-10"
                style={{
                  left: `${(i * 20) % 100}%`,
                  animation: `lightRay ${3 + i}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes lightRay {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const getBackgroundGradient = (variant: string) => {
  switch (variant) {
    case 'quantum':
      return 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1a1a3a 75%, #0f0f23 100%)';
    case 'holographic':
      return 'linear-gradient(135deg, #1a0033 0%, #330066 25%, #6600cc 50%, #330066 75%, #1a0033 100%)';
    case 'neural':
      return 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 25%, #2d692d 50%, #1a3a1a 75%, #0a1a0a 100%)';
    case 'cyberpunk':
      return 'linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 25%, #692d2d 50%, #3a1a1a 75%, #1a0a0a 100%)';
    case 'space':
      return 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 25%, #2d2d69 50%, #1a1a3a 75%, #0a0a1a 100%)';
    default:
      return 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1a1a3a 75%, #0f0f23 100%)';
  }
};

const getOverlayGradient = (variant: string) => {
  switch (variant) {
    case 'quantum':
      return 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
    case 'holographic':
      return 'radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 70%)';
    case 'neural':
      return 'radial-gradient(circle at 50% 50%, rgba(0, 255, 127, 0.1) 0%, transparent 70%)';
    case 'cyberpunk':
      return 'radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 70%)';
    case 'space':
      return 'radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 70%)';
    default:
      return 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
  }
};

export default UltraFuturisticBackground;