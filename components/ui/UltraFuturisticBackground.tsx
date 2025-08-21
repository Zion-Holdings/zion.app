import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackgroundProps {
  children?: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural';
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  variant = 'quantum',
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
    let neuralConnections: NeuralConnection[] = [];

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
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural';

      constructor(x: number, y: number, type: 'quantum' | 'holographic' | 'cyberpunk' | 'neural') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.type = type;
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'holographic':
            this.color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${0 + Math.random() * 60}, 90%, 60%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 80%, 60%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Add quantum uncertainty
        if (this.type === 'quantum' && Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw() {
        if (!ctx) return;
        
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
              ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = alpha * (1 - i * 0.3);
              ctx.stroke();
            }
            break;
            
          case 'holographic':
            // Holographic particle with interference patterns
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Interference rings
            for (let i = 1; i <= 2; i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i * 1.5, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * (1 - i * 0.4);
              ctx.stroke();
            }
            break;
            
          case 'cyberpunk':
            // Cyberpunk particle with energy trails
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Energy trail
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.globalAlpha = alpha * 0.7;
            ctx.stroke();
            break;
            
          case 'neural':
            // Neural particle with synaptic connections
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Synaptic spikes
            for (let i = 0; i < 4; i++) {
              const angle = (i * Math.PI) / 2;
              const spikeX = this.x + Math.cos(angle) * this.size * 2;
              const spikeY = this.y + Math.sin(angle) * this.size * 2;
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(spikeX, spikeY);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * 0.8;
              ctx.stroke();
            }
            break;
        }
        
        ctx.restore();
      }
    }

    // Holographic element class
    class HolographicElement {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      type: 'cube' | 'sphere' | 'pyramid' | 'torus';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 50 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.type = ['cube', 'sphere', 'pyramid', 'torus'][Math.floor(Math.random() * 4)] as any;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        switch (this.type) {
          case 'cube':
            this.drawCube();
            break;
          case 'sphere':
            this.drawSphere();
            break;
          case 'pyramid':
            this.drawPyramid();
            break;
          case 'torus':
            this.drawTorus();
            break;
        }
        
        ctx.restore();
      }

      drawCube() {
        const s = this.size / 2;
        ctx.strokeStyle = 'hsl(280, 80%, 70%)';
        ctx.lineWidth = 2;
        
        // Front face
        ctx.beginPath();
        ctx.rect(-s, -s, s * 2, s * 2);
        ctx.stroke();
        
        // Back face
        ctx.beginPath();
        ctx.rect(-s + s * 0.3, -s + s * 0.3, s * 2, s * 2);
        ctx.stroke();
        
        // Connecting lines
        ctx.beginPath();
        ctx.moveTo(-s, -s);
        ctx.lineTo(-s + s * 0.3, -s + s * 0.3);
        ctx.moveTo(s, -s);
        ctx.lineTo(s + s * 0.3, -s + s * 0.3);
        ctx.moveTo(s, s);
        ctx.lineTo(s + s * 0.3, s + s * 0.3);
        ctx.moveTo(-s, s);
        ctx.lineTo(-s + s * 0.3, s + s * 0.3);
        ctx.stroke();
      }

      drawSphere() {
        ctx.strokeStyle = 'hsl(280, 80%, 70%)';
        ctx.lineWidth = 2;
        
        // Main circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.stroke();
        
        // Latitude lines
        for (let i = 1; i < 3; i++) {
          const y = (this.size / 2) * (i / 3 - 0.5);
          const radius = Math.sqrt((this.size / 2) ** 2 - y ** 2);
          ctx.beginPath();
          ctx.arc(0, y, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        // Longitude lines
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(Math.cos(angle) * this.size / 2, Math.sin(angle) * this.size / 2);
          ctx.stroke();
        }
      }

      drawPyramid() {
        const s = this.size / 2;
        ctx.strokeStyle = 'hsl(280, 80%, 70%)';
        ctx.lineWidth = 2;
        
        // Base
        ctx.beginPath();
        ctx.moveTo(-s, s);
        ctx.lineTo(s, s);
        ctx.lineTo(0, -s);
        ctx.closePath();
        ctx.stroke();
        
        // Back edges
        ctx.beginPath();
        ctx.moveTo(-s, s);
        ctx.lineTo(0, -s);
        ctx.moveTo(s, s);
        ctx.lineTo(0, -s);
        ctx.stroke();
      }

      drawTorus() {
        ctx.strokeStyle = 'hsl(280, 80%, 70%)';
        ctx.lineWidth = 2;
        
        const R = this.size / 3;
        const r = this.size / 6;
        
        // Draw torus rings
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const x = Math.cos(angle) * R;
          const y = Math.sin(angle) * R;
          
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    // Neural connection class
    class NeuralConnection {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
      life: number;
      maxLife: number;

      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.strength = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.life--;
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * this.strength;
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = 'hsl(120, 80%, 60%)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw connection nodes
        ctx.beginPath();
        ctx.arc(this.x1, this.y1, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(120, 80%, 60%)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x2, this.y2, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(120, 80%, 60%)';
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Initialize particles and elements
    const initElements = () => {
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      const holographicCount = intensity === 'low' ? 3 : intensity === 'medium' ? 6 : 10;
      const neuralCount = intensity === 'low' ? 5 : intensity === 'medium' ? 10 : 20;

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          variant
        ));
      }

      // Create holographic elements
      for (let i = 0; i < holographicCount; i++) {
        holographicElements.push(new HolographicElement());
      }

      // Create neural connections
      for (let i = 0; i < neuralCount; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        neuralConnections.push(new NeuralConnection(x1, y1, x2, y2));
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw holographic elements
      holographicElements.forEach(element => {
        element.update();
        element.draw();
      });

      // Update and draw neural connections
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          // Add new particle
          particles.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            variant
          ));
        }
      });

      // Remove dead neural connections and create new ones
      neuralConnections = neuralConnections.filter(connection => connection.life > 0);
      if (neuralConnections.length < (intensity === 'low' ? 5 : intensity === 'medium' ? 10 : 20)) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        neuralConnections.push(new NeuralConnection(x1, y1, x2, y2));
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initElements();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, variant]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;