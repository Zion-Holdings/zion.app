import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticMatrixBackgroundProps {
  children: React.ReactNode;
}

export default function UltraFuturisticMatrixBackground({ children }: UltraFuturisticMatrixBackgroundProps) {
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

    // Matrix code rain effect
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Quantum field lines
    const fieldLines: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      life: number;
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
    }> = [];

    // Initialize neural network
    for (let i = 0; i < 15; i++) {
      neuralNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: []
      });
    }

    // Add connections between nodes
    neuralNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * neuralNodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Animation loop
    const animate = () => {
      time += 0.016;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix code rain
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(char, x, y);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Draw quantum field lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < fieldLines.length; i++) {
        const line = fieldLines[i];
        line.life -= 0.02;
        
        if (line.life <= 0) {
          fieldLines.splice(i, 1);
          i--;
          continue;
        }
        
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
      }

      // Add new field lines
      if (Math.random() > 0.95) {
        fieldLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 100 + 50,
          angle: Math.random() * Math.PI * 2,
          life: 1
        });
      }

      // Draw neural network
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.4)';
      ctx.lineWidth = 1;
      
      neuralNodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const targetNode = neuralNodes[connectionIndex];
          if (targetNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw neural network nodes
      ctx.fillStyle = 'rgba(255, 0, 255, 0.8)';
      neuralNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw quantum particles
      ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.life -= 0.02;
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
          i--;
        } else {
          const alpha = particle.life / particle.maxLife;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Add new particles
      if (Math.random() > 0.9) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 1
        });
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Draw hologram effect
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time * 0.5 + i) * 100 + canvas.width / 2;
        const y = Math.cos(time * 0.3 + i) * 100 + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 50 + Math.sin(time + i) * 20, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw energy grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
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

      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-blue-400/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}