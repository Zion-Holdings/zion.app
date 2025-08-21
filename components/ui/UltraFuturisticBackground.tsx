import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
  children, 
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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neural' | 'cyber';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
          type: ['quantum', 'neural', 'cyber'][Math.floor(Math.random() * 3)] as 'quantum' | 'neural' | 'cyber'
        });
      }
    };

    // Neural network connections
    const connections: Array<{ from: number; to: number; opacity: number }> = [];
    const initConnections = () => {
      connections.length = 0;
      for (let i = 0; i < 50; i++) {
        connections.push({
          from: Math.floor(Math.random() * particles.length),
          to: Math.floor(Math.random() * particles.length),
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    // Quantum wave function
    let waveOffset = 0;
    const drawQuantumWaves = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin((x + waveOffset + i * 100) * 0.01) * 100 +
            Math.sin((x + waveOffset + i * 50) * 0.02) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();
      waveOffset += 0.5;
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      const offset = Date.now() * 0.001;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(offset + x * 0.01) * 5, 0);
        ctx.lineTo(x + Math.sin(offset + x * 0.01) * 5, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(offset + y * 0.01) * 5);
        ctx.lineTo(canvas.width, y + Math.cos(offset + y * 0.01) * 5);
        ctx.stroke();
      }
      ctx.restore();
    };

    // Energy fields
    const drawEnergyFields = () => {
      const time = Date.now() * 0.001;
      const centers = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8 }
      ];

      centers.forEach((center, index) => {
        const radius = 100 + Math.sin(time + index) * 30;
        const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${0.1 + Math.sin(time + index) * 0.05})`);
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.save();
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background layers
      drawHolographicGrid();
      drawQuantumWaves();
      drawEnergyFields();
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'quantum') {
          // Quantum particles with wave function
          const wave = Math.sin(Date.now() * 0.01 + index) * 2;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x + wave, particle.y + wave, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'neural') {
          // Neural network nodes
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Neural connections
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x + particle.vx * 10, particle.y + particle.vy * 10);
          ctx.stroke();
        } else {
          // Cyber particles
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }
        
        ctx.restore();
      });
      
      // Draw connections
      connections.forEach(connection => {
        const from = particles[connection.from];
        const to = particles[connection.to];
        if (from && to) {
          const distance = Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
          if (distance < 150) {
            ctx.save();
            ctx.strokeStyle = `rgba(0, 255, 255, ${connection.opacity * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });
      
      // Data streams
      const drawDataStreams = () => {
        ctx.save();
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 5; i++) {
          const y = (canvas.height / 6) * (i + 1);
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 5) {
            const offset = Math.sin((x + Date.now() * 0.01 + i * 100) * 0.01) * 20;
            if (x === 0) {
              ctx.moveTo(x, y + offset);
            } else {
              ctx.lineTo(x, y + offset);
            }
          }
          ctx.stroke();
        }
        ctx.restore();
      };
      
      drawDataStreams();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    initConnections();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 transform rotate-45 animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-green-400/10 to-blue-400/10 transform rotate-12 animate-pulse"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-pink-500/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;