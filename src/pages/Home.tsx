

import { ServicesShowcase } from '../components/ServicesShowcase';

export function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Futuristic Background Elements */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>
      
      <div className="neural-lines">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 futuristic-bg">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Tech</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
              designed to propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="quantum-button text-lg px-8 py-4">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border animate-neon-border-glow">
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "AI Services", icon: "🤖", color: "neon-text" },
                { number: "100+", label: "Micro SAAS Solutions", icon: "💻", color: "neon-text-purple" },
                { number: "24/7", label: "IT Support", icon: "🔧", color: "neon-text-pink" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up futuristic-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-4xl mb-2 animate-quantum-float">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping animate-energy-pulse"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse animate-energy-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce animate-energy-pulse"></div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📱",
                title: "Phone",
                contact: "+1 302 464 0950",
                description: "Call us anytime for immediate assistance",
                color: "neon-text"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message",
                color: "neon-text-purple"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation",
                color: "neon-text-pink"
              }
            ].map((method, index) => (
              <div key={index} className="text-center p-8 futuristic-card hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-quantum-float">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className={`font-medium mb-3 whitespace-pre-line ${method.color}`}>{method.contact}</p>
                <p className="text-gray-400">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="quantum-button text-lg px-10 py-4">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Stay ahead with the latest AI and emerging technologies",
                color: "neon-text"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                color: "neon-text-purple"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                color: "neon-text-pink"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                color: "neon-text"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                color: "neon-text-purple"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                color: "neon-text-pink"
              }
            ].map((feature, index) => (
              <div key={index} className="futuristic-card hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-quantum-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className={`mt-4 text-sm ${feature.color} animate-neon-pulse`}>
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Innovation Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Leading the Future of Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum computing to AI consciousness, we're pioneering the next generation of technological breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="futuristic-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text-purple">Quantum Computing</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionary quantum computing solutions that process information at speeds unimaginable with classical computers.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span>Explore Quantum Solutions</span>
                  <span className="animate-pulse">→</span>
                </div>
              </div>
              
              <div className="futuristic-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text-pink">AI Consciousness</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI systems that develop self-awareness and autonomous decision-making capabilities.
                </p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <span>Discover AI Consciousness</span>
                  <span className="animate-pulse">→</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 futuristic-card flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-quantum-entanglement">🧠</div>
                  <p className="text-white text-lg">The Future is Now</p>
                </div>
              </div>
              
              {/* Floating tech elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-cyan-500/20 rounded-full animate-float"></div>
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-500/20 rounded-full animate-float animation-delay-1000"></div>
              <div className="absolute top-1/2 left-5 w-8 h-8 bg-blue-500/20 rounded-full animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
