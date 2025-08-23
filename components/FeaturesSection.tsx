import React, { useState } from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions that learn, adapt, and evolve with your business needs.",
      color: "from-cyan-500 to-blue-600",
      glow: "glow",
      link: "/services#ai"
    },
    {
      icon: "⚡",
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for performance, security, and seamless integration.",
      color: "from-purple-500 to-pink-600",
      glow: "glow-purple",
      link: "/services#cloud"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security frameworks protecting your digital assets and ensuring compliance.",
      color: "from-green-500 to-emerald-600",
      glow: "glow-green",
      link: "/services#security"
    },
    {
      icon: "📱",
      title: "Digital Transformation",
      description: "End-to-end digital solutions that modernize operations and enhance customer experiences.",
      color: "from-orange-500 to-red-600",
      glow: "glow-orange",
      link: "/services#digital"
    },
    {
      icon: "🌐",
      title: "IoT Solutions",
      description: "Connected device ecosystems that gather data and enable smart decision-making.",
      color: "from-indigo-500 to-purple-600",
      glow: "glow-purple",
      link: "/services#iot"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Powerful insights from your data to drive strategic decisions and optimize performance.",
      color: "from-yellow-500 to-orange-600",
      glow: "glow-yellow",
      link: "/services#analytics"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Core Capabilities
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that transform businesses and drive innovation across industries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                hoveredCard === index ? 'bg-white/10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.glow}`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link transition-colors duration-300"
                >
                  Learn More
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-8 h-8 border border-white/30 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
                         <p className="text-white/80 mb-6 max-w-2xl mx-auto">
               Let&apos;s discuss how our innovative solutions can drive your digital transformation journey.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;