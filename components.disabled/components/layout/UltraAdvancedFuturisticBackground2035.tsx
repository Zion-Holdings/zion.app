import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UltraAdvancedFuturisticBackground2035() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
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

        // Fade out
        this.alpha = (this.life / this.maxLife) * 0.5 + 0.3;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Connection class
    class Connection {
      particle1: Particle;
      particle2: Particle;
      distance: number;
      alpha: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
        this.alpha = Math.max(0, 1 - this.distance / 150);
      }

      draw() {
        if (ctx && this.alpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = this.alpha * 0.3;
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    // Create connections
    const createConnections = () => {
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (ctx) {
        // Clear canvas with fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((particle, index) => {
          particle.update();
          particle.draw();

          // Remove dead particles and create new ones
          if (particle.life <= 0) {
            particles[index] = new Particle();
          }
        });

        // Create and draw connections
        createConnections();
        connections.forEach(connection => connection.draw());

        // Add quantum effects
        drawQuantumEffects();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Quantum effects
    const drawQuantumEffects = () => {
      if (ctx) {
        // Quantum ripples
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const x = canvas.width * 0.5 + Math.sin(time + i) * 100;
          const y = canvas.height * 0.5 + Math.cos(time + i) * 100;
          const radius = (time * 50 + i * 100) % 300;

          ctx.save();
          ctx.globalAlpha = Math.max(0, 1 - radius / 300) * 0.1;
          ctx.strokeStyle = `hsl(${200 + i * 60}, 70%, 60%)`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // Neural network patterns
        drawNeuralPatterns();
      }
    };

    // Neural network patterns
    const drawNeuralPatterns = () => {
      if (ctx) {
        const time = Date.now() * 0.0005;
        const nodes = 8;
        const centerX = canvas.width * 0.5;
        const centerY = canvas.height * 0.5;

        // Draw nodes
        for (let i = 0; i < nodes; i++) {
          const angle = (i / nodes) * Math.PI * 2 + time;
          const radius = 150 + Math.sin(time * 2 + i) * 20;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          // Node glow
          ctx.save();
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Node core
          ctx.save();
          ctx.globalAlpha = 0.8;
          ctx.fillStyle = 'rgba(0, 255, 255, 1)';
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Connect to next node
          const nextAngle = ((i + 1) / nodes) * Math.PI * 2 + time;
          const nextRadius = 150 + Math.sin(time * 2 + i + 1) * 20;
          const nextX = centerX + Math.cos(nextAngle) * nextRadius;
          const nextY = centerY + Math.sin(nextAngle) * nextRadius;

          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    // Start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }}
      />

      {/* Overlay Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5" />
        
        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Quantum Field Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
              animate={{
                height: [0, 128, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Holographic Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-purple-400/30 rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
}