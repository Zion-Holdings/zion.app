import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'cyber-futuristic' | 'quantum-neural' | 'holographic-cyber';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'holographic-advanced',
  intensity = 'high',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle system with quantum effects
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'quantum-neural' | 'holographic-cyber';
      quantumState: number;
      entanglement: QuantumParticle[];

      constructor(type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'quantum-neural' | 'holographic-cyber') {
        this.type = type;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 4 + 1;
        this.maxLife = Math.random() * 150 + 100;
        this.life = this.maxLife;
        this.quantumState = Math.random() * Math.PI * 2;
        this.entanglement = [];
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 90%, 80%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'cyber':
            this.color = `hsl(${0 + Math.random() * 60}, 90%, 80%)`;
            break;
          case 'quantum-neural':
            this.color = `hsl(${160 + Math.random() * 40}, 85%, 75%)`;
            break;
          case 'holographic-cyber':
            this.color = `hsl(${320 + Math.random() * 40}, 85%, 75%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.quantumState += 0.1;

        // Enhanced quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.02) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 4;
          this.vy = (Math.random() - 0.5) * 4;
        }

        // Advanced holographic flicker with quantum interference
        if (this.type === 'holographic' && Math.random() < 0.08) {
          this.size *= 0.3 + Math.random() * 1.4;
          this.color = `hsl(${280 + Math.random() * 80}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 30}%)`;
        }

        // Neural network connections with quantum entanglement
        if (this.type === 'neural' && Math.random() < 0.03) {
          this.vx += (Math.random() - 0.5) * 1;
          this.vy += (Math.random() - 0.5) * 1;
          // Create neural connections
          if (Math.random() < 0.1) {
            this.createNeuralConnection();
          }
        }

        // Cyber effects with quantum randomness
        if (this.type === 'cyber' && Math.random() < 0.05) {
          this.vx *= 0.8 + Math.random() * 0.4;
          this.vy *= 0.8 + Math.random() * 0.4;
        }

        // Quantum-neural hybrid effects
        if (this.type === 'quantum-neural') {
          if (Math.random() < 0.04) {
            this.quantumState += Math.PI / 4;
            this.size = Math.abs(Math.sin(this.quantumState)) * 3 + 1;
          }
        }

        // Holographic-cyber hybrid effects
        if (this.type === 'holographic-cyber') {
          if (Math.random() < 0.06) {
            this.color = `hsl(${320 + Math.sin(this.quantumState) * 40}, 85%, ${70 + Math.sin(this.quantumState) * 20}%)`;
          }
        }

        // Bounce off edges with quantum uncertainty
        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
          if (this.type === 'quantum') {
            this.x = Math.random() < 0.5 ? 0 : width;
          }
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
          if (this.type === 'quantum') {
            this.y = Math.random() < 0.5 ? 0 : height;
          }
        }
      }

      createNeuralConnection() {
        // Create visual neural network connections
        if (ctx) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 20, this.y + this.vy * 20);
          ctx.strokeStyle = `rgba(120, 255, 120, ${0.3 * (this.life / this.maxLife)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        
        // Quantum interference pattern
        if (this.type === 'quantum') {
          const interference = Math.sin(this.quantumState * 3) * 0.3 + 0.7;
          ctx.globalAlpha = interference * (this.life / this.maxLife);
        } else {
          ctx.globalAlpha = this.life / this.maxLife;
        }

        // Holographic glow effect
        if (this.type === 'holographic' || this.type === 'holographic-cyber') {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
        }

        // Neural network glow
        if (this.type === 'neural' || this.type === 'quantum-neural') {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
        }

        // Cyber effects
        if (this.type === 'cyber') {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 8;
        }

        // Draw particle with quantum effects
        ctx.beginPath();
        if (this.type === 'quantum' || this.type === 'quantum-neural') {
          // Quantum wave function visualization
          const waveSize = this.size * (1 + Math.sin(this.quantumState * 2) * 0.3);
          ctx.arc(this.x, this.y, waveSize, 0, Math.PI * 2);
        } else if (this.type === 'holographic' || this.type === 'holographic-cyber') {
          // Holographic geometric shapes
          const sides = 6;
          const angle = (Math.PI * 2) / sides;
          ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
          for (let i = 1; i <= sides; i++) {
            ctx.lineTo(
              this.x + this.size * Math.cos(i * angle),
              this.y + this.size * Math.sin(i * angle)
            );
          }
        } else {
          // Standard circular particles
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }

        // Gradient fill for enhanced visual appeal
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color.replace(')', ', 0.3)').replace('hsl', 'hsla'));
        
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particle system based on variant
    const particles: QuantumParticle[] = [];
    const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;

    for (let i = 0; i < particleCount; i++) {
      let type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'quantum-neural' | 'holographic-cyber';
      
      switch (variant) {
        case 'quantum-holographic':
          type = Math.random() < 0.5 ? 'quantum' : 'holographic';
          break;
        case 'neural-quantum':
          type = Math.random() < 0.5 ? 'neural' : 'quantum';
          break;
        case 'cyber-futuristic':
          type = Math.random() < 0.5 ? 'cyber' : 'holographic';
          break;
        case 'quantum-neural':
          type = Math.random() < 0.5 ? 'quantum' : 'neural';
          break;
        case 'holographic-cyber':
          type = Math.random() < 0.5 ? 'holographic' : 'cyber';
          break;
        default:
          type = Math.random() < 0.25 ? 'quantum' : 
                 Math.random() < 0.5 ? 'holographic' : 
                 Math.random() < 0.75 ? 'neural' : 'cyber';
      }
      
      particles.push(new QuantumParticle(type));
    }

    // Animation loop with enhanced effects
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Create quantum field background
      const time = Date.now() * 0.001;
      for (let i = 0; i < 50; i++) {
        const x = (i / 50) * width;
        const y = Math.sin(time + i * 0.1) * 50 + height / 2;
        const alpha = Math.sin(time + i * 0.1) * 0.1 + 0.05;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new QuantumParticle(particle.type);
        }
      });

      // Create quantum entanglement lines
      particles.forEach((particle, i) => {
        if (particle.type === 'quantum' && Math.random() < 0.01) {
          const nearest = particles.find((p, j) => j !== i && p.type === 'quantum' && 
            Math.abs(p.x - particle.x) < 100 && Math.abs(p.y - particle.y) < 100);
          
          if (nearest) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nearest.x, nearest.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * (particle.life / particle.maxLife)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // Create holographic grid overlay
      if (variant.includes('holographic')) {
        const gridSize = 50;
        const gridAlpha = Math.sin(time) * 0.1 + 0.05;
        
        ctx.strokeStyle = `rgba(200, 100, 255, ${gridAlpha})`;
        ctx.lineWidth = 0.5;
        
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;