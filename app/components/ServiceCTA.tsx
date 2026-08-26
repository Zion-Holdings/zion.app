'use client';

import Link from 'next/link';

interface ServiceCTAProps {
  serviceName?: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="mt-12 mb-16">
      <div className="glass-card text-center bg-gradient-to-br from-purple-900/20 to-pink-900/10 border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          {serviceName
            ? `Let's discuss how ${serviceName} can transform your business.`
            : 'Get a custom-tailored proposal with services matched to your budget and needs.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:kleber@ziontechgroup.com" className="btn-primary text-lg px-8 py-3">
            ✉ Get a Custom Quote
          </a>
          <Link href="/configurator/" className="btn-secondary text-lg px-8 py-3">
            ⚙️ Try the Configurator
          </Link>
          <a href="tel:+13024640950" className="btn-secondary text-lg px-8 py-3">
            ☎ Call +1 302 464 0950
          </a>
        </div>
      </div>
    </section>
  );
}