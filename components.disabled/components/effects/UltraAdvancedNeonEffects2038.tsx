import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedNeonEffects2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum-neon' | 'holographic-cyberpunk' | 'quantum-holographic' | 'neon-futuristic' | 'quantum-cyberpunk';
  children?: React.ReactNode;
}

export default function UltraAdvancedNeonEffects2038({ 
  intensity = 'high', 
  theme = 'quantum-neon',
  children
}: UltraAdvancedNeonEffects2038Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Advanced neon particle system
  const neonParticles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
    type: 'neon' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-neon';
    phase: number;
    amplitude: number;
    frequency: number;
    neonIntensity: number;
    glowRadius: number;
  }>>([]);

  // Enhanced theme-based neon color schemes
  const getNeonColors = useCallback(() => {
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

  // Initialize advanced neon particles
  const initNeonParticles = useCallback(() => {
    const colors = getNeonColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 25 : (isSmallScreen ? 80 : 150);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.8 : intensity === 'medium' ? 1.3 : 2));

    neonParticles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['neon', 'quantum', 'holographic', 'cyberpunk', 'quantum-neon'];
      
      neonParticles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.4,
        color: colors.neon[Math.floor(Math.random() * colors.neon.length)],
        life: Math.random() * 200,
        maxLife: 200,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)] as 'neon' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-neon',
        phase: Math.random() * Math.PI * 2,
        amplitude: Math.random() * 80 + 40,
        frequency: Math.random() * 0.03 + 0.015,
        neonIntensity: Math.random() * 0.8 + 0.6,
        glowRadius: Math.random() * 20 + 15
      });
    }
  }, [intensity, getNeonColors]);

  // Enhanced neon animation loop
  const animateNeon = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas with neon glow background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    
    const colors = getNeonColors();
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.15)');
    gradient.addColorStop(0.2, 'rgba(0, 0, 0, 0.08)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.04)');
    gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.02)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw neon particles with enhanced effects
    neonParticles.current.forEach((particle, index) => {
      // Update particle position with neon effects
      particle.phase += particle.frequency;
      
      // Neon wave effect
      particle.x += Math.sin(particle.phase) * particle.amplitude * 0.05;
      particle.y += Math.cos(particle.phase) * particle.amplitude * 0.05;
      
      // Neon intensity variation
      particle.neonIntensity = 0.6 + Math.sin(particle.phase * 2) * 0.4;
      particle.glowRadius = 15 + Math.sin(particle.phase * 3) * 10;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges with neon trail
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

      // Draw neon particle with enhanced effects
      ctx.save();
      
      // Create multiple glow layers for enhanced neon effect
      const glowLayers = 5;
      for (let layer = glowLayers; layer > 0; layer--) {
        const layerOpacity = (particle.opacity * particle.neonIntensity) / (layer * 2);
        const layerRadius = particle.glowRadius * (layer / glowLayers);
        
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, layerRadius
        );
        
        const baseColor = particle.color;
        const alpha = Math.floor(layerOpacity * 255).toString(16).padStart(2, '0');
        
        glowGradient.addColorStop(0, `${baseColor}${alpha}`);
        glowGradient.addColorStop(0.5, `${baseColor}${Math.floor(layerOpacity * 128).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, layerRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw main neon particle
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity * particle.neonIntensity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add neon trail effect
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = particle.opacity * 0.6;
      ctx.lineCap = 'round';
      
      // Create neon trail
      const trailLength = 15;
      for (let i = 0; i < trailLength; i++) {
        const trailOpacity = (particle.opacity * 0.6) * (1 - i / trailLength);
        ctx.globalAlpha = trailOpacity;
        
        const trailX = particle.x - particle.vx * i * 2;
        const trailY = particle.y - particle.vy * i * 2;
        const trailSize = particle.size * (1 - i / trailLength);
        
        ctx.beginPath();
        ctx.arc(trailX, trailY, trailSize, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();
    });

    // Draw neon field connections
    ctx.strokeStyle = colors.neon[0];
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.15;
    
    // Connect nearby particles with neon lines
    neonParticles.current.forEach((particle1, i) => {
      neonParticles.current.slice(i + 1).forEach(particle2 => {
        const distance = Math.sqrt(
          Math.pow(particle1.x - particle2.x, 2) + 
          Math.pow(particle1.y - particle2.y, 2)
        );
        
        if (distance < 150) {
          const opacity = (150 - distance) / 150 * 0.15;
          ctx.globalAlpha = opacity;
          
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      });
    });

    // Draw quantum neon grid
    ctx.strokeStyle = colors.quantum[0];
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.08;
    
    const gridSize = 100;
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

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animateNeon);
  }, [getNeonColors]);

  // Initialize and start animation
  useEffect(() => {
    initNeonParticles();
    animateNeon();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initNeonParticles, animateNeon]);

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
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {/* Enhanced Neon Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'transparent',
          filter: 'blur(0.3px)'
        }}
      />
      
      {/* Additional Neon Visual Effects */}
      <div className="absolute inset-0">
        {/* Neon Energy Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-cyan-400/20"
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.3), inset 0 0 50px rgba(0, 212, 255, 0.1)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-purple-400/20"
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)'
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [360, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Neon Corner Effects */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/30"
          style={{
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400/30"
          style={{
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-pink-400/30"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-green-400/30"
          style={{
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Neon Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)'
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
          style={{
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)'
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {children}
    </div>
  );
}