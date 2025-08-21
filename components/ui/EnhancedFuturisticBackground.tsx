import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  variant?: 'quantum-advanced' | 'holographic-advanced' | 'neural-network' | 'quantum-field';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

export default function EnhancedFuturisticBackground({ 
  variant = 'quantum-advanced', 
  intensity = 'medium',
  children 
}: EnhancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'field';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
      holographic: ['#ff00ff', '#00ffff', '#ffff00', '#ff8000'],
      neural: ['#00ff80', '#8000ff', '#ff0080', '#00ffff'],
      field: ['#80ff00', '#ff8000', '#0080ff', '#ff0080']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    };

    const particleCount = Math.floor(100 * intensityMultiplier[intensity]);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant === 'quantum-advanced' ? 'quantum' : variant === 'holographic-advanced' ? 'holographic' : variant === 'neural-network' ? 'neural' : 'field'][Math.floor(Math.random() * 4)],
        type: variant === 'quantum-advanced' ? 'quantum' : variant === 'holographic-advanced' ? 'holographic' : variant === 'neural-network' ? 'neural' : 'field'
      });
    }

    // Quantum entanglement effect
    const createEntanglement = () => {
      if (variant === 'quantum-advanced' || variant === 'quantum-field') {
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            const dx = particles[i].x - particles[i + 1].x;
            const dy = particles[i].y - particles[i + 1].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Neural network connections
    const createNeuralConnections = () => {
      if (variant === 'neural-network') {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              const opacity = 0.4 * (1 - distance / 80);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 128, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Holographic interference patterns
    const createHolographicPatterns = () => {
      if (variant === 'holographic-advanced') {
        for (let i = 0; i < particles.length; i++) {
          const time = Date.now() * 0.001;
          const wave = Math.sin(time + particles[i].x * 0.01) * Math.cos(time + particles[i].y * 0.01);
          
          ctx.beginPath();
          ctx.arc(particles[i].x, particles[i].y, particles[i].size + wave * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 0, 255, ${particles[i].opacity * 0.6})`;
          ctx.fill();
        }
      }
    };

    // Quantum field fluctuations
    const createQuantumField = () => {
      if (variant === 'quantum-field') {
        const time = Date.now() * 0.0005;
        for (let x = 0; x < canvas.width; x += 20) {
          for (let y = 0; y < canvas.height; y += 20) {
            const fluctuation = Math.sin(time + x * 0.02) * Math.cos(time + y * 0.02);
            const intensity = Math.abs(fluctuation) * 0.3;
            
            if (intensity > 0.1) {
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 255, 255, ${intensity})`;
              ctx.fill();
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity * 0.3})`;
        ctx.fill();
      });

      // Create special effects based on variant
      createEntanglement();
      createNeuralConnections();
      createHolographicPatterns();
      createQuantumField();

      // Add floating geometric shapes for quantum variant
      if (variant === 'quantum-advanced' || variant === 'quantum-field') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width * 0.5 + Math.cos(time + i) * 200;
          const y = canvas.height * 0.5 + Math.sin(time + i) * 200;
          const size = 20 + Math.sin(time * 2 + i) * 10;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.6 + Math.sin(time + i) * 0.4})`;
          ctx.lineWidth = 2;
          ctx.rect(x - size/2, y - size/2, size, size);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional layered effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating geometric elements */}
      {variant === 'quantum-advanced' && (
        <div className="fixed inset-0 pointer-events-none z-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg transform rotate-45 animate-pulse" />
          <div className="absolute top-40 right-40 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-40 w-28 h-28 border border-blue-400/30 transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      )}

      {/* Holographic grid */}
      {variant === 'holographic-advanced' && (
        <div className="fixed inset-0 pointer-events-none z-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
        </div>
      )}
    </div>
  );
}