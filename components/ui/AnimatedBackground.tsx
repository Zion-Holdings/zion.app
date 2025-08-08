import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <style jsx>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-40px) translateX(20px) scale(1.05); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes floatMedium {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(30px) translateX(-30px) scale(0.98); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
      `}</style>
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40"
           style={{ background: 'radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%)', animation: 'floatSlow 12s ease-in-out infinite' }} />
      <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-40"
           style={{ background: 'radial-gradient(circle at 70% 70%, #a78bfa, transparent 60%)', animation: 'floatMedium 10s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-1/4 w-[44rem] h-[44rem] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 50% 50%, #34d399, transparent 60%)', animation: 'floatSlow 14s ease-in-out infinite' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 dark:via-black/10 to-transparent" />
    </div>
  );
}