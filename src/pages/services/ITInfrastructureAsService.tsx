import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Target,
  Database,
  Network,
  HardDrive,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  Monitor,
  AlertTriangle,
  FileText,
  Building,
  Lock,
  Wifi,
  Activity
} from 'lucide-react';

export default function ITInfrastructureAsService() {
  const features = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure management with multi-cloud support and optimization",
      icon: Cloud,
      benefits: ["Multi-cloud support", "Auto-scaling", "Cost optimization", "Performance monitoring"]
    },
    {
      title: "Network Security & Firewall",
      description: "Advanced network security with next-generation firewalls and threat protection",
      icon: Shield,
      benefits: ["Next-gen firewalls", "Threat detection", "VPN services", "DDoS protection"]
    },
    {
      title: "Data Center Services",
      description: "Enterprise-grade data center services with high availability and disaster recovery",
      icon: Server,
      benefits: ["High availability", "Disaster recovery", "Backup solutions", "Redundancy"]
    },
    {
      title: "Database Management",
      description: "Professional database administration and optimization for all major database systems",
      icon: Database,
      benefits: ["Performance tuning", "Backup management", "Security hardening", "Monitoring"]
    },
    {
      title: "24/7 Monitoring & Support",
      description: "Round-the-clock infrastructure monitoring with proactive issue resolution",
      icon: Monitor,
      benefits: ["Real-time monitoring", "Proactive alerts", "24/7 support", "SLA guarantees"]
    },
    {
      title: "Compliance & Governance",
      description: "Comprehensive compliance frameworks and governance for regulated industries",
      icon: Lock,
      benefits: ["SOC 2 compliance", "GDPR support", "Industry standards", "Audit trails"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: 499,
      period: "month",
      description: "Perfect for small businesses with basic infrastructure needs",
      features: [
        "Basic cloud infrastructure",
        "Standard security",
        "Email support",
        "Basic monitoring",
        "Monthly backups",
        "Standard SLA"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 1299,
      period: "month",
      description: "Ideal for growing businesses with advanced infrastructure requirements",
      features: [
        "Advanced cloud infrastructure",
        "Enhanced security",
        "Priority support",
        "Advanced monitoring",
        "Daily backups",
        "Enhanced SLA",
        "Disaster recovery",
        "Performance optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "For large organizations requiring enterprise-grade infrastructure",
      features: [
        "Enterprise cloud infrastructure",
        "Maximum security",
        "24/7 dedicated support",
        "Real-time monitoring",
        "Continuous backups",
        "Premium SLA",
        "Custom solutions",
        "Multi-region support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const services = [
    {
      category: "Cloud Services",
      items: [
        "AWS/Azure/GCP management",
        "Cloud migration",
        "Cost optimization",
        "Auto-scaling",
        "Load balancing",
        "CDN services"
      ],
      icon: Cloud
    },
    {
      category: "Security Services",
      items: [
        "Firewall management",
        "Intrusion detection",
        "Vulnerability scanning",
        "Security audits",
        "Compliance management",
        "Incident response"
      ],
      icon: Shield
    },
    {
      category: "Network Services",
      items: [
        "Network design",
        "VPN management",
        "Bandwidth optimization",
        "Traffic analysis",
        "Network monitoring",
        "Performance tuning"
      ],
      icon: Network
    },
    {
      category: "Data Services",
      items: [
        "Database administration",
        "Backup management",
        "Data recovery",
        "Storage optimization",
        "Data migration",
        "Archiving solutions"
      ],
      icon: Database
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Uptime guarantee",
      icon: Zap
    },
    {
      metric: "50%",
      description: "Cost reduction",
      icon: TrendingUp
    },
    {
      metric: "24/7",
      description: "Expert support",
      icon: Users
    },
    {
      metric: "100%",
      description: "Compliance ready",
      icon: Shield
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      requirements: ["HIPAA compliance", "High availability", "Data security", "Disaster recovery"],
      icon: Building
    },
    {
      name: "Finance",
      requirements: ["PCI DSS compliance", "Real-time monitoring", "Fraud detection", "Audit trails"],
      icon: Building
    },
    {
      name: "E-commerce",
      requirements: ["Scalability", "Performance", "Security", "CDN optimization"],
      icon: Building
    },
    {
      name: "Manufacturing",
      requirements: ["IoT integration", "Real-time data", "Predictive maintenance", "Supply chain"],
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="IT Infrastructure as a Service - Zion Tech Group" 
        description="Comprehensive IT infrastructure management services. Cloud solutions, security, monitoring, and 24/7 support to keep your business running smoothly."
        keywords="IT infrastructure, cloud services, network security, data center, managed services, infrastructure management"
        canonical="https://ziontechgroup.com/services/it-infrastructure-as-service"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan mr-4">
              <span className="text-zion-cyan font-semibold">IT Infrastructure</span>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
              <span className="text-zion-purple font-semibold">as a Service</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Infrastructure as a Service
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Managed Infrastructure Solutions
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive IT infrastructure management services that provide reliability, security, 
            and performance while reducing costs and complexity for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Managed Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our managed infrastructure services deliver enterprise-grade reliability and performance 
              while reducing your operational burden and costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Infrastructure Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform provides end-to-end infrastructure management with enterprise-grade 
              security, performance, and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From cloud management to security and monitoring, we provide comprehensive 
              infrastructure services to meet all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3 text-center">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-zion-slate flex items-start">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that best fits your infrastructure needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-zion-slate mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${plan.price}
                    <span className="text-lg text-zion-slate font-normal">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
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
              Our infrastructure services are tailored to meet the unique requirements and 
              compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3 text-center">
                  {industry.name}
                </h3>
                <ul className="space-y-2 mb-4">
                  {industry.requirements.map((requirement, idx) => (
                    <li key={idx} className="text-sm text-zion-slate flex items-start">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
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
              Built on industry-leading technologies and platforms to deliver maximum 
              performance, security, and reliability.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Cloud Platforms
                  </h3>
                  <p className="text-zion-slate text-sm">
                    AWS, Azure, Google Cloud, and hybrid cloud solutions for maximum flexibility.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Security Tools
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Next-generation firewalls, IDS/IPS, and advanced threat protection.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Monitoring Tools
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Enterprise-grade monitoring and alerting for proactive issue resolution.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Database Systems
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Support for all major database platforms with optimization expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that trust us with their critical infrastructure. 
            Start your free trial today and experience the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}