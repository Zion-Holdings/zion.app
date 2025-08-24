import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-zion-slate-light mb-8">
          Enterprise Solutions & Micro SAAS Services
        </p>
        <p className="text-lg text-zion-slate-light mb-12 max-w-4xl mx-auto">
          Discover our comprehensive range of enterprise-grade solutions, micro SAAS services, 
          and innovative technology offerings designed to accelerate your business growth. 
          From AI-powered chatbots to quantum computing solutions, we deliver cutting-edge 
          technology that drives real business value.
        </p>
        
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/expanded-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Browse All Services
          </Link>
          <Link to="/contact" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
          <a href="https://ziontechgroup.com" className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Visit Website
          </a>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Service Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
            <p className="text-zion-slate-light mb-6">
              Comprehensive enterprise-grade solutions for large organizations including cloud migration, DevOps automation, and data warehousing
            </p>
            <Link to="/expanded-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Explore Services
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
            <p className="text-zion-slate-light mb-6">
              Cutting-edge artificial intelligence solutions including chatbots, computer vision, predictive analytics, and autonomous systems
            </p>
            <Link to="/ai-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Explore AI
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-zion-slate-light mb-6">
              Enterprise-grade security solutions including threat detection, zero trust architecture, and compliance management
            </p>
            <Link to="/cybersecurity" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Explore Security
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold text-white mb-4">Emerging Tech</h3>
            <p className="text-zion-slate-light mb-6">
              Next-generation technologies including blockchain, quantum computing, IoT platforms, and edge computing solutions
            </p>
            <Link to="/expanded-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Explore Tech
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured Micro SAAS Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💬</span>
              <h3 className="text-xl font-bold text-white">AI Chatbot Platform</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Enterprise-grade AI chatbot with 50+ language support, GPT-4 integration, and 60% cost reduction
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-zion-cyan font-semibold">$299/month</span>
              <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">AI Score: 95</span>
            </div>
            <Link to="/ai-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full block text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔒</span>
              <h3 className="text-xl font-bold text-white">Zero Trust Security</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Comprehensive zero trust implementation with identity verification, micro-segmentation, and continuous monitoring
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-zion-cyan font-semibold">$449/month</span>
              <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">Security: 94</span>
            </div>
            <Link to="/cybersecurity" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full block text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="text-xl font-bold text-white">Predictive Analytics</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Advanced ML platform for business forecasting with 95% accuracy and automated reporting
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-zion-cyan font-semibold">$499/month</span>
              <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">AI Score: 98</span>
            </div>
            <Link to="/ai-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full block text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Zion */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light text-sm">
                Industry veterans with proven track records in AI, cybersecurity, and enterprise solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light text-sm">
                SOC 2 compliant with bank-level security and comprehensive compliance solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
              <p className="text-zion-slate-light text-sm">
                24/7 support across all time zones with local expertise and rapid response times
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light text-sm">
                Measurable ROI and business impact with successful implementations across industries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-3xl mx-auto">
            Let our team of experts help you find the perfect solution for your needs. 
            From micro SAAS services to enterprise solutions, we deliver innovative technology 
            that drives real business value. Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}