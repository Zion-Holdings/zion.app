import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2036: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.opacity;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    class Connection {
      particle1: Particle;
      particle2: Particle;
      opacity: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.particle1.x - this.particle2.x, 2) +
          Math.pow(this.particle1.y - this.particle2.y, 2)
        );

        if (distance < 150) {
          ctx!.save();
          ctx!.globalAlpha = this.opacity * (1 - distance / 150);
          ctx!.strokeStyle = 'rgba(0, 255, 255, 0.3)';
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(this.particle1.x, this.particle1.y);
          ctx!.lineTo(this.particle2.x, this.particle2.y);
          ctx!.stroke();
          ctx!.restore();
        }
      }
    }

    // Initialize particles and connections
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        if (Math.random() < 0.1) {
          connections.push(new Connection(particles[i], particles[j]));
        }
      }
    }

    const animate = () => {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connections.forEach(connection => {
        connection.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent" />
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-blue-400/30 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-purple-400/30 transform rotate-12"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
        style={{ zIndex: -1 }}
        animate={{
          y: [0, 1000]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner Accents */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
      
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-blue-400 to-transparent" />
        <div className="absolute top-0 right-0 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
      
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1 h-16 bg-gradient-to-t from-purple-400 to-transparent" />
      </div>
      
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-pink-400 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-t from-pink-400 to-transparent" />
      </div>

      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/30 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            {Math.random().toString(16).substring(2, 8).toUpperCase()}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default UltraFuturisticBackground2036;