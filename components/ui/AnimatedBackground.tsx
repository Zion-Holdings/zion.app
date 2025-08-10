export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient wash */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl bg-gradient-to-tr from-neon-blue to-neon-purple animate-gradient-x" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl bg-gradient-to-tr from-neon-pink to-neon-green animate-gradient-x" />

      {/* Floating orbs */}
      <div className="absolute top-24 left-8 h-24 w-24 rounded-full bg-white/10 dark:bg-white/5 shadow-neon-high-contrast animate-float" />
      <div className="absolute bottom-32 right-12 h-16 w-16 rounded-full bg-white/10 dark:bg-white/5 shadow-neon-high-contrast animate-cyber-float" />

      {/* Scanning line */}
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-scan-line" />

      {/* Particle drifts */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      <div className="absolute top-1/3 -left-24 h-1 w-1/2 rounded-full bg-white/10 animate-particle-drift" />
      <div className="absolute top-2/3 -left-10 h-1 w-1/3 rounded-full bg-white/10 animate-particle-drift" />
    </div>
  );
}