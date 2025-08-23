import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum-neon' | 'holographic-cyberpunk' | 'quantum-holographic' | 'neon-futuristic' | 'quantum-cyberpunk';
  children?: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2038({ 
  intensity = 'high', 
  theme = 'quantum-neon',
  children
}: UltraAdvancedFuturisticBackground2038Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Advanced particle system with quantum effects
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
    type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon';
    phase: number;
    amplitude: number;
    frequency: number;
    quantumState: 'superposition' | 'entangled' | 'coherent';
  }>>([]);

  // Enhanced theme-based color schemes
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'holographic-cyberpunk':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ffff40', '#ff40ff', '#80ff00', '#ff0080', '#00ff80'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
      case 'quantum-holographic':
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
      case 'neon-futuristic':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          secondary: ['#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ffff40', '#ff40ff', '#80ff00', '#ff0080', '#00ff80'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
      case 'quantum-cyberpunk':
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
      default: // quantum-neon
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff'],
          quantum: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b']
        };
    }
  }, [theme]);

  // Initialize advanced particles with quantum effects
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 20 : (isSmallScreen ? 60 : 120);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1.2 : 1.8));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['quantum', 'neon', 'holographic', 'cyberpunk', 'quantum-neon'];
      const quantumStates = ['superposition', 'entangled', 'coherent'];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
        life: Math.random() * 150,
        maxLife: 150,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)] as 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-neon',
        phase: Math.random() * Math.PI * 2,
        amplitude: Math.random() * 50 + 20,
        frequency: Math.random() * 0.02 + 0.01,
        quantumState: quantumStates[Math.floor(Math.random() * quantumStates.length)] as 'superposition' | 'entangled' | 'coherent'
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with quantum effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with gradient background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    
    const colors = getThemeColors();
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.05)');
    gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.02)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with quantum effects
    particles.current.forEach((particle, index) => {
      // Update particle position with quantum effects
      particle.phase += particle.frequency;
      
      // Quantum superposition effect
      if (particle.quantumState === 'superposition') {
        particle.x += Math.sin(particle.phase) * particle.amplitude * 0.1;
        particle.y += Math.cos(particle.phase) * particle.amplitude * 0.1;
      }
      
      // Quantum entanglement effect
      if (particle.quantumState === 'entangled' && index > 0) {
        const prevParticle = particles.current[index - 1];
        const distance = Math.sqrt(
          Math.pow(particle.x - prevParticle.x, 2) + 
          Math.pow(particle.y - prevParticle.y, 2)
        );
        if (distance < 100) {
          particle.vx += (prevParticle.x - particle.x) * 0.001;
          particle.vy += (prevParticle.y - particle.y) * 0.001;
        }
      }
      
      // Quantum coherence effect
      if (particle.quantumState === 'coherent') {
        particle.size = particle.size + Math.sin(particle.phase) * 0.5;
        particle.opacity = 0.3 + Math.sin(particle.phase) * 0.4;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
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

      // Draw particle with enhanced effects
      ctx.save();
      
      // Create glow effect
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      
      const baseColor = particle.color;
      const alpha = particle.opacity;
      
      glowGradient.addColorStop(0, `${baseColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
      glowGradient.addColorStop(0.5, `${baseColor}${Math.floor(alpha * 128).toString(16).padStart(2, '0')}`);
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw main particle
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add quantum trail effect
      if (particle.quantumState === 'coherent') {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 10, particle.y - particle.vy * 10);
        ctx.stroke();
      }
      
      ctx.restore();
    });

    // Draw quantum field lines
    ctx.strokeStyle = colors.quantum[0];
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.1;
    
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors]);

  // Initialize and start animation
  useEffect(() => {
    initParticles();
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initParticles, animate]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.02) 100%)' }}
    >
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'transparent',
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* Additional Visual Effects */}
      <div className="absolute inset-0">
        {/* Quantum Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Quantum Energy Fields */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full border border-blue-400/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-purple-400/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}