import Link from 'next/link';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import FuturisticHero from '../components/ui/FuturisticHero';
import FuturisticCard from '../components/ui/FuturisticCard';

export default function Home() {
  return (
    <div className="relative text-gray-100">
      <AnimatedBackground />
      <FuturisticHero />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Why Zion</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FuturisticCard
            title="Autonomous Cloud Automations"
            description="SEO generation, market intelligence, link repair, and roadmap planning run 24/7 on GitHub Actions."
            cta={<Link href="/seo"><a className="btn-secondary">See outputs</a></Link>}
          />
          <FuturisticCard
            title="Realtime Collaboration"
            description="Built-in voice/video and screen share in project rooms for interviews and stand-ups."
            cta={<Link href="/project/demo/room"><a className="btn-secondary">Start a call</a></Link>}
          />
          <FuturisticCard
            title="Top AI Talent & Compute"
            description="Find vetted AI engineers and rent compute globally, with localized long‑tail SEO pages."
            cta={<Link href="/talent"><a className="btn-secondary">Browse talent</a></Link>}
          />
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FuturisticCard title="Auto-healing CI" description="Crash → Issue → OpenAI patch → Build/Test → Push to dev → Notify." />
          <FuturisticCard title="Localized SEO" description="GPT-crafted landing pages with embedded regional talent and FAQs." />
          <FuturisticCard title="LiveKit Calls" description="Encrypted video/audio, mute/unmute, screenshare, and grid tiles." />
          <FuturisticCard title="Supabase Realtime" description="Instant call invites, thread logs, and meeting history." />
          <FuturisticCard title="Analytics-Driven" description="Weekly market trend reports to focus efforts where it matters." />
          <FuturisticCard title="Modern DX" description="Next.js + Tailwind + OpenAI + GitHub Actions. Ship at lightspeed." />
        </div>
      </section>
    </div>
  );
}