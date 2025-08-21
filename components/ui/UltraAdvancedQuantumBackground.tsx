import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'neural' | 'cyberpunk' | 'holographic';
  children: React.ReactNode;
}

const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({
  intensity = 'medium',
  colorScheme = 'quantum',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Color schemes
  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      background: 'rgba(0, 0, 0, 0.95)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#ff0080', '#8000ff']
    },
    neural: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      tertiary: '#45b7d1',
      background: 'rgba(20, 20, 30, 0.95)',
      particles: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      tertiary: '#ffff00',
      background: 'rgba(10, 10, 20, 0.95)',
      particles: ['#ff0080', '#00ffff', '#ffff00', '#ff8000', '#8000ff']
    },
    holographic: {
      primary: '#ff1493',
      secondary: '#00bfff',
      tertiary: '#32cd32',
      background: 'rgba(15, 15, 25, 0.95)',
      particles: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500']
    }
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 1.5;

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
      type: 'quantum' | 'neural' | 'energy' | 'data';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'neural', 'energy', 'data'][Math.floor(Math.random() * 4)] as any;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Add quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Add neural network connections
        if (Math.random() < 0.005 * intensityMultiplier) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw() {
        if (!ctx) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        // Different particle types
        switch (this.type) {
          case 'quantum':
            // Quantum particles with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Wave function visualization
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = alpha * 0.3;
            ctx.stroke();
            break;

          case 'neural':
            // Neural network nodes
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Synaptic connections
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y - this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = alpha * 0.5;
            ctx.stroke();
            break;

          case 'energy':
            // Energy particles with glow effect
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.size * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            break;

          case 'data':
            // Data particles with binary effect
            ctx.fillStyle = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', this.x, this.y);
            break;
        }

        ctx.restore();
      }
    }

    // Create particle array
    const particles: Particle[] = [];
    const particleCount = Math.floor(100 * intensityMultiplier);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
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

      // Draw quantum entanglement lines
      ctx.strokeStyle = colors.primary;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && Math.random() < 0.01 * intensityMultiplier) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw neural network grid
      ctx.strokeStyle = colors.secondary;
      ctx.globalAlpha = 0.05;
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

      // Add holographic effects
      if (colorScheme === 'holographic') {
        ctx.strokeStyle = colors.tertiary;
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 2;

        // Holographic rings
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const radius = 100 + i * 50 + Math.sin(time + i) * 20;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme, colors, intensityMultiplier]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Quantum Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: colors.background }}
      />

      {/* Overlay Effects */}
      <div className="absolute inset-0 z-10">
        {/* Quantum Field Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}20 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.secondary}20 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}20 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, ${colors.primary}20 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Neural Network Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${colors.secondary}20 1px, transparent 1px),
              linear-gradient(0deg, ${colors.secondary}20 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Quantum Entanglement Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: [
              `inset 0 0 100px ${colors.primary}10`,
              `inset 0 0 200px ${colors.secondary}10`,
              `inset 0 0 100px ${colors.tertiary}10`,
              `inset 0 0 100px ${colors.primary}10`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;