// app/contact/page.tsx
import Link from 'next/link';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessStructuredData';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — AI Strategy Consultation | Zion Tech Group',
  description: 'Contact Zion Tech Group for AI strategy, IT solutions, and automation services. Free consultation, same-day proposal. Call +1 302-464-0950 or email kleber@ziontechgroup.com.',
  keywords: 'contact, AI consulting, IT services, automation, cloud infrastructure, machine learning, Middletown DE',
  alternates: { canonical: 'https://ziontechgroup.com/contact/' },
  openGraph: {
    title: 'Contact Us — AI Strategy Consultation | Zion Tech Group',
    description: 'Contact Zion Tech Group for AI strategy, IT solutions, and automation services. Free consultation, same-day proposal.',
    url: 'https://ziontechgroup.com/contact/',
    type: 'website',
    images: [{ url: 'https://ziontechgroup.com/og-contact.svg', width: 1200, height: 630, alt: 'Contact Zion Tech Group' }],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <LocalBusinessJsonLd />
      <div className="container-page">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From AI strategy to cloud infrastructure and automation — free discovery call, same-day proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Info</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-purple-400 font-medium">Phone:</span>
                  <a href="tel:+13024640950" className="text-slate-300 hover:text-purple-400 transition block mt-1">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Email:</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-purple-400 transition break-all block mt-1">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Address:</span>
                  <p className="text-slate-300 mt-1">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Hours:</span>
                  <p className="text-slate-300 mt-1">Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/configurator/" className="btn-primary w-full text-center block py-2">
                  Get Custom Proposal →
                </Link>
                <Link href="/services/" className="btn-secondary w-full text-center block py-2">
                  Browse All Services
                </Link>
                <a href="tel:+13024640950" className="btn-secondary w-full text-center block py-2">
                  ☎ Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="cta-section text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Something Great</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need AI integration, IT infrastructure, or a custom software solution,
            we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-8 py-3">
              ☎ +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-8 py-3">
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
