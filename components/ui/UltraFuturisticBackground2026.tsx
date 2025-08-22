import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyber' | 'neon' | 'holographic';
  children: React.ReactNode;
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
  intensity = 'medium',
  theme = 'quantum',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const colors = {
      quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#06b6d4', '#3b82f6'],
      cyber: ['#00ff88', '#ff0088', '#8800ff', '#ff8800', '#0088ff'],
      neon: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#8000ff'],
      holographic: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500']
    };

    const selectedColors = colors[theme];
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = selectedColors[Math.floor(Math.random() * selectedColors.length)];
        }

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connection lines between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 150) {
              const opacity = (150 - distance) / 150 * 0.3;
              ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw floating geometric shapes
      if (theme === 'quantum' || theme === 'holographic') {
        const time = Date.now() * 0.001;
        const shapes = [
          { x: canvas.width * 0.2, y: canvas.height * 0.3, rotation: time * 0.5, size: 40 },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, rotation: time * 0.3, size: 60 },
          { x: canvas.width * 0.6, y: canvas.height * 0.2, rotation: time * 0.7, size: 30 }
        ];

        shapes.forEach((shape, index) => {
          ctx.save();
          ctx.translate(shape.x, shape.y);
          ctx.rotate(shape.rotation);
          
          const shapeGradient = ctx.createLinearGradient(-shape.size, -shape.size, shape.size, shape.size);
          shapeGradient.addColorStop(0, `${selectedColors[index % selectedColors.length]}20`);
          shapeGradient.addColorStop(1, `${selectedColors[(index + 1) % selectedColors.length]}20`);
          
          ctx.fillStyle = shapeGradient;
          ctx.strokeStyle = `${selectedColors[index % selectedColors.length]}60`;
          ctx.lineWidth = 2;
          
          if (index % 2 === 0) {
            // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * shape.size;
              const y = Math.sin(angle) * shape.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
          } else {
            // Diamond
            ctx.beginPath();
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size, 0);
            ctx.lineTo(0, shape.size);
            ctx.lineTo(-shape.size, 0);
            ctx.closePath();
          }
          
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        });
      }

      // Draw scanning lines for cyber theme
      if (theme === 'cyber') {
        const time = Date.now() * 0.002;
        const scanLineY = (canvas.height * 0.5) + Math.sin(time) * (canvas.height * 0.3);
        
        const scanGradient = ctx.createLinearGradient(0, scanLineY - 2, 0, scanLineY + 2);
        scanGradient.addColorStop(0, 'transparent');
        scanGradient.addColorStop(0.5, '#00ff8860');
        scanGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = scanGradient;
        ctx.fillRect(0, scanLineY - 2, canvas.width, 4);
      }

      // Draw neon grid for neon theme
      if (theme === 'neon') {
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = '#ff00ff40';
        ctx.lineWidth = 1;
        
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
        
        // Animated neon pulse
        const pulseOpacity = (Math.sin(time * 3) + 1) * 0.3;
        ctx.strokeStyle = `#00ffff${Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        
        const pulseX = (canvas.width * 0.5) + Math.sin(time) * (canvas.width * 0.3);
        const pulseY = (canvas.height * 0.5) + Math.cos(time) * (canvas.height * 0.3);
        
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 30, 0, Math.PI * 2);
        ctx.stroke();
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
  }, [intensity, theme]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Primary gradient overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'quantum' ? 'from-cyan-900/20 via-blue-900/10 to-purple-900/20' :
            theme === 'cyber' ? 'from-green-900/20 via-blue-900/10 to-pink-900/20' :
            theme === 'neon' ? 'from-pink-900/20 via-purple-900/10 to-cyan-900/20' :
            'from-orange-900/20 via-red-900/10 to-yellow-900/20'
          }`}
        />
        
        {/* Secondary animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Quantum particles */}
        {theme === 'quantum' && (
          <>
            <motion.div
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{ left: '20%', top: '30%' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
              style={{ left: '80%', top: '70%' }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </>
        )}

        {/* Cyber elements */}
        {theme === 'cyber' && (
          <>
            <motion.div
              className="absolute w-1 h-8 bg-green-400 opacity-60"
              style={{ left: '15%', top: '20%' }}
              animate={{
                height: [32, 64, 32],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute w-8 h-1 bg-pink-400 opacity-60"
              style={{ left: '75%', top: '80%' }}
              animate={{
                width: [32, 64, 32],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            />
          </>
        )}

        {/* Neon elements */}
        {theme === 'neon' && (
          <>
            <motion.div
              className="absolute w-3 h-3 bg-pink-400 rounded-full opacity-80"
              style={{ left: '25%', top: '40%' }}
              animate={{
                boxShadow: [
                  '0 0 10px #ff00ff',
                  '0 0 20px #ff00ff, 0 0 30px #ff00ff',
                  '0 0 10px #ff00ff'
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-80"
              style={{ left: '70%', top: '60%' }}
              animate={{
                boxShadow: [
                  '0 0 10px #00ffff',
                  '0 0 20px #00ffff, 0 0 30px #00ffff',
                  '0 0 10px #00ffff'
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </>
        )}

        {/* Holographic elements */}
        {theme === 'holographic' && (
          <>
            <motion.div
              className="absolute w-4 h-4 border-2 border-orange-400 opacity-60"
              style={{ left: '30%', top: '25%' }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <motion.div
              className="absolute w-3 h-3 border-2 border-red-400 opacity-60"
              style={{ left: '65%', top: '75%' }}
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
                delay: 2
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2026;