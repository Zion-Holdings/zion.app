import React from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import FuturisticHero from '@/components/ui/FuturisticHero';
import FuturisticCard from '@/components/ui/FuturisticCard';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white" style={{ background: 'var(--cyber-gradient)' }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <FuturisticHero />

        <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <FuturisticCard
            title="AI-Assisted Proposals"
            description="Start from governance-ready templates, auto-fill with AI, and iterate with versioned history."
            cta={[{ href: '/dao/templates', label: 'Open Templates' }]}
          />
          <FuturisticCard
            title="Autonomous Cloud Agents"
            description="Self-running workflows publish archives, digests, and sitemaps with zero ops."
            cta={[{ href: '/automation/cloud-agents', label: 'View Agents' }]}
          />
          <FuturisticCard
            title="Public Governance"
            description="Link proposals to voting, export PDFs, and share results across the ecosystem."
            cta={[{ href: '/governance/zgp-library', label: 'Governance Hub' }]}
          />
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Why Zion Autonomous Cloud</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <FuturisticCard
                title="Faster Decisions"
                description="Template-driven proposals with AI assist compress drafting time from days to minutes."
              />
              <FuturisticCard
                title="Trust & Transparency"
                description="Versioned history and public archives keep your governance legible and auditable."
              />
              <FuturisticCard
                title="Zero Maintenance"
                description="Everything runs on cloud-native workflows—no servers, no cron boxes, no manual ops."
              />
              <FuturisticCard
                title="Ecosystem-Ready"
                description="Designed for ZionDAO and compatible with public governance flows and tooling."
              />
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-white/70">
          <div className="space-x-4">
            <a className="underline" href="/dao/templates">Templates</a>
            <a className="underline" href="/automation/cloud-agents">Automations</a>
            <a className="underline" href="/governance/zgp-library">Governance Hub</a>
          </div>
        </footer>
      </div>
    </div>
  );
}