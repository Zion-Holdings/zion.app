import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2046: React.FC = () => {
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
    
    // Advanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'neon' | 'hologram';
      rotation: number;
      rotationSpeed: number;
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
        'rgba(255, 165, 0, 0.9)',   // Orange
        'rgba(255, 20, 147, 0.9)',  // Deep Pink
        'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
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
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2
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
        'rgba(255, 0, 0, 0.8)',     // Red
        'rgba(0, 255, 0, 0.8)',     // Green
        'rgba(0, 0, 255, 0.8)',     // Blue
      ];
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 100 + 50,
        type: 'neon',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    };

    // Create hologram particles
    const createHologramParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      const colors = [
        'rgba(255, 255, 255, 0.6)',  // White
        'rgba(200, 200, 255, 0.6)',  // Light Blue
        'rgba(255, 200, 255, 0.6)',  // Light Pink
        'rgba(200, 255, 200, 0.6)',  // Light Green
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
        type: 'hologram',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05
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
        particle.rotation += particle.rotationSpeed;
        
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
        
        // Add quantum randomness
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
      if (Math.random() < 0.05) {
        createHologramParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;
        
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'quantum') {
          // Draw quantum particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 * alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add quantum entanglement lines
          if (Math.random() < 0.1) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(
              (Math.random() - 0.5) * 100,
              (Math.random() - 0.5) * 100
            );
            ctx.stroke();
          }
        } else if (particle.type === 'neon') {
          // Draw neon particle with pulse effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15 * alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add neon glow
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, size + 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (particle.type === 'hologram') {
          // Draw hologram particle with transparency
          ctx.globalAlpha = alpha * 0.7;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.stroke();
          
          // Add hologram grid effect
          ctx.beginPath();
          ctx.moveTo(-size, 0);
          ctx.lineTo(size, 0);
          ctx.moveTo(0, -size);
          ctx.lineTo(0, size);
          ctx.stroke();
        }
        
        ctx.restore();
      });
    };

    // Draw quantum field lines
    const drawQuantumFieldLines = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.sin(animationTime * 0.001 + i * 0.5) * canvas.width * 0.5 + canvas.width * 0.5;
        const y1 = Math.cos(animationTime * 0.001 + i * 0.3) * canvas.height * 0.5 + canvas.height * 0.5;
        const x2 = Math.sin(animationTime * 0.002 + i * 0.7) * canvas.width * 0.5 + canvas.width * 0.5;
        const y2 = Math.cos(animationTime * 0.002 + i * 0.4) * canvas.height * 0.5 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Draw neural network connections
    const drawNeuralConnections = () => {
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < 15; i++) {
        const x1 = Math.sin(animationTime * 0.0005 + i * 0.8) * canvas.width * 0.4 + canvas.width * 0.5;
        const y1 = Math.cos(animationTime * 0.0005 + i * 0.6) * canvas.height * 0.4 + canvas.height * 0.5;
        const x2 = Math.sin(animationTime * 0.0008 + i * 1.2) * canvas.width * 0.4 + canvas.width * 0.5;
        const y2 = Math.cos(animationTime * 0.0008 + i * 0.9) * canvas.height * 0.4 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      animationTime += 16;
      setTime(animationTime);
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 20, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      updateParticles();
      drawParticles();
      
      // Draw quantum field lines
      drawQuantumFieldLines();
      
      // Draw neural network connections
      drawNeuralConnections();
      
      // Add mouse interaction
      if (Math.random() < 0.3) {
        createQuantumParticle(mousePosition.x, mousePosition.y);
      }
      
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
      className="fixed inset-0 pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,20,0.3) 0%, rgba(0,0,0,0.8) 100%)'
        }}
      />
      
      {/* Floating quantum orbs */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-70"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: '0 0 15px rgba(147, 51, 234, 0.8)'
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: '0 0 25px rgba(236, 72, 153, 0.8)'
        }}
      />
      
      {/* Quantum energy waves */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default UltraFuturisticBackground2046;