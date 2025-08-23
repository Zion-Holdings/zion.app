import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon' | 'holographic-neon';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2038({ 
  intensity = 'medium', 
  theme = 'holographic-neon',
  children
}: UltraFuturisticBackground2038Props) {
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

    // Enhanced theme-based color schemes with holographic-neon fusion
    const getThemeColors = () => {
      switch (theme) {
        case 'holographic-neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
            secondary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#00d4ff', '#8b5cf6'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
            holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
          };
        case 'quantum-neon':
          return {
            primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
          };
        default:
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with quantum effects and holographic elements
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'quantum-neon' | 'holographic-neon';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
      holographicLayer: number;
      neonIntensity: number;
    }> = [];

    // Initialize particles with holographic-neon fusion
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(100 * intensityMultiplier);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'holographic-neon' : 
                    Math.random() > 0.5 ? 'quantum-neon' : 
                    Math.random() > 0.3 ? 'holographic' : 'neon';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 50 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: [Math.random(), Math.random()],
          holographicLayer: Math.floor(Math.random() * 3),
          neonIntensity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation loop with holographic effects
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create holographic grid effect
      if (theme === 'holographic-neon' || theme === 'holographic') {
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * intensityMultiplier})`;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life--;
        particle.phase += particle.frequency;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        if (particle.type === 'holographic-neon') {
          // Holographic neon effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
          gradient.addColorStop(0, `rgba(255, 0, 128, ${particle.opacity * particle.neonIntensity})`);
          gradient.addColorStop(0.5, `rgba(0, 255, 255, ${particle.opacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20 * particle.neonIntensity;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        } else if (particle.type === 'quantum-neon') {
          // Quantum neon effect
          const wave = Math.sin(particle.phase) * particle.amplitude;
          ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
          ctx.fillRect(-particle.size + wave, -particle.size, particle.size * 2, particle.size * 2);
          
          // Quantum entanglement lines
          if (index % 3 === 0) {
            const entangledParticle = particles[(index + 7) % particles.length];
            if (entangledParticle) {
              ctx.strokeStyle = `rgba(236, 72, 153, ${particle.opacity * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(entangledParticle.x - particle.x, entangledParticle.y - particle.y);
              ctx.stroke();
            }
          }
        } else if (particle.type === 'holographic') {
          // Holographic effect
          const layer = particle.holographicLayer;
          const alpha = particle.opacity * (0.3 + layer * 0.2);
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Holographic interference pattern
          const interference = Math.sin(particle.phase * 3) * Math.cos(particle.phase * 2);
          ctx.strokeStyle = `rgba(255, 107, 107, ${alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(-particle.size + interference, -particle.size, particle.size * 2, particle.size * 2);
        } else {
          // Standard neon effect
          ctx.fillStyle = `rgba(255, 0, 128, ${particle.opacity})`;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          
          // Neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.strokeRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        }

        ctx.restore();

        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 2 * intensityMultiplier;
          particle.vy = (Math.random() - 0.5) * 2 * intensityMultiplier;
        }
      });

      // Add quantum field effects
      if (theme === 'quantum-neon' || theme === 'holographic-neon') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        for (let i = 0; i < 5; i++) {
          const time = Date.now() * 0.001;
          const x = Math.sin(time * 0.5 + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y = Math.cos(time * 0.3 + i) * canvas.height * 0.3 + canvas.height * 0.5;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
          gradient.addColorStop(0, `rgba(139, 92, 246, ${0.1 * intensityMultiplier})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        ctx.restore();
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
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Additional holographic overlay effects */}
      {theme === 'holographic-neon' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-500/5 to-transparent animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/5 to-transparent animate-pulse delay-2000" />
        </div>
      )}
      
      {children}
    </div>
  );
}