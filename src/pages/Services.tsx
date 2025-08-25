import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database,
  Smartphone,
  Code,
  BarChart3,
  Network,
  Lock,
  Cpu,
  Rocket,
  Target,
  Users,
  Building2
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-zion-cyan to-blue-500",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Scalable software-as-a-service platforms designed for modern businesses",
      icon: <Code className="w-8 h-8" />,
      color: "from-zion-purple-light to-purple-600",
      services: [
        "Custom SAAS Development",
        "API Integration Services",
        "Cloud-Native Applications",
        "Scalable Infrastructure",
        "Multi-Tenant Solutions",
        "Subscription Management"
      ],
      link: "/micro-saas-services"
    },
    {
      title: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and development operations",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Infrastructure as Code",
        "Continuous Integration/Deployment",
        "Cloud Security & Compliance"
      ],
      link: "/cloud-devops-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Incident Response",
        "Compliance Management",
        "Security Training",
        "Threat Intelligence"
      ],
      link: "/advanced-cybersecurity-suite"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services for modern enterprises",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Process Automation",
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Change Management",
        "Technology Roadmapping",
        "Performance Optimization"
      ],
      link: "/digital-transformation"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom enterprise-grade solutions for large organizations",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      services: [
        "Enterprise Software Development",
        "System Integration",
        "Data Management",
        "Business Process Optimization",
        "Enterprise Architecture",
        "Scalability Planning"
      ],
      link: "/enterprise-solutions"
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Automated Reporting"]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Optimize your cloud infrastructure for performance, cost, and security",
      icon: <Network className="w-6 h-6" />,
      features: ["Cost Optimization", "Performance Monitoring", "Security Hardening", "Auto-scaling"]
    },
    {
      title: "Cybersecurity Compliance",
      description: "Achieve and maintain compliance with industry standards and regulations",
      icon: <Lock className="w-6 h-6" />,
      features: ["SOC 2 Compliance", "GDPR Compliance", "HIPAA Compliance", "Regular Audits"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 font-medium transition-colors"
                >
                  Learn More
                  <Zap className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light text-sm">
                15+ years of experience in cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light text-sm">
                500+ successful projects delivered worldwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light text-sm">
                Always at the forefront of technology trends
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light text-sm">
                Round-the-clock technical support and maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
              <div className="space-y-2 text-zion-slate-light text-sm">
                <p>React & Next.js</p>
                <p>Vue.js & Angular</p>
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Backend</h3>
              <div className="space-y-2 text-zion-slate-light text-sm">
                <p>Node.js & Python</p>
                <p>Java & .NET</p>
                <p>Go & Rust</p>
                <p>GraphQL & REST</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Cloud & DevOps</h3>
              <div className="space-y-2 text-zion-slate-light text-sm">
                <p>AWS & Azure</p>
                <p>Docker & Kubernetes</p>
                <p>Terraform & Ansible</p>
                <p>Jenkins & GitLab CI</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">AI & ML</h3>
              <div className="space-y-2 text-zion-slate-light text-sm">
                <p>TensorFlow & PyTorch</p>
                <p>OpenAI & Hugging Face</p>
                <p>Computer Vision</p>
                <p>NLP & LLMs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8">
            Let's discuss your project requirements and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
