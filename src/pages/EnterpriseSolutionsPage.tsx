import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Building, Target, Monitor, Zap, ArrowRight, CheckCircle, Star, Clock, Users, Shield, Globe, TrendingUp } from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const enterpriseServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'IT Consulting & Strategy' || 
    service.category === 'Cloud & DevOps' ||
    service.category === 'Cybersecurity'
  );

  const enterpriseSolutions = [
    {
      icon: Building,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies to modernize your business operations.',
      features: ['Process Automation', 'Legacy System Migration', 'Change Management', 'ROI Optimization'],
      price: 'Starting from $50,000'
    },
    {
      icon: Target,
      title: 'Technology Strategy',
      description: 'Comprehensive technology roadmaps aligned with your business objectives.',
      features: ['Technology Assessment', 'Architecture Planning', 'Vendor Selection', 'Implementation Roadmap'],
      price: 'Starting from $25,000'
    },
    {
      icon: Monitor,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal business disruption.',
      features: ['Cloud Assessment', 'Migration Planning', 'Data Migration', 'Performance Optimization'],
      price: 'Starting from $75,000'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions to protect your enterprise assets.',
      features: ['Security Audit', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      price: 'Starting from $100,000'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Regulatory compliance, risk management, and secure digital banking solutions.',
      icon: '🏦',
      challenges: ['Regulatory Compliance', 'Cybersecurity Threats', 'Legacy System Modernization']
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant systems, patient data security, and telemedicine platforms.',
      icon: '🏥',
      challenges: ['Data Privacy', 'Interoperability', 'Regulatory Compliance']
    },
    {
      name: 'Manufacturing',
      description: 'Industry 4.0 solutions, IoT integration, and supply chain optimization.',
      icon: '🏭',
      challenges: ['Operational Efficiency', 'Supply Chain Visibility', 'Quality Control']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel platforms, inventory management, and customer experience optimization.',
      icon: '🛒',
      challenges: ['Customer Experience', 'Inventory Management', 'Digital Transformation']
    },
    {
      name: 'Energy & Utilities',
      description: 'Smart grid solutions, predictive maintenance, and sustainability monitoring.',
      icon: '⚡',
      challenges: ['Infrastructure Modernization', 'Sustainability Goals', 'Operational Efficiency']
    },
    {
      name: 'Government',
      description: 'Digital government services, cybersecurity, and citizen engagement platforms.',
      icon: '🏛️',
      challenges: ['Digital Transformation', 'Cybersecurity', 'Citizen Experience']
    }
  ];

  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs',
      icon: TrendingUp
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support',
      icon: Clock
    },
    {
      title: 'Global Deployment',
      description: 'Multi-region and multi-cloud support',
      icon: Globe
    }
  ];

  const implementationProcess = [
    {
      phase: 'Discovery',
      title: 'Requirements Analysis',
      description: 'Deep dive into your business needs and technical requirements',
      duration: '2-3 weeks',
      deliverables: ['Business Requirements Document', 'Technical Specifications', 'Project Timeline']
    },
    {
      phase: 'Planning',
      title: 'Solution Design',
      description: 'Architect the optimal solution architecture and implementation plan',
      duration: '3-4 weeks',
      deliverables: ['Solution Architecture', 'Implementation Plan', 'Risk Assessment']
    },
    {
      phase: 'Development',
      title: 'Solution Build',
      description: 'Develop and configure the enterprise solution',
      duration: '8-16 weeks',
      deliverables: ['Core Solution', 'Integration Components', 'Documentation']
    },
    {
      phase: 'Testing',
      title: 'Quality Assurance',
      description: 'Comprehensive testing and validation',
      duration: '2-4 weeks',
      deliverables: ['Test Results', 'Performance Metrics', 'Security Validation']
    },
    {
      phase: 'Deployment',
      title: 'Go-Live',
      description: 'Production deployment and knowledge transfer',
      duration: '1-2 weeks',
      deliverables: ['Production System', 'Training Materials', 'Support Handover']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-zion-purple-light/20 p-4 rounded-full">
              <Building className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your enterprise with our comprehensive technology solutions. 
            From digital transformation to cloud migration, we deliver scalable, 
            secure, and innovative solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#solutions"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Explore Solutions
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Get Enterprise Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Enterprise Solutions Overview */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Solutions Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our enterprise solutions are designed to address complex business challenges 
              with scalable, secure, and innovative technology approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <div className="text-zion-cyan font-medium mb-4">{solution.price}</div>
                <ul className="text-left space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Services Portfolio */}
      <div id="solutions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Services Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of enterprise services designed to 
              accelerate your digital transformation journey.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['solutions', 'industries', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'solutions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enterpriseServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      {service.supportLevel === 'premium' && (
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Price:</span>
                        <span className="text-white font-bold">{service.currency}{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Delivery:</span>
                        <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Support:</span>
                        <span className="text-zion-slate-light text-sm capitalize">{service.supportLevel}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-zion-slate-light mb-4">{industry.description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Challenges:</h4>
                      <ul className="space-y-1">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                            <Target className="w-3 h-3 text-zion-cyan" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-zion-purple/20 p-3 rounded-full">
                        <feature.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-zion-slate-light">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Implementation Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven enterprise implementation methodology ensures successful 
              delivery with clear milestones and measurable outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm font-medium">
                        {phase.phase}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-4">{phase.description}</p>
                    <div className="flex items-center gap-1 text-zion-cyan text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      Duration: {phase.duration}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can drive innovation, 
            efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Schedule Enterprise Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsPage;