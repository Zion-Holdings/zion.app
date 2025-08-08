import Head from 'next/head';
import Link from 'next/link';
import AnimatedBackground from '../components/ui/AnimatedBackground';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Solutions — AI Talent, Products, and Services</title>
        <meta name="description" content="Hire top AI talent, explore AI-powered products, and scale with expert services. Zion builds the future for startups and enterprises." />
      </Head>

      <AnimatedBackground />

      <section className="relative pt-24 pb-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white" style={{ textShadow: 'var(--glow-shadow)' }}>
            Build Faster with Elite AI Talent and Products
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Zion is your AI product studio and talent marketplace. Ship production-grade AI systems, automate operations, and win your market.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/services/ai-development">
              <a className="enhanced-button enhanced-button-primary">Explore Services</a>
            </Link>
            <Link href="/products">
              <a className="enhanced-button enhanced-button-secondary">Browse Products</a>
            </Link>
            <Link href="/talent">
              <a className="enhanced-button" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Hire AI Talent</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="enhanced-card bg-white/80 dark:bg-black/40 backdrop-blur">
            <h3 className="text-xl font-semibold">Capabilities</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/category/ai-consulting-chat"><a className="underline">AI Consulting</a></Link></li>
              <li><Link href="/category/devops-automation-chat"><a className="underline">DevOps Automation</a></Link></li>
              <li><Link href="/category/data-science-chat"><a className="underline">Data Science</a></Link></li>
              <li><Link href="/category/cybersecurity-chat"><a className="underline">Cybersecurity</a></Link></li>
            </ul>
            <div className="mt-4"><Link href="/services"><a className="text-blue-300 underline">See all</a></Link></div>
          </div>

          <div className="enhanced-card bg-white/80 dark:bg-black/40 backdrop-blur">
            <h3 className="text-xl font-semibold">Featured Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services/ai-development"><a className="underline">AI Development</a></Link></li>
              <li><Link href="/services/cloud-services"><a className="underline">Cloud & MLOps</a></Link></li>
              <li><Link href="/services/data-analytics"><a className="underline">Data Analytics</a></Link></li>
              <li><Link href="/services/blockchain"><a className="underline">Web3 & Blockchain</a></Link></li>
            </ul>
            <div className="mt-4"><Link href="/products"><a className="text-blue-300 underline">Automation Tools</a></Link></div>
          </div>

          <div className="enhanced-card bg-white/80 dark:bg-black/40 backdrop-blur">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/blog"><a className="underline">Blog: AI Trends</a></Link></li>
              <li><Link href="/contact"><a className="underline">Contact Us</a></Link></li>
              <li><a className="underline" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">Company Site</a></li>
            </ul>
            <div className="mt-4"><Link href="/talent"><a className="text-blue-300 underline">Find AI Talent</a></Link></div>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trusted Delivery, Enterprise-Grade</h2>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
            From prototypes to enterprise systems, we build with security, MLOps, and observability from day one.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/contact"><a className="enhanced-button enhanced-button-primary">Start Your Project</a></Link>
            <Link href="/blog"><a className="enhanced-button enhanced-button-secondary">Read Insights</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
}