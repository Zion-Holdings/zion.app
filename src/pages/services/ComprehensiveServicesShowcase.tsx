import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Server, 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Rocket,
  Cpu,
  Eye,
  Lock,
  Home
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../../data/advancedITInfrastructureServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../../data/emergingTechnologyServices';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      name: "Innovative Micro SAAS",
      icon: Brain,
      description: "Cutting-edge micro SAAS solutions featuring AI, blockchain, IoT, and emerging technologies",
      services: INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 4),
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Advanced IT Infrastructure",
      icon: Server,
      description: "Enterprise-grade infrastructure solutions including edge computing, quantum-ready systems, and zero-trust security",
      services: ADVANCED_IT_INFRASTRUCTURE_SERVICES.slice(0, 4),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emerging Technologies",
      icon: Atom,
      description: "Revolutionary technologies including neuromorphic computing, DNA storage, and quantum internet",
      services: EMERGING_TECHNOLOGY_SERVICES.slice(0, 4),
      color: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      title: "300%+ Average ROI",
      description: "Our innovative services deliver exceptional return on investment within 6-12 months",
      icon: TrendingUp
    },
    {
      title: "Future-Ready Technology",
      description: "Built with cutting-edge technologies that will define the next decade of innovation",
      icon: Rocket
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with compliance across SOC 2, ISO 27001, HIPAA, and more",
      icon: Shield
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated support team with deep expertise in emerging technologies and enterprise solutions",
      icon: Eye
    }
  ];

  const technologies = [
    "AI/ML", "Blockchain", "Quantum Computing", "IoT", "Edge Computing", "Cloud Native",
    "Neuromorphic", "DNA Storage", "Biocomputing", "Photonic Computing", "Swarm Robotics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Complete showcase of Zion Tech Group's innovative micro SAAS services, advanced IT infrastructure, and emerging technology solutions for forward-thinking businesses."
        keywords="comprehensive services, micro SAAS, IT infrastructure, emerging technology, AI services, blockchain solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Innovation Across Every Technology Domain
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover Zion Tech Group's complete portfolio of cutting-edge services spanning micro SAAS solutions, 
            advanced IT infrastructure, and revolutionary emerging technologies. Transform your business with 
            the most innovative solutions available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services cover every aspect of modern technology needs, from 
              micro SAAS solutions to enterprise infrastructure and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-light to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-4 text-center">
                  {category.name}
                </h3>
                <p className="text-zion-slate mb-6 text-center">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-zion-blue-light">
                      <div>
                        <h4 className="font-semibold text-zion-blue-dark text-sm">
                          {service.title}
                        </h4>
                        <p className="text-xs text-zion-slate">
                          {service.category}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-zion-cyan">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}>
                  View All {category.name} Services
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of working with a technology partner that combines 
              innovation, expertise, and proven results across all service categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {highlight.title}
                </h3>
                <p className="text-zion-slate">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services leverage the most advanced technologies and frameworks available, 
              ensuring exceptional performance, scalability, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-4 text-center hover:shadow-md transition-shadow">
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

      {/* Success Metrics */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Proven Success & Results
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services deliver measurable business impact and exceptional 
              results across all technology domains and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <p className="text-lg text-zion-slate">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-lg text-zion-slate">Technology Domains</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">25+</div>
              <p className="text-lg text-zion-slate">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">99%</div>
              <p className="text-lg text-zion-slate">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services are tailored to meet the unique requirements and 
              compliance needs of different industries and business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Healthcare", "Finance", "Manufacturing", "Retail",
              "Education", "Government", "Technology", "Energy"
            ].map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Explore our comprehensive portfolio of innovative services and discover how 
            Zion Tech Group can accelerate your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Contact us: <strong>+1 302 464 0950</strong> | <strong>kleber@ziontechgroup.com</strong></p>
            <p>Visit: <strong>https://ziontechgroup.com</strong></p>
            <p>Address: <strong>364 E Main St STE 1008, Middletown DE 19709</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}