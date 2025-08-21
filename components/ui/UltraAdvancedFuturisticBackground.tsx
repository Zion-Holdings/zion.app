import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic';
  intensity?: 'low' | 'medium' | 'high';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'quantum-holographic',
  intensity = 'high'
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

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;

      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: getParticleColor(type),
          life: Math.random() * 100,
          maxLife: 100,
          type
        });
      }
    };

    const getParticleColor = (type: string) => {
      switch (type) {
        case 'quantum':
          return `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        case 'holographic':
          return `hsl(${270 + Math.random() * 60}, 100%, 70%)`;
        case 'neural':
          return `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
        case 'cyberpunk':
          return `hsl(${320 + Math.random() * 60}, 100%, 70%)`;
        default:
          return `hsl(${Math.random() * 360}, 100%, 70%)`;
      }
    };

    // Quantum entanglement effect
    const createQuantumEntanglement = () => {
      if (particles.length < 2) return;
      
      const p1 = particles[Math.floor(Math.random() * particles.length)];
      const p2 = particles[Math.floor(Math.random() * particles.length)];
      
      if (p1 && p2 && p1 !== p2) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.random() * 0.4})`;
        ctx.lineWidth = 1;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    // Holographic projection effect
    const createHolographicProjection = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 100 + Math.sin(Date.now() * 0.001) * 50;
      
      ctx.beginPath();
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 + Math.sin(Date.now() * 0.002) * 0.3})`;
      ctx.lineWidth = 2;
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner holographic rings
      for (let i = 1; i <= 3; i++) {
        const innerRadius = radius * (i / 4);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(Date.now() * 0.002 + i) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Neural network visualization
    const createNeuralNetwork = () => {
      const nodes = 8;
      const nodeRadius = 3;
      
      for (let i = 0; i < nodes; i++) {
        const x = (canvas.width / (nodes + 1)) * (i + 1);
        const y = canvas.height / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        
        // Draw node
        ctx.beginPath();
        ctx.fillStyle = `rgba(16, 185, 129, ${0.8 + Math.sin(Date.now() * 0.002 + i) * 0.2})`;
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        for (let j = 0; j < nodes; j++) {
          if (i !== j) {
            const targetX = (canvas.width / (nodes + 1)) * (j + 1);
            const targetY = canvas.height / 2 + Math.sin(Date.now() * 0.001 + j) * 100;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 + Math.sin(Date.now() * 0.001 + i + j) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(x, y);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();
          }
        }
      }
    };

    // Cyberpunk grid effect
    const createCyberpunkGrid = () => {
      const gridSize = 50;
      const offset = (Date.now() * 0.05) % gridSize;
      
      ctx.strokeStyle = `rgba(236, 73, 153, ${0.1 + Math.sin(Date.now() * 0.001) * 0.1})`;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Regenerate dead particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as any;
          particle.color = getParticleColor(particle.type);
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Create special effects based on variant
      switch (variant) {
        case 'quantum':
          createQuantumEntanglement();
          break;
        case 'holographic':
          createHolographicProjection();
          break;
        case 'neural':
          createNeuralNetwork();
          break;
        case 'cyberpunk':
          createCyberpunkGrid();
          break;
        case 'quantum-holographic':
          createQuantumEntanglement();
          createHolographicProjection();
          break;
        default:
          createQuantumEntanglement();
          createHolographicProjection();
          createNeuralNetwork();
          createCyberpunkGrid();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Quantum Field Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 73, 153, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Holographic Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%'
            }}
            animate={{
              x: ['0%', '100%']
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-20"
            style={{
              left: `${12.5 + i * 12.5}%`,
              top: '-100%',
              height: '200%'
            }}
            animate={{
              y: ['0%', '100%']
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-40">
        {children}
      </div>

      {/* Quantum Particle Field */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;