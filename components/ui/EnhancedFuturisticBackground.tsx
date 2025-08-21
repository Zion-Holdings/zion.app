import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced' | 'cyberpunk-advanced' | 'quantum-holographic';
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
      connections: number[];
      phase: number;
      amplitude: number;
      frequency: number;
      quantumState: number;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 400 : intensity === 'medium' ? 250 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 6 + 2,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
          connections: [],
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 50 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          quantumState: Math.random()
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
          return `hsl(${120 + Math.sin(time * 0.018) * 140}, 95%, 70%)`;
        case 'cyberpunk-advanced':
          return `hsl(${15 + Math.sin(time * 0.035) * 90}, 100%, 65%)`;
        case 'quantum-holographic':
          return `hsl(${240 + Math.sin(time * 0.022) * 160}, 90%, 80%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    const drawNeuralNetwork = () => {
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 + Math.sin(time * 0.005) * 0.1})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i += 3) {
        for (let j = i + 3; j < particles.length; j += 3) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawQuantumEffects = () => {
      // Quantum entanglement visualization
      for (let i = 0; i < particles.length; i += 2) {
        if (i + 1 < particles.length) {
          const p1 = particles[i];
          const p2 = particles[i + 1];
          
          // Quantum correlation
          const correlation = Math.sin(time * 0.01 + p1.quantumState) * 0.5 + 0.5;
          
          ctx.strokeStyle = `rgba(147, 51, 234, ${correlation * 0.3})`;
          ctx.lineWidth = correlation * 3;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          
          // Quantum tunneling effect
          if (correlation > 0.7) {
            ctx.fillStyle = `rgba(147, 51, 234, ${correlation * 0.2})`;
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, p1.size * 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p2.x, p2.y, p2.size * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const drawHolographicEffects = () => {
      // Holographic grid
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 + Math.sin(time * 0.003) * 0.05})`;
      ctx.lineWidth = 0.5;
      
      const gridSize = 80;
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

      // Holographic interference patterns
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const interference = Math.sin(time * 0.02 + p.phase) * p.amplitude;
        
        ctx.fillStyle = `rgba(16, 185, 129, ${0.1 + Math.sin(interference * 0.1) * 0.1})`;
        ctx.beginPath();
        ctx.arc(p.x + interference, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCyberpunkEffects = () => {
      // Digital rain effect
      ctx.fillStyle = `rgba(0, 255, 0, ${0.3 + Math.sin(time * 0.01) * 0.1})`;
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 20; i++) {
        const x = (i * 50 + time * 0.5) % canvas.width;
        const y = (time * 2 + i * 30) % canvas.height;
        const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        ctx.fillText(char, x, y);
      }

      // Glitch effect
      if (Math.random() > 0.95) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const drawAdvancedQuantumEffects = () => {
      // Quantum superposition visualization
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const superposition = Math.sin(time * 0.015 + p.quantumState * Math.PI) * 0.5 + 0.5;
        
        // Multiple quantum states
        for (let state = 0; state < 3; state++) {
          const stateOffset = state * 120;
          const stateX = p.x + Math.cos(time * 0.01 + stateOffset) * 30;
          const stateY = p.y + Math.sin(time * 0.01 + stateOffset) * 30;
          
          ctx.fillStyle = `rgba(147, 51, 234, ${superposition * 0.2})`;
          ctx.beginPath();
          ctx.arc(stateX, stateY, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Quantum wave function
      for (let x = 0; x < canvas.width; x += 10) {
        const wave = Math.sin(x * 0.01 + time * 0.02) * 50;
        ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 + Math.sin(wave * 0.1) * 0.1})`;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(x, canvas.height / 2 + wave);
        ctx.lineTo(x, canvas.height / 2 - wave);
        ctx.stroke();
      }
    };

    const drawAdvancedHolographicEffects = () => {
      // 3D holographic projection
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const depth = Math.sin(time * 0.01 + p.phase) * 100;
        const scale = 1 + depth / 200;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.scale(scale, scale);
        ctx.translate(-centerX, -centerY);
        
        ctx.fillStyle = `rgba(16, 185, 129, ${0.2 + Math.sin(depth * 0.01) * 0.1})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      // Holographic light beams
      for (let i = 0; i < 5; i++) {
        const angle = (time * 0.01 + i * Math.PI / 2.5) % (Math.PI * 2);
        const x1 = centerX;
        const y1 = centerY;
        const x2 = centerX + Math.cos(angle) * 300;
        const y2 = centerY + Math.sin(angle) * 300;
        
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawAdvancedCyberpunkEffects = () => {
      // Advanced glitch matrix
      ctx.fillStyle = `rgba(0, 255, 0, ${0.2 + Math.sin(time * 0.005) * 0.1})`;
      ctx.font = '10px monospace';
      
      for (let i = 0; i < 50; i++) {
        const x = (i * 30 + time * 0.3) % canvas.width;
        const y = (time * 1.5 + i * 20) % canvas.height;
        const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        
        // Random glitch offset
        const glitchX = x + (Math.random() > 0.98 ? Math.random() * 20 - 10 : 0);
        const glitchY = y + (Math.random() > 0.98 ? Math.random() * 20 - 10 : 0);
        
        ctx.fillText(char, glitchX, glitchY);
      }

      // Digital corruption effect
      if (Math.random() > 0.97) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 100, 100);
      }

      // Circuit board patterns
      ctx.strokeStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time * 0.01) * 0.05})`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 10; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const endX = startX + Math.random() * 200 - 100;
        const endY = startY + Math.random() * 200 - 100;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    };

    const drawQuantumHolographicEffects = () => {
      // Combine quantum and holographic effects
      drawAdvancedQuantumEffects();
      drawAdvancedHolographicEffects();
      
      // Quantum holographic interference
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const quantumPhase = Math.sin(time * 0.02 + p.quantumState * Math.PI);
        const holographicPhase = Math.sin(time * 0.015 + p.phase);
        const interference = quantumPhase * holographicPhase;
        
        ctx.fillStyle = `rgba(147, 51, 234, ${0.3 + interference * 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + interference * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;
        particle.phase += particle.frequency;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Regenerate dead particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.quantumState = Math.random();
        }

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw effects based on variant
      switch (variant) {
        case 'neural':
          drawNeuralNetwork();
          break;
        case 'quantum':
          drawQuantumEffects();
          break;
        case 'holographic':
          drawHolographicEffects();
          break;
        case 'cyberpunk':
          drawCyberpunkEffects();
          break;
        case 'quantum-advanced':
          drawAdvancedQuantumEffects();
          break;
        case 'holographic-advanced':
          drawAdvancedHolographicEffects();
          break;
        case 'cyberpunk-advanced':
          drawAdvancedCyberpunkEffects();
          break;
        case 'quantum-holographic':
          drawQuantumHolographicEffects();
          break;
        default:
          drawNeuralNetwork();
      }

      time += 1;
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
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;