import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Database, 
  Smartphone,
  BarChart3,
  Lock,
  Cpu,
  Network
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-12 h-12" />,
      description: "Cutting-edge artificial intelligence solutions that transform your business operations",
      services: [
        "Custom AI Models",
        "Machine Learning Pipelines",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Assistants"
      ],
      link: "/ai-services",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Micro SAAS Solutions",
      icon: <Zap className="w-12 h-12" />,
      description: "Scalable software-as-a-service applications built for modern businesses",
      services: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Performance Optimization"
      ],
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-12 h-12" />,
      description: "Enterprise-grade cloud infrastructure and development operations",
      services: [
        "AWS/Azure/GCP Setup",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Auto-scaling Solutions"
      ],
      link: "/cloud-devops-solutions",
      color: "from-zion-blue to-zion-cyan"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-12 h-12" />,
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Threat Detection",
        "Incident Response",
        "Security Training"
      ],
      link: "/advanced-cybersecurity-suite",
      color: "from-zion-purple-light to-zion-cyan"
    },
    {
      title: "Digital Transformation",
      icon: <Globe className="w-12 h-12" />,
      description: "End-to-end digital transformation strategies for modern enterprises",
      services: [
        "Process Automation",
        "Legacy System Modernization",
        "Data Migration",
        "Change Management",
        "Digital Strategy Consulting",
        "Technology Roadmapping"
      ],
      link: "/digital-transformation",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Enterprise Solutions",
      icon: <Users className="w-12 h-12" />,
      description: "Large-scale enterprise software and infrastructure solutions",
      services: [
        "ERP Systems",
        "CRM Platforms",
        "Business Intelligence",
        "Data Warehousing",
        "Enterprise Integration",
        "Custom Enterprise Apps"
      ],
      link: "/enterprise-solutions",
      color: "from-zion-blue to-zion-purple-light"
    }
  ];

  const emergingTech = [
    {
      title: "Quantum Computing",
      icon: <Cpu className="w-8 h-8" />,
      description: "Next-generation quantum computing solutions for complex problem-solving"
    },
    {
      title: "Blockchain & Web3",
      icon: <Network className="w-8 h-8" />,
      description: "Decentralized applications and blockchain infrastructure development"
    },
    {
      title: "IoT Solutions",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Internet of Things platforms and connected device management"
    },
    {
      title: "Edge Computing",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Distributed computing solutions for real-time data processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTech.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
                    <p className="text-zion-slate-light">15+ years of experience in cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
                    <p className="text-zion-slate-light">500+ successful projects delivered worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                    <p className="text-zion-slate-light">Built to grow with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-zion-slate-light mb-6">
                Let's discuss your project requirements and create a custom solution that drives results.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/request-quote"
                  className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business Today</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our technology solutions to achieve unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Services;
