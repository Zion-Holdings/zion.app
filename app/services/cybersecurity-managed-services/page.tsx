export const metadata = {
  title: 'Cybersecurity Managed Services — Zion Tech Group',
  description: 'Managed cybersecurity services: threat monitoring, incident response, identity protection, and compliance operations.',
  alternates: { canonical: '/services/cybersecurity-managed-services/' },
};

export default function CybersecurityManagedServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">Cybersecurity Managed Services</h1>
      <p className="mt-2 text-slate-300">
        Continuous protection with managed detection, response, and compliance operations.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Managed Detection</h2>
          <p className="mt-2 text-sm text-slate-300">
            24/7 monitoring with AI-assisted threat detection across endpoints, identity, and cloud.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Incident Response</h2>
          <p className="mt-2 text-sm text-slate-300">
            Rapid containment, evidence collection, and recovery playbooks with defined SLAs.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Identity & Access</h2>
          <p className="mt-2 text-sm text-slate-300">
            Identity hygiene, privilege governance, and adaptive access controls to reduce breach risk.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Compliance Operations</h2>
          <p className="mt-2 text-sm text-slate-300">
            Audit-ready controls, continuous compliance checks, and reporting for regulated environments.
          </p>
        </div>
      </div>
    </div>
  );
}
