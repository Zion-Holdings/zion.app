import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

export default function FuturisticHero() {
  return (
    <section className="relative py-20 sm:py-28">
      <AnimatedBackground />
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Build and Hire with Zion AI Marketplace
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover elite AI talent, launch projects faster, and grow your business.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/partners"><a className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-500">Become a Partner</a></Link>
          <Link href="/services"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">Explore Services</a></Link>
        </div>
        <div className="mt-10 mx-auto max-w-3xl p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border border-gray-200 dark:border-gray-800 shadow">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Talent marketplace • Project accelerators • Secure contracts • Integrated AI toolchain
          </p>
        </div>
      </div>
    </section>
  );
}