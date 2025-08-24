import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, Code, Brain, Zap, CheckCircle, 
  ArrowRight, Star, TrendingUp, Lock, 
  Eye, AlertTriangle, Clock, Users, Globe
} from 'lucide-react';

const AIPoweredCodeReviewSecurityScanner2025 = () => {
  const features = [
    'AI-powered vulnerability detection',
    'Automated code quality analysis',
    'Security compliance checking',
    'CI/CD pipeline integration',
    'Real-time security alerts',
    'Code review automation',
    'Multi-language support',
    'Custom security rules',
    'API security scanning',
    'Container security analysis',
    'Dependency vulnerability scanning',
    'Compliance reporting'
  ];

  const benefits = [
    'Reduce security vulnerabilities by 85%',
    'Improve code quality by 60%',
    'Automate 90% of code review tasks',
    'Real-time security monitoring',
    'Compliance automation',
    'Faster development cycles',
    'Reduced security risks',
    'Cost-effective security solution'
  ];

  const useCases = [
    'Software development teams',
    'DevOps teams',
    'Security teams',
    'Startups',
    'Enterprise companies',
    'Financial services',
    'Healthcare organizations',
    'E-commerce platforms'
  ];

  const pricing = {
    starter: {
      price: '$149/month',
      features: [
        'Up to 10 repositories',
        'Basic vulnerability scanning',
        'Code quality analysis',
        'Email alerts',
        'Basic reporting',
        'Community support'
      ]
    },
    professional: {
      price: '$399/month',
      features: [
        'Up to 50 repositories',
        'Advanced vulnerability detection',
        'CI/CD integration',
        'Custom security rules',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ]
    },
    enterprise: {
      price: '$999/month',
      features: [
        'Unlimited repositories',
        'Full security suite',
        'Custom integrations',
        'Dedicated support',
        'Compliance automation',
        'Advanced threat intelligence',
        'White-label solutions',
        'SLA guarantees'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI-Powered Code Review & Security Scanner 2025 | Zion Tech Group"
        description="Intelligent code analysis with AI-powered security vulnerability detection and automated code review. Reduce security risks by 85% and automate 90% of code review tasks."
        keywords="AI code review, security scanner, vulnerability detection, automated testing, code quality, cybersecurity, DevOps security"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI & Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Code Review & 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Security Scanner
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Intelligent code analysis with AI-powered security vulnerability detection and automated code review. 
              Integrates with CI/CD pipelines for automated security scanning and compliance checking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Code Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform delivers unprecedented security improvements and development efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "85% Fewer Vulnerabilities", desc: "AI-powered detection catches security issues before they reach production" },
              { icon: Zap, title: "90% Automation", desc: "Automate the majority of code review tasks and security checks" },
              { icon: TrendingUp, title: "60% Better Quality", desc: "Improve overall code quality and maintainability" },
              { icon: Clock, title: "Real-time Monitoring", desc: "Continuous security monitoring with instant alerts" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to secure your codebase and maintain high code quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Development Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprise companies, our platform scales with your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 text-center"
              >
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and security requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, details], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-8 rounded-2xl backdrop-blur-xl border ${
                  plan === 'professional' 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">
                    {plan}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    {details.price}
                  </div>
                  {plan === 'professional' && (
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Leading Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of companies already securing their code with our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">$12.3B</div>
              <p className="text-gray-300">Market Size by 2025</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <p className="text-gray-300">Vulnerability Reduction</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <p className="text-gray-300">Task Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Code?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to learn more about how we can help secure your development process
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredCodeReviewSecurityScanner2025;