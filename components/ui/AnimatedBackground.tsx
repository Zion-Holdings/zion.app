import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'matrix' | 'cyber-grid' | 'hologram' | 'data-stream' | 'quantum' | 'metaverse';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'particles',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(0, 212, 255, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(16, 185, 129, 0.8)',
      'rgba(245, 158, 11, 0.8)'
    ];

    const initParticles = () => {
      particles = [];
      const count = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw connections
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const drawMatrix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const columns = Math.floor(canvas.width / 20);
      const drops: number[] = [];
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
      }

      for (let i = 0; i < drops.length; i++) {
        const x = i * 20;
        const y = drops[i] * 1;
        
        ctx.save();
        ctx.fillStyle = '#0f0';
        ctx.font = '16px monospace';
        ctx.fillText('01', x, y);
        ctx.restore();

        if (drops[i] * 1 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const drawCyberGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 30;
      const time = Date.now() * 0.001;
      
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Animated nodes
      for (let x = gridSize / 2; x < canvas.width; x += gridSize) {
        for (let y = gridSize / 2; y < canvas.height; y += gridSize) {
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          ctx.save();
          ctx.fillStyle = `rgba(0, 212, 255, ${pulse * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      
      ctx.restore();
    };

    const drawHologram = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Holographic rings
      for (let i = 0; i < 5; i++) {
        const radius = 50 + i * 40;
        const opacity = Math.sin(time + i) * 0.5 + 0.5;
        
        ctx.save();
        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      
      // Scanning line
      const scanY = (Math.sin(time * 2) * 0.5 + 0.5) * canvas.height;
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
      ctx.restore();
    };

    const drawDataStream = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const streamCount = 8;
      
      for (let i = 0; i < streamCount; i++) {
        const x = (canvas.width / streamCount) * i;
        const speed = 2 + Math.sin(time + i) * 0.5;
        const height = 100 + Math.sin(time * 0.5 + i) * 50;
        
        ctx.save();
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.6 + Math.sin(time + i) * 0.4})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        
        // Data packets
        for (let j = 0; j < 5; j++) {
          const packetY = (time * speed * 50 + j * 20) % height;
          ctx.fillStyle = `rgba(0, 212, 255, ${0.8 + Math.sin(time * 3 + j) * 0.2})`;
          ctx.beginPath();
          ctx.arc(x, packetY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    };

    const drawQuantum = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const qubitCount = 12;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < qubitCount; i++) {
        const angle = (i / qubitCount) * Math.PI * 2;
        const radius = 150 + Math.sin(time + i) * 50;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Quantum state visualization
        const state = Math.sin(time * 2 + i) * 0.5 + 0.5;
        const size = 8 + state * 12;
        
        ctx.save();
        ctx.fillStyle = `rgba(139, 92, 246, ${0.6 + state * 0.4})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Quantum entanglement lines
        for (let j = i + 1; j < qubitCount; j++) {
          const otherAngle = (j / qubitCount) * Math.PI * 2;
          const otherRadius = 150 + Math.sin(time + j) * 50;
          const otherX = centerX + Math.cos(otherAngle) * otherRadius;
          const otherY = centerY + Math.sin(otherAngle) * otherRadius;
          
          const distance = Math.sqrt(Math.pow(x - otherX, 2) + Math.pow(y - otherY, 2));
          if (distance < 200) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 200)})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(otherX, otherY);
            ctx.stroke();
          }
        }
        
        ctx.restore();
      }
    };

    const drawMetaverse = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const worldCount = 8;
      
      for (let i = 0; i < worldCount; i++) {
        const x = (canvas.width / worldCount) * i + 50;
        const y = canvas.height / 2 + Math.sin(time + i) * 100;
        const size = 60 + Math.sin(time * 0.5 + i) * 20;
        
        // 3D world representation
        ctx.save();
        ctx.fillStyle = `rgba(236, 72, 153, ${0.4 + Math.sin(time + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // World details
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.6 + Math.sin(time + i) * 0.4})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
        ctx.stroke();
        
        // Connection portals
        for (let j = i + 1; j < worldCount; j++) {
          const otherX = (canvas.width / worldCount) * j + 50;
          const otherY = canvas.height / 2 + Math.sin(time + j) * 100;
          
          ctx.strokeStyle = `rgba(236, 72, 153, ${0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(otherX, otherY);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    };

    const animate = () => {
      switch (variant) {
        case 'particles':
          drawParticles();
          break;
        case 'matrix':
          drawMatrix();
          break;
        case 'cyber-grid':
          drawCyberGrid();
          break;
        case 'hologram':
          drawHologram();
          break;
        case 'data-stream':
          drawDataStream();
          break;
        case 'quantum':
          drawQuantum();
          break;
        case 'metaverse':
          drawMetaverse();
          break;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;