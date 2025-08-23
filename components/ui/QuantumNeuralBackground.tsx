import React, { useEffect, useRef } from 'react';

interface QuantumNeuralBackgroundProps {
  variant?: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const QuantumNeuralBackground: React.FC<QuantumNeuralBackgroundProps> = ({
  variant = 'quantum',
  intensity = 'medium',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      neural: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      holographic: ['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3'],
      cyberpunk: ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5']
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 2
    };

    const createParticle = () => {
      const type = variant as keyof typeof colors;
      const color = colors[type][Math.floor(Math.random() * colors[type].length)];
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier[intensity],
        size: Math.random() * 3 + 1,
        color,
        life: 1,
        maxLife: Math.random() * 100 + 50,
        type: variant as any
      });
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Bounce off edges
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neural connections
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(255, 107, 107, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw quantum effects
      if (variant === 'quantum') {
        particles.forEach((p, i) => {
          const wave = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
          ctx.globalAlpha = wave * 0.8;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * wave, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          
          // Quantum entanglement lines
          if (i % 3 === 0) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.sin(Date.now() * 0.001) * 50, p.y + Math.cos(Date.now() * 0.001) * 50);
            ctx.stroke();
          }
        });
      }

      // Draw holographic effects
      if (variant === 'holographic') {
        particles.forEach((p, i) => {
          const time = Date.now() * 0.001;
          const hologram = Math.sin(time + i) * 0.5 + 0.5;
          
          ctx.globalAlpha = hologram * 0.6;
          ctx.fillStyle = p.color;
          
          // Holographic grid
          ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
          
          // Glitch effect
          if (Math.random() > 0.95) {
            ctx.globalAlpha = 0.8;
            ctx.fillRect(p.x - p.size * 2, p.y - p.size * 2, p.size * 4, p.size * 4);
          }
        });
      }

      // Draw cyberpunk effects
      if (variant === 'cyberpunk') {
        particles.forEach((p, i) => {
          const cyber = Math.sin(Date.now() * 0.002 + i) * 0.5 + 0.5;
          
          ctx.globalAlpha = cyber * 0.9;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2;
          
          // Cyber grid
          ctx.beginPath();
          ctx.moveTo(p.x - p.size, p.y);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.stroke();
          
          // Energy pulse
          if (i % 5 === 0) {
            ctx.globalAlpha = 0.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.stroke();
          }
        });
      }

      // Draw regular particles
      particles.forEach(p => {
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      if (particles.length < 50 * intensityMultiplier[intensity]) {
        createParticle();
      }
      
      updateParticles();
      drawParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: variant === 'quantum' ? 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' :
                    variant === 'neural' ? 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 100%)' :
                    variant === 'holographic' ? 'radial-gradient(ellipse at center, #2d1b69 0%, #11998e 100%)' :
                    'radial-gradient(ellipse at center, #1e1e1e 0%, #000000 100%)'
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: variant === 'quantum' ? 'linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 100%)' :
                    variant === 'neural' ? 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 100%)' :
                    variant === 'holographic' ? 'linear-gradient(135deg, rgba(255,159,243,0.1) 0%, rgba(84,160,255,0.1) 100%)' :
                    'linear-gradient(135deg, rgba(255,0,110,0.1) 0%, rgba(131,56,236,0.1) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default QuantumNeuralBackground;