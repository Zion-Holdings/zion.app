import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'space';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium',
  theme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const colors = {
      quantum: ['#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F0ABFC'],
      cyberpunk: ['#EF4444', '#F97316', '#EAB308', '#10B981', '#3B82F6'],
      holographic: ['#06B6D4', '#0891B2', '#0EA5E9', '#38BDF8', '#7DD3FC'],
      neural: ['#10B981', '#059669', '#047857', '#065F46', '#064E3B'],
      space: ['#1E40AF', '#1E3A8A', '#1E1B4B', '#312E81', '#3730A3']
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
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[theme][Math.floor(Math.random() * colors[theme].length)],
        type: ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
      });
    }

    // Quantum entanglement effect
    const createEntanglement = (x: number, y: number) => {
      const entanglementCount = 3;
      for (let i = 0; i < entanglementCount; i++) {
        const angle = (i / entanglementCount) * Math.PI * 2;
        const radius = 50 + Math.random() * 100;
        const ex = x + Math.cos(angle) * radius;
        const ey = y + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(ex, ey, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.6 * Math.random()})`;
        ctx.fill();
        
        // Draw entanglement lines
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * Math.random()})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // Neural network connections
    const drawNeuralConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      const gridSize = 50;
      const gridOpacity = 0.1;
      
      ctx.strokeStyle = `rgba(6, 182, 212, ${gridOpacity})`;
      ctx.lineWidth = 1;
      
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
    };

    // Cyberpunk energy waves
    const drawCyberpunkWaves = () => {
      const time = Date.now() * 0.001;
      const waveCount = 3;
      
      for (let i = 0; i < waveCount; i++) {
        const waveOffset = (i / waveCount) * Math.PI * 2;
        const waveHeight = 20 + Math.sin(time + waveOffset) * 10;
        
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + waveHeight);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
                    Math.sin((x / canvas.width) * Math.PI * 4 + time + waveOffset) * waveHeight +
                    Math.sin((x / canvas.width) * Math.PI * 2 + time * 2) * (waveHeight / 2);
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    // Space-time distortion effect
    const drawSpaceTimeDistortion = () => {
      const time = Date.now() * 0.0005;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 5; i++) {
        const radius = 100 + i * 80 + Math.sin(time + i) * 20;
        const opacity = 0.1 - i * 0.02;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background effects based on theme
      if (theme === 'quantum') {
        drawSpaceTimeDistortion();
      } else if (theme === 'cyberpunk') {
        drawCyberpunkWaves();
      } else if (theme === 'holographic') {
        drawHolographicGrid();
      } else if (theme === 'neural') {
        drawNeuralConnections();
      } else if (theme === 'space') {
        drawSpaceTimeDistortion();
        drawHolographicGrid();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
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
        
        // Create quantum entanglement occasionally
        if (Math.random() < 0.001) {
          createEntanglement(particle.x, particle.y);
        }
      });

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
  }, [intensity, theme]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/30 transform rotate-45"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 border border-emerald-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Quantum energy field */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;