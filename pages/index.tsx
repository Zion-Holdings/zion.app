import type { NextPage } from 'next';
import Link from 'next/link';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <section className="relative z-10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">
              Build high‑performance AI products, fast
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Zion Tech Group designs, builds and scales AI systems for ambitious teams. From research to production, we deliver quality, velocity and measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services"><a className="inline-flex items-center rounded-md bg-indigo-600 text-white px-5 py-2.5 hover:bg-indigo-700">Explore Services</a></Link>
              <Link href="/category/ai-consulting-chat"><a className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">Capabilities</a></Link>
              <Link href="/blog"><a className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50">Insights</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/services/ai-model-development-chat"><a className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-5 hover:shadow-md transition">
              <div className="text-lg font-medium">AI & LLM Engineering</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">RAG, evaluation, safety, fine‑tuning, observability and LLM Ops.</p>
              <div className="mt-3 text-indigo-600 group-hover:translate-x-0.5 transition">Learn more →</div>
            </a></Link>
            <Link href="/services/cloud-migration-services-chat"><a className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-5 hover:shadow-md transition">
              <div className="text-lg font-medium">Cloud & Platforms</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">AWS architecture, platform engineering, security and cost control.</p>
              <div className="mt-3 text-indigo-600 group-hover:translate-x-0.5 transition">Learn more →</div>
            </a></Link>
            <Link href="/services/web-application-development-chat"><a className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-5 hover:shadow-md transition">
              <div className="text-lg font-medium">Product Engineering</div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Modern web apps, design systems, data viz and performance.</p>
              <div className="mt-3 text-indigo-600 group-hover:translate-x-0.5 transition">Learn more →</div>
            </a></Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold">Featured capabilities</h2>
          <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/category/data-science-chat', title: 'Data Science', desc: 'Analytics, dashboards, decision support' },
              { href: '/category/cybersecurity-chat', title: 'Security', desc: 'AppSec, IAM, zero trust, threat modeling' },
              { href: '/category/devops-automation-chat', title: 'DevOps', desc: 'Pipelines, CI/CD, platform automation' },
              { href: '/category/ui-ux-design-chat', title: 'Design', desc: 'Futuristic UI, accessibility, interactions' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href}><a className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-5 hover:shadow-md transition">
                <div className="text-base font-medium">{title}</div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
                <div className="mt-3 text-indigo-600 group-hover:translate-x-0.5 transition">Explore →</div>
              </a></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Let’s build together</h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">Tell us your goals. We’ll propose a pragmatic, high‑impact plan.</p>
              </div>
              <Link href="/contact"><a className="inline-flex items-center rounded-md bg-indigo-600 text-white px-5 py-2.5 hover:bg-indigo-700">Contact us</a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;