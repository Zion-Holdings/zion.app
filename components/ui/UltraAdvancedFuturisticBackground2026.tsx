import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2026Props {
  intensity?: 'mild' | 'moderate' | 'intense' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'neural-network' | 'holographic-matrix' | 'cyberpunk-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralPulse?: boolean;
  enableConsciousnessSimulation?: boolean;
  children: React.ReactNode;
}

const UltraAdvancedFuturisticBackground2026: React.FC<UltraAdvancedFuturisticBackground2026Props> = ({
  intensity = 'moderate',
  colorScheme = 'quantum-fusion',
  particleCount = 300,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralPulse = true,
  enableConsciousnessSimulation = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [consciousnessState, setConsciousnessState] = useState(0);

  // Intensity multipliers
  const intensityMultipliers = {
    mild: 0.5,
    moderate: 1.0,
    intense: 1.5,
    extreme: 2.0
  };

  const multiplier = intensityMultipliers[intensity];

  // Color schemes
  const colorSchemes = {
    'quantum-fusion': {
      primary: '#00ffff',
      secondary: '#8b5cf6',
      tertiary: '#ec4899',
      accent: '#10b981',
      glow: '0 0 30px rgba(0, 255, 255, 0.6)',
      matrix: '0 0 50px rgba(139, 92, 246, 0.4)'
    },
    'neural-network': {
      primary: '#10b981',
      secondary: '#3b82f6',
      tertiary: '#f59e0b',
      accent: '#ef4444',
      glow: '0 0 30px rgba(16, 185, 129, 0.6)',
      matrix: '0 0 50px rgba(59, 130, 246, 0.4)'
    },
    'holographic-matrix': {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      tertiary: '#00ffff',
      accent: '#f59e0b',
      glow: '0 0 30px rgba(139, 92, 246, 0.6)',
      matrix: '0 0 50px rgba(236, 72, 153, 0.4)'
    },
    'cyberpunk-fusion': {
      primary: '#ec4899',
      secondary: '#f59e0b',
      tertiary: '#00ffff',
      accent: '#10b981',
      glow: '0 0 30px rgba(236, 72, 153, 0.6)',
      matrix: '0 0 50px rgba(245, 158, 11, 0.4)'
    }
  };

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: 'quantum' | 'neural' | 'holographic' | 'consciousness';
      color: string;
      phase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * multiplier;
        this.vy = (Math.random() - 0.5) * 2 * multiplier;
        this.size = Math.random() * 3 * multiplier + 1;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'neural', 'holographic', 'consciousness'][Math.floor(Math.random() * 4)] as any;
        this.color = this.getColor();
        this.phase = Math.random() * Math.PI * 2;
      }

      getColor() {
        switch (this.type) {
          case 'quantum':
            return colors.primary;
          case 'neural':
            return colors.secondary;
          case 'holographic':
            return colors.tertiary;
          case 'consciousness':
            return colors.accent;
          default:
            return colors.primary;
        }
      }

      update() {
        this.x += this.vx * animationSpeed;
        this.y += this.vy * animationSpeed;
        this.life--;
        this.phase += 0.02 * animationSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Quantum entanglement effect
        if (enableQuantumEffects && this.type === 'quantum') {
          this.x += Math.sin(this.phase) * 0.5;
          this.y += Math.cos(this.phase) * 0.5;
        }

        // Neural pulse effect
        if (enableNeuralPulse && this.type === 'neural') {
          this.size = Math.sin(this.phase) * 2 + 2;
        }

        // Holographic matrix effect
        if (enableHolographic && this.type === 'holographic') {
          this.x += Math.sin(this.phase * 2) * 1;
          this.y += Math.cos(this.phase * 2) * 1;
        }

        // Consciousness simulation effect
        if (enableConsciousnessSimulation && this.type === 'consciousness') {
          this.x += Math.sin(consciousnessState + this.phase) * 0.8;
          this.y += Math.cos(consciousnessState + this.phase) * 0.8;
        }
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          
          // Enhanced glow effects
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15 * multiplier;
          
          // Particle drawing based on type
          switch (this.type) {
            case 'quantum':
              this.drawQuantumParticle(ctx);
              break;
            case 'neural':
              this.drawNeuralParticle(ctx);
              break;
            case 'holographic':
              this.drawHolographicParticle(ctx);
              break;
            case 'consciousness':
              this.drawConsciousnessParticle(ctx);
              break;
          }
          
          ctx.restore();
        }
      }

      drawQuantumParticle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Quantum entanglement lines
        if (Math.random() < 0.1) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + Math.random() * 50 - 25, this.y + Math.random() * 50 - 25);
          ctx.stroke();
        }
      }

      drawNeuralParticle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Neural connections
        if (Math.random() < 0.15) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + Math.random() * 30 - 15, this.y + Math.random() * 30 - 15);
          ctx.stroke();
        }
      }

      drawHolographicParticle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Holographic matrix effect
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        ctx.stroke();
      }

      drawConsciousnessParticle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Consciousness waves
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    let particles: QuantumParticle[] = [];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new QuantumParticle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update consciousness state
      setConsciousnessState(prev => prev + 0.01);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Recreate dead particles
        if (particle.life <= 0) {
          particles[index] = new QuantumParticle();
        }
      });
      
      // Draw quantum field lines
      if (enableQuantumEffects) {
        drawQuantumFieldLines(ctx);
      }
      
      // Draw neural network
      if (enableNeuralPulse) {
        drawNeuralNetwork(ctx);
      }
      
      // Draw holographic matrix
      if (enableHolographic) {
        drawHolographicMatrix(ctx);
      }
      
      // Draw consciousness simulation
      if (enableConsciousnessSimulation) {
        drawConsciousnessSimulation(ctx);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Interactive particle attraction
      particles.forEach(particle => {
        const dx = e.clientX - particle.x;
        const dy = e.clientY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.001;
          particle.vy += dy * force * 0.001;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralPulse, enableConsciousnessSimulation, colors, multiplier]);

  // Helper functions for advanced effects
  const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;
    
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.lineTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };

  const drawNeuralNetwork = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = colors.secondary;
    ctx.lineWidth = 0.3;
    ctx.globalAlpha = 0.2;
    
    for (let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.lineTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };

  const drawHolographicMatrix = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = colors.tertiary;
    ctx.lineWidth = 0.2;
    ctx.globalAlpha = 0.15;
    
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.lineTo(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };

  const drawConsciousnessSimulation = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 0.4;
    ctx.globalAlpha = 0.25;
    
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() * 50 + 20,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)`
        }}
      />
      
      {/* Quantum Field Overlay */}
      {enableQuantumEffects && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.primary}10 0%, transparent 50%)`,
            transition: 'all 0.1s ease-out'
          }}
        />
      )}
      
      {/* Neural Pulse Overlay */}
      {enableNeuralPulse && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              `radial-gradient(circle at center, ${colors.secondary}05 0%, transparent 70%)`,
              `radial-gradient(circle at center, ${colors.secondary}15 0%, transparent 70%)`,
              `radial-gradient(circle at center, ${colors.secondary}05 0%, transparent 70%)`
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Holographic Matrix Overlay */}
      {enableHolographic && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${colors.tertiary}20 1px, transparent 1px),
              linear-gradient(0deg, ${colors.tertiary}20 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      )}
      
      {/* Consciousness Simulation Overlay */}
      {enableConsciousnessSimulation && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle at center, ${colors.accent}10 0%, transparent 80%)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground2026;