import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Shield, 
  Users, 
  BarChart3, 
  Lock, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export default function GovernmentSolutions() {
  const solutions = [
    {
      icon: Building2,
      title: "Digital Government",
      description: "Modern digital government platforms and citizen services",
      features: ["Citizen Portals", "Digital Services", "E-Government", "Service Automation"]
    },
    {
      icon: Shield,
      title: "Government Security",
      description: "Comprehensive cybersecurity and compliance solutions for government",
      features: ["FedRAMP Compliance", "Zero-Trust Security", "Data Protection", "Incident Response"]
    },
    {
      icon: Users,
      title: "Citizen Experience",
      description: "AI-powered citizen engagement and service delivery",
      features: ["Smart Chatbots", "Personalized Services", "Multi-channel Support", "Accessibility"]
    },
    {
      icon: BarChart3,
      title: "Government Analytics",
      description: "Advanced analytics and insights for government decision-making",
      features: ["Performance Metrics", "Data Visualization", "Predictive Analytics", "Reporting"]
    },
    {
      icon: Lock,
      title: "Compliance & Audit",
      description: "Automated compliance monitoring and regulatory reporting",
      features: ["Regulatory Compliance", "Audit Trails", "Risk Management", "Policy Enforcement"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation for government operations and workflows",
      features: ["Workflow Automation", "Document Processing", "Approval Systems", "Resource Management"]
    }
  ];

  const benefits = [
    "Improved citizen satisfaction and engagement",
    "Enhanced operational efficiency and cost savings",
    "Better compliance and risk management",
    "Increased transparency and accountability",
    "Faster service delivery and response times",
    "Enhanced data security and privacy protection"
  ];

  const caseStudies = [
    {
      organization: "State Government Agency",
      specialty: "Digital Services",
      challenge: "Outdated citizen services and long processing times",
      solution: "Implemented modern digital government platform with AI automation",
      results: "70% reduction in processing times, 85% improvement in citizen satisfaction"
    },
    {
      organization: "Federal Department",
      specialty: "Security & Compliance",
      challenge: "Cybersecurity vulnerabilities and compliance gaps",
      solution: "Comprehensive security framework with FedRAMP compliance",
      results: "100% compliance achievement, 90% reduction in security incidents"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Government Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Modernizing government with secure, compliant, and citizen-centric technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Government Quote
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Government Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From digital transformation to security compliance, we provide end-to-end government technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Government Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements in citizen services, operational efficiency, and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Government Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from government agencies using our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-400">{study.specialty}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{study.organization}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Solution:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Results:</h4>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Government?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our government solutions can improve citizen services, enhance security, and drive efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/services-overview"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}