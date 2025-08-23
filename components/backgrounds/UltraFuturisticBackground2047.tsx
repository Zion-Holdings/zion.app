import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2047: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
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

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation variables
    let animationId: number;
    let animationTime = 0;
    
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
      type: 'quantum' | 'neon' | 'energy';
      phase: number;
    }> = [];

    // Create quantum particles
    const createQuantumParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 2;
      const colors = [
        'rgba(0, 255, 255, 0.9)',   // Cyan
        'rgba(147, 51, 234, 0.9)',  // Purple
        'rgba(236, 72, 153, 0.9)',  // Pink
        'rgba(59, 130, 246, 0.9)',  // Blue
        'rgba(16, 185, 129, 0.9)',  // Green
        'rgba(245, 158, 11, 0.9)',  // Amber
        'rgba(239, 68, 68, 0.9)',   // Red
      ];
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 150 + 100,
        type: 'quantum',
        phase: Math.random() * Math.PI * 2
      });
    };

    // Create neon particles
    const createNeonParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const colors = [
        'rgba(255, 0, 255, 0.8)',   // Magenta
        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(255, 255, 0, 0.8)',   // Yellow
        'rgba(255, 0, 128, 0.8)',   // Pink
        'rgba(128, 0, 255, 0.8)',   // Purple
      ];
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 120 + 80,
        type: 'neon',
        phase: Math.random() * Math.PI * 2
      });
    };

    // Create energy particles
    const createEnergyParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 3;
      const colors = [
        'rgba(255, 215, 0, 0.9)',   // Gold
        'rgba(255, 69, 0, 0.9)',    // Orange Red
        'rgba(255, 20, 147, 0.9)',  // Deep Pink
        'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
        'rgba(138, 43, 226, 0.9)',  // Blue Violet
      ];
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 200 + 150,
        type: 'energy',
        phase: Math.random() * Math.PI * 2
      });
    };

    // Update and draw particles
    const updateParticles = () => {
      // Remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        particle.phase += 0.02;
        
        // Bounce off edges with quantum tunneling effect
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -0.9;
          if (Math.random() < 0.1) { // Quantum tunneling
            particle.x = particle.x <= 0 ? canvas.width : 0;
          }
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -0.9;
          if (Math.random() < 0.1) { // Quantum tunneling
            particle.y = particle.y <= 0 ? canvas.height : 0;
          }
        }
        
        // Add quantum fluctuations
        particle.vx += (Math.random() - 0.5) * 0.2;
        particle.vy += (Math.random() - 0.5) * 0.2;
      });

      // Create new particles
      if (Math.random() < 0.15) {
        createQuantumParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
      
      if (Math.random() < 0.1) {
        createNeonParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
      
      if (Math.random() < 0.08) {
        createEnergyParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    };

    // Draw quantum field
    const drawQuantumField = () => {
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, 300
      );
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw neural network
    const drawNeuralNetwork = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.sin(animationTime * 0.001 + i * 0.5) * 200 + canvas.width / 2;
        const y1 = Math.cos(animationTime * 0.001 + i * 0.3) * 150 + canvas.height / 2;
        const x2 = Math.sin(animationTime * 0.002 + i * 0.7) * 250 + canvas.width / 2;
        const y2 = Math.cos(animationTime * 0.0015 + i * 0.4) * 200 + canvas.height / 2;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Draw quantum waves
    const drawQuantumWaves = () => {
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.4)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = Math.sin(x * 0.01 + animationTime * 0.002 + i) * 50 + 
                    Math.sin(x * 0.02 + animationTime * 0.001) * 30 + 
                    canvas.height / 2 + i * 100;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update time
      animationTime += 16;
      setTime(animationTime);
      
      // Draw background layers
      drawQuantumField();
      drawNeuralNetwork();
      drawQuantumWaves();
      
      // Update and draw particles
      updateParticles();
      
      // Draw particles with enhanced effects
      particles.forEach(particle => {
        ctx.save();
        
        // Apply quantum effects
        if (particle.type === 'quantum') {
          ctx.globalAlpha = particle.life / particle.maxLife;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          
          // Draw quantum particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw quantum aura
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        // Apply neon effects
        if (particle.type === 'neon') {
          ctx.globalAlpha = (particle.life / particle.maxLife) * 0.8;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          
          // Draw neon particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw neon trail
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 2, particle.y - particle.vy * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Apply energy effects
        if (particle.type === 'energy') {
          ctx.globalAlpha = (particle.life / particle.maxLife) * 0.9;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 25;
          
          // Draw energy particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw energy burst
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
        }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Energy field overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Neon glow overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            animation: 'neonGlow 6s ease-in-out infinite'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes neonGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </motion.div>
  );
};

export default UltraFuturisticBackground2047;