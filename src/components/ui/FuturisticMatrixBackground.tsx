import React, { useEffect, useRef } from 'react';

interface FuturisticMatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: number;
  className?: string;
}

export const FuturisticMatrixBackground: React.FC<FuturisticMatrixBackgroundProps> = ({
  intensity = 'medium',
  color = '#00ff88',
  speed = 2,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    const matrixArray = matrix.split("");

    const fontSize = intensity === 'high' ? 14 : intensity === 'medium' ? 12 : 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Animation variables
    let animationId: number;
    let frameCount = 0;

    const draw = () => {
      // Create semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Draw matrix characters
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = intensity === 'high' ? 15 : intensity === 'medium' ? 10 : 5;
        
        // Draw main character
        ctx.fillText(text, x, y);
        
        // Reset shadow
        ctx.shadowBlur = 0;

        // Reset drop to top when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }

      // Add floating particles for high intensity
      if (intensity === 'high') {
        drawFloatingParticles(ctx, frameCount);
      }

      frameCount++;
      animationId = requestAnimationFrame(draw);
    };

    const drawFloatingParticles = (ctx: CanvasRenderingContext2D, frame: number) => {
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(frame * 0.01 + i) * canvas.width * 0.5) + canvas.width * 0.5;
        const y = (Math.cos(frame * 0.01 + i * 0.5) * canvas.height * 0.5) + canvas.height * 0.5;
        const size = Math.sin(frame * 0.02 + i) * 3 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${0.3 + Math.sin(frame * 0.01 + i) * 0.2})`;
        ctx.fill();
      }
    };

    // Start animation
    draw();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    />
  );
};

export default FuturisticMatrixBackground;