import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum-fusion' | 'holographic-matrix' | 'neural-network' | 'cyberpunk-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced color schemes with more vibrant and futuristic colors
  const colorSchemes = {
    'quantum-fusion': {
      primary: '#00ffff',
      secondary: '#8b5cf6',
      tertiary: '#ec4899',
      accent: '#10b981',
      glow: 'rgba(0, 255, 255, 0.3)',
      matrix: 'rgba(139, 92, 246, 0.2)',
      quantum: 'rgba(16, 185, 129, 0.25)'
    },
    'holographic-matrix': {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      tertiary: '#00ffff',
      accent: '#f59e0b',
      glow: 'rgba(139, 92, 246, 0.4)',
      matrix: 'rgba(236, 72, 153, 0.3)',
      quantum: 'rgba(0, 255, 255, 0.25)'
    },
    'neural-network': {
      primary: '#10b981',
      secondary: '#00ffff',
      tertiary: '#8b5cf6',
      accent: '#f59e0b',
      glow: 'rgba(16, 185, 129, 0.35)',
      matrix: 'rgba(0, 255, 255, 0.3)',
      quantum: 'rgba(139, 92, 246, 0.25)'
    },
    'cyberpunk-fusion': {
      primary: '#ec4899',
      secondary: '#f59e0b',
      tertiary: '#00ffff',
      accent: '#10b981',
      glow: 'rgba(236, 72, 153, 0.4)',
      matrix: 'rgba(245, 158, 11, 0.3)',
      quantum: 'rgba(0, 255, 255, 0.25)'
    }
  };

  const currentColors = colorSchemes[colorScheme];
  const intensityMultiplier = {
    'low': 0.5,
    'medium': 1.0,
    'high': 1.5,
    'extreme': 2.0
  }[intensity];

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
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Enhanced particle system with quantum effects
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
      entanglement: QuantumParticle[];

      constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 + 1;
        this.color = type === 'quantum' ? currentColors.primary : 
                    type === 'holographic' ? currentColors.secondary :
                    type === 'neural' ? currentColors.tertiary : currentColors.accent;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = type;
        this.entanglement = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Quantum entanglement effects
        if (this.entanglement.length > 0) {
          this.entanglement.forEach(partner => {
            if (partner.life > 0) {
              const dx = partner.x - this.x;
              const dy = partner.y - this.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 100) {
                ctx!.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                ctx!.lineWidth = 1;
                ctx!.beginPath();
                ctx!.moveTo(this.x, this.y);
                ctx!.lineTo(partner.x, partner.y);
                ctx!.stroke();
              }
            }
          });
        }

        // Boundary wrapping with quantum tunneling effect
        if (this.x < 0) this.x = dimensions.width;
        if (this.x > dimensions.width) this.x = 0;
        if (this.y < 0) this.y = dimensions.height;
        if (this.y > dimensions.height) this.y = 0;
      }

      draw() {
        if (ctx) {
          // Enhanced particle rendering with glow effects
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(0.5, `${this.color}80`);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Quantum glow effect
          if (this.type === 'quantum') {
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.size * 3;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }
    }

    // Create enhanced particle system
    const particles: QuantumParticle[] = [];
    const particleTypes: ('quantum' | 'holographic' | 'neural' | 'cyberpunk')[] = ['quantum', 'holographic', 'neural', 'cyberpunk'];

    for (let i = 0; i < particleCount * intensityMultiplier; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const particle = new QuantumParticle(
        Math.random() * dimensions.width,
        Math.random() * dimensions.height,
        type
      );

      // Create quantum entanglement between some particles
      if (Math.random() < 0.3 && particles.length > 0) {
        const partner = particles[Math.floor(Math.random() * particles.length)];
        particle.entanglement.push(partner);
        partner.entanglement.push(particle);
      }

      particles.push(particle);
    }

    // Enhanced animation loop with quantum effects
    let animationId: number;
    const animate = () => {
      if (ctx) {
        // Create enhanced background with gradient
        const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, `rgba(0, 0, 0, 0.9)`);
        gradient.addColorStop(0.7, `rgba(0, 0, 0, 0.85)`);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0.9)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, dimensions.width, dimensions.height);

        // Draw quantum field effects
        if (enableQuantumEffects) {
          ctx.globalCompositeOperation = 'screen';
          for (let i = 0; i < 5; i++) {
            const time = Date.now() * 0.001 * animationSpeed;
            const x = Math.sin(time + i) * dimensions.width * 0.5 + dimensions.width * 0.5;
            const y = Math.cos(time + i * 0.7) * dimensions.height * 0.5 + dimensions.height * 0.5;
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
            gradient.addColorStop(0, `${currentColors.quantum}40`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 200, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalCompositeOperation = 'source-over';
        }

        // Draw holographic matrix effects
        if (enableHolographic) {
          ctx.strokeStyle = `${currentColors.matrix}20`;
          ctx.lineWidth = 1;
          
          // Matrix grid
          for (let x = 0; x < dimensions.width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, dimensions.height);
            ctx.stroke();
          }
          for (let y = 0; y < dimensions.height; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(dimensions.width, y);
            ctx.stroke();
          }

          // Holographic circles
          for (let i = 0; i < 3; i++) {
            const time = Date.now() * 0.0005 * animationSpeed;
            const x = Math.sin(time + i * 2) * dimensions.width * 0.3 + dimensions.width * 0.5;
            const y = Math.cos(time + i * 1.5) * dimensions.height * 0.3 + dimensions.height * 0.5;
            const radius = 50 + Math.sin(time * 2 + i) * 20;
            
            ctx.strokeStyle = `${currentColors.matrix}30`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Update and draw particles
        particles.forEach((particle, index) => {
          particle.update();
          particle.draw();

          // Respawn particles
          if (particle.life <= 0) {
            particles[index] = new QuantumParticle(
              Math.random() * dimensions.width,
              Math.random() * dimensions.height,
              particleTypes[Math.floor(Math.random() * particleTypes.length)]
            );
          }
        });

        // Draw neural network connections
        if (enableQuantumEffects) {
          ctx.strokeStyle = `${currentColors.quantum}15`;
          ctx.lineWidth = 1;
          
          for (let i = 0; i < particles.length; i += 10) {
            for (let j = i + 10; j < particles.length; j += 10) {
              const p1 = particles[i];
              const p2 = particles[j];
              const distance = Math.sqrt(
                Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
              );
              
              if (distance < 150) {
                ctx.globalAlpha = (150 - distance) / 150 * 0.3;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
          ctx.globalAlpha = 1;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, particleCount, animationSpeed, intensityMultiplier, currentColors, enableHolographic, enableQuantumEffects]);

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          filter: isHovering ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)',
          transition: 'filter 0.3s ease'
        }}
      />

      {/* Enhanced Overlay Effects */}
      <div className="relative z-10">
        {/* Quantum Field Overlay */}
        {enableQuantumEffects && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                `radial-gradient(circle at 20% 20%, ${currentColors.quantum}05 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 80%, ${currentColors.quantum}05 0%, transparent 50%)`,
                `radial-gradient(circle at 20% 20%, ${currentColors.quantum}05 0%, transparent 50%)`
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Holographic Matrix Overlay */}
        {enableHolographic && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `
                linear-gradient(90deg, ${currentColors.matrix}10 1px, transparent 1px),
                linear-gradient(0deg, ${currentColors.matrix}10 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        )}

        {/* Neural Network Pulse */}
        {enableQuantumEffects && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `radial-gradient(circle, ${currentColors.quantum}20 0%, transparent 70%)`,
              transformOrigin: 'center'
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;