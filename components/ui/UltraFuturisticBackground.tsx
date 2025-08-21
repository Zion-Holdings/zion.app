import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium',
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
    let neuralConnections: NeuralConnection[] = [];
    let cyberpunkEffects: CyberpunkEffect[] = [];
    let quantumEntanglements: QuantumEntanglement[] = [];

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

    // Enhanced Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'energy' | 'data' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      quantumState: number;
      holographicLayer: number;
      neuralConnection: number;
      cyberpunkGlow: number;

      constructor(x: number, y: number, type: 'energy' | 'data' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 4 + 2;
        this.maxLife = Math.random() * 150 + 100;
        this.life = this.maxLife;
        this.type = type;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.1 + 0.05;
        this.quantumState = Math.random() * Math.PI * 2;
        this.holographicLayer = Math.random() * 5;
        this.neuralConnection = Math.random() * 8;
        this.cyberpunkGlow = Math.random() * Math.PI * 2;
        
        switch (type) {
          case 'energy':
            this.color = `hsl(${200 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'data':
            this.color = `hsl(${120 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'quantum':
            this.color = `hsl(${280 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${0 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${60 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${320 + Math.random() * 60}, 80%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;
        this.quantumState += 0.02;
        this.cyberpunkGlow += 0.03;
        
        // Bounce off edges with quantum tunneling effect
        if (this.x <= 0 || this.x >= canvas.width) {
          if (this.type === 'quantum' && Math.random() < 0.1) {
            // Quantum tunneling
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
          } else {
            this.vx *= -1;
          }
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          if (this.type === 'quantum' && Math.random() < 0.1) {
            // Quantum tunneling
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
          } else {
            this.vy *= -1;
          }
        }
        
        // Add quantum entanglement effect
        if (this.type === 'quantum' && Math.random() < 0.005) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Neural network connections
        if (this.type === 'neural' && Math.random() < 0.01) {
          this.neuralConnection = Math.random() * 8;
        }
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          
          // Enhanced particle rendering based on type
          switch (this.type) {
            case 'quantum':
              this.drawQuantumParticle(ctx);
              break;
            case 'holographic':
              this.drawHolographicParticle(ctx);
              break;
            case 'neural':
              this.drawNeuralParticle(ctx);
              break;
            case 'cyberpunk':
              this.drawCyberpunkParticle(ctx);
              break;
            default:
              this.drawStandardParticle(ctx);
          }
          
          ctx.restore();
        }
      }

      drawQuantumParticle(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulse) * 0.5 + 0.5;
        const size = this.size * (1 + pulse * 0.5);
        
        // Quantum wave function
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2 + this.quantumState;
          const radius = size * (0.5 + Math.sin(angle * 3) * 0.3);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Quantum field lines
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      drawHolographicParticle(ctx: CanvasRenderingContext2D) {
        const layers = 3;
        for (let i = 0; i < layers; i++) {
          const layerAlpha = (this.life / this.maxLife) * (1 - i / layers) * 0.7;
          const layerSize = this.size * (1 + i * 0.3);
          const layerColor = `hsla(${parseInt(this.color.match(/hsl\((\d+)/)?.[1] || '0')}, 80%, 70%, ${layerAlpha})`;
          
          ctx.globalAlpha = layerAlpha;
          ctx.fillStyle = layerColor;
          ctx.beginPath();
          ctx.arc(0, 0, layerSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      drawNeuralParticle(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulse) * 0.5 + 0.5;
        const size = this.size * (1 + pulse * 0.3);
        
        // Neural node
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Neural connections
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = (this.life / this.maxLife) * 0.5;
        for (let i = 0; i < 3; i++) {
          const angle = (i / 3) * Math.PI * 2 + this.neuralConnection;
          const endX = Math.cos(angle) * size * 2;
          const endY = Math.sin(angle) * size * 2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
      }

      drawCyberpunkParticle(ctx: CanvasRenderingContext2D) {
        const glow = Math.sin(this.cyberpunkGlow) * 0.5 + 0.5;
        const size = this.size * (1 + glow * 0.5);
        
        // Cyberpunk glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
      }

      drawStandardParticle(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Enhanced GridPoint class for holographic effects
    class GridPoint {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.pulse += this.pulseSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulse) * 0.5 + 0.5;
        ctx.globalAlpha = this.alpha * pulse;
        ctx.fillStyle = '#00ffff';
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      }
    }

    // Enhanced Wave class for quantum effects
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
        this.color = `hsl(${280 + Math.random() * 40}, 70%, 60%)`;
      }

      update() {
        this.radius += this.speed;
        this.alpha = 1 - (this.radius / this.maxRadius);
        return this.alpha > 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Neural Connection class
    class NeuralConnection {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
      alpha: number;
      pulse: number;

      constructor() {
        this.x1 = Math.random() * canvas.width;
        this.y1 = Math.random() * canvas.height;
        this.x2 = Math.random() * canvas.width;
        this.y2 = Math.random() * canvas.height;
        this.strength = Math.random() * 0.5 + 0.5;
        this.alpha = Math.random() * 0.3 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.pulse += 0.02;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulse) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(0, 255, 255, ${this.alpha * pulse})`;
        ctx.lineWidth = this.strength * 3;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
      }
    }

    // Cyberpunk Effect class
    class CyberpunkEffect {
      x: number;
      y: number;
      size: number;
      alpha: number;
      rotation: number;
      rotationSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
        this.color = `hsl(${320 + Math.random() * 40}, 80%, 60%)`;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        
        // Cyberpunk geometric shape
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Quantum Entanglement class
    class QuantumEntanglement {
      particles: Array<{x: number, y: number, size: number, alpha: number}>;
      connections: Array<{from: number, to: number, strength: number}>;
      pulse: number;

      constructor() {
        this.particles = [];
        this.connections = [];
        this.pulse = Math.random() * Math.PI * 2;
        
        // Create entangled particles
        for (let i = 0; i < 5; i++) {
          this.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 2,
            alpha: Math.random() * 0.5 + 0.3
          });
        }
        
        // Create entanglement connections
        for (let i = 0; i < 3; i++) {
          this.connections.push({
            from: Math.floor(Math.random() * this.particles.length),
            to: Math.floor(Math.random() * this.particles.length),
            strength: Math.random() * 0.5 + 0.5
          });
        }
      }

      update() {
        this.pulse += 0.03;
        
        // Update particle positions with quantum uncertainty
        this.particles.forEach(particle => {
          if (Math.random() < 0.01) {
            particle.x += (Math.random() - 0.5) * 20;
            particle.y += (Math.random() - 0.5) * 20;
          }
        });
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulse) * 0.5 + 0.5;
        
        // Draw entanglement connections
        this.connections.forEach(connection => {
          const from = this.particles[connection.from];
          const to = this.particles[connection.to];
          
          ctx.strokeStyle = `rgba(255, 0, 255, ${connection.strength * pulse})`;
          ctx.lineWidth = connection.strength * 2;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        });
        
        // Draw particles
        this.particles.forEach(particle => {
          ctx.fillStyle = `rgba(255, 0, 255, ${particle.alpha * pulse})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Initialize effects based on variant
    const initializeEffects = () => {
      particles = [];
      holographicGrid = [];
      quantumWaves = [];
      neuralConnections = [];
      cyberpunkEffects = [];
      quantumEntanglements = [];

      const particleCount = intensity === 'high' ? 1200 : intensity === 'medium' ? 800 : 400;
      
      for (let i = 0; i < particleCount; i++) {
        let particleType: 'energy' | 'data' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
        
        switch (variant) {
          case 'quantum':
            particleType = Math.random() < 0.7 ? 'quantum' : 'energy';
            break;
          case 'holographic':
            particleType = Math.random() < 0.7 ? 'holographic' : 'data';
            break;
          case 'neural':
            particleType = Math.random() < 0.7 ? 'neural' : 'data';
            break;
          case 'cyberpunk':
            particleType = Math.random() < 0.7 ? 'cyberpunk' : 'energy';
            break;
          case 'quantum-entanglement':
            particleType = Math.random() < 0.6 ? 'quantum' : 'energy';
            break;
          case 'holographic-matrix':
            particleType = Math.random() < 0.6 ? 'holographic' : 'data';
            break;
          case 'neural-quantum-cyberpunk':
            particleType = ['neural', 'quantum', 'cyberpunk'][Math.floor(Math.random() * 3)] as 'energy' | 'data' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
            break;
          default:
            particleType = ['energy', 'data', 'quantum', 'holographic'][Math.floor(Math.random() * 4)] as 'energy' | 'data' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
        }
        
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          particleType
        ));
      }

      // Initialize grid for holographic effects
      if (variant.includes('holographic')) {
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            holographicGrid.push(new GridPoint(x, y));
          }
        }
      }

      // Initialize quantum waves
      if (variant.includes('quantum')) {
        for (let i = 0; i < 5; i++) {
          quantumWaves.push(new Wave(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          ));
        }
      }

      // Initialize neural connections
      if (variant.includes('neural')) {
        for (let i = 0; i < 20; i++) {
          neuralConnections.push(new NeuralConnection());
        }
      }

      // Initialize cyberpunk effects
      if (variant.includes('cyberpunk')) {
        for (let i = 0; i < 15; i++) {
          cyberpunkEffects.push(new CyberpunkEffect());
        }
      }

      // Initialize quantum entanglements
      if (variant.includes('quantum-entanglement')) {
        for (let i = 0; i < 8; i++) {
          quantumEntanglements.push(new QuantumEntanglement());
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
              particles = particles.filter(particle => {
          particle.update();
          particle.draw();
          return particle.life > 0;
        });

      // Update and draw grid
      holographicGrid.forEach(point => {
        point.update();
        point.draw(ctx);
      });

      // Update and draw waves
      quantumWaves = quantumWaves.filter(wave => {
        const alive = wave.update();
        if (alive) wave.draw(ctx);
        return alive;
      });

      // Update and draw neural connections
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw(ctx);
      });

      // Update and draw cyberpunk effects
      cyberpunkEffects.forEach(effect => {
        effect.update();
        effect.draw(ctx);
      });

      // Update and draw quantum entanglements
      quantumEntanglements.forEach(entanglement => {
        entanglement.update();
        entanglement.draw(ctx);
      });

      // Add new particles to maintain count
      if (particles.length < (intensity === 'high' ? 1200 : intensity === 'medium' ? 800 : 400)) {
        const particleType = ['energy', 'data', 'quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 6)];
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          particleType as any
        ));
      }

      // Add new waves
      if (quantumWaves.length < 5 && variant.includes('quantum')) {
        quantumWaves.push(new Wave(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initializeEffects();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant, intensity]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children}
    </div>
  );
};

export default UltraFuturisticBackground;