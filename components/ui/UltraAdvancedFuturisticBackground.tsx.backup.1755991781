import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
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
  const particlesRef = useRef<any[]>([]);
=======
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum-holographic-advanced' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
    let animationFrameId: number;
    let particles: Array<{
=======
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
<<<<<<< HEAD
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') => {
=======
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Create initial particles
    const createParticle = (x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') => {
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        holographic: ['#ff00ff', '#00ff00', '#ffff00', '#00ffff'],
        neural: ['#ff8000', '#8000ff', '#00ff80', '#ff0080'],
<<<<<<< HEAD
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
=======
        cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff8000']
      };

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        life: 1,
        maxLife: Math.random() * 100 + 50,
        type
      };
    };

    // Initialize particles
    for (let i = 0; i < 200; i++) {
      particles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
      ));
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        if (particle.life > 0) {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // Replace dead particle
          particles[index] = createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any
          );
        }
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 2) {
        if (particles[i] && particles[i + 1] && particles[i].life > 0 && particles[i + 1].life > 0) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[i + 1].x, 2) + 
            Math.pow(particles[i].y - particles[i + 1].y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
            ctx.stroke();
          }
        }
      }

      // Draw holographic grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
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

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 3) {
        if (particles[i] && particles[i + 1] && particles[i + 2] && 
            particles[i].life > 0 && particles[i + 1].life > 0 && particles[i + 2].life > 0) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.lineTo(particles[i + 2].x, particles[i + 2].y);
          ctx.closePath();
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
    };

<<<<<<< HEAD
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
=======
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  const backgroundVariants = {
    quantum: 'from-cyan-500 via-blue-600 to-purple-700',
    holographic: 'from-purple-500 via-pink-600 to-rose-700',
    cyberpunk: 'from-red-500 via-orange-600 to-yellow-700',
    neural: 'from-green-500 via-emerald-600 to-teal-700',
    'quantum-holographic': 'from-cyan-500 via-purple-600 to-pink-700',
    'quantum-advanced': 'from-cyan-500 via-blue-600 to-indigo-700',
    'holographic-advanced': 'from-purple-500 via-violet-600 to-indigo-700',
    'neural-quantum': 'from-green-500 via-cyan-600 to-blue-700',
    'quantum-cyberpunk': 'from-cyan-500 via-red-600 to-orange-700',
    'holographic-neural': 'from-purple-500 via-green-600 to-cyan-700',
    'quantum-holographic-advanced': 'from-cyan-500 via-purple-600 to-pink-700',
    'quantum-matrix': 'from-cyan-500 via-green-600 to-blue-700',
    'neural-cyberpunk': 'from-green-500 via-red-600 to-orange-700',
    'holographic-quantum': 'from-purple-500 via-cyan-600 to-blue-700',
    'quantum-neural-advanced': 'from-cyan-500 via-green-600 to-emerald-700',
    'cyberpunk-holographic': 'from-red-500 via-purple-600 to-pink-700',
    'quantum-space': 'from-cyan-500 via-blue-600 to-indigo-700',
    'ai-futuristic': 'from-purple-500 via-cyan-600 to-green-700',
    'quantum-entanglement': 'from-cyan-500 via-violet-600 to-purple-700',
    'holographic-matrix': 'from-purple-500 via-green-600 to-cyan-700',
    'neural-quantum-cyberpunk': 'from-green-500 via-cyan-600 to-red-700'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
      />
      
      {/* Quantum Energy Field */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-500/5 to-blue-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/5 to-yellow-500/5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Holographic Grid Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Neural Network Patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Quantum Entanglement Effects */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
          animate={{
            scale: [1, 1.2, 1],
<<<<<<< HEAD
            opacity: [0.3, 0.6, 0.3]
=======
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
<<<<<<< HEAD
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
=======
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
<<<<<<< HEAD
        
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
=======
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Cyberpunk Energy Lines */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{
            duration: 6,
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
<<<<<<< HEAD
      
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
            ease: "linear"
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
=======

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Particle Trails */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Holographic Data Streams */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-20 bg-gradient-to-b from-purple-400 to-transparent rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, (typeof window !== 'undefined' ? window.innerHeight : 800) + 20],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a2d0
    </div>
  );
}