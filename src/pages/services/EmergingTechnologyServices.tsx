import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Dna, 
  Globe, 
  Cpu, 
  Shield, 
  Eye, 
  Zap, 
  Rocket,
  TrendingUp,
  Lock,
  Monitor,
  Atom
} from 'lucide-react';
import { EMERGING_TECHNOLOGY_SERVICES } from '../../data/emergingTechnologyServices';

export default function EmergingTechnologyServices() {
  const categories = [
    {
      name: "Neuromorphic Computing",
      icon: Brain,
      description: "Brain-inspired computing for ultra-efficient AI processing",
      count: 1
    },
    {
      name: "DNA Computing",
      icon: Dna,
      description: "Revolutionary data storage using synthetic DNA molecules",
      count: 1
    },
    {
      name: "Quantum Internet",
      icon: Globe,
      description: "Next-generation quantum internet infrastructure",
      count: 1
    },
    {
      name: "Biocomputing",
      icon: Cpu,
      description: "Computing using biological components and processes",
      count: 1
    },
    {
      name: "Photonic Computing",
      icon: Zap,
      description: "Light-based computing for ultra-fast processing",
      count: 1
    },
    {
      name: "Swarm Robotics",
      icon: Rocket,
      description: "Intelligent multi-robot coordination systems",
      count: 1
    },
    {
      name: "Holographic Computing",
      icon: Eye,
      description: "3D holographic visualization and computing",
      count: 1
    },
    {
      name: "Quantum ML",
      icon: Atom,
      description: "Quantum machine learning acceleration",
      count: 1
    }
  ];

  const benefits = [
    {
      title: "Future-Proof Technology",
      description: "Access to breakthrough technologies that will define the next decade",
      icon: Rocket
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge innovations",
      icon: TrendingUp
    },
    {
      title: "Research Leadership",
      description: "Partner with pioneers in emerging technology development",
      icon: Brain
    },
    {
      title: "Innovation Catalyst",
      description: "Transform your business with revolutionary new capabilities",
      icon: Zap
    }
  ];

  const technologies = [
    "Neuromorphic", "DNA Storage", "Quantum Internet", "Biocomputing",
    "Photonic", "Swarm Robotics", "Holographic", "Quantum ML"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Emerging Technology Services - Zion Tech Group" 
        description="Cutting-edge emerging technology solutions including neuromorphic computing, DNA data storage, quantum internet, biocomputing, and photonic computing platforms."
        keywords="emerging technology, neuromorphic computing, DNA storage, quantum internet, biocomputing, photonic computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/emerging-technology-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Emerging Technology Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Shaping the Future of Technology
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Explore the frontiers of technology with our emerging technology services. From neuromorphic computing 
            and DNA data storage to quantum internet and biocomputing, we're building the future today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Technologies
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Research Partnership
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Technology Frontiers
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our emerging technology services span the cutting edge of scientific innovation, 
              providing access to technologies that will revolutionize industries and society.
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
                  {category.count} Solution{category.count !== 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Emerging Technologies
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover our most revolutionary emerging technology solutions that are pushing 
              the boundaries of what's possible in computing, communication, and data storage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EMERGING_TECHNOLOGY_SERVICES.slice(0, 6).map((service, index) => (
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
                  Explore Technology
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
              Why Choose Emerging Technologies?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of breakthrough technologies that will transform 
              industries and create new possibilities for your business.
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
              Revolutionary Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our emerging technology services leverage breakthrough scientific innovations 
              and cutting-edge research to deliver solutions that were once science fiction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Research & Development Excellence
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our emerging technology services are backed by world-class research and development, 
              ensuring the highest quality and most innovative solutions available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-lg text-zion-slate">Research Partners</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">100+</div>
              <p className="text-lg text-zion-slate">Patents & Publications</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">$10M+</div>
              <p className="text-lg text-zion-slate">R&D Investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our emerging technologies are transforming industries across the spectrum, 
              from healthcare and finance to manufacturing and research.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Healthcare", "Finance", "Manufacturing", "Research",
              "Defense", "Energy", "Transportation", "Education"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
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
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Partner with us to explore and implement the most cutting-edge emerging technologies. 
            Be at the forefront of innovation and transform your business with revolutionary solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Innovation Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Research Partnership
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