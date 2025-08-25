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
  Cpu,
  BarChart3,
  Users,
  Lock,
  Rocket,
  Building2
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Micro SAAS Development",
      icon: <Zap className="w-8 h-8" />,
      description: "Scalable software-as-a-service solutions for modern businesses",
      services: [
        "Custom SAAS Platform Development",
        "API Development & Integration",
        "User Management Systems",
        "Subscription & Billing Systems",
        "Multi-tenant Architecture",
        "SAAS Analytics & Reporting"
      ],
      link: "/micro-saas-services"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      description: "Scalable cloud infrastructure and DevOps automation",
      services: [
        "Cloud Migration & Strategy",
        "AWS/Azure/GCP Solutions",
        "Container Orchestration (Kubernetes)",
        "CI/CD Pipeline Automation",
        "Infrastructure as Code",
        "Cloud Security & Compliance"
      ],
      link: "/cloud-devops-solutions"
    },
    {
      title: "Digital Transformation",
      icon: <Rocket className="w-8 h-8" />,
      description: "End-to-end digital transformation consulting and implementation",
      services: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Legacy System Modernization",
        "Change Management",
        "Digital Workplace Solutions",
        "Customer Experience Optimization"
      ],
      link: "/digital-transformation"
    },
    {
      title: "Enterprise Solutions",
      icon: <Building2 className="w-8 h-8" />,
      description: "Enterprise-grade technology solutions for large organizations",
      services: [
        "Enterprise Software Development",
        "System Integration",
        "Data Management & Analytics",
        "Business Process Automation",
        "Enterprise Security Solutions",
        "Scalable Architecture Design"
      ],
      link: "/enterprise-solutions"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Comprehensive security solutions to protect your business",
      services: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Security Architecture Design",
        "Compliance Management (SOC2, ISO)",
        "Incident Response Planning",
        "Security Training & Awareness"
      ],
      link: "/cybersecurity"
    }
  ];

  const emergingTechServices = [
    {
      title: "Quantum Computing",
      description: "Exploring the future of computing with quantum algorithms and solutions",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized solutions and blockchain technology implementation",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things infrastructure and smart device integration",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Edge Computing",
      description: "Distributed computing solutions for real-time data processing",
      icon: <Database className="w-6 h-6" />
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
            Comprehensive technology solutions designed to transform your business, 
            from AI-powered insights to scalable cloud infrastructure.
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
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan rounded-lg flex items-center justify-center mb-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <p className="text-lg text-zion-slate-light text-center max-w-3xl mx-auto mb-12">
            Stay ahead of the curve with our cutting-edge technology solutions that are shaping the future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTechServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team of experienced professionals brings 15+ years of expertise 
                in cutting-edge technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">
                We've successfully delivered 500+ projects across various industries, 
                consistently exceeding client expectations and driving measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade security and compliance standards ensure your data 
                and systems remain protected at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Driven</h3>
              <p className="text-zion-slate-light">
                We stay at the forefront of technology trends, continuously innovating 
                to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with 24/7 support and localized expertise 
                to ensure your success regardless of your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-zion-slate-light">
                Agile development methodologies and efficient processes ensure 
                rapid delivery without compromising quality or security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">
                We analyze your requirements, understand your business goals, 
                and design a tailored solution strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-zion-slate-light">
                Detailed project planning, architecture design, and timeline 
                development to ensure successful execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
              <p className="text-zion-slate-light">
                Agile development with regular updates, testing, and quality 
                assurance to deliver exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-zion-slate-light">
                Smooth deployment, comprehensive training, and ongoing support 
                to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Let's discuss your project requirements and explore how our innovative 
            solutions can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
