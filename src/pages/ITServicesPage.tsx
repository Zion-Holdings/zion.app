import React, { useState } from 'react';
import { 
  Server, Cloud, Shield, Database, Wifi, Lock, Brain, Zap, Rocket, Globe, 
  Building, Users, BarChart3, Palette, Code, Monitor, Smartphone, Tablet, 
  Printer, Scanner, Microphone, Headphones, Gamepad2, Watch, Thermometer, 
  Lightbulb, Battery, Leaf, Target, TrendingUp, ArrowRight, CheckCircle, 
  Star, Clock, DollarSign, Phone, Mail, MapPin, ChevronRight, Settings,
  Cpu, Network, HardDrive, Router, Firewall, Backup, Recovery, Analytics,
  Automation, Integration, Migration, Optimization, Maintenance, Support,
  X
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceCategories = [
    {
      id: 'infrastructure',
      name: 'Infrastructure & Cloud',
      icon: <Server className="w-6 h-6" />,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      description: 'Intelligent automation and data insights',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'devops',
      name: 'DevOps & Automation',
      icon: <Zap className="w-6 h-6" />,
      description: 'Streamlined development and deployment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: <Database className="w-6 h-6" />,
      description: 'Data management and business intelligence',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'digital',
      name: 'Digital Transformation',
      icon: <Globe className="w-6 h-6" />,
      description: 'Modernize your business operations',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const itServices = [
    // Infrastructure & Cloud Services
    {
      id: 1,
      name: "Cloud Migration & Strategy",
      category: "infrastructure",
      description: "Comprehensive cloud migration planning and execution for enterprise applications",
      features: [
        "Cloud readiness assessment",
        "Migration strategy development",
        "Application modernization",
        "Cost optimization",
        "Performance monitoring",
        "Disaster recovery planning"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability",
        "Enhanced performance",
        "Better security",
        "24/7 availability",
        "Faster deployment"
      ],
      pricing: "Custom",
      duration: "8-16 weeks",
      expertise: "Senior Cloud Architects",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Managed IT Services",
      category: "infrastructure",
      description: "Complete IT infrastructure management and monitoring for businesses",
      features: [
        "24/7 network monitoring",
        "Proactive maintenance",
        "Help desk support",
        "Security management",
        "Backup and recovery",
        "Performance optimization"
      ],
      benefits: [
        "Reduced IT overhead",
        "Improved uptime",
        "Better security",
        "Cost predictability",
        "Expert support",
        "Scalable solutions"
      ],
      pricing: "From $2,500/month",
      duration: "Ongoing",
      expertise: "IT Operations Specialists",
      technologies: ["Monitoring Tools", "Automation", "Cloud Platforms", "Security Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "Network Infrastructure Design",
      category: "infrastructure",
      description: "Enterprise-grade network architecture and implementation",
      features: [
        "Network assessment",
        "Architecture design",
        "Implementation",
        "Security integration",
        "Performance testing",
        "Documentation"
      ],
      benefits: [
        "Improved performance",
        "Enhanced security",
        "Better scalability",
        "Reduced downtime",
        "Future-proof design",
        "Compliance ready"
      ],
      pricing: "From $15,000",
      duration: "4-8 weeks",
      expertise: "Network Engineers",
      technologies: ["Cisco", "Juniper", "Aruba", "SD-WAN", "WiFi 6", "5G"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Cybersecurity Services
    {
      id: 4,
      name: "Cybersecurity Assessment",
      category: "security",
      description: "Comprehensive security evaluation and vulnerability assessment",
      features: [
        "Security audit",
        "Penetration testing",
        "Vulnerability scanning",
        "Risk assessment",
        "Compliance review",
        "Security roadmap"
      ],
      benefits: [
        "Identify vulnerabilities",
        "Improve security posture",
        "Meet compliance requirements",
        "Reduce risk exposure",
        "Build customer trust",
        "Protect brand reputation"
      ],
      pricing: "From $8,000",
      duration: "2-4 weeks",
      expertise: "Security Analysts",
      technologies: ["Nessus", "Metasploit", "Burp Suite", "Wireshark", "Nmap"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Security Operations Center (SOC)",
      category: "security",
      description: "24/7 security monitoring and incident response services",
      features: [
        "Real-time monitoring",
        "Threat detection",
        "Incident response",
        "Security analytics",
        "Compliance reporting",
        "Threat intelligence"
      ],
      benefits: [
        "24/7 protection",
        "Faster response times",
        "Reduced incident impact",
        "Compliance assurance",
        "Expert security team",
        "Proactive defense"
      ],
      pricing: "From $5,000/month",
      duration: "Ongoing",
      expertise: "Security Engineers",
      technologies: ["SIEM", "EDR", "SOAR", "Threat Intel", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI & ML Services
    {
      id: 6,
      name: "AI Strategy & Implementation",
      category: "ai-ml",
      description: "Strategic AI planning and implementation for business transformation",
      features: [
        "AI readiness assessment",
        "Strategy development",
        "Use case identification",
        "Technology selection",
        "Implementation planning",
        "ROI analysis"
      ],
      benefits: [
        "Competitive advantage",
        "Process automation",
        "Better decision making",
        "Cost reduction",
        "Improved efficiency",
        "Innovation leadership"
      ],
      pricing: "From $25,000",
      duration: "12-24 weeks",
      expertise: "AI Specialists",
      technologies: ["TensorFlow", "PyTorch", "Azure ML", "AWS SageMaker", "Python"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Machine Learning Models",
      category: "ai-ml",
      description: "Custom ML model development and deployment",
      features: [
        "Data preparation",
        "Model development",
        "Training & validation",
        "Deployment",
        "Monitoring",
        "Maintenance"
      ],
      benefits: [
        "Predictive insights",
        "Automated processes",
        "Data-driven decisions",
        "Scalable solutions",
        "Continuous improvement",
        "Competitive edge"
      ],
      pricing: "From $15,000",
      duration: "8-16 weeks",
      expertise: "ML Engineers",
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "MLflow", "Kubernetes"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // DevOps Services
    {
      id: 8,
      name: "CI/CD Pipeline Setup",
      category: "devops",
      description: "Automated development and deployment pipelines",
      features: [
        "Pipeline design",
        "Automation setup",
        "Testing integration",
        "Deployment automation",
        "Monitoring setup",
        "Documentation"
      ],
      benefits: [
        "Faster deployments",
        "Reduced errors",
        "Better quality",
        "Team productivity",
        "Faster feedback",
        "Scalable processes"
      ],
      pricing: "From $12,000",
      duration: "4-8 weeks",
      expertise: "DevOps Engineers",
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "Infrastructure as Code",
      category: "devops",
      description: "Automated infrastructure provisioning and management",
      features: [
        "Infrastructure design",
        "Code development",
        "Testing & validation",
        "Deployment automation",
        "Monitoring setup",
        "Documentation"
      ],
      benefits: [
        "Consistent deployments",
        "Faster provisioning",
        "Better scalability",
        "Reduced errors",
        "Version control",
        "Disaster recovery"
      ],
      pricing: "From $18,000",
      duration: "6-12 weeks",
      expertise: "DevOps Engineers",
      technologies: ["Terraform", "Ansible", "CloudFormation", "ARM Templates"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Data Services
    {
      id: 10,
      name: "Data Architecture & Strategy",
      category: "data",
      description: "Comprehensive data strategy and architecture design",
      features: [
        "Data assessment",
        "Architecture design",
        "Strategy development",
        "Technology selection",
        "Implementation planning",
        "Governance setup"
      ],
      benefits: [
        "Better data quality",
        "Improved insights",
        "Regulatory compliance",
        "Cost optimization",
        "Scalable solutions",
        "Data-driven decisions"
      ],
      pricing: "From $20,000",
      duration: "8-16 weeks",
      expertise: "Data Architects",
      technologies: ["Snowflake", "Databricks", "AWS Redshift", "Azure Synapse"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "Business Intelligence & Analytics",
      category: "data",
      description: "Data visualization and business intelligence solutions",
      features: [
        "Data modeling",
        "Dashboard development",
        "Report automation",
        "Analytics setup",
        "User training",
        "Maintenance"
      ],
      benefits: [
        "Better insights",
        "Faster decisions",
        "Automated reporting",
        "Data democratization",
        "Performance tracking",
        "Strategic planning"
      ],
      pricing: "From $15,000",
      duration: "6-12 weeks",
      expertise: "BI Developers",
      technologies: ["Power BI", "Tableau", "Qlik", "Looker", "SQL", "Python"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Digital Transformation
    {
      id: 12,
      name: "Digital Transformation Consulting",
      category: "digital",
      description: "Strategic guidance for digital business transformation",
      features: [
        "Current state assessment",
        "Transformation roadmap",
        "Technology strategy",
        "Change management",
        "Implementation support",
        "Success measurement"
      ],
      benefits: [
        "Modern operations",
        "Competitive advantage",
        "Improved efficiency",
        "Better customer experience",
        "Cost reduction",
        "Future readiness"
      ],
      pricing: "From $35,000",
      duration: "16-32 weeks",
      expertise: "Digital Transformation Consultants",
      technologies: ["Cloud", "AI/ML", "IoT", "Automation", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Settings className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zion-blue-dark to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-zion-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-zion-cyan/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            Enterprise IT Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent mb-6 animate-neon-pulse">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services designed to transform your business operations, 
            enhance security, and drive innovation through cutting-edge technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{itServices.length}+</div>
              <div className="text-zion-slate-light text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">6</div>
              <div className="text-zion-slate-light text-sm">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? 'all' : category.id)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 shadow-2xl shadow-zion-cyan/20'
                    : 'border-zion-cyan/20 bg-black/40 hover:border-zion-cyan/40 hover:bg-black/60'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-zion-cyan text-sm font-medium">
                  <span>View Services</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {selectedCategory === 'all' ? 'All Services' : `${serviceCategories.find(cat => cat.id === selectedCategory)?.name} Services`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:bg-black/60 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center text-white`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan-light transition-colors mb-2">
                      {service.name}
                    </h3>
                    <div className="px-3 py-1 text-xs font-semibold rounded-full text-zion-cyan bg-zion-cyan bg-opacity-20 border border-zion-cyan border-opacity-30">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Key Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span>Expertise: {service.expertise}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30 rounded-lg">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-black/60 via-zion-blue-dark/60 to-black/60 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transform Your IT</span>?
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Let our expert team help you modernize your infrastructure, enhance security, 
                and drive innovation through cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:kleber@ziontechgroup.com`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
                
                <a 
                  href={`tel:+13024640950`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{selectedService.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <Star className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-zion-cyan/10 rounded-xl border border-zion-cyan/20">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{selectedService.pricing}</div>
                  <div className="text-sm text-zion-slate-light">Pricing</div>
                </div>
                <div className="text-center p-4 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
                  <div className="text-2xl font-bold text-zion-purple mb-2">{selectedService.duration}</div>
                  <div className="text-sm text-zion-slate-light">Duration</div>
                </div>
                <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">{selectedService.expertise}</div>
                  <div className="text-sm text-zion-slate-light">Expertise</div>
                </div>
              </div>
              
              <div className="border-t border-zion-cyan/20 pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`mailto:${selectedService.contactInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Request Quote
                  </a>
                  
                  <a 
                    href={`tel:${selectedService.contactInfo.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ITServicesPage;