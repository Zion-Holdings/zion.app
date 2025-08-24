import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticMatrixBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'neural' | 'cyberpunk' | 'holographic';
}

const UltraAdvancedFuturisticMatrixBackground: React.FC<UltraAdvancedFuturisticMatrixBackgroundProps> = ({
  children,
  intensity = 'medium',
  colorScheme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState<any[]>([]);
  const [matrixStreams, setMatrixStreams] = useState<any[]>([]);
  const [quantumStates, setQuantumStates] = useState<any[]>([]);

  // Color schemes
  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.95)',
      matrix: '#00ff00'
    },
    neural: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(20, 20, 30, 0.95)',
      matrix: '#ff6b6b'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(10, 10, 20, 0.95)',
      matrix: '#ff0080'
    },
    holographic: {
      primary: '#ff1493',
      secondary: '#00bfff',
      accent: '#7fff00',
      background: 'rgba(0, 0, 0, 0.90)',
      matrix: '#ff1493'
    }
  };

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)]
        });
      }
      setParticles(newParticles);
    };

    // Initialize matrix streams
    const initMatrixStreams = () => {
      const streamCount = intensity === 'high' ? 50 : intensity === 'medium' ? 30 : 15;
      const newStreams = [];
      
      for (let i = 0; i < streamCount; i++) {
        newStreams.push({
          x: Math.random() * dimensions.width,
          y: -50,
          speed: Math.random() * 3 + 1,
          length: Math.random() * 100 + 50,
          characters: '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      setMatrixStreams(newStreams);
    };

    // Initialize quantum states
    const initQuantumStates = () => {
      const stateCount = intensity === 'high' ? 20 : intensity === 'medium' ? 10 : 5;
      const newStates = [];
      
      for (let i = 0; i < stateCount; i++) {
        newStates.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          radius: Math.random() * 50 + 20,
          phase: Math.random() * Math.PI * 2,
          frequency: Math.random() * 0.02 + 0.01,
          amplitude: Math.random() * 30 + 20
        });
      }
      setQuantumStates(newStates);
    };

    initParticles();
    initMatrixStreams();
    initQuantumStates();

    let animationId: number;

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0 || particle.x < 0 || particle.x > dimensions.width || particle.y < 0 || particle.y > dimensions.height) {
          particle.x = Math.random() * dimensions.width;
          particle.y = Math.random() * dimensions.height;
          particle.life = particle.maxLife;
        }

        const opacity = particle.life / particle.maxLife;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw matrix streams
      matrixStreams.forEach((stream, index) => {
        stream.y += stream.speed;
        
        if (stream.y > dimensions.height + stream.length) {
          stream.y = -stream.length;
          stream.x = Math.random() * dimensions.width;
        }

        ctx.globalAlpha = stream.opacity;
        ctx.fillStyle = colors.matrix;
        ctx.font = '14px monospace';
        
        for (let i = 0; i < stream.length; i += 20) {
          const char = stream.characters[Math.floor(Math.random() * stream.characters.length)];
          const y = stream.y - i;
          if (y > 0 && y < dimensions.height) {
            ctx.fillText(char, stream.x, y);
          }
        }
      });

      // Update and draw quantum states
      quantumStates.forEach((state, index) => {
        state.phase += state.frequency;
        
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
          const x = state.x + Math.cos(angle + state.phase) * (state.radius + Math.sin(state.phase * 3) * state.amplitude);
          const y = state.y + Math.sin(angle + state.phase) * (state.radius + Math.cos(state.phase * 2) * state.amplitude);
          
          if (angle === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
      });

      // Draw quantum entanglement lines
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < quantumStates.length; i++) {
        for (let j = i + 1; j < quantumStates.length; j++) {
          const distance = Math.sqrt(
            Math.pow(quantumStates[i].x - quantumStates[j].x, 2) + 
            Math.pow(quantumStates[i].y - quantumStates[j].y, 2)
          );
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(quantumStates[i].x, quantumStates[i].y);
            ctx.lineTo(quantumStates[j].x, quantumStates[j].y);
            ctx.stroke();
          }
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, intensity, colors]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Advanced Matrix Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${colors.background}, rgba(0,0,0,0.98))`
        }}
      />
      
      {/* Quantum Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Holographic Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, transparent)`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 10}%`}
              y1="20%"
              x2={`${15 + i * 12}%`}
              y2="80%"
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.4"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                strokeDasharray: ["0,1000", "1000,0", "0,1000"]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Particle Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: colors.accent,
              left: `${80 - i * 20}%`,
              top: `${70 + i * 15}%`
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 5 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticMatrixBackground;