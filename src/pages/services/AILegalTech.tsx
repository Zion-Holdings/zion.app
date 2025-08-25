import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Search, 
  Brain, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  TrendingUp,
  Lock,
  Gavel
} from 'lucide-react';

const AILegalTech = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Document Review",
      description: "Advanced AI algorithms that automatically analyze legal documents, contracts, and case files for key information and risks."
    },
    {
      icon: Search,
      title: "Intelligent Legal Research",
      description: "AI-driven legal research tools that quickly find relevant case law, statutes, and precedents across multiple jurisdictions."
    },
    {
      icon: FileText,
      title: "Contract Analysis & Generation",
      description: "Automated contract review, risk assessment, and intelligent contract generation with customizable templates."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time compliance tracking and automated alerts for regulatory changes and compliance requirements."
    },
    {
      icon: Zap,
      title: "Legal Process Automation",
      description: "Streamline repetitive legal tasks, document workflows, and case management processes with AI automation."
    },
    {
      icon: Lock,
      title: "Secure Document Management",
      description: "Enterprise-grade security with encryption, access controls, and audit trails for sensitive legal documents."
    }
  ];

  const useCases = [
    {
      title: "Contract Management",
      description: "Automate contract lifecycle management from creation to renewal with AI-powered risk assessment.",
      icon: FileText
    },
    {
      title: "Due Diligence",
      description: "Accelerate due diligence processes with AI-powered document analysis and risk identification.",
      icon: Search
    },
    {
      title: "Legal Research",
      description: "Reduce research time with AI tools that quickly find relevant legal precedents and case law.",
      icon: Brain
    },
    {
      title: "Compliance & Risk",
      description: "Monitor regulatory changes and identify compliance risks with automated AI systems.",
      icon: Shield
    }
  ];

  const benefits = [
    "Reduce legal document review time by 70-90%",
    "Improve contract accuracy and risk identification",
    "Accelerate due diligence processes",
    "Reduce legal research costs by 50-80%",
    "Enhance compliance monitoring and reporting",
    "Improve client service and response times"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                AI Legal Tech
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform legal practice with AI-powered tools that streamline processes and enhance decision-making
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Legal Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes legal practice with intelligent automation and advanced analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Technology Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming legal practice across different practice areas and firm sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Legal Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice from manual processes to intelligent, automated systems that scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking law firms using AI to deliver better client service and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Services</h3>
            <p className="text-gray-300">Discover our complete range of AI and technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services/ai-business-intelligence" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI Business Intelligence</h4>
                    <p className="text-gray-300 text-sm">Transform data into actionable insights</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-marketing-automation" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI Marketing Automation</h4>
                    <p className="text-gray-300 text-sm">Automate marketing with AI intelligence</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-hr-recruitment" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI HR & Recruitment</h4>
                    <p className="text-gray-300 text-sm">Revolutionize talent acquisition and management</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILegalTech;