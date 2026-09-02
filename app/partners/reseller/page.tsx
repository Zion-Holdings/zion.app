'use client';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reseller Partnerships | Zion Tech Group',
  description: 'Become a Zion reseller partner and sell AI & IT solutions under your brand. Earn up to 40% revenue share, get marketing assets, and access our partner portal.',
  keywords: 'AI reseller, IT solutions partner, white label AI, revenue share, partner program, technology resale',
  alternates: { canonical: '/partners/reseller' },
};

const PROGRAM_DETAILS = {
  title: 'White-Label Reseller Program',
  subtitle: 'Turn our AI solutions into your revenue streams',
  revenueShare: 'Up to 40%',
  setupTime: '7 days',
  support: '24/7 Partner Support',
  
  benefits: [
    {
      title: 'White-Label Solutions',
      description: 'Deliver AI-powered services under your brand. Our technology powers your success.',
      icon: '🏷️'
    },
    {
      title: 'Competitive Revenue Share',
      description: 'Earn up to 40% commission on every deal. No upfront costs or minimum commitments.',
      icon: '💰'
    },
    {
      title: 'Lead Distribution',
      description: 'Get qualified leads in your territory. Our sales team funnels opportunities to you.',
      icon: '📨'
    },
    {
      title: 'Marketing Assets',
      description: 'Access to co-branded materials, sales decks, and automated email sequences.',
      icon: '📢'
    },
    {
      title: 'Dedicated Support',
      description: 'Partner Success Manager, technical onboarding, and priority support queue.',
      icon: '🆘'
    },
    {
      title: 'Training & Certification',
      description: 'Free partner training, certification programs, and technical workshops.',
      icon: '🎓'
    }
  ],
  
  services: [
    'AI Invoice Processing & Automation',
    'AI Customer Support Agents',
    'AI Fraud Detection & Security',
    'Cloud Cost Optimization',
    'Data Analytics & BI Platforms',
    'Workflow Automation Solutions',
    'AI-Powered Marketing Tools',
    'Custom AI Development Services'
  ]
};

const REQUIREMENTS = [
  'Valid business registration',
  'Ability to provide customer support',
  'Access to sales channels or customer base',
  'Commitment to partner program terms'
];

export default function ResellerPartnersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Breadcrumb */}
      <div className="container-page py-4">
        <nav className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/partners" className="hover:text-white">Partners</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-300">Reseller Program</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.15),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-300 text-sm mb-6">
              <span className="text-pink-400">💰</span> Reseller Partnership Program
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Turn Our AI Into Your Revenue
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Become a Zion reseller and earn up to <strong className="text-purple-400">40% revenue share</strong> 
              by selling our enterprise-grade AI & IT solutions under your brand.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">{PROGRAM_DETAILS.revenueShare}</div>
                <div className="text-slate-400 text-sm">Revenue Share</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{PROGRAM_DETAILS.setupTime}</div>
                <div className="text-slate-400 text-sm">Setup Time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-pink-400 mb-2">{PROGRAM_DETAILS.support}</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Simple 4-step process to start earning with our AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', desc: 'Fill out our quick application form. No fees or commitments.' },
              { step: '2', title: 'Onboard', desc: 'Get access to partner portal, training, and marketing assets.' },
              { step: '3', title: 'Sell', desc: 'Promote our solutions to your clients with co-branded materials.' },
              { step: '4', title: 'Earn', desc: 'Receive monthly payouts for every qualified deal you close.' }
            ].map((item, i) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900/20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Benefits
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Everything you need to succeed as a Zion partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_DETAILS.benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services You Can Sell
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access to our complete catalog of AI & IT solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROGRAM_DETAILS.services.map((service) => (
              <div key={service} className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span className="text-white text-sm">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-slate-900/20">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Program Requirements</h2>
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
            <ul className="space-y-3">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-center gap-3">
                  <span className="text-emerald-400 text-lg">✓</span>
                  <span className="text-slate-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            Apply to our reseller program today and start building your AI-powered revenue stream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://calendly.com/kleber-ziontechgroup" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-10 py-4 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              📅 Book a Partner Call
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-lg px-10 py-4 rounded-xl font-semibold hover:border-purple-500/40 transition-all"
            >
              📧 Contact Partnerships
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}