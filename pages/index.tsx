<<<<<<< HEAD
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getTenantByHost, hostnameFromReqHeaders } from "../utils/tenant";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { Cpu, Rocket, ShieldCheck, Sparkles, Layers, Globe2, Cog, Users } from "lucide-react";

function LinkCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href}>
      <a className="card block p-5 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-black/40 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700">
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm opacity-70 mt-1">{desc}</div>
      </a>
    </Link>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="p-5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-black/30">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={18} className="opacity-80" />
        <div className="font-semibold">{title}</div>
      </div>
      <div className="text-sm opacity-70">{desc}</div>
    </div>
  );
}

export default function Home({ tenant }: any) {
  return (
    <div className="relative py-16">
      <AnimatedBackground />

      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-white/20 bg-black/20 text-white/80 mb-4">
          <Sparkles size={14} /> Futuristic AI‑Powered Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text">
          {tenant.heroTitle || `${tenant.brandName}: AI solutions for your brand`}
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          {tenant.heroSubtitle || "Launch faster with a tailored white‑label platform."}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="/services"
            className="px-5 py-3 rounded-md text-white shadow"
            style={{ backgroundColor: tenant.primaryColor }}
          >Explore Services</a>
          <a
            href="/partner"
            className="px-5 py-3 rounded-md border"
            style={{ borderColor: tenant.primaryColor, color: tenant.primaryColor }}
          >Partner Panel</a>
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <LinkCard href="/services" title="Services" desc="AI development, cloud, data, security, and more" />
          <LinkCard href="/products" title="Products" desc="Platform modules and accelerators" />
          <LinkCard href="/blog" title="Blog" desc="Insights and best practices" />
          <LinkCard href="/talent" title="Talent" desc="Experts for your projects" />
          <LinkCard href="/category/ai-consulting-chat" title="AI Consulting" desc="Strategy, roadmaps, adoption" />
          <LinkCard href="/services/landing-page-generator" title="Landing Page Generator" desc="Ship marketing pages with AI" />
          <LinkCard href="/services/price-intelligence-service" title="Price Intelligence" desc="Competitive tracking" />
          <LinkCard href="/partner/tools" title="AI Tools" desc="Use AI tools independently" />
          <LinkCard href="/admin/whitelabel" title="White‑Label Admin" desc="Manage tenants and branding" />
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Rocket} title="Rapid Deployment" desc="Spin up branded tenants in minutes." />
          <Feature icon={ShieldCheck} title="Enterprise‑Grade" desc="Security‑first, tenant‑isolated data." />
          <Feature icon={Layers} title="Modular Platform" desc="Compose features to fit your needs." />
          <Feature icon={Globe2} title="Global Scale" desc="Built for performance and reliability." />
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Cpu} title="AI Dev" desc="Fine‑tuned models, RAG, agents." />
          <Feature icon={Cog} title="Automation" desc="Workflows that move business." />
          <Feature icon={Users} title="Collaboration" desc="Invite teams and partners." />
          <Feature icon={Sparkles} title="Design Systems" desc="Modern, accessible, responsive." />
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto px-4 text-center">
        <div className="p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-black/40 backdrop-blur">
          <h3 className="text-2xl font-semibold">Ready to build your white‑label AI platform?</h3>
          <p className="opacity-80 mt-2">We help agencies, startups, and enterprises go to market faster.</p>
          <div className="mt-5">
            <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ backgroundColor: tenant.primaryColor }}>Contact Us</a>
=======
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
>>>>>>> cursor/integrate-ai-resume-builder-into-job-applications-9820
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};
=======
};

export default Home;
>>>>>>> cursor/integrate-ai-resume-builder-into-job-applications-9820
