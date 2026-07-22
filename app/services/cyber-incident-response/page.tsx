import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyber Incident Response | Zion Tech Group',
  description: 'Fast, executive-ready incident response for breaches, ransomware, and outages. Retainer coverage, on-call analysts, and post-incident reporting.',
  alternates: { canonical: 'https://ziontechgroup.com/services/cyber-incident-response' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold">Cyber Incident Response Retainer</h1>
        <p className="mt-4 text-slate-300">
          Fast incident response for breaches, ransomware, and outages. A retained IR plan with on-call analysts and
          post-incident reporting so you can respond in hours, not days.
        </p>
        <ul className="mt-6 list-disc pl-6 text-slate-300">
          <li>24/7 on-call IR coverage</li>
          <li>Containment playbooks</li>
          <li>Forensic snapshot collection</li>
          <li>Notification/regulatory guidance</li>
          <li>Post-incident hardening plan</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="btn">Schedule a briefing</a>
          <a href="https://ziontechgroup.com/services" className="btn secondary">Back to services</a>
        </div>
      </section>
    </main>
  );
}
