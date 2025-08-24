import { 
  Rocket, 
  Settings, 
  Globe, 
  Users, 
  Sparkles,
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-16">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-blue-500/20 rounded-full">
              <Globe className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Zion OS
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Launch sovereign AI-powered digital economies with one click. 
            Build the future of decentralized governance and economic systems.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-blue-400">100+</div>
            <div className="text-sm text-white/60">Ecosystems Launched</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-green-400">50+</div>
            <div className="text-sm text-white/60">Countries Supported</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-sm text-white/60">AI-Powered</div>
          </div>
        </div>
      </div>

      {/* Main Actions Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Launch Wizard Card */}
          <div className="group relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/30 rounded-xl">
                  <Rocket className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Launch Wizard</h2>
                  <p className="text-blue-200/80">Quick Start</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Spin up a new instance with marketplace, governance, identity, and more. 
                Our guided wizard makes deployment effortless.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>AI-powered configuration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Pre-built templates</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Instant deployment</span>
                </div>
              </div>
              
              <a 
                href="/multiverse/launch" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 group-hover:bg-blue-500 shadow-lg hover:shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Admin Instances Card */}
          <div className="group relative bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/30 rounded-xl">
                  <Settings className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Admin Instances</h2>
                  <p className="text-emerald-200/80">Management</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Manage deployed instances, API keys, and governance. 
                Monitor performance and scale your ecosystems efficiently.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Instance monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>API key management</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Governance controls</span>
                </div>
              </div>
              
              <a 
                href="/admin/instances" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 group-hover:bg-emerald-500 shadow-lg hover:shadow-xl"
              >
                <span>Manage Instances</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion OS?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Built for the future of decentralized economies and governance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-white/70 text-sm">Deploy complete ecosystems in minutes, not months</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Sovereign</h3>
            <p className="text-white/70 text-sm">Full control over your digital economy and governance</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-white/70 text-sm">Intelligent automation and optimization built-in</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
            <p className="text-white/70 text-sm">Grow from startup to enterprise seamlessly</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 text-center py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the revolution of sovereign digital economies. 
            Launch your first instance in under 5 minutes.
          </p>
          <a 
            href="/multiverse/launch" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Rocket className="w-6 h-6" />
            <span>Launch Your Ecosystem</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}