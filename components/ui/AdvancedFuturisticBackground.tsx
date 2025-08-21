import React, { useEffect, useRef } from 'react';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix';
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  variant = 'quantum'
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
    let connections: Connection[] = [];
    let mouse = { x: 0, y: 0 };

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
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
      type: string;

      constructor(x: number, y: number, type: string = 'default') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = getParticleColor(type);
        this.alpha = Math.random() * 0.5 + 0.5;
        this.type = type;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Fade out over time
        this.alpha *= 0.99;

        // Regenerate if too faded
        if (this.alpha < 0.1) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.alpha = Math.random() * 0.5 + 0.5;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        
        if (this.type === 'quantum') {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Quantum glow
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'holographic') {
          // Holographic particle effect
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y + this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.closePath();
          ctx.fill();
        } else {
          // Default particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Connection class
    class Connection {
      p1: Particle;
      p2: Particle;
      distance: number;
      alpha: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
        this.alpha = Math.max(0, 1 - this.distance / 150);
      }

      draw() {
        if (this.alpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = this.alpha;
          ctx.strokeStyle = getConnectionColor();
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Color functions based on variant
    function getParticleColor(type: string): string {
      const colors = {
        quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        holographic: ['#ff00ff', '#00ff00', '#ffff00', '#00ffff'],
        cyberpunk: ['#ff0066', '#00ff66', '#0066ff', '#ff6600'],
        neural: ['#ff3366', '#33ff66', '#3366ff', '#ff6633'],
        space: ['#ffffff', '#87ceeb', '#4169e1', '#9370db'],
        matrix: ['#00ff00', '#00cc00', '#009900', '#006600']
      };
      
      const variantColors = colors[variant as keyof typeof colors] || colors.quantum;
      return variantColors[Math.floor(Math.random() * variantColors.length)];
    }

    function getConnectionColor(): string {
      const colors = {
        quantum: '#00ffff',
        holographic: '#ff00ff',
        cyberpunk: '#ff0066',
        neural: '#ff3366',
        space: '#87ceeb',
        matrix: '#00ff00'
      };
      
      return colors[variant as keyof typeof colors] || colors.quantum;
    }

    // Initialize particles
    function initParticles() {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const types = ['quantum', 'holographic', 'default'];
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push(new Particle(x, y, type));
      }
    }

    // Update connections
    function updateConnections() {
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    }

    // Mouse interaction
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      // Create particles at mouse position
      if (Math.random() < 0.1) {
        particles.push(new Particle(mouse.x, mouse.y, 'quantum'));
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw connections
      updateConnections();
      connections.forEach(connection => {
        connection.draw();
      });

      // Add quantum effects based on variant
      if (variant === 'quantum') {
        drawQuantumEffects();
      } else if (variant === 'holographic') {
        drawHolographicEffects();
      } else if (variant === 'cyberpunk') {
        drawCyberpunkEffects();
      } else if (variant === 'neural') {
        drawNeuralEffects();
      } else if (variant === 'space') {
        drawSpaceEffects();
      } else if (variant === 'matrix') {
        drawMatrixEffects();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Special effects for each variant
    function drawQuantumEffects() {
      // Quantum entanglement visualization
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    function drawHolographicEffects() {
      // Holographic grid
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 1;
      
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
    }

    function drawCyberpunkEffects() {
      // Cyberpunk energy waves
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = '#ff0066';
      ctx.lineWidth = 3;
      
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawNeuralEffects() {
      // Neural network visualization
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = '#ff3366';
      ctx.lineWidth = 1;
      
      // Draw neural pathways
      particles.forEach((particle, i) => {
        if (i % 3 === 0 && i + 2 < particles.length) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          ctx.lineTo(particles[i + 2].x, particles[i + 2].y);
          ctx.stroke();
        }
      });
      ctx.restore();
    }

    function drawSpaceEffects() {
      // Space nebula effect
      ctx.save();
      ctx.globalAlpha = 0.1;
      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, '#87ceeb');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    function drawMatrixEffects() {
      // Matrix digital rain effect
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#00ff00';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * canvas.width / 20) + Math.sin(Date.now() * 0.001 + i) * 10;
        const y = (Date.now() * 0.1 + i * 20) % canvas.height;
        ctx.fillText('01', x, y);
      }
      ctx.restore();
    }

    // Start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AdvancedFuturisticBackground;