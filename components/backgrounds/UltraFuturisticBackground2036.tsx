import React, { useEffect, useRef } from 'react';
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

    // Enhanced theme-based color schemes with quantum-neon fusion
    const getThemeColors = () => {
      switch (theme) {
        case 'neon':
          return {
            primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
            secondary: ['#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
            accent: ['#ff9ff3', '#54a0ff', '#5f27cd', '#ff6b6b'],
            neon: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff'],
            secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff'],
            accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff'],
            neon: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff']
          };
        case 'quantum-neon':
          return {
            primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
            secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
            accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444'],
            neon: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981']
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
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'quantum-neon';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
      glowRadius: number;
      pulsePhase: number;
      neonIntensity: number;
    }> = [];

    // Initialize particles with quantum-neon fusion
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(50 * intensityMultiplier);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'quantum-neon' : 
                    Math.random() > 0.5 ? 'neon' : 'quantum';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 0.5 * intensityMultiplier,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 20 + 10,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: [],
          glowRadius: Math.random() * 30 + 10,
          pulsePhase: Math.random() * Math.PI * 2,
          neonIntensity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Enhanced quantum entanglement system
    const createEntanglement = () => {
      if (particles.length < 2) return;
      
      const particle1 = particles[Math.floor(Math.random() * particles.length)];
      const particle2 = particles[Math.floor(Math.random() * particles.length)];
      
      if (particle1 !== particle2) {
        particle1.entanglement.push(particles.indexOf(particle2));
        particle2.entanglement.push(particles.indexOf(particle1));
      }
    };

    // Enhanced rendering with neon effects
    const renderParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.phase += particle.frequency;
        particle.pulsePhase += 0.05;
        particle.life -= 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Regenerate dead particles
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Calculate dynamic properties
        const lifeRatio = particle.life / particle.maxLife;
        const pulseIntensity = Math.sin(particle.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = particle.opacity * lifeRatio * pulseIntensity;

        // Render based on particle type
        switch (particle.type) {
          case 'quantum-neon':
            renderQuantumNeonParticle(particle, currentOpacity, pulseIntensity);
            break;
          case 'neon':
            renderNeonParticle(particle, currentOpacity, pulseIntensity);
            break;
          default:
            renderQuantumParticle(particle, currentOpacity);
        }

        // Render entanglement connections
        particle.entanglement.forEach(entangledIndex => {
          if (entangledIndex < particles.length) {
            const entangledParticle = particles[entangledIndex];
            renderEntanglement(particle, entangledParticle, currentOpacity);
          }
        });
      });

      // Create quantum field effects
      renderQuantumField();
      
      // Create neon grid overlay
      renderNeonGrid();
    };

    // Enhanced quantum particle rendering
    const renderQuantumParticle = (particle: any, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Quantum wave function visualization
      const waveRadius = particle.amplitude * Math.sin(particle.phase);
      const waveOpacity = opacity * 0.3;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, Math.abs(waveRadius), 0, Math.PI * 2);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = waveOpacity;
      ctx.stroke();
      
      // Core particle
      ctx.globalAlpha = opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Enhanced neon particle rendering
    const renderNeonParticle = (particle: any, opacity: number, pulseIntensity: number) => {
      ctx.save();
      
      // Neon glow effect
      const glowRadius = particle.glowRadius * pulseIntensity;
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowRadius
      );
      
      glowGradient.addColorStop(0, `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
      glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(opacity * 128).toString(16).padStart(2, '0')}`);
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Core neon particle
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = opacity * pulseIntensity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Enhanced quantum-neon fusion particle
    const renderQuantumNeonParticle = (particle: any, opacity: number, pulseIntensity: number) => {
      ctx.save();
      
      // Quantum field
      renderQuantumParticle(particle, opacity * 0.7);
      
      // Neon glow
      renderNeonParticle(particle, opacity, pulseIntensity);
      
      // Fusion effects
      const fusionRadius = particle.size * 3 * pulseIntensity;
      ctx.strokeStyle = colors.neon[Math.floor(Math.random() * colors.neon.length)];
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity * 0.5;
      
      for (let i = 0; i < 3; i++) {
        const angle = particle.rotation + (i * Math.PI * 2) / 3;
        const x1 = particle.x + Math.cos(angle) * fusionRadius;
        const y1 = particle.y + Math.sin(angle) * fusionRadius;
        const x2 = particle.x + Math.cos(angle + Math.PI) * fusionRadius;
        const y2 = particle.y + Math.sin(angle + Math.PI) * fusionRadius;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Enhanced entanglement rendering
    const renderEntanglement = (particle1: any, particle2: any, opacity: number) => {
      ctx.save();
      ctx.strokeStyle = colors.accent[Math.floor(Math.random() * colors.accent.length)];
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity * 0.3;
      
      // Quantum entanglement line
      ctx.beginPath();
      ctx.moveTo(particle1.x, particle1.y);
      ctx.lineTo(particle2.x, particle2.y);
      ctx.stroke();
      
      // Entanglement nodes
      const midX = (particle1.x + particle2.x) / 2;
      const midY = (particle1.y + particle2.y) / 2;
      
      ctx.fillStyle = colors.primary[Math.floor(Math.random() * colors.primary.length)];
      ctx.globalAlpha = opacity * 0.6;
      ctx.beginPath();
      ctx.arc(midX, midY, 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Enhanced quantum field rendering
    const renderQuantumField = () => {
      ctx.save();
      
      // Create quantum field patterns
      const fieldSize = 100;
      const fieldSpacing = 50;
      
      for (let x = 0; x < canvas.width; x += fieldSpacing) {
        for (let y = 0; y < canvas.height; y += fieldSpacing) {
          const time = Date.now() * 0.001;
          const fieldIntensity = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5 + 0.5;
          
          if (fieldIntensity > 0.3) {
            ctx.strokeStyle = colors.primary[Math.floor(Math.random() * colors.primary.length)];
            ctx.lineWidth = 1;
            ctx.globalAlpha = fieldIntensity * 0.1;
            
            ctx.beginPath();
            ctx.arc(x, y, fieldSize * fieldIntensity, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }
      
      ctx.restore();
    };

    // Enhanced neon grid rendering
    const renderNeonGrid = () => {
      ctx.save();
      
      const gridSize = 100;
      const gridOpacity = 0.05;
      
      ctx.strokeStyle = colors.neon[0];
      ctx.lineWidth = 1;
      ctx.globalAlpha = gridOpacity;
      
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
      
      ctx.restore();
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!prefersReducedMotion) {
        renderParticles();
        
        // Create new entanglements periodically
        if (Math.random() > 0.98) {
          createEntanglement();
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neon border effects */}
        <div className="absolute inset-0 border border-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-30"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/10 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 right-32 w-24 h-24 border border-purple-500/10 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/10 rounded-full"
        />
        
        {/* Quantum energy waves */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0, 0.1, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          />
          
          <motion.div
            animate={{ 
              x: ['100%', '-100%'],
              opacity: [0, 0.1, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
        </div>
      </div>
      
      {children}
    </div>
  );
}