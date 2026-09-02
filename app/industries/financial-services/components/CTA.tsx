// app/industries/financial-services/components/CTA.tsx
import { MessageSquare, Calendar, Phone, Mail } from 'lucide-react';

export default function FinancialServicesCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm font-medium mb-6">
            Ready to Transform Your Financial Operations?
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Let{' '}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              {' '}
            </span>{' '}
            Schedule Your Free AI Consultation
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our financial AI experts will analyze your current operations and recommend the perfect AI solutions to reduce risk, increase revenue, and ensure compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Book a Consultation</h3>
            <p className="text-slate-400 text-sm mb-4">15-minute free discovery call</p>
            <a
              href="https://calendly.com/kleber-ziontechgroup"
              className="btn-primary text-sm"
            >
              Schedule Now
            </a>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Call Us</h3>
            <p className="text-slate-400 text-sm mb-4">Direct line to our team</p>
            <a
              href="tel:+13024640950"
              className="btn-secondary text-sm"
            >
              +1 302 464 0950
            </a>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Email Us</h3>
            <p className="text-slate-400 text-sm mb-4">Get a custom proposal</p>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="btn-secondary text-sm"
            >
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">
            Get Your Custom AI Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';