import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2040Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum-neon' | 'holographic-cyberpunk' | 'neural-quantum' | 'space-time' | 'consciousness-ai';
  children?: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground2040({ 
  intensity = 'medium', 
  theme = 'quantum-neon',
  children
}: UltraAdvancedFuturisticBackground2040Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Enhanced particle system with consciousness and quantum effects
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
    type: 'quantum' | 'neon' | 'holographic' | 'neural' | 'consciousness' | 'space-time' | 'cyberpunk' | 'energy' | 'data-stream' | 'quantum-entangled';
    rotation: number;
    rotationSpeed: number;
    pulse: number;
    pulseSpeed: number;
    hue: number;
    trail: Array<{x: number, y: number, opacity: number, color: string}>;
    quantumState: number;
    consciousness: number;
    neuralConnections: Array<{target: number, strength: number}>;
  }>>([]);

  // Enhanced theme-based color schemes with quantum and consciousness elements
  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'holographic-cyberpunk':
        return {
          primary: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          secondary: ['#8000ff', '#00ff80', '#ff8000', '#0080ff', '#ff4080', '#40ffff'],
          accent: ['#ff4080', '#40ffff', '#ffff40', '#ff40ff', '#ff6b6b', '#4ecdc4'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          cyberpunk: ['#ff0055', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
        };
      case 'neural-quantum':
        return {
          primary: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
          neural: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
          consciousness: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
        };
      case 'space-time':
        return {
          primary: ['#1e40af', '#7c3aed', '#059669', '#dc2626', '#ea580c', '#d97706'],
          secondary: ['#d97706', '#ea580c', '#dc2626', '#059669', '#7c3aed', '#1e40af'],
          accent: ['#7c3aed', '#1e40af', '#d97706', '#ea580c', '#dc2626', '#059669'],
          space: ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
          time: ['#fbbf24', '#f59e0b', '#d97706', '#ea580c', '#dc2626', '#b91c1c'],
          cosmic: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444']
        };
      case 'consciousness-ai':
        return {
          primary: ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981'],
          accent: ['#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6', '#06b6d4'],
          consciousness: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
          ai: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          neural: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80']
        };
      default: // quantum-neon
        return {
          primary: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          secondary: ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'],
          accent: ['#ec4899', '#10b981', '#f59e0b', '#ef4444', '#00d4ff', '#8b5cf6'],
          neon: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff', '#8000ff', '#00ff80'],
          quantum: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'],
          consciousness: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
        };
    }
  }, [theme]);

  // Initialize particles with enhanced consciousness and quantum effects
  const initParticles = useCallback(() => {
    const colors = getThemeColors();
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Enhanced particle count for better performance
    const baseCount = prefersReducedMotion ? 30 : (isSmallScreen ? 120 : 240);
    const particleCount = Math.floor(baseCount * (intensity === 'low' ? 0.7 : intensity === 'medium' ? 1 : 2));

    particles.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleTypes = ['quantum', 'neon', 'holographic', 'neural', 'consciousness', 'space-time', 'cyberpunk', 'energy', 'data-stream', 'quantum-entangled'];
      const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      const baseColor = colors.primary[Math.floor(Math.random() * colors.primary.length)];
      const secondaryColor = colors.secondary[Math.floor(Math.random() * colors.secondary.length)];
      
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: baseColor,
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50,
        type: particleType as any,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        hue: Math.random() * 360,
        trail: [],
        quantumState: Math.random() * Math.PI * 2,
        consciousness: Math.random(),
        neuralConnections: []
      });
    }

    // Create neural connections between particles
    for (let i = 0; i < particles.current.length; i++) {
      const connections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * particles.current.length);
        if (target !== i) {
          particles.current[i].neuralConnections.push({
            target,
            strength: Math.random() * 0.5 + 0.1
          });
        }
      }
    }
  }, [getThemeColors, intensity]);

  // Enhanced animation loop with consciousness and quantum effects
  const animate = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
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

    // Update and draw particles
    particles.current.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Update quantum state and consciousness
      particle.quantumState += 0.02;
      particle.consciousness = Math.sin(particle.quantumState) * 0.5 + 0.5;
      
      // Update rotation and pulse
      particle.rotation += particle.rotationSpeed;
      particle.pulse += particle.pulseSpeed;
      
      // Bounce off edges with quantum tunneling effect
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -1;
        // Quantum tunneling effect
        if (Math.random() < 0.1) {
          particle.x = particle.x < 0 ? canvas.width : 0;
        }
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -1;
        // Quantum tunneling effect
        if (Math.random() < 0.1) {
          particle.y = particle.y < 0 ? canvas.height : 0;
        }
      }
      
      // Update trail
      particle.trail.push({
        x: particle.x,
        y: particle.y,
        opacity: particle.opacity,
        color: particle.color
      });
      
      // Limit trail length
      if (particle.trail.length > 20) {
        particle.trail.shift();
      }
      
      // Draw trail with consciousness effect
      particle.trail.forEach((trailPoint, trailIndex) => {
        const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * particle.consciousness;
        ctx.globalAlpha = trailOpacity;
        
        // Create trail gradient
        const trailGradient = ctx.createRadialGradient(
          trailPoint.x, trailPoint.y, 0,
          trailPoint.x, trailPoint.y, particle.size * 2
        );
        trailGradient.addColorStop(0, trailPoint.color);
        trailGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = trailGradient;
        ctx.beginPath();
        ctx.arc(trailPoint.x, trailPoint.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw main particle with enhanced effects
      ctx.globalAlpha = particle.opacity * (0.8 + 0.2 * Math.sin(particle.pulse));
      
      // Create particle glow effect
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 4
      );
      glowGradient.addColorStop(0, particle.color);
      glowGradient.addColorStop(0.5, particle.color + '80');
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw particle core
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw quantum effects
      if (particle.type === 'quantum' || particle.type === 'quantum-entangled') {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = particle.opacity * 0.5;
        
        // Draw quantum wave function
        for (let i = 0; i < 3; i++) {
          const waveRadius = particle.size * (2 + i * 2) * (0.8 + 0.2 * Math.sin(particle.quantumState + i));
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      
      // Draw neural connections
      if (particle.type === 'neural' || particle.type === 'consciousness') {
        particle.neuralConnections.forEach(connection => {
          const targetParticle = particles.current[connection.target];
          if (targetParticle) {
            const distance = Math.sqrt(
              Math.pow(particle.x - targetParticle.x, 2) + 
              Math.pow(particle.y - targetParticle.y, 2)
            );
            
            if (distance < 200) {
              ctx.strokeStyle = particle.color + Math.floor(connection.strength * 255).toString(16).padStart(2, '0');
              ctx.lineWidth = connection.strength * 2;
              ctx.globalAlpha = particle.opacity * connection.strength * 0.3;
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(targetParticle.x, targetParticle.y);
              ctx.stroke();
            }
          }
        });
      }
      
      // Draw holographic effects
      if (particle.type === 'holographic') {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = particle.opacity * 0.3;
        
        // Draw holographic grid
        const gridSize = particle.size * 3;
        ctx.beginPath();
        ctx.rect(particle.x - gridSize/2, particle.y - gridSize/2, gridSize, gridSize);
        ctx.stroke();
        
        // Draw diagonal lines
        ctx.beginPath();
        ctx.moveTo(particle.x - gridSize/2, particle.y - gridSize/2);
        ctx.lineTo(particle.x + gridSize/2, particle.y + gridSize/2);
        ctx.moveTo(particle.x + gridSize/2, particle.y - gridSize/2);
        ctx.lineTo(particle.x - gridSize/2, particle.y + gridSize/2);
        ctx.stroke();
      }
      
      // Draw space-time effects
      if (particle.type === 'space-time') {
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = particle.opacity * 0.4;
        
        // Draw time spiral
        const spiralRadius = particle.size * 2;
        const spiralTurns = 3;
        ctx.beginPath();
        for (let i = 0; i < spiralTurns * Math.PI * 2; i += 0.1) {
          const radius = (i / (spiralTurns * Math.PI * 2)) * spiralRadius;
          const x = particle.x + radius * Math.cos(i + particle.quantumState);
          const y = particle.y + radius * Math.sin(i + particle.quantumState);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    });

    // Draw consciousness field
    if (theme === 'consciousness-ai' || theme === 'neural-quantum') {
      ctx.globalAlpha = 0.1;
      const consciousnessGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 3
      );
      consciousnessGradient.addColorStop(0, colors.consciousness[0]);
      consciousnessGradient.addColorStop(0.5, colors.consciousness[2]);
      consciousnessGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = consciousnessGradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getThemeColors, theme]);

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
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0">
        {/* Quantum field lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-32 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Consciousness orbs */}
        {theme === 'consciousness-ai' && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Neural network visualization */}
        {theme === 'neural-quantum' && (
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {children}
    </div>
  );
}