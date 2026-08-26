import Link from 'next/link';

export const metadata = {
  title: 'Free Developer Tools & Utilities | Zion Tech Group',
  description: '50+ free online developer tools: JSON formatter, JWT decoder, regex tester, SQL formatter, color palette generator, QR code generator, and more.',
  alternates: { canonical: '/free-tools' },
};

export default function FreeToolsProxy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">🛠️ Free Developer Tools</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            50+ free online tools for developers, designers, and data professionals. No signup required, no data stored.
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto mt-2">
            If you need custom AI integrations, IT automation, or managed delivery, Zion Tech Group can build tailored solutions on top of these patterns.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a href="tel:+13024640950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">📅 Book Consultation</a>
            <Link href="/contact/" className="btn-secondary text-lg">Contact Us</Link>
          </div>
        </header>

        <section className="cta-section text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Need More Than Free Tools?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We offer AI implementation, IT automation, managed support, and custom integrations for teams that want production-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">📅 Book a Consultation</a>
            <Link href="/services/" className="btn-secondary text-lg">View Services</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
