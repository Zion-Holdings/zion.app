import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Consultation',
  description:
    'Book a free 30-minute AI strategy consultation. Discuss your use case, get a tailored approach, and receive a no-obligation proposal.',
  alternates: { canonical: 'https://ziontechgroup.com/free-consultation/' },
};

const STEPS = [
  { step: '1', title: 'Book a Call', desc: 'Pick a time that works for you. 30 minutes, no obligation.' },
  { step: '2', title: 'Strategy Review', desc: 'We review your challenge and map AI/ML opportunities to real outcomes.' },
  { step: '3', title: 'Custom Proposal', desc: 'Receive a scoped proposal with timeline, budget, and success metrics.' },
];

export default function FreeConsultationPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            No-Obligation Consultation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Free AI Strategy Consultation
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Talk to a Zion Tech Group AI architect about your specific challenge.
            We'll assess your data, infrastructure, and goals, then recommend a practical
            roadmap with clear success metrics — no sales pitch, no obligation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((s) => (
            <div key={s.step} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Email kleber@ziontechgroup.com or use the form below. We typically respond within 2 hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Free AI Consultation"
              className="btn-primary px-8 py-3 text-lg"
            >
              ✉ Email Us
            </a>
            <Link href="/contact/" className="btn-secondary px-8 py-3 text-lg">
              📞 Contact Page
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500">
            Available Monday–Friday, 9am–6pm EST. Based in the US with remote-friendly scheduling.
          </p>
        </div>
      </div>
      </PageWrapper>
      );
      }
