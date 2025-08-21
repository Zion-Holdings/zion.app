import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'neon' | 'cosmic' | 'cyberpunk' | 'quantum-fusion' | 'holographic' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-neural' | 'neural-quantum-cyberpunk' | 'quantum-energy' | 'quantum-futuristic' | 'cloud-futuristic' | 'devops-futuristic' | 'security-futuristic' | 'data-futuristic' | 'mobility-futuristic' | 'network-futuristic' | 'backup-futuristic' | 'itsm-futuristic' | 'monitoring-futuristic' | 'blockchain-futuristic' | 'metaverse-futuristic' | 'iot-futuristic' | 'edge-futuristic' | 'ar-futuristic' | 'digital-twin-futuristic' | '5g-futuristic' | 'biometric-futuristic' | 'autonomous-futuristic' | 'enterprise-futuristic' | 'holographic-futuristic' | 'ai-revolutionary' | 'quantum-revolutionary' | 'ai-quantum-revolutionary' | 'quantum-ai-revolutionary' | 'quantum-space-revolutionary' | 'quantum-iot-revolutionary' | 'quantum-energy-revolutionary' | 'quantum-logistics-revolutionary' | 'quantum-ai-finance' | 'ai-emotional' | 'ai-multimodal' | 'ai-autonomous' | 'ai-creative' | 'ai-healthcare' | 'ai-prediction' | 'neural-revolutionary' | 'quantum-security' | 'quantum-ai-interface' | 'ai-autonomous-vehicles' | 'quantum-iot-revolutionary' | 'space-futuristic' | 'consulting-futuristic' | 'api-futuristic' | 'integration-futuristic' | 'monitoring-futuristic' | 'backup-futuristic' | 'analytics-futuristic';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground({
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true,
  children
}: UltraAdvancedFuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  // Color schemes
  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    neon: {
      primary: '#00ff41',
      secondary: '#ff0080',
      accent: '#00ffff',
      background: 'linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #6600cc 75%, #9900ff 100%)'
    },
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    cyberpunk: {
      primary: '#ff006e',
      secondary: '#8338ec',
      accent: '#3a86ff',
      background: 'linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #6600cc 75%, #9900ff 100%)'
    },
    'quantum-fusion': {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    'holographic': {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    'neural': {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    'ai-futuristic': {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    },
    'space-futuristic': {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
    }
  };

  const currentColors = colorSchemes[colorScheme];
  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5,
    extreme: 2
  }[intensity];

  useEffect(() => {
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

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'energy';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = [currentColors.primary, currentColors.secondary, currentColors.accent][Math.floor(Math.random() * 3)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'holographic', 'energy'][Math.floor(Math.random() * 3)] as any;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Quantum tunneling effect
        if (enableQuantumEffects && this.type === 'quantum' && Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic flicker
        if (enableHolographic && this.type === 'holographic') {
          this.size *= 0.95 + Math.random() * 0.1;
        }
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.type === 'quantum') {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Quantum glow
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10 * intensityMultiplier;
          ctx.fill();
        } else if (this.type === 'holographic') {
          // Holographic effect
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Holographic glow
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15 * intensityMultiplier;
          ctx.stroke();
        } else {
          // Energy particle effect
          ctx.beginPath();
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Energy glow
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 8 * intensityMultiplier;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, currentColors.background.split(',')[0].replace('linear-gradient(135deg, ', '').replace(' 0%', ''));
      gradient.addColorStop(0.25, currentColors.background.split(',')[1].replace(' 25%', ''));
      gradient.addColorStop(0.5, currentColors.background.split(',')[2].replace(' 50%', ''));
      gradient.addColorStop(0.75, currentColors.background.split(',')[3].replace(' 75%', ''));
      gradient.addColorStop(1, currentColors.background.split(',')[4].replace(' 100%)', ''));
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Respawn dead particles
        if (particle.life <= 0) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw quantum field lines
      if (enableQuantumEffects) {
        drawQuantumFieldLines(ctx);
      }

      // Draw holographic grid
      if (enableHolographic) {
        drawHolographicGrid(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, intensityMultiplier, currentColors]);

  const drawQuantumFieldLines = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    ctx.save();
    ctx.strokeStyle = currentColors.primary;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;

    for (let i = 0; i < 20; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = x1 + (Math.random() - 0.5) * 200;
      const y2 = y1 + (Math.random() - 0.5) * 200;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    ctx.restore();
  };

  const drawHolographicGrid = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    ctx.save();
    ctx.strokeStyle = currentColors.secondary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.2;

    const gridSize = 50;
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

    ctx.restore();
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: currentColors.background,
        }}
      />

      {/* Quantum Energy Orbs */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${currentColors.primary}20, transparent)`,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic Elements */}
      {enableHolographic && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: currentColors.accent,
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-cyan-400 opacity-30"
            style={{
              left: `${15 + i * 25}%`,
              top: `${40 + i * 15}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} className="mb-1">
                {Math.random().toString(16).substring(2, 8).toUpperCase()}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Quantum Particle Overlay */}
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: currentColors.primary,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}