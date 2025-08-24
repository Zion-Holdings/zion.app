import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraQuantumHolographicMatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'holographic-matrix' | 'neural-network' | 'cyberpunk-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableMatrixFlow?: boolean;
  enableNeuralPulse?: boolean;
}

export default function UltraQuantumHolographicMatrixBackground({
  intensity = 'high',
  colorScheme = 'quantum-fusion',
  particleCount = 300,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableMatrixFlow = true,
  enableNeuralPulse = true
}: UltraQuantumHolographicMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Color schemes
  const colorSchemes = {
    'quantum-fusion': {
      primary: '#00ffff',
      secondary: '#8b5cf6',
      tertiary: '#ec4899',
      accent: '#10b981',
      background: 'rgba(0, 0, 0, 0.95)',
      glow: 'rgba(0, 255, 255, 0.3)',
      matrix: 'rgba(139, 92, 246, 0.2)'
    },
    'holographic-matrix': {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      tertiary: '#00ffff',
      accent: '#f59e0b',
      background: 'rgba(0, 0, 0, 0.95)',
      glow: 'rgba(139, 92, 246, 0.4)',
      matrix: 'rgba(236, 73, 153, 0.25)'
    },
    'neural-network': {
      primary: '#10b981',
      secondary: '#00ffff',
      tertiary: '#8b5cf6',
      accent: '#f59e0b',
      background: 'rgba(0, 0, 0, 0.95)',
      glow: 'rgba(16, 185, 129, 0.35)',
      matrix: 'rgba(0, 255, 255, 0.2)'
    },
    'cyberpunk-fusion': {
      primary: '#ec4899',
      secondary: '#f59e0b',
      tertiary: '#00ffff',
      accent: '#8b5cf6',
      background: 'rgba(0, 0, 0, 0.95)',
      glow: 'rgba(236, 73, 153, 0.4)',
      matrix: 'rgba(245, 158, 11, 0.25)'
    }
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, extreme: 2.5 }[intensity];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / dimensions.width,
        y: e.clientY / dimensions.height
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dimensions]);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'quantum' | 'holographic' | 'matrix' | 'neural';
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 2 * animationSpeed,
        vy: (Math.random() - 0.5) * 2 * animationSpeed,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        type: ['quantum', 'holographic', 'matrix', 'neural'][Math.floor(Math.random() * 4)] as any,
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Matrix flow effect
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixStreams: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
      opacity: number;
    }> = [];

    for (let i = 0; i < 20; i++) {
      matrixStreams.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        speed: Math.random() * 2 + 1,
        chars: Array.from({ length: 20 }, () => matrixChars[Math.floor(Math.random() * matrixChars.length)]),
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Neural network connections
    const neuralNodes: Array<{ x: number; y: number; connections: number[] }> = [];
    for (let i = 0; i < 15; i++) {
      neuralNodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        connections: []
      });
    }

    // Create neural connections
    neuralNodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * neuralNodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016 * animationSpeed;
      
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life += 1;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * dimensions.width;
          particle.y = Math.random() * dimensions.height;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        
        switch (particle.type) {
          case 'quantum':
            ctx.fillStyle = colors.primary;
            ctx.shadowColor = colors.primary;
            ctx.shadowBlur = 20 * intensityMultiplier;
            break;
          case 'holographic':
            ctx.fillStyle = colors.secondary;
            ctx.shadowColor = colors.secondary;
            ctx.shadowBlur = 15 * intensityMultiplier;
            break;
          case 'matrix':
            ctx.fillStyle = colors.tertiary;
            ctx.shadowColor = colors.tertiary;
            ctx.shadowBlur = 25 * intensityMultiplier;
            break;
          case 'neural':
            ctx.fillStyle = colors.accent;
            ctx.shadowColor = colors.accent;
            ctx.shadowBlur = 18 * intensityMultiplier;
            break;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw matrix flow
      if (enableMatrixFlow) {
        matrixStreams.forEach(stream => {
          ctx.save();
          ctx.globalAlpha = stream.opacity;
          ctx.fillStyle = colors.matrix;
          ctx.font = '16px monospace';
          
          stream.chars.forEach((char, i) => {
            const y = stream.y - i * 20;
            if (y > 0) {
              ctx.fillText(char, stream.x, y);
            }
          });
          
          stream.y += stream.speed;
          if (stream.y > dimensions.height + 400) {
            stream.y = -200;
            stream.x = Math.random() * dimensions.width;
          }
          ctx.restore();
        });
      }

      // Draw neural network
      if (enableNeuralPulse) {
        ctx.save();
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.6;

        neuralNodes.forEach((node, i) => {
          node.connections.forEach(targetIndex => {
            const target = neuralNodes[targetIndex];
            const distance = Math.sqrt(
              Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
            );
            
            if (distance < 200) {
              const pulse = Math.sin(time * 2 + i) * 0.5 + 0.5;
              ctx.globalAlpha = 0.6 * pulse;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          });
        });

        // Draw neural nodes
        neuralNodes.forEach((node, i) => {
          const pulse = Math.sin(time * 3 + i) * 0.3 + 0.7;
          ctx.globalAlpha = pulse;
          ctx.fillStyle = colors.accent;
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 15 * intensityMultiplier;
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      // Draw quantum entanglement effects
      if (enableQuantumEffects) {
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 5; i++) {
          const x1 = Math.sin(time * 0.5 + i) * dimensions.width * 0.3 + dimensions.width * 0.5;
          const y1 = Math.cos(time * 0.7 + i) * dimensions.height * 0.3 + dimensions.height * 0.5;
          const x2 = Math.sin(time * 0.3 + i * 2) * dimensions.width * 0.4 + dimensions.width * 0.5;
          const y2 = Math.cos(time * 0.6 + i * 2) * dimensions.height * 0.4 + dimensions.height * 0.5;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw holographic grid
      if (enableHolographic) {
        ctx.save();
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.2;
        
        const gridSize = 50;
        const offset = (time * 20) % gridSize;
        
        for (let x = -offset; x < dimensions.width + gridSize; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, dimensions.height);
          ctx.stroke();
        }
        
        for (let y = -offset; y < dimensions.height + gridSize; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(dimensions.width, y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Mouse interaction effects
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        const mouseX = mousePosition.x * dimensions.width;
        const mouseY = mousePosition.y * dimensions.height;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = colors.primary;
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 100 * intensityMultiplier;
        
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier, enableHolographic, enableQuantumEffects, enableMatrixFlow, enableNeuralPulse, mousePosition]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.background} 0%, rgba(0,0,0,0.98) 100%)`
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${colors.glow} 50%, transparent 70%)`,
            opacity: 0.1
          }}
          animate={{
            x: ['-100%', '200%'],
            y: ['-100%', '200%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${colors.matrix} 0%, transparent 50%)`,
            opacity: 0.05
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  );
}