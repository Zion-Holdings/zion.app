

import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import '../styles/futuristic.css';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden futuristic-bg">
        {/* Matrix Rain Background */}
        <div className="matrix-rain"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse quantum-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse quantum-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse quantum-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>

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
              <button className="futuristic-btn px-8 py-4 text-lg transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border">
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "50+", label: "AI Services", icon: "🤖", description: "Cutting-edge AI solutions" },
                { number: "100+", label: "Micro SAAS", icon: "💻", description: "Innovative software solutions" },
                { number: "24/7", label: "IT Support", icon: "🔧", description: "Round-the-clock assistance" },
                { number: "99%", label: "Success Rate", icon: "📈", description: "Proven track record" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up futuristic-card p-6" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-4xl mb-2 quantum-float">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">{stat.number}</div>
                  <div className="text-gray-400 font-medium mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
      </section>

      {/* Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 futuristic-bg">
        <div className="max-w-7xl mx-auto">
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
                features: ["Quantum computing", "Edge AI", "Blockchain solutions"]
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                features: ["2-3 week delivery", "Agile methodology", "Continuous deployment"]
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                features: ["Zero-trust architecture", "Quantum-safe encryption", "SOC 2 compliance"]
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                features: ["AI specialists", "Cybersecurity experts", "DevOps engineers"]
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                features: ["24/7 support", "Multi-timezone teams", "Local compliance"]
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                features: ["99% success rate", "ROI tracking", "Performance metrics"]
              }
            ].map((feature, index) => (
              <div key={index} className="futuristic-card p-6 group hover:transform hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 quantum-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-cyan-400">•</span>
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
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
                availability: "24/7 Support"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message",
                availability: "Response within 2 hours"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation",
                availability: "By appointment"
              }
            ].map((method, index) => (
              <div key={index} className="futuristic-card p-8 text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 quantum-float">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-3 whitespace-pre-line neon-text">{method.contact}</p>
                <p className="text-gray-400 mb-2">{method.description}</p>
                <p className="text-cyan-400 text-sm font-medium">{method.availability}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="futuristic-btn px-10 py-4 text-lg transform hover:scale-105">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="py-20 px-4 futuristic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔮",
                title: "Quantum Computing",
                description: "Next-generation quantum solutions for complex problems",
                status: "Research & Development"
              },
              {
                icon: "🧠",
                title: "Neuromorphic AI",
                description: "Brain-inspired artificial intelligence systems",
                status: "Early Access"
              },
              {
                icon: "🌱",
                title: "Green Tech",
                description: "Sustainable technology solutions for a better future",
                status: "Available Now"
              },
              {
                icon: "⛓️",
                title: "Web3 & DeFi",
                description: "Decentralized finance and blockchain solutions",
                status: "Production Ready"
              }
            ].map((tech, index) => (
              <div key={index} className="futuristic-card p-6 text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 quantum-float">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {tech.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
