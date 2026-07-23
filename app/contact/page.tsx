// app/contact/page.tsx
import Link from 'next/link';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessStructuredData';

const CALENDLY_URL = 'https://calendly.com/kleber-ziontechgroup';

export const metadata = {
  title: 'Contact Zion Tech Group | Free IT Consultation',
  description: 'Call, email, or book a free consultation with Zion Tech Group. AI, cloud, automation, and cybersecurity services for SMBs and enterprises.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <LocalBusinessJsonLd />
      <div className="container-page">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
            Free discovery call, same-day proposal. From AI strategy to cloud infrastructure and automation — reach out and we’ll move fast.
          </p>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Prefer tools first? Try our <Link href="/free-services-and-tools/" className="text-purple-400 underline underline-offset-4 hover:text-purple-300">free services and tools</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-sm">
            <span className="text-slate-400">Popular intents:</span>
            {[
              { label: 'AI Observability & AIOps', href: '/services/ai-observability-aiops' },
              { label: 'Incident Response Automation', href: '/services/ai-incident-response-and-oncall-automation' },
              { label: 'Email Deliverability Recovery', href: '/services/ai-email-bounce-and-deliverability-recovery' },
              { label: 'On-Site Rapid Response', href: '/services/it-onsite-rapid-response' },
              { label: 'Managed IT / MSP Automation', href: '/services/ai-managed-it-msp-automation' },
              { label: 'Micro-SaaS Acceleration', href: '/services/ai-micro-saas-sales-accelerator' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="btn-secondary text-sm px-3 py-2">
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-400 font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-slate-300 text-lg hover:text-purple-400 transition">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-purple-400 font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 text-lg hover:text-purple-400 transition">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-purple-400 font-semibold mb-1">Address</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link href="/configurator/" className="btn-primary w-full text-center block">
                Get Your Custom Proposal →
              </Link>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary w-full text-center block">
                📅 Book Free Consultation
              </a>
              <a href="tel:+13024640950" className="btn-secondary w-full text-center block">
                ☎ Call Now
              </a>
              <a href="https://wa.me/13024640950?text=Hi%20Kleber%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="btn-secondary w-full text-center block">
                💬 WhatsApp
              </a>
              <Link href="/services/" className="btn-secondary w-full text-center block">
                Browse Services
              </Link>
            </div>
          </div>
        </div>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Something Great</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We offer free IT tools, readiness audits, and same-day proposals to make starting easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg">
              ☎ +1 302 464 0950
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-secondary text-lg">
              📅 Book a Consultation
            </a>
            <Link href="/free-services-and-tools/" className="btn-secondary text-lg">
              🛠 Free Services & Tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
