import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
  intensity?: number;
  variant?: 'default' | 'intense' | 'subtle' | 'quantum' | 'holographic' | 'matrix';
=======
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
<<<<<<< HEAD
  intensity = 1,
  variant = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number; type: string }[]>([]);
=======
  className = '',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles based on variant
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = variant === 'intense' ? 200 : variant === 'subtle' ? 50 : 100;
=======
    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'matrix';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
<<<<<<< HEAD
          vx: (Math.random() - 0.5) * 2 * intensity,
          vy: (Math.random() - 0.5) * 2 * intensity,
          life: Math.random() * 100,
          type: Math.random() > 0.5 ? 'quantum' : 'holographic'
=======
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
          type: ['quantum', 'holographic', 'matrix'][Math.floor(Math.random() * 3)] as any
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
        });
      }
    };

<<<<<<< HEAD
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const time = Date.now() * 0.001;
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time) * 100,
        0,
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time) * 100,
        canvas.width * 0.8
      );

      if (variant === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.08)');
        gradient.addColorStop(0.7, 'rgba(236, 73, 153, 0.06)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (variant === 'holographic') {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
        gradient.addColorStop(0.4, 'rgba(236, 73, 153, 0.1)');
        gradient.addColorStop(0.8, 'rgba(0, 255, 255, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.08)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
=======
    // Matrix rain effect
    const matrixRain: Array<{ x: number; y: number; speed: number; char: string; opacity: number }> = [];
    
    const initMatrixRain = () => {
      for (let i = 0; i < 50; i++) {
        matrixRain.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: String.fromCharCode(0x30A0 + Math.random() * 96),
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      const gridSize = 50;
      const gridOpacity = 0.1;
      
      ctx.strokeStyle = `rgba(0, 255, 255, ${gridOpacity})`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Quantum entanglement effect
    const drawQuantumEntanglement = () => {
      particles.forEach((particle, i) => {
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100 && particle.type === 'quantum' && otherParticle.type === 'quantum') {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw holographic grid
      drawHolographicGrid();

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

<<<<<<< HEAD
        // Wrap particles around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is depleted
        if (particle.life <= 0) {
          particle.life = 100;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        const alpha = (particle.life / 100) * 0.8 * intensity;
        const size = (particle.life / 100) * 3 * intensity;

        if (particle.type === 'quantum') {
          // Quantum particles with cyan glow
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = 20 * intensity;
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        } else {
          // Holographic particles with purple glow
          ctx.shadowColor = '#8b5cf6';
          ctx.shadowBlur = 15 * intensity;
          ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connection lines between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 150 * intensity) {
              const lineAlpha = (1 - distance / 150) * 0.3 * intensity;
              ctx.strokeStyle = `rgba(0, 255, 255, ${lineAlpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw matrix rain effect for matrix variant
      if (variant === 'matrix') {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
        ctx.font = '14px monospace';
        for (let i = 0; i < 50; i++) {
          const x = (i * 23) % canvas.width;
          const y = (Date.now() * 0.1 + i * 20) % canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      // Draw quantum entanglement patterns
      if (variant === 'quantum') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
          const x1 = canvas.width / 2 + Math.sin(time + i) * 200;
          const y1 = canvas.height / 2 + Math.cos(time + i) * 200;
          const x2 = canvas.width / 2 + Math.sin(time + i + Math.PI) * 200;
          const y2 = canvas.height / 2 + Math.cos(time + i + Math.PI) * 200;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // Draw holographic grid
      if (variant === 'holographic') {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
        ctx.lineWidth = 1;
        const gridSize = 100;
        
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
=======
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'quantum') {
          // Quantum particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'holographic') {
          // Holographic particle with geometric shape
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
          ctx.closePath();
          ctx.fill();
        } else {
          // Matrix particle
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 3;
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      // Update and draw matrix rain
      matrixRain.forEach((drop, index) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
        }

        ctx.globalAlpha = drop.opacity;
        ctx.fillStyle = '#00ff00';
        ctx.font = '14px monospace';
        ctx.fillText(drop.char, drop.x, drop.y);
      });

      // Draw quantum entanglement
      drawQuantumEntanglement();

      // Reset global alpha
      ctx.globalAlpha = 1;
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a

      animationRef.current = requestAnimationFrame(animate);
    };

<<<<<<< HEAD
    initParticles();
    animate();

=======
    // Initialize and start animation
    initParticles();
    initMatrixRain();
    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
<<<<<<< HEAD
      window.removeEventListener('resize', resizeCanvas);
=======
      window.removeEventListener('resize', handleResize);
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
    };
  }, [intensity]);

  return (
<<<<<<< HEAD
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional layered effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/3 to-pink-500/5" />
        
        {/* Holographic scan lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Quantum particles overlay */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
=======
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Holographic Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)' }}
      />
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-purple-400/30 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Quantum energy waves */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-d97a
        {children}
      </div>
    </motion.div>
  );
};

export default QuantumHolographicMatrixBackground;