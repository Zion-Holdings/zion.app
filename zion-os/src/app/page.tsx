import Link from 'next/link';

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Zion OS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Launch sovereign AI-powered digital economies with one click. 
            <span className="block text-lg text-white/60 mt-2">
              Unified deployment protocol for Zion ecosystems
            </span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/multiverse/launch" 
            className="btn-primary text-lg px-8 py-4"
          >
            🚀 Launch New Instance
          </a>
          <a 
            href="/admin/instances" 
            className="btn-secondary text-lg px-8 py-4"
          >
            📊 View Instances
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🚀</span>
            </div>
            <h3 className="text-xl font-semibold">Launch Wizard</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Spin up a new instance with marketplace, governance, identity, and more. 
            Complete setup in minutes, not days.
          </p>
          <a 
            href="/multiverse/launch" 
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            Get Started →
          </a>
        </div>

        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold">Admin Instances</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Manage deployed instances, API keys, and governance. 
            Full control over your digital economy ecosystem.
          </p>
          <a 
            href="/admin/instances" 
            className="inline-block mt-4 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
          >
            Manage →
          </a>
        </div>

        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🔧</span>
            </div>
            <h3 className="text-xl font-semibold">OS Deployment</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Advanced deployment options with custom configurations. 
            Tailor your instance to specific business needs.
          </p>
          <a 
            href="/admin/os-deploy" 
            className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            Deploy →
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
          <div className="text-white/60 text-sm">Active Instances</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
          <div className="text-white/60 text-sm">Features Available</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-white/60 text-sm">Uptime</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
          <div className="text-white/60 text-sm">Support</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Digital Economy?</h2>
          <p className="text-white/70 mb-6">
            Join the future of autonomous business operations. 
            Deploy your first instance in under 5 minutes.
          </p>
          <a 
            href="/multiverse/launch" 
            className="btn-primary text-lg px-8 py-4"
          >
            Start Building Now
          </a>
        </div>
      </div>
    </div>
  );
}