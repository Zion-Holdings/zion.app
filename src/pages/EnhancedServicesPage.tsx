

export default function EnhancedServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Enhanced Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive suite of advanced technology solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-zion-slate-light mb-4">
                Custom AI solutions including chatbots, predictive analytics, and machine learning models.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $1,500/month</div>
            </div>
            
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-zion-slate-light mb-4">
                Comprehensive security solutions including threat intelligence and zero trust architecture.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $10,000/month</div>
            </div>
            
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-zion-slate-light mb-4">
                Multi-cloud orchestration and infrastructure management solutions.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $8,000/month</div>
            </div>
            
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-zion-slate-light mb-4">
                Real-time data processing and analytics platforms for instant insights.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $15,000/month</div>
            </div>
            
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-zion-slate-light mb-4">
                Progressive web apps and modern web solutions with cutting-edge technologies.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $12,000/project</div>
            </div>
            
            <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-semibold mb-3">Blockchain & Web3</h3>
              <p className="text-zion-slate-light mb-4">
                DeFi platforms and blockchain solutions for the future of finance.
              </p>
              <div className="text-zion-cyan font-semibold">Starting at $30,000/project</div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}