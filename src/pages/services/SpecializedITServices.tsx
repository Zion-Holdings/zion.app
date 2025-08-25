import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  BarChart3,
  Target,
  Award,
  Lock,
  Eye,
  MessageSquare,
  FileText,
  Code,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export default function SpecializedITServices() {
  const itServices = [
    {
      title: "Enterprise Cloud Infrastructure",
      description: "Comprehensive cloud infrastructure solutions designed for enterprise-scale operations with high availability, scalability, and security.",
      icon: Cloud,
      price: "$3,500",
      pricingModel: "monthly",
      features: [
        "Multi-cloud architecture design",
        "High availability clustering",
        "Auto-scaling infrastructure",
        "Disaster recovery planning",
        "Performance optimization",
        "24/7 monitoring and support"
      ],
      benefits: [
        "Reduce infrastructure costs by 40-60%",
        "Improve system availability to 99.99%",
        "Faster deployment and scaling",
        "Enhanced security and compliance",
        "Global reach and performance",
        "Reduced maintenance overhead"
      ],
      marketPrice: "$3,500 - $25,000/month",
      roi: "300-500% within 18 months",
      innovationLevel: "Advanced cloud-native architecture"
    },
    {
      title: "Advanced Cybersecurity Solutions",
      description: "Next-generation cybersecurity platform with AI-powered threat detection, zero-trust architecture, and comprehensive compliance management.",
      icon: Shield,
      price: "$4,200",
      pricingModel: "monthly",
      features: [
        "AI-powered threat detection",
        "Zero-trust security model",
        "Advanced endpoint protection",
        "Network security monitoring",
        "Compliance automation",
        "Incident response orchestration"
      ],
      benefits: [
        "Reduce security incidents by 85%",
        "Improve threat detection by 95%",
        "Automated compliance management",
        "24/7 security monitoring",
        "Reduced security costs",
        "Enhanced brand protection"
      ],
      marketPrice: "$4,200 - $20,000/month",
      roi: "400-700% within 24 months",
      innovationLevel: "Revolutionary AI-driven security"
    },
    {
      title: "Data Center Modernization",
      description: "Transform legacy data centers into modern, efficient, and scalable infrastructure with advanced automation and management capabilities.",
      icon: Server,
      price: "$5,000",
      pricingModel: "monthly",
      features: [
        "Legacy system migration",
        "Infrastructure automation",
        "Energy efficiency optimization",
        "Capacity planning and scaling",
        "Performance monitoring",
        "Disaster recovery implementation"
      ],
      benefits: [
        "Reduce operational costs by 50%",
        "Improve energy efficiency by 40%",
        "Enhanced system reliability",
        "Faster deployment capabilities",
        "Better resource utilization",
        "Future-ready infrastructure"
      ],
      marketPrice: "$5,000 - $30,000/month",
      roi: "250-400% within 24 months",
      innovationLevel: "Advanced infrastructure modernization"
    },
    {
      title: "Network Infrastructure & SDN",
      description: "Software-defined networking solutions that provide flexible, scalable, and intelligent network infrastructure for modern enterprises.",
      icon: Network,
      price: "$2,800",
      pricingModel: "monthly",
      features: [
        "Software-defined networking",
        "Network virtualization",
        "Traffic optimization",
        "Security segmentation",
        "Performance monitoring",
        "Automated provisioning"
      ],
      benefits: [
        "Reduce network complexity by 60%",
        "Improve network performance by 45%",
        "Faster network deployment",
        "Enhanced security isolation",
        "Cost-effective scaling",
        "Centralized management"
      ],
      marketPrice: "$2,800 - $15,000/month",
      roi: "350-500% within 18 months",
      innovationLevel: "Advanced software-defined networking"
    },
    {
      title: "Database & Data Management",
      description: "Comprehensive database solutions including design, optimization, migration, and management for enterprise data operations.",
      icon: Database,
      price: "$2,200",
      pricingModel: "monthly",
      features: [
        "Database design and optimization",
        "Data migration services",
        "Performance tuning",
        "Backup and recovery",
        "Data governance",
        "Compliance management"
      ],
      benefits: [
        "Improve database performance by 70%",
        "Reduce data management costs by 40%",
        "Enhanced data security",
        "Better compliance adherence",
        "Faster data access",
        "Improved data quality"
      ],
      marketPrice: "$2,200 - $12,000/month",
      roi: "300-450% within 12 months",
      innovationLevel: "Advanced data management technology"
    },
    {
      title: "DevOps & CI/CD Automation",
      description: "End-to-end DevOps solutions with continuous integration, deployment automation, and infrastructure as code for rapid software delivery.",
      icon: Code,
      price: "$1,800",
      pricingModel: "monthly",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as code",
        "Container orchestration",
        "Monitoring and alerting",
        "Security scanning",
        "Performance testing"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality by 60%",
        "Faster time to market",
        "Reduced deployment risks",
        "Better collaboration",
        "Enhanced reliability"
      ],
      marketPrice: "$1,800 - $10,000/month",
      roi: "400-600% within 12 months",
      innovationLevel: "Advanced DevOps automation"
    }
  ];

  const specializedSolutions = [
    {
      name: "Healthcare IT Solutions",
      description: "HIPAA-compliant IT infrastructure for healthcare organizations",
      icon: Users,
      features: ["HIPAA compliance", "Patient data security", "Medical device integration", "Telemedicine support"]
    },
    {
      name: "Financial Services IT",
      description: "Regulatory-compliant IT solutions for financial institutions",
      icon: BarChart3,
      features: ["PCI DSS compliance", "Fraud detection", "High-frequency trading", "Risk management"]
    },
    {
      name: "Manufacturing IT",
      description: "Industry 4.0 IT solutions for smart manufacturing",
      icon: Cpu,
      features: ["IoT integration", "Predictive maintenance", "Quality control", "Supply chain optimization"]
    },
    {
      name: "Retail IT Solutions",
      description: "Omnichannel IT infrastructure for modern retail",
      icon: Globe,
      features: ["E-commerce integration", "Inventory management", "Customer analytics", "POS systems"]
    }
  ];

  const technologies = [
    {
      name: "Cloud Computing",
      description: "AWS, Azure, Google Cloud, and hybrid cloud solutions",
      icon: Cloud,
      capabilities: ["Scalability", "High availability", "Cost optimization", "Global reach"]
    },
    {
      name: "Virtualization",
      description: "VMware, Hyper-V, and container-based virtualization",
      icon: Server,
      capabilities: ["Resource optimization", "Isolation", "Flexibility", "Cost reduction"]
    },
    {
      name: "Network Security",
      description: "Firewalls, VPNs, and advanced threat protection",
      icon: Shield,
      capabilities: ["Threat prevention", "Access control", "Monitoring", "Compliance"]
    },
    {
      name: "Data Analytics",
      description: "Big data processing and business intelligence",
      icon: BarChart3,
      capabilities: ["Real-time processing", "Predictive analytics", "Data visualization", "Insights generation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Specialized IT Services - Zion Tech Group" 
        description="Comprehensive specialized IT services including cloud infrastructure, cybersecurity, data center modernization, and enterprise solutions."
        keywords="IT services, cloud infrastructure, cybersecurity, data center, network infrastructure, DevOps, enterprise IT"
        canonical="https://ziontechgroup.com/services/specialized-it-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Specialized IT Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Enterprise-Grade IT Solutions for Modern Business
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your IT infrastructure with our specialized services designed for enterprise-scale operations, 
            featuring cutting-edge technology, security, and performance optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore IT Solutions
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule IT Consultation
            </button>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive IT Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our specialized IT services cover every aspect 
              of modern enterprise technology needs and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
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
                
                {/* Pricing */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.price}
                    </div>
                    <div className="text-sm text-zion-slate">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate">Market Price:</span>
                    <span className="text-zion-blue-dark font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate">ROI:</span>
                    <span className="text-green-600 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zion-slate">Innovation Level:</span>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-xs text-yellow-600 font-semibold">
                        {service.innovationLevel.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Specialized IT Services - ${service.title}"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific IT Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored IT solutions designed for the unique challenges and compliance requirements 
              of different industries and business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {solution.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {solution.description}
                </p>
                <div className="space-y-1">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-zion-slate">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Core IT Technologies
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our IT services leverage cutting-edge technologies and methodologies to deliver 
              robust, scalable, and secure solutions for enterprise environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {tech.name}
                </h3>
                <p className="text-zion-slate mb-4">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.capabilities.map((capability, idx) => (
                    <div key={idx} className="text-sm text-zion-slate">
                      • {capability}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group for IT Services?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge IT technology with proven expertise to deliver 
              robust solutions that drive real business transformation and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Expertise</h3>
              <p className="text-zion-cyan/80">
                Proven track record with enterprise-scale IT implementations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance for enterprise environments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance Optimized</h3>
              <p className="text-zion-cyan/80">
                High-performance solutions designed for scalability and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support from our global team of IT experts
              </p>
            </div>
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
            Contact our team of IT experts to discuss how our specialized IT services can 
            drive your digital transformation and operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start IT Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule IT Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-zion-blue-dark">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-zion-blue-dark">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-zion-blue-dark">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-zion-blue-dark">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}