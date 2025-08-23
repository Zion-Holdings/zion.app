import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface RevolutionaryFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
  intensity?: number;
}

const RevolutionaryFuturisticBackground: React.FC<RevolutionaryFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum',
  intensity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      connections: number[];
      pulse: number;
    }> = [];

    // Holographic grid
    const gridSize = 50;
    const gridPoints: Array<{ x: number; y: number; intensity: number }> = [];

    // Initialize particles
    for (let i = 0; i < 100 * intensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Initialize neural nodes
    for (let i = 0; i < 20 * intensity; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Create neural connections
    nodes.forEach((node, i) => {
      const connections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    // Initialize grid points
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        gridPoints.push({
          x,
          y,
          intensity: Math.random()
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();

        // Quantum entanglement effect
        if (variant === 'quantum') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = (particle.life / particle.maxLife) * 0.3;
          ctx.stroke();
        }
      });

      // Draw neural network
      if (variant === 'neural') {
        nodes.forEach((node, i) => {
          node.pulse += 0.02;
          
          // Draw connections
          node.connections.forEach(connectionIndex => {
            const target = nodes[connectionIndex];
            const distance = Math.sqrt(
              Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
            );
            
            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * Math.sin(node.pulse) + 0.3})`;
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          });

          // Draw nodes
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${0.8 + 0.2 * Math.sin(node.pulse)})`;
          ctx.fill();
        });
      }

      // Draw holographic grid
      if (variant === 'holographic') {
        gridPoints.forEach(point => {
          point.intensity = Math.sin(Date.now() * 0.001 + point.x * 0.01 + point.y * 0.01) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${point.intensity * 0.6})`;
          ctx.fill();
        });
      }

      // Draw cyberpunk effects
      if (variant === 'cyberpunk') {
        // Scan lines
        for (let y = 0; y < canvas.height; y += 4) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.strokeStyle = `rgba(236, 73, 153, ${0.1 + 0.1 * Math.sin(Date.now() * 0.01 + y * 0.1)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Glitch effect
        if (Math.random() < 0.01) {
          ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      // Draw space effects
      if (variant === 'space') {
        // Stars
        for (let i = 0; i < 200; i++) {
          const x = (i * 12345) % canvas.width;
          const y = (i * 67890) % canvas.height;
          const brightness = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`;
          ctx.fill();
        }

        // Nebula effect
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.02)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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

  const backgroundVariants = {
    quantum: 'from-purple-900 via-blue-900 to-cyan-900',
    holographic: 'from-indigo-900 via-purple-900 to-pink-900',
    neural: 'from-green-900 via-emerald-900 to-teal-900',
    cyberpunk: 'from-red-900 via-pink-900 to-purple-900',
    space: 'from-black via-gray-900 to-blue-900'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundVariants[variant]} opacity-80`} />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
        />
        
        {/* Additional overlay effects */}
        <div className="absolute inset-0">
          {/* Quantum field effect */}
          {variant === 'quantum' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
          )}
          
          {/* Holographic matrix */}
          {variant === 'holographic' && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] animate-spin" style={{ animationDuration: '20s' }} />
          )}
          
          {/* Neural pulse */}
          {variant === 'neural' && (
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-emerald-500/5 animate-pulse" />
          )}
          
          {/* Cyberpunk scan */}
          {variant === 'cyberpunk' && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent animate-pulse" />
          )}
          
          {/* Space nebula */}
          {variant === 'space' && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)] animate-pulse" style={{ animationDuration: '15s' }} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
        animate={{
          rotate: [45, 405],
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
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-12"
        animate={{
          rotate: [12, 372],
          x: [0, 30, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default RevolutionaryFuturisticBackground;