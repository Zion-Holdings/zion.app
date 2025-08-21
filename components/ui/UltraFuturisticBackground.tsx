import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium'
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
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      activation: number;
      pulse: number;
    }> = [];

    // Initialize neural network
    for (let i = 0; i < 50; i++) {
      neuralNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        activation: Math.random(),
        pulse: 0
      });
    }

    // Create connections between nodes
    neuralNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * neuralNodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Holographic grid
    const gridSize = 50;
    const gridOffset = { x: 0, y: 0 };

    // Quantum entanglement effect
    let entanglementPhase = 0;
    let holographicLayers = 0;

    const createParticle = (type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') => {
      const colors = {
        quantum: ['#8B5CF6', '#06B6D4', '#3B82F6', '#8B5CF6'],
        holographic: ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
        neural: ['#06B6D4', '#10B981', '#F59E0B', '#EF4444'],
        cyberpunk: ['#EF4444', '#F59E0B', '#10B981', '#06B6D4']
      };

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        life: 1,
        maxLife: Math.random() * 100 + 50,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        type
      });
    };

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      createParticle(['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update grid offset for holographic effect
      gridOffset.x += 0.5;
      gridOffset.y += 0.3;
      holographicLayers += 0.02;
      entanglementPhase += 0.05;

      // Draw holographic grid
      if (variant.includes('holographic')) {
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 + Math.sin(holographicLayers) * 0.2})`;
        ctx.lineWidth = 1;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x + gridOffset.x, 0);
          ctx.lineTo(x + gridOffset.x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y + gridOffset.y);
          ctx.lineTo(canvas.width, y + gridOffset.y);
          ctx.stroke();
        }
      }

      // Draw neural network
      if (variant.includes('neural')) {
        neuralNodes.forEach((node, i) => {
          node.activation = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
          node.pulse += 0.1;

          // Draw connections
          node.connections.forEach(connectionIndex => {
            const targetNode = neuralNodes[connectionIndex];
            const strength = (node.activation + targetNode.activation) / 2;
            
            ctx.strokeStyle = `rgba(6, 182, 212, ${strength * 0.6})`;
            ctx.lineWidth = strength * 3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          });

          // Draw nodes
          const pulseSize = Math.sin(node.pulse) * 5;
          ctx.fillStyle = `rgba(6, 182, 212, ${node.activation})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3 + pulseSize, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Quantum entanglement effect
        if (variant.includes('quantum')) {
          particle.vx += Math.sin(entanglementPhase + index) * 0.1;
          particle.vy += Math.cos(entanglementPhase + index) * 0.1;
        }

        // Holographic effect
        if (variant.includes('holographic')) {
          particle.size = Math.sin(holographicLayers + index) * 2 + 2;
        }

        // Cyberpunk effect
        if (variant.includes('cyberpunk')) {
          particle.vx *= 0.99;
          particle.vy *= 0.99;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        if (particle.life > 0) {
          ctx.globalAlpha = particle.life / particle.maxLife;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw particle trail
          if (variant.includes('quantum')) {
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = particle.size * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
            ctx.stroke();
          }
        } else {
          // Replace dead particle
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            life: Math.random() * 100 + 50,
            maxLife: Math.random() * 100 + 50,
            color: particle.color,
            type: particle.type
          };
        }
      });

      // Draw quantum entanglement lines
      if (variant.includes('quantum-entanglement')) {
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + Math.sin(entanglementPhase) * 0.2})`;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < particles.length; i += 2) {
          if (i + 1 < particles.length) {
            const p1 = particles[i];
            const p2 = particles[i + 1];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            
            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw holographic matrix
      if (variant.includes('holographic-matrix')) {
        ctx.fillStyle = `rgba(16, 185, 129, ${0.1 + Math.sin(holographicLayers) * 0.05})`;
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 20; i++) {
          const x = (i * 100 + gridOffset.x) % canvas.width;
          const y = (i * 50 + gridOffset.y) % canvas.height;
          const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
          ctx.fillText(char, x, y);
        }
      }

      // Draw cyberpunk glitch effect
      if (variant.includes('cyberpunk')) {
        if (Math.random() < 0.01) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

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
  }, [variant]);

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const intensityClasses = {
    low: 'opacity-30',
    medium: 'opacity-60',
    high: 'opacity-90'
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 w-full h-full pointer-events-none ${intensityClasses[intensity]} transition-opacity duration-1000`}
        style={{ zIndex: -1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-blue-900/20 pointer-events-none" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Quantum Circles */}
        {variant.includes('quantum') && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border border-purple-400/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-cyan-400/30 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Holographic Squares */}
        {variant.includes('holographic') && (
          <>
            <motion.div
              className="absolute bottom-32 left-32 w-20 h-20 border border-green-400/40 rotate-45"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [45, 225, 45],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-32 right-20 w-16 h-16 border border-yellow-400/40 rotate-45"
              animate={{
                scale: [1.5, 1, 1.5],
                rotate: [225, 45, 225],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Neural Network Lines */}
        {variant.includes('neural') && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}

        {/* Cyberpunk Elements */}
        {variant.includes('cyberpunk') && (
          <>
            <motion.div
              className="absolute top-1/2 left-10 w-2 h-20 bg-red-400/60"
              animate={{
                height: [20, 40, 20],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/2 right-10 w-2 h-16 bg-yellow-400/60"
              animate={{
                height: [16, 32, 16],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;