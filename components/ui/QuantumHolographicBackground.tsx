import React, { useEffect, useRef, useState } from 'react';

interface QuantumHolographicBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum-holographic' | 'neural-quantum' | 'cyber-futuristic' | 'biometric-holographic';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  className?: string;
  enableQuantumEffects?: boolean;
  enableHolographicProjection?: boolean;
  enableNeuralConnections?: boolean;
}

const QuantumHolographicBackground: React.FC<QuantumHolographicBackgroundProps> = ({
  children,
  variant = 'quantum-holographic',
  intensity = 'high',
  className = '',
  enableQuantumEffects = true,
  enableHolographicProjection = true,
  enableNeuralConnections = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [quantumState, setQuantumState] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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

    // Advanced particle system with quantum properties
    class QuantumParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'biometric';
      quantumState: number;
      entanglement: QuantumParticle | null;
      spin: number;

      constructor(type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'biometric') {
        this.type = type;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 4 + 2;
        this.maxLife = Math.random() * 150 + 100;
        this.life = this.maxLife;
        this.quantumState = Math.random() * Math.PI * 2;
        this.entanglement = null;
        this.spin = Math.random() * 10 - 5;
        
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
          case 'biometric':
            this.color = `hsl(${30 + Math.random() * 60}, 85%, 75%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.quantumState += 0.1;
        this.spin += 0.2;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.005) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        // Holographic flicker and projection
        if (this.type === 'holographic' && enableHolographicProjection) {
          if (Math.random() < 0.03) {
            this.size *= 0.3 + Math.random() * 1.4;
          }
          // Create holographic projections
          if (Math.random() < 0.01) {
            this.createHolographicProjection(ctx);
          }
        }

        // Neural connections and learning
        if (this.type === 'neural' && enableNeuralConnections) {
          if (Math.random() < 0.02) {
            this.vx += (Math.random() - 0.5) * 0.8;
            this.vy += (Math.random() - 0.5) * 0.8;
          }
          // Create neural connections
          if (Math.random() < 0.005) {
            this.createNeuralConnection(ctx);
          }
        }

        // Cyber effects
        if (this.type === 'cyber') {
          if (Math.random() < 0.04) {
            this.vx *= 1.2;
            this.vy *= 1.2;
          }
        }

        // Biometric effects
        if (this.type === 'biometric') {
          if (Math.random() < 0.02) {
            this.size = Math.sin(this.quantumState) * 3 + 4;
          }
        }

        // Bounce off edges with quantum uncertainty
        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
          if (enableQuantumEffects && Math.random() < 0.1) {
            this.x = Math.random() * width;
          }
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
          if (enableQuantumEffects && Math.random() < 0.1) {
            this.y = Math.random() * height;
          }
        }

        // Mouse interaction for quantum particles
        if (this.type === 'quantum' && enableQuantumEffects) {
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

      createHolographicProjection(ctx: CanvasRenderingContext2D) {
        const projectionSize = this.size * 3;
        const alpha = 0.3;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        
        // Create holographic grid
        for (let i = 0; i < 3; i++) {
          const offset = i * 20;
          ctx.beginPath();
          ctx.arc(this.x + offset, this.y + offset, projectionSize, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }

      createNeuralConnection(ctx: CanvasRenderingContext2D) {
        // Find nearby neural particles to connect
        const maxDistance = 80;
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        
        // Draw connection lines to nearby particles
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        
        // Simulate neural network connections
        for (let i = 0; i < 3; i++) {
          const targetX = this.x + (Math.random() - 0.5) * maxDistance;
          const targetY = this.y + (Math.random() - 0.5) * maxDistance;
          ctx.lineTo(targetX, targetY);
        }
        
        ctx.stroke();
        ctx.restore();
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        
        // Apply quantum effects
        if (enableQuantumEffects && this.type === 'quantum') {
          ctx.globalAlpha = 0.7 + Math.sin(this.quantumState) * 0.3;
        } else {
          ctx.globalAlpha = this.life / this.maxLife;
        }

        // Create quantum wave function effect
        if (this.type === 'quantum') {
          const waveSize = this.size + Math.sin(this.quantumState) * 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveSize, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Draw quantum probability cloud
          ctx.globalAlpha *= 0.3;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveSize * 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Regular particle rendering
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        // Add particle effects based on type
        if (this.type === 'holographic') {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        if (this.type === 'neural') {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Create particle system
    const particles: QuantumParticle[] = [];
    const particleCount = intensity === 'extreme' ? 200 : intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;

    for (let i = 0; i < particleCount; i++) {
      const types: Array<'quantum' | 'holographic' | 'neural' | 'cyber' | 'biometric'> = ['quantum', 'holographic', 'neural', 'cyber', 'biometric'];
      const type = types[Math.floor(Math.random() * types.length)];
      particles.push(new QuantumParticle(type));
    }

    // Create quantum entanglement between particles
    if (enableQuantumEffects) {
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          particles[i].entanglement = particles[i + 1];
          particles[i + 1].entanglement = particles[i];
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update quantum state
      setQuantumState(prev => prev + 0.01);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          const types: Array<'quantum' | 'holographic' | 'neural' | 'cyber' | 'biometric'> = ['quantum', 'holographic', 'neural', 'cyber', 'biometric'];
          const type = types[Math.floor(Math.random() * types.length)];
          particles[index] = new QuantumParticle(type);
        }
      });

      // Draw quantum entanglement lines
      if (enableQuantumEffects) {
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = 'hsl(200, 80%, 60%)';
        ctx.lineWidth = 1;
        
        particles.forEach(particle => {
          if (particle.entanglement && particle.type === 'quantum') {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle.entanglement.x, particle.entanglement.y);
            ctx.stroke();
          }
        });
        
        ctx.restore();
      }

      // Draw advanced effects based on variant
      if (variant === 'neural-quantum') {
        drawNeuralQuantumEffects(ctx, width, height);
      } else if (variant === 'cyber-futuristic') {
        drawCyberFuturisticEffects(ctx, width, height);
      } else if (variant === 'biometric-holographic') {
        drawBiometricHolographicEffects(ctx, width, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Special effect functions
    const drawNeuralQuantumEffects = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'hsl(120, 80%, 60%)';
      ctx.lineWidth = 1;
      
      // Draw neural network grid
      for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) {
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.random() * 100, y + Math.random() * 100);
            ctx.stroke();
          }
        }
      }
      
      ctx.restore();
    };

    const drawCyberFuturisticEffects = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = 'hsl(0, 80%, 60%)';
      ctx.lineWidth = 2;
      
      // Draw cyber grid
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawBiometricHolographicEffects = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = 'hsl(30, 80%, 60%)';
      ctx.lineWidth = 1;
      
      // Draw biometric patterns
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 100 + 50;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, enableQuantumEffects, enableHolographicProjection, enableNeuralConnections, mousePosition]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default QuantumHolographicBackground;