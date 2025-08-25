import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Server, 
  Database, 
  Cloud, 
  Network, 
  Shield, 
  Zap, 
  Building, 
  Globe, 
  Cpu, 
  HardDrive 
} from 'lucide-react';

export default function ITInfrastructure() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure design, deployment, and management across AWS, Azure, and Google Cloud platforms.",
      icon: Cloud,
      features: ["Multi-cloud strategy", "Cost optimization", "Auto-scaling", "Disaster recovery"]
    },
    {
      title: "Network Architecture & Security",
      description: "Enterprise-grade network design with advanced security protocols, load balancing, and high availability solutions.",
      icon: Network,
      features: ["SDN implementation", "Load balancing", "Traffic optimization", "Security protocols"]
    },
    {
      title: "Data Center Solutions",
      description: "Modern data center design with virtualization, containerization, and hybrid cloud integration capabilities.",
      icon: Server,
      features: ["Virtualization", "Containerization", "Hybrid cloud", "Resource optimization"]
    },
    {
      title: "Database Management Systems",
      description: "High-performance database solutions with optimization, backup strategies, and real-time monitoring.",
      icon: Database,
      features: ["Performance tuning", "Backup strategies", "Real-time monitoring", "Scalability"]
    },
    {
      title: "Enterprise Storage Solutions",
      description: "Scalable storage infrastructure with data deduplication, compression, and intelligent tiering.",
      icon: HardDrive,
      features: ["Data deduplication", "Compression", "Intelligent tiering", "High availability"]
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Infrastructure that grows with your business needs",
      icon: Zap
    },
    {
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems",
      icon: Shield
    },
    {
      title: "Performance",
      description: "Optimized infrastructure for maximum efficiency",
      icon: Cpu
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance",
      icon: Shield
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant infrastructure for medical data",
      icon: Building
    },
    {
      name: "Finance",
      description: "PCI DSS compliant financial infrastructure",
      icon: Building
    },
    {
      name: "Manufacturing",
      description: "IoT-ready industrial infrastructure",
      icon: Building
    },
    {
      name: "Retail",
      description: "E-commerce optimized infrastructure",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="IT Infrastructure - Zion Tech Group" 
        description="Comprehensive IT infrastructure solutions including cloud management, network architecture, data centers, and enterprise storage."
        tags={["IT infrastructure", "cloud management", "network architecture", "data centers", "enterprise storage", "virtualization"]}
        url="https://ziontechgroup.com/services/it-infrastructure"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Infrastructure
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Foundation for Digital Success
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Build robust, scalable, and secure IT infrastructure that powers your business transformation 
            and enables seamless digital operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Infrastructure Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From cloud management to data center solutions, we provide end-to-end IT infrastructure 
              services that drive business efficiency and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Infrastructure Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade IT infrastructure designed for modern business needs.
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

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored infrastructure solutions designed for the unique requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {industry.description}
                </p>
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
            Let us help you build a robust, scalable, and secure IT foundation that drives your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}