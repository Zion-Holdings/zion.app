import Link from "next/link";

export const metadata = {
  title: "Zion OS - Sovereign AI-Powered Digital Economies Platform | Zion Tech Group",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
  keywords: "Zion OS, digital economy, blockchain, governance, marketplace, deployment, sovereign, AI-powered, Zion Tech Group",
};

export default function ZionOSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Zion OS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Launch sovereign AI-powered digital economies with one click. 
            Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/multiverse/launch" className="btn-primary text-lg px-8 py-4">
              Launch Your Economy
            </Link>
            <Link href="/docs" className="btn-secondary text-lg px-8 py-4">
              View Documentation
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of Digital Economies
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Zion OS is a revolutionary platform that enables anyone to create, deploy, 
                and manage sovereign digital economies powered by artificial intelligence. 
                Our unified deployment protocol makes it possible to launch complex 
                economic systems in minutes, not months.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're building a decentralized marketplace, launching a DAO, 
                or creating a new token ecosystem, Zion OS provides all the tools you need 
                to succeed in the digital economy revolution.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-click deployment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered governance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Built-in security
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Zion OS provides a complete toolkit for launching and managing sovereign digital economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace & Jobs</h3>
              <p className="text-gray-400">
                Complete marketplace infrastructure with job posting, talent matching, and project management.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Governance</h3>
              <p className="text-gray-400">
                Intelligent governance systems with DAO voting, proposal management, and automated decision-making.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Token Systems</h3>
              <p className="text-gray-400">
                Flexible token economics with rewards, staking, and multi-currency support for your economy.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identity & KYC</h3>
              <p className="text-gray-400">
                Secure identity verification with KYC/AML compliance and Web3 wallet integration.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
              <p className="text-gray-400">
                ZionGPT integration, resume builders, and AI moderation systems for enhanced user experience.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
              <p className="text-gray-400">
                Pick and choose the features you need. Deploy only what matters for your specific use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Zion OS Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to launch your sovereign digital economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Configure</h3>
              <p className="text-gray-400">
                Use our intuitive launch wizard to configure your economy's parameters, 
                including governance rules, token economics, and marketplace settings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploy</h3>
              <p className="text-gray-400">
                Click deploy and watch as Zion OS automatically creates your infrastructure, 
                smart contracts, and governance systems in minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-gray-400">
                Your economy is ready to go! Start inviting users, launching projects, 
                and building your digital community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're a startup, enterprise, or community, Zion OS has you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Startups & Entrepreneurs</h3>
              <p className="text-gray-400 mb-4">
                Launch innovative business models with built-in governance, 
                token economics, and marketplace infrastructure.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Enterprises</h3>
              <p className="text-gray-400 mb-4">
                Transform traditional business models with AI-powered governance 
                and decentralized marketplace capabilities.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Communities & DAOs</h3>
              <p className="text-gray-400 mb-4">
                Build thriving communities with transparent governance, 
                fair token distribution, and collaborative decision-making.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Freelancers & Creators</h3>
              <p className="text-gray-400 mb-4">
                Access global opportunities through decentralized marketplaces 
                with built-in reputation and payment systems.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Investors & Traders</h3>
              <p className="text-gray-400 mb-4">
                Participate in emerging digital economies with transparent 
                governance and liquid token markets.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Researchers & Academics</h3>
              <p className="text-gray-400 mb-4">
                Study and experiment with new economic models in a 
                controlled, scalable environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Proven Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Zion OS leverages the latest blockchain and AI technologies for maximum performance and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">
                Built for scale with sub-second transaction times
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">
                Multi-layer security with audit trails
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">🌐</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interoperable</h3>
              <p className="text-gray-400 text-sm">
                Works with existing blockchain networks
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400 text-sm">
                Intelligent governance and automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Digital Economy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of sovereign, AI-powered digital economies. 
              Deploy in minutes, scale infinitely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/multiverse/launch" className="btn-primary text-lg px-8 py-4">
                Start Deployment
              </Link>
              <Link href="/admin/instances" className="btn-secondary text-lg px-8 py-4">
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}