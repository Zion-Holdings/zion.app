import Head from 'next/head';
import Link from 'next/link';
import Landing from '../components/Landing';
import DynamicReportLinks from '../components/DynamicReportLinks';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Cloud Automation & AI Innovation</title>
        <meta name="description" content="Discover autonomous cloud automations, AI-powered systems, and cutting-edge technology solutions. Live monitoring, self-healing systems, and comprehensive reporting." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Cloud Automation & AI Innovation" />
        <meta property="og:description" content="Discover autonomous cloud automations, AI-powered systems, and cutting-edge technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="relative">
        <Landing />
      </div>
      
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Quick Access Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Quick Access</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Navigate quickly to key sections and discover our comprehensive features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link 
                href="/automation"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Automation Hub
                </h3>
                <p className="text-white/70 text-sm">Live autonomous systems & monitoring</p>
              </Link>
              
              <Link 
                href="/site-health"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Site Health
                </h3>
                <p className="text-white/70 text-sm">Performance & diagnostics dashboard</p>
              </Link>
              
              <Link 
                href="/explore"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Explore Features
                </h3>
                <p className="text-white/70 text-sm">Discover all capabilities & benefits</p>
              </Link>
              
              <Link 
                href="/search"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🔎</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Search
                </h3>
                <p className="text-white/70 text-sm">Find content across the entire site</p>
              </Link>
            </div>
            
            <div className="text-center">
              <Link 
                href="/explore"
                className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All Features
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Reports Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Insights & Reports</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest research, insights, and technical content
            </p>
          </div>
          
          <DynamicReportLinks 
            limit={6} 
            showCategory={true}
            className="mb-8"
          />
          
          <div className="text-center">
            <Link 
              href="/reports"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Reports
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-slate-900/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover what makes Zion Tech Group the leader in autonomous cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
              <p className="text-white/70 mb-4">
                Self-healing, self-optimizing cloud infrastructure that runs 24/7 without human intervention
              </p>
              <Link 
                href="/automation"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-white/70 mb-4">
                Advanced analytics and machine learning for predictive maintenance and optimization
              </p>
              <Link 
                href="/reports"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Explore Reports →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Developer Tools</h3>
              <p className="text-white/70 mb-4">
                Comprehensive component library and development resources for modern applications
              </p>
              <Link 
                href="/component-library"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Browse Components →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and organizations using Zion Tech Group's autonomous solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explore"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Exploring
            </Link>
            
            <Link 
              href="/automation"
              className="border border-white/20 hover:border-cyan-400/50 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:bg-white/5"
            >
              View Live Systems
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}