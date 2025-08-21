import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'quantum-holographic' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'space-time' | 'dimensional-rift' | 'consciousness-stream' | 'reality-matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'neural',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: string;
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
      quantumState: number;
      holographicLayer: number;
      neuralConnection: number;
      cyberpunkGlow: number;
      quantumEntanglement: number;
      holographicDepth: number;
      neuralSynapse: number;
      spaceTimeWarp: number;
      dimensionalPhase: number;
      consciousnessLevel: number;
      realityDistortion: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 12 + 4,
          life: Math.random() * 150,
          maxLife: 150,
          color: getParticleColor(variant),
          type: variant,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.15 + 0.08,
          quantumState: Math.random() * Math.PI * 2,
          holographicLayer: Math.random() * 6,
          neuralConnection: Math.random() * 8,
          cyberpunkGlow: Math.random() * Math.PI * 2,
          quantumEntanglement: Math.random() * Math.PI * 2,
          holographicDepth: Math.random() * 7,
          neuralSynapse: Math.random() * Math.PI * 2,
          spaceTimeWarp: Math.random() * Math.PI * 2,
          dimensionalPhase: Math.random() * Math.PI * 2,
          consciousnessLevel: Math.random() * Math.PI * 2,
          realityDistortion: Math.random() * Math.PI * 2
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'neural':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        case 'quantum':
          return `hsl(${280 + Math.sin(time * 0.02) * 80}, 80%, 70%)`;
        case 'holographic':
          return `hsl(${160 + Math.sin(time * 0.015) * 100}, 90%, 65%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(time * 0.03) * 60}, 100%, 60%)`;
        case 'quantum-advanced':
          return `hsl(${300 + Math.sin(time * 0.025) * 120}, 85%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${120 + Math.sin(time * 0.02) * 140}, 95%, 70%)`;
        case 'quantum-holographic':
          return `hsl(${220 + Math.sin(time * 0.018) * 100}, 80%, 65%)`;
        case 'neural-quantum':
          return `hsl(${240 + Math.sin(time * 0.022) * 80}, 75%, 60%)`;
        case 'quantum-cyberpunk':
          return `hsl(${320 + Math.sin(time * 0.028) * 90}, 90%, 65%)`;
        case 'holographic-neural':
          return `hsl(${180 + Math.sin(time * 0.016) * 120}, 85%, 70%)`;
        case 'quantum-holographic-advanced':
          return `hsl(${260 + Math.sin(time * 0.024) * 140}, 90%, 75%)`;
        case 'space-time':
          return `hsl(${140 + Math.sin(time * 0.012) * 160}, 80%, 65%)`;
        case 'dimensional-rift':
          return `hsl(${20 + Math.sin(time * 0.035) * 180}, 95%, 70%)`;
        case 'consciousness-stream':
          return `hsl(${60 + Math.sin(time * 0.019) * 200}, 85%, 75%)`;
        case 'reality-matrix':
          return `hsl(${340 + Math.sin(time * 0.026) * 160}, 90%, 80%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        
        // Update quantum and holographic properties
        particle.quantumState += 0.02;
        particle.holographicLayer += 0.01;
        particle.neuralConnection += 0.015;
        particle.cyberpunkGlow += 0.025;
        particle.quantumEntanglement += 0.018;
        particle.holographicDepth += 0.012;
        particle.neuralSynapse += 0.022;
        particle.spaceTimeWarp += 0.016;
        particle.dimensionalPhase += 0.014;
        particle.consciousnessLevel += 0.02;
        particle.realityDistortion += 0.019;
        
        // Update life
        particle.life--;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      // Add new particles to maintain count
      if (particles.length < (intensity === 'high' ? 800 : intensity === 'medium' ? 500 : 250)) {
        createParticles();
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background effects based on variant
      drawBackgroundEffects();
      
      // Draw particles
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * (0.5 + 0.5 * Math.sin(particle.pulse));
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Draw particle based on variant
        drawParticleByVariant(particle, size);
        
        ctx.restore();
      });
      
      // Draw connections between particles
      drawParticleConnections();
    };

    const drawBackgroundEffects = () => {
      switch (variant) {
        case 'space-time':
          drawSpaceTimeEffects();
          break;
        case 'dimensional-rift':
          drawDimensionalRiftEffects();
          break;
        case 'consciousness-stream':
          drawConsciousnessStreamEffects();
          break;
        case 'reality-matrix':
          drawRealityMatrixEffects();
          break;
        default:
          drawStandardBackgroundEffects();
      }
    };

    const drawStandardBackgroundEffects = () => {
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawSpaceTimeEffects = () => {
      // Create space-time distortion effects
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(0.3, 'rgba(20, 0, 40, 0.7)');
      gradient.addColorStop(0.7, 'rgba(0, 20, 60, 0.5)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add space-time warping lines
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for (let i = 0; i < 10; i++) {
        const x = (canvas.width / 10) * i + Math.sin(time * 0.001 + i) * 50;
        const y = canvas.height / 2 + Math.cos(time * 0.001 + i) * 100;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      ctx.stroke();
    };

    const drawDimensionalRiftEffects = () => {
      // Create dimensional rift effects
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.4, 'rgba(80, 0, 80, 0.6)');
      gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add dimensional rift lines
      ctx.strokeStyle = 'rgba(255, 100, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 / 15) * i + time * 0.0005;
        const radius = 100 + Math.sin(time * 0.002 + i) * 50;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    const drawConsciousnessStreamEffects = () => {
      // Create consciousness stream effects
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      gradient.addColorStop(0.5, 'rgba(0, 40, 20, 0.5)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add consciousness flow lines
      ctx.strokeStyle = 'rgba(100, 255, 150, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        ctx.moveTo(startX, startY);
        
        for (let j = 0; j < 5; j++) {
          const x = startX + Math.sin(time * 0.001 + i + j) * 100;
          const y = startY + Math.cos(time * 0.001 + i + j) * 100;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const drawRealityMatrixEffects = () => {
      // Create reality matrix effects
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(40, 40, 0, 0.6)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add matrix grid
      ctx.strokeStyle = 'rgba(255, 255, 100, 0.2)';
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
    };

    const drawParticleByVariant = (particle: any, size: number) => {
      switch (variant) {
        case 'quantum-advanced':
        case 'quantum-holographic-advanced':
          drawQuantumAdvancedParticle(particle, size);
          break;
        case 'space-time':
          drawSpaceTimeParticle(particle, size);
          break;
        case 'dimensional-rift':
          drawDimensionalRiftParticle(particle, size);
          break;
        case 'consciousness-stream':
          drawConsciousnessStreamParticle(particle, size);
          break;
        case 'reality-matrix':
          drawRealityMatrixParticle(particle, size);
          break;
        default:
          drawStandardParticle(particle, size);
      }
    };

    const drawQuantumAdvancedParticle = (particle: any, size: number) => {
      // Draw quantum entanglement effects
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add quantum glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = size * 2;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Draw quantum state indicators
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 / 3) * i + particle.quantumState;
        const x = Math.cos(angle) * (size * 1.5);
        const y = Math.sin(angle) * (size * 1.5);
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const drawSpaceTimeParticle = (particle: any, size: number) => {
      // Draw space-time distortion particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.3, particle.spaceTimeWarp, 0, Math.PI * 2);
      ctx.fill();
      
      // Add time dilation effect
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.2, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawDimensionalRiftParticle = (particle: any, size: number) => {
      // Draw dimensional rift particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.moveTo(-size, -size);
      ctx.lineTo(size, -size);
      ctx.lineTo(0, size);
      ctx.closePath();
      ctx.fill();
      
      // Add dimensional phase effect
      ctx.strokeStyle = 'rgba(255, 100, 255, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.5, particle.dimensionalPhase, particle.dimensionalPhase + Math.PI);
      ctx.stroke();
    };

    const drawConsciousnessStreamParticle = (particle: any, size: number) => {
      // Draw consciousness stream particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add consciousness flow
      ctx.strokeStyle = 'rgba(100, 255, 150, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size * 1.5, 0);
      ctx.lineTo(size * 1.5, 0);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, -size * 1.5);
      ctx.lineTo(0, size * 1.5);
      ctx.stroke();
    };

    const drawRealityMatrixParticle = (particle: any, size: number) => {
      // Draw reality matrix particle
      ctx.fillStyle = particle.color;
      ctx.fillRect(-size / 2, -size / 2, size, size);
      
      // Add matrix distortion
      ctx.strokeStyle = 'rgba(255, 255, 100, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(-size, -size, size * 2, size * 2);
      ctx.stroke();
    };

    const drawStandardParticle = (particle: any, size: number) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticleConnections = () => {
      if (intensity === 'low') return;
      
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const alpha = (150 - distance) / 150 * 0.1;
            ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time++;
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;