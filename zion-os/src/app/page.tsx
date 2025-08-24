import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click. Pioneering the future of autonomous business operations, quantum computing, and AI consciousness evolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/multiverse/launch" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Launch Digital Economy
          </Link>
          <Link 
            href="/services" 
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Revolutionary AI-Powered Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Autonomous Business</h3>
            <p className="opacity-80">Self-managing business operations with advanced AI agents that handle decision-making, process automation, and strategic planning.</p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
            <p className="opacity-80">Next-generation quantum solutions for financial trading, cryptography, and complex computational problems that classical computers cannot solve.</p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Cybersecurity</h3>
            <p className="opacity-80">AI-powered threat detection, automated compliance, and next-generation security protocols to protect your digital assets.</p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Solutions</h3>
            <p className="opacity-80">Decentralized applications, smart contracts, and blockchain infrastructure for secure, transparent, and efficient business operations.</p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Research & Development</h3>
            <p className="opacity-80">Cutting-edge research in AI consciousness, autonomous systems, and the future of human-AI collaboration.</p>
          </div>

          <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
            <p className="opacity-80">Scalable, secure, and intelligent solutions designed for enterprise-level operations and digital transformation.</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Started Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/multiverse/launch" 
            className="p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Launch Wizard</h3>
              <svg className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="opacity-80 mb-4">Spin up a new instance with marketplace, governance, identity, and more. Deploy your digital economy in minutes.</p>
            <div className="text-sm opacity-60">Click to launch →</div>
          </Link>

          <Link 
            href="/admin/instances" 
            className="p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Admin Instances</h3>
              <svg className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="opacity-80 mb-4">Manage deployed instances, API keys, and governance. Monitor performance and scale your operations.</p>
            <div className="text-sm opacity-60">Manage instances →</div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Join the future of autonomous business operations with Zion Tech Group's cutting-edge AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200"
          >
            Contact Sales
          </Link>
          <Link 
            href="/demo" 
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}