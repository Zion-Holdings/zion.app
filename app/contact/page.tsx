import Link from 'next/link';

export const metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions. Request a proposal, schedule a consultation, or call us directly.',
  alternates: { canonical: '/contact/' },
};

const quickActions = [
  { label: 'Request Proposal', href: 'mailto:kleber@ziontechgroup.com?subject=Proposal%20Request%20-%20Zion%20Tech%20Group', icon: '📄' },
  { label: 'Our Services', href: '/services/', icon: '🧩' },
  { label: 'Call Now', href: 'tel:+13024640950', icon: '📞' },
  { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup', icon: '📅' },
  { label: 'WhatsApp', href: 'https://wa.me/13024640950', icon: '💬' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Zion Tech Group</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Tell us about your AI, IT, or automation project. We respond fast and can start with a free consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a href="tel:+13024640950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">📅 Book Consultation</a>
            <a href="https://meet.google.com/ouu-khao-kuy" target="_blank" rel="noreferrer" className="btn-secondary text-lg">🎥 Google Meet</a>
            <Link href="/services/" className="btn-secondary text-lg">Our Services</Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map(action => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
              >
                <span className="text-xl">{action.icon}</span>
                <span className="text-white font-medium">{action.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need an AI or IT solution this week?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We specialize in AI support, automation, cloud optimization, and managed delivery. Start with a short discovery call or request a proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg">📅 Schedule a Call</a>
            <a href="tel:+13024640950" className="btn-secondary text-lg">📞 +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com?subject=Project%20Inquiry%20-%20Zion%20Tech%20Group" className="btn-secondary text-lg">✉️ Email Us</a>
          </div>

          <p className="text-slate-400 mt-6 text-sm">
            Website: <a className="text-emerald-300 hover:text-emerald-200 underline" href="https://ziontechgroup.com">https://ziontechgroup.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
