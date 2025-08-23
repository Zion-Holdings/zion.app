import React, { useEffect, useRef, useState } from 'react';


interface UltraFuturisticBackground2037Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2037({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children
}: UltraFuturisticBackground2037Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced theme-based color schemes
    const getThemeColors = () => {
      switch (theme) {
        case 'quantum-neon':
          return {
            primary: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'],
            secondary: ['#8000ff', '#0080ff', '#ff8000', '#80ff00', '#ff4080'],
            accent: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#00ff80']
          };
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff40ff', '#40ffff'],
            accent: ['#ff4080', '#ffff40', '#ff40ff', '#40ffff', '#ff6b6b'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#00ff80']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4'],
            accent: ['#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1'],
            neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff40ff', '#40ffff'],
            accent: ['#ff4080', '#ffff40', '#ff40ff', '#40ffff', '#ff6b6b'],
            neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
            neon: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with quantum effects
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'quantum-neon';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      quantumState: number;
      entanglement: number[];
    }> = [];

    // Initialize particles with quantum properties
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 300);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.2 ? 'quantum-neon' : 
                           Math.random() < 0.3 ? 'hologram' : 
                           Math.random() < 0.4 ? 'quantum' : 
                           Math.random() < 0.6 ? 'neon' : 
                           Math.random() < 0.8 ? 'wave' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: 0,
          maxLife: Math.random() * 200 + 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 50 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          quantumState: Math.random() * Math.PI * 2,
          entanglement: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]
        });
      }
    };

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation loop
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (theme === 'quantum-neon') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.3, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.life++;
        particle.rotation += particle.rotationSpeed;
        particle.phase += particle.frequency;
        particle.quantumState += 0.02;

        // Quantum entanglement effects
        if (particle.type === 'quantum-neon' || particle.type === 'quantum') {
          particle.x += Math.sin(particle.quantumState) * 0.5;
          particle.y += Math.cos(particle.quantumState) * 0.5;
        }

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.001;
          particle.y += dy * force * 0.001;
        }

        // Boundary wrapping with quantum tunneling effect
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        switch (particle.type) {
          case 'quantum-neon':
            // Quantum neon particles with entanglement
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Neon glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Entanglement lines
            if (index % 3 === 0) {
              const entangledParticle = particles[(index + 7) % particles.length];
              if (entangledParticle) {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(entangledParticle.x - particle.x, entangledParticle.y - particle.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * particle.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
            break;

          case 'hologram':
            // Holographic particles
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Holographic grid effect
            ctx.beginPath();
            ctx.rect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * particle.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            break;

          case 'quantum': {
            // Quantum particles with wave function
            const waveSize = particle.size + Math.sin(particle.phase) * 5;
            ctx.beginPath();
            ctx.arc(0, 0, waveSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${0.3 * particle.opacity})`;
            ctx.fill();
            
            // Wave interference pattern
            ctx.beginPath();
            ctx.arc(0, 0, waveSize * 0.5, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * particle.opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
          }

          case 'neon': {
            // Neon particles with glow
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Neon glow
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
          }

          case 'wave': {
            // Wave particles
            ctx.beginPath();
            ctx.moveTo(-particle.size, 0);
            ctx.lineTo(particle.size, 0);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
          }

          default: {
            // Standard particles
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
          }
        }

        ctx.restore();

        // Reset particle if it's too old
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.quantumState = Math.random() * Math.PI * 2;
        }
      });

      // Draw quantum field lines
      if (theme === 'quantum-neon' || theme === 'quantum') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 20; i++) {
          const x1 = Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.3 + canvas.width / 2;
          const y1 = Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.3 + canvas.height / 2;
          const x2 = Math.sin(Date.now() * 0.002 + i) * canvas.width * 0.4 + canvas.width / 2;
          const y2 = Math.cos(Date.now() * 0.002 + i) * canvas.height * 0.4 + canvas.height / 2;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // Draw neon grid overlay
      if (theme === 'neon' || theme === 'cyberpunk') {
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
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
      }

      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: theme === 'quantum-neon' ? 'contrast(1.2) saturate(1.3)' : 'none'
        }}
      />
      {children}
    </div>
  );
}
