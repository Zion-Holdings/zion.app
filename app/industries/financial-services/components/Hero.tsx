// app/industries/financial-services/components/Hero.tsx
import { MessageSquare, Shield, TrendingUp, Calculator } from 'lucide-react';

export default function FinancialServicesHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl" />

      <div className="container-page relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm font-medium mb-6">
            AI-Powered Financial Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your{' '}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Financial Operations
            </span>{' '}
            with AI
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From real-time fraud detection to algorithmic trading, automate compliance, reduce risk, and unlock new revenue streams with enterprise-grade AI solutions designed specifically for financial services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/configurator/"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Custom Proposal
            </a>
            <a
              href="tel:+13024640950"
              className="btn-secondary text-lg px-8 py-4"
            >
              📞 Call: +1 302 464 0950
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Fraud Detection</h3>
              <p className="text-slate-400 text-sm">99.8% accuracy</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Trading AI</h3>
              <p className="text-slate-400 text-sm">25% ROI boost</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Compliance</h3>
              <p className="text-slate-400 text-sm">100% automated</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Customer 360</h3>
              <p className="text-slate-400 text-sm">360° view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}