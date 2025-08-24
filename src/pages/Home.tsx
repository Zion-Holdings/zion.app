

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServicesShowcase } from '../components/ServicesShowcase';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping animation-delay-3000"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
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
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
              >
                Explore Services
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "AI Services", icon: "🤖", delay: "0s" },
                { number: "100+", label: "Micro SAAS Solutions", icon: "💻", delay: "0.2s" },
                { number: "24/7", label: "IT Support", icon: "🔧", delay: "0.4s" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: stat.delay }}
                >
                  <div className="text-4xl mb-2 animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <ServicesShowcase />

      {/* New: AI Innovation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate, optimize, and transform your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Machine Learning",
                description: "Custom ML models for predictive analytics and pattern recognition",
                features: ["Predictive Analytics", "Pattern Recognition", "Data Insights", "Automated Decision Making"]
              },
              {
                icon: "💬",
                title: "Natural Language Processing",
                description: "Advanced text analysis and language understanding capabilities",
                features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Content Generation"]
              },
              {
                icon: "👁️",
                title: "Computer Vision",
                description: "Image and video analysis for automation and quality control",
                features: ["Image Recognition", "Object Detection", "Quality Control", "Process Automation"]
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      {item}
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
                action: "Call Now"
              },
              {
                icon: "✉️",
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                description: "Send us a detailed message",
                action: "Send Email"
              },
              {
                icon: "📍",
                title: "Address",
                contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                description: "Visit our office for in-person consultation",
                action: "Get Directions"
              }
            ].map((method, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-3 whitespace-pre-line">{method.contact}</p>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors font-medium">
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/request-quote"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
                color: "from-red-500/20 to-orange-500/20"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                color: "from-yellow-500/20 to-green-500/20"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                color: "from-blue-500/20 to-indigo-500/20"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                color: "from-green-500/20 to-teal-500/20"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                color: "from-indigo-500/20 to-purple-500/20"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 bg-gradient-to-br ${feature.color} rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Zion Tech Group transformed our business with their AI solutions. Our efficiency increased by 300%!",
                author: "Sarah Johnson",
                position: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "The micro SAAS platform they built for us is exactly what we needed. Highly recommend!",
                author: "Michael Chen",
                position: "CTO, Innovation Labs",
                rating: 5
              },
              {
                quote: "Professional, innovative, and results-driven. They delivered beyond our expectations.",
                author: "Emily Rodriguez",
                position: "Operations Director, Growth Corp",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
