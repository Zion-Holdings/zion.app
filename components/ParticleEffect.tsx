import React, { useEffect, useRef , useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;}
interface MatrixRain {
  x: number;
  y: number;
  speed: number;
  char: string;
  opacity: number;}
const ParticleEffect: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const matrixRainRef = useRef<MatrixRain[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;'
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
'
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {;
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,'
          size: Math.random() * 2 + 1,
          color: ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
          opacity: Math.random() * 0.5 + 0.3,
        });}
    };

    // Initialize matrix rain
    const initMatrixRain = () => {;'
      matrixRainRef.current = [];
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      for (let i = 0; i < 20; i++) {
        matrixRainRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.7 + 0.3,
        });}
    };

    // Animation loop
    const animate = () => {;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 1;
              ctx.stroke();}}
        });
      });

      // Update and draw matrix rain
      matrixRainRef.current.forEach((rain) => {
        rain.y += rain.speed;
        if (rain.y > canvas.height) {
          rain.y = -20;
          rain.x = Math.random() * canvas.width;}'
        ctx.font = '14px monospace';
        ctx.fillStyle = '#10b981';
        ctx.globalAlpha = rain.opacity;
        ctx.fillText(rain.char, rain.x, rain.y);
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    initParticles();
    initMatrixRain();
    animate();
'
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas'
      ref = {canvasRef}
      className=" fixed inset-0 pointer-events-none z-0 style={{ background:" 'transparent'}
};"
    >);
};"

export default ParticleEffect;</canvas'
      ref = {canvasRef}"''
      className=" fixed inset-0 pointer-events-none z-0 style={{ background:" 'transparent'}}'
    >';"