import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
}

interface QuantumField {
  id: number;
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;
  phase: number;
}

const UltraAdvancedFuturisticBackground2045: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Quantum field particles
    const particles: Particle[] = [];
    const quantumFields: QuantumField[] = [];
    
    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100
      });
    }

    // Initialize quantum fields
    for (let i = 0; i < 8; i++) {
      quantumFields.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 200 + 100,
        intensity: Math.random() * 0.5 + 0.5,
        color: `hsl(${i * 45}, 80%, 60%)`,
        phase: Math.random() * Math.PI * 2
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, 0,
        dimensions.width / 2, dimensions.height / 2, Math.max(dimensions.width, dimensions.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 20, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Draw quantum fields
      quantumFields.forEach(field => {
        const intensity = Math.sin(time * 0.5 + field.phase) * 0.3 + 0.7;
        
        // Create radial gradient for quantum field
        const fieldGradient = ctx.createRadialGradient(
          field.x, field.y, 0,
          field.x, field.y, field.radius * intensity
        );
        fieldGradient.addColorStop(0, `${field.color}20`);
        fieldGradient.addColorStop(0.5, `${field.color}10`);
        fieldGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = fieldGradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius * intensity, 0, Math.PI * 2);
        ctx.fill();

        // Draw field boundary with neon effect
        ctx.strokeStyle = field.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius * intensity, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;

        // Reset life when it gets too high
        if (particle.life > 100) {
          particle.life = 0;
          particle.opacity = Math.random() * 0.8 + 0.2;
        }

        // Calculate opacity based on life
        const currentOpacity = particle.opacity * (1 - particle.life / 100);

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Draw connection lines to nearby particles
        particles.forEach(otherParticle => {
          if (particle.id === otherParticle.id) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw mouse interaction field
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        const mouseFieldRadius = 150;
        const mouseGradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, mouseFieldRadius
        );
        mouseGradient.addColorStop(0, 'rgba(0, 212, 255, 0.1)');
        mouseGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        mouseGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, mouseFieldRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw neon ring
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, mouseFieldRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw floating geometric shapes
      const shapes = [
        { x: dimensions.width * 0.2, y: dimensions.height * 0.3, size: 40, rotation: time * 0.5 },
        { x: dimensions.width * 0.8, y: dimensions.height * 0.7, size: 60, rotation: time * 0.3 },
        { x: dimensions.width * 0.1, y: dimensions.height * 0.8, size: 30, rotation: time * 0.7 }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Draw hexagon
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
      });

      // Draw energy waves
      for (let i = 0; i < 3; i++) {
        const waveY = dimensions.height * (0.2 + i * 0.3);
        const waveAmplitude = 20;
        const waveFrequency = 0.01;
        const waveSpeed = time * 0.5 + i * 2;
        
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 - i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < dimensions.width; x += 2) {
          const y = waveY + Math.sin(x * waveFrequency + waveSpeed) * waveAmplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, mousePosition]);

  return (
    <motion.div
      className="fixed inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.8) 50%, rgba(0,0,20,0.9) 100%)'
        }}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      {/* Floating neon orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  );
};

export default UltraAdvancedFuturisticBackground2045;