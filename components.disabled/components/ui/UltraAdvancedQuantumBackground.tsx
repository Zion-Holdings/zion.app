import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumBackgroundProps {
  intensity?: number;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix';
  children: React.ReactNode;
}

const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({
  intensity = 1.0,
  variant = 'quantum',
  children
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

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space' | 'matrix';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
      holographic: ['#ff1493', '#00bfff', '#ff4500', '#32cd32', '#ffd700', '#ff69b4'],
      neural: ['#00ff7f', '#ff6347', '#4169e1', '#ff1493', '#00ced1', '#ff4500'],
      cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff0000', '#00ff00', '#8000ff'],
      space: ['#1e90ff', '#ff69b4', '#00ff7f', '#ff4500', '#9370db', '#00bfff'],
      matrix: ['#00ff00', '#00ff7f', '#32cd32', '#90ee90', '#98fb98', '#00fa9a']
    };

    const createParticle = () => {
      const type = variant as keyof typeof colors;
      const colorSet = colors[type];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensity,
        vy: (Math.random() - 0.5) * 2 * intensity,
        size: Math.random() * 3 * intensity + 1,
        color: colorSet[Math.floor(Math.random() * colorSet.length)],
        alpha: Math.random() * 0.8 + 0.2,
        type: variant
      };
    };

    // Initialize particles
    for (let i = 0; i < 150 * intensity; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum entanglement effects
      if (variant === 'quantum') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Quantum wave patterns
        for (let i = 0; i < 10; i++) {
          const time = Date.now() * 0.001;
          const wave = Math.sin(time + i) * 100;
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * intensity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2 + wave);
          ctx.lineTo(canvas.width, canvas.height / 2 + wave);
          ctx.stroke();
        }
      }

      // Create holographic grid
      if (variant === 'holographic') {
        ctx.strokeStyle = 'rgba(255, 20, 147, 0.1)';
        ctx.lineWidth = 1;
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

      // Create neural network patterns
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(0, 255, 127, 0.1)';
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
      }

      // Create cyberpunk effects
      if (variant === 'cyberpunk') {
        ctx.fillStyle = 'rgba(255, 0, 128, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Digital rain effect
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
          ctx.font = '12px monospace';
          ctx.fillText('01', x, y);
        }
      }

      // Create space effects
      if (variant === 'space') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Stars
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 2;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Create matrix effects
      if (variant === 'matrix') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Matrix characters
        for (let i = 0; i < 30; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const char = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
          ctx.font = '16px monospace';
          ctx.fillText(char, x, y);
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Create particle trails
        if (variant === 'quantum' || variant === 'holographic') {
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = particle.alpha * 0.3;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
          ctx.stroke();
        }

        // Occasionally create new particles
        if (Math.random() < 0.01) {
          particles[index] = createParticle();
        }
      });

      ctx.globalAlpha = 1;

      // Create floating geometric shapes
      if (variant === 'quantum' || variant === 'holographic') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width / 2 + Math.cos(time + i) * 200;
          const y = canvas.height / 2 + Math.sin(time + i) * 200;
          
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * intensity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x - 20, y - 20);
          ctx.lineTo(x + 20, y - 20);
          ctx.lineTo(x + 20, y + 20);
          ctx.lineTo(x - 20, y + 20);
          ctx.closePath();
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant === 'space' 
            ? 'radial-gradient(ellipse at center, #0a0a2a 0%, #000000 100%)'
            : variant === 'matrix'
            ? 'linear-gradient(135deg, #000000 0%, #001a00 100%)'
            : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {variant === 'quantum' && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent" />
        )}
        {variant === 'holographic' && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent" />
        )}
        {variant === 'neural' && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/5 to-transparent" />
        )}
        {variant === 'cyberpunk' && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
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
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;