import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium',
  className = ''
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
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    const createParticle = (type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') => {
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        holographic: ['#ff00ff', '#00ff00', '#ffff00', '#00ffff'],
        neural: ['#ff8000', '#8000ff', '#00ff80', '#ff0080'],
        cyberpunk: ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
      };

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        type,
        life: 1,
        maxLife: Math.random() * 100 + 50
      };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = intensity === 'extreme' ? 200 : intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const types: Array<'quantum' | 'holographic' | 'neural' | 'cyberpunk'> = ['quantum', 'holographic', 'neural', 'cyberpunk'];
        particles.push(createParticle(types[Math.floor(Math.random() * types.length)]));
      }
    };

    const drawQuantumField = () => {
      ctx.save();
      ctx.globalAlpha = 0.1;
      
      for (let i = 0; i < canvas.width; i += 20) {
        for (let j = 0; j < canvas.height; j += 20) {
          const time = Date.now() * 0.001;
          const wave = Math.sin(i * 0.01 + time) * Math.cos(j * 0.01 + time);
          const intensity = (wave + 1) / 2;
          
          ctx.fillStyle = `rgba(0, 255, 255, ${intensity * 0.3})`;
          ctx.fillRect(i, j, 20, 20);
        }
      }
      
      ctx.restore();
    };

    const drawHolographicGrid = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
      
      const gridSize = 40;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      
      for (let j = 0; j < canvas.height; j += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }
      
      // Animated diagonal lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.4)';
      for (let i = 0; i < canvas.width + canvas.height; i += 60) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - canvas.height, canvas.height);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawNeuralNetwork = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 128, 0, 0.3)';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.15;
      
      const nodes: Array<{x: number, y: number, connections: number[]}> = [];
      const nodeCount = 15;
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: []
        });
      }
      
      // Create connections
      for (let i = 0; i < nodeCount; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodeCount);
          if (target !== i && !nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target);
          }
        }
      }
      
      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });
      
      // Draw nodes
      ctx.fillStyle = 'rgba(255, 128, 0, 0.6)';
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const drawCyberpunkElements = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.2;
      
      const time = Date.now() * 0.001;
      
      // Scanning lines
      for (let i = 0; i < canvas.height; i += 30) {
        const offset = (i + time * 50) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, offset);
        ctx.lineTo(canvas.width, offset);
        ctx.stroke();
      }
      
      // Digital rain effect
      ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
      ctx.font = '12px monospace';
      for (let i = 0; i < canvas.width; i += 20) {
        const char = String.fromCharCode(0x30A0 + Math.random() * 96);
        const y = (time * 100 + i * 0.5) % canvas.height;
        ctx.fillText(char, i, y);
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background effects based on variant
      if (variant.includes('quantum')) drawQuantumField();
      if (variant.includes('holographic')) drawHolographicGrid();
      if (variant.includes('neural')) drawNeuralNetwork();
      if (variant.includes('cyberpunk')) drawCyberpunkElements();
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave function
          const wave = Math.sin(particle.life * 0.1) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * wave, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'holographic') {
          // Holographic particle with interference pattern
          const interference = Math.sin(particle.life * 0.05) * Math.cos(particle.life * 0.03);
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * (1 + interference * 0.3), 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'neural') {
          // Neural particle with synaptic connections
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connections to nearby particles
          particles.forEach((other, otherIndex) => {
            if (index !== otherIndex) {
              const distance = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2);
              if (distance < 50) {
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = (50 - distance) / 50 * 0.3;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          });
        } else {
          // Cyberpunk particle with digital effects
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }
        
        ctx.restore();
        
        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle(particle.type);
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-20 w-28 h-28 border border-green-400/30 rounded-lg"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Quantum entanglement effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;