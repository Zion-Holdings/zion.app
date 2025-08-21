import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackgroundProps {
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  className?: string;
  children?: React.ReactNode;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  variant = 'quantum-holographic-advanced',
  className = '',
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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural';
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = variant.includes('quantum') ? 150 : variant.includes('holographic') ? 200 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'cyberpunk', 'neural'][Math.floor(Math.random() * 4)] as any;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(type, variant),
          type
        });
      }
    };

    const getParticleColor = (type: string, variant: string): string => {
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        holographic: ['#ff00ff', '#00ff80', '#80ff00', '#ff8000'],
        cyberpunk: ['#ff0040', '#40ff00', '#0040ff', '#ff4000'],
        neural: ['#ff8000', '#8000ff', '#00ff80', '#ff0080']
      };
      
      if (variant.includes('quantum-holographic')) {
        return colors.quantum[Math.floor(Math.random() * colors.quantum.length)];
      } else if (variant.includes('neural-quantum')) {
        return colors.neural[Math.floor(Math.random() * colors.neural.length)];
      } else if (variant.includes('quantum-cyberpunk')) {
        return colors.cyberpunk[Math.floor(Math.random() * colors.cyberpunk.length)];
      }
      
      return colors[type as keyof typeof colors][Math.floor(Math.random() * colors[type as keyof typeof colors].length)];
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
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
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
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
              ctx.strokeStyle = particle.color + Math.floor((0.3 * (1 - distance / 100)) * 255).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      
      // Draw quantum field effects
      if (variant.includes('quantum')) {
        drawQuantumField(ctx, canvas);
      }
      
      // Draw holographic effects
      if (variant.includes('holographic')) {
        drawHolographicEffects(ctx, canvas);
      }
      
      // Draw neural network effects
      if (variant.includes('neural')) {
        drawNeuralEffects(ctx, canvas);
      }
      
      // Draw cyberpunk effects
      if (variant.includes('cyberpunk')) {
        drawCyberpunkEffects(ctx, canvas);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const drawQuantumField = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
        const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, 50 + Math.sin(time * 2 + i) * 20, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const drawHolographicEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.0005;
      
      // Draw holographic grid
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
      
      // Draw floating holographic elements
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time + i) * canvas.width * 0.4 + canvas.width * 0.5;
        const y = Math.cos(time + i * 0.5) * canvas.height * 0.4 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.rect(x - 30, y - 30, 60, 60);
        ctx.strokeStyle = `rgba(255, 0, 255, ${0.6 + Math.sin(time * 3 + i) * 0.4})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    };

    const drawNeuralEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.0003;
      
      // Draw neural network nodes
      for (let i = 0; i < 8; i++) {
        const x = Math.sin(time + i * 0.8) * canvas.width * 0.35 + canvas.width * 0.5;
        const y = Math.cos(time + i * 1.2) * canvas.height * 0.35 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, 8 + Math.sin(time * 2 + i) * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 128, 0, ${0.8 + Math.sin(time + i) * 0.2})`;
        ctx.fill();
        
        // Draw connections between nodes
        for (let j = i + 1; j < 8; j++) {
          const x2 = Math.sin(time + j * 0.8) * canvas.width * 0.35 + canvas.width * 0.5;
          const y2 = Math.cos(time + j * 1.2) * canvas.height * 0.35 + canvas.height * 0.5;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(255, 128, 0, ${0.3 + Math.sin(time + i + j) * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.0007;
      
      // Draw scanning lines
      for (let i = 0; i < 3; i++) {
        const y = (time * 100 + i * 200) % canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(255, 0, 64, ${0.8 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Draw digital rain effect
      for (let i = 0; i < 20; i++) {
        const x = (i * 100 + time * 50) % canvas.width;
        const y = (time * 200 + i * 50) % canvas.height;
        
        ctx.fillStyle = `rgba(0, 255, 64, ${0.7 + Math.sin(time + i) * 0.3})`;
        ctx.font = '12px monospace';
        ctx.fillText('01', x, y);
      }
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Quantum particles */}
        {variant.includes('quantum') && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}
        
        {/* Holographic elements */}
        {variant.includes('holographic') && (
          <>
            <motion.div
              className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-fuchsia-400"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-pink-400 rounded-full"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.9, 0.2]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />
          </>
        )}
        
        {/* Neural network nodes */}
        {variant.includes('neural') && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 2.2, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </>
        )}
        
        {/* Cyberpunk elements */}
        {variant.includes('cyberpunk') && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-red-500"
              animate={{
                opacity: [0, 1, 0],
                scaleY: [1, 3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-1 h-full bg-green-500"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [1, 3, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;