import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural-quantum' | 'cyberpunk' | 'holographic' | 'matrix' | 'quantum-particles';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'neural-quantum',
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for quantum effects
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      '#3b82f6', // Blue
      '#8b5cf6', // Purple
      '#ec4899', // Pink
      '#10b981', // Green
      '#f59e0b', // Yellow
      '#ef4444', // Red
    ];

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initParticles();

    // Neural network connections
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Quantum entanglement effect
    const drawQuantumEntanglement = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 2;

      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          const opacity = Math.sin(Date.now() * 0.001 + i) * 0.3 + 0.3;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.stroke();
        }
      }
    };

    // Matrix rain effect
    const drawMatrixRain = () => {
      ctx.fillStyle = '#00ff00';
      ctx.font = '16px monospace';
      
      for (let i = 0; i < 50; i++) {
        const x = (i * 20) % canvas.width;
        const y = (Date.now() * 0.01 + i * 10) % canvas.height;
        const opacity = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
        
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.fillText('01', x, y);
      }
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      const gridSize = 50;
      const time = Date.now() * 0.001;
      
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const opacity = Math.sin(time + x * 0.01) * 0.2 + 0.1;
        ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const opacity = Math.cos(time + y * 0.01) * 0.2 + 0.1;
        ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw effects based on variant
      switch (variant) {
        case 'neural-quantum':
          drawConnections();
          drawQuantumEntanglement();
          break;
        case 'cyberpunk':
          drawHolographicGrid();
          drawMatrixRain();
          break;
        case 'holographic':
          drawHolographicGrid();
          drawConnections();
          break;
        case 'matrix':
          drawMatrixRain();
          break;
        case 'quantum-particles':
          drawQuantumEntanglement();
          break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  const getBackgroundClasses = () => {
    const baseClasses = 'relative min-h-screen';
    
    switch (variant) {
      case 'neural-quantum':
        return `${baseClasses} quantum-neural-bg`;
      case 'cyberpunk':
        return `${baseClasses} matrix-rain`;
      case 'holographic':
        return `${baseClasses} holographic`;
      case 'matrix':
        return `${baseClasses} matrix-rain`;
      case 'quantum-particles':
        return `${baseClasses} quantum-particles`;
      default:
        return `${baseClasses} futuristic-bg`;
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.6 : 0.4 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating lines */}
        <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform -rotate-45" />
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;