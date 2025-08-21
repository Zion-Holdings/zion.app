import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic' | 'quantum-fusion';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'high',
  colorScheme = 'quantum-fusion',
  particleCount = 300,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colorSchemes = {
    'quantum-fusion': {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.9)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#00ffff', '#ff00ff'],
      glow: '#00ffff',
      holographic: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#ff8000', '#8000ff']
    },
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.85)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
      glow: '#00ffff',
      holographic: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#ff8000', '#8000ff']
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080', '#00ffff', '#ffff00', '#ff4000', '#8000ff', '#00ff80'],
      glow: '#ff0080',
      holographic: ['#ff0080', '#00ffff', '#ffff00', '#ff4000', '#8000ff', '#00ff80']
    },
    holographic: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#ff8000', '#8000ff'],
      glow: '#00ffff',
      holographic: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#ff8000', '#8000ff']
    },
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80', '#ff0080', '#ffff00', '#00ffff', '#ff8000', '#8000ff'],
      glow: '#00ff80',
      holographic: ['#00ff80', '#ff0080', '#ffff00', '#00ffff', '#ff8000', '#8000ff']
    },
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(10, 10, 30, 0.9)',
      particles: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
      glow: '#4ecdc4',
      holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
    }
  };

  const intensitySettings = {
    low: { particleCount: 100, speed: 0.8, size: 2, opacity: 0.4 },
    medium: { particleCount: 200, speed: 1.2, size: 3, opacity: 0.6 },
    high: { particleCount: 300, speed: 1.5, size: 4, opacity: 0.8 },
    extreme: { particleCount: 500, speed: 2.0, size: 5, opacity: 1.0 }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];

    // Enhanced particle system with quantum effects
    class AdvancedParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;
      type: 'normal' | 'quantum' | 'holographic';
      quantumState: number;
      holographicPhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * 2;
        this.vy = (Math.random() - 0.5) * settings.speed * 2;
        this.size = Math.random() * settings.size + 1;
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity + 0.2;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
        this.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'holographic' : 'normal';
        this.quantumState = Math.random() * Math.PI * 2;
        this.holographicPhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() > 0.99) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Holographic phase shift
        if (this.type === 'holographic') {
          this.holographicPhase += 0.1;
        }

        // Quantum state evolution
        if (this.type === 'quantum') {
          this.quantumState += 0.05;
        }

        // Boundary wrapping with quantum effects
        if (this.x < 0 || this.x > canvas.width) {
          if (this.type === 'quantum' && Math.random() > 0.5) {
            this.x = this.x < 0 ? canvas.width : 0;
          } else {
            this.vx *= -1;
          }
        }
        if (this.y < 0 || this.y > canvas.height) {
          if (this.type === 'quantum' && Math.random() > 0.5) {
            this.y = this.y < 0 ? canvas.height : 0;
          } else {
            this.vy *= -1;
          }
        }

        // Mouse interaction for quantum particles
        if (this.type === 'quantum') {
          const dx = mousePosition.x - this.x;
          const dy = mousePosition.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const force = (100 - distance) / 100;
            this.vx += dx * force * 0.01;
            this.vy += dy * force * 0.01;
          }
        }
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = (this.life / this.maxLife) * this.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.type === 'holographic') {
          // Holographic effect with multiple colors
          const colors = colorSchemes[colorScheme].holographic;
          for (let i = 0; i < 3; i++) {
            const color = colors[i % colors.length];
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(
              this.x + Math.cos(this.holographicPhase + i * Math.PI / 3) * 2,
              this.y + Math.sin(this.holographicPhase + i * Math.PI / 3) * 2,
              this.size * 0.7,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        } else if (this.type === 'quantum') {
          // Quantum particle with wave function
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          
          // Draw quantum wave packet
          for (let i = 0; i < 5; i++) {
            const wavePhase = this.quantumState + i * Math.PI / 3;
            const waveSize = this.size * (1 + Math.sin(wavePhase) * 0.3);
            ctx.beginPath();
            ctx.arc(
              this.x + Math.cos(wavePhase) * 3,
              this.y + Math.sin(wavePhase) * 3,
              waveSize,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        } else {
          // Normal particle
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.life = this.maxLife;
        this.vx = (Math.random() - 0.5) * settings.speed * 2;
        this.vy = (Math.random() - 0.5) * settings.speed * 2;
      }
    }

    // Create particle array
    const particles: AdvancedParticle[] = [];
    for (let i = 0; i < settings.particleCount; i++) {
      particles.push(new AdvancedParticle());
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Reset dead particles
        if (particle.life <= 0) {
          particle.reset();
        }
      });

      // Draw quantum entanglement lines
      if (enableQuantumEffects) {
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;

        for (let i = 0; i < particles.length; i += 10) {
          for (let j = i + 10; j < particles.length; j += 10) {
            const p1 = particles[i];
            const p2 = particles[j];
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );

            if (distance < 150 && p1.type === 'quantum' && p2.type === 'quantum') {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw holographic grid
      if (enableHolographic) {
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.1;

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
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorScheme, intensity, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  // Enhanced quantum particle system
  const QuantumParticleSystem = () => {
    const [particles, setParticles] = useState<Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      quantumState: number;
    }>>([]);

    useEffect(() => {
      // Only run on client side
      if (typeof window === 'undefined') return;

      const generateParticles = () => {
        return Array.from({ length: 200 }, (_, i) => ({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
          quantumState: Math.random() * Math.PI * 2
        }));
      };

      setParticles(generateParticles());
    }, []);

    useEffect(() => {
      // Only run on client side
      if (typeof window === 'undefined' || particles.length === 0) return;

      const canvas = document.getElementById('quantum-canvas') as HTMLCanvasElement;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationId: number;
      let time = 0;

      const animate = () => {
        time += 0.01;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, i) => {
          // Update quantum state
          particle.quantumState += 0.02;
          
          // Quantum entanglement effect
          if (i % 3 === 0) {
            particle.x += Math.sin(particle.quantumState) * 0.5;
            particle.y += Math.cos(particle.quantumState) * 0.5;
          }

          // Normal movement
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle with quantum glow
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Draw quantum entanglement lines
          if (i % 5 === 0) {
            const nextParticle = particles[(i + 1) % particles.length];
            const distance = Math.sqrt(
              Math.pow(particle.x - nextParticle.x, 2) + 
              Math.pow(particle.y - nextParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(nextParticle.x, nextParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, [particles]);

    // Don't render on server side
    if (typeof window === 'undefined') return null;

    return (
      <canvas
        id="quantum-canvas"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  };

  // Enhanced holographic matrix effect
  const HolographicMatrix = () => {
    const [matrixData, setMatrixData] = useState<string[]>([]);

    useEffect(() => {
      const generateMatrix = () => {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const newMatrix = Array.from({ length: 50 }, () => 
          Array.from({ length: 80 }, () => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : ' '
          ).join('')
        );
        setMatrixData(newMatrix);
      };

      generateMatrix();
      const interval = setInterval(generateMatrix, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent" />
        {matrixData.map((line, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 font-mono text-xs whitespace-pre"
            style={{
              top: `${(i / matrixData.length) * 100}%`,
              left: '0',
              right: '0',
              textShadow: '0 0 5px #10b981'
            }}
          >
            {line}
          </div>
        ))}
      </div>
    );
  };

  // Enhanced neural network visualization
  const NeuralNetwork = () => {
    const [nodes, setNodes] = useState<Array<{x: number, y: number, connections: number[]}>>([]);

    useEffect(() => {
      const generateNetwork = () => {
        const newNodes = Array.from({ length: 25 }, (_, i) => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          connections: Array.from({ length: 3 }, () => Math.floor(Math.random() * 25))
        }));
        setNodes(newNodes);
      };

      generateNetwork();
      const interval = setInterval(generateNetwork, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none z-5 opacity-30">
        <svg className="w-full h-full">
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="2"
                fill="#3b82f6"
                className="animate-pulse"
              />
              {node.connections.map((targetIndex, j) => (
                <line
                  key={j}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nodes[targetIndex]?.x || 0}%`}
                  y2={`${nodes[targetIndex]?.y || 0}%`}
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  opacity="0.6"
                  className="animate-pulse"
                />
              ))}
            </g>
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced quantum particle system */}
      <QuantumParticleSystem />
      
      {/* Enhanced holographic matrix */}
      <HolographicMatrix />
      
      {/* Enhanced neural network */}
      <NeuralNetwork />
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/3 via-indigo-500/3 to-purple-500/3" />
      
      {/* Enhanced floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin-slow" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-32 left-32 w-40 h-40 border border-green-400/20 rotate-12 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 transform rotate-45 animate-spin-slow" />
      
      {/* Enhanced content wrapper */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;