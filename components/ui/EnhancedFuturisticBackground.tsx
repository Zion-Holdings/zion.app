import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'cyber-futuristic' | 'quantum-entanglement' | 'neural-cyber';
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

    // Enhanced particle system with new types
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'entanglement' | 'neural-cyber';
      connections: Particle[];

      constructor(type: 'quantum' | 'holographic' | 'neural' | 'cyber' | 'entanglement' | 'neural-cyber') {
        this.type = type;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.connections = [];
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'cyber':
            this.color = `hsl(${0 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'entanglement':
            this.color = `hsl(${300 + Math.random() * 60}, 90%, 70%)`;
            break;
          case 'neural-cyber':
            this.color = `hsl(${180 + Math.random() * 60}, 80%, 70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Quantum tunneling effect
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.05) {
          this.size *= 0.5 + Math.random();
        }

        // Neural connections
        if (this.type === 'neural' && Math.random() < 0.02) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }

        // Cyber pulse
        if (this.type === 'cyber' && Math.random() < 0.03) {
          this.size *= 1.5;
        }

        // Quantum entanglement
        if (this.type === 'entanglement' && Math.random() < 0.01) {
          this.vx *= -1;
          this.vy *= -1;
        }

        // Neural-cyber fusion
        if (this.type === 'neural-cyber' && Math.random() < 0.02) {
          this.vx = (this.vx + Math.random() - 0.5) * 0.8;
          this.vy = (this.vy + Math.random() - 0.5) * 0.8;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Wave function rings
            for (let i = 1; i <= 3; i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i * 2, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.globalAlpha = alpha * (0.3 / i);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
            
          case 'holographic': {
            // Holographic particle with rainbow effect
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(0.5, `hsl(${parseInt(this.color.match(/hsl\((\d+)/)?.[1] || '0') + 60}, 80%, 70%)`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
          }
            
          case 'neural': {
            // Neural particle with connection lines
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Draw connections to nearby particles
            if (this.connections.length > 0) {
              ctx.strokeStyle = this.color;
              ctx.globalAlpha = alpha * 0.5;
              ctx.lineWidth = 1;
              this.connections.forEach(connection => {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(connection.x, connection.y);
                ctx.stroke();
              });
            }
            break;
          }
            
          case 'cyber': {
            // Cyber particle with geometric shapes
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            
            // Draw diamond shape
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          }
            
          case 'entanglement': {
            // Entangled particles with quantum state
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Quantum state indicator
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = alpha * 0.7;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.stroke();
            break;
          }
            
          case 'neural-cyber': {
            // Neural-cyber fusion particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Cyber circuit pattern
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = alpha * 0.6;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.stroke();
            break;
          }
        }
        
        ctx.restore();
      }
    }

    // Particle management
    const particles: Particle[] = [];
    const maxParticles = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
    
    // Initialize particles based on variant
    const getParticleTypes = () => {
      switch (variant) {
        case 'holographic-advanced':
          return ['holographic', 'quantum'];
        case 'quantum-holographic':
          return ['quantum', 'holographic', 'entanglement'];
        case 'neural-quantum':
          return ['neural', 'quantum', 'entanglement'];
        case 'cyber-futuristic':
          return ['cyber', 'holographic', 'neural'];
        case 'quantum-entanglement':
          return ['quantum', 'entanglement'];
        case 'neural-cyber':
          return ['neural', 'cyber', 'neural-cyber'];
        default:
          return ['holographic', 'quantum'];
      }
    };

    const particleTypes = getParticleTypes();
    
    for (let i = 0; i < maxParticles; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      particles.push(new Particle(type as any));
    }

    // Create neural connections
    particles.forEach(particle => {
      if (particle.type === 'neural' || particle.type === 'neural-cyber') {
        const nearby = particles.filter(p => 
          p !== particle && 
          Math.hypot(p.x - particle.x, p.y - particle.y) < 100
        );
        particle.connections = nearby.slice(0, 3);
      }
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
        
        // Reset particle if it's dead
        if (particle.life <= 0) {
          const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
          Object.assign(particle, new Particle(type as any));
        }
      });
      
      // Draw additional effects based on variant
      drawVariantEffects(ctx, width, height);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Variant-specific effects
    const drawVariantEffects = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.save();
      
      switch (variant) {
        case 'holographic-advanced': {
          // Holographic grid overlay
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
          ctx.lineWidth = 1;
          const gridSize = 50;
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
          break;
        }
          
        case 'quantum-holographic': {
          // Quantum wave patterns
          ctx.strokeStyle = 'rgba(147, 51, 234, 0.15)';
          ctx.lineWidth = 2;
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(0, height * (0.2 + i * 0.15));
            for (let x = 0; x < width; x += 5) {
              const y = height * (0.2 + i * 0.15) + Math.sin(x * 0.01 + Date.now() * 0.001) * 20;
              ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          break;
        }
          
        case 'neural-quantum': {
          // Neural network connections
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
          ctx.lineWidth = 1;
          particles.forEach(particle => {
            if (particle.type === 'neural') {
              particle.connections.forEach(connection => {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
                ctx.stroke();
              });
            }
          });
          break;
        }
          
        case 'cyber-futuristic': {
          // Cyber circuit patterns
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.15)';
          ctx.lineWidth = 1;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(0, height * 0.3 + i * 0.2);
            for (let x = 0; x < width; x += 20) {
              const y = height * (0.3 + i * 0.2) + (Math.random() - 0.5) * 40;
              ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          break;
        }
          
        case 'quantum-entanglement': {
          // Quantum entanglement visualization
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
          ctx.lineWidth = 2;
          for (let i = 0; i < particles.length; i += 2) {
            if (i + 1 < particles.length) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
              ctx.stroke();
            }
          }
          break;
        }
          
        case 'neural-cyber': {
          // Neural-cyber fusion visualization
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
          ctx.lineWidth = 1;
          particles.forEach(particle => {
            if (particle.type === 'neural-cyber') {
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
              ctx.stroke();
            }
          });
          break;
        }
      }
      
      ctx.restore();
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
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;