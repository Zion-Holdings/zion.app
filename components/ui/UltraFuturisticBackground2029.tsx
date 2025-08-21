import React, { useEffect, useRef } from 'react';

const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.life = Math.random() * 100;
        this.maxLife = 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Reset particle when it dies
        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = this.maxLife;
        }
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Grid system
    const gridSize = 50;
    const gridPoints: { x: number; y: number; active: boolean }[] = [];

    for (let x = 0; x <= canvas.width; x += gridSize) {
      for (let y = 0; y <= canvas.height; y += gridSize) {
        gridPoints.push({
          x,
          y,
          active: Math.random() > 0.7
        });
      }
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw active grid points
      gridPoints.forEach(point => {
        if (point.active) {
          ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Randomly activate/deactivate grid points
      if (Math.random() > 0.95) {
        const randomPoint = gridPoints[Math.floor(Math.random() * gridPoints.length)];
        randomPoint.active = !randomPoint.active;
      }

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      
      // Rotating triangle
      ctx.save();
      ctx.translate(canvas.width * 0.2, canvas.height * 0.3);
      ctx.rotate(time * 0.5);
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -30);
      ctx.lineTo(26, 15);
      ctx.lineTo(-26, 15);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Rotating square
      ctx.save();
      ctx.translate(canvas.width * 0.8, canvas.height * 0.7);
      ctx.rotate(-time * 0.3);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.lineWidth = 2;
      ctx.strokeRect(-25, -25, 50, 50);
      ctx.restore();

      // Floating circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.5 + Math.sin(time + i) * 200;
        const y = canvas.height * 0.5 + Math.cos(time + i) * 150;
        const size = Math.sin(time * 2 + i) * 20 + 30;
        
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Energy waves
      for (let i = 0; i < 3; i++) {
        const waveOffset = (time + i * 2) * 100;
        const waveHeight = Math.sin(time + i) * 50 + 100;
        
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height * 0.8 + Math.sin((x + waveOffset) * 0.01) * waveHeight;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Quantum particles
      for (let i = 0; i < 20; i++) {
        const x = Math.sin(time * 0.5 + i) * canvas.width * 0.4 + canvas.width * 0.5;
        const y = Math.cos(time * 0.3 + i) * canvas.height * 0.4 + canvas.height * 0.5;
        const size = Math.sin(time + i) * 3 + 4;
        
        ctx.fillStyle = `rgba(147, 51, 234, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Neural network connections
      const nodes = [
        { x: canvas.width * 0.1, y: canvas.height * 0.2 },
        { x: canvas.width * 0.3, y: canvas.height * 0.4 },
        { x: canvas.width * 0.5, y: canvas.height * 0.3 },
        { x: canvas.width * 0.7, y: canvas.height * 0.5 },
        { x: canvas.width * 0.9, y: canvas.height * 0.8 }
      ];

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;

      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(targetNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
          );
          
          if (distance < 300) {
            const alpha = 1 - distance / 300;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        {/* Floating orbs */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
            style={{
              animation: 'scan 8s linear infinite',
              top: '20%'
            }}
          />
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"
            style={{
              animation: 'scan 12s linear infinite reverse',
              top: '60%'
            }}
          />
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-20"
            style={{
              animation: 'scan 10s linear infinite',
              top: '80%'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default UltraFuturisticBackground2029;