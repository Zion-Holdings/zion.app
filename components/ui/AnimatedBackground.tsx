import { ReactNode, useMemo } from "react";

interface AnimatedBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  const particles = useMemo(() => Array.from({ length: 40 }, (_, i) => i), []);
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.12))'
      }} />

      <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
           style={{ background: 'radial-gradient(closest-side, rgba(0,212,255,0.25), transparent 70%)' }} />
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.25), transparent 70%)' }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(transparent 95%, rgba(255,255,255,0.06) 100%)',
        backgroundSize: '100% 4px',
        opacity: 0.15,
      }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => {
          const top = (i * 7) % 100;
          const delay = (i % 10) * 0.3;
          const size = 1 + (i % 3);
          const style: React.CSSProperties = {
            top: `${top}%`,
            left: `${(i * 13) % 100}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            position: 'absolute',
            background: '#00d4ff',
            borderRadius: 9999,
            animation: 'particle-drift 8s linear infinite',
            opacity: 0.6,
          };
          return <span key={i} style={style} />;
        })}
      </div>

      {children}
    </div>
  );
}

