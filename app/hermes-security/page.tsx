import React from 'react';

export const metadata = {
  title: 'Hermes Agent Security & Compliance | HIPAA SOC2 GDPR | Zion Tech Group',
  description: 'Hermes AI agent security: end-to-end encryption, HIPAA, SOC2, GDPR, PCI-DSS compliance. On-prem deployment, audit logging, zero-trust architecture.',
};

export default function HermesSecurity() {
  const features = [
    { title: 'End-to-End Encryption', desc: 'All agent communications encrypted in transit and at rest. AES-256-GCM, TLS 1.3.' },
    { title: 'Zero-Trust Architecture', desc: 'Every agent action verified. No implicit trust between services. Continuous authentication.' },
    { title: 'Compliance Automation', desc: 'HIPAA, SOC2, GDPR, PCI-DSS built-in. Automated evidence collection and reporting.' },
    { title: 'Audit Logging', desc: 'Immutable logs of every agent action. Tamper-proof, searchable, exportable.' },
    { title: 'On-Prem Deployment', desc: 'Deploy to your own infrastructure. Air-gapped environments supported.' },
    { title: 'Data Residency', desc: 'Choose where your data lives. US, EU, APAC, or custom regions.' },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Enterprise-Grade Security</h1>
          <p className="text-xl text-slate-300">Built for organizations that cannot afford breaches, compliance failures, or downtime.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 border border-slate-200 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
