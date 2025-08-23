import React, { useEffect, useRef } from 'react';

interface QuantumNeuralBackgroundProps {
  variant?: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  children?: React.ReactNode;
}

const QuantumNeuralBackground: React.FC<QuantumNeuralBackgroundProps> = ({
  variant = 'quantum',
  intensity = 'medium',
  className = '',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

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
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      pulse: number;
    }> = [];

    // Initialize neural network nodes
    const initNeuralNetwork = () => {
      neuralNodes.length = 0;
      const nodeCount = variant === 'neural' ? 15 : 8;
      
      for (let i = 0; i < nodeCount; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          pulse: Math.random() * Math.PI * 2
        });
      }

      // Create connections
      neuralNodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: getParticleColor(variant),
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'quantum':
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
        case 'neural':
          return `hsl(${120 + Math.sin(time * 0.02) * 40}, 80%, 60%)`;
        case 'holographic':
          return `hsl(${280 + Math.sin(time * 0.015) * 80}, 90%, 70%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(time * 0.025) * 30}, 100%, 60%)`;
        default:
          return `hsl(${200 + Math.sin(time * 0.01) * 60}, 70%, 60%)`;
      }
    };

    // Animation loop
    const animate = () => {
      time += 1;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = getParticleColor(variant);
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw neural network
      if (variant === 'neural' || variant === 'quantum') {
        neuralNodes.forEach((node, index) => {
          node.pulse += 0.05;
          
          // Draw connections
          node.connections.forEach(connectionIndex => {
            const targetNode = neuralNodes[connectionIndex];
            const distance = Math.sqrt(
              Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
            );
            
            if (distance < 300) {
              const alpha = Math.max(0, 1 - distance / 300);
              ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(targetNode.x, targetNode.y);
              ctx.stroke();
            }
          });

          // Draw nodes
          const pulseSize = Math.sin(node.pulse) * 3 + 8;
          ctx.fillStyle = `rgba(0, 255, 255, 0.8)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();

          // Add glow
          ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Draw quantum effects
      if (variant === 'quantum') {
        // Quantum entanglement lines
        for (let i = 0; i < 5; i++) {
          const x1 = Math.sin(time * 0.01 + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y1 = Math.cos(time * 0.015 + i) * canvas.height * 0.3 + canvas.height * 0.5;
          const x2 = Math.sin(time * 0.02 + i * 2) * canvas.width * 0.4 + canvas.width * 0.5;
          const y2 = Math.cos(time * 0.025 + i * 2) * canvas.height * 0.4 + canvas.height * 0.5;
          
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.3 + Math.sin(time * 0.01 + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // Draw holographic effects
      if (variant === 'holographic') {
        // Holographic grid
        const gridSize = 50;
        const offset = (time * 0.5) % gridSize;
        
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let x = offset; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = offset; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // Draw cyberpunk effects
      if (variant === 'cyberpunk') {
        // Digital rain effect
        for (let i = 0; i < 20; i++) {
          const x = (i * 80 + time * 0.5) % canvas.width;
          const y = (time * 2 + i * 30) % canvas.height;
          
          ctx.fillStyle = `rgba(0, 255, 0, ${0.7 + Math.sin(time * 0.1 + i) * 0.3})`;
          ctx.font = '12px monospace';
          ctx.fillText('01', x, y);
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initNeuralNetwork();
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
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

export default QuantumNeuralBackground;