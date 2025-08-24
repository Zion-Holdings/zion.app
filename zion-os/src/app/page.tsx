import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.",
      features: [
        "ZionGPT Core Integration",
        "Resume Builder + Proposal AI", 
        "Autonomous Decision Engine",
        "AI Moderation System"
      ],
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      icon: "🏪",
      title: "Complete Marketplace",
      description: "Jobs, talent, projects, and token systems create a thriving digital economy ecosystem.",
      features: [
        "Job & Talent Marketplace",
        "Token System + Rewards",
        "On-chain Contract Builder",
        "Multi-currency Support"
      ],
      gradient: "bg-gradient-to-r from-green-600 to-emerald-600"
    },
    {
      icon: "🗳️",
      title: "Governance & DAO",
      description: "Flexible governance from admin control to full DAO systems with dual governance options.",
      features: [
        "DAO Proposal Voting",
        "Dual Governance (Local + Global)",
        "Sovereign Treasury",
        "KYC/AML + ID Verification"
      ],
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      icon: "⚡",
      title: "Enterprise Infrastructure",
      description: "Built for scale with regional dashboards, partner APIs, and white-label solutions.",
      features: [
        "Regional Dashboards",
        "Partner API Access",
        "White-label Vendor Plugin",
        "Web3 Login + DID"
      ],
      gradient: "bg-gradient-to-r from-orange-600 to-red-600"
    },
    {
      icon: "🎓",
      title: "Education & Growth",
      description: "Zion Academy, incubator programs, and grants foster innovation and community growth.",
      features: [
        "Zion Academy",
        "Incubator + Grants",
        "Regional Job Categories",
        "Wage Baselines"
      ],
      gradient: "bg-gradient-to-r from-teal-600 to-cyan-600"
    },
    {
      icon: "🚀",
      title: "One-Click Deployment",
      description: "Launch your complete digital economy in minutes with our unified deployment protocol.",
      features: [
        "Automated Orchestration",
        "CMS Instance Generation",
        "Landing + Auth Flows",
        "Blog + Roadmap Setup"
      ],
      gradient: "bg-gradient-to-r from-indigo-600 to-blue-600"
    }
  ];

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