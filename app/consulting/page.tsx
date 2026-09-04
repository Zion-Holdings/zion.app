import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '../utils/seoConstants';

export const metadata = {
  title: 'Book a Free IT/AI Strategy Consultation | Zion Tech Group',
  description:
    'Schedule a free strategy session with Kleber Garcia and Zion Tech Group. Discuss AI integration, automation, cloud, cybersecurity, enterprise solutions, and custom proposals. Available in-person in Middletown, DE or remote.',

};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Book a Free Strategy Session</h1>
          <p className="text-slate-300 max-w-3xl mx-auto mb-8">
            Tell us about your goals. We’ll recommend the right services, architecture, and timeline — then
            deliver a same-day proposal or schedule a live session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Calendly/book strategy */}
          <a
            href="https://calendly.com/kleber-ziontechgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/50 transition group"
          >
            <div className="text-3xl mb-3">🗓️</div>
            <h2 className="text-xl font-semibold text-white mb-2">Book a Strategy Session</h2>
            <p className="text-slate-400 text-sm mb-4">
              Reserve a free 30-minute consulting session with Kleber Garcia. Remote or in-person options available.
            </p>
            <span className="text-purple-300 font-semibold text-sm group-hover:text-white transition">
              Open Calendar →
            </span>
          </a>

          {/* Call */}
          <a
            href="tel:+13024640950"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/50 transition group"
          >
            <div className="text-3xl mb-3">📞</div>
            <h2 className="text-xl font-semibold text-white mb-2">Call Now</h2>
            <p className="text-slate-400 text-sm mb-4">
              Talk directly with our team to discover the right fit for your business today.
            </p>
            <span className="text-purple-300 font-semibold text-sm group-hover:text-white transition">
              +1 302 464 0950 →
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Consulting%20Request%20-%20Strategy%20Session"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/50 transition group"
          >
            <div className="text-3xl mb-3">✉️</div>
            <h2 className="text-xl font-semibold text-white mb-2">Email Your Brief</h2>
            <p className="text-slate-400 text-sm mb-4">
              Share your priorities, budget, and timeline. We’ll reply with a same-day proposal roadmap.
            </p>
            <span className="text-purple-300 font-semibold text-sm group-hover:text-white transition">
              kleber@ziontechgroup.com →
            </span>
          </a>
        </div>

        <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold text-lg mb-3">What to expect</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• 30-minute discovery session</li>
              <li>• Service fit review and architecture options</li>
              <li>• Pricing scope and timeline estimate</li>
              <li>• Same-day proposal or follow-up briefing</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold text-lg mb-3">Visit us</h3>
            <p className="text-slate-300 text-sm">
              {CONTACT_INFO.address.street}<br />
              {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zipCode}
            </p>
            <p className="text-slate-400 text-sm mt-3">
              Remote sessions are available for teams worldwide.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/services/" className="btn-secondary px-4 py-2 text-sm">Browse Services</Link>
              <Link href="/contact/" className="btn-primary px-4 py-2 text-sm">Get a Custom Proposal</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
