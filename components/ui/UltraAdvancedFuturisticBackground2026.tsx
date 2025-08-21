import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackground2026Props {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'neural-network' | 'quantum-field' | 'cyberpunk' | 'holographic' | 'multidimensional';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetworks?: boolean;
  enableMultidimensional?: boolean;
  children?: React.ReactNode;
}

const UltraAdvancedFuturisticBackground2026: React.FC<UltraAdvancedFuturisticBackground2026Props> = ({
  intensity = 'high',
  colorScheme = 'neural-network',
  particleCount = 300,
  animationSpeed = 2.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralNetworks = true,
  enableMultidimensional = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let neuralNodes: NeuralNode[] = [];
    let quantumFields: QuantumField[] = [];
    let holographicLayers: HolographicLayer[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 + 1;
        this.color = getColorSchemeColor();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade out
        this.alpha = this.life / this.maxLife;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Neural network node class
    class NeuralNode {
      x: number;
      y: number;
      connections: NeuralNode[];
      activation: number;
      pulse: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.activation = Math.random();
        this.pulse = 0;
      }

      update() {
        this.activation += (Math.random() - 0.5) * 0.1;
        this.activation = Math.max(0, Math.min(1, this.activation));
        this.pulse = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.5 + 0.5;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = `rgba(0, 255, 255, ${this.activation})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3 + this.pulse * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        this.connections.forEach(connection => {
          const distance = Math.sqrt(
            Math.pow(this.x - connection.x, 2) + Math.pow(this.y - connection.y, 2)
          );
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * this.activation * connection.activation})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
          }
        });
        ctx.restore();
      }
    }

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      intensity: number;
      phase: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.8 + 0.2;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.02 * animationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = 0.1;
        
        for (let i = 0; i < 3; i++) {
          const waveRadius = this.radius + Math.sin(this.phase + i * Math.PI / 3) * 20;
          const alpha = this.intensity * (1 - i / 3);
          
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Holographic layer class
    class HolographicLayer {
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = Math.random() * 200 + 100;
        this.height = Math.random() * 200 + 100;
        this.rotation = Math.random() * Math.PI * 2;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.color = getColorSchemeColor();
      }

      update() {
        this.rotation += 0.005 * animationSpeed;
        this.alpha = Math.sin(Date.now() * 0.001) * 0.1 + 0.2;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        
        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Get color based on scheme
    function getColorSchemeColor(): string {
      const colors = {
        'neural-network': ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
        'quantum-field': ['#00ff80', '#80ff00', '#ff8000', '#ff0080'],
        'cyberpunk': ['#ff0066', '#00ffff', '#ffff00', '#ff6600'],
        'holographic': ['#ff00ff', '#00ffff', '#ffff00', '#ff8000'],
        'multidimensional': ['#8000ff', '#00ff80', '#ff8000', '#0080ff']
      };
      
      const schemeColors = colors[colorScheme] || colors['neural-network'];
      return schemeColors[Math.floor(Math.random() * schemeColors.length)];
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Initialize neural network
    if (enableNeuralNetworks) {
      for (let i = 0; i < 20; i++) {
        neuralNodes.push(new NeuralNode(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Create connections
      neuralNodes.forEach(node => {
        neuralNodes.forEach(otherNode => {
          if (node !== otherNode && Math.random() < 0.3) {
            node.connections.push(otherNode);
          }
        });
      });
    }

    // Initialize quantum fields
    if (enableQuantumEffects) {
      for (let i = 0; i < 8; i++) {
        quantumFields.push(new QuantumField(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    }

    // Initialize holographic layers
    if (enableHolographic) {
      for (let i = 0; i < 5; i++) {
        holographicLayers.push(new HolographicLayer());
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      const bgColors = {
        'neural-network': ['rgba(0, 0, 20, 0.8)', 'rgba(0, 20, 40, 0.6)', 'rgba(20, 0, 40, 0.4)'],
        'quantum-field': ['rgba(0, 20, 0, 0.8)', 'rgba(20, 40, 0, 0.6)', 'rgba(40, 0, 20, 0.4)'],
        'cyberpunk': ['rgba(40, 0, 20, 0.8)', 'rgba(20, 0, 40, 0.6)', 'rgba(0, 20, 40, 0.4)'],
        'holographic': ['rgba(40, 0, 40, 0.8)', 'rgba(0, 40, 40, 0.6)', 'rgba(40, 40, 0, 0.4)'],
        'multidimensional': ['rgba(20, 0, 40, 0.8)', 'rgba(0, 40, 20, 0.6)', 'rgba(40, 20, 0, 0.4)']
      };
      
      const currentBgColors = bgColors[colorScheme] || bgColors['neural-network'];
      gradient.addColorStop(0, currentBgColors[0]);
      gradient.addColorStop(0.5, currentBgColors[1]);
      gradient.addColorStop(1, currentBgColors[2]);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      if (enableQuantumEffects) {
        quantumFields.forEach(field => {
          field.update();
          field.draw();
        });
      }

      // Update and draw holographic layers
      if (enableHolographic) {
        holographicLayers.forEach(layer => {
          layer.update();
          layer.draw();
        });
      }

      // Update and draw neural network
      if (enableNeuralNetworks) {
        neuralNodes.forEach(node => {
          node.update();
          node.draw();
        });
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });

      // Draw particle connections
      if (intensity === 'extreme' || intensity === 'high') {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = getColorSchemeColor();
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetworks, enableMultidimensional]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional visual effects */}
      {enableMultidimensional && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-400/20 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
      
      {children}
    </div>
  );
};

export default UltraAdvancedFuturisticBackground2026;