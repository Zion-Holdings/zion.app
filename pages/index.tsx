import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="neon-card p-5">
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-sm opacity-80">{desc}</p>
  </div>
);

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace</title>
        <meta name="description" content="Zion AI Marketplace" />
      </Head>

      <section className="futuristic-hero relative min-h-[70vh] flex items-center justify-center text-center bg-black text-white">
        <div className="animated-gradient"></div>
        <div className="grid-overlay"></div>
        <div className="noise"></div>
        <div className="orb cyan floating" style={{ top: '10%', left: '10%' }}></div>
        <div className="orb purple floating" style={{ top: '0%', right: '8%' }}></div>
        <div className="orb pink floating" style={{ bottom: '0%', left: '40%' }}></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="badge-future mx-auto mb-4 w-max">
            <span className="fi fi-us"></span>
            <span>Multilingual + Autonomous</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight neon-glow">
            Build, Deploy, and Monetize AI — Globally, Autonomously
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            The Zion AI Marketplace connects global buyers and AI operators with autonomous workflows, instant localization, and futuristic developer UX.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="button-neon px-5 py-3">{t('cta.post_job')}</button>
            <button className="button-neon px-5 py-3 border border-white/20 bg-transparent">{t('cta.create_profile')}</button>
          </div>
        </div>
      </section>

      <main className="space-y-16 container mx-auto px-6 py-12">
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why Zion</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard title="Global by Default" desc="i18n with RTL support, auto language detection, and AI translation backfill." />
            <FeatureCard title="Operator-First" desc="AI workflows that translate, tag, summarize, and optimize content automatically." />
            <FeatureCard title="Launch Fast" desc="Modern design system, responsive UI, and neon-glass visuals that stand out." />
          </div>
        </section>

        <div className="hr-future" />

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard title="Autonomous Agents" desc="Release notes, taxonomy tagging, SEO audit, market signals, and translation sync." />
            <FeatureCard title="Marketplace Integrations" desc="Connect talent, services, and AI solutions end-to-end." />
            <FeatureCard title="Scalable Infrastructure" desc="Cloud-native, CI/CD automation, and continuous improvement workflows." />
          </div>
        </section>

        <div className="hr-future" />

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard title="Faster Go-To-Market" desc="Automations eliminate repetitive work and keep content aligned." />
            <FeatureCard title="Global Reach" desc="Serve English, Portuguese, Spanish, and Arabic audiences from day one." />
            <FeatureCard title="Always On" desc="Cloud agents run on schedules and commit results automatically." />
          </div>
        </section>

        <div className="hr-future" />

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Autonomous Cloud Agents</h2>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/auto/language-sync">Global Language Sync Agent</Link></h3>
              <p className="text-sm opacity-80">Backfills missing translations and keeps locale files fresh.</p>
            </li>
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/auto/market-signals">AI Market Signals Agent</Link></h3>
              <p className="text-sm opacity-80">Curates AI/tech trends daily and stores reports.</p>
            </li>
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/auto/seo-audit">Autonomous SEO Auditor</Link></h3>
              <p className="text-sm opacity-80">Finds SEO gaps and generates actionable reports.</p>
            </li>
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/auto/release-notes-agent">AI Release Notes Agent</Link></h3>
              <p className="text-sm opacity-80">Summarizes daily commits into readable release notes.</p>
            </li>
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/auto/taxonomy-agent">AI Taxonomy Tagger</Link></h3>
              <p className="text-sm opacity-80">Suggests page tags to improve discovery.</p>
            </li>
            <li className="neon-card p-4">
              <h3 className="font-semibold"><Link href="/public/hreflang.xml">Hreflang Generator</Link></h3>
              <p className="text-sm opacity-80">Keeps alternate language hreflang links up to date.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;