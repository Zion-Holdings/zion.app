import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'zion' | 'cyber' | 'neon';
}

const FuturisticAnimatedBackground: React.FC<FuturisticAnimatedBackgroundProps> = ({
  intensity = 'medium',
  colorScheme = 'zion'
}) => {
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

    // Color schemes
    const colors = {
      zion: {
        primary: '#00D4FF', // zion-cyan
        secondary: '#8B5CF6', // zion-purple
        accent: '#3B82F6', // zion-blue
        background: 'rgba(0, 212, 255, 0.1)',
        particles: ['#00D4FF', '#8B5CF6', '#3B82F6', '#06B6D4']
      },
      cyber: {
        primary: '#00FF88',
        secondary: '#FF0088',
        accent: '#0088FF',
        background: 'rgba(0, 255, 136, 0.1)',
        particles: ['#00FF88', '#FF0088', '#0088FF', '#FF8800']
      },
      neon: {
        primary: '#FF00FF',
        secondary: '#00FFFF',
        accent: '#FFFF00',
        background: 'rgba(255, 0, 255, 0.1)',
        particles: ['#FF00FF', '#00FFFF', '#FFFF00', '#00FF00']
      }
    };

    const currentColors = colors[colorScheme];

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
      type: 'circle' | 'square' | 'triangle';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * (intensity === 'high' ? 2 : intensity === 'medium' ? 1 : 0.5);
        this.vy = (Math.random() - 0.5) * (intensity === 'high' ? 2 : intensity === 'medium' ? 1 : 0.5);
        this.size = Math.random() * (intensity === 'high' ? 4 : intensity === 'medium' ? 3 : 2) + 1;
        this.color = currentColors.particles[Math.floor(Math.random() * currentColors.particles.length)];
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.type = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        switch (this.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            break;
          case 'triangle':
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

    // Grid system
    class Grid {
      spacing: number;
      offset: number;

      constructor() {
        this.spacing = intensity === 'high' ? 40 : intensity === 'medium' ? 60 : 80;
        this.offset = 0;
      }

      update() {
        this.offset += 0.5;
      }

      draw() {
        ctx.strokeStyle = currentColors.background;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;

        // Vertical lines
        for (let x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }
    }

    // Connection lines
    class ConnectionLines {
      particles: Particle[];
      maxDistance: number;

      constructor(particles: Particle[]) {
        this.particles = particles;
        this.maxDistance = intensity === 'high' ? 150 : intensity === 'medium' ? 120 : 100;
      }

      draw() {
        ctx.strokeStyle = currentColors.background;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const dx = this.particles[i].x - this.particles[j].x;
            const dy = this.particles[i].y - this.particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.maxDistance) {
              const alpha = 1 - (distance / this.maxDistance);
              ctx.globalAlpha = alpha * 0.3;
              ctx.beginPath();
              ctx.moveTo(this.particles[i].x, this.particles[i].y);
              ctx.lineTo(this.particles[j].x, this.particles[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }
    }

    // Wave effects
    class WaveEffect {
      time: number;
      amplitude: number;
      frequency: number;

      constructor() {
        this.time = 0;
        this.amplitude = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 15;
        this.frequency = intensity === 'high' ? 0.02 : intensity === 'medium' ? 0.015 : 0.01;
      }

      update() {
        this.time += 0.05;
      }

      draw() {
        ctx.strokeStyle = currentColors.primary;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.4;

        // Top wave
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * this.frequency + this.time) * this.amplitude + 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Bottom wave
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * this.frequency * 0.7 + this.time * 1.3) * this.amplitude + canvas.height - 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        ctx.globalAlpha = 1;
      }
    }

    // Initialize systems
    const particleCount = intensity === 'high' ? 100 : intensity === 'medium' ? 70 : 50;
    const particles: Particle[] = [];
    const grid = new Grid();
    const waveEffect = new WaveEffect();

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectionLines = new ConnectionLines(particles);

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.5, currentColors.background);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw systems
      grid.update();
      grid.draw();

      waveEffect.update();
      waveEffect.draw();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        // Remove dead particles and create new ones
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          particles.push(new Particle());
        }
      }

      // Draw connections
      connectionLines.draw();

      // Add some floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;
        const color = currentColors.particles[Math.floor(Math.random() * currentColors.particles.length)];
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        
        if (Math.random() < 0.5) {
          // Draw hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const px = x + Math.cos(angle) * size;
            const py = y + Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        } else {
          // Draw diamond
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x, y + size);
          ctx.lineTo(x - size, y);
          ctx.closePath();
          ctx.stroke();
        }
        
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FuturisticAnimatedBackground;