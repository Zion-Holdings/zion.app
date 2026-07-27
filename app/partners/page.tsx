import Link from 'next/link';

export const metadata = {
  title: 'Partners | Zion Tech Group',
  description:
    'Partner with Zion Tech Group for AI, IT, cloud, and cybersecurity delivery. Reseller, integration, and co-sell opportunities.',
};

export default function PartnersPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Partners</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Build faster with<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">a proven partner</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We partner with consultancies, integrators, ISVs, and resellers who want to deliver AI and IT outcomes without building every capability in-house.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Technology Partners',
                focus: 'Platform and product integration',
                value: 'Faster integrations with shared APIs and reference architectures.',
                href: '/industries/',
              },
              {
                name: 'Reseller Partners',
                focus: 'Go-to-market enablement',
                value: 'Sell managed AI/IT services with margin-ready packaged offers.',
                href: '/services/',
              },
              {
                name: 'Delivery Partners',
                focus: 'Joint implementation',
                value: 'Co-deliver pilots and fixed-scope builds with shared SLAs.',
                href: '/case-studies/',
              },
            ].map((partner) => (
              <div key={partner.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                <p className="mt-2 text-sm text-purple-300">{partner.focus}</p>
                <p className="mt-2 text-sm text-slate-300">{partner.value}</p>
                <Link
                  href={partner.href}
                  className="mt-4 inline-flex items-center rounded-xl border border-purple-500/40 px-6 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-600/10"
                >
                  Explore engagement
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Become a partner</h3>
            <p className="mt-2 text-sm text-slate-300">
              If you want to co-sell, integrate, or refer high-value AI/IT work, I can set up a partner conversation this week.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                Contact partnership team
              </Link>
              <Link href="/free-consultation/" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
