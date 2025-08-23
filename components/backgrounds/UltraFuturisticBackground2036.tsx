import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2036Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2036({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children
}: UltraFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with more variety and quantum effects
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
    type: 'particle' | 'wave' | 'quantum' | 'neon' | 'holographic' | 'energy' | 'data' | 'neural' | 'quantum-field' | 'neon-pulse' | 'hologram' | 'energy-orb';
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    quantumState: number;
    entanglement: number;
    waveFunction: number;
  }>>([]);

  // Enhanced theme-based color schemes with more vibrant colors and quantum effects
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'neon':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      case 'holographic':
        return {
          primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff'],
          accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1'],
          neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          holographic: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      case 'cyberpunk':
        return {
          primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff0055', '#00ffff'],
          neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          cyber: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2'],
          quantumField: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#8000ff', '#ff0080'],
          neonPulse: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          ultra: ['#ff1493', '#00bfff', '#32cd32', '#ffd700', '#ff4500', '#8a2be2'],
          quantumField: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#8000ff', '#ff0080']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced variety and quantum effects
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance and visual impact
    const baseCount = prefersReducedMotion ? 25 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 2));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'quantum-field', 'neon-pulse', 'hologram', 'energy-orb'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
        type: particleType as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        quantumState: Math.random() * Math.PI * 2,
        entanglement: Math.random(),
        waveFunction: Math.random() * Math.PI * 2
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with quantum effects and neon pulses
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with enhanced transparency for layering effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create gradient background for enhanced depth
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    
    const colors = getThemeColors();
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.02)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with enhanced effects
    particles.current.forEach((particle, index) => {
      // Update particle position with quantum fluctuations
      particle.x += particle.vx + Math.sin(particle.quantumState) * 0.5;
      particle.y += particle.vy + Math.cos(particle.quantumState) * 0.5;
      
      // Update quantum state
      particle.quantumState += 0.02;
      particle.waveFunction += 0.03;
      
      // Update rotation and pulse
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      
      // Update life
      particle.life--;

      // Wrap particles around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Reset particle if it dies
      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }

      // Enhanced drawing based on particle type
      ctx.save();
      ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
      
      switch (particle.type) {
        case 'quantum-field':
          // Draw quantum field particles with wave functions
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Add quantum wave effects
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, particle.waveFunction, particle.waveFunction + Math.PI);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha *= 0.5;
          ctx.stroke();
          break;
          
        case 'neon-pulse': {
          // Draw neon pulse particles with pulsing effect
          const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.5);
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Add neon glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
          
        case 'hologram': {
          // Draw hologram particles with transparency and rotation
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);
          ctx.globalAlpha *= 0.7;
          
          ctx.beginPath();
          ctx.moveTo(-particle.x, 0);
          ctx.lineTo(particle.x, 0);
          ctx.lineTo(0, -particle.x);
          ctx.closePath();
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          break;
        }
          
        case 'energy-orb': {
          // Draw energy orb particles with energy field
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Add energy field
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha *= 0.3;
          ctx.stroke();
          break;
        }
          
        default:
          // Standard particle drawing
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
      }
      
      ctx.restore();
    });

    // Add quantum entanglement lines between nearby particles
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const p1 = particles.current[i];
        const p2 = particles.current[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        
        if (distance < 100 && Math.random() < 0.01) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Add floating neon text effects
    if (Math.random() < 0.02) {
      const neonTexts = ['QUANTUM', 'NEON', 'FUTURE', 'AI', '2045', 'ZION'];
      const text = neonTexts[Math.floor(Math.random() * neonTexts.length)];
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      ctx.save();
      ctx.font = '24px Arial';
      ctx.fillStyle = colors.neon[Math.floor(Math.random() * colors.neon.length)];
      ctx.textAlign = 'center';
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 15;
      ctx.globalAlpha = 0.3;
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Enhanced initialization and cleanup
  useEffect(() => {
    initParticles();
    animate();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, animate]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.02) 100%)'
        }}
      />
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/5" />
      
      {/* Quantum field lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#quantumGradient)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>
      
      {children}
    </div>
  );
}