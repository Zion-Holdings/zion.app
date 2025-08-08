import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

export default function FuturisticHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 md:p-12 shadow-sm">
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Build Faster with Zion AI Marketplace
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Discover top AI talent and services. Chat, scope, and schedule in-app video interviews with real-time calendar logic and secure workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services"><a className="enhanced-button enhanced-button-primary">Explore Services</a></Link>
            <Link href="/interviews"><a className="enhanced-button enhanced-button-secondary">Schedule Interview</a></Link>
          </div>
        </div>
      </div>
    </section>
  );
}