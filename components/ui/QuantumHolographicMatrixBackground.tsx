import React, { useEffect, useRef } from 'react';

interface QuantumHolographicMatrixBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

// Enhanced particle system
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'quantum' | 'holographic' | 'matrix' | 'neural';

  constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'matrix' | 'neural') {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = Math.random() * 3 + 1;
    this.life = 1;
    this.maxLife = Math.random() * 100 + 50;
    this.type = type;
    
    switch (type) {
      case 'quantum':
        this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        break;
      case 'holographic':
        this.color = `hsl(${280 + Math.random() * 80}, 100%, 70%)`;
        break;
      case 'matrix':
        this.color = `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
        break;
      case 'neural':
        this.color = `hsl(${0 + Math.random() * 60}, 100%, 70%)`;
        break;
    }
  }

  update(canvas: HTMLCanvasElement, time: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    
    // Quantum tunneling effect
    if (Math.random() < 0.01) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    // Holographic interference
    if (this.type === 'holographic') {
      this.vx += Math.sin(time * 0.01) * 0.1;
      this.vy += Math.cos(time * 0.01) * 0.1;
    }

    // Neural network connections
    if (this.type === 'neural') {
      this.size = Math.sin(time * 0.02 + this.x * 0.01) * 2 + 2;
    }

    // Matrix code rain effect
    if (this.type === 'matrix') {
      this.vy += 0.1;
      if (this.y > canvas.height) {
        this.y = -10;
        this.x = Math.random() * canvas.width;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = 1 - (this.life / this.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha;
    
    switch (this.type) {
      case 'quantum':
        // Quantum particle with wave function
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Wave function visualization
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
        break;
        
      case 'holographic':
        // Holographic interference pattern
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Interference rings
        for (let i = 1; i <= 3; i++) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * i * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = alpha * (1 - i * 0.3);
          ctx.stroke();
        }
        break;
        
      case 'matrix': {
        // Matrix code characters
        ctx.font = `${this.size * 2}px monospace`;
        ctx.fillStyle = this.color;
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, this.x, this.y);
        break;
      }
        
      case 'neural':
        // Neural network nodes
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Synaptic connections
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
        break;
    }
    
    ctx.restore();
  }
}

// Holographic elements
class HolographicElement {
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: 'cube' | 'sphere' | 'pyramid' | 'torus';
  color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 50 + 20;
    this.rotation = Math.random() * Math.PI * 2;
    this.type = ['cube', 'sphere', 'pyramid', 'torus'][Math.floor(Math.random() * 4)] as 'cube' | 'sphere' | 'pyramid' | 'torus';
    this.color = `hsl(${280 + Math.random() * 80}, 100%, 70%)`;
  }

  update(time: number) {
    this.rotation += 0.02;
    this.x += Math.sin(time * 0.01) * 0.5;
    this.y += Math.cos(time * 0.01) * 0.5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.3;
    
    switch (this.type) {
      case 'cube':
        this.drawCube(ctx);
        break;
      case 'sphere':
        this.drawSphere(ctx);
        break;
      case 'pyramid':
        this.drawPyramid(ctx);
        break;
      case 'torus':
        this.drawTorus(ctx);
        break;
    }
    
    ctx.restore();
  }

  drawCube(ctx: CanvasRenderingContext2D) {
    const s = this.size / 2;
    ctx.beginPath();
    ctx.moveTo(-s, -s);
    ctx.lineTo(s, -s);
    ctx.lineTo(s, s);
    ctx.lineTo(-s, s);
    ctx.closePath();
    ctx.stroke();
    
    // 3D effect
    ctx.beginPath();
    ctx.moveTo(-s, -s);
    ctx.lineTo(-s + s * 0.3, -s - s * 0.3);
    ctx.lineTo(s + s * 0.3, -s - s * 0.3);
    ctx.lineTo(s, -s);
    ctx.stroke();
  }

  drawSphere(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
    ctx.stroke();
    
    // Latitude lines
    for (let i = 1; i < 4; i++) {
      const y = (this.size / 2) * (i / 4 - 0.5);
      const r = Math.sqrt((this.size / 2) ** 2 - y ** 2);
      ctx.beginPath();
      ctx.arc(0, y, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  drawPyramid(ctx: CanvasRenderingContext2D) {
    const s = this.size / 2;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(-s, s);
    ctx.lineTo(s, s);
    ctx.closePath();
    ctx.stroke();
    
    // Base
    ctx.beginPath();
    ctx.moveTo(-s, s);
    ctx.lineTo(s, s);
    ctx.stroke();
  }

  drawTorus(ctx: CanvasRenderingContext2D) {
    const R = this.size / 3;
    const r = this.size / 6;
    
    for (let i = 0; i < Math.PI * 2; i += 0.2) {
      const x1 = (R + r * Math.cos(i)) * Math.cos(this.rotation);
      const y1 = (R + r * Math.cos(i)) * Math.sin(this.rotation);
      const x2 = (R + r * Math.cos(i + 0.2)) * Math.cos(this.rotation);
      const y2 = (R + r * Math.cos(i + 0.2)) * Math.sin(this.rotation);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({ 
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
    let holographicElements: HolographicElement[] = [];
    let time = 0;

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    const init = () => {
      resizeCanvas();
      
      // Initialize particles
      particles = [];
      for (let i = 0; i < 100; i++) {
        const types: ('quantum' | 'holographic' | 'matrix' | 'neural')[] = ['quantum', 'holographic', 'matrix', 'neural'];
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          type
        ));
      }

      // Initialize holographic elements
      holographicElements = [];
      for (let i = 0; i < 8; i++) {
        holographicElements.push(new HolographicElement(canvas));
      }
    };

    const animate = () => {
      time++;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update(canvas, time);
        particle.draw(ctx);
        
        // Remove dead particles and create new ones
        if (particle.life > particle.maxLife) {
          const types: ('quantum' | 'holographic' | 'matrix' | 'neural')[] = ['quantum', 'holographic', 'matrix', 'neural'];
          const type = types[Math.floor(Math.random() * types.length)];
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            type
          );
        }
      });

      // Update and draw holographic elements
      holographicElements.forEach(element => {
        element.update(time);
        element.draw(ctx);
      });

      // Draw quantum entanglement connections
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw matrix grid
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.lineWidth = 0.5;
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

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Holographic interference patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default QuantumHolographicMatrixBackground;