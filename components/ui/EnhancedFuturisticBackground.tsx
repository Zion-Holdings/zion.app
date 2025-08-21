import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'quantum-advanced' | 'holographic-advanced';
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
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 180 : 90;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 4 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          color: getParticleColor(variant),
          type: variant,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.05 + 0.02
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
          return `hsl(${280 + Math.sin(time * 0.03) * 120}, 90%, 75%)`;
        case 'holographic-advanced':
          return `hsl(${160 + Math.sin(time * 0.025) * 150}, 95%, 70%)`;
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
            const opacity = Math.max(0, 0.3 - distance / 500);
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawQuantumEffects = () => {
      // Quantum entanglement lines
      for (let i = 0; i < particles.length; i += 4) {
        for (let j = i + 4; j < particles.length; j += 4) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = Math.max(0, 0.4 - distance / 600);
            const wave = Math.sin(time * 0.02 + distance * 0.01);
            ctx.strokeStyle = `rgba(200, 100, 255, ${opacity * (0.5 + wave * 0.5)})`;
            ctx.lineWidth = 2 + wave;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Quantum particles with rotation and pulse
      particles.forEach(particle => {
        if (particle.type.includes('quantum')) {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);
          
          const pulse = Math.sin(particle.pulse) * 0.3 + 0.7;
          const size = particle.size * pulse;
          
          // Draw quantum particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw quantum aura
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.restore();
        }
      });
    };

    const drawHolographicEffects = () => {
      // Holographic grid
      const gridSize = 50;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;
      
      ctx.strokeStyle = `rgba(0, 255, 200, ${0.1 + Math.sin(time * 0.01) * 0.05})`;
      ctx.lineWidth = 1;
      
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Holographic particles with glow
      particles.forEach(particle => {
        if (particle.type.includes('holographic')) {
          const glow = Math.sin(particle.pulse) * 0.5 + 0.5;
          const glowSize = particle.size * (2 + glow);
          
          // Draw glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, glowSize
          );
          gradient.addColorStop(0, `${particle.color}80`);
          gradient.addColorStop(0.5, `${particle.color}40`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw core
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const drawCyberpunkEffects = () => {
      // Cyberpunk scan lines
      const scanLineHeight = 2;
      const scanSpeed = time * 0.5;
      
      for (let y = 0; y < canvas.height; y += scanLineHeight * 2) {
        const opacity = Math.sin((y + scanSpeed) * 0.01) * 0.3 + 0.1;
        ctx.fillStyle = `rgba(255, 0, 100, ${opacity})`;
        ctx.fillRect(0, y, canvas.width, scanLineHeight);
      }

      // Cyberpunk particles
      particles.forEach(particle => {
        if (particle.type === 'cyberpunk') {
          const flicker = Math.random() > 0.95 ? 0.3 : 1;
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = flicker;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });
    };

    const drawHolographicAdvanced = () => {
      // Advanced holographic effects with multiple layers
      const layers = 3;
      for (let layer = 0; layer < layers; layer++) {
        const opacity = 0.1 + Math.sin(time * 0.01 + layer) * 0.05;
        const scale = 1 + layer * 0.2;
        
        ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015 + layer) * 150}, 95%, 70%, ${opacity})`;
        ctx.lineWidth = 2;
        
        // Draw holographic grid
        for (let i = 0; i < canvas.width; i += 50 * scale) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += 50 * scale) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        
        // Draw holographic circles
        for (let i = 0; i < 5; i++) {
          const x = canvas.width / 2 + Math.cos(time * 0.005 + i) * 200 * scale;
          const y = canvas.height / 2 + Math.sin(time * 0.005 + i) * 200 * scale;
          const radius = 50 + Math.sin(time * 0.01 + i) * 20;
          
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    const drawQuantumAdvanced = () => {
      // Advanced quantum effects with entanglement visualization
      ctx.strokeStyle = `hsla(${280 + Math.sin(time * 0.03) * 120}, 90%, 75%, 0.3)`;
      ctx.lineWidth = 1;
      
      // Draw quantum entanglement lines
      for (let i = 0; i < particles.length; i += 4) {
        for (let j = i + 4; j < particles.length; j += 4) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `hsla(${280 + Math.sin(time * 0.02) * 120}, 90%, 75%, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw quantum probability waves
      for (let i = 0; i < 8; i++) {
        const x = canvas.width / 2 + Math.cos(time * 0.01 + i) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.01 + i) * 300;
        const amplitude = 30 + Math.sin(time * 0.02 + i) * 15;
        const frequency = 0.02 + Math.sin(time * 0.005 + i) * 0.01;
        
        ctx.strokeStyle = `hsla(${280 + i * 30}, 90%, 75%, 0.2)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let px = 0; px < canvas.width; px += 2) {
          const py = y + Math.sin(px * frequency + time * 0.01) * amplitude;
          if (px === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }
    };

    const drawNeuralAdvanced = () => {
      // Advanced neural network visualization
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 + Math.sin(time * 0.005) * 0.1})`;
      ctx.lineWidth = 1.5;
      
      // Draw neural connections with varying weights
      for (let i = 0; i < particles.length; i += 2) {
        for (let j = i + 2; j < particles.length; j += 2) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 200) {
            const weight = Math.sin(time * 0.01 + i + j) * 0.5 + 0.5;
            const opacity = weight * 0.3;
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.lineWidth = weight * 2;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw neural nodes with activation
      particles.forEach((particle, index) => {
        if (index % 2 === 0) {
          const activation = Math.sin(time * 0.01 + index) * 0.5 + 0.5;
          const size = particle.size * (1 + activation * 0.5);
          const opacity = 0.3 + activation * 0.4;
          
          ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const drawCyberpunkAdvanced = () => {
      // Advanced cyberpunk effects with glitch and distortion
      ctx.strokeStyle = `hsla(${0 + Math.sin(time * 0.03) * 60}, 100%, 60%, 0.4)`;
      ctx.lineWidth = 2;
      
      // Draw glitch effects
      if (Math.random() < 0.1) {
        ctx.strokeStyle = `hsla(${180 + Math.sin(time * 0.05) * 60}, 100%, 60%, 0.8)`;
        ctx.lineWidth = 4;
        
        for (let i = 0; i < 3; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const length = 50 + Math.random() * 100;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + length, y + Math.random() * 20 - 10);
          ctx.stroke();
        }
      }
      
      // Draw digital rain effect
      for (let i = 0; i < 20; i++) {
        const x = (i * canvas.width / 20) + Math.sin(time * 0.01 + i) * 20;
        const y = (time * 2 + i * 30) % canvas.height;
        const length = 20 + Math.sin(time * 0.02 + i) * 10;
        
        ctx.strokeStyle = `hsla(${120 + Math.sin(time * 0.01 + i) * 60}, 100%, 60%, 0.6)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + length);
        ctx.stroke();
      }
      
      // Draw circuit patterns
      for (let i = 0; i < 5; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        let x = startX;
        let y = startY;
        
        ctx.strokeStyle = `hsla(${0 + i * 60}, 100%, 60%, 0.3)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        for (let j = 0; j < 10; j++) {
          if (Math.random() < 0.5) {
            x += Math.random() * 100 - 50;
          } else {
            y += Math.random() * 100 - 50;
          }
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 1;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;
        particle.life -= 1;
        
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
        }
        
        // Draw particle with advanced effects
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
        const alpha = particle.life / particle.maxLife;
        
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = alpha;
        
        // Draw particle based on type
        switch (particle.type) {
          case 'neural':
            drawNeuralParticle(pulseSize, particle.color);
            break;
          case 'quantum':
            drawQuantumParticle(pulseSize, particle.color);
            break;
          case 'holographic':
            drawHolographicParticle(pulseSize, particle.color);
            break;
          case 'cyberpunk':
            drawCyberpunkParticle(pulseSize, particle.color);
            break;
          case 'quantum-advanced':
            drawQuantumAdvancedParticle(pulseSize, particle.color);
            break;
          case 'holographic-advanced':
            drawHolographicAdvancedParticle(pulseSize, particle.color);
            break;
          default:
            drawDefaultParticle(pulseSize, particle.color);
        }
        
        ctx.restore();
      });
      
      // Draw background effects based on variant
      switch (variant) {
        case 'neural':
          drawNeuralAdvanced();
          break;
        case 'quantum':
          drawQuantumAdvanced();
          break;
        case 'holographic':
          drawHolographicAdvanced();
          break;
        case 'cyberpunk':
          drawCyberpunkAdvanced();
          break;
        case 'quantum-advanced':
          drawQuantumAdvanced();
          break;
        case 'holographic-advanced':
          drawHolographicAdvanced();
          break;
        default:
          drawNeuralAdvanced();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const drawNeuralParticle = (size: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add neural connections
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();
    };

    const drawQuantumParticle = (size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      
      // Draw quantum symbol
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const x1 = Math.cos(angle) * size;
        const y1 = Math.sin(angle) * size;
        const x2 = Math.cos(angle + Math.PI) * size;
        const y2 = Math.sin(angle + Math.PI) * size;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawHolographicParticle = (size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      // Draw holographic rings
      for (let i = 1; i <= 3; i++) {
        const ringSize = size * (i / 3);
        ctx.beginPath();
        ctx.arc(0, 0, ringSize, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawCyberpunkParticle = (size: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(-size/2, -size/2, size, size);
      
      // Add cyberpunk details
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size/2, -size/2);
      ctx.lineTo(size/2, size/2);
      ctx.moveTo(-size/2, size/2);
      ctx.lineTo(size/2, -size/2);
      ctx.stroke();
    };

    const drawQuantumAdvancedParticle = (size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      // Draw complex quantum pattern
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        
        ctx.beginPath();
        ctx.arc(x, y, size/4, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const drawHolographicAdvancedParticle = (size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      // Draw advanced holographic pattern
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        const x1 = Math.cos(angle) * size;
        const y1 = Math.sin(angle) * size;
        const x2 = Math.cos(angle + Math.PI/3) * size;
        const y2 = Math.sin(angle + Math.PI/3) * size;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      
      // Draw inner hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        const x = Math.cos(angle) * (size/2);
        const y = Math.sin(angle) * (size/2);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    const drawDefaultParticle = (size: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
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
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;