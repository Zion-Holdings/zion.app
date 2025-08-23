import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2038Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'cyberpunk' | 'quantum' | 'neon' | 'holographic';
}

const UltraFuturisticBackground2038: React.FC<UltraFuturisticBackground2038Props> = ({
  children,
  intensity = 'medium',
  theme = 'cyberpunk'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  // Theme-based color schemes
  const themes = {
    cyberpunk: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: '#000000',
      glow: '#00ffff'
    },
    quantum: {
      primary: '#4f46e5',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
      background: '#0f0f23',
      glow: '#4f46e5'
    },
    neon: {
      primary: '#ff0080',
      secondary: '#00ff80',
      accent: '#8000ff',
      background: '#0a0a0a',
      glow: '#ff0080'
    },
    holographic: {
      primary: '#00d4ff',
      secondary: '#ff6b6b',
      accent: '#4ecdc4',
      background: '#1a1a2e',
      glow: '#00d4ff'
    }
  };

  const currentTheme = themes[theme];

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = currentTheme.primary;
        this.life = Math.random() * 100;
        this.maxLife = 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Initialize particles
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw connecting lines
      ctx.strokeStyle = currentTheme.secondary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, theme]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: currentTheme.background }}
      />

      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 80%, ${currentTheme.primary}15 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${currentTheme.secondary}15 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, ${currentTheme.accent}10 0%, transparent 50%)`
        }}
      />

      {/* Animated Grid */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${currentTheme.primary}20 1px, transparent 1px),
              linear-gradient(90deg, ${currentTheme.primary}20 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-current rounded-full"
          style={{ borderColor: currentTheme.primary }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-current"
          style={{ borderColor: currentTheme.secondary }}
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-current transform rotate-45"
          style={{ borderColor: currentTheme.accent }}
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/3 w-28 h-28 border border-current rounded-full"
          style={{ borderColor: currentTheme.primary }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Neon Glow Effects */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${currentTheme.glow}20 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${currentTheme.secondary}20 0%, transparent 70%)`
          }}
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>

      {/* Interactive Cursor Trail */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <motion.div
          className="absolute w-4 h-4 rounded-full"
          style={{
            background: currentTheme.primary,
            boxShadow: `0 0 20px ${currentTheme.primary}`
          }}
          animate={{
            x: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            y: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2038;