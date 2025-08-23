import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2046Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'consciousness' | 'quantum-neon' | 'quantum-holographic' | 'quantum-consciousness';
  children?: React.ReactNode;
}

export default function UltraFuturisticBackground2046({ 
  intensity = 'medium', 
  theme = 'quantum-consciousness',
  children
}: UltraFuturisticBackground2046Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with quantum-consciousness elements
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
    type: string;
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    waveFrequency: number;
    waveAmplitude: number;
    quantumState: number;
    entanglement: number[];
    consciousness: number;
    neuralActivity: number;
  }>>([]);

  // Enhanced theme-based color schemes with quantum-consciousness colors
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'quantum-consciousness':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#7c3aed'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6', '#06b6d4', '#a855f7'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7'],
          holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
          cyber: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff4080', '#40ffff'],
          consciousness: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#a855f7']
        };
      case 'quantum-neon':
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#7c3aed'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6', '#06b6d4', '#a855f7'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4']
        };
      case 'consciousness':
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#a855f7'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#7c3aed'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#00d4ff', '#a855f7'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4']
        };
      default: // quantum
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#a855f7'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#00d4ff', '#7c3aed'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#00d4ff', '#a855f7'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80', '#ff6b6b', '#4ecdc4']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced variety and quantum-consciousness properties
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 100 : 200);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.8 : intensity === 'medium' ? 1.2 : 2.5));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['particle', 'wave', 'quantum', 'neon', 'holographic', 'energy', 'data', 'neural', 'quantum-field', 'hologram', 'cyber-grid', 'consciousness', 'quantum-consciousness', 'neural-network', 'quantum-entanglement'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      const colorSet = Math.floor(Math.random() * 4);
      const colorKey = ['primary', 'secondary', 'accent', 'neon'][colorSet];
      const color = colors[colorKey][Math.floor(Math.random() * colors[colorKey].length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.5 : 2),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.5 : 2),
        size: Math.random() * (particleType.includes('quantum') ? 8 : 4) + 2,
        opacity: Math.random() * 0.8 + 0.2,
        color: color,
        life: Math.random() * 100,
        maxLife: 100,
        type: particleType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        waveFrequency: Math.random() * 0.1 + 0.05,
        waveAmplitude: Math.random() * 20 + 10,
        quantumState: Math.random() * Math.PI * 2,
        entanglement: [],
        consciousness: Math.random(),
        neuralActivity: Math.random()
      });
    }
  }, [intensity, getThemeColors]);

  // Enhanced animation loop with quantum-consciousness effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with enhanced background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
    gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)');
    gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with enhanced effects
    particles.current.forEach((particle, index) => {
      // Update particle properties
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      particle.quantumState += 0.02;
      particle.consciousness = Math.sin(Date.now() * 0.001 + index) * 0.5 + 0.5;
      particle.neuralActivity = Math.cos(Date.now() * 0.002 + index) * 0.5 + 0.5;

      // Wrap particles around screen
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Enhanced drawing based on particle type
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      const baseOpacity = particle.opacity;
      const pulseOpacity = Math.sin(particle.pulse) * 0.3 + 0.7;
      const consciousnessOpacity = particle.consciousness * 0.5 + 0.5;
      const finalOpacity = baseOpacity * pulseOpacity * consciousnessOpacity;

      if (particle.type.includes('quantum')) {
        // Quantum particles with entanglement effects
        ctx.globalAlpha = finalOpacity;
        ctx.fillStyle = particle.color;
        
        // Draw quantum field
        const quantumSize = particle.size * (1 + Math.sin(particle.quantumState) * 0.5);
        ctx.beginPath();
        ctx.arc(0, 0, quantumSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw entanglement lines
        if (particle.entanglement.length > 0) {
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = finalOpacity * 0.3;
          particle.entanglement.forEach(entangledIndex => {
            const entangled = particles.current[entangledIndex];
            if (entangled) {
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(entangled.x - particle.x, entangled.y - particle.y);
              ctx.stroke();
            }
          });
        }
      } else if (particle.type.includes('consciousness')) {
        // Consciousness particles with neural activity
        ctx.globalAlpha = finalOpacity;
        ctx.fillStyle = particle.color;
        
        // Draw neural network
        const neuralSize = particle.size * (1 + particle.neuralActivity * 0.5);
        ctx.beginPath();
        ctx.arc(0, 0, neuralSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw neural connections
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = finalOpacity * 0.6;
        ctx.beginPath();
        ctx.moveTo(-neuralSize, 0);
        ctx.lineTo(neuralSize, 0);
        ctx.moveTo(0, -neuralSize);
        ctx.lineTo(0, neuralSize);
        ctx.stroke();
      } else if (particle.type.includes('holographic')) {
        // Holographic particles with wave effects
        ctx.globalAlpha = finalOpacity;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2;
        
        // Draw holographic waves
        const waveSize = particle.size * (1 + Math.sin(particle.waveFrequency * Date.now()) * 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, waveSize, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(0, 0, waveSize * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Standard particles
        ctx.globalAlpha = finalOpacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    // Create quantum entanglement between nearby particles
    particles.current.forEach((particle, index) => {
      if (particle.type.includes('quantum') && Math.random() < 0.01) {
        const nearby = particles.current.find((p, i) => 
          i !== index && 
          p.type.includes('quantum') && 
          Math.sqrt(Math.pow(p.x - particle.x, 2) + Math.pow(p.y - particle.y, 2)) < 100
        );
        if (nearby && !particle.entanglement.includes(index)) {
          particle.entanglement.push(index);
        }
      }
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

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
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Enhanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
        }}
      />
      
      {/* Enhanced Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Field Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)
            `
          }} />
        </div>
        
        {/* Consciousness Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            background: `
              repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(139, 92, 246, 0.1) 50px, rgba(139, 92, 246, 0.1) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(6, 182, 212, 0.1) 50px, rgba(6, 182, 212, 0.1) 51px)
            `
          }} />
        </div>
        
        {/* Neural Network Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 40%)
            `
          }} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}