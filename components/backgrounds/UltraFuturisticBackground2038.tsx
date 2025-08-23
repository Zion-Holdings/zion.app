import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space' | 'quantum-neon';
  children?: React.ReactNode;
  enableParticles?: boolean;
  enableWaves?: boolean;
  enableHolograms?: boolean;
}

export default function UltraFuturisticBackground2038({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children,
  enableParticles = true,
  enableWaves = true,
  enableHolograms = true
}: UltraFuturisticBackground2038Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

    // Enhanced theme-based color schemes for 2038
    const getThemeColors = () => {
      switch (theme) {
        case 'quantum-neon':
          return {
            primary: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'],
            secondary: ['#8000ff', '#0080ff', '#ff8000', '#80ff00', '#ff4080'],
            accent: ['#ffff40', '#ff40ff', '#40ffff', '#ff6b6b', '#4ecdc4'],
            quantum: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#8000ff']
          };
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4', '#45b7d1']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
            secondary: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff9ff3', '#54a0ff'],
            accent: ['#5f27cd', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
            secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
            accent: ['#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4', '#45b7d1']
          };
        case 'space':
          return {
            primary: ['#1e3a8a', '#7c3aed', '#059669', '#dc2626', '#ea580c'],
            secondary: ['#0891b2', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'],
            accent: ['#06b6d4', '#a855f7', '#f97316', '#ef4444', '#84cc16']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
          };
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with quantum effects for 2038
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'space' | 'quantum-neon';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
      quantumState: number;
      neonIntensity: number;
      hologramPhase: number;
    }> = [];

    // Initialize particles with enhanced quantum effects
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(50 * intensityMultiplier);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'quantum-neon' : 
                    Math.random() > 0.6 ? 'hologram' : 
                    Math.random() > 0.5 ? 'neon' : 
                    Math.random() > 0.3 ? 'quantum' : 'particle';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 20 + 10,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: [Math.random(), Math.random(), Math.random()],
          quantumState: Math.random() * Math.PI * 2,
          neonIntensity: Math.random() * 0.8 + 0.2,
          hologramPhase: Math.random() * Math.PI * 2
        });
      }
    };

    // Enhanced wave system for 2038
    let waves: Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neon' | 'holographic';
      phase: number;
      frequency: number;
      amplitude: number;
    }> = [];

    const initWaves = () => {
      waves = [];
      const waveCount = Math.floor(8 * intensityMultiplier);
      
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0,
          maxRadius: Math.random() * 200 + 100,
          speed: (Math.random() * 2 + 1) * intensityMultiplier,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors.secondary[Math.floor(Math.random() * colors.secondary.length)],
          type: Math.random() > 0.6 ? 'quantum' : Math.random() > 0.3 ? 'neon' : 'holographic',
          phase: Math.random() * Math.PI * 2,
          frequency: Math.random() * 0.02 + 0.01,
          amplitude: Math.random() * 20 + 10
        });
      }
    };

    // Enhanced hologram system for 2038
    let holograms: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      frequency: number;
      amplitude: number;
      type: 'geometric' | 'organic' | 'quantum' | 'neon';
    }> = [];

    const initHolograms = () => {
      holograms = [];
      const hologramCount = Math.floor(12 * intensityMultiplier);
      
      for (let i = 0; i < hologramCount; i++) {
        holograms.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 100 + 50,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors.accent[Math.floor(Math.random() * colors.accent.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          phase: Math.random() * Math.PI * 2,
          frequency: Math.random() * 0.01 + 0.005,
          amplitude: Math.random() * 30 + 20,
          type: Math.random() > 0.7 ? 'quantum' : 
                Math.random() > 0.5 ? 'neon' : 
                Math.random() > 0.3 ? 'geometric' : 'organic'
        });
      }
    };

    // Initialize all systems
    initParticles();
    initWaves();
    initHolograms();

    // Enhanced animation loop for 2038
    let animationId: number;
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      if (enableParticles) {
        particles.forEach((particle, index) => {
          // Update particle position
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.rotation += particle.rotationSpeed;
          particle.phase += particle.frequency;
          particle.quantumState += 0.02;
          particle.neonIntensity = 0.5 + 0.5 * Math.sin(particle.phase * 2);
          particle.hologramPhase += 0.01;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Update life
          particle.life--;
          if (particle.life <= 0) {
            particle.life = particle.maxLife;
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
          }

          // Draw particle based on type
          ctx.save();
          ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
          
          if (particle.type === 'quantum-neon') {
            // Quantum-neon hybrid effect
            const quantumGlow = Math.sin(particle.quantumState) * 0.5 + 0.5;
            const neonGlow = Math.sin(particle.neonIntensity * Math.PI) * 0.5 + 0.5;
            
            // Create quantum field
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 4
            );
            gradient.addColorStop(0, `${particle.color}${Math.floor(quantumGlow * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(0.5, `${particle.color}${Math.floor(neonGlow * 128).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Add neon glow
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = particle.size * 2;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (particle.type === 'hologram') {
            // Holographic effect
            const hologramOpacity = Math.sin(particle.hologramPhase) * 0.5 + 0.5;
            ctx.globalAlpha *= hologramOpacity;
            
            // Create holographic pattern
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < 8; i++) {
              const angle = (i / 8) * Math.PI * 2 + particle.rotation;
              const x = particle.x + Math.cos(angle) * particle.size;
              const y = particle.y + Math.sin(angle) * particle.size;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.stroke();
          } else {
            // Standard particle
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.restore();
        });
      }

      // Update and draw waves
      if (enableWaves) {
        waves.forEach((wave, index) => {
          wave.radius += wave.speed;
          wave.phase += wave.frequency;
          
          if (wave.radius > wave.maxRadius) {
            wave.radius = 0;
            wave.x = Math.random() * canvas.width;
            wave.y = Math.random() * canvas.height;
          }

          const opacity = wave.opacity * (1 - wave.radius / wave.maxRadius);
          ctx.save();
          ctx.globalAlpha = opacity;
          
          if (wave.type === 'quantum') {
            // Quantum wave effect
            const quantumPattern = Math.sin(wave.phase * 3) * wave.amplitude;
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(wave.x, wave.y, wave.radius + quantumPattern, 0, Math.PI * 2);
            ctx.stroke();
          } else if (wave.type === 'neon') {
            // Neon wave effect
            ctx.shadowColor = wave.color;
            ctx.shadowBlur = 10;
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Standard wave
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          ctx.restore();
        });
      }

      // Update and draw holograms
      if (enableHolograms) {
        holograms.forEach((hologram, index) => {
          hologram.rotation += hologram.rotationSpeed;
          hologram.phase += hologram.frequency;
          
          const hologramOpacity = Math.sin(hologram.phase) * 0.3 + 0.4;
          ctx.save();
          ctx.globalAlpha = hologram.opacity * hologramOpacity;
          ctx.translate(hologram.x, hologram.y);
          ctx.rotate(hologram.rotation);
          
          if (hologram.type === 'quantum') {
            // Quantum hologram
            const quantumEffect = Math.sin(hologram.phase * 2) * hologram.amplitude;
            ctx.strokeStyle = hologram.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 12; i++) {
              const angle = (i / 12) * Math.PI * 2;
              const radius = hologram.size + quantumEffect;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.stroke();
          } else if (hologram.type === 'neon') {
            // Neon hologram
            ctx.shadowColor = hologram.color;
            ctx.shadowBlur = 15;
            ctx.strokeStyle = hologram.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(0, 0, hologram.size, 0, Math.PI * 2);
            ctx.stroke();
          } else if (hologram.type === 'geometric') {
            // Geometric hologram
            ctx.strokeStyle = hologram.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i / 6) * Math.PI * 2;
              const x = Math.cos(angle) * hologram.size;
              const y = Math.sin(angle) * hologram.size;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.stroke();
          } else {
            // Organic hologram
            ctx.strokeStyle = hologram.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 100; i++) {
              const angle = (i / 100) * Math.PI * 2;
              const radius = hologram.size + Math.sin(angle * 3) * hologram.amplitude;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.stroke();
          }
          
          ctx.restore();
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [intensity, theme, enableParticles, enableWaves, enableHolograms]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'transparent',
          zIndex: -1
        }}
      />
      
      {/* Enhanced overlay effects for 2038 */}
      {isVisible && (
        <>
          {/* Quantum field overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </motion.div>

          {/* Neon grid overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>
          </motion.div>

          {/* Holographic elements */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <div className="w-full h-full border border-cyan-400/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border border-purple-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-emerald-400/30 rounded-full animate-pulse"></div>
          </motion.div>
        </>
      )}
      
      {children}
    </div>
  );
}