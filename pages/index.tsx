import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { MonitorSmartphone, Bot, Globe2, BadgeCheck, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <EnhancedLayout>
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
        <AnimatedBackground />
        <div className="relative z-10 px-6 py-16 md:px-10 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-black/40 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            Now on iOS and Android
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Build faster with global, AI-matched talent
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
            Zion connects you with vetted experts worldwide, matches roles with AI in seconds, and keeps milestones on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/download"><a className="rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-500">Get the app</a></Link>
            <Link href="/services"><a className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-900">Explore services</a></Link>
          </div>
          <div className="mt-6 text-xs opacity-70">Trusted by founders, CTOs, and product teams</div>
        </div>
      </section>

      {/* Value props */}
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          { icon: Globe2, title: 'Hire from anywhere', text: 'Tap a global network of world-class talent.' },
          { icon: Bot, title: 'AI-match instantly', text: 'Role-to-expert matching in seconds, not weeks.' },
          { icon: MonitorSmartphone, title: 'Track on the go', text: 'Approve milestones and monitor progress from your phone.' },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
            <c.icon className="h-6 w-6 text-indigo-500" />
            <div className="mt-3 text-lg font-semibold">{c.title}</div>
            <p className="mt-1 text-sm opacity-80">{c.text}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Services</h2>
          <Link href="/services"><a className="text-sm text-indigo-600 hover:underline">See all</a></Link>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Rocket, title: 'MVP Acceleration', text: 'Ship your MVP in weeks with a dedicated team.', href: '/services#mvp' },
            { icon: ShieldCheck, title: 'Security & Compliance', text: 'Harden your stack with modern best practices.', href: '/services#security' },
            { icon: BadgeCheck, title: 'AI Integrations', text: 'Embed AI copilots, agents, and workflows.', href: '/services#ai' },
          ].map((s) => (
            <Link key={s.title} href={s.href}>
              <a className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <s.icon className="h-6 w-6 text-indigo-500" />
                <div className="mt-3 text-lg font-semibold group-hover:text-indigo-600">{s.title}</div>
                <p className="mt-1 text-sm opacity-80">{s.text}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Capabilities</h2>
          <Link href="/capabilities"><a className="text-sm text-indigo-600 hover:underline">See all</a></Link>
        </div>
        <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
          {[
            { label: 'Full‑stack Web' },
            { label: 'Mobile (iOS/Android)' },
            { label: 'AI/ML' },
            { label: 'Cloud & DevOps' },
            { label: 'Data Engineering' },
            { label: 'Blockchain' },
            { label: 'IoT' },
            { label: 'Security' },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
              {c.label}
            </div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="mt-12 rounded-3xl border border-indigo-200/60 dark:border-indigo-800/60 bg-indigo-50/60 dark:bg-indigo-900/20 p-6 text-center">
        <h3 className="text-lg font-semibold">Ready to build something extraordinary?</h3>
        <p className="mt-1 text-sm opacity-80">Start a project or hire instantly from our global network.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link href="/download"><a className="rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-medium hover:bg-indigo-500">Get the app</a></Link>
          <Link href="/contact"><a className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-2.5 font-medium hover:bg-gray-50 dark:hover:bg-gray-900">Talk to us</a></Link>
        </div>
      </section>
    </EnhancedLayout>
  );
}