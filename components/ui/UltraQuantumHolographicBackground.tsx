import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'neural-network' | 'quantum-field' | 'holographic' | 'cyberpunk' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetwork?: boolean;
  enableCosmicWaves?: boolean;
  enableFloatingElements?: boolean;
  children: React.ReactNode;
}

const UltraQuantumHolographicBackground = ({
  intensity = 'high',
  colorScheme = 'neural-network',
  particleCount = 300,
  animationSpeed = 2,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralNetwork = true,
  enableCosmicWaves = true,
  enableFloatingElements = true,
  children
}: UltraQuantumHolographicBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Intensity multipliers
  const intensityMultipliers = {
    low: { particles: 0.5, speed: 0.5, effects: 0.3 },
    medium: { particles: 0.8, speed: 0.8, effects: 0.6 },
    high: { particles: 1.0, speed: 1.0, effects: 0.8 },
    extreme: { particles: 1.5, speed: 1.5, effects: 1.0 }
  };

  const multiplier = intensityMultipliers[intensity];

  // Color schemes
  const colorSchemes: Record<string, any> = {
    'neural-network': {
      primary: '#8b5cf6',
      secondary: '#06b6d4',
      accent: '#ec4899',
      background: 'rgba(15, 23, 42, 0.95)',
      particles: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981']
    },
    'quantum-field': {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
      background: 'rgba(15, 23, 42, 0.95)',
      particles: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']
    },
    'holographic': {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      background: 'rgba(15, 23, 42, 0.95)',
      particles: ['#ec4899', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981']
    },
    'cyberpunk': {
      primary: '#f59e0b',
      secondary: '#ef4444',
      accent: '#10b981',
      background: 'rgba(15, 23, 42, 0.95)',
      particles: ['#f59e0b', '#ef4444', '#10b981', '#8b5cf6', '#06b6d4']
    },
    'cosmic': {
      primary: '#8b5cf6',
      secondary: '#06b6d4',
      accent: '#ec4899',
      background: 'rgba(15, 23, 42, 0.95)',
      particles: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981']
    }
  };

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      setWindowSize({ width: innerWidth, height: innerHeight });
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
      color: string;
      life: number;
      maxLife: number;
      type: 'particle' | 'quantum' | 'holographic' | 'neural';
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount * multiplier.particles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed * multiplier.speed,
        vy: (Math.random() - 0.5) * 2 * animationSpeed * multiplier.speed,
        size: Math.random() * 3 + 1,
        color: colors.particles[Math.floor(Math.random() * colors.particles.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'particle'
      });
    }

    // Neural network nodes
    const neuralNodes: Array<{ x: number; y: number; connections: number[] }> = [];
    if (enableNeuralNetwork) {
      for (let i = 0; i < 20; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: []
        });
      }
      // Create connections
      neuralNodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    }

    // Floating geometric elements
    const floatingElements: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: 'triangle' | 'square' | 'circle' | 'hexagon';
      color: string;
    }> = [];

    if (enableFloatingElements) {
      for (let i = 0; i < 15; i++) {
        floatingElements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 20,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: ['triangle', 'square', 'circle', 'hexagon'][Math.floor(Math.random() * 4)] as any,
          color: colors.particles[Math.floor(Math.random() * colors.particles.length)]
        });
      }
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'quantum') {
          // Quantum particles with wave effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * (1 + Math.sin(Date.now() * 0.01) * 0.3), 0, Math.PI * 2);
          ctx.fill();
          
          // Wave rings
          for (let i = 1; i <= 3; i++) {
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = alpha * (0.3 / i);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * i * 2, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (particle.type === 'holographic') {
          // Holographic particles with glitch effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Glitch effect
          if (Math.random() > 0.95) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.globalAlpha = alpha * 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size, particle.y);
            ctx.lineTo(particle.x + particle.size, particle.y);
            ctx.stroke();
          }
        } else {
          // Regular particles
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw neural network
      if (enableNeuralNetwork) {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        
        neuralNodes.forEach((node, i) => {
          node.connections.forEach(targetIndex => {
            const target = neuralNodes[targetIndex];
            if (target) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          });
        });

        // Draw nodes
        neuralNodes.forEach(node => {
          ctx.fillStyle = colors.secondary;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw floating geometric elements
      if (enableFloatingElements) {
        floatingElements.forEach(element => {
          element.rotation += element.rotationSpeed;
          
          ctx.save();
          ctx.translate(element.x, element.y);
          ctx.rotate(element.rotation);
          ctx.globalAlpha = 0.1;
          ctx.strokeStyle = element.color;
          ctx.lineWidth = 2;
          
          switch (element.type) {
            case 'triangle':
              ctx.beginPath();
              ctx.moveTo(0, -element.size / 2);
              ctx.lineTo(element.size / 2, element.size / 2);
              ctx.lineTo(-element.size / 2, element.size / 2);
              ctx.closePath();
              ctx.stroke();
              break;
            case 'square':
              ctx.strokeRect(-element.size / 2, -element.size / 2, element.size, element.size);
              break;
            case 'circle':
              ctx.beginPath();
              ctx.arc(0, 0, element.size / 2, 0, Math.PI * 2);
              ctx.stroke();
              break;
            case 'hexagon':
              ctx.beginPath();
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const x = Math.cos(angle) * element.size / 2;
                const y = Math.sin(angle) * element.size / 2;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              ctx.stroke();
              break;
          }
          ctx.restore();
        });
      }

      // Draw cosmic waves
      if (enableCosmicWaves) {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
        
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + 
                     Math.sin(x * 0.01 + time + i) * 50 +
                     Math.sin(x * 0.005 + time * 0.5) * 30;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      // Draw holographic grid
      if (enableHolographic) {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.1;
        
        const gridSize = 50;
        const offset = (Date.now() * 0.1) % gridSize;
        
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
      }

      // Mouse interaction
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        const mouseRadius = 100;
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Repel particles from mouse
        particles.forEach(particle => {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius && distance > 0) {
            const force = (mouseRadius - distance) / mouseRadius;
            particle.vx -= (dx / distance) * force * 0.5;
            particle.vy -= (dy / distance) * force * 0.5;
          }
        });
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetwork, enableCosmicWaves, enableFloatingElements, colors, multiplier]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
        
        {/* Animated light rays */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scaleY: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scaleY: [1.2, 0.8, 1.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-4 h-4 bg-purple-400 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraQuantumHolographicBackground;