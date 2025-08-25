import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'matrix' | 'quantum-cyberpunk' | 'holographic-matrix';
=======
  variant?: 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'cyber-futuristic' | 'quantum-entanglement' | 'neural-cyber';
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a01f
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
    // Quantum particle system
    const particles: Array<{
=======
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
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a01f
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'particle' | 'energy' | 'data' | 'quantum';
      life: number;
      maxLife: number;
<<<<<<< HEAD
    }> = [];

    const connections: Array<{
      from: number;
      to: number;
      opacity: number;
      strength: number;
    }> = [];
=======
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
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a01f

    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      connections.length = 0;
      const particleCount = Math.floor(80 * intensityMultiplier);

<<<<<<< HEAD
      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() > 0.7 ? 'energy' : 
                           Math.random() > 0.5 ? 'data' : 
                           Math.random() > 0.3 ? 'quantum' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 3 * intensityMultiplier,
          size: Math.random() * 4 * intensityMultiplier + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getParticleColor(variant, particleType),
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100
        });
      }

      // Create connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150 && Math.random() > 0.7) {
            connections.push({
              from: i,
              to: j,
              opacity: Math.random() * 0.3 + 0.1,
              strength: 1 - (distance / 150)
            });
          }
        }
      }
    };

    const getParticleColor = (variant: string, type: string) => {
      const baseColors = {
        'quantum': {
          particle: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 180}, 90%, 70%)`,
          data: `hsl(${Math.random() * 60 + 220}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 240}, 95%, 75%)`
        },
        'holographic': {
          particle: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`,
          data: `hsl(${Math.random() * 60 + 160}, 75%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 220}, 85%, 75%)`
        },
        'neural': {
          particle: `hsl(${Math.random() * 40 + 120}, 80%, 60%)`,
          energy: `hsl(${Math.random() * 40 + 140}, 90%, 70%)`,
          data: `hsl(${Math.random() * 40 + 100}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 40 + 160}, 95%, 75%)`
        },
        'cyberpunk': {
          particle: `hsl(${Math.random() * 60 + 300}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 320}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 280}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 340}, 100%, 75%)`
        },
        'matrix': {
          particle: `hsl(${Math.random() * 60 + 120}, 100%, 50%)`,
          energy: `hsl(${Math.random() * 60 + 140}, 100%, 60%)`,
          data: `hsl(${Math.random() * 60 + 100}, 100%, 55%)`,
          quantum: `hsl(${Math.random() * 60 + 160}, 100%, 65%)`
        },
        'quantum-cyberpunk': {
          particle: `hsl(${Math.random() * 60 + 250}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 270}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 230}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 290}, 100%, 75%)`
        },
        'holographic-matrix': {
          particle: `hsl(${Math.random() * 60 + 150}, 90%, 60%)`,
          energy: `hsl(${Math.random() * 60 + 170}, 95%, 70%)`,
          data: `hsl(${Math.random() * 60 + 130}, 85%, 65%)`,
          quantum: `hsl(${Math.random() * 60 + 190}, 100%, 75%)`
        }
      };
      
      return baseColors[variant]?.[type] || baseColors.quantum.particle;
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Regenerate particles that have expired
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.color = getParticleColor(variant, particle.type);
        }

        // Draw particle with enhanced effects
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        const alpha = (particle.opacity * particle.life / particle.maxLife).toString(16).padStart(2, '0');
        const baseColor = particle.color;
        
        if (particle.type === 'energy') {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(0.5, baseColor + '80');
          gradient.addColorStop(1, baseColor + '00');
        } else if (particle.type === 'quantum') {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(0.3, baseColor + 'A0');
          gradient.addColorStop(0.7, baseColor + '60');
          gradient.addColorStop(1, baseColor + '00');
        } else {
          gradient.addColorStop(0, baseColor + alpha);
          gradient.addColorStop(1, baseColor + '00');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect for energy and quantum particles
        if (particle.type === 'energy' || particle.type === 'quantum') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw connections
      connections.forEach(connection => {
        const from = particles[connection.from];
        const to = particles[connection.to];
        
        if (from && to) {
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          
          const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          const alpha = (connection.opacity * connection.strength).toString(16).padStart(2, '0');
          
          gradient.addColorStop(0, from.color + alpha);
          gradient.addColorStop(1, to.color + alpha);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = connection.strength * 2;
          ctx.stroke();
        }
      });

      // Add special effects based on variant
      if (variant === 'matrix' || variant === 'holographic-matrix') {
        drawMatrixEffect(ctx, canvas, intensityMultiplier);
      }

      if (variant === 'cyberpunk' || variant === 'quantum-cyberpunk') {
        drawCyberpunkEffect(ctx, canvas, intensityMultiplier);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, intensity: number) => {
      const time = Date.now() * 0.001;
      ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 50 + time * 100) % canvas.width;
        const y = (i * 30 + time * 50) % canvas.height;
        ctx.fillRect(x, y, 2, 20);
      }
    };

    const drawCyberpunkEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, intensity: number) => {
      const time = Date.now() * 0.0005;
      ctx.strokeStyle = `hsla(${280 + Math.sin(time) * 20}, 100%, 50%, 0.3)`;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * (0.2 + i * 0.15) + Math.sin(time + i) * 20);
        ctx.lineTo(canvas.width, canvas.height * (0.2 + i * 0.15) + Math.sin(time + i + 1) * 20);
        ctx.stroke();
      }
    };

    initParticles();
=======
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

>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a01f
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
<<<<<<< HEAD
      
      {/* Floating Quantum Orbs */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <svg className="w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Quantum Energy Field */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Data Particles */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-cyan-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
=======
      <div className="relative z-10">
        {children}
      </div>
>>>>>>> origin/cursor/enhance-app-services-and-website-with-futuristic-design-a01f
    </div>
  );
};

export default EnhancedFuturisticBackground;
