import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';

interface UltraFuturisticMatrixBackgroundProps {
  children: React.ReactNode;
}

export default function UltraFuturisticMatrixBackground({ children }: UltraFuturisticMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
=======

interface UltraFuturisticMatrixBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticMatrixBackground({ children, className = '' }: UltraFuturisticMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
=======
    let animationFrameId: number;
    let particles: Particle[] = [];
    let matrix: MatrixCharacter[] = [];
    let quantumFields: QuantumField[] = [];
    let holographicGrids: HolographicGrid[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

<<<<<<< HEAD
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
=======
    // Particle class for quantum effects
    class Particle {
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
<<<<<<< HEAD
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
=======
      color: string;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.size *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Matrix character class
    class MatrixCharacter {
      x: number;
      y: number;
      char: string;
      speed: number;
      life: number;
      color: string;

      constructor(x: number) {
        this.x = x;
        this.y = -20;
        this.char = String.fromCharCode(0x30A0 + Math.random() * 96);
        this.speed = Math.random() * 2 + 1;
        this.life = Math.random() * 255;
        this.color = `rgba(0, 255, 0, ${this.life / 255})`;
      }

      update() {
        this.y += this.speed;
        this.life -= 2;
        this.color = `rgba(0, 255, 0, ${this.life / 255})`;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.life > 0) {
          ctx.fillStyle = this.color;
          ctx.font = '16px monospace';
          ctx.fillText(this.char, this.x, this.y);
        }
      }
    }

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      intensity: number;
      phase: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.5 + 0.3;
        this.phase = Math.random() * Math.PI * 2;
        this.color = `hsl(${240 + Math.random() * 60}, 100%, 70%)`;
      }

      update() {
        this.phase += 0.02;
        this.intensity = 0.3 + Math.sin(this.phase) * 0.2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `${this.color}${Math.floor(this.intensity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.save();
        ctx.globalAlpha = this.intensity * 0.3;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Holographic grid class
    class HolographicGrid {
      offsetX: number;
      offsetY: number;
      spacing: number;
      rotation: number;
      color: string;

      constructor() {
        this.offsetX = 0;
        this.offsetY = 0;
        this.spacing = 30;
        this.rotation = 0;
        this.color = `hsl(${280 + Math.random() * 40}, 100%, 70%)`;
      }

      update() {
        this.offsetX += 0.5;
        this.offsetY += 0.3;
        this.rotation += 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.1;

        // Draw grid lines
        for (let i = -20; i <= 20; i++) {
          const pos = i * this.spacing;
          ctx.beginPath();
          ctx.moveTo(pos, -canvas.height);
          ctx.lineTo(pos, canvas.height);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(-canvas.width, pos);
          ctx.lineTo(canvas.width, pos);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Initialize objects
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    for (let i = 0; i < 20; i++) {
      matrix.push(new MatrixCharacter(Math.random() * canvas.width));
    }

    for (let i = 0; i < 8; i++) {
      quantumFields.push(new QuantumField());
    }

    for (let i = 0; i < 3; i++) {
      holographicGrids.push(new HolographicGrid());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      quantumFields.forEach(field => {
        field.update();
        field.draw(ctx);
      });

      // Update and draw holographic grids
      holographicGrids.forEach(grid => {
        grid.update();
        grid.draw(ctx);
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        
        if (particle.life <= 0) {
          particles[index] = new Particle(Math.random() * canvas.width, Math.random() * canvas.height);
        }
      });

      // Update and draw matrix characters
      matrix.forEach((char, index) => {
        char.update();
        char.draw(ctx);
        
        if (char.y > canvas.height || char.life <= 0) {
          matrix[index] = new MatrixCharacter(Math.random() * canvas.width);
        }
      });

      // Add new matrix characters occasionally
      if (Math.random() < 0.1) {
        matrix.push(new MatrixCharacter(Math.random() * canvas.width));
      }

      // Draw quantum entanglement lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9
    };

    animate();

<<<<<<< HEAD
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
=======
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9
    };
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <div ref={containerRef} className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum energy orbs */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50"></div>
        
        {/* Holographic lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
        
        {/* Matrix-style corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-400 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-b6e9
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}