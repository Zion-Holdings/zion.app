import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const EnterpriseSolutions = () => {
  const enterpriseServices = [
    {
      icon: Building2,
      title: "Enterprise Architecture",
      description: "Design and implement scalable enterprise architectures that support your business growth.",
      features: ["Scalable infrastructure", "Microservices architecture", "API-first design"],
      path: "/enterprise-architecture"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Transform your organization with modern digital technologies and processes.",
      features: ["Process automation", "Workflow optimization", "Change management"],
      path: "/digital-transformation"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Protect your enterprise with comprehensive security solutions and compliance frameworks.",
      features: ["Zero-trust security", "Compliance management", "Threat detection"],
      path: "/enterprise-security"
    },
    {
      icon: Zap,
      title: "Cloud & DevOps",
      description: "Accelerate development and deployment with modern cloud and DevOps practices.",
      features: ["Multi-cloud strategy", "CI/CD pipelines", "Infrastructure as code"],
      path: "/cloud-devops-solutions"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Build and manage global infrastructure that serves customers worldwide.",
      features: ["Multi-region deployment", "CDN optimization", "Global load balancing"],
      path: "/global-infrastructure"
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      description: "Unlock insights from your enterprise data with advanced analytics and reporting.",
      features: ["Real-time dashboards", "Predictive analytics", "Data governance"],
      path: "/enterprise-analytics"
    }
  ];

  const benefits = [
    "Scalable and flexible solutions",
    "Enterprise-grade security",
    "24/7 support and monitoring",
    "Compliance and governance",
    "Cost optimization",
    "Future-proof architecture"
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions for
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your enterprise with scalable, secure, and innovative solutions designed 
              to drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Enterprise Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            From architecture design to implementation and ongoing support, we provide end-to-end 
            enterprise solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <service.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.path}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light">
              Experience enterprise-grade solutions that deliver measurable results and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-zion-cyan flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            We have deep experience across multiple industries, understanding the unique challenges 
            and opportunities each sector presents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <Star className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can help you achieve your strategic objectives 
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;