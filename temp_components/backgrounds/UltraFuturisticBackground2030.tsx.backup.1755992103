import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
const UltraFuturisticBackground2030: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;
    
=======
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    class Particle {
=======
    let animationId: number;
    let particles: Array<{
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
<<<<<<< HEAD
      alpha: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Connection {
      particle1: Particle;
      particle2: Particle;
      distance: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
      }

      draw() {
        if (this.distance < 150) {
          const alpha = 1 - this.distance / 150;
          ctx.save();
          ctx.globalAlpha = alpha * 0.3;
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00ffff';
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Create connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connections.push(new Connection(particles[i], particles[j]));
      }
    }
=======
      opacity: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
<<<<<<< HEAD
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

=======
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
=======
      initParticles();
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
    };

    window.addEventListener('resize', handleResize);

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
=======
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)' }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
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
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 border border-pink-500/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neon grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs with glow effects */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
          filter: 'blur(0.5px)'
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: '0 0 15px rgba(147, 51, 234, 0.8)',
          filter: 'blur(0.5px)'
        }}
      />

      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scanning line effect */}
      {typeof window !== 'undefined' && (
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            y: [0, window.innerHeight]
=======
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Hexagon Grid */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: "linear"
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)',
            height: '2px'
          }}
        />
      )}

      {/* Particle field effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
=======
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
            height: [32, 64, 32],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />
        
        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent" />
        
        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {[...Array(20)].map((_, i) => (
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
=======
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

<<<<<<< HEAD
      {/* Quantum wave effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0, 255, 255, 0.1) 10px,
              rgba(0, 255, 255, 0.1) 20px
            )
          `
        }}
      />

      {/* Render children */}
      {children}
=======
      {/* Neon Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2135
    </div>
  );
};

export default UltraFuturisticBackground2030;