import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Zion App — Next Generation Platform</title>
        <meta name="description" content="Experience the future with our AI-powered marketplace, cloud architecture, and digital transformation solutions." />
      </Head>

      {/* Ambient animated background */}
      <AnimatedBackground className="pointer-events-none">
        <div className="absolute -top-20 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-400/10 blur-2xl animate-pulse" />
      </AnimatedBackground>

      {/* Futuristic sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white/5 backdrop-blur-xl border-r border-white/10">
        <div className="px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.35)]">Zion</span>
          </div>
          <nav className="mt-8 space-y-2">
            {[
              { href: '/', label: 'Main' },
              { href: '/services', label: 'AI Services' },
              { href: '/products', label: 'Products' },
              { href: '/blog', label: 'Resources' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">{item.label}</a>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="md:pl-72 container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Zion</span> The First Free
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">AI‑Powered Marketplace</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/85">
            Connect with top-tier IT services, AI talents, and innovative products in a seamless, secure environment.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services">
              <a className="px-8 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)] transition-shadow">Our Services</a>
            </Link>
            <Link href="/contact">
              <a className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-colors">Get in Touch</a>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p>Custom AI solutions and machine learning models for your business needs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p>Scalable cloud solutions and infrastructure design for modern applications.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business.</p>
            </div>
          </div>
        </div>
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* AUTO-GENERATED: HOMEPAGE_PROMOS_START */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Explore more</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          </div>
        </section>
        {/* AUTO-GENERATED: HOMEPAGE_PROMOS_END */}
</main>
    </div>
  );
};

export default Home;