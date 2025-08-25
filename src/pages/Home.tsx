
import React from 'react';
import { SEO } from "@/components/SEO";
import { ServicesShowcase } from '../components/ServicesShowcase';
// EnhancedServicesShowcase may not exist in all branches; keep Home compiling
// import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import { AdvancedServicesShowcase } from '../components/AdvancedServicesShowcase';
import { InnovativeServicesShowcase } from '../components/InnovativeServicesShowcase';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Zion Tech Group - Transform Your Business With AI & Tech"
        description="Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services designed to propel your business into the future."
        canonical="https://ziontechgroup.com"
      />
      
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

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "100+", label: "AI Services", icon: "🤖", color: "from-cyan-400 to-blue-400" },
                { number: "150+", label: "Micro SAAS Solutions", icon: "💻", color: "from-blue-400 to-purple-400" },
                { number: "24/7", label: "IT Support", icon: "🔧", color: "from-purple-400 to-pink-400" },
                { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-4">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
      </section>

      {/* Advanced Services Showcase */}
      <AdvancedServicesShowcase />

      {/* Innovative Services Showcase */}
      <InnovativeServicesShowcase />

      {/* Original Services Showcase */}
      <ServicesShowcase />
      
      {/* Enhanced Services Showcase (optional) */}
      {/* <EnhancedServicesShowcase /> */}

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>?
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
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation",
                color: "from-purple-500 to-pink-500"
              }
            ].map((method, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-3 whitespace-pre-line group-hover:text-cyan-300 transition-colors duration-300">{method.contact}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                description: "Machine learning, NLP, computer vision, and predictive analytics",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🔗",
                title: "Blockchain",
                description: "Smart contracts, decentralized applications, and secure transactions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "☁️",
                title: "Cloud Computing",
                description: "AWS, Azure, Google Cloud, and hybrid cloud solutions",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🌐",
                title: "IoT & Edge",
                description: "Connected devices, edge computing, and real-time analytics",
                color: "from-green-500 to-teal-500"
              }
            ].map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{tech.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
