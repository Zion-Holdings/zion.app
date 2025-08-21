import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
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
    let time = 0;

    // Particle class for floating elements
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      type: 'energy' | 'data' | 'quantum';

      constructor(x: number, y: number, type: 'energy' | 'data' | 'quantum') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.type = type;
        this.alpha = Math.random() * 0.8 + 0.2;
        
        switch (type) {
          case 'energy':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'data':
            this.color = `hsl(${280 + Math.random() * 40}, 80%, 70%)`;
            break;
          case 'quantum':
            this.color = `hsl(${120 + Math.random() * 60}, 90%, 60%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha = 0.2 + 0.8 * Math.sin(time * 0.01 + this.x * 0.01);
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        
        switch (this.type) {
          case 'energy':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            // Energy glow
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            break;
          case 'data':
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          case 'quantum':
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            break;
        }
        ctx.restore();
      }
    }

    // Grid point for holographic effect
    class GridPoint {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      offset: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.offset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x = this.originalX + Math.sin(time * 0.005 + this.offset) * 20;
        this.y = this.originalY + Math.cos(time * 0.003 + this.offset) * 15;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = 0.3 + 0.2 * Math.sin(time * 0.01 + this.offset);
        ctx.strokeStyle = `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Initialize particles and grid
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        const type = ['energy', 'data', 'quantum'][Math.floor(Math.random() * 3)] as 'energy' | 'data' | 'quantum';
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          type
        ));
      }
    };

    const initGrid = () => {
      holographicGrid = [];
      const gridSize = 60;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          holographicGrid.push(new GridPoint(x, y));
        }
      }
    };

    // Resize handler
    const handleResize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        initGrid();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      gradient.addColorStop(0.3, 'rgba(30, 41, 59, 0.95)');
      gradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.95)');
      gradient.addColorStop(1, 'rgba(30, 41, 59, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw holographic grid
      holographicGrid.forEach(point => {
        point.update();
        point.draw();
      });

      // Draw grid connections
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'hsl(200, 70%, 60%)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < holographicGrid.length; i++) {
        for (let j = i + 1; j < holographicGrid.length; j++) {
          const dist = Math.sqrt(
            Math.pow(holographicGrid[i].x - holographicGrid[j].x, 2) +
            Math.pow(holographicGrid[i].y - holographicGrid[j].y, 2)
          );
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(holographicGrid[i].x, holographicGrid[i].y);
            ctx.lineTo(holographicGrid[j].x, holographicGrid[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw floating data streams
      ctx.save();
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 5; i++) {
        const x = (time * 0.5 + i * 200) % (canvas.width + 200) - 100;
        const y = canvas.height * 0.3 + Math.sin(time * 0.01 + i) * 100;
        
        ctx.strokeStyle = `hsl(${200 + i * 30}, 70%, 60%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 100, y + Math.sin(time * 0.02 + i) * 50);
        ctx.stroke();
      }
      ctx.restore();

      // Draw quantum wave effects
      ctx.save();
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width * 0.5 + Math.cos(time * 0.005 + i) * 200;
        const centerY = canvas.height * 0.5 + Math.sin(time * 0.003 + i) * 150;
        const radius = 50 + Math.sin(time * 0.01 + i) * 30;
        
        ctx.strokeStyle = `hsl(${120 + i * 60}, 90%, 60%)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner quantum particles
        for (let j = 0; j < 8; j++) {
          const angle = (time * 0.02 + j * Math.PI / 4) % (Math.PI * 2);
          const px = centerX + Math.cos(angle) * (radius * 0.6);
          const py = centerY + Math.sin(angle) * (radius * 0.6);
          
          ctx.fillStyle = `hsl(${120 + i * 60}, 90%, 60%)`;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // Draw neural network connections
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = 'hsl(280, 80%, 70%)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = Math.sin(time * 0.01 + i * 0.5) * canvas.width * 0.4 + canvas.width * 0.5;
        const y1 = Math.cos(time * 0.008 + i * 0.3) * canvas.height * 0.4 + canvas.height * 0.5;
        const x2 = Math.sin(time * 0.012 + i * 0.7) * canvas.width * 0.3 + canvas.width * 0.5;
        const y2 = Math.cos(time * 0.015 + i * 0.4) * canvas.height * 0.3 + canvas.height * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    initGrid();
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;