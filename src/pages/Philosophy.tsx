import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Zion Philosophy"
        description="The values, governance model, and user rights that guide the Zion ecosystem."
        canonical="https://app.ziontechgroup.com/philosophy"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20 font-serif">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <GradientHeading level="h1">Zion Philosophy</GradientHeading>
            <p className="text-zion-slate-light text-xl">
              A living constitution for open technology
            </p>
          </div>

          <section className="space-y-6">
            <GradientHeading level="h2" className="mb-4">
              Foundational Beliefs
            </GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light text-lg space-y-2">
              <li>Talent is sovereign</li>
              <li>AI must serve people, not replace them</li>
              <li>
                Decentralized reputation is better than centralized scores
              </li>
              <li>Open knowledge &gt; closed platforms</li>
            </ul>
            <div className="bg-zion-blue-dark border-l-4 border-primary p-4 rounded">
              <p className="font-bold text-white">We Believe…</p>
            </div>
          </section>

          <section className="space-y-6">
            <GradientHeading level="h2" className="mb-4">
              Governance Principles
            </GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light text-lg space-y-2">
              <li>Open proposal submission (DAO or admin)</li>
              <li>Weighted voting</li>
              <li>Time-based quorum rules</li>
              <li>Transparency of decision-making</li>
            </ul>
          </section>

          <section className="space-y-6">
            <GradientHeading level="h2" className="mb-4">
              Rights of Users
            </GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light text-lg space-y-2">
              <li>Data exportability</li>
              <li>Zero lock-in</li>
              <li>Right to self-train on your own interactions</li>
              <li>Fair pay protection (minimum rate safeguards)</li>
            </ul>
            <div className="bg-zion-blue-dark border-l-4 border-primary p-4 rounded">
              <p className="font-bold text-white">We Defend…</p>
            </div>
          </section>

          <section className="space-y-6">
            <GradientHeading level="h2" className="mb-4">
              Version Control
            </GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light text-lg space-y-2">
              <li>Constitution v1 → v2 (updates by community or core team)</li>
              <li>
                Operator can log changelogs and voting outcome tied to each
                revision
              </li>
            </ul>
          </section>

          <div className="text-center space-y-2">
            <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg">
              Sign with Wallet
            </button>
            <p className="text-zion-slate-light text-sm">
              #1,302 to sign the Zion Constitution
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
