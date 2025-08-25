import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Server, 
  Shield, 
  Network, 
  Database, 
  Cloud, 
  Zap, 
  Cpu, 
  Globe,
  TrendingUp,
  Lock,
  Monitor,
  Rocket
} from 'lucide-react';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../../data/advancedITInfrastructureServices';

export default function AdvancedITInfrastructure() {
  const categories = [
    {
      name: "Edge Computing",
      icon: Server,
      description: "Distributed edge computing infrastructure for low-latency applications",
      count: 1
    },
    {
      name: "Quantum-Ready",
      icon: Cpu,
      description: "Future-proof infrastructure designed for quantum computing integration",
      count: 1
    },
    {
      name: "Data Center Management",
      icon: Database,
      description: "AI-powered autonomous data center management and optimization",
      count: 1
    },
    {
      name: "Zero-Trust Security",
      icon: Shield,
      description: "Comprehensive zero-trust security architecture and implementation",
      count: 1
    },
    {
      name: "Hyperconverged",
      icon: Cloud,
      description: "Integrated compute, storage, and networking solutions",
      count: 1
    },
    {
      name: "SD-WAN",
      icon: Network,
      description: "Software-defined wide area network optimization and management",
      count: 1
    },
    {
      name: "Container Orchestration",
      icon: Globe,
      description: "Enterprise-grade container orchestration and management",
      count: 1
    },
    {
      name: "AI-Powered NOC",
      icon: Monitor,
      description: "Intelligent network operations center with AI automation",
      count: 1
    }
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Performance",
      description: "Built for mission-critical applications with 99.99% uptime guarantee",
      icon: Zap
    },
    {
      title: "Future-Proof Architecture",
      description: "Designed to evolve with emerging technologies and business needs",
      icon: Rocket
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% through intelligent automation",
      icon: TrendingUp
    },
    {
      title: "Security First",
      description: "Multi-layered security with compliance and threat protection",
      icon: Lock
    }
  ];

  const technologies = [
    "Kubernetes", "Docker", "VMware", "OpenStack", "AWS", "Azure", "GCP",
    "Python", "Go", "Rust", "TensorFlow", "Prometheus", "Grafana", "Ansible"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Advanced IT Infrastructure Services - Zion Tech Group" 
        description="Enterprise-grade IT infrastructure solutions including edge computing, quantum-ready systems, autonomous data center management, and zero-trust security architecture."
        keywords="advanced IT infrastructure, edge computing, quantum computing, data center management, zero-trust security, hyperconverged infrastructure, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/advanced-it-infrastructure"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced IT Infrastructure Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Enterprise-Grade Solutions for the Future
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your IT infrastructure with our advanced solutions featuring edge computing, 
            quantum-ready systems, autonomous data center management, and zero-trust security. 
            Built for scalability, performance, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Solutions
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Infrastructure Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our advanced IT infrastructure services cover the complete spectrum of modern 
              enterprise infrastructure needs, from edge computing to quantum-ready systems.
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

      {/* Featured Solutions */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Infrastructure Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover our most advanced IT infrastructure solutions that are transforming 
              how enterprises build, manage, and scale their technology operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANCED_IT_INFRASTRUCTURE_SERVICES.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-white" />
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
              Why Choose Our Advanced Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of enterprise-grade infrastructure solutions designed to 
              accelerate your digital transformation and business growth.
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
              Enterprise Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our advanced infrastructure solutions leverage industry-leading technologies and 
              frameworks to deliver exceptional performance, reliability, and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
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

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Performance & Reliability Metrics
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our advanced infrastructure solutions deliver measurable performance improvements 
              and exceptional reliability for mission-critical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">99.99%</div>
              <p className="text-lg text-zion-slate">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">90%</div>
              <p className="text-lg text-zion-slate">Reduction in Downtime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">40%</div>
              <p className="text-lg text-zion-slate">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">10x</div>
              <p className="text-lg text-zion-slate">Performance Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Enterprise Compliance & Security
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our infrastructure solutions meet the highest standards for enterprise security, 
              compliance, and data protection across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "SOC 2 Type II", "ISO 27001", "PCI DSS", "HIPAA",
              "FedRAMP", "NIST", "GDPR", "CCPA"
            ].map((compliance, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {compliance}
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Upgrade your IT infrastructure with our advanced solutions designed for enterprise 
            performance, security, and scalability. Future-proof your technology operations today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Infrastructure Assessment
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