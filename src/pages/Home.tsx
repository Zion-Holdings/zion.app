

import { ServicesShowcase } from '../components/ServicesShowcase';

export function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Matrix Rain Background */}
      <div className="matrix-rain-container fixed inset-0 pointer-events-none z-0">
        <div className="matrix-rain"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden z-10">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 bg-neural-network opacity-30"></div>
          
          {/* Quantum Field Effect */}
          <div className="absolute inset-0 quantum-field"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic-text">
                Transform Your Business
              </span>
              <br />
              <span className="neon-text">With AI & Tech</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
              designed to propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="neon-button px-8 py-4 text-white rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300">
                Explore Services
              </button>
              <button className="cyber-card px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats with Futuristic Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "AI Services", icon: "🤖", delay: "0s" },
                { number: "100+", label: "Micro SAAS Solutions", icon: "💻", delay: "0.2s" },
                { number: "24/7", label: "IT Support", icon: "🔧", delay: "0.4s" }
              ].map((stat, index) => (
                <div key={index} className="cyber-card text-center p-6 animate-fade-in-up" style={{ animationDelay: stat.delay }}>
                  <div className="text-4xl mb-2 animate-quantum-float">{stat.icon}</div>
                  <div className="text-3xl font-bold holographic-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        
        {/* New Futuristic Elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-300 rounded-full animate-cyber-spin"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-neon-breathe"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-quantum-shift"></div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative z-10">
        {/* Neural Network Background */}
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        
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
                description: "Call us anytime for immediate assistance"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation"
              }
            ].map((method, index) => (
              <div key={index} className="cyber-card text-center p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-quantum-float">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-3 whitespace-pre-line">{method.contact}</p>
                <p className="text-gray-400">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="neon-button px-10 py-4 text-white rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 relative z-10">
        {/* Quantum Field Background */}
        <div className="absolute inset-0 quantum-field opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 holographic-text">
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
                description: "Stay ahead with the latest AI and emerging technologies"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations"
              }
            ].map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-quantum-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section - Success Metrics */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 holographic-text">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Uptime Guarantee", icon: "🔄" },
              { metric: "500+", label: "Projects Delivered", icon: "✅" },
              { metric: "50+", label: "Enterprise Clients", icon: "🏢" },
              { metric: "24/7", label: "Support Available", icon: "🆘" }
            ].map((item, index) => (
              <div key={index} className="cyber-card text-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-2 animate-quantum-float">{item.icon}</div>
                <div className="text-3xl font-bold neon-text mb-2">{item.metric}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Futuristic Section - Technology Showcase */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative z-10">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 matrix-rain-container">
          <div className="matrix-rain"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the most advanced technologies to deliver innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI & Machine Learning", icon: "🧠", color: "from-cyan-500 to-blue-500" },
              { name: "Blockchain & Web3", icon: "⛓️", color: "from-purple-500 to-pink-500" },
              { name: "Quantum Computing", icon: "⚛️", color: "from-green-500 to-teal-500" },
              { name: "IoT & Edge Computing", icon: "🌐", color: "from-orange-500 to-red-500" }
            ].map((tech, index) => (
              <div key={index} className="cyber-card text-center p-6 group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl animate-quantum-float`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
