export const metadata = {
  title: 'Innovation Bundles — Zion Tech Group',
  description: 'Curated bundles of AI and IT services at discounted prices. Combine solutions for maximum impact.',
  alternates: { canonical: '/services/innovation-bundles/' },
};

export default function InnovationBundlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">Innovation Bundles</h1>
      <p className="mt-2 text-slate-300">
        Prepackaged AI and IT service bundles for faster deployment, lower cost, and predictable outcomes.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Automation Starter</h2>
          <p className="mt-2 text-sm text-slate-300">
            Workflow digitization, email intelligence, and dashboarding in one bundle.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Growth Bundle</h2>
          <p className="mt-2 text-sm text-slate-300">
            AI services, content automation, and analytics for revenue acceleration.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Platform Bundle</h2>
          <p className="mt-2 text-sm text-slate-300">
            Managed IT, observability, and DevOps automation for stable platforms.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Security Bundle</h2>
          <p className="mt-2 text-sm text-slate-300">
            Cybersecurity managed services, compliance operations, and identity governance.
          </p>
        </div>
      </div>
    </div>
  );
}
