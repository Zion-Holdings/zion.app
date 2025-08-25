import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Dna, 
  Globe, 
  Home, 
  Scale, 
  Shield, 
  Leaf, 
  TrendingUp,
  Zap,
  Cpu,
  Eye,
  Rocket
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';

export default function InnovativeMicroSaasServices() {
  const categories = [
    {
      name: "AI & Content Creation",
      icon: Brain,
      description: "Revolutionary AI-powered platforms for content generation and marketing automation",
      count: 1
    },
    {
      name: "Blockchain & Web3",
      icon: Globe,
      description: "Next-generation blockchain solutions and NFT marketplaces",
      count: 1
    },
    {
      name: "IoT & Smart Home",
      icon: Home,
      description: "Intelligent IoT platforms for smart home automation and energy management",
      count: 1
    },
    {
      name: "AI & Legal Tech",
      icon: Scale,
      description: "AI-powered legal document analysis and compliance solutions",
      count: 1
    },
    {
      name: "Cybersecurity & Quantum",
      icon: Shield,
      description: "Future-proof cybersecurity with post-quantum cryptography",
      count: 1
    },
    {
      name: "AI & Healthcare",
      icon: Eye,
      description: "Advanced AI platforms for medical diagnostics and healthcare",
      count: 1
    },
    {
      name: "Sustainability & Energy",
      icon: Leaf,
      description: "Comprehensive platforms for energy management and sustainability",
      count: 1
    },
    {
      name: "AI & FinTech",
      icon: TrendingUp,
      description: "Intelligent financial planning and wealth management platforms",
      count: 1
    }
  ];

  const benefits = [
    {
      title: "Cutting-Edge Innovation",
      description: "Access to the latest emerging technologies and breakthrough solutions",
      icon: Rocket
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with future-ready technology solutions",
      icon: Zap
    },
    {
      title: "Scalable Solutions",
      description: "Built for growth with enterprise-grade architecture and performance",
      icon: TrendingUp
    },
    {
      title: "Expert Support",
      description: "Dedicated support team with deep expertise in emerging technologies",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group" 
        description="Cutting-edge micro SAAS solutions featuring AI, blockchain, IoT, quantum computing, and emerging technologies for forward-thinking businesses."
        keywords="innovative micro SAAS, AI services, blockchain solutions, IoT platforms, quantum computing, emerging technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/innovative-micro-saas-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Micro SAAS Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Future-Ready Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS services that leverage the latest emerging technologies including AI, 
            blockchain, quantum computing, IoT, and more. Transform your business with innovative solutions designed 
            for the future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Technology Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our innovative micro SAAS services span across cutting-edge technology domains, 
              providing comprehensive solutions for modern business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-zion-slate mb-3">
                  {category.description}
                </p>
                <span className="inline-block bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">
                  {category.count} Service{category.count !== 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our most cutting-edge micro SAAS solutions that are transforming industries 
              and enabling new possibilities for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">
                    ${service.price}
                  </span>
                  <span className="text-sm text-zion-slate">
                    {service.pricingModel}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-zion-slate">
                    Market Price: {service.marketPrice}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-zion-blue-light text-zion-blue-dark text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-2 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Innovative Services?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of cutting-edge technology solutions designed to 
              accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our innovative services leverage the latest technologies and frameworks to deliver 
              exceptional performance, scalability, and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "AI/ML", "Blockchain", "Quantum Computing", "IoT", "Edge Computing", "Cloud Native",
              "Microservices", "API-First", "Real-time", "Scalable", "Secure", "Compliant"
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Proven Results & ROI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our innovative micro SAAS services deliver measurable business impact and 
              exceptional return on investment for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">300%+</div>
              <p className="text-lg text-zion-slate">Average ROI within 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">80%</div>
              <p className="text-lg text-zion-slate">Reduction in operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">10x</div>
              <p className="text-lg text-zion-slate">Faster time to market</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Innovate with Cutting-Edge Technology?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our innovative micro SAAS services that leverage 
            the latest emerging technologies. Stay ahead of the competition and future-proof your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Innovation Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Contact us: <strong>+1 302 464 0950</strong> | <strong>kleber@ziontechgroup.com</strong></p>
            <p>Visit: <strong>https://ziontechgroup.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}