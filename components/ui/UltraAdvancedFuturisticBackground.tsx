import React, { useEffect, useRef } from 'react';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-ai';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  intensity = 'high',
  colorScheme = 'quantum-fusion',
  particleCount = 300,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neon' | 'fusion';
    }> = [];

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color schemes
    const colorSchemes = {
      'quantum-fusion': {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        quantum: '#00ff88',
        holographic: '#ff0088'
      },
      'neon-cyber': {
        primary: '#00ff41',
        secondary: '#ff0080',
        accent: '#00d4ff',
        quantum: '#ff6b35',
        holographic: '#9d4edd'
      },
      'holographic': {
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ffff00',
        quantum: '#00ff88',
        holographic: '#ff0088'
      },
      'quantum-ai': {
        primary: '#00d4ff',
        secondary: '#ff6b35',
        accent: '#9d4edd',
        quantum: '#00ff88',
        holographic: '#ff0088'
      }
    };

    const colors = colorSchemes[colorScheme];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'quantum' : 
                    Math.random() > 0.5 ? 'holographic' : 
                    Math.random() > 0.3 ? 'neon' : 'fusion';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: type === 'quantum' ? colors.quantum :
                 type === 'holographic' ? colors.holographic :
                 type === 'neon' ? colors.primary : colors.secondary,
          type
        });
      }
    };

    // Quantum entanglement effect
    const createQuantumEntanglement = () => {
      if (!enableQuantumEffects) return;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && particles[i].type === 'quantum' && particles[j].type === 'quantum') {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Holographic grid effect
    const createHolographicGrid = () => {
      if (!enableHolographic) return;
      
      const gridSize = 50;
      const offset = (Date.now() * 0.001) % gridSize;
      
      ctx.strokeStyle = `rgba(255, 0, 136, 0.1)`;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Neural network effect
    const createNeuralNetwork = () => {
      if (!enableQuantumEffects) return;
      
      const nodes = particles.filter(p => p.type === 'quantum' || p.type === 'holographic');
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const strength = 1 - (distance / 150);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * strength})`;
            ctx.lineWidth = strength * 2;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create effects
      createHolographicGrid();
      createQuantumEntanglement();
      createNeuralNetwork();
      
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
        
        // Create glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Add sparkle effect for holographic particles
        if (particle.type === 'holographic' && Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
      
      // Add intensity-based effects
      if (intensity === 'high') {
        // Add energy waves
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const waveRadius = (time * 50 + i * 100) % (Math.max(canvas.width, canvas.height) * 2);
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - waveRadius / (Math.max(canvas.width, canvas.height) * 2))})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-green-500/20 rounded-full animate-pulse delay-500"></div>
        
        {/* Quantum particles */}
        {enableQuantumEffects && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
          </>
        )}
        
        {/* Holographic elements */}
        {enableHolographic && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-500/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </>
        )}
      </div>
      
      {children}
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;