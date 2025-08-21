import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic';
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  intensity = 1,
  theme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      life: number;
      maxLife: number;
      type: 'quantum' | 'neural' | 'holographic';
    }> = [];

    // Quantum entanglement lines
    const entanglementLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
      life: number;
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      activation: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          type: ['quantum', 'neural', 'holographic'][Math.floor(Math.random() * 3)] as any
        });
      }
    };

    // Initialize neural network
    const initNeuralNetwork = () => {
      for (let i = 0; i < 20 * intensity; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          activation: Math.random()
        });
      }

      // Create connections
      neuralNodes.forEach((node, i) => {
        const numConnections = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
          life: Math.random() * 100
        });
      }
    };

    initParticles();
    initNeuralNetwork();
    initEntanglementLines();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (particle.type === 'quantum') {
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.shadowColor = 'cyan';
          ctx.shadowBlur = 10;
        } else if (particle.type === 'neural') {
          ctx.fillStyle = `rgba(255, 0, 255, ${alpha})`;
          ctx.shadowColor = 'magenta';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          ctx.shadowColor = 'lime';
          ctx.shadowBlur = 6;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Draw entanglement lines
      entanglementLines.forEach((line, index) => {
        line.life--;
        const alpha = line.life / 100;
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 5;
        
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        ctx.restore();

        if (line.life <= 0) {
          entanglementLines.splice(index, 1);
        }
      });

      // Draw neural network
      neuralNodes.forEach((node, i) => {
        node.activation = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
        
        // Draw connections
        node.connections.forEach(connectionIndex => {
          const targetNode = neuralNodes[connectionIndex];
          if (targetNode) {
            const strength = (node.activation + targetNode.activation) / 2;
            ctx.save();
            ctx.globalAlpha = strength * 0.4;
            ctx.strokeStyle = `rgba(255, 0, 255, ${strength})`;
            ctx.lineWidth = strength * 2;
            ctx.shadowColor = 'magenta';
            ctx.shadowBlur = 3;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
            ctx.restore();
          }
        });

        // Draw node
        ctx.save();
        ctx.globalAlpha = node.activation;
        ctx.fillStyle = `rgba(255, 0, 255, ${node.activation})`;
        ctx.shadowColor = 'magenta';
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Add new particles
      if (particles.length < 100 * intensity) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: 100,
          maxLife: 100,
          type: ['quantum', 'neural', 'holographic'][Math.floor(Math.random() * 3)] as any
        });
      }

      // Add new entanglement lines
      if (entanglementLines.length < 15 * intensity) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
          life: 100
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity]);

  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* HTML Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: `blur(${0.5 * intensity}px)` }}
      />
      
      {/* Framer Motion Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: -1,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 15,
            repeat: -1,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
          animate={{
            y: ['-100%', '100%']
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Holographic matrix effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Cyberpunk grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]"
          style={{
            backgroundSize: '50px 50px'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;