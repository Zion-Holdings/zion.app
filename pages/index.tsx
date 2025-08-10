import Head from 'next/head';
import Link from 'next/link';
import AnimatedAurora from '@/components/ui/AnimatedAurora';
import FuturisticCard from '@/components/ui/FuturisticCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion — Autonomous AI Systems</title>
        <meta name="description" content="Futuristic AI-native platform: autonomous automations, fundraising intelligence, and cloud-native growth systems." />
      </Head>

      <div className="relative">
        <AnimatedAurora />
        <section className="relative z-10 py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200 mb-5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Autonomous Cloud Agents — always on
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Build with the AI-native Operator Stack
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Generate dynamic decks, automate investor ops, and run autonomous growth systems — designed for founders shipping at lightspeed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/fundraising"><a className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/10">Launch Fundraising</a></Link>
              <Link href="/automations"><a className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/20">View Automations</a></Link>
            </div>
          </div>
        </section>
      </div>

      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          <FuturisticCard
            title="Decks that sell themselves"
            description="ZionGPT drafts stage-specific decks (Pre-Seed → Public Token), with editable sections and export to PDF/Notion."
            cta={{ href: '/fundraising', label: 'Generate a deck' }}
          />
          <FuturisticCard
            title="Deal room + CRM"
            description="Upload docs (SAFE, Metrics, Token Flow), pipeline by stage, and 1-click close with stakeholder updates."
            cta={{ href: '/fundraising', label: 'Open deal room' }}
          />
          <FuturisticCard
            title="Autonomous cloud agents"
            description="Content intelligence, security scans, SEO reports, and growth ops — commits back to repo, no humans required."
            cta={{ href: '/automations', label: 'See agents' }}
          />
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Capabilities</h2>
            <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Fundraising deck generator with operator prompts</li>
              <li>• Editable sections: market, product, team, traction, tokenomics, timeline, ask</li>
              <li>• Export to PDF & Notion</li>
              <li>• Deal room uploads + investor CRM</li>
              <li>• Close round → automated stakeholder updates</li>
              <li>• Style presets: Minimal, Gradient, Web3, Corporate</li>
              <li>• Permissions: core team + invite per round</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Autonomous Agents</h2>
            <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Cloud Autopilot: health, links, SEO, responsive, sitemap</li>
              <li>• Fundraising Autopilot: stage decks + investor report</li>
              <li>• Content Intelligence: trend monitoring + drafts</li>
              <li>• Security + Dependency Report</li>
              <li>• SEO Reporter + Sitemap Submit</li>
              <li>• Roadmap + Changelog + Localization</li>
              <li>• Broken/External Links + PageSpeed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200 mb-3">
            Designed for speed
          </div>
          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ship investor updates and growth ops in minutes, not weeks. Automate the busywork, focus on product and revenue.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/fundraising"><a className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black">Start now</a></Link>
            <Link href="/automations"><a className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/20">Explore agents</a></Link>
          </div>
        </div>
      </section>
    </>
  );
}