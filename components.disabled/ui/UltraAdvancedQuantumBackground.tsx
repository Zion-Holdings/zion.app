import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedQuantumBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
}

const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({
  children,
  intensity = 'medium',
  variant = 'quantum'
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
    let quantumFields: QuantumField[] = [];
    let neuralNetworks: NeuralNetwork[] = [];

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

    // Particle class for quantum effects
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';

      constructor(x: number, y: number, type: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.type = type as any;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        
        switch (type) {
          case 'quantum':
            this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'holographic':
            this.color = `hsl(${270 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'neural':
            this.color = `hsl(${120 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'cyberpunk':
            this.color = `hsl(${330 + Math.random() * 60}, 100%, 70%)`;
            break;
          case 'space':
            this.color = `hsl(${220 + Math.random() * 60}, 100%, 70%)`;
            break;
          default:
            this.color = `hsl(${180 + Math.random() * 60}, 100%, 70%)`;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add quantum entanglement lines
        if (Math.random() < 0.1) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 20, this.y + this.vy * 20);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Quantum field class
    class QuantumField {
      x: number;
      y: number;
      radius: number;
      strength: number;
      type: string;

      constructor(x: number, y: number, type: string) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 100 + 50;
        this.strength = Math.random() * 0.5 + 0.5;
        this.type = type;
      }

      update() {
        this.strength = 0.5 + 0.5 * Math.sin(Date.now() * 0.001);
      }

      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${this.strength * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Neural network class
    class NeuralNetwork {
      nodes: { x: number; y: number; connections: number[] }[];
      connections: { from: number; to: number; strength: number }[];

      constructor() {
        this.nodes = [];
        this.connections = [];
        
        // Create neural network structure
        for (let i = 0; i < 20; i++) {
          this.nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            connections: []
          });
        }

        // Create connections
        for (let i = 0; i < 30; i++) {
          const from = Math.floor(Math.random() * this.nodes.length);
          const to = Math.floor(Math.random() * this.nodes.length);
          if (from !== to) {
            this.connections.push({
              from,
              to,
              strength: Math.random()
            });
          }
        }
      }

      update() {
        // Animate neural network
        this.nodes.forEach(node => {
          node.x += (Math.random() - 0.5) * 0.5;
          node.y += (Math.random() - 0.5) * 0.5;
          
          // Keep nodes within bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        });
      }

      draw() {
        if (!ctx) return;
        
        // Draw connections
        this.connections.forEach(connection => {
          const fromNode = this.nodes[connection.from];
          const toNode = this.nodes[connection.to];
          
          ctx.strokeStyle = `rgba(0, 255, 255, ${connection.strength * 0.3})`;
          ctx.lineWidth = connection.strength * 2;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
          ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
          ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Initialize effects based on variant
    const initEffects = () => {
      particles = [];
      quantumFields = [];
      neuralNetworks = [];

      // Create particles
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          variant
        ));
      }

      // Create quantum fields
      for (let i = 0; i < 5; i++) {
        quantumFields.push(new QuantumField(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          variant
        ));
      }

      // Create neural networks
      for (let i = 0; i < 3; i++) {
        neuralNetworks.push(new NeuralNetwork());
      }
    };

    initEffects();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      quantumFields.forEach(field => {
        field.update();
        field.draw();
      });

      // Update and draw neural networks
      neuralNetworks.forEach(network => {
        network.update();
        network.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            variant
          );
        }
      });

      // Add quantum entanglement effects
      if (Math.random() < 0.05) {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, variant]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: variant === 'quantum' ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' :
                    variant === 'holographic' ? 'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, rgba(0,0,0,1) 100%)' :
                    variant === 'neural' ? 'radial-gradient(ellipse at center, rgba(16,185,129,0.1) 0%, rgba(0,0,0,1) 100%)' :
                    variant === 'cyberpunk' ? 'radial-gradient(ellipse at center, rgba(236,73,153,0.1) 0%, rgba(0,0,0,1) 100%)' :
                    'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: variant === 'quantum' ? 'conic-gradient(from 0deg, transparent, rgba(0,255,255,0.1), transparent)' :
                        variant === 'holographic' ? 'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.1), transparent)' :
                        variant === 'neural' ? 'conic-gradient(from 0deg, transparent, rgba(16,185,129,0.1), transparent)' :
                        variant === 'cyberpunk' ? 'conic-gradient(from 0deg, transparent, rgba(236,73,153,0.1), transparent)' :
                        'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.1), transparent)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;