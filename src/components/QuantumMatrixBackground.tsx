import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumMatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  showParticles?: boolean;
  showGrid?: boolean;
  showHolograms?: boolean;
}

export const QuantumMatrixBackground: React.FC<QuantumMatrixBackgroundProps> = ({
  intensity = 'medium',
  showParticles = true,
  showGrid = true,
  showHolograms = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      quantumState: number;
    }> = [];

    const colors = ['#22ddd2', '#8b5cf6', '#3b82f6', '#22ddd2'];
    const intensityMultiplier = intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1;

    // Initialize particles
    for (let i = 0; i < 50 * intensityMultiplier; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        quantumState: Math.random()
      });
    }

    // Quantum entanglement effect
    const entangleParticles = () => {
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          const p1 = particles[i];
          const p2 = particles[i + 1];
          
          // Create quantum correlation
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          
          if (distance < 100) {
            // Draw entanglement line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 221, 210, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Neural network connections
    const drawNeuralConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          
          if (distance < 150) {
            const strength = 1 - distance / 150;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * strength})`;
            ctx.lineWidth = strength * 2;
            ctx.stroke();
          }
        }
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
        particle.quantumState += 0.02;

        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with quantum effects
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        // Quantum superposition effect
        const sizeVariation = Math.sin(particle.quantumState) * 0.5;
        const finalSize = particle.size + sizeVariation;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Quantum glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections
      if (showParticles) {
        drawNeuralConnections();
        entangleParticles();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, showParticles]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Quantum Matrix Canvas */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.6 : 0.4 }}
        />
      )}

      {/* Cyber Grid Background */}
      {showGrid && (
        <div className="absolute inset-0 cyber-grid-dense opacity-20" />
      )}

      {/* Holographic Projections */}
      {showHolograms && (
        <>
          {/* Floating Holographic Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 221, 210, 0.3) 0%, transparent 70%)',
              border: '1px solid rgba(34, 221, 210, 0.5)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-40 right-32 w-24 h-24"
            style={{
              background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, rgba(34, 221, 210, 0.4), rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4), rgba(34, 221, 210, 0.4))'
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-zion-cyan text-xs font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`
                }}
                animate={{
                  y: ['-100vh', '100vh']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Quantum Energy Fields */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 221, 210, 0.1) 0%, transparent 70%)',
            border: '1px solid rgba(34, 221, 210, 0.2)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-zion-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};