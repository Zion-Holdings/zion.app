import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Eye, 
  Factory, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Systems",
      description: "Build intelligent systems that operate independently and make decisions in real-time.",
      features: ["Self-learning algorithms", "Predictive analytics", "Automated decision making"],
      path: "/ai-autonomous-systems"
    },
    {
      icon: TrendingUp,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Real-time dashboards", "Predictive modeling", "Performance optimization"],
      path: "/ai-business-intelligence"
    },
    {
      icon: Code,
      title: "AI Code Generation",
      description: "Accelerate development with AI-powered code generation and review tools.",
      features: ["Automated coding", "Code review", "Bug detection"],
      path: "/ai-code-generation"
    },
    {
      icon: Eye,
      title: "AI Computer Vision",
      description: "Implement advanced computer vision solutions for image and video analysis.",
      features: ["Object detection", "Facial recognition", "Quality control"],
      path: "/ai-computer-vision"
    },
    {
      icon: Users,
      title: "AI Healthcare Solutions",
      description: "Revolutionize healthcare with AI-powered diagnostic and treatment systems.",
      features: ["Medical imaging", "Patient monitoring", "Drug discovery"],
      path: "/ai-healthcare-solutions"
    },
    {
      icon: Shield,
      title: "AI Compliance Automation",
      description: "Ensure regulatory compliance with intelligent automation and monitoring.",
      features: ["Risk assessment", "Compliance monitoring", "Audit trails"],
      path: "/ai-compliance-automation"
    }
  ];

  const benefits = [
    "Increased operational efficiency",
    "Reduced human error",
    "24/7 availability",
    "Scalable solutions",
    "Cost optimization",
    "Competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Tomorrow's Challenges
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your business operations, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            From autonomous systems to specialized industry solutions, we provide end-to-end AI services 
            that drive innovation and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
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
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light">
              Experience the transformative power of AI with our proven approach and expertise.
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

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals and stay ahead of the competition.
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

export default AIServices;