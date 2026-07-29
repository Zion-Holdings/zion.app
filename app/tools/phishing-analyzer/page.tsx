'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Phishing Security Analyzer — Protect Your Business | Zion Tech Group',
  description: 'Free phishing security analyzer with 6 essential security tips to protect your organization from email threats, social engineering, and credential attacks.',
};

const tips = [
  {
    title: 'Verify sender addresses',
    desc: 'Check the actual email address, not just the display name. Attackers often spoof familiar names with look-alike domains.',
  },
  {
    title: 'Hover before you click',
    desc: 'Hover over links and buttons to preview the real URL. Phishing emails frequently use misleading anchor text.',
  },
  {
    title: 'Watch for urgency and fear',
    desc: 'Legitimate organizations rarely demand immediate action. Pressure tactics are a common social engineering signal.',
  },
  {
    title: 'Don’t trust attachments blindly',
    desc: 'Be cautious with unexpected PDFs, ZIPs, and Office files. Use sandboxed viewers or antivirus scanning before opening.',
  },
  {
    title: 'Use MFA everywhere',
    desc: 'Multi-factor authentication blocks most credential-based attacks. Combine it with a password manager for stronger hygiene.',
  },
  {
    title: 'Report and respond quickly',
    desc: 'Create a clear incident path: report suspicious mail, isolate affected accounts, rotate credentials, and document the attack.',
  },
];

export default function PhishingAnalyzerPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools/" className="text-purple-400 text-sm hover:underline mb-6 inline-block">
          ← All Tools
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">Phishing Security Analyzer</h1>
        <p className="text-slate-400 mb-8">
          Phishing remains one of the top attack vectors for businesses. Use these practical security tips
          to recognize, avoid, and respond to email-based threats.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {tips.map((tip, idx) => (
            <div key={idx} className="glass-card p-6">
              <div className="text-purple-400 font-bold text-sm mb-2">Tip {idx + 1}</div>
              <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/contact/" className="btn-primary">
            Get Security Help
          </Link>
          <Link href="/cybersecurity/" className="btn-secondary">
            Explore Cybersecurity Services
          </Link>
        </div>

        <div className="mt-12 glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-3">Why phishing still works</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Attackers combine technical spoofing with behavioral manipulation. The best defense is
            awareness, verification habits, and layered security controls including email filtering,
            endpoint protection, and incident response playbooks.
          </p>
        </div>
      </div>
    </div>
  );
}
