import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FuturisticAnimatedBackgroundProps {
  variant?: 'cyberpunk' | 'quantum' | 'neon' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const FuturisticAnimatedBackground: React.FC<FuturisticAnimatedBackgroundProps> = ({
  variant = 'cyberpunk',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | null>(null);

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
      alpha: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = getParticleColor();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
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
        
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 2;
        
        if (variant === 'matrix') {
          // Matrix-style particles
          ctx.fillRect(this.x, this.y, this.size, this.size * 2);
        } else {
          // Circular particles
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    function getParticleColor(): string {
      const colors = {
        cyberpunk: ['#00ffff', '#ff00ff', '#ffff00', '#ff0080', '#00ff80'],
        quantum: ['#4facfe', '#00f2fe', '#43e97b', '#38f9d7', '#fa709a'],
        neon: ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'],
        matrix: ['#00ff41', '#00ff00', '#39ff14', '#7fff00', '#bfff00']
      };
      return colors[variant][Math.floor(Math.random() * colors[variant].length)];
    }

    // Initialize particles
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.05 : 0.02})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw connecting lines between nearby particles
      if (variant !== 'matrix') {
        drawConnections();
      }

      // Add special effects based on variant
      addSpecialEffects();

      animationRef.current = requestAnimationFrame(animate);
    };

    function drawConnections() {
      if (!ctx) return;
      
      ctx.strokeStyle = `rgba(0, 255, 255, ${intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.2 : 0.3})`;
      ctx.lineWidth = 0.5;

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
    }

    function addSpecialEffects() {
      if (!ctx || !canvas) return;

      // Add grid effect for cyberpunk variant
      if (variant === 'cyberpunk') {
        ctx.strokeStyle = `rgba(0, 255, 255, ${intensity === 'low' ? 0.05 : intensity === 'medium' ? 0.1 : 0.15})`;
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
      }

      // Add wave effect for quantum variant
      if (variant === 'quantum') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = `rgba(74, 172, 254, ${intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.2 : 0.3})`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Add scan line effect for neon variant
      if (variant === 'neon') {
        const scanLineY = (Date.now() * 0.1) % canvas.height;
        ctx.strokeStyle = `rgba(255, 0, 110, ${intensity === 'low' ? 0.3 : intensity === 'medium' ? 0.5 : 0.7})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = '#ff006e';
        ctx.shadowBlur = 20;
        
        ctx.beginPath();
        ctx.moveTo(0, scanLineY);
        ctx.lineTo(canvas.width, scanLineY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      }
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: variant === 'matrix' 
            ? 'linear-gradient(0deg, #000000 0%, #001a00 50%, #000000 100%)'
            : variant === 'cyberpunk'
            ? 'linear-gradient(135deg, #000000 0%, #001122 50%, #000000 100%)'
            : variant === 'quantum'
            ? 'linear-gradient(45deg, #000428 0%, #004e92 50%, #000428 100%)'
            : 'linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)'
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse" />
        )}
        {variant === 'quantum' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        )}
        {variant === 'neon' && (
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 via-transparent to-yellow-500/5" />
        )}
        {variant === 'matrix' && (
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />
        )}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-yellow-400/30 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default FuturisticAnimatedBackground;