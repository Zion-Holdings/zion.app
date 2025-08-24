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

    // Matrix code rain effect with enhanced visibility
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16; // Increased from 14 for better visibility
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
      size: number;
    }> = [];

    // Quantum field lines with enhanced visibility
    const fieldLines: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      life: number;
      width: number;
    }> = [];

    // Neural network nodes with enhanced visibility
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      size: number;
    }> = [];

    // Initialize neural network with enhanced visibility
    for (let i = 0; i < 20; i++) { // Increased from 15 for more visual impact
      neuralNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        size: Math.random() * 4 + 3 // Varied sizes for better visibility
      });
    }

    // Add connections between nodes
    neuralNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 4) + 2; // Increased connections
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * neuralNodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Animation loop with enhanced visibility
    const animate = () => {
      time += 0.016;

      // Clear canvas with enhanced fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; // Increased from 0.1 for better visibility
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix code rain with enhanced visibility
      ctx.fillStyle = '#00ff41';
      ctx.font = `bold ${fontSize}px monospace`; // Added bold for better visibility
      
      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Add glow effect for better visibility
        ctx.shadowColor = '#00ff41';
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Draw quantum field lines with enhanced visibility
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)'; // Increased from 0.3
      ctx.lineWidth = 2; // Increased from 1
      
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

      // Add new field lines with enhanced visibility
      if (Math.random() > 0.92) { // Increased frequency from 0.95
        fieldLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 120 + 80, // Increased length
          angle: Math.random() * Math.PI * 2,
          life: 1.2, // Increased life
          width: Math.random() * 2 + 1
        });
      }

      // Draw neural network with enhanced visibility
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.6)'; // Increased from 0.4
      ctx.lineWidth = 2; // Increased from 1
      
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

      // Draw neural network nodes with enhanced visibility
      ctx.fillStyle = 'rgba(255, 0, 255, 0.9)'; // Increased from 0.8
      neuralNodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = 'rgba(255, 0, 255, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw quantum particles with enhanced visibility
      ctx.fillStyle = 'rgba(0, 255, 255, 0.9)'; // Increased from 0.8
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
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Add new particles with enhanced visibility
      if (Math.random() > 0.85) { // Increased frequency from 0.9
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3, // Increased velocity
          vy: (Math.random() - 0.5) * 3,
          life: 1.2, // Increased life
          maxLife: 1.2,
          size: Math.random() * 3 + 2 // Varied sizes
        });
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Draw hologram effect with enhanced visibility
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)'; // Increased from 0.2
      ctx.lineWidth = 1; // Increased from 0.5
      
      for (let i = 0; i < 6; i++) { // Increased from 5
        const x = Math.sin(time * 0.5 + i) * 120 + canvas.width / 2; // Increased radius
        const y = Math.cos(time * 0.3 + i) * 120 + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 60 + Math.sin(time + i) * 25, 0, Math.PI * 2); // Increased size
        ctx.stroke();
      }

      // Draw energy grid with enhanced visibility
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)'; // Increased from 0.1
      ctx.lineWidth = 1; // Increased from 0.5
      
      const gridSize = 60; // Increased from 50
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
      
      {/* Floating Geometric Shapes with Enhanced Visibility */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-20 w-36 h-36 border-2 border-cyan-400/30 rotate-45" // Enhanced visibility
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1], // Increased scale
            opacity: [0.3, 0.7, 0.3] // Increased opacity
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-28 h-28 border-2 border-purple-400/30 rounded-full" // Enhanced visibility
          animate={{
            scale: [1, 1.6, 1], // Increased scale
            opacity: [0.4, 0.8, 0.4], // Increased opacity
            y: [0, -25, 0] // Increased movement
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-44 h-44 border-2 border-blue-400/30" // Enhanced visibility
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1], // Increased scale
            opacity: [0.3, 0.6, 0.3] // Increased opacity
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-green-400/30 rotate-45" // Enhanced visibility
          animate={{
            rotate: [45, -315],
            scale: [1, 1.5, 1], // Increased scale
            opacity: [0.4, 0.8, 0.4] // Increased opacity
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional floating elements for enhanced visibility */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-pink-400/30 rotate-12"
          animate={{
            rotate: [12, 372],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-yellow-400/30 rounded-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear"
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