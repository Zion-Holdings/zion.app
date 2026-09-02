export const metadata = {
  title: 'Managed IT Services — Zion Tech Group',
  description: 'Managed IT services from Zion Tech Group: cloud, cybersecurity, platform engineering, support, and infrastructure modernization.',
  alternates: { canonical: '/services/managed-it/' },
};

export default function ManagedItPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">Managed IT Services</h1>
      <p className="mt-2 text-slate-300">
        Predictable IT operations with expert support, modern infrastructure, and measurable SLAs.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Support & Operations</h2>
          <p className="mt-2 text-sm text-slate-300">
            Help desk, endpoint management, and incident resolution with defined response targets.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Cloud & Infrastructure</h2>
          <p className="mt-2 text-sm text-slate-300">
            Cloud operations, networking, identity, and platform engineering for resilient systems.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Modernization</h2>
          <p className="mt-2 text-sm text-slate-300">
            Migration, containerization, and automation to reduce technical debt and increase velocity.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Security Integration</h2>
          <p className="mt-2 text-sm text-slate-300">
            Built-in security controls, patching, and compliance checks in everyday IT operations.
          </p>
        </div>
      </div>
    </div>
  );
}
