import React, { useEffect, useRef } from 'react';

interface NeoFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const NeoFuturisticBackground: React.FC<NeoFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation parameters based on intensity
    const getIntensityParams = () => {
      switch (intensity) {
        case 'low':
          return { particleCount: 20, gridSize: 40, waveSpeed: 0.5, orbCount: 3 };
        case 'high':
          return { particleCount: 60, gridSize: 20, waveSpeed: 2, orbCount: 8 };
        default:
          return { particleCount: 40, gridSize: 30, waveSpeed: 1, orbCount: 5 };
      }
    };

    const params = getIntensityParams();

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    
    // Initialize particles
    for (let i = 0; i < params.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Grid system
    const gridPoints: { x: number; y: number; phase: number }[] = [];
    const gridCols = Math.ceil(canvas.width / params.gridSize);
    const gridRows = Math.ceil(canvas.height / params.gridSize);

    for (let col = 0; col < gridCols; col++) {
      for (let row = 0; row < gridRows; row++) {
        gridPoints.push({
          x: col * params.gridSize,
          y: row * params.gridSize,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    // Energy waves
    let waveTime = 0;

    // Floating orbs
    const orbs: { x: number; y: number; size: number; phase: number }[] = [];
    for (let i = 0; i < params.orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 40,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if dead
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw grid points and connections
      gridPoints.forEach((point, index) => {
        // Animate grid points
        point.phase += 0.02;
        const offset = Math.sin(point.phase) * 2;

        // Draw grid point
        ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(point.x + offset, point.y + offset, 1, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections to nearby points
        gridPoints.forEach((otherPoint, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(point.x - otherPoint.x, 2) + 
            Math.pow(point.y - otherPoint.y, 2)
          );

          if (distance < params.gridSize * 1.5) {
            const alpha = 1 - (distance / (params.gridSize * 1.5));
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(point.x + offset, point.y + offset);
            ctx.lineTo(otherPoint.x + offset, otherPoint.y + offset);
            ctx.stroke();
          }
        });
      });

      // Draw energy waves
      waveTime += 0.02 * params.waveSpeed;
      for (let i = 0; i < 3; i++) {
        const waveRadius = (waveTime + i * 2) % (Math.max(canvas.width, canvas.height) / 2);
        const alpha = 1 - (waveRadius / (Math.max(canvas.width, canvas.height) / 2));
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw floating orbs
      orbs.forEach((orb) => {
        orb.phase += 0.01;
        const pulse = Math.sin(orb.phase) * 0.3 + 0.7;
        
        // Create radial gradient for orb
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size * pulse
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw static glowing corners
      const cornerSize = 60;
      const cornerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, cornerSize);
      cornerGlow.addColorStop(0, 'rgba(0, 255, 255, 0.6)');
      cornerGlow.addColorStop(1, 'rgba(0, 255, 255, 0)');

      // Top-left corner
      ctx.save();
      ctx.translate(0, 0);
      ctx.fillStyle = cornerGlow;
      ctx.fillRect(0, 0, cornerSize, cornerSize);
      ctx.restore();

      // Top-right corner
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.fillStyle = cornerGlow;
      ctx.fillRect(0, 0, cornerSize, cornerSize);
      ctx.restore();

      // Bottom-left corner
      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.fillStyle = cornerGlow;
      ctx.fillRect(0, 0, cornerSize, cornerSize);
      ctx.restore();

      // Bottom-right corner
      ctx.save();
      ctx.translate(canvas.width, canvas.height);
      ctx.scale(-1, -1);
      ctx.fillStyle = cornerGlow;
      ctx.fillRect(0, 0, cornerSize, cornerSize);
      ctx.restore();

      // Draw scanning line
      const scanY = (waveTime * 50) % canvas.height;
      const scanGradient = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      scanGradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
      scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.8)');
      scanGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 2, canvas.width, 4);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeoFuturisticBackground;