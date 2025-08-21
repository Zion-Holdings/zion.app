import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  variant?: 'quantum-entanglement' | 'holographic-advanced' | 'cyberpunk-holographic' | 'neural-quantum' | 'quantum-matrix' | 'quantum-space' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'quantum-holographic-advanced' | 'ai-futuristic' | 'neural-cyberpunk';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  children: React.ReactNode;
  className?: string;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  variant = 'quantum-entanglement',
  intensity = 'medium',
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let holographicGrid: GridPoint[] = [];
    let quantumWaves: Wave[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
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
      alpha: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = getRandomColor();
        this.alpha = 1;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 50;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        this.alpha = 1 - (this.life / this.maxLife);
        
        if (this.life > this.maxLife) {
          this.life = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.alpha = 1;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Grid point class
    class GridPoint {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulse: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.pulse += 0.02;
        this.alpha = 0.2 + Math.sin(this.pulse) * 0.3;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Wave class
    class Wave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = Math.random() * 200 + 100;
        this.speed = Math.random() * 2 + 1;
        this.alpha = 1;
        this.color = getRandomColor();
      }

      update() {
        this.radius += this.speed;
        this.alpha = 1 - (this.radius / this.maxRadius);
        
        if (this.radius > this.maxRadius) {
          this.radius = 0;
          this.alpha = 1;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Helper functions
    function getRandomColor(): string {
      const colors = [
        '#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080',
        '#8000ff', '#ff8000', '#00ff80', '#ff0080', '#80ff00'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createHolographicGrid() {
      holographicGrid = [];
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.7) {
            holographicGrid.push(new GridPoint(x, y));
          }
        }
      }
    }

    function createQuantumWaves() {
      quantumWaves = [];
      for (let i = 0; i < 5; i++) {
        quantumWaves.push(new Wave(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    }

    // Initialize
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    createHolographicGrid();
    createQuantumWaves();

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw holographic grid
      holographicGrid.forEach(point => {
        point.update();
        point.draw();
      });

      // Update and draw quantum waves
      quantumWaves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      // Draw variant-specific effects
      drawVariantEffects();

      animationFrameId = requestAnimationFrame(animate);
    }

    function drawVariantEffects() {
      switch (variant) {
        case 'quantum-entanglement':
          drawQuantumEntanglement();
          break;
        case 'holographic-advanced':
          drawHolographicAdvanced();
          break;
        case 'cyberpunk-holographic':
          drawCyberpunkHolographic();
          break;
        case 'neural-quantum':
          drawNeuralQuantum();
          break;
        case 'quantum-matrix':
          drawQuantumMatrix();
          break;
        case 'quantum-space':
          drawQuantumSpace();
          break;
        case 'holographic-matrix':
          drawHolographicMatrix();
          break;
        case 'neural-quantum-cyberpunk':
          drawNeuralQuantumCyberpunk();
          break;
        case 'quantum-holographic-advanced':
          drawQuantumHolographicAdvanced();
          break;
        case 'ai-futuristic':
          drawAIFuturistic();
          break;
        case 'neural-cyberpunk':
          drawNeuralCyberpunk();
          break;
        default:
          drawQuantumEntanglement();
      }
    }

    function drawQuantumEntanglement() {
      // Draw quantum entanglement lines
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < particles.length; i += 2) {
        if (particles[i] && particles[i + 1]) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawHolographicAdvanced() {
      // Draw advanced holographic patterns
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.4;
      
      for (let i = 0; i < holographicGrid.length; i++) {
        const point = holographicGrid[i];
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x + Math.sin(Date.now() * 0.001 + i) * 20, 
                   point.y + Math.cos(Date.now() * 0.001 + i) * 20);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function drawCyberpunkHolographic() {
      // Draw cyberpunk-style holographic effects
      ctx.strokeStyle = '#ffff00';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;
      
      holographicGrid.forEach((point, i) => {
        const time = Date.now() * 0.001;
        const x = point.x + Math.sin(time + i) * 30;
        const y = point.y + Math.cos(time + i) * 30;
        
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }

    function drawNeuralQuantum() {
      // Draw neural network connections
      ctx.strokeStyle = '#00ff80';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      
      particles.forEach((particle, i) => {
        if (i % 3 === 0) {
          const nextParticle = particles[(i + 1) % particles.length];
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(nextParticle.x, nextParticle.y);
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
    }

    function drawQuantumMatrix() {
      // Draw matrix-style digital rain
      ctx.fillStyle = '#00ff00';
      ctx.font = '12px monospace';
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 50) % canvas.width;
        const y = (Date.now() * 0.1 + i * 20) % canvas.height;
        ctx.fillText('01', x, y);
      }
      ctx.globalAlpha = 1;
    }

    function drawQuantumSpace() {
      // Draw space-like quantum effects
      ctx.strokeStyle = '#8000ff';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;
      
      quantumWaves.forEach(wave => {
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }

    function drawHolographicMatrix() {
      // Draw holographic matrix patterns
      ctx.strokeStyle = '#ff0080';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      
      for (let i = 0; i < canvas.width; i += 40) {
        for (let j = 0; j < canvas.height; j += 40) {
          const time = Date.now() * 0.001;
          const offset = Math.sin(time + i * 0.1) * 20;
          
          ctx.beginPath();
          ctx.moveTo(i, j);
          ctx.lineTo(i + offset, j + offset);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawNeuralQuantumCyberpunk() {
      // Draw combined neural-quantum-cyberpunk effects
      drawNeuralQuantum();
      drawCyberpunkHolographic();
      drawQuantumEntanglement();
    }

    function drawQuantumHolographicAdvanced() {
      // Draw advanced quantum-holographic effects
      drawQuantumEntanglement();
      drawHolographicAdvanced();
      drawQuantumSpace();
    }

    function drawAIFuturistic() {
      // Draw AI futuristic patterns
      ctx.strokeStyle = '#80ff00';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.5;
      
      particles.forEach((particle, i) => {
        const time = Date.now() * 0.001;
        const radius = Math.sin(time + i) * 30 + 50;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }

    function drawNeuralCyberpunk() {
      // Draw neural-cyberpunk effects
      drawNeuralQuantum();
      drawCyberpunkHolographic();
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity]);

  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5,
    extreme: 2
  };

  return (
    <div ref={containerRef} className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          filter: `blur(${intensityMultiplier[intensity] * 0.5}px)`,
          opacity: 0.8 + (intensityMultiplier[intensity] * 0.1)
        }}
      />
      
      {/* Additional animated layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Energy orbs */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30"
          animate={{
            y: [0, -30, 0],
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Scanning lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          animate={{
            y: [-100, '100vh']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;