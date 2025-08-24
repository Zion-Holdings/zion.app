import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'ai' | 'fusion';
  intensity?: number;
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum',
  intensity = 1,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: string;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
      holographic: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#9370db'],
      neural: ['#ff69b4', '#00ced1', '#98fb98', '#f0e68c', '#ff6347', '#dda0dd'],
      cyberpunk: ['#ff0080', '#00ff80', '#8000ff', '#ff8000', '#00ffff', '#ff0080'],
      space: ['#1e90ff', '#ff1493', '#00ff7f', '#ffd700', '#ff4500', '#9370db'],
      ai: ['#00bfff', '#ff69b4', '#32cd32', '#ffd700', '#ff6347', '#dda0dd'],
      fusion: ['#ff1493', '#00ffff', '#ffd700', '#ff4500', '#9370db', '#32cd32']
    };

    const selectedColors = colors[variant] || colors.quantum;

    // Create particles
    for (let i = 0; i < 150 * intensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensity,
        vy: (Math.random() - 0.5) * 2 * intensity,
        size: Math.random() * 3 * intensity + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
        type: Math.random() > 0.5 ? 'particle' : 'wave'
      });
    }

    // Create quantum entanglement effects
    const createEntanglement = () => {
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          const p1 = particles[i];
          const p2 = particles[i + 1];
          
          // Create quantum connection
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * intensity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };

    // Create neural network effects
    const createNeuralConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          if (distance < 100 * intensity) {
            const opacity = (100 - distance) / 100 * 0.3 * intensity;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 105, 180, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Create holographic effects
    const createHolographicRings = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 5; i++) {
        const radius = (i + 1) * 100 * intensity;
        const opacity = (5 - i) / 5 * 0.2 * intensity;
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 20, 147, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Create space-time distortion
    const createSpaceTimeDistortion = () => {
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + time;
        const radius = 150 * intensity;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(30, 144, 255, ${0.6 * intensity})`;
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Create particle trails
        if (particle.type === 'wave') {
          ctx.beginPath();
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = particle.size * 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.stroke();
        }
      });

      // Create special effects based on variant
      switch (variant) {
        case 'quantum':
          createEntanglement();
          break;
        case 'neural':
          createNeuralConnections();
          break;
        case 'holographic':
          createHolographicRings();
          break;
        case 'space':
          createSpaceTimeDistortion();
          break;
        case 'ai':
          createNeuralConnections();
          createEntanglement();
          break;
        case 'fusion':
          createEntanglement();
          createNeuralConnections();
          createHolographicRings();
          createSpaceTimeDistortion();
          break;
        default:
          createEntanglement();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-cyan-900/10 to-pink-900/10" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className={`w-2 h-2 ${
                i % 4 === 0 ? 'bg-cyan-400' :
                i % 4 === 1 ? 'bg-purple-400' :
                i % 4 === 2 ? 'bg-pink-400' :
                'bg-blue-400'
              } rounded-full opacity-30`}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;