import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    let raf = 0;
    const animate = () => {
      t += 0.0025;
      const x = Math.sin(t) * 50 + 50;
      const y = Math.cos(t * 1.2) * 50 + 50;
      el.style.background = `radial-gradient(1200px 1200px at ${x}% ${y}%, rgba(59,130,246,0.12), transparent), radial-gradient(900px 900px at ${100-x}% ${100-y}%, rgba(168,85,247,0.12), transparent), radial-gradient(1000px 1000px at ${y}% ${x}%, rgba(16,185,129,0.10), transparent)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div ref={ref} className={`pointer-events-none absolute inset-0 -z-10 transition-colors duration-500 ${className}`} />;
}