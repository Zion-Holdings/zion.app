import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black" />

      {/* Aurora layers */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.6), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(236,72,153,0.5), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-8rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.45), transparent)' }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(120,119,198,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,119,198,0.15) 1px, transparent 1px)'
          , backgroundSize: '36px 36px'
        }}
      />

      {/* Light sweep */}
      <motion.div
        initial={{ x: '-20%' }}
        animate={{ x: ['-20%', '120%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/8"
      />
    </div>
  );
}