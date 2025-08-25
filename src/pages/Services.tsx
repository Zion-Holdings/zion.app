import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions including predictive analytics, natural language processing, and computer vision.",
      features: ["Machine Learning Models", "Predictive Analytics", "NLP Solutions", "Computer Vision"],
      category: "AI/ML"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, compliance, and risk management.",
      features: ["Threat Detection", "Compliance & Audit", "Risk Assessment", "Security Monitoring"],
      category: "Security"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & Infrastructure",
      description: "Cloud migration, infrastructure management, and scalable solutions for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalable Solutions", "DevOps"],
      category: "Cloud"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management"],
      category: "Transformation"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Implementation Planning", "Performance Optimization"],
      category: "Consulting"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Solutions",
      description: "Worldwide technology solutions with local expertise and 24/7 support.",
      features: ["Global Deployment", "Local Expertise", "24/7 Support", "Multi-language Support"],
      category: "Global"
    }
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Government"
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cybersecurity, cloud infrastructure, and digital transformation solutions." />
        <meta name="keywords" content="IT services, AI solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-zion-cyan mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${service.category.toLowerCase()}`}
                    className="text-zion-cyan hover:text-zion-cyan-light flex items-center group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry} className="bg-zion-blue-light/10 rounded-lg p-6 text-center border border-zion-purple/20 hover:border-zion-cyan/40 transition-colors">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Contact our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}