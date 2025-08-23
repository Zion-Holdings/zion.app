import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
            glow: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
            secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b'],
            glow: ['#ff5252', '#26d0ce', '#42a5f5', '#66bb6a']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
            glow: ['#ff0033', '#00ffff', '#ffff00', '#ff00ff']
          };
        case 'quantum':
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            glow: ['#7c3aed', '#0891b2', '#db2777', '#059669']
          };
        default: // quantum-neon
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            secondary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
            accent: ['#f59e0b', '#ef4444', '#8000ff', '#00ff80'],
            glow: ['#7c3aed', '#0891b2', '#ff0066', '#00ffff']
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
      waveFrequency: number;
      waveAmplitude: number;
      quantumState: number;
      neonIntensity: number;
      hologramOpacity: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 300);
      const particleCount = Math.floor(baseCount * intensityMultiplier);

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() < 0.2 ? 'quantum-neon' :
                           Math.random() < 0.3 ? 'hologram' :
                           Math.random() < 0.4 ? 'quantum' : 
                           Math.random() < 0.6 ? 'wave' : 
                           Math.random() < 0.8 ? 'neon' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type: particleType,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          waveFrequency: Math.random() * 0.1 + 0.05,
          waveAmplitude: Math.random() * 20 + 10,
          quantumState: Math.random() * Math.PI * 2,
          neonIntensity: Math.random() * 0.8 + 0.2,
          hologramOpacity: Math.random() * 0.6 + 0.4
        });
      }
    };

    // Enhanced rendering functions
    const drawQuantumNeonParticle = (particle: any) => {
      const { x, y, size, color, quantumState, neonIntensity, rotation } = particle;
      
      // Quantum state visualization
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Quantum probability cloud
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
      gradient.addColorStop(0, `${color}${Math.floor(neonIntensity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${color}${Math.floor(neonIntensity * 128).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Neon glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 4;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Quantum interference pattern
      for (let i = 0; i < 3; i++) {
        const angle = quantumState + (i * Math.PI * 2) / 3;
        const radius = size * (1.5 + Math.sin(quantumState * 3) * 0.5);
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(neonIntensity * 200).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
      
      ctx.restore();
    };

    const drawHologramParticle = (particle: any) => {
      const { x, y, size, color, hologramOpacity, rotation } = particle;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Holographic grid effect
      const gridSize = size * 2;
      ctx.strokeStyle = `${color}${Math.floor(hologramOpacity * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 1;
      ctx.globalAlpha = hologramOpacity;
      
      // Vertical lines
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize / 2, -gridSize);
        ctx.lineTo(i * gridSize / 2, gridSize);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(-gridSize, i * gridSize / 2);
        ctx.lineTo(gridSize, i * gridSize / 2);
        ctx.stroke();
      }
      
      // Holographic center
      ctx.fillStyle = `${color}${Math.floor(hologramOpacity * 100).toString(16).padStart(2, '0')}`;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawWaveParticle = (particle: any) => {
      const { x, y, size, color, waveFrequency, waveAmplitude, opacity } = particle;
      
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity;
      
      // Wave pattern
      ctx.beginPath();
      for (let i = 0; i < 100; i++) {
        const waveX = x + (i - 50) * 2;
        const waveY = y + Math.sin(i * waveFrequency + Date.now() * 0.01) * waveAmplitude;
        
        if (i === 0) {
          ctx.moveTo(waveX, waveY);
        } else {
          ctx.lineTo(waveX, waveY);
        }
      }
      ctx.stroke();
      
      ctx.restore();
    };

    const drawNeonParticle = (particle: any) => {
      const { x, y, size, color, neonIntensity } = particle;
      
      ctx.save();
      
      // Neon glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 6;
      ctx.fillStyle = color;
      ctx.globalAlpha = neonIntensity;
      
      // Main particle
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Neon rings
      for (let i = 1; i <= 3; i++) {
        ctx.globalAlpha = neonIntensity * (1 - i * 0.3);
        ctx.beginPath();
        ctx.arc(x, y, size * (1 + i * 0.5), 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawQuantumParticle = (particle: any) => {
      const { x, y, size, color, quantumState } = particle;
      
      ctx.save();
      ctx.translate(x, y);
      
      // Quantum uncertainty visualization
      const uncertainty = Math.sin(quantumState) * 0.5 + 0.5;
      const radius = size * (1 + uncertainty);
      
      // Probability distribution
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 2);
      gradient.addColorStop(0, `${color}80`);
      gradient.addColorStop(0.5, `${color}40`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Quantum state indicator
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Quantum spin
      const spinAngle = quantumState * 3;
      ctx.beginPath();
      ctx.moveTo(Math.cos(spinAngle) * size, Math.sin(spinAngle) * size);
      ctx.lineTo(Math.cos(spinAngle + Math.PI) * size, Math.sin(spinAngle + Math.PI) * size);
      ctx.stroke();
      
      ctx.restore();
    };

    // Main animation loop
    const animate = () => {
      if (prefersReducedMotion) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.quantumState += 0.02;
        particle.life--;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Regenerate dead particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.quantumState = Math.random() * Math.PI * 2;
        }
        
        // Draw based on particle type
        switch (particle.type) {
          case 'quantum-neon':
            drawQuantumNeonParticle(particle);
            break;
          case 'hologram':
            drawHologramParticle(particle);
            break;
          case 'quantum':
            drawQuantumParticle(particle);
            break;
          case 'wave':
            drawWaveParticle(particle);
            break;
          case 'neon':
            drawNeonParticle(particle);
            break;
          default:
            // Default particle
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }
      });
      
      // Add quantum entanglement effects
      if (theme === 'quantum-neon' || theme === 'quantum') {
        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach((particle2) => {
            const distance = Math.sqrt(
              Math.pow(particle1.x - particle2.x, 2) + 
              Math.pow(particle1.y - particle2.y, 2)
            );
            
            if (distance < 100 && particle1.type === particle2.type) {
              ctx.strokeStyle = `${particle1.color}20`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          });
        });
      }
      
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent',
          filter: theme === 'neon' ? 'brightness(1.2) contrast(1.1)' : 'none'
        }}
      />
      {children}
    </div>
  );
}