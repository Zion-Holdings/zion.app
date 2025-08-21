import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UltraFuturisticBackground2029() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;
    
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

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.life = Math.random() * 100;
        this.maxLife = 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.life / this.maxLife;
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Grid system
    class Grid {
      spacing: number;
      offset: number;

      constructor() {
        this.spacing = 50;
        this.offset = 0;
      }

      update() {
        this.offset += 0.5;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
          ctx.lineWidth = 1;
          ctx.shadowColor = 'rgba(147, 51, 234, 0.3)';
          ctx.shadowBlur = 5;

          // Vertical lines
          for (let x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Neural network connections
    class NeuralConnections {
      nodes: Array<{ x: number; y: number; connections: number[] }>;
      maxConnections: number;

      constructor() {
        this.nodes = [];
        this.maxConnections = 3;
        this.generateNodes();
      }

      generateNodes() {
        for (let i = 0; i < 20; i++) {
          this.nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            connections: []
          });
        }

        // Create connections
        this.nodes.forEach((node, i) => {
          const connectionCount = Math.floor(Math.random() * this.maxConnections) + 1;
          for (let j = 0; j < connectionCount; j++) {
            const targetIndex = Math.floor(Math.random() * this.nodes.length);
            if (targetIndex !== i && !node.connections.includes(targetIndex)) {
              node.connections.push(targetIndex);
            }
          }
        });
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
          ctx.lineWidth = 1;
          ctx.shadowColor = 'rgba(6, 182, 212, 0.4)';
          ctx.shadowBlur = 8;

          this.nodes.forEach((node, i) => {
            node.connections.forEach(targetIndex => {
              const target = this.nodes[targetIndex];
              if (target) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(target.x, target.y);
                ctx.stroke();
              }
            });
          });

          // Draw nodes
          this.nodes.forEach(node => {
            ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
            ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      }
    }

    // Quantum wave effect
    class QuantumWave {
      time: number;
      amplitude: number;
      frequency: number;

      constructor() {
        this.time = 0;
        this.amplitude = 30;
        this.frequency = 0.02;
      }

      update() {
        this.time += 0.05;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
          ctx.lineWidth = 2;
          ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
          ctx.shadowBlur = 20;

          ctx.beginPath();
          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + 
                     Math.sin(x * this.frequency + this.time) * this.amplitude +
                     Math.sin(x * this.frequency * 2 + this.time * 1.5) * this.amplitude * 0.5;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }
    }

    // Initialize systems
    const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());
    const grid = new Grid();
    const neuralConnections = new NeuralConnections();
    const quantumWave = new QuantumWave();

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw systems
      grid.update();
      grid.draw();

      neuralConnections.draw();

      quantumWave.update();
      quantumWave.draw();

      particles.forEach(particle => {
        particle.update();
        particle.draw();

        // Reset dead particles
        if (particle.life <= 0) {
          const index = particles.indexOf(particle);
          if (index > -1) {
            particles[index] = new Particle();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Energy Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.div
            className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        {/* Scanning Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            y: [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            y: [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/50">
          <motion.div
            className="absolute top-0 left-0 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-500/50">
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-indigo-500/50">
          <motion.div
            className="absolute bottom-0 left-0 w-2 h-2 bg-indigo-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/50">
          <motion.div
            className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        {/* Central Energy Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 border border-purple-500/20 rounded-full" />
          <div className="absolute inset-8 border border-cyan-500/20 rounded-full" />
          <div className="absolute inset-16 border border-indigo-500/20 rounded-full" />
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
    </div>
  );
}